"use client";

import { useCallback, useEffect, useRef } from "react";
import styles from "./timeline.module.css";
import { TimelineThumbnails } from "./timeline-thumbnails";

type TimelineProps = {
  durationMs: number;
  startMs: number;
  endMs: number;
  currentMs: number;
  onChange: (next: { startMs: number; endMs: number }) => void;
  onScrub: (ms: number) => void;
  /** Source for the filmstrip thumbnails. When omitted no filmstrip renders. */
  filmstripSrc?: string;
  filmstripWidth?: number;
  filmstripHeight?: number;
};

type DragKind = "start" | "end" | "scrub";

const MIN_RANGE_MS = 100;

function fmt(ms: number): string {
  const total = Math.max(0, ms) / 1000;
  const m = Math.floor(total / 60);
  const s = total - m * 60;
  return `${m}:${s.toFixed(2).padStart(5, "0")}`;
}

export function Timeline({
  durationMs,
  startMs,
  endMs,
  currentMs,
  onChange,
  onScrub,
  filmstripSrc,
  filmstripWidth,
  filmstripHeight,
}: TimelineProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<DragKind | null>(null);

  const pctOf = useCallback(
    (ms: number) => (durationMs > 0 ? (ms / durationMs) * 100 : 0),
    [durationMs],
  );

  const msAtClient = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return 0;
      const rect = track.getBoundingClientRect();
      const ratio = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width),
      );
      return ratio * durationMs;
    },
    [durationMs],
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const kind = dragRef.current;
      if (!kind) return;
      const ms = msAtClient(e.clientX);
      if (kind === "start") {
        const next = Math.max(0, Math.min(ms, endMs - MIN_RANGE_MS));
        onChange({ startMs: next, endMs });
      } else if (kind === "end") {
        const next = Math.min(durationMs, Math.max(ms, startMs + MIN_RANGE_MS));
        onChange({ startMs, endMs: next });
      } else {
        const clamped = Math.max(startMs, Math.min(endMs, ms));
        onScrub(clamped);
      }
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
  }, [durationMs, endMs, startMs, msAtClient, onChange, onScrub]);

  const startDrag = (kind: DragKind) => (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragRef.current = kind;
    if (kind === "scrub") onScrub(msAtClient(e.clientX));
  };

  return (
    <div className={styles.root}>
      <div className={styles.times}>
        <span>{fmt(startMs)}</span>
        <span className={styles.dim}>{fmt(currentMs)}</span>
        <span>{fmt(endMs)}</span>
      </div>
      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={startDrag("scrub")}
      >
        {filmstripSrc && filmstripWidth && filmstripHeight ? (
          <TimelineThumbnails
            src={filmstripSrc}
            durationMs={durationMs}
            sourceWidth={filmstripWidth}
            sourceHeight={filmstripHeight}
          />
        ) : null}
        <div
          className={styles.dimRange}
          style={{ left: 0, width: `${pctOf(startMs)}%` }}
        />
        <div
          className={styles.dimRange}
          style={{ left: `${pctOf(endMs)}%`, right: 0 }}
        />
        <div
          className={styles.activeRange}
          style={{
            left: `${pctOf(startMs)}%`,
            width: `${pctOf(endMs - startMs)}%`,
          }}
        />
        <button
          type="button"
          aria-label="Trim start"
          className={`${styles.handle} ${styles.handleStart}`}
          style={{ left: `${pctOf(startMs)}%` }}
          onPointerDown={startDrag("start")}
        />
        <button
          type="button"
          aria-label="Trim end"
          className={`${styles.handle} ${styles.handleEnd}`}
          style={{ left: `${pctOf(endMs)}%` }}
          onPointerDown={startDrag("end")}
        />
        <div
          className={styles.playhead}
          style={{ left: `${pctOf(currentMs)}%` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
