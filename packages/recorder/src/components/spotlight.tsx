"use client";

import { OVERLAY_ATTR } from "../picker";
import type { Rect } from "../types";
import styles from "./spotlight.module.css";

type SpotlightProps = {
  rect: Rect;
  radius: number;
};

export function Spotlight({ rect, radius }: SpotlightProps) {
  const overlayProps = { [OVERLAY_ATTR]: "" };

  return (
    <div
      className={styles.spotlight}
      {...overlayProps}
      style={{
        top: rect.y,
        left: rect.x,
        width: rect.width,
        height: rect.height,
        borderRadius: radius,
      }}
    />
  );
}
