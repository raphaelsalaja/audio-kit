"use client";

import { useCallback, useEffect, useRef } from "react";
import type { NormalizedRect } from "../types";
import styles from "./crop-overlay.module.css";

type CropOverlayProps = {
  /** Normalized crop rect (0-1) within the underlying video. Null means no crop. */
  crop: NormalizedRect | null;
  onChange: (next: NormalizedRect | null) => void;
};

type DragKind = "move" | "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

const FULL: NormalizedRect = { x: 0, y: 0, width: 1, height: 1 };
const MIN_DIM = 0.05;

function clamp01(n: number): number {
  return Math.max(0, Math.min(1, n));
}

export function CropOverlay({ crop, onChange }: CropOverlayProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{
    kind: DragKind;
    startX: number;
    startY: number;
    orig: NormalizedRect;
  } | null>(null);

  const value = crop ?? FULL;

  const beginDrag = (kind: DragKind) => (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    dragRef.current = {
      kind,
      startX: (e.clientX - rect.left) / rect.width,
      startY: (e.clientY - rect.top) / rect.height,
      orig: { ...value },
    };
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const drag = dragRef.current;
      const container = containerRef.current;
      if (!drag || !container) return;
      const rect = container.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width;
      const cy = (e.clientY - rect.top) / rect.height;
      const dx = cx - drag.startX;
      const dy = cy - drag.startY;
      const o = drag.orig;
      let nx = o.x;
      let ny = o.y;
      let nw = o.width;
      let nh = o.height;

      switch (drag.kind) {
        case "move": {
          nx = clamp01(o.x + dx);
          ny = clamp01(o.y + dy);
          nx = Math.min(nx, 1 - o.width);
          ny = Math.min(ny, 1 - o.height);
          break;
        }
        case "n": {
          ny = clamp01(o.y + dy);
          ny = Math.min(ny, o.y + o.height - MIN_DIM);
          nh = o.height + (o.y - ny);
          break;
        }
        case "s": {
          nh = clamp01(o.height + dy);
          nh = Math.min(nh, 1 - o.y);
          nh = Math.max(nh, MIN_DIM);
          break;
        }
        case "w": {
          nx = clamp01(o.x + dx);
          nx = Math.min(nx, o.x + o.width - MIN_DIM);
          nw = o.width + (o.x - nx);
          break;
        }
        case "e": {
          nw = clamp01(o.width + dx);
          nw = Math.min(nw, 1 - o.x);
          nw = Math.max(nw, MIN_DIM);
          break;
        }
        case "nw": {
          nx = clamp01(o.x + dx);
          nx = Math.min(nx, o.x + o.width - MIN_DIM);
          nw = o.width + (o.x - nx);
          ny = clamp01(o.y + dy);
          ny = Math.min(ny, o.y + o.height - MIN_DIM);
          nh = o.height + (o.y - ny);
          break;
        }
        case "ne": {
          nw = Math.max(MIN_DIM, Math.min(1 - o.x, o.width + dx));
          ny = clamp01(o.y + dy);
          ny = Math.min(ny, o.y + o.height - MIN_DIM);
          nh = o.height + (o.y - ny);
          break;
        }
        case "sw": {
          nx = clamp01(o.x + dx);
          nx = Math.min(nx, o.x + o.width - MIN_DIM);
          nw = o.width + (o.x - nx);
          nh = Math.max(MIN_DIM, Math.min(1 - o.y, o.height + dy));
          break;
        }
        case "se": {
          nw = Math.max(MIN_DIM, Math.min(1 - o.x, o.width + dx));
          nh = Math.max(MIN_DIM, Math.min(1 - o.y, o.height + dy));
          break;
        }
      }

      const next: NormalizedRect = { x: nx, y: ny, width: nw, height: nh };
      const isFull =
        next.x <= 0.001 &&
        next.y <= 0.001 &&
        next.width >= 0.999 &&
        next.height >= 0.999;
      onChange(isFull ? null : next);
    };
    const onUp = () => {
      dragRef.current = null;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [onChange]);

  const reset = useCallback(() => onChange(null), [onChange]);

  const left = `${value.x * 100}%`;
  const top = `${value.y * 100}%`;
  const width = `${value.width * 100}%`;
  const height = `${value.height * 100}%`;

  return (
    <div ref={containerRef} className={styles.root}>
      <div className={styles.maskTop} style={{ height: top }} aria-hidden />
      <div
        className={styles.maskBottom}
        style={{ top: `calc(${top} + ${height})` }}
        aria-hidden
      />
      <div
        className={styles.maskLeft}
        style={{ top, height, width: left }}
        aria-hidden
      />
      <div
        className={styles.maskRight}
        style={{ top, height, left: `calc(${left} + ${width})` }}
        aria-hidden
      />

      <div
        role="application"
        aria-label="Crop region"
        className={styles.box}
        style={{ left, top, width, height }}
        onPointerDown={beginDrag("move")}
        onDoubleClick={reset}
        title="Drag to move; double-click to reset"
      >
        <div
          className={`${styles.edge} ${styles.edgeN}`}
          onPointerDown={beginDrag("n")}
        />
        <div
          className={`${styles.edge} ${styles.edgeS}`}
          onPointerDown={beginDrag("s")}
        />
        <div
          className={`${styles.edge} ${styles.edgeW}`}
          onPointerDown={beginDrag("w")}
        />
        <div
          className={`${styles.edge} ${styles.edgeE}`}
          onPointerDown={beginDrag("e")}
        />
        <div
          className={`${styles.corner} ${styles.cornerNW}`}
          onPointerDown={beginDrag("nw")}
        />
        <div
          className={`${styles.corner} ${styles.cornerNE}`}
          onPointerDown={beginDrag("ne")}
        />
        <div
          className={`${styles.corner} ${styles.cornerSW}`}
          onPointerDown={beginDrag("sw")}
        />
        <div
          className={`${styles.corner} ${styles.cornerSE}`}
          onPointerDown={beginDrag("se")}
        />
      </div>
    </div>
  );
}
