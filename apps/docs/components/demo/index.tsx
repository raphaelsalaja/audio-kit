"use client";

import type { SoundDefinition } from "audio-kit";
import { defineSound, ensureReady } from "audio-kit";
import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PlayIcon, SpeakerIcon } from "@/components/controls/icons";
import {
  formatValue,
  getNestedValue,
  setNestedValue,
} from "@/components/controls/utils";
import { useVisualizer } from "@/components/controls/visualizer";
import styles from "./styles.module.css";

type Control = {
  param: string;
  label: string;
  min: number;
  max: number;
  step?: number;
};

interface DemoProps {
  label: string;
  definition: SoundDefinition;
  controls?: Control[];
}

// --- Knob tick sound ---

let knobTick: ReturnType<typeof defineSound> | null = null;

function playTick() {
  if (!knobTick) {
    knobTick = defineSound({
      source: { type: "sine", frequency: 3200 },
      envelope: { decay: 0.006 },
      gain: 0.06,
    });
  }
  knobTick();
}

// --- Knob ---

const ARC_START = 135;
const ARC_END = 405;
const ARC_SWEEP = ARC_END - ARC_START;

function polarToCartesian(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
) {
  const start = polarToCartesian(cx, cy, r, endDeg);
  const end = polarToCartesian(cx, cy, r, startDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

function Knob({
  control,
  value,
  onChange,
}: {
  control: Control;
  value: number;
  onChange: (param: string, value: number) => void;
}) {
  const knobRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startY = useRef(0);
  const startValue = useRef(0);
  const lastStepIndex = useRef(0);

  const normalized = (value - control.min) / (control.max - control.min);
  const angleDeg = ARC_START + normalized * ARC_SWEEP;

  const size = 48;
  const cx = size / 2;
  const cy = size / 2;
  const r = 19;
  const strokeWidth = 3;

  const trackPath = describeArc(cx, cy, r, ARC_START, ARC_END);
  const valuePath =
    normalized > 0.003 ? describeArc(cx, cy, r, ARC_START, angleDeg) : "";

  const indicator = polarToCartesian(cx, cy, r - 7, angleDeg);

  const step = control.step ?? 0.01;
  const sensitivity = (control.max - control.min) / 150;
  const tickStep =
    step * Math.max(1, Math.round((control.max - control.min) / step / 40));

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const delta = startY.current - e.clientY;
      let next = startValue.current + delta * sensitivity;
      next = Math.round(next / step) * step;
      next = Math.max(control.min, Math.min(control.max, next));

      const stepIndex = Math.round(next / tickStep);
      if (stepIndex !== lastStepIndex.current) {
        lastStepIndex.current = stepIndex;
        playTick();
      }

      onChange(control.param, next);
    };

    const handleUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      document.body.style.cursor = "";
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [
    control.min,
    control.max,
    control.param,
    sensitivity,
    step,
    tickStep,
    onChange,
  ]);

  const handleDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      dragging.current = true;
      startY.current = e.clientY;
      startValue.current = value;
      lastStepIndex.current = Math.round(value / tickStep);
      document.body.style.cursor = "ns-resize";
    },
    [value, tickStep],
  );

  return (
    <div className={styles.knobContainer}>
      <div
        ref={knobRef}
        className={styles.knob}
        onPointerDown={handleDown}
        role="slider"
        aria-label={control.label}
        aria-valuemin={control.min}
        aria-valuemax={control.max}
        aria-valuenow={value}
        tabIndex={0}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          aria-hidden="true"
        >
          <path
            d={trackPath}
            fill="none"
            stroke="var(--gray-a4)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {valuePath && (
            <path
              d={valuePath}
              fill="none"
              stroke="var(--gray-12)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )}
          <circle
            cx={indicator.x}
            cy={indicator.y}
            r={2.5}
            fill="var(--gray-12)"
          />
        </svg>
      </div>
      <span className={styles.knobLabel}>{control.label}</span>
      <span className={styles.knobValue}>
        {formatValue(value, control.step)}
      </span>
    </div>
  );
}

// --- Demo variants ---

function DemoInteractive({
  label,
  definition,
  controls,
}: Required<Pick<DemoProps, "controls">> & DemoProps) {
  const [active, setActive] = useState(false);
  const playRef = useRef<ReturnType<typeof defineSound> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { start: startVis, stop: stopVis } = useVisualizer(canvasRef);

  const initialValues = useMemo(() => {
    const vals: Record<string, number> = {};
    for (const c of controls) {
      vals[c.param] = getNestedValue(
        definition as unknown as Record<string, unknown>,
        c.param,
      );
    }
    return vals;
  }, [controls, definition]);

  const [values, setValues] = useState(initialValues);

  const currentDefinition = useMemo(() => {
    let def = definition as unknown as Record<string, unknown>;
    for (const [param, val] of Object.entries(values)) {
      def = setNestedValue(def, param, val);
    }
    return def as unknown as SoundDefinition;
  }, [definition, values]);

  const handleChange = useCallback((param: string, value: number) => {
    setValues((prev) => ({ ...prev, [param]: value }));
    playRef.current = null;
  }, []);

  const handlePlay = useCallback(async () => {
    await ensureReady();
    if (!playRef.current) {
      playRef.current = defineSound(currentDefinition);
    }
    playRef.current();
    startVis();
    setActive(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive(false);
      stopVis();
    }, 400);
  }, [currentDefinition, startVis, stopVis]);

  return (
    <div className={styles.demo}>
      <div className={styles.visualizerArea}>
        <canvas ref={canvasRef} className={styles.canvas} />
        <button
          type="button"
          className={styles.playOverlay}
          data-active={active || undefined}
          onClick={handlePlay}
        >
          <span className={styles.playButtonIcon}>
            {active ? <SpeakerIcon /> : <PlayIcon />}
          </span>
        </button>
      </div>
      <div className={styles.controlsBar}>
        <div className={styles.knobs}>
          {controls.map((control) => (
            <Knob
              key={control.param}
              control={control}
              value={values[control.param]}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}

function DemoSimple({ label, definition }: DemoProps) {
  const [active, setActive] = useState(false);
  const playRef = useRef<ReturnType<typeof defineSound> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { start: startVis, stop: stopVis } = useVisualizer(canvasRef);

  const handlePlay = useCallback(async () => {
    await ensureReady();
    if (!playRef.current) {
      playRef.current = defineSound(definition);
    }
    playRef.current();
    startVis();
    setActive(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive(false);
      stopVis();
    }, 400);
  }, [definition, startVis, stopVis]);

  return (
    <div className={styles.demo}>
      <div className={styles.visualizerArea}>
        <canvas ref={canvasRef} className={styles.canvas} />
        <button
          type="button"
          className={styles.playOverlay}
          data-active={active || undefined}
          onClick={handlePlay}
        >
          <span className={styles.playButtonIcon}>
            {active ? <SpeakerIcon /> : <PlayIcon />}
          </span>
        </button>
      </div>
      <div className={styles.footer}>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}

export function Demo({ label, definition, controls }: DemoProps) {
  if (controls && controls.length > 0) {
    return (
      <DemoInteractive
        label={label}
        definition={definition}
        controls={controls}
      />
    );
  }
  return <DemoSimple label={label} definition={definition} />;
}

export function DemoGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}
