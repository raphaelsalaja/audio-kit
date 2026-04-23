"use client";

import { Select } from "@base-ui/react/select";
import type { AudioAnalyser } from "@web-kits/audio";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CheckIcon,
  PlayIcon,
  PlusIcon,
  TrashIcon,
} from "@/components/controls/icons";
import type { Layer } from "../types";
import styles from "./preview-editor.module.css";
import controlStyles from "./preview-editor-controls.module.css";

const ROW_COUNT = 3;
const ROW_IDS = ["row-0", "row-1", "row-2"] as const;
const UNITS_PER_SECOND = 4;
const RULER_PRESETS_SECONDS = [3, 5, 8] as const;
const SNAP_PRESETS: { label: string; value: number | null }[] = [
  { label: "None", value: null },
  { label: "0.25 step", value: 0.25 },
  { label: "0.5 step", value: 0.5 },
];
const STATIC_WAVE_BINS = 240;

type DragZone = "move" | "resize-left" | "resize-right";

type DragState = {
  zone: DragZone;
  layerId: string;
  startX: number;
  startY: number;
  origStart: number;
  origLength: number;
  origRow: number;
};

export type VizScheduleEntry = { id: string; delay: number };
export type VizOptions = {
  /** Where the playhead starts in the timeline (units). */
  startOffsetUnits: number;
  /** The playhead clamps and stops here (units). */
  maxEndUnits: number;
};

type Props = {
  layers: Layer[];
  activeLayerId?: string;
  soundName: string;
  onSoundNameChange: (name: string) => void;
  onAddLayer: () => void;
  onDeleteLayer: () => void;
  onClearLayers: () => void;
  onSelectLayer: (layerId: string) => void;
  onUpdateLayer: (layerId: string, updater: (layer: Layer) => Layer) => void;
  onPlayAll: () => void;
  onPlaySelected: () => void;
  analyserRef: React.RefObject<AudioAnalyser | null>;
  onMountVisualizer: (
    startFn: (schedule: VizScheduleEntry[], opts: VizOptions) => void,
  ) => void;
};

function rangesOverlap(
  startA: number,
  lengthA: number,
  startB: number,
  lengthB: number,
) {
  const endA = startA + lengthA;
  const endB = startB + lengthB;
  return startA < endB && startB < endA;
}

function getReleaseEndRatio(lengthUnits: number, envelope: Layer["envelope"]) {
  const totalTime = Math.max(lengthUnits / UNITS_PER_SECOND, 0.001);
  const sustainVisual = Math.max(0.05, totalTime * 0.12);
  const releaseEndSeconds =
    envelope.attack + envelope.decay + sustainVisual + envelope.release;
  return Math.max(0, Math.min(1, releaseEndSeconds / totalTime));
}

function ensureCanvasSize(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  return { w, h };
}

function buildMinMaxPeaks(channel: Float32Array, bins: number): Float32Array {
  const out = new Float32Array(bins * 2);
  if (channel.length === 0) return out;
  const step = channel.length / bins;
  for (let i = 0; i < bins; i++) {
    const start = Math.floor(i * step);
    const end = Math.min(channel.length, Math.floor((i + 1) * step));
    let min = 1;
    let max = -1;
    for (let j = start; j < end; j++) {
      const v = channel[j];
      if (v < min) min = v;
      if (v > max) max = v;
    }
    if (end <= start) {
      const v = channel[Math.min(start, channel.length - 1)] ?? 0;
      min = v;
      max = v;
    }
    out[i * 2] = min;
    out[i * 2 + 1] = max;
  }
  return out;
}

function drawStaticWave(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  peaks: Float32Array,
) {
  const mid = h / 2;
  const amp = h * 0.43;
  const bins = peaks.length / 2;
  if (bins <= 0) return;

  // Draw a single filled silhouette from max(top) + min(bottom) envelopes.
  ctx.fillStyle = "rgba(255,255,255,0.26)";
  ctx.beginPath();

  // Top edge (max)
  for (let i = 0; i < bins; i++) {
    const x = (i / Math.max(1, bins - 1)) * w;
    const max = peaks[i * 2 + 1];
    const y = mid + max * amp;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  // Bottom edge (min), reversed
  for (let i = bins - 1; i >= 0; i--) {
    const x = (i / Math.max(1, bins - 1)) * w;
    const min = peaks[i * 2];
    const y = mid + min * amp;
    ctx.lineTo(x, y);
  }

  ctx.closePath();
  ctx.fill();
}

function getEnvelopeGain(layer: Layer, tSec: number, totalTime: number) {
  const { attack: a, decay: d, sustain: s, release: r } = layer.envelope;
  const sustainVisual = Math.max(0.05, totalTime * 0.12);
  const tA = Math.max(0, a);
  const tD = tA + Math.max(0, d);
  const tS = tD + sustainVisual;
  const tR = tS + Math.max(0, r);

  if (tSec < tA) {
    const denom = Math.max(tA, 0.0001);
    return tSec / denom;
  }
  if (tSec < tD) {
    const denom = Math.max(tD - tA, 0.0001);
    const p = (tSec - tA) / denom;
    return 1 - (1 - s) * p;
  }
  if (tSec < tS) return s;
  if (tSec < tR) {
    const denom = Math.max(tR - tS, 0.0001);
    const p = (tSec - tS) / denom;
    return s * (1 - p);
  }
  return 0;
}

function getLayerFrequencyHz(layer: Layer, tNorm: number) {
  if (
    layer.source.type === "sine" ||
    layer.source.type === "triangle" ||
    layer.source.type === "square" ||
    layer.source.type === "sawtooth"
  ) {
    const f = layer.source.frequency;
    if (typeof f === "number") return Math.max(1, f);
    const start = Math.max(1, f.start);
    const end = Math.max(1, f.end);
    // Exponential interpolation tracks pitch perception better.
    return start * (end / start) ** Math.max(0, Math.min(1, tNorm));
  }

  if (layer.source.type === "wavetable") {
    return Math.max(1, layer.source.frequency);
  }
  if (layer.source.type === "constant") return 0;
  if (layer.source.type === "sample") return 2;
  return 12;
}

function oscillatorSample(layer: Layer, phase01: number, seed: number) {
  const p = phase01 - Math.floor(phase01);
  switch (layer.source.type) {
    case "sine":
      return Math.sin(p * Math.PI * 2);
    case "triangle":
      return 1 - 4 * Math.abs(p - 0.5);
    case "square":
      return p < 0.5 ? 1 : -1;
    case "sawtooth":
      return p * 2 - 1;
    case "wavetable": {
      let sum = 0;
      const harmonics = layer.source.harmonics;
      for (let i = 0; i < harmonics.length; i++) {
        const amp = harmonics[i];
        if (!amp) continue;
        sum += amp * Math.sin((i + 1) * p * Math.PI * 2);
      }
      return Math.max(-1, Math.min(1, sum));
    }
    case "noise": {
      const n = Math.sin((seed + 1) * 12.9898) * 43758.5453;
      const fract = n - Math.floor(n);
      return fract * 2 - 1;
    }
    case "constant":
      return 0.7;
    case "sample":
      return Math.sin(p * Math.PI * 2);
  }
}

function buildLayerPreviewPeaks(layer: Layer, bins: number): Float32Array {
  const out = new Float32Array(bins * 2);
  const totalTime = Math.max(layer.length / UNITS_PER_SECOND, 0.001);
  const dt = totalTime / Math.max(1, bins);
  const subSamples = 20;
  let phase = 0;

  for (let i = 0; i < bins; i++) {
    let min = 1;
    let max = -1;
    for (let j = 0; j < subSamples; j++) {
      const tSec = i * dt + (j / subSamples) * dt;
      const tNorm = Math.max(0, Math.min(1, tSec / totalTime));
      const freq = getLayerFrequencyHz(layer, tNorm);
      phase += freq * (dt / subSamples);
      const raw = oscillatorSample(layer, phase, i * subSamples + j);
      const v = raw * getEnvelopeGain(layer, tSec, totalTime);
      if (v < min) min = v;
      if (v > max) max = v;
    }
    out[i * 2] = min;
    out[i * 2 + 1] = max;
  }
  return out;
}

export function PreviewEditor({
  layers,
  activeLayerId,
  soundName,
  onSoundNameChange,
  onAddLayer,
  onDeleteLayer,
  onClearLayers,
  onSelectLayer,
  onUpdateLayer,
  onPlayAll,
  onPlaySelected,
  analyserRef,
  onMountVisualizer,
}: Props) {
  const [rulerSeconds, setRulerSeconds] = useState<number>(5);
  const [snapStep, setSnapStep] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const rulerDragRef = useRef<{ startX: number; startSeconds: number } | null>(
    null,
  );

  // Waveform visualizer + playhead
  const clipCanvasesRef = useRef<Map<string, HTMLCanvasElement>>(new Map());
  const staticPeaksByLayerRef = useRef<Map<string, Float32Array>>(new Map());
  const samplePeaksCacheRef = useRef<Map<string, Float32Array>>(new Map());
  const rafRef = useRef<number>(0);
  const isDrawingRef = useRef(false);
  const activeVizLayersRef = useRef<Set<string>>(new Set());
  const playStartTimeRef = useRef<number | null>(null);
  const totalUnitsRef = useRef(1); // kept in sync every render
  const startOffsetUnitsRef = useRef(0); // where playhead begins (units)
  const maxEndUnitsRef = useRef(Infinity); // where playhead stops (units)
  const scheduledTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const playheadRef = useRef<HTMLDivElement | null>(null);

  const totalUnits = useMemo(
    () => rulerSeconds * UNITS_PER_SECOND,
    [rulerSeconds],
  );
  // Keep the ref current so the RAF closure can read it without a stale value
  totalUnitsRef.current = totalUnits;

  // Disable "Add layer" when no row has space for a 4-unit clip within the current ruler
  const canAddLayer = useMemo(() => {
    const newLen = 4;
    for (let row = 0; row < ROW_COUNT; row++) {
      const rowLayers = layers
        .filter((l) => l.row === row)
        .sort((a, b) => a.start - b.start);
      let prev = 0;
      for (const l of rowLayers) {
        if (l.start - prev >= newLen) return true;
        prev = Math.max(prev, l.start + l.length);
      }
      if (totalUnits - prev >= newLen) return true;
    }
    return false;
  }, [layers, totalUnits]);

  const drawWaveform = useCallback(() => {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const data = analyser.getTimeDomainData();
    const len = data.length;

    let hasSignal = false;
    for (let i = 0; i < len; i++) {
      if (Math.abs(data[i] - 128) > 1) {
        hasSignal = true;
        break;
      }
    }

    // Advance playhead — clamped to [startOffset, maxEnd]
    const ph = playheadRef.current;
    const t0 = playStartTimeRef.current;
    if (ph && t0 !== null) {
      const elapsed = (performance.now() - t0) / 1000;
      const rawUnits = startOffsetUnitsRef.current + elapsed * UNITS_PER_SECOND;
      const clampedUnits = Math.min(rawUnits, maxEndUnitsRef.current);
      const pct = (clampedUnits / totalUnitsRef.current) * 100;
      ph.style.left = `${Math.min(pct, 100)}%`;
    }

    for (const [layerId, canvas] of clipCanvasesRef.current.entries()) {
      const ctx = canvas.getContext("2d");
      if (!ctx) continue;
      const { w, h } = ensureCanvasSize(canvas, ctx);

      ctx.clearRect(0, 0, w, h);
      const staticPeaks = staticPeaksByLayerRef.current.get(layerId);
      if (staticPeaks) drawStaticWave(ctx, w, h, staticPeaks);

      if (!activeVizLayersRef.current.has(layerId) || !hasSignal) continue;

      ctx.strokeStyle = "rgba(255,255,255,0.55)";
      ctx.lineWidth = 1.2;
      ctx.lineJoin = "round";
      ctx.beginPath();
      const sliceW = w / len;
      for (let i = 0; i < len; i++) {
        const v = (data[i] - 128) / 128;
        const y = h / 2 + v * (h / 2) * 0.85;
        if (i === 0) ctx.moveTo(0, y);
        else ctx.lineTo(i * sliceW, y);
      }
      ctx.stroke();
    }

    if (hasSignal || isDrawingRef.current) {
      rafRef.current = requestAnimationFrame(drawWaveform);
    } else {
      isDrawingRef.current = false;
      activeVizLayersRef.current.clear();
      // Hide playhead once audio decays
      if (ph) ph.style.display = "none";
      playStartTimeRef.current = null;
    }
  }, [analyserRef]);

  const redrawStaticWaveforms = useCallback(() => {
    for (const [layerId, canvas] of clipCanvasesRef.current.entries()) {
      const ctx = canvas.getContext("2d");
      if (!ctx) continue;
      const { w, h } = ensureCanvasSize(canvas, ctx);
      ctx.clearRect(0, 0, w, h);
      const staticPeaks = staticPeaksByLayerRef.current.get(layerId);
      if (staticPeaks) drawStaticWave(ctx, w, h, staticPeaks);
    }
  }, []);

  const startWaveform = useCallback(
    (schedule: VizScheduleEntry[], opts: VizOptions) => {
      // Cancel any pending per-layer timeouts from last play
      for (const t of scheduledTimeoutsRef.current) clearTimeout(t);
      scheduledTimeoutsRef.current = [];

      activeVizLayersRef.current = new Set();
      isDrawingRef.current = true;
      playStartTimeRef.current = performance.now();
      startOffsetUnitsRef.current = opts.startOffsetUnits;
      maxEndUnitsRef.current = opts.maxEndUnits;

      // Pre-position playhead at the layer's start and show it
      if (playheadRef.current) {
        const startPct = (opts.startOffsetUnits / totalUnitsRef.current) * 100;
        playheadRef.current.style.left = `${startPct}%`;
        playheadRef.current.style.display = "block";
      }

      // Each layer activates its waveform canvas at the right delay
      for (const { id, delay } of schedule) {
        if (delay <= 0) {
          activeVizLayersRef.current.add(id);
        } else {
          const t = setTimeout(() => {
            activeVizLayersRef.current.add(id);
          }, delay * 1000);
          scheduledTimeoutsRef.current.push(t);
        }
      }

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(drawWaveform);
    },
    [drawWaveform],
  );

  // Expose startWaveform to parent
  useEffect(() => {
    onMountVisualizer(startWaveform);
  }, [onMountVisualizer, startWaveform]);

  useEffect(() => {
    let cancelled = false;

    const getAudioContext = () => {
      const AC = window.AudioContext;
      return AC ? new AC() : null;
    };

    const loadSamplePeaks = async (url: string) => {
      const cached = samplePeaksCacheRef.current.get(url);
      if (cached) return cached;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch sample: ${res.status}`);
      const buf = await res.arrayBuffer();
      const ctx = getAudioContext();
      if (!ctx) return null;
      try {
        const audioBuffer = await ctx.decodeAudioData(buf.slice(0));
        const data = audioBuffer.getChannelData(0);
        const peaks = buildMinMaxPeaks(data, STATIC_WAVE_BINS);
        samplePeaksCacheRef.current.set(url, peaks);
        return peaks;
      } finally {
        await ctx.close();
      }
    };

    const run = async () => {
      const liveIds = new Set(layers.map((layer) => layer.id));
      for (const id of staticPeaksByLayerRef.current.keys()) {
        if (!liveIds.has(id)) staticPeaksByLayerRef.current.delete(id);
      }

      for (const layer of layers) {
        if (layer.source.type !== "sample") {
          staticPeaksByLayerRef.current.set(
            layer.id,
            buildLayerPreviewPeaks(layer, STATIC_WAVE_BINS),
          );
          continue;
        }
        const url = layer.source.url?.trim();
        if (!url) {
          staticPeaksByLayerRef.current.delete(layer.id);
          continue;
        }
        try {
          const peaks = await loadSamplePeaks(url);
          if (cancelled) return;
          if (!peaks) {
            staticPeaksByLayerRef.current.set(
              layer.id,
              buildLayerPreviewPeaks(layer, STATIC_WAVE_BINS),
            );
          } else {
            staticPeaksByLayerRef.current.set(layer.id, peaks);
          }
          redrawStaticWaveforms();
        } catch {
          staticPeaksByLayerRef.current.set(
            layer.id,
            buildLayerPreviewPeaks(layer, STATIC_WAVE_BINS),
          );
        }
      }
      if (!cancelled) redrawStaticWaveforms();
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [layers, redrawStaticWaveforms]);

  // Ruler drag — horizontal drag changes the rulerSeconds
  const handleRulerPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      rulerDragRef.current = { startX: e.clientX, startSeconds: rulerSeconds };
    },
    [rulerSeconds],
  );

  const handleRulerPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!rulerDragRef.current) return;
      // Drag left = more time, drag right = less time (reversed); step in whole seconds
      const delta = rulerDragRef.current.startX - e.clientX;
      const raw = rulerDragRef.current.startSeconds + delta * 0.06;
      const next = Math.round(Math.max(1, Math.min(60, raw)));
      setRulerSeconds((prev) => (prev === next ? prev : next));
    },
    [],
  );

  const handleRulerPointerUp = useCallback(() => {
    rulerDragRef.current = null;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      for (const t of scheduledTimeoutsRef.current) clearTimeout(t);
    };
  }, []);

  const setClipCanvas = useCallback(
    (layerId: string, el: HTMLCanvasElement | null) => {
      if (el) {
        clipCanvasesRef.current.set(layerId, el);
        const ctx = el.getContext("2d");
        if (ctx) {
          const { w, h } = ensureCanvasSize(el, ctx);
          ctx.clearRect(0, 0, w, h);
          const staticPeaks = staticPeaksByLayerRef.current.get(layerId);
          if (staticPeaks) drawStaticWave(ctx, w, h, staticPeaks);
        }
      } else {
        clipCanvasesRef.current.delete(layerId);
      }
    },
    [],
  );

  const handleClipPointerDown = useCallback(
    (e: React.PointerEvent, layer: Layer, zone: DragZone) => {
      e.preventDefault();
      e.stopPropagation();
      onSelectLayer(layer.id);

      dragRef.current = {
        zone,
        layerId: layer.id,
        startX: e.clientX,
        startY: e.clientY,
        origStart: layer.start,
        origLength: layer.length,
        origRow: layer.row,
      };

      containerRef.current?.setPointerCapture(e.pointerId);
    },
    [onSelectLayer],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const drag = dragRef.current;
      if (!drag || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const beatWidth = rect.width / totalUnits;
      const rowHeight = rect.height / ROW_COUNT;

      const dx = e.clientX - drag.startX;
      const dy = e.clientY - drag.startY;
      const rawDelta = dx / beatWidth;
      const deltaBeats =
        snapStep !== null
          ? Math.round(rawDelta / snapStep) * snapStep
          : rawDelta;
      const deltaRows = Math.round(dy / rowHeight);
      const siblings = layers.filter((layer) => layer.id !== drag.layerId);
      const hasRowCollision = (row: number, start: number, length: number) =>
        siblings.some(
          (sibling) =>
            sibling.row === row &&
            rangesOverlap(start, length, sibling.start, sibling.length),
        );

      onUpdateLayer(drag.layerId, (layer) => {
        switch (drag.zone) {
          case "move": {
            const newStart = Math.max(
              0,
              Math.min(
                totalUnits - drag.origLength,
                drag.origStart + deltaBeats,
              ),
            );
            const newRow = Math.max(
              0,
              Math.min(ROW_COUNT - 1, drag.origRow + deltaRows),
            );
            if (hasRowCollision(newRow, newStart, drag.origLength))
              return layer;
            return { ...layer, start: newStart, row: newRow };
          }
          case "resize-right": {
            const newLength = Math.max(
              snapStep ?? 0.1,
              Math.min(
                totalUnits - drag.origStart,
                drag.origLength + deltaBeats,
              ),
            );
            if (hasRowCollision(layer.row, drag.origStart, newLength))
              return layer;
            return { ...layer, length: newLength };
          }
          case "resize-left": {
            const newStart = Math.max(
              0,
              Math.min(
                drag.origStart + drag.origLength - 1,
                drag.origStart + deltaBeats,
              ),
            );
            const newLength = drag.origLength - (newStart - drag.origStart);
            if (hasRowCollision(layer.row, newStart, newLength)) return layer;
            return { ...layer, start: newStart, length: newLength };
          }
        }
      });
    },
    [layers, onUpdateLayer, totalUnits, snapStep],
  );

  const handlePointerUp = useCallback(() => {
    dragRef.current = null;
  }, []);

  return (
    <section className={styles.panel}>
      {/* header */}
      <div className={styles.panelHeader}>
        <input
          className={styles.soundNameInput}
          value={soundName}
          onChange={(e) => onSoundNameChange(e.target.value)}
          spellCheck={false}
          aria-label="Sound name"
        />
        <div className={controlStyles.controls}>
          <div className={controlStyles.control}>
            <span className={controlStyles.controlLabel}>Ruler</span>
            <Select.Root
              value={String(rulerSeconds)}
              onValueChange={(next) => setRulerSeconds(Number(next))}
            >
              <Select.Trigger className={controlStyles.controlSelect}>
                <Select.Value />
                <Select.Icon className={controlStyles.selectIcon}>
                  <ChevronDown />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Positioner className={controlStyles.selectPositioner}>
                  <Select.Popup className={controlStyles.selectPopup}>
                    {RULER_PRESETS_SECONDS.map((seconds) => (
                      <Select.Item
                        key={seconds}
                        className={controlStyles.selectItem}
                        value={String(seconds)}
                      >
                        <Select.ItemText>{seconds}s</Select.ItemText>
                        <Select.ItemIndicator
                          className={controlStyles.selectIndicator}
                        >
                          <CheckIcon size={12} />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Popup>
                </Select.Positioner>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className={controlStyles.control}>
            <span className={controlStyles.controlLabel}>Snap</span>
            <Select.Root
              value={snapStep === null ? "none" : String(snapStep)}
              onValueChange={(next) =>
                setSnapStep(next === "none" ? null : Number(next))
              }
            >
              <Select.Trigger className={controlStyles.controlSelect}>
                <Select.Value />
                <Select.Icon className={controlStyles.selectIcon}>
                  <ChevronDown />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Positioner className={controlStyles.selectPositioner}>
                  <Select.Popup className={controlStyles.selectPopup}>
                    {SNAP_PRESETS.map(({ label, value }) => (
                      <Select.Item
                        key={label}
                        className={controlStyles.selectItem}
                        value={value === null ? "none" : String(value)}
                      >
                        <Select.ItemText>{label}</Select.ItemText>
                        <Select.ItemIndicator
                          className={controlStyles.selectIndicator}
                        >
                          <CheckIcon size={12} />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Popup>
                </Select.Positioner>
              </Select.Portal>
            </Select.Root>
          </div>

          <button
            type="button"
            className={styles.playButton}
            onClick={onAddLayer}
            disabled={!canAddLayer}
            title={
              !canAddLayer
                ? "No space in timeline — drag the ruler to extend it"
                : undefined
            }
          >
            <PlusIcon size={12} /> Add layer
          </button>
        </div>
      </div>

      {/* ruler — drag horizontally to resize the timeline */}
      {(() => {
        const showSubTicks = rulerSeconds <= 5;
        const cols = showSubTicks ? totalUnits : rulerSeconds;
        const step = showSubTicks ? 1 : UNITS_PER_SECOND;
        return (
          <div
            className={styles.ruler}
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
            onPointerDown={handleRulerPointerDown}
            onPointerMove={handleRulerPointerMove}
            onPointerUp={handleRulerPointerUp}
            onPointerCancel={handleRulerPointerUp}
          >
            {Array.from({ length: cols }, (_, i) => {
              const unitIndex = i * step;
              const isSecond = unitIndex % UNITS_PER_SECOND === 0;
              return (
                <span
                  key={unitIndex}
                  className={
                    showSubTicks && !isSecond ? styles.rulerSubTick : undefined
                  }
                >
                  {isSecond ? `${unitIndex / UNITS_PER_SECOND}s` : ""}
                </span>
              );
            })}
          </div>
        );
      })()}

      {/* canvas */}
      <div
        ref={containerRef}
        className={styles.canvas}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {ROW_IDS.map((rowId) => (
          <div key={rowId} className={styles.row} />
        ))}

        {/* playhead */}
        <div
          ref={playheadRef}
          className={styles.playhead}
          style={{ display: "none" }}
        />

        {layers.length === 0 && (
          <div className={styles.emptyState}>
            <span className={styles.emptyStateText}>No layers yet</span>
            <button
              type="button"
              className={styles.playButton}
              onClick={onAddLayer}
            >
              <PlusIcon size={12} /> Add layer
            </button>
          </div>
        )}

        {layers.map((layer) => {
          const releaseEndRatio = getReleaseEndRatio(
            layer.length,
            layer.envelope,
          );
          const showReleaseMarker =
            releaseEndRatio > 0.01 && releaseEndRatio < 0.999;

          return (
            <div
              key={layer.id}
              className={`${styles.clip} ${layer.id === activeLayerId ? styles.activeClip : ""}`}
              style={{
                top: `${(layer.row / ROW_COUNT) * 100}%`,
                left: `${(layer.start / totalUnits) * 100}%`,
                width: `${(layer.length / totalUnits) * 100}%`,
                height: `${(1 / ROW_COUNT) * 100}%`,
              }}
            >
              <div
                className={styles.edgeLeft}
                onPointerDown={(e) =>
                  handleClipPointerDown(e, layer, "resize-left")
                }
              />
              <div
                className={styles.clipBody}
                onPointerDown={(e) => handleClipPointerDown(e, layer, "move")}
              >
                <canvas
                  className={styles.clipWaveform}
                  ref={(el) => setClipCanvas(layer.id, el)}
                />
                {showReleaseMarker && (
                  <div
                    className={styles.clipReleaseMarker}
                    style={{ left: `${releaseEndRatio * 100}%` }}
                    aria-hidden="true"
                  />
                )}
                <WaveformIcon type={layer.source.type} />
                <span className={styles.clipLabel}>{layer.name}</span>
                {layer.mix?.gain !== undefined && (
                  <span className={styles.clipVolume} aria-hidden="true">
                    {Math.round(layer.mix.gain * 100)}%
                  </span>
                )}
              </div>
              <div
                className={styles.edgeRight}
                onPointerDown={(e) =>
                  handleClipPointerDown(e, layer, "resize-right")
                }
              />
            </div>
          );
        })}
      </div>

      {/* play bar */}
      <div className={styles.playBar}>
        <div className={styles.playBarLeft}>
          {activeLayerId && (
            <span className={styles.activeLayerLabel}>
              {layers.find((l) => l.id === activeLayerId)?.name ?? ""} selected
            </span>
          )}
          <button
            type="button"
            className={styles.deleteLayerBtn}
            onClick={onDeleteLayer}
            disabled={layers.length <= 1}
            aria-label="Delete layer"
            title={
              layers.length <= 1
                ? "Cannot delete the last layer"
                : "Delete active layer"
            }
          >
            <TrashIcon size={12} />
          </button>
          <button
            type="button"
            className={styles.clearLayersBtn}
            onClick={onClearLayers}
            disabled={layers.length === 0}
            aria-label="Clear all layers"
            title="Clear all layers"
          >
            Clear all
          </button>
        </div>

        <div className={styles.playBarRight}>
          <button
            type="button"
            className={styles.playButton}
            onClick={onPlaySelected}
            aria-label="Play Selected"
          >
            <PlayIcon size={12} />
            Play Selected
            <kbd className={styles.playKbd}>LMB + Space</kbd>
          </button>
          <button
            type="button"
            className={`${styles.playButton} ${styles.playButtonPrimary}`}
            onClick={onPlayAll}
            aria-label="Play All"
          >
            <PlayIcon size={12} />
            Play
            <kbd className={styles.playKbd}>Space</kbd>
          </button>
        </div>
      </div>
    </section>
  );
}

const WAVE_PATHS: Record<string, string> = {
  sine: "M0,5 C3,0 7,0 10,5 C13,10 17,10 20,5",
  triangle: "M0,10 L5,0 L10,10 L15,0 L20,10",
  square: "M0,9 L0,1 L9,1 L9,9 L11,9 L11,1 L20,1",
  sawtooth: "M0,10 L10,0 L10,10 L20,0",
  noise: "M0,5 L2,2 L4,8 L6,3 L8,7 L10,4 L12,9 L14,2 L16,7 L18,3 L20,5",
  wavetable: "M0,5 C3,0 7,0 10,5 C13,10 17,10 20,5",
  sample: "M0,5 L2,3 L4,7 L6,2 L8,8 L10,4 L12,6 L14,1 L16,7 L18,4 L20,5",
  constant: "M2,5 L18,5",
};

function WaveformIcon({ type }: { type: string }) {
  const d = WAVE_PATHS[type] ?? WAVE_PATHS.sine;
  return (
    <svg
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      aria-hidden="true"
      className={styles.clipWaveIcon}
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
