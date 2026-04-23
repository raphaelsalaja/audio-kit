export type { RecordingSession } from "./capture";
export { startRecording, supportsRegionCapture } from "./capture";
export {
  getElementAtPoint,
  markOverlayElement,
  subscribeToClick,
  subscribeToHover,
} from "./picker";
export { type RenderProgress, renderEdit } from "./render";
export type {
  AspectRatio,
  BackgroundStyle,
  CursorClick,
  CursorSample,
  CursorStyle,
  CursorTrack,
  EditState,
  FrameStyle,
  NormalizedRect,
  RecorderOptions,
  RecorderState,
  RecordingResult,
  Rect,
  ShadowPreset,
  TrimRange,
} from "./types";
export {
  ASPECT_RATIOS,
  DEFAULT_CURSOR_STYLE,
  DEFAULT_FRAME_STYLE,
  EMPTY_CURSOR_TRACK,
  SHADOW_VALUES,
} from "./types";
