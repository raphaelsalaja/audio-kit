import {
  BufferTarget,
  CanvasSource,
  MediaStreamVideoTrackSource,
  Mp4OutputFormat,
  Output,
  QUALITY_HIGH,
  type Quality,
  type VideoCodec,
  WebMOutputFormat,
} from "mediabunny";
import {
  type CursorClick,
  type CursorSample,
  type CursorTrack,
  EMPTY_CURSOR_TRACK,
  type RecordingResult,
  type Rect,
} from "./types";

export type RecorderContainer = "mp4" | "webm";
export type RecorderVideoCodec = Extract<VideoCodec, "avc" | "vp9" | "vp8">;

export type CaptureConfig = {
  container?: RecorderContainer;
  codec?: RecorderVideoCodec;
  bitrate?: number | Quality;
  /**
   * Region Capture (CropTarget.fromElement) is hardware-accelerated but only
   * works in Chromium and has been observed to silently produce empty packets
   * when paired with mediabunny's MediaStreamVideoTrackSource. The canvas
   * crop path is slower but deterministic and works in every browser that
   * supports WebCodecs.
   */
  preferRegionCapture?: boolean;
};

type ResolvedConfig = {
  container: RecorderContainer;
  codec: RecorderVideoCodec;
  bitrate: number | Quality;
  format: Mp4OutputFormat | WebMOutputFormat;
};

function resolveConfig(cfg?: CaptureConfig): ResolvedConfig {
  /**
   * Default to WebM + VP9: this is what the mediabunny docs use for
   * MediaStreamVideoTrackSource and is the most forgiving combo for
   * arbitrary getDisplayMedia frame sizes. AVC requires even dimensions and
   * a constrained profile; with cropped tab capture that often silently
   * fails to encode anything.
   */
  const container = cfg?.container ?? "webm";
  const codec: RecorderVideoCodec =
    cfg?.codec ?? (container === "mp4" ? "avc" : "vp9");
  const bitrate = cfg?.bitrate ?? QUALITY_HIGH;
  const format =
    container === "mp4" ? new Mp4OutputFormat() : new WebMOutputFormat();
  return { container, codec, bitrate, format };
}

export function supportsRegionCapture(): boolean {
  if (typeof window === "undefined") return false;
  const w = window as unknown as { CropTarget?: unknown };
  if (
    !w.CropTarget ||
    typeof (w.CropTarget as { fromElement?: unknown }).fromElement !==
      "function"
  ) {
    return false;
  }
  const proto = (
    window as unknown as {
      BrowserCaptureMediaStreamTrack?: { prototype?: Record<string, unknown> };
    }
  ).BrowserCaptureMediaStreamTrack?.prototype;
  return Boolean(proto && "cropTo" in proto);
}

type CropTargetLike = unknown;

type RegionCaptureTrack = MediaStreamTrack & {
  cropTo: (target: CropTargetLike | null) => Promise<void>;
};

async function cropTrackToElement(
  track: MediaStreamTrack,
  el: HTMLElement,
): Promise<void> {
  const Ctor = (
    window as unknown as {
      CropTarget: { fromElement: (el: Element) => Promise<CropTargetLike> };
    }
  ).CropTarget;
  const target = await Ctor.fromElement(el);
  await (track as RegionCaptureTrack).cropTo(target);
}

export type RecordingSession = {
  stop: () => Promise<RecordingResult>;
  cancel: () => void;
  stream: MediaStream;
  mode: "region-capture" | "canvas-crop";
};

type GetDisplayMediaOptions = {
  video?: MediaTrackConstraints & {
    displaySurface?: "browser" | "window" | "monitor";
  };
  audio?: boolean;
  preferCurrentTab?: boolean;
  selfBrowserSurface?: "include" | "exclude";
  surfaceSwitching?: "include" | "exclude";
  systemAudio?: "include" | "exclude";
};

async function requestDisplayStream(): Promise<MediaStream> {
  const opts: GetDisplayMediaOptions = {
    video: { displaySurface: "browser" },
    audio: false,
    preferCurrentTab: true,
    selfBrowserSurface: "include",
    surfaceSwitching: "exclude",
  };
  return navigator.mediaDevices.getDisplayMedia(
    opts as unknown as DisplayMediaStreamOptions,
  );
}

type CursorRecorder = {
  stop: () => CursorTrack;
  cancel: () => void;
};

/**
 * Listens to document-level pointer events for the duration of a recording
 * and produces a {@link CursorTrack}. Coordinates are normalized to the
 * captured region's current rect so they survive any downstream resizing.
 *
 * Only events that fall inside the captured rect are recorded — if the user
 * mouses outside the recorded element, those samples are discarded. This is
 * intentional: the captured video doesn't include those pixels either.
 */
function createCursorRecorder(getRect: () => Rect): CursorRecorder {
  const samples: CursorSample[] = [];
  const clicks: CursorClick[] = [];
  const startedAt = performance.now();

  let pending: { clientX: number; clientY: number; tMs: number } | null = null;
  let rafId = 0;
  let active = true;

  const project = (
    clientX: number,
    clientY: number,
  ): { x: number; y: number } | null => {
    const rect = getRect();
    if (rect.width <= 0 || rect.height <= 0) return null;
    const x = (clientX - rect.x) / rect.width;
    const y = (clientY - rect.y) / rect.height;
    if (x < 0 || x > 1 || y < 0 || y > 1) return null;
    return { x, y };
  };

  const flush = () => {
    rafId = 0;
    if (!pending || !active) return;
    const { clientX, clientY, tMs } = pending;
    pending = null;
    const proj = project(clientX, clientY);
    if (proj) samples.push({ tMs, x: proj.x, y: proj.y });
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!active) return;
    pending = {
      clientX: e.clientX,
      clientY: e.clientY,
      tMs: performance.now() - startedAt,
    };
    if (!rafId) rafId = window.requestAnimationFrame(flush);
  };

  const onPointerDown = (e: PointerEvent) => {
    if (!active) return;
    const proj = project(e.clientX, e.clientY);
    if (!proj) return;
    clicks.push({
      tMs: performance.now() - startedAt,
      x: proj.x,
      y: proj.y,
      button: e.button,
    });
  };

  document.addEventListener("pointermove", onPointerMove, { passive: true });
  document.addEventListener("pointerdown", onPointerDown, {
    passive: true,
    capture: true,
  });

  const teardown = () => {
    active = false;
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerdown", onPointerDown, {
      capture: true,
    } as EventListenerOptions);
  };

  return {
    stop() {
      teardown();
      return { samples, clicks };
    },
    cancel() {
      teardown();
    },
  };
}

/**
 * Wraps a {@link RecordingSession} so its `stop()` resolved value also
 * carries the `CursorTrack` produced by the supplied cursor recorder.
 */
function attachCursorTrack(
  session: RecordingSession,
  cursor: CursorRecorder,
): RecordingSession {
  return {
    ...session,
    cancel() {
      cursor.cancel();
      session.cancel();
    },
    async stop() {
      const track = cursor.stop();
      const result = await session.stop();
      return { ...result, cursorTrack: track };
    },
  };
}

/**
 * Start recording the given element. Uses Region Capture
 * (CropTarget.fromElement) when available, otherwise falls back to capturing
 * the current tab and cropping frames through a canvas. Output is routed
 * through Mediabunny so the produced file is valid and seekable from byte 0.
 */
export async function startRecording(
  frameEl: HTMLElement,
  getRect: () => Rect,
  config?: CaptureConfig,
): Promise<RecordingSession> {
  const displayStream = await requestDisplayStream();
  const [videoTrack] = displayStream.getVideoTracks();
  if (!videoTrack) {
    for (const t of displayStream.getTracks()) t.stop();
    throw new Error("No video track from getDisplayMedia");
  }

  const resolved = resolveConfig(config);
  const cursor = createCursorRecorder(getRect);

  if (config?.preferRegionCapture && supportsRegionCapture()) {
    try {
      await cropTrackToElement(videoTrack, frameEl);
      const session = await startRegionCaptureRecording(
        displayStream,
        videoTrack,
        resolved,
      );
      return attachCursorTrack(session, cursor);
    } catch (err) {
      console.warn(
        "[recorder] Region Capture failed, falling back to canvas crop",
        err,
      );
    }
  }

  const session = await startCanvasCropRecording(
    displayStream,
    getRect,
    resolved,
  );
  return attachCursorTrack(session, cursor);
}

async function startRegionCaptureRecording(
  stream: MediaStream,
  videoTrack: MediaStreamTrack,
  cfg: ResolvedConfig,
): Promise<RecordingSession> {
  const output = new Output({ target: new BufferTarget(), format: cfg.format });
  let encWidth = 0;
  let encHeight = 0;
  let packetCount = 0;
  const source = new MediaStreamVideoTrackSource(
    videoTrack as MediaStreamVideoTrack,
    {
      codec: cfg.codec,
      bitrate: cfg.bitrate,
      sizeChangeBehavior: "contain",
      onEncoderConfig: (config) => {
        encWidth = config.width;
        encHeight = config.height;
        console.info("[recorder] encoder config", config);
      },
      onEncodedPacket: () => {
        packetCount++;
      },
    },
  );
  output.addVideoTrack(source);

  let encoderError: unknown = null;
  source.errorPromise.catch((err) => {
    encoderError = err;
    console.error("[recorder] encoder error (region)", err);
    output.cancel().catch(() => {});
  });

  await output.start();
  const startedAt = performance.now();

  const cleanup = () => {
    for (const t of stream.getTracks()) t.stop();
  };

  return {
    stream,
    mode: "region-capture",
    cancel() {
      output.cancel().catch(() => {});
      cleanup();
    },
    async stop() {
      const fallbackSettings = videoTrack.getSettings();
      try {
        await output.finalize();
      } catch (err) {
        cleanup();
        throw err;
      }
      cleanup();
      if (encoderError) throw encoderError;
      const buffer = output.target.buffer;
      const mimeType = output.format.mimeType;
      const blob = buffer
        ? new Blob([buffer], { type: mimeType })
        : new Blob([], { type: mimeType });
      const result: RecordingResult = {
        blob,
        url: URL.createObjectURL(blob),
        mimeType,
        durationMs: performance.now() - startedAt,
        width: encWidth || fallbackSettings?.width || 0,
        height: encHeight || fallbackSettings?.height || 0,
        cursorTrack: EMPTY_CURSOR_TRACK,
      };
      console.info("[recorder] region recording complete", {
        bytes: blob.size,
        packets: packetCount,
        ...result,
      });
      return result;
    },
  };
}

async function startCanvasCropRecording(
  displayStream: MediaStream,
  getRect: () => Rect,
  cfg: ResolvedConfig,
): Promise<RecordingSession> {
  const video = document.createElement("video");
  video.srcObject = displayStream;
  video.muted = true;
  video.playsInline = true;
  await video.play().catch(() => {});

  /**
   * Wait for the first real frame from the screen-share stream. Without this,
   * drawImage(video, ...) can run while video.videoWidth/Height are still 0,
   * which silently writes nothing to the canvas and produces an empty file.
   */
  if (video.videoWidth === 0 || video.videoHeight === 0) {
    await new Promise<void>((resolve) => {
      const onReady = () => {
        video.removeEventListener("loadeddata", onReady);
        video.removeEventListener("playing", onReady);
        resolve();
      };
      video.addEventListener("loadeddata", onReady);
      video.addEventListener("playing", onReady);
      setTimeout(resolve, 1500);
    });
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    for (const t of displayStream.getTracks()) t.stop();
    throw new Error("2D canvas context unavailable");
  }

  const dpr = window.devicePixelRatio || 1;
  const scaleX = () => {
    const settings = displayStream.getVideoTracks()[0]?.getSettings();
    if (!settings?.width) return dpr;
    return settings.width / window.innerWidth;
  };
  const scaleY = () => {
    const settings = displayStream.getVideoTracks()[0]?.getSettings();
    if (!settings?.height) return dpr;
    return settings.height / window.innerHeight;
  };

  /**
   * Lock the canvas dimensions to the target rect's size at start-of-record.
   * Mediabunny's CanvasSource captures VideoFrames at `add` time, and MP4
   * tracks require a fixed frame size, so we normalize by drawing into a
   * fixed-size canvas and letting the rect's current size map onto it.
   */
  const initialRect = getRect();
  const evenize = (n: number) => Math.max(2, Math.round(n / 2) * 2);
  const physW = evenize(initialRect.width * scaleX());
  const physH = evenize(initialRect.height * scaleY());
  canvas.width = physW;
  canvas.height = physH;

  const output = new Output({ target: new BufferTarget(), format: cfg.format });
  let packetCount = 0;
  const source = new CanvasSource(canvas, {
    codec: cfg.codec,
    bitrate: cfg.bitrate,
    onEncoderConfig: (config) => {
      console.info("[recorder] encoder config (canvas)", config);
    },
    onEncodedPacket: () => {
      packetCount++;
    },
  });
  const targetFps = 60;
  output.addVideoTrack(source, { frameRate: targetFps });
  await output.start();

  const startedAt = performance.now();
  let running = true;
  let rafId = 0;

  const tick = async () => {
    if (!running) return;
    const rect = getRect();
    const sx = scaleX();
    const sy = scaleY();

    try {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        video,
        Math.max(0, rect.x * sx),
        Math.max(0, rect.y * sy),
        Math.max(1, rect.width * sx),
        Math.max(1, rect.height * sy),
        0,
        0,
        canvas.width,
        canvas.height,
      );
    } catch {}

    const timestamp = (performance.now() - startedAt) / 1000;
    try {
      await source.add(timestamp, 1 / targetFps);
    } catch (err) {
      if (running) console.error("[recorder] canvas source add failed", err);
    }

    if (running) rafId = window.requestAnimationFrame(tick);
  };
  rafId = window.requestAnimationFrame(tick);

  const cleanup = () => {
    running = false;
    window.cancelAnimationFrame(rafId);
    for (const t of displayStream.getTracks()) t.stop();
    video.srcObject = null;
  };

  return {
    stream: displayStream,
    mode: "canvas-crop",
    cancel() {
      cleanup();
      output.cancel().catch(() => {});
    },
    async stop() {
      cleanup();
      source.close();
      await output.finalize();
      const buffer = output.target.buffer;
      const mimeType = output.format.mimeType;
      const blob = buffer
        ? new Blob([buffer], { type: mimeType })
        : new Blob([], { type: mimeType });
      const result: RecordingResult = {
        blob,
        url: URL.createObjectURL(blob),
        mimeType,
        durationMs: performance.now() - startedAt,
        width: canvas.width,
        height: canvas.height,
        cursorTrack: EMPTY_CURSOR_TRACK,
      };
      console.info("[recorder] canvas recording complete", {
        bytes: blob.size,
        packets: packetCount,
        ...result,
      });
      return result;
    },
  };
}
