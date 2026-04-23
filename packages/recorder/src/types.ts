export type RecorderState =
  | "idle"
  | "picking"
  | "selected"
  | "recording"
  | "preview";

export type AspectRatio = "free" | "16:9" | "4:3" | "1:1";

export type ShadowPreset = "none" | "sm" | "md" | "lg" | "xl";

export type BackgroundStyle =
  | { kind: "transparent" }
  | { kind: "solid"; color: string }
  | { kind: "gradient"; from: string; to: string; angle: number };

export type FrameStyle = {
  padding: number;
  borderWidth: number;
  borderColor: string;
  radius: number;
  background: BackgroundStyle;
  shadow: ShadowPreset;
  aspect: AspectRatio;
  spotlight: boolean;
};

export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * A single cursor position recorded during capture. Coordinates are
 * normalized to [0, 1] of the captured source-video frame so they survive
 * arbitrary downstream resizing.
 */
export type CursorSample = {
  /** Milliseconds since recording start. */
  tMs: number;
  x: number;
  y: number;
};

export type CursorClick = {
  tMs: number;
  x: number;
  y: number;
  /** PointerEvent.button (0 = primary). */
  button: number;
};

export type CursorTrack = {
  samples: CursorSample[];
  clicks: CursorClick[];
};

/**
 * Editor-side controls for how the captured cursor and clicks are rendered
 * into the preview and the export.
 */
export type CursorStyle = {
  show: boolean;
  showClicks: boolean;
  rippleColor: string;
  cursorColor: string;
};

export type RecordingResult = {
  blob: Blob;
  url: string;
  mimeType: string;
  durationMs: number;
  width: number;
  height: number;
  cursorTrack: CursorTrack;
};

/**
 * A normalized rectangle within a video frame, where each component is in
 * [0, 1]. `null` means "no crop" (use the full source frame).
 */
export type NormalizedRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type TrimRange = {
  startMs: number;
  endMs: number;
};

/**
 * The editable transformations applied to a recording in the post-record
 * editor. These describe both the live preview and the values that get baked
 * in by the render pipeline.
 */
export type EditState = {
  trim: TrimRange;
  /** Playback rate multiplier baked into the export (0.25 - 4.0). */
  speed: number;
  /** Sub-rectangle of the source video to keep, normalized to [0,1]. */
  crop: NormalizedRect | null;
  /** Re-applied framing (padding, radius, background, border, shadow, aspect). */
  frame: FrameStyle;
  /** Cursor + click overlay styling. */
  cursor: CursorStyle;
};

export type RecorderOutputOptions = {
  container?: "mp4" | "webm";
  codec?: "avc" | "vp9" | "vp8";
  bitrate?: number;
  preferRegionCapture?: boolean;
};

export type RecorderOptions = {
  enabled?: boolean;
  defaultStyle?: Partial<FrameStyle>;
  output?: RecorderOutputOptions;
  onRecordComplete?: (result: RecordingResult) => void;
};

export const DEFAULT_CURSOR_STYLE: CursorStyle = {
  show: true,
  showClicks: true,
  rippleColor: "#60a5fa",
  cursorColor: "#ffffff",
};

export const EMPTY_CURSOR_TRACK: CursorTrack = {
  samples: [],
  clicks: [],
};

export const DEFAULT_FRAME_STYLE: FrameStyle = {
  padding: 16,
  borderWidth: 0,
  borderColor: "#000000",
  radius: 12,
  background: { kind: "transparent" },
  shadow: "none",
  aspect: "free",
  spotlight: true,
};

export const SHADOW_VALUES: Record<ShadowPreset, string> = {
  none: "none",
  sm: "0 1px 2px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)",
  md: "0 4px 8px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)",
  lg: "0 12px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)",
  xl: "0 24px 48px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.08)",
};

export const ASPECT_RATIOS: Record<AspectRatio, number | null> = {
  free: null,
  "16:9": 16 / 9,
  "4:3": 4 / 3,
  "1:1": 1,
};
