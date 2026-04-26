"use client";

import { useRef, useState } from "react";
import rackStyles from "./rack-editor.module.css";

const SZ = 44;
const CX = SZ / 2;
const CY = SZ / 2;
const R_TRACK = 17;
const R_BODY = 12;
const MIN_DEG = 135; // 7 o'clock
const SWEEP = 270; // total arc degrees
const BASE_DRAG_PIXELS_PER_RANGE = 420;
const SHIFT_DRAG_PIXELS_PER_RANGE = 140;

type KnobEasing = "linear" | "ease-in" | "log";

function polar(r: number, deg: number): [number, number] {
  const rad = (deg * Math.PI) / 180;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
}

function arcPath(r: number, startDeg: number, sweepDeg: number): string {
  const clamped = Math.min(Math.max(sweepDeg, 0), 359.99);
  if (clamped === 0) return "";
  const [sx, sy] = polar(r, startDeg);
  const [ex, ey] = polar(r, startDeg + clamped);
  const large = clamped > 180 ? 1 : 0;
  return `M ${sx.toFixed(3)} ${sy.toFixed(3)} A ${r} ${r} 0 ${large} 1 ${ex.toFixed(3)} ${ey.toFixed(3)}`;
}

type KnobProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  easing?: KnobEasing;
  easingPower?: number;
  onChange: (next: number) => void;
  /** Value to snap back to on double-click. */
  resetValue?: number;
};

export function Knob({
  label,
  value,
  min,
  max,
  step = 0.01,
  easing = "linear",
  easingPower = 2,
  onChange,
  resetValue,
}: KnobProps) {
  const dragRef = useRef<{ y: number; startNorm: number } | null>(null);
  const [visualNormOverride, setVisualNormOverride] = useState<number | null>(
    null,
  );
  const range = max - min;
  const hasLogDomain = min > 0 && max > min;
  const logRatio = hasLogDomain ? max / min : 1;

  const applyEasing = (n: number) => {
    if (easing === "log" && hasLogDomain) {
      const scaled = min * logRatio ** n;
      return (scaled - min) / range;
    }
    if (easing === "ease-in") return n ** easingPower;
    return n;
  };

  const invertEasing = (n: number) => {
    if (easing === "log" && hasLogDomain) {
      const scaled = min + n * range;
      return Math.log(scaled / min) / Math.log(logRatio);
    }
    if (easing === "ease-in") return n ** (1 / easingPower);
    return n;
  };

  const safeValue =
    typeof value === "number" && Number.isFinite(value) ? value : min;
  const norm =
    range <= 0 ? 0 : Math.max(0, Math.min(1, (safeValue - min) / range));
  const visualNorm = visualNormOverride ?? invertEasing(norm);
  const valueSweep = visualNorm * SWEEP;
  const [ix, iy] = polar(R_BODY - 2.5, MIN_DEG + visualNorm * SWEEP);

  const decimals = step < 0.1 ? 2 : step < 1 ? 1 : 0;
  const display = safeValue.toFixed(decimals);

  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    const startNorm = invertEasing(norm);
    dragRef.current = { y: e.clientY, startNorm };
    setVisualNormOverride(startNorm);
  };

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const pixelsPerRange = e.shiftKey
      ? SHIFT_DRAG_PIXELS_PER_RANGE
      : BASE_DRAG_PIXELS_PER_RANGE;
    const deltaY = drag.y - e.clientY; // up = positive
    const deltaNorm = deltaY / pixelsPerRange;
    const rawNorm = Math.max(0, Math.min(1, drag.startNorm + deltaNorm));
    setVisualNormOverride(rawNorm);
    const easedNorm = applyEasing(rawNorm);
    const raw = min + easedNorm * range;
    const snapped = Math.round(raw / step) * step;
    onChange(Math.max(min, Math.min(max, snapped)));
  };

  const onPointerUp = () => {
    dragRef.current = null;
    setVisualNormOverride(null);
  };

  const onDoubleClick = () => {
    if (resetValue !== undefined) onChange(resetValue);
  };

  return (
    <div className={rackStyles.knob}>
      <svg
        viewBox={`0 0 ${SZ} ${SZ}`}
        width={SZ}
        height={SZ}
        className={rackStyles.knobSvg}
        role="img"
        aria-label={`${label} knob`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onDoubleClick={onDoubleClick}
      >
        <title>{`${label} knob`}</title>
        {/* background track */}
        <path
          d={arcPath(R_TRACK, MIN_DEG, SWEEP)}
          className={rackStyles.knobTrack}
        />
        {/* value arc */}
        <path
          d={arcPath(R_TRACK, MIN_DEG, valueSweep)}
          className={rackStyles.knobArc}
        />
        {/* body */}
        <circle cx={CX} cy={CY} r={R_BODY} className={rackStyles.knobBody} />
        {/* indicator */}
        <circle cx={ix} cy={iy} r={1.8} className={rackStyles.knobDot} />
      </svg>
      <span className={rackStyles.knobLabel}>{label}</span>
      <span className={rackStyles.knobValue}>{display}</span>
    </div>
  );
}
