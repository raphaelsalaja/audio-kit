"use client";

import {
  ALL_FORMATS,
  BlobSource,
  BufferTarget,
  CanvasSource,
  Input,
  Mp4OutputFormat,
  Output,
  QUALITY_HIGH,
  type Quality,
  type VideoCodec,
  VideoSampleSink,
  WebMOutputFormat,
} from "mediabunny";
import {
  ASPECT_RATIOS,
  type BackgroundStyle,
  type CursorSample,
  type CursorStyle,
  type CursorTrack,
  type EditState,
  type NormalizedRect,
  type RecorderOutputOptions,
  type RecordingResult,
} from "./types";

const RIPPLE_DURATION_MS = 600;
const CURSOR_GAP_MS = 250;

function sampleCursorAt(
  samples: CursorSample[],
  tMs: number,
): { x: number; y: number } | null {
  if (samples.length === 0) return null;
  let lo = 0;
  let hi = samples.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (samples[mid].tMs < tMs) lo = mid + 1;
    else hi = mid;
  }
  const after = samples[lo];
  const before = lo > 0 ? samples[lo - 1] : null;
  if (!before) {
    return Math.abs(after.tMs - tMs) <= CURSOR_GAP_MS
      ? { x: after.x, y: after.y }
      : null;
  }
  if (after.tMs < tMs) {
    return tMs - after.tMs <= CURSOR_GAP_MS ? { x: after.x, y: after.y } : null;
  }
  if (before.tMs > tMs) {
    return before.tMs - tMs <= CURSOR_GAP_MS
      ? { x: before.x, y: before.y }
      : null;
  }
  const span = after.tMs - before.tMs;
  if (span <= 0) return { x: after.x, y: after.y };
  if (span > CURSOR_GAP_MS * 2) return null;
  const t = (tMs - before.tMs) / span;
  return {
    x: before.x + (after.x - before.x) * t,
    y: before.y + (after.y - before.y) * t,
  };
}

function projectInCrop(
  xNorm: number,
  yNorm: number,
  crop: NormalizedRect | null,
  cropPxW: number,
  cropPxH: number,
): { x: number; y: number; visible: boolean } {
  const cx = crop?.x ?? 0;
  const cy = crop?.y ?? 0;
  const cw = crop?.width ?? 1;
  const ch = crop?.height ?? 1;
  const u = (xNorm - cx) / cw;
  const v = (yNorm - cy) / ch;
  return {
    x: u * cropPxW,
    y: v * cropPxH,
    visible: u >= 0 && u <= 1 && v >= 0 && v <= 1,
  };
}

function drawCursorSprite(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.shadowColor = "rgba(0,0,0,0.45)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetY = 1;
  ctx.beginPath();
  ctx.moveTo(3, 2);
  ctx.lineTo(3, 18);
  ctx.lineTo(7.5, 13.5);
  ctx.lineTo(10.5, 20);
  ctx.lineTo(13, 18.8);
  ctx.lineTo(10, 12.5);
  ctx.lineTo(16, 12.5);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#000";
  ctx.lineJoin = "round";
  ctx.stroke();
  ctx.restore();
}

function drawClickRipple(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  progress: number,
  color: string,
  maxRadius: number,
): void {
  // Cubic-out easing approximates the spring's settle without overshoot —
  // close enough visually that the export matches the preview at a glance.
  const eased = 1 - (1 - progress) ** 3;
  const ringRadius = eased * maxRadius * 1.6;
  const alpha =
    progress < 0.2
      ? (progress / 0.2) * 0.7
      : Math.max(0, 0.7 * (1 - (progress - 0.2) / 0.8));

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, ringRadius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.globalAlpha = alpha * 0.5;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, maxRadius * 0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawCursorOverlay(
  ctx: CanvasRenderingContext2D,
  cursor: CursorTrack,
  style: CursorStyle,
  tNowMs: number,
  videoX: number,
  videoY: number,
  cropPxW: number,
  cropPxH: number,
  crop: NormalizedRect | null,
): void {
  if (style.showClicks) {
    const maxRadius = Math.max(28, Math.min(cropPxW, cropPxH) * 0.06);
    for (const click of cursor.clicks) {
      const dt = tNowMs - click.tMs;
      if (dt < 0 || dt > RIPPLE_DURATION_MS) continue;
      const proj = projectInCrop(click.x, click.y, crop, cropPxW, cropPxH);
      if (!proj.visible) continue;
      drawClickRipple(
        ctx,
        videoX + proj.x,
        videoY + proj.y,
        dt / RIPPLE_DURATION_MS,
        style.rippleColor,
        maxRadius,
      );
    }
  }

  if (style.show) {
    const pos = sampleCursorAt(cursor.samples, tNowMs);
    if (pos) {
      const proj = projectInCrop(pos.x, pos.y, crop, cropPxW, cropPxH);
      if (proj.visible) {
        drawCursorSprite(
          ctx,
          videoX + proj.x,
          videoY + proj.y,
          style.cursorColor,
        );
      }
    }
  }
}

export type RenderProgress = {
  /** 0 to 1, fraction of trimmed range processed. */
  progress: number;
  /** Frame index currently being processed. */
  frame: number;
};

type ResolvedRenderConfig = {
  format: WebMOutputFormat | Mp4OutputFormat;
  codec: VideoCodec;
  bitrate: number | Quality;
  mimeType: string;
};

function resolveRenderConfig(
  options: RecorderOutputOptions | undefined,
): ResolvedRenderConfig {
  const container = options?.container ?? "webm";
  const codec: VideoCodec =
    options?.codec ?? (container === "mp4" ? "avc" : "vp9");
  const bitrate: number | Quality = options?.bitrate ?? QUALITY_HIGH;
  if (container === "mp4") {
    const format = new Mp4OutputFormat();
    return { format, codec, bitrate, mimeType: format.mimeType };
  }
  const format = new WebMOutputFormat();
  return { format, codec, bitrate, mimeType: format.mimeType };
}

const evenize = (n: number) => Math.max(2, Math.round(n / 2) * 2);

/**
 * Computes the styled output canvas dimensions given the visible video
 * dimensions and the frame style. This mirrors `computeFrameRect` from the
 * picker layer but operates in pixel space (no DOM dependencies) so it can be
 * driven by raw decoded sample sizes during the render pass.
 */
function computeStyledDims(
  visibleW: number,
  visibleH: number,
  frame: EditState["frame"],
): { canvasW: number; canvasH: number; videoX: number; videoY: number } {
  const pad = frame.padding;
  let canvasW = visibleW + pad * 2;
  let canvasH = visibleH + pad * 2;
  let videoX = pad;
  let videoY = pad;

  const ratio = ASPECT_RATIOS[frame.aspect];
  if (ratio) {
    const current = canvasW / canvasH;
    if (current > ratio) {
      const newH = canvasW / ratio;
      videoY += (newH - canvasH) / 2;
      canvasH = newH;
    } else if (current < ratio) {
      const newW = canvasH * ratio;
      videoX += (newW - canvasW) / 2;
      canvasW = newW;
    }
  }

  return { canvasW, canvasH, videoX, videoY };
}

function backgroundToCanvas(
  ctx: CanvasRenderingContext2D,
  bg: BackgroundStyle,
  w: number,
  h: number,
): void {
  switch (bg.kind) {
    case "transparent":
      ctx.clearRect(0, 0, w, h);
      return;
    case "solid":
      ctx.fillStyle = bg.color;
      ctx.fillRect(0, 0, w, h);
      return;
    case "gradient": {
      const angle = ((bg.angle - 90) * Math.PI) / 180;
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.hypot(w, h) / 2;
      const x0 = cx - Math.cos(angle) * r;
      const y0 = cy - Math.sin(angle) * r;
      const x1 = cx + Math.cos(angle) * r;
      const y1 = cy + Math.sin(angle) * r;
      const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
      gradient.addColorStop(0, bg.from);
      gradient.addColorStop(1, bg.to);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
      return;
    }
  }
}

/**
 * Approximate the CSS box-shadow from `SHADOW_VALUES` using the canvas shadow
 * API. We can't perfectly replicate two-layer CSS shadows, so we fall back to
 * the "primary" (largest blur) shadow of each preset.
 */
const SHADOW_CANVAS: Record<
  string,
  { color: string; blur: number; offsetY: number } | null
> = {
  none: null,
  sm: { color: "rgba(0,0,0,0.10)", blur: 4, offsetY: 1 },
  md: { color: "rgba(0,0,0,0.14)", blur: 8, offsetY: 4 },
  lg: { color: "rgba(0,0,0,0.18)", blur: 24, offsetY: 12 },
  xl: { color: "rgba(0,0,0,0.22)", blur: 48, offsetY: 24 },
};

function applyRoundedClip(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
): void {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

/**
 * Re-encodes the recording with the user's edits baked in. Returns a brand
 * new {@link RecordingResult}. The original blob is left untouched.
 */
export async function renderEdit(
  source: RecordingResult,
  edits: EditState,
  outputOptions: RecorderOutputOptions | undefined,
  onProgress?: (p: RenderProgress) => void,
): Promise<RecordingResult> {
  const cfg = resolveRenderConfig(outputOptions);

  const input = new Input({
    source: new BlobSource(source.blob),
    formats: ALL_FORMATS,
  });

  try {
    const videoTrack = await input.getPrimaryVideoTrack();
    if (!videoTrack) throw new Error("Recording has no video track");

    const inputDuration = await input.computeDuration();
    const startSec = Math.max(0, edits.trim.startMs / 1000);
    const endSec = Math.min(inputDuration, edits.trim.endMs / 1000);
    if (endSec <= startSec) throw new Error("Trim range is empty");

    const srcW = videoTrack.displayWidth;
    const srcH = videoTrack.displayHeight;

    const cropPxX = edits.crop ? edits.crop.x * srcW : 0;
    const cropPxY = edits.crop ? edits.crop.y * srcH : 0;
    const cropPxW = edits.crop ? edits.crop.width * srcW : srcW;
    const cropPxH = edits.crop ? edits.crop.height * srcH : srcH;

    const { canvasW, canvasH, videoX, videoY } = computeStyledDims(
      cropPxW,
      cropPxH,
      edits.frame,
    );

    const canvas = document.createElement("canvas");
    canvas.width = evenize(canvasW);
    canvas.height = evenize(canvasH);
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) throw new Error("2D canvas context unavailable");

    const output = new Output({
      target: new BufferTarget(),
      format: cfg.format,
    });

    let packetCount = 0;
    const sourceTrack = new CanvasSource(canvas, {
      codec: cfg.codec,
      bitrate: cfg.bitrate,
      onEncodedPacket: () => {
        packetCount++;
      },
    });

    const targetFps = 60;
    output.addVideoTrack(sourceTrack, { frameRate: targetFps });
    await output.start();

    const sink = new VideoSampleSink(videoTrack);
    const speed = Math.max(0.1, edits.speed);
    const trimDurationSec = endSec - startSec;
    const outputDurationSec = trimDurationSec / speed;

    let outTimestamp = 0;
    let frameIndex = 0;

    for await (const sample of sink.samples(startSec, endSec)) {
      try {
        backgroundToCanvas(
          ctx,
          edits.frame.background,
          canvas.width,
          canvas.height,
        );

        ctx.save();

        const shadow =
          SHADOW_CANVAS[edits.frame.shadow as keyof typeof SHADOW_CANVAS] ??
          null;
        if (shadow) {
          ctx.shadowColor = shadow.color;
          ctx.shadowBlur = shadow.blur;
          ctx.shadowOffsetY = shadow.offsetY;
        }

        const drawX = videoX;
        const drawY = videoY;
        const drawW = cropPxW;
        const drawH = cropPxH;

        if (edits.frame.radius > 0) {
          applyRoundedClip(ctx, drawX, drawY, drawW, drawH, edits.frame.radius);
          ctx.fillStyle = "rgba(0,0,0,0)";
          ctx.fill();
          ctx.shadowColor = "transparent";
          ctx.clip();
        } else {
          ctx.shadowColor = "transparent";
        }

        sample.draw(
          ctx,
          cropPxX,
          cropPxY,
          cropPxW,
          cropPxH,
          drawX,
          drawY,
          drawW,
          drawH,
        );

        ctx.restore();

        if (edits.frame.borderWidth > 0) {
          ctx.save();
          ctx.lineWidth = edits.frame.borderWidth;
          ctx.strokeStyle = edits.frame.borderColor;
          if (edits.frame.radius > 0) {
            applyRoundedClip(
              ctx,
              drawX,
              drawY,
              drawW,
              drawH,
              edits.frame.radius,
            );
            ctx.stroke();
          } else {
            ctx.strokeRect(drawX, drawY, drawW, drawH);
          }
          ctx.restore();
        }

        // Cursor + ripples are drawn into the same rounded clip region as the
        // video so they stay glued to source pixels.
        ctx.save();
        if (edits.frame.radius > 0) {
          applyRoundedClip(ctx, drawX, drawY, drawW, drawH, edits.frame.radius);
          ctx.clip();
        }
        drawCursorOverlay(
          ctx,
          source.cursorTrack,
          edits.cursor,
          sample.timestamp * 1000,
          drawX,
          drawY,
          cropPxW,
          cropPxH,
          edits.crop,
        );
        ctx.restore();

        const sampleDur = Math.max(
          1 / targetFps,
          sample.duration || 1 / targetFps,
        );
        await sourceTrack.add(outTimestamp, sampleDur / speed);
        outTimestamp += sampleDur / speed;

        frameIndex++;
        const elapsed = (sample.timestamp - startSec) / trimDurationSec;
        onProgress?.({
          progress: Math.max(0, Math.min(1, elapsed)),
          frame: frameIndex,
        });
      } finally {
        sample.close();
      }
    }

    sourceTrack.close();
    await output.finalize();

    const buffer = output.target.buffer;
    const blob = buffer
      ? new Blob([buffer], { type: cfg.mimeType })
      : new Blob([], { type: cfg.mimeType });

    onProgress?.({ progress: 1, frame: frameIndex });

    console.info("[recorder] render complete", {
      bytes: blob.size,
      packets: packetCount,
      frames: frameIndex,
      width: canvas.width,
      height: canvas.height,
      outDurationSec: outputDurationSec,
    });

    return {
      blob,
      url: URL.createObjectURL(blob),
      mimeType: cfg.mimeType,
      durationMs: outputDurationSec * 1000,
      width: canvas.width,
      height: canvas.height,
      // Cursor data is already burned into the rendered video pixels; the
      // exported result has no further cursor track to overlay.
      cursorTrack: { samples: [], clicks: [] },
    };
  } finally {
    input.dispose();
  }
}
