"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { subscribeToClick, subscribeToHover } from "./picker";
import {
  DEFAULT_FRAME_STYLE,
  type FrameStyle,
  type RecorderState,
  type RecordingResult,
  type Rect,
} from "./types";

function rectFromElement(el: Element): Rect {
  const r = el.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height };
}

function rectsEqual(a: Rect | null, b: Rect | null) {
  if (!a || !b) return a === b;
  return (
    a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
  );
}

export function useRecorder(initialStyle?: Partial<FrameStyle>) {
  const [state, setState] = useState<RecorderState>("idle");
  const [hovered, setHovered] = useState<HTMLElement | null>(null);
  const [hoveredRect, setHoveredRect] = useState<Rect | null>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [targetRect, setTargetRect] = useState<Rect | null>(null);
  const [style, setStyle] = useState<FrameStyle>({
    ...DEFAULT_FRAME_STYLE,
    ...initialStyle,
  });
  const [result, setResult] = useState<RecordingResult | null>(null);

  const targetRectRef = useRef<Rect | null>(null);
  targetRectRef.current = targetRect;

  useEffect(() => {
    if (state !== "picking") return;
    const unsub = subscribeToHover((el) => {
      setHovered(el);
      setHoveredRect(el ? rectFromElement(el) : null);
    });
    return unsub;
  }, [state]);

  useEffect(() => {
    if (state !== "picking") return;
    const unsub = subscribeToClick((el) => {
      setTarget(el);
      setTargetRect(rectFromElement(el));
      setHovered(null);
      setHoveredRect(null);
      setState("selected");
    });
    return unsub;
  }, [state]);

  useEffect(() => {
    if (state !== "picking") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setState("idle");
        setHovered(null);
        setHoveredRect(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state]);

  useEffect(() => {
    if (!target || (state !== "selected" && state !== "recording")) return;

    let rafId = 0;
    const tick = () => {
      const next = rectFromElement(target);
      if (!rectsEqual(next, targetRectRef.current)) {
        setTargetRect(next);
      }
      rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => {
      setTargetRect(rectFromElement(target));
    });
    ro.observe(target);

    const onScroll = () => setTargetRect(rectFromElement(target));
    window.addEventListener("scroll", onScroll, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
    };
  }, [target, state]);

  const startPicking = useCallback(() => {
    setTarget(null);
    setTargetRect(null);
    setHovered(null);
    setHoveredRect(null);
    setResult(null);
    setState("picking");
  }, []);

  const cancel = useCallback(() => {
    setTarget(null);
    setTargetRect(null);
    setHovered(null);
    setHoveredRect(null);
    setResult(null);
    setState("idle");
  }, []);

  const rePick = useCallback(() => {
    setTarget(null);
    setTargetRect(null);
    setResult(null);
    setState("picking");
  }, []);

  const updateStyle = useCallback((patch: Partial<FrameStyle>) => {
    setStyle((prev) => ({ ...prev, ...patch }));
  }, []);

  return {
    state,
    setState,
    hovered,
    hoveredRect,
    target,
    targetRect,
    style,
    updateStyle,
    result,
    setResult,
    startPicking,
    cancel,
    rePick,
  };
}

export type UseRecorderReturn = ReturnType<typeof useRecorder>;
