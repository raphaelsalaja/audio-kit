"use client";

import { OffthreadVideo } from "remotion";

export type ThumbnailCompositionProps = {
  src: string;
};

/**
 * Bare-bones composition used for filmstrip thumbnails on the timeline.
 * Strips all editor styling (padding, border, crop, cursor) — the only
 * point is to show the user what's happening in the source video at a
 * given moment. Keeping it minimal makes per-thumbnail rendering cheap.
 */
export function ThumbnailComposition({ src }: ThumbnailCompositionProps) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#000",
      }}
    >
      <OffthreadVideo
        src={src}
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
