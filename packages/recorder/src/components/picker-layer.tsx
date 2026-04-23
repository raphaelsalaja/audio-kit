"use client";

import { OVERLAY_ATTR } from "../picker";
import type { Rect } from "../types";
import styles from "./picker-layer.module.css";

type PickerLayerProps = {
  active: boolean;
  hovered: HTMLElement | null;
  hoveredRect: Rect | null;
};

function describeElement(el: HTMLElement): string {
  const tag = el.tagName.toLowerCase();
  const id = el.id ? `#${el.id}` : "";
  const cls = el.classList.length
    ? `.${Array.from(el.classList).slice(0, 2).join(".")}`
    : "";
  return `${tag}${id}${cls}`;
}

export function PickerLayer({
  active,
  hovered,
  hoveredRect,
}: PickerLayerProps) {
  if (!active) return null;

  const overlayProps = { [OVERLAY_ATTR]: "" };

  return (
    <div className={styles.root} {...overlayProps}>
      <div className={styles.cursor} {...overlayProps} />

      {hoveredRect ? (
        <div
          className={styles.highlight}
          {...overlayProps}
          style={{
            top: hoveredRect.y,
            left: hoveredRect.x,
            width: hoveredRect.width,
            height: hoveredRect.height,
          }}
        />
      ) : null}

      {hovered && hoveredRect ? (
        <div
          className={styles.label}
          {...overlayProps}
          style={{
            top: hoveredRect.y,
            left: hoveredRect.x,
          }}
        >
          {describeElement(hovered)}
        </div>
      ) : null}

      <div className={styles.hint} {...overlayProps}>
        Click an element to frame it <kbd>Esc</kbd> to cancel
      </div>
    </div>
  );
}
