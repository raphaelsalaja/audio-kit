"use client";

import { forwardRef } from "react";
import { OVERLAY_ATTR } from "../picker";
import {
  ASPECT_RATIOS,
  type BackgroundStyle,
  type FrameStyle,
  type Rect,
  SHADOW_VALUES,
} from "../types";
import styles from "./frame.module.css";

type FrameProps = {
  rect: Rect;
  style: FrameStyle;
  recording: boolean;
};

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

export function computeFrameRect(target: Rect, style: FrameStyle): Rect {
  const pad = style.padding;
  let width = target.width + pad * 2;
  let height = target.height + pad * 2;
  let x = target.x - pad;
  let y = target.y - pad;

  const ratio = ASPECT_RATIOS[style.aspect];
  if (ratio) {
    const current = width / height;
    if (current > ratio) {
      const newH = width / ratio;
      y -= (newH - height) / 2;
      height = newH;
    } else if (current < ratio) {
      const newW = height * ratio;
      x -= (newW - width) / 2;
      width = newW;
    }
  }

  return { x, y, width, height };
}

export const Frame = forwardRef<HTMLDivElement, FrameProps>(function Frame(
  { rect, style, recording },
  ref,
) {
  const frameRect = computeFrameRect(rect, style);
  const overlayProps = { [OVERLAY_ATTR]: "" };

  return (
    <div
      ref={ref}
      className={styles.frame}
      data-state={recording ? "recording" : "selected"}
      {...overlayProps}
      style={{
        top: frameRect.y,
        left: frameRect.x,
        width: frameRect.width,
        height: frameRect.height,
        borderStyle: style.borderWidth > 0 ? "solid" : "none",
        borderWidth: style.borderWidth,
        borderColor: style.borderColor,
        borderRadius: style.radius,
        background: backgroundToCss(style.background),
        boxShadow: SHADOW_VALUES[style.shadow],
      }}
    />
  );
});
