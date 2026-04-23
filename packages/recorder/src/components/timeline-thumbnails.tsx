"use client";

import { Thumbnail } from "@remotion/player";
import { useMemo } from "react";
import {
  ThumbnailComposition,
  type ThumbnailCompositionProps,
} from "./thumbnail-composition";
import styles from "./timeline-thumbnails.module.css";

type TimelineThumbnailsProps = {
  src: string;
  durationMs: number;
  sourceWidth: number;
  sourceHeight: number;
  /** Number of thumbnails to render across the full source duration. */
  count?: number;
  fps?: number;
};

/**
 * A row of evenly-spaced thumbnails spanning the full source recording. Sits
 * inside the {@link Timeline} track as a backdrop, so trimming and scrubbing
 * gestures still happen on top of it.
 */
export function TimelineThumbnails({
  src,
  durationMs,
  sourceWidth,
  sourceHeight,
  count = 12,
  fps = 60,
}: TimelineThumbnailsProps) {
  const totalFrames = Math.max(1, Math.round((durationMs / 1000) * fps));
  const inputProps = useMemo<ThumbnailCompositionProps>(() => ({ src }), [src]);

  // Thumbnail compositionWidth/Height get scaled visually anyway; pick a
  // small value so each frame is cheap to render.
  const thumbW = 160;
  const thumbH = Math.max(
    32,
    Math.round((thumbW * sourceHeight) / Math.max(1, sourceWidth)),
  );

  const frames = Array.from({ length: count }, (_, i) =>
    Math.min(totalFrames - 1, Math.round((totalFrames * (i + 0.5)) / count)),
  );

  return (
    <div className={styles.row} aria-hidden>
      {frames.map((f) => (
        <div
          key={`thumb-${f}`}
          className={styles.cell}
          style={{ aspectRatio: `${thumbW} / ${thumbH}` }}
        >
          <Thumbnail
            component={ThumbnailComposition}
            inputProps={inputProps}
            durationInFrames={totalFrames}
            compositionWidth={thumbW}
            compositionHeight={thumbH}
            fps={fps}
            frameToDisplay={f}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ))}
    </div>
  );
}
