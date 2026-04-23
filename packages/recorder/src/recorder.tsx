"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  type RecordingSession,
  startRecording,
  supportsRegionCapture,
} from "./capture";
import { Editor } from "./components/editor";
import { Fab } from "./components/fab";
import { computeFrameRect, Frame } from "./components/frame";
import { PickerLayer } from "./components/picker-layer";
import { Spotlight } from "./components/spotlight";
import { Toolbar } from "./components/toolbar";
import type { RecorderOptions } from "./types";
import { useRecorder } from "./use-recorder";

export type RecorderProps = RecorderOptions;

export function Recorder({
  enabled = true,
  defaultStyle,
  output,
  onRecordComplete,
}: RecorderProps = {}) {
  const recorder = useRecorder(defaultStyle);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const sessionRef = useRef<RecordingSession | null>(null);
  const [mounted, setMounted] = useState(false);
  const [regionSupported, setRegionSupported] = useState(true);

  useEffect(() => {
    setMounted(true);
    setRegionSupported(supportsRegionCapture());
  }, []);

  const {
    state,
    setState,
    hovered,
    hoveredRect,
    targetRect,
    style,
    updateStyle,
    result,
    setResult,
    startPicking,
    cancel,
    rePick,
  } = recorder;

  const handleRecord = useCallback(async () => {
    if (!frameRef.current || !targetRect) return;
    try {
      const session = await startRecording(
        frameRef.current,
        () => {
          const rect = recorder.targetRect;
          const st = recorder.style;
          if (!rect) return { x: 0, y: 0, width: 0, height: 0 };
          return computeFrameRect(rect, st);
        },
        output,
      );
      sessionRef.current = session;
      setState("recording");
    } catch (err) {
      console.error("[recorder] failed to start recording", err);
    }
  }, [targetRect, recorder, setState, output]);

  const handleStop = useCallback(async () => {
    const session = sessionRef.current;
    if (!session) return;
    try {
      const r = await session.stop();
      setResult(r);
      setState("preview");
      onRecordComplete?.(r);
    } catch (err) {
      console.error("[recorder] failed to stop recording", err);
      setState("selected");
    } finally {
      sessionRef.current = null;
    }
  }, [onRecordComplete, setResult, setState]);

  useEffect(() => {
    if (state !== "recording") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleStop();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state, handleStop]);

  useEffect(() => {
    return () => {
      sessionRef.current?.cancel();
      sessionRef.current = null;
    };
  }, []);

  const frameRect = useMemo(
    () => (targetRect ? computeFrameRect(targetRect, style) : null),
    [targetRect, style],
  );

  if (!enabled || !mounted) return null;

  const picking = state === "picking";
  const recording = state === "recording";
  const showFrame =
    targetRect && (state === "selected" || state === "recording");

  const fabActive = state !== "idle";
  const onFabClick = () => {
    if (state === "idle") startPicking();
    else if (state === "recording") handleStop();
    else cancel();
  };

  return createPortal(
    <>
      <Fab active={fabActive} onClick={onFabClick} />

      <PickerLayer
        active={picking}
        hovered={hovered}
        hoveredRect={hoveredRect}
      />

      {showFrame && style.spotlight && frameRect ? (
        <Spotlight rect={frameRect} radius={style.radius} />
      ) : null}

      {showFrame && targetRect ? (
        <Frame
          ref={frameRef}
          rect={targetRect}
          style={style}
          recording={recording}
        />
      ) : null}

      {showFrame && frameRect ? (
        <Toolbar
          frameRect={frameRect}
          style={style}
          onStyleChange={updateStyle}
          onRePick={rePick}
          onCancel={cancel}
          onRecord={handleRecord}
          onStop={handleStop}
          recording={recording}
          supportsRegionCapture={regionSupported}
        />
      ) : null}

      {state === "preview" && result ? (
        <Editor
          result={result}
          outputOptions={output}
          onDiscard={cancel}
          onRecordAgain={rePick}
        />
      ) : null}
    </>,
    document.body,
  );
}
