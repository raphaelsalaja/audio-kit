"use client";

import {
  interpolate,
  OffthreadVideo,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  ASPECT_RATIOS,
  type BackgroundStyle,
  type CursorSample,
  type CursorStyle,
  type CursorTrack,
  type EditState,
  EMPTY_CURSOR_TRACK,
  type FrameStyle,
  type NormalizedRect,
  SHADOW_VALUES,
} from "../types";

/**
 * Resolved layout for the editor stage. Pixel space matches the composition
 * canvas size; both the live preview (`<Player>`) and the export pipeline
 * (`render.ts`) target the same numbers so the two stay in sync.
 */
export type CompositionLayout = {
  canvasWidth: number;
  canvasHeight: number;
  videoX: number;
  videoY: number;
  videoWidth: number;
  videoHeight: number;
};

export function computeCompositionLayout(
  sourceWidth: number,
  sourceHeight: number,
  frame: FrameStyle,
  crop: NormalizedRect | null,
): CompositionLayout {
  const cropW = crop ? crop.width : 1;
  const cropH = crop ? crop.height : 1;
  const visibleW = sourceWidth * cropW;
  const visibleH = sourceHeight * cropH;

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

  return {
    canvasWidth: canvasW,
    canvasHeight: canvasH,
    videoX,
    videoY,
    videoWidth: visibleW,
    videoHeight: visibleH,
  };
}

function backgroundToCss(bg: BackgroundStyle): string {
  switch (bg.kind) {
    case "transparent":
      return "transparent";
    case "solid":
      return bg.color;
    case "gradient":
      return `linear-gradient(${bg.angle}deg, ${bg.from}, ${bg.to})`;
  }
}

export type RecordingCompositionProps = {
  src: string;
  fps: number;
  sourceWidth: number;
  sourceHeight: number;
  edits: EditState;
  /** Captured cursor data. Defaults to empty if missing. */
  cursor?: CursorTrack;
};

const RIPPLE_DURATION_MS = 600;
const CURSOR_GAP_MS = 250;

/**
 * Convert a source-video normalized point to the cropped video wrapper's
 * pixel coordinate. The wrapper is `cropPxW × cropPxH` and shows only the
 * crop sub-rect, so we offset by crop.x/y first and then divide by crop.w/h.
 */
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

/**
 * Lerps cursor position at a given source time using the surrounding samples.
 * Returns null when there's no sample within ±CURSOR_GAP_MS — keeps the
 * sprite hidden during long pauses where the user wasn't moving the mouse.
 */
function sampleCursorAt(
  samples: CursorSample[],
  tMs: number,
): { x: number; y: number } | null {
  if (samples.length === 0) return null;
  // Binary search for first sample with tMs >= target.
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

/**
 * Single-clip composition that bakes the user's edits (frame styling, crop,
 * trim, speed) into a Remotion scene. Used by `<Player>` for the editor
 * preview. The same math drives the canvas-based exporter in `render.ts`.
 */
export function RecordingComposition({
  src,
  fps,
  sourceWidth,
  sourceHeight,
  edits,
  cursor,
}: RecordingCompositionProps) {
  const { frame, crop, trim, speed, cursor: cursorStyle } = edits;
  const layout = computeCompositionLayout(
    sourceWidth,
    sourceHeight,
    frame,
    crop,
  );
  const track = cursor ?? EMPTY_CURSOR_TRACK;

  const trimBefore = Math.max(0, Math.floor((trim.startMs / 1000) * fps));
  const trimAfter = Math.max(
    trimBefore + 1,
    Math.ceil((trim.endMs / 1000) * fps),
  );

  // Translate the underlying full-resolution video so the cropped sub-rect
  // aligns with the wrapper's top-left corner.
  const cropOffsetX = crop ? -crop.x * sourceWidth : 0;
  const cropOffsetY = crop ? -crop.y * sourceHeight : 0;

  const cropPxW = layout.videoWidth;
  const cropPxH = layout.videoHeight;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: backgroundToCss(frame.background),
      }}
    >
      <div
        style={{
          position: "absolute",
          left: layout.videoX,
          top: layout.videoY,
          width: cropPxW,
          height: cropPxH,
          overflow: "hidden",
          borderRadius: frame.radius,
          borderStyle: frame.borderWidth > 0 ? "solid" : "none",
          borderWidth: frame.borderWidth,
          borderColor: frame.borderColor,
          boxShadow: SHADOW_VALUES[frame.shadow],
          background: "#000",
        }}
      >
        <OffthreadVideo
          src={src}
          trimBefore={trimBefore}
          trimAfter={trimAfter}
          playbackRate={speed}
          muted
          style={{
            position: "absolute",
            left: cropOffsetX,
            top: cropOffsetY,
            width: sourceWidth,
            height: sourceHeight,
          }}
        />
        <CursorLayer
          track={track}
          style={cursorStyle}
          crop={crop}
          cropPxW={cropPxW}
          cropPxH={cropPxH}
          trimStartMs={trim.startMs}
          trimEndMs={trim.endMs}
          speed={speed}
        />
      </div>
    </div>
  );
}

type CursorLayerProps = {
  track: CursorTrack;
  style: CursorStyle;
  crop: NormalizedRect | null;
  cropPxW: number;
  cropPxH: number;
  trimStartMs: number;
  trimEndMs: number;
  speed: number;
};

function CursorLayer({
  track,
  style,
  crop,
  cropPxW,
  cropPxH,
  trimStartMs,
  trimEndMs,
  speed,
}: CursorLayerProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const compSec = frame / fps;
  const sourceMs = trimStartMs + compSec * speed * 1000;

  const showCursor = style.show;
  const showClicks = style.showClicks;

  const projected =
    showCursor && track.samples.length > 0
      ? sampleCursorAt(track.samples, sourceMs)
      : null;
  const cursorPx = projected
    ? projectInCrop(projected.x, projected.y, crop, cropPxW, cropPxH)
    : null;

  const clicksInRange = showClicks
    ? track.clicks.filter(
        (c) => c.tMs >= trimStartMs && c.tMs <= trimEndMs + RIPPLE_DURATION_MS,
      )
    : [];

  return (
    <>
      {clicksInRange.map((click) => {
        const sourceClickSec = click.tMs / 1000;
        const compClickSec = (click.tMs - trimStartMs) / 1000 / speed;
        const fromFrame = Math.max(0, Math.floor(compClickSec * fps));
        const durFrames = Math.max(
          1,
          Math.ceil((RIPPLE_DURATION_MS / 1000 / speed) * fps),
        );
        const proj = projectInCrop(click.x, click.y, crop, cropPxW, cropPxH);
        if (!proj.visible) return null;
        return (
          <Sequence
            key={`${click.tMs}-${click.x}-${click.y}`}
            from={fromFrame}
            durationInFrames={durFrames}
            layout="none"
          >
            <RippleSprite
              x={proj.x}
              y={proj.y}
              color={style.rippleColor}
              durationFrames={durFrames}
              maxRadius={Math.max(28, Math.min(cropPxW, cropPxH) * 0.06)}
              key={`r-${sourceClickSec}`}
            />
          </Sequence>
        );
      })}

      {cursorPx?.visible ? (
        <CursorSprite x={cursorPx.x} y={cursorPx.y} color={style.cursorColor} />
      ) : null}
    </>
  );
}

function RippleSprite({
  x,
  y,
  color,
  durationFrames,
  maxRadius,
}: {
  x: number;
  y: number;
  color: string;
  durationFrames: number;
  maxRadius: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.6 },
    durationInFrames: durationFrames,
  });
  const radius = interpolate(progress, [0, 1], [0, maxRadius * 1.6]);
  const opacity = interpolate(
    frame,
    [0, durationFrames * 0.2, durationFrames],
    [0.0, 0.7, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );
  const ringRadius = radius;
  const innerRadius = Math.max(0, maxRadius * 0.5);
  return (
    <svg
      width={maxRadius * 4}
      height={maxRadius * 4}
      viewBox={`0 0 ${maxRadius * 4} ${maxRadius * 4}`}
      style={{
        position: "absolute",
        left: x - maxRadius * 2,
        top: y - maxRadius * 2,
        pointerEvents: "none",
      }}
      aria-hidden
    >
      <title>Click ripple</title>
      <circle
        cx={maxRadius * 2}
        cy={maxRadius * 2}
        r={ringRadius}
        fill="none"
        stroke={color}
        strokeWidth={2}
        opacity={opacity}
      />
      <circle
        cx={maxRadius * 2}
        cy={maxRadius * 2}
        r={innerRadius}
        fill={color}
        opacity={opacity * 0.5}
      />
    </svg>
  );
}

function CursorSprite({
  x,
  y,
  color,
}: {
  x: number;
  y: number;
  color: string;
}) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      style={{
        position: "absolute",
        left: x - 2,
        top: y - 2,
        pointerEvents: "none",
        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.45))",
      }}
      aria-hidden
    >
      <title>Cursor</title>
      <path
        d="M3 2 L3 18 L7.5 13.5 L10.5 20 L13 18.8 L10 12.5 L16 12.5 Z"
        fill={color}
        stroke="#000"
        strokeWidth={1}
        strokeLinejoin="round"
      />
    </svg>
  );
}
