"use client";

import { useRef } from "react";
import type { EnvelopeConfig } from "../types";
import rackStyles from "./rack-editor.module.css";

const W = 260;
const H = 120;
const PAD = 14;
const DRAW_W = W - PAD * 2;
const DRAW_H = H - PAD * 2;

type DragTarget = "attack" | "decay" | "release";

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

export function AdsrEditor({
  value,
  onChange,
  totalTime,
}: {
  value: EnvelopeConfig;
  onChange: (next: EnvelopeConfig) => void;
  /**
   * Clip duration in seconds — acts as the ruler for the ADSR display.
   * Handles are constrained so A + D + R ≤ totalTime.
   * Editing ADSR never changes this value; only clip resize does.
   */
  totalTime: number;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<DragTarget | null>(null);

  // Visual sustain hold: 12 % of the total window, minimum 50 ms
  const SUS_VIS = Math.max(0.05, totalTime * 0.12);

  const svgX = (seconds: number) =>
    PAD + clamp(seconds / totalTime, 0, 1) * DRAW_W;
  const svgY = (level: number) => PAD + (1 - clamp(level, 0, 1)) * DRAW_H;

  const { attack: a, decay: d, sustain: s, release: r } = value;

  const tA = a;
  const tD = a + d;
  const tS = a + d + SUS_VIS;
  const tR = a + d + SUS_VIS + r;

  const pStart = [svgX(0), svgY(0)] as const;
  const pAttack = [svgX(tA), svgY(1)] as const;
  const pDecay = [svgX(tD), svgY(s)] as const;
  const pSusEnd = [svgX(tS), svgY(s)] as const;
  const pRelEnd = [svgX(tR), svgY(0)] as const;

  const curvePath = [
    `M ${pStart[0]} ${pStart[1]}`,
    `L ${pAttack[0]} ${pAttack[1]}`,
    `L ${pDecay[0]} ${pDecay[1]}`,
    `L ${pSusEnd[0]} ${pSusEnd[1]}`,
    `L ${pRelEnd[0]} ${pRelEnd[1]}`,
  ].join(" ");

  const fillPath = `${curvePath} L ${pRelEnd[0]} ${svgY(0)} L ${pStart[0]} ${svgY(0)} Z`;

  const getCoords = (e: React.PointerEvent): { x: number; y: number } => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const rect = svg.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * W,
      y: ((e.clientY - rect.top) / rect.height) * H,
    };
  };

  // Convert SVG x → seconds within the stable totalTime window
  const toTime = (sx: number) =>
    clamp(((sx - PAD) / DRAW_W) * totalTime, 0, totalTime);
  const toLevel = (sy: number) => clamp(1 - (sy - PAD) / DRAW_H, 0, 1);

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const { x, y } = getCoords(e);
    const t = toTime(x);

    if (drag === "attack") {
      // attack can slide between 0 and (totalTime - d - SUS_VIS - r)
      const maxA = Math.max(0, totalTime - d - SUS_VIS - r);
      onChange({ ...value, attack: clamp(t, 0, maxA) });
    } else if (drag === "decay") {
      // decay endpoint position must leave room for SUS_VIS and release
      const decayEndMax = totalTime - SUS_VIS - r;
      const decayEnd = clamp(t, a + 0.001, decayEndMax);
      const newD = decayEnd - a;
      const newS = clamp(toLevel(y), 0, 1);
      onChange({ ...value, decay: newD, sustain: newS });
    } else if (drag === "release") {
      // release endpoint is at tS + r; it must stay ≤ totalTime
      const maxR = Math.max(0, totalTime - a - d - SUS_VIS);
      const newR = clamp(t - tS, 0, maxR);
      onChange({ ...value, release: newR });
    }
  };

  const handles: {
    key: DragTarget;
    pos: readonly [number, number];
    label: string;
  }[] = [
    { key: "attack", pos: pAttack, label: `A ${a.toFixed(2)}s` },
    {
      key: "decay",
      pos: pDecay,
      label: `D ${d.toFixed(2)}s  S ${s.toFixed(2)}`,
    },
    { key: "release", pos: pRelEnd, label: `R ${r.toFixed(2)}s` },
  ];

  return (
    <div className={rackStyles.adsrWrap}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className={rackStyles.adsrSvg}
        role="img"
        aria-label="ADSR envelope editor"
        onPointerMove={onPointerMove}
        onPointerUp={() => {
          dragRef.current = null;
        }}
        onPointerLeave={() => {
          dragRef.current = null;
        }}
      >
        <title>ADSR envelope editor</title>
        {/* axes */}
        <line
          x1={PAD}
          y1={PAD}
          x2={PAD}
          y2={PAD + DRAW_H}
          className={rackStyles.adsrAxis}
        />
        <line
          x1={PAD}
          y1={PAD + DRAW_H}
          x2={PAD + DRAW_W}
          y2={PAD + DRAW_H}
          className={rackStyles.adsrAxis}
        />

        {/* sustain level dashed reference */}
        <line
          x1={PAD}
          y1={svgY(s)}
          x2={pSusEnd[0]}
          y2={svgY(s)}
          className={rackStyles.adsrRef}
        />

        {/* filled area under curve */}
        <path d={fillPath} className={rackStyles.adsrFill} />

        {/* curve */}
        <path d={curvePath} className={rackStyles.adsrCurve} />

        {/* phase divider ticks on x-axis */}
        {[pAttack[0], pDecay[0], pSusEnd[0]].map((x, i) => (
          <line
            // biome-ignore lint/suspicious/noArrayIndexKey: positional index
            key={i}
            x1={x}
            y1={PAD + DRAW_H - 3}
            x2={x}
            y2={PAD + DRAW_H + 3}
            className={rackStyles.adsrTick}
          />
        ))}

        {/* handles */}
        {handles.map(({ key, pos }) => (
          <rect
            key={key}
            x={pos[0] - 5}
            y={pos[1] - 5}
            width={10}
            height={10}
            rx={2}
            className={rackStyles.adsrHandle}
            onPointerDown={(e) => {
              e.preventDefault();
              dragRef.current = key;
              (e.target as Element).setPointerCapture(e.pointerId);
            }}
          />
        ))}
      </svg>

      {/* value readout */}
      <div className={rackStyles.adsrValues}>
        {handles.map(({ key, label }) => (
          <span key={key} className={rackStyles.adsrValueLabel}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
