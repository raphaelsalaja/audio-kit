"use client";

import { Player, type PlayerRef } from "@remotion/player";
import {
  type CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { OVERLAY_ATTR } from "../picker";
import { type RenderProgress, renderEdit } from "../render";
import {
  type AspectRatio,
  type BackgroundStyle,
  type CursorStyle,
  DEFAULT_CURSOR_STYLE,
  DEFAULT_FRAME_STYLE,
  type EditState,
  type FrameStyle,
  type RecorderOutputOptions,
  type RecordingResult,
  type ShadowPreset,
} from "../types";
import { CropOverlay } from "./crop-overlay";
import styles from "./editor.module.css";
import {
  computeCompositionLayout,
  RecordingComposition,
  type RecordingCompositionProps,
} from "./recording-composition";
import { Timeline } from "./timeline";

type EditorProps = {
  result: RecordingResult;
  outputOptions?: RecorderOutputOptions;
  onDiscard: () => void;
  onRecordAgain: () => void;
};

const FPS = 60;
const ASPECTS: AspectRatio[] = ["free", "16:9", "4:3", "1:1"];
const SHADOWS: ShadowPreset[] = ["none", "sm", "md", "lg", "xl"];
const SPEEDS = [0.25, 0.5, 1, 1.5, 2, 4];

const BACKGROUND_PRESETS: { label: string; value: BackgroundStyle }[] = [
  { label: "Transparent", value: { kind: "transparent" } },
  { label: "White", value: { kind: "solid", color: "#ffffff" } },
  { label: "Light", value: { kind: "solid", color: "#f4f4f5" } },
  { label: "Dark", value: { kind: "solid", color: "#0a0a0a" } },
  {
    label: "Sunset",
    value: { kind: "gradient", from: "#fb7185", to: "#fbbf24", angle: 135 },
  },
  {
    label: "Ocean",
    value: { kind: "gradient", from: "#38bdf8", to: "#6366f1", angle: 135 },
  },
  {
    label: "Mint",
    value: { kind: "gradient", from: "#34d399", to: "#0ea5e9", angle: 135 },
  },
];

function backgroundEquals(a: BackgroundStyle, b: BackgroundStyle): boolean {
  if (a.kind !== b.kind) return false;
  if (a.kind === "transparent") return true;
  if (a.kind === "solid" && b.kind === "solid") return a.color === b.color;
  if (a.kind === "gradient" && b.kind === "gradient") {
    return a.from === b.from && a.to === b.to && a.angle === b.angle;
  }
  return false;
}

function backgroundSwatchStyle(bg: BackgroundStyle): CSSProperties {
  switch (bg.kind) {
    case "transparent":
      return {};
    case "solid":
      return { background: bg.color };
    case "gradient":
      return {
        background: `linear-gradient(${bg.angle}deg, ${bg.from}, ${bg.to})`,
      };
  }
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDuration(ms: number): string {
  const s = Math.round(ms / 100) / 10;
  return `${s.toFixed(1)}s`;
}

function extensionFor(mime: string): string {
  if (mime.includes("mp4")) return "mp4";
  if (mime.includes("webm")) return "webm";
  return "mp4";
}

export function Editor({
  result,
  outputOptions,
  onDiscard,
  onRecordAgain,
}: EditorProps) {
  const overlayProps = { [OVERLAY_ATTR]: "" };
  const playerRef = useRef<PlayerRef | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const [edits, setEdits] = useState<EditState>({
    trim: { startMs: 0, endMs: result.durationMs },
    speed: 1,
    crop: null,
    frame: { ...DEFAULT_FRAME_STYLE, padding: 0, spotlight: false },
    cursor: { ...DEFAULT_CURSOR_STYLE },
  });

  const [currentMs, setCurrentMs] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [rendering, setRendering] = useState(false);
  const [renderProgress, setRenderProgress] = useState<RenderProgress | null>(
    null,
  );
  const [renderError, setRenderError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"frame" | "trim" | "crop">(
    "frame",
  );

  const layout = useMemo(
    () =>
      computeCompositionLayout(
        result.width,
        result.height,
        edits.frame,
        edits.crop,
      ),
    [result.width, result.height, edits.frame, edits.crop],
  );

  const trimDurationSec =
    Math.max(0, edits.trim.endMs - edits.trim.startMs) / 1000;
  const outputSec = trimDurationSec / Math.max(0.01, edits.speed);
  const durationInFrames = Math.max(1, Math.ceil(outputSec * FPS));

  const compositionWidth = Math.max(2, Math.round(layout.canvasWidth));
  const compositionHeight = Math.max(2, Math.round(layout.canvasHeight));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !rendering) onDiscard();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onDiscard, rendering]);

  // Mirror Player frame -> Timeline playhead. The composition's frame 0
  // corresponds to trim.startMs in source time; map back so the Timeline
  // (which works in source-space ms) shows the playhead in the right spot.
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    const onFrame = (e: { detail: { frame: number } }) => {
      const compSec = e.detail.frame / FPS;
      const sourceMs = edits.trim.startMs + compSec * edits.speed * 1000;
      setCurrentMs(sourceMs);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    player.addEventListener("frameupdate", onFrame);
    player.addEventListener("play", onPlay);
    player.addEventListener("pause", onPause);
    return () => {
      player.removeEventListener("frameupdate", onFrame);
      player.removeEventListener("play", onPlay);
      player.removeEventListener("pause", onPause);
    };
  }, [edits.trim.startMs, edits.speed]);

  // Track the on-screen rect of the rendered video region so the crop
  // overlay can position itself correctly inside the (centered, scaled)
  // Player container.
  const [videoRect, setVideoRect] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const measure = () => {
      const rect = stage.getBoundingClientRect();
      const cw = compositionWidth;
      const ch = compositionHeight;
      const containerRatio = rect.width / rect.height;
      const compRatio = cw / ch;
      let scale: number;
      if (compRatio > containerRatio) {
        scale = rect.width / cw;
      } else {
        scale = rect.height / ch;
      }
      const scaledW = cw * scale;
      const scaledH = ch * scale;
      const offsetX = (rect.width - scaledW) / 2;
      const offsetY = (rect.height - scaledH) / 2;
      setVideoRect({
        left: offsetX + layout.videoX * scale,
        top: offsetY + layout.videoY * scale,
        width: layout.videoWidth * scale,
        height: layout.videoHeight * scale,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    return () => ro.disconnect();
  }, [
    compositionWidth,
    compositionHeight,
    layout.videoX,
    layout.videoY,
    layout.videoWidth,
    layout.videoHeight,
  ]);

  const updateFrame = useCallback((patch: Partial<FrameStyle>) => {
    setEdits((prev) => ({ ...prev, frame: { ...prev.frame, ...patch } }));
  }, []);

  const updateCursor = useCallback((patch: Partial<CursorStyle>) => {
    setEdits((prev) => ({ ...prev, cursor: { ...prev.cursor, ...patch } }));
  }, []);

  const setTrim = useCallback((trim: { startMs: number; endMs: number }) => {
    setEdits((prev) => ({ ...prev, trim }));
    const player = playerRef.current;
    if (player) player.seekTo(0);
  }, []);

  const onScrub = useCallback(
    (sourceMs: number) => {
      const player = playerRef.current;
      if (!player) return;
      const compSec =
        (sourceMs - edits.trim.startMs) / Math.max(0.01, edits.speed) / 1000;
      const frame = Math.max(
        0,
        Math.min(durationInFrames - 1, Math.round(compSec * FPS)),
      );
      player.seekTo(frame);
    },
    [edits.trim.startMs, edits.speed, durationInFrames],
  );

  const togglePlay = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    if (player.isPlaying()) player.pause();
    else player.play();
  }, []);

  const handleDownload = useCallback(async () => {
    setRendering(true);
    setRenderError(null);
    setRenderProgress({ progress: 0, frame: 0 });
    try {
      const rendered = await renderEdit(result, edits, outputOptions, (p) =>
        setRenderProgress(p),
      );
      const ext = extensionFor(rendered.mimeType);
      const url = URL.createObjectURL(rendered.blob);
      const a = document.createElement("a");
      a.href = url;
      const stamp = new Date().toISOString().replace(/[:.]/g, "-");
      a.download = `recording-${stamp}.${ext}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => {
        URL.revokeObjectURL(url);
        URL.revokeObjectURL(rendered.url);
      }, 1500);
    } catch (err) {
      console.error("[recorder] render failed", err);
      setRenderError(err instanceof Error ? err.message : String(err));
    } finally {
      setRendering(false);
    }
  }, [result, edits, outputOptions]);

  const inputProps = useMemo<RecordingCompositionProps>(
    () => ({
      src: result.url,
      fps: FPS,
      sourceWidth: result.width,
      sourceHeight: result.height,
      edits,
      cursor: result.cursorTrack,
    }),
    [result.url, result.width, result.height, edits, result.cursorTrack],
  );

  return (
    <div
      className={styles.backdrop}
      {...overlayProps}
      onPointerDown={(e) => {
        if (e.target === e.currentTarget && !rendering) onDiscard();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Recording editor"
        className={styles.modal}
        {...overlayProps}
      >
        <div className={styles.body}>
          <div className={styles.stageWrap}>
            <div ref={stageRef} className={styles.playerStage}>
              <Player
                ref={playerRef}
                component={RecordingComposition}
                inputProps={inputProps}
                durationInFrames={durationInFrames}
                fps={FPS}
                compositionWidth={compositionWidth}
                compositionHeight={compositionHeight}
                playbackRate={1}
                loop
                autoPlay
                controls={false}
                clickToPlay={false}
                style={{ width: "100%", height: "100%" }}
              />
              {activeTab === "crop" && videoRect ? (
                <div
                  className={styles.cropPositioner}
                  style={{
                    left: videoRect.left,
                    top: videoRect.top,
                    width: videoRect.width,
                    height: videoRect.height,
                  }}
                >
                  <CropOverlay
                    crop={edits.crop}
                    onChange={(c) => setEdits((prev) => ({ ...prev, crop: c }))}
                  />
                </div>
              ) : null}
            </div>

            <div className={styles.timelineRow}>
              <button
                type="button"
                className={styles.playBtn}
                onClick={togglePlay}
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? "❚❚" : "▶"}
              </button>
              <div className={styles.timelineBox}>
                <Timeline
                  durationMs={result.durationMs}
                  startMs={edits.trim.startMs}
                  endMs={edits.trim.endMs}
                  currentMs={currentMs}
                  onChange={setTrim}
                  onScrub={onScrub}
                  filmstripSrc={result.url}
                  filmstripWidth={result.width}
                  filmstripHeight={result.height}
                />
              </div>
            </div>
          </div>

          <aside className={styles.sidebar} {...overlayProps}>
            <div className={styles.tabs} role="tablist">
              <button
                type="button"
                role="tab"
                className={styles.tab}
                data-active={activeTab === "frame"}
                onClick={() => setActiveTab("frame")}
              >
                Frame
              </button>
              <button
                type="button"
                role="tab"
                className={styles.tab}
                data-active={activeTab === "trim"}
                onClick={() => setActiveTab("trim")}
              >
                Trim & speed
              </button>
              <button
                type="button"
                role="tab"
                className={styles.tab}
                data-active={activeTab === "crop"}
                onClick={() => setActiveTab("crop")}
              >
                Crop
              </button>
            </div>

            <div className={styles.tabPanel}>
              {activeTab === "frame" ? (
                <FramePanel
                  style={edits.frame}
                  cursor={edits.cursor}
                  onChange={updateFrame}
                  onCursorChange={updateCursor}
                />
              ) : null}
              {activeTab === "trim" ? (
                <TrimSpeedPanel
                  edits={edits}
                  durationMs={result.durationMs}
                  onTrim={setTrim}
                  onSpeed={(speed) => setEdits((prev) => ({ ...prev, speed }))}
                />
              ) : null}
              {activeTab === "crop" ? (
                <CropPanel
                  crop={edits.crop}
                  onChange={(c) => setEdits((prev) => ({ ...prev, crop: c }))}
                />
              ) : null}
            </div>
          </aside>
        </div>

        <footer className={styles.footer} {...overlayProps}>
          <div className={styles.meta}>
            <span>
              {result.width}×{result.height} · source{" "}
              {formatDuration(result.durationMs)} ·{" "}
              {formatSize(result.blob.size)}
            </span>
            <span className={styles.dim}>
              → {compositionWidth}×{compositionHeight} ·{" "}
              {formatDuration(outputSec * 1000)} @ {edits.speed}x
            </span>
            {rendering && renderProgress ? (
              <span className={styles.progress}>
                Rendering… {Math.round(renderProgress.progress * 100)}% (frame{" "}
                {renderProgress.frame})
              </span>
            ) : null}
            {renderError ? (
              <span className={styles.error}>{renderError}</span>
            ) : null}
          </div>
          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={onDiscard}
              disabled={rendering}
            >
              Discard
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={onRecordAgain}
              disabled={rendering}
            >
              Record again
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={handleDownload}
              disabled={rendering}
            >
              {rendering ? "Rendering…" : "Render & download"}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FramePanel({
  style,
  cursor,
  onChange,
  onCursorChange,
}: {
  style: FrameStyle;
  cursor: CursorStyle;
  onChange: (patch: Partial<FrameStyle>) => void;
  onCursorChange: (patch: Partial<CursorStyle>) => void;
}) {
  return (
    <div className={styles.panel}>
      <Field label="Padding" value={`${style.padding}`}>
        <input
          type="range"
          min={0}
          max={128}
          step={1}
          value={style.padding}
          onChange={(e) => onChange({ padding: Number(e.target.value) })}
        />
      </Field>

      <Field label="Border" value={`${style.borderWidth}px`}>
        <div className={styles.inline}>
          <input
            type="color"
            value={style.borderColor}
            onChange={(e) => onChange({ borderColor: e.target.value })}
          />
          <input
            type="range"
            min={0}
            max={8}
            step={1}
            value={style.borderWidth}
            onChange={(e) => onChange({ borderWidth: Number(e.target.value) })}
          />
        </div>
      </Field>

      <Field label="Radius" value={`${style.radius}`}>
        <input
          type="range"
          min={0}
          max={48}
          step={1}
          value={style.radius}
          onChange={(e) => onChange({ radius: Number(e.target.value) })}
        />
      </Field>

      <Field label="Background">
        <div className={styles.swatches}>
          {BACKGROUND_PRESETS.map((preset) => {
            const active = backgroundEquals(preset.value, style.background);
            const isTransparent = preset.value.kind === "transparent";
            return (
              <button
                key={preset.label}
                type="button"
                aria-label={preset.label}
                title={preset.label}
                data-active={active}
                className={`${styles.swatch} ${
                  isTransparent ? styles.swatchCheck : ""
                }`}
                style={backgroundSwatchStyle(preset.value)}
                onClick={() => onChange({ background: preset.value })}
              />
            );
          })}
        </div>
      </Field>

      <Field label="Shadow">
        <div className={styles.segmented}>
          {SHADOWS.map((s) => (
            <button
              key={s}
              type="button"
              className={styles.segment}
              data-active={style.shadow === s}
              onClick={() => onChange({ shadow: s })}
            >
              {s}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Aspect">
        <div className={styles.segmented}>
          {ASPECTS.map((a) => (
            <button
              key={a}
              type="button"
              className={styles.segment}
              data-active={style.aspect === a}
              onClick={() => onChange({ aspect: a })}
            >
              {a}
            </button>
          ))}
        </div>
      </Field>

      <div className={styles.sectionHead}>Cursor</div>

      <Field label="Show cursor">
        <div className={styles.segmented}>
          <button
            type="button"
            className={styles.segment}
            data-active={cursor.show}
            onClick={() => onCursorChange({ show: true })}
          >
            on
          </button>
          <button
            type="button"
            className={styles.segment}
            data-active={!cursor.show}
            onClick={() => onCursorChange({ show: false })}
          >
            off
          </button>
        </div>
      </Field>

      <Field label="Click ripples">
        <div className={styles.segmented}>
          <button
            type="button"
            className={styles.segment}
            data-active={cursor.showClicks}
            onClick={() => onCursorChange({ showClicks: true })}
          >
            on
          </button>
          <button
            type="button"
            className={styles.segment}
            data-active={!cursor.showClicks}
            onClick={() => onCursorChange({ showClicks: false })}
          >
            off
          </button>
        </div>
      </Field>

      <Field label="Ripple color">
        <div className={styles.inline}>
          <input
            type="color"
            value={cursor.rippleColor}
            onChange={(e) => onCursorChange({ rippleColor: e.target.value })}
          />
          <span className={styles.fieldValue}>{cursor.rippleColor}</span>
        </div>
      </Field>
    </div>
  );
}

function TrimSpeedPanel({
  edits,
  durationMs,
  onTrim,
  onSpeed,
}: {
  edits: EditState;
  durationMs: number;
  onTrim: (trim: { startMs: number; endMs: number }) => void;
  onSpeed: (speed: number) => void;
}) {
  const trimDuration = edits.trim.endMs - edits.trim.startMs;
  return (
    <div className={styles.panel}>
      <Field
        label="Trim start"
        value={`${(edits.trim.startMs / 1000).toFixed(2)}s`}
      >
        <input
          type="range"
          min={0}
          max={Math.max(0, edits.trim.endMs - 100)}
          step={10}
          value={edits.trim.startMs}
          onChange={(e) =>
            onTrim({ startMs: Number(e.target.value), endMs: edits.trim.endMs })
          }
        />
      </Field>
      <Field
        label="Trim end"
        value={`${(edits.trim.endMs / 1000).toFixed(2)}s`}
      >
        <input
          type="range"
          min={Math.min(durationMs, edits.trim.startMs + 100)}
          max={durationMs}
          step={10}
          value={edits.trim.endMs}
          onChange={(e) =>
            onTrim({
              startMs: edits.trim.startMs,
              endMs: Number(e.target.value),
            })
          }
        />
      </Field>

      <Field label="Speed" value={`${edits.speed}x`}>
        <div className={styles.segmented}>
          {SPEEDS.map((s) => (
            <button
              key={s}
              type="button"
              className={styles.segment}
              data-active={edits.speed === s}
              onClick={() => onSpeed(s)}
            >
              {s}x
            </button>
          ))}
        </div>
      </Field>

      <p className={styles.hint}>
        Output will be {formatDuration(trimDuration / edits.speed)} (
        {formatDuration(trimDuration)} of source ÷ {edits.speed}x).
      </p>
    </div>
  );
}

function CropPanel({
  crop,
  onChange,
}: {
  crop: EditState["crop"];
  onChange: (c: EditState["crop"]) => void;
}) {
  return (
    <div className={styles.panel}>
      <p className={styles.hint}>
        Drag the corners or edges on the video. Double-click the crop box to
        reset.
      </p>
      <div className={styles.cropSummary}>
        {crop ? (
          <>
            <span>x: {Math.round(crop.x * 100)}%</span>
            <span>y: {Math.round(crop.y * 100)}%</span>
            <span>w: {Math.round(crop.width * 100)}%</span>
            <span>h: {Math.round(crop.height * 100)}%</span>
          </>
        ) : (
          <span className={styles.dim}>No crop · full frame</span>
        )}
      </div>
      <div className={styles.actionsRow}>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnGhost}`}
          onClick={() => onChange(null)}
          disabled={!crop}
        >
          Reset crop
        </button>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnGhost}`}
          onClick={() => onChange({ x: 0.1, y: 0.1, width: 0.8, height: 0.8 })}
        >
          Center 80%
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.field}>
      <span className={styles.fieldHead}>
        <span>{label}</span>
        {value ? <span className={styles.fieldValue}>{value}</span> : null}
      </span>
      {children}
    </div>
  );
}
