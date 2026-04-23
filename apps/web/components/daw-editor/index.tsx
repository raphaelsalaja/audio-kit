"use client";

import type { AudioAnalyser } from "@web-kits/audio";
import {
  createMasterAnalyser,
  defineSound,
  ensureReady,
} from "@web-kits/audio";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DawCodeOutput } from "./code-output";
import {
  PreviewEditor,
  type VizOptions,
  type VizScheduleEntry,
} from "./sections/preview-editor";
import { RackEditor } from "./sections/rack-editor";
import styles from "./styles.module.css";
import type {
  EffectConfig,
  FilterConfig,
  Layer,
  LfoConfig,
  RackItem,
  RackItemConfig,
  RackItemType,
  SpatialConfig,
} from "./types";

const UNITS_PER_SECOND = 4;

const DEFAULT_SOURCE_ITEM: RackItem = {
  id: "source-1",
  type: "source",
  name: "Essential Source",
};

const DEFAULT_MIX_ITEM: RackItem = {
  id: "mix-1",
  type: "mix",
  name: "Mixer",
};

const INITIAL_LAYERS: Layer[] = [
  {
    id: "layer-1",
    name: "Layer 1",
    row: 0,
    start: 0,
    length: 4,
    rack: [DEFAULT_SOURCE_ITEM, DEFAULT_MIX_ITEM],
    source: { type: "sine", frequency: 440, detune: 0 },
    envelope: { attack: 0, decay: 0.3, sustain: 0, release: 0 },
    mix: { gain: 0.8, pan: 0 },
  },
];

const DEFAULT_RACK_CONFIGS: Partial<Record<RackItemType, RackItemConfig>> = {
  filter: { filterType: "lowpass", frequency: 1000, resonance: 1, gain: 0 },
  effect: {
    effectType: "reverb",
    decay: 0.5,
    preDelay: 0,
    damping: 0,
    roomSize: 1,
    mix: 0.3,
  },
  lfo: { lfoType: "sine", frequency: 1, depth: 100, target: "frequency" },
  spatial: {
    positionX: 0,
    positionY: 0,
    positionZ: -1,
    panningModel: "HRTF",
    distanceModel: "inverse",
    rolloffFactor: 1,
  },
};

function createRackItem(
  type: Exclude<RackItemType, "source">,
  idx: number,
): RackItem {
  return {
    id: `${type}-${idx}`,
    type,
    name: `${type.toUpperCase()} ${idx}`,
    config: DEFAULT_RACK_CONFIGS[type],
  };
}

/** Converts a DAW layer into the audio engine layer definition */
function layerToDefinition(layer: Layer) {
  const positionDelay = layer.start / UNITS_PER_SECOND;

  const filterDefs = layer.rack
    .filter((r) => r.type === "filter" && r.config && !r.bypassed)
    .map((r) => {
      const c = r.config as FilterConfig;
      return {
        type: c.filterType,
        frequency: c.frequency,
        Q: c.resonance,
        gain: c.gain,
      };
    });

  const effectDefs = layer.rack
    .filter((r) => r.type === "effect" && r.config && !r.bypassed)
    .map((r) => {
      const { effectType, ...params } = r.config as Exclude<
        RackItemConfig,
        FilterConfig | LfoConfig | SpatialConfig
      >;
      return { type: effectType, ...params };
    });

  const lfoDefs = layer.rack
    .filter((r) => r.type === "lfo" && r.config && !r.bypassed)
    .map((r) => {
      const c = r.config as LfoConfig;
      return {
        type: c.lfoType,
        frequency: c.frequency,
        depth: c.depth,
        target: c.target,
      };
    });

  const spatialItem = layer.rack.find(
    (r) => r.type === "spatial" && r.config && !r.bypassed,
  );
  const spatial = spatialItem?.config as SpatialConfig | undefined;

  return {
    source: layer.source,
    envelope: layer.envelope,
    gain: layer.mix?.gain,
    pan: spatial ? undefined : layer.mix?.pan,
    panner: spatial
      ? {
          positionX: spatial.positionX,
          positionY: spatial.positionY,
          positionZ: spatial.positionZ,
          panningModel: spatial.panningModel,
          distanceModel: spatial.distanceModel,
          rolloffFactor: spatial.rolloffFactor,
        }
      : undefined,
    delay: positionDelay,
    filter:
      filterDefs.length === 1
        ? filterDefs[0]
        : filterDefs.length > 1
          ? filterDefs
          : undefined,
    effects: effectDefs.length > 0 ? effectDefs : undefined,
    lfo:
      lfoDefs.length === 1
        ? lfoDefs[0]
        : lfoDefs.length > 1
          ? lfoDefs
          : undefined,
  };
}

const ROW_COUNT = 3;

/** Finds a row + start position for a new layer that doesn't overlap existing layers. */
function findFreePosition(
  existingLayers: Layer[],
  length: number,
  preferredRow?: number,
  preferredStart?: number,
): { row: number; start: number } {
  const isConflict = (row: number, start: number) =>
    existingLayers.some(
      (l) =>
        l.row === row && l.start < start + length && l.start + l.length > start,
    );

  // Honour preferred position if free
  if (preferredRow !== undefined && preferredStart !== undefined) {
    if (!isConflict(preferredRow, preferredStart))
      return { row: preferredRow, start: preferredStart };
  }

  // Try an empty row first
  for (let row = 0; row < ROW_COUNT; row++) {
    if (existingLayers.every((l) => l.row !== row)) return { row, start: 0 };
  }

  // All rows occupied — place at end of whichever row ends earliest
  let bestRow = 0;
  let bestEnd = Infinity;
  for (let row = 0; row < ROW_COUNT; row++) {
    const rowEnd = existingLayers
      .filter((l) => l.row === row)
      .reduce((m, l) => Math.max(m, l.start + l.length), 0);
    if (rowEnd < bestEnd) {
      bestEnd = rowEnd;
      bestRow = row;
    }
  }
  return { row: bestRow, start: bestEnd };
}

/** Generates a copy name like "Layer 1 copy", "Layer 1 copy 2", "Layer 1 copy 3"… */
function makeCopyName(sourceName: string, existingLayers: Layer[]): string {
  const baseName = sourceName.replace(/ copy( \d+)?$/, "").trim();
  const escaped = baseName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`^${escaped} copy( \\d+)?$`);
  const count = existingLayers.filter((l) => pattern.test(l.name)).length;
  return count === 0 ? `${baseName} copy` : `${baseName} copy ${count + 1}`;
}

function serializeToCode(layers: Layer[], soundName: string): string {
  const defs = layers.map(layerToDefinition);
  const def = defs.length === 1 ? defs[0] : { layers: defs };
  const varName =
    soundName
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_]/g, "")
      .toLowerCase() || "sound";
  return `import { defineSound } from "@web-kits/audio";\n\nconst ${varName} = defineSound(${JSON.stringify(def, null, 2)});\n\n${varName}(); // play`;
}

function toTitleCaseWords(raw: string): string {
  const words = raw.split(/[_\s-]+/g).filter(Boolean);
  if (words.length === 0) return "Imported Sound";
  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function extractDefineSoundArg(code: string): string {
  const marker = "defineSound(";
  const start = code.indexOf(marker);
  if (start === -1) throw new Error("Could not find defineSound(...) in code.");
  let i = start + marker.length;
  let depth = 1;
  let quote: "'" | '"' | "`" | null = null;
  let escaped = false;
  for (; i < code.length; i++) {
    const ch = code[i];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      quote = ch;
      continue;
    }
    if (ch === "(") depth++;
    else if (ch === ")") {
      depth--;
      if (depth === 0) break;
    }
  }
  if (depth !== 0) throw new Error("Unclosed defineSound(...) call.");
  return code.slice(start + marker.length, i).trim();
}

function parseSoundNameFromCode(code: string): string | undefined {
  const m = code.match(/\bconst\s+([a-zA-Z_$][\w$]*)\s*=\s*defineSound\s*\(/);
  if (!m) return undefined;
  return toTitleCaseWords(m[1]);
}

function toLayerFromDefinition(
  def: Record<string, unknown>,
  idx: number,
  existing: Layer[],
): Layer {
  const uid = `${Date.now()}-${idx}`;
  const rawSource = (def.source as Record<string, unknown> | undefined) ?? {};
  const sourceType = (rawSource.type as string) ?? "sine";
  // Fill in required defaults that callers often omit
  let source: Layer["source"];
  if (
    sourceType === "sine" ||
    sourceType === "triangle" ||
    sourceType === "square" ||
    sourceType === "sawtooth"
  ) {
    source = {
      type: sourceType as "sine" | "triangle" | "square" | "sawtooth",
      frequency:
        (rawSource.frequency as number | { start: number; end: number }) ?? 440,
      detune: Number(rawSource.detune ?? 0),
      ...(rawSource.fm
        ? { fm: rawSource.fm as { ratio: number; depth: number } }
        : {}),
    };
  } else if (sourceType === "noise") {
    source = {
      type: "noise",
      color: (rawSource.color as "white" | "pink" | "brown") ?? "white",
    };
  } else if (sourceType === "wavetable") {
    source = {
      type: "wavetable",
      frequency: Number(rawSource.frequency ?? 440),
      harmonics: Array.isArray(rawSource.harmonics)
        ? (rawSource.harmonics as number[])
        : [1],
    };
  } else if (sourceType === "sample") {
    source = {
      type: "sample",
      url: String(rawSource.url ?? ""),
      playbackRate: Number(rawSource.playbackRate ?? 1),
      loop: Boolean(rawSource.loop ?? false),
    };
  } else if (sourceType === "constant") {
    source = { type: "constant", offset: Number(rawSource.offset ?? 0) };
  } else {
    source = { type: "sine", frequency: 440, detune: 0 };
  }
  const envelope = (def.envelope as Layer["envelope"] | undefined) ?? {
    attack: 0,
    decay: 0.3,
    sustain: 0,
    release: 0,
  };
  const delay = Math.max(0, Number(def.delay ?? 0));
  const preferredStart = delay * UNITS_PER_SECOND;
  const preferredRow = idx % ROW_COUNT;
  const { row, start } = findFreePosition(
    existing,
    4,
    preferredRow,
    preferredStart,
  );

  const rack: RackItem[] = [
    { ...DEFAULT_SOURCE_ITEM, id: `source-${uid}` },
    { ...DEFAULT_MIX_ITEM, id: `mix-${uid}` },
  ];

  const filterDef = def.filter;
  const filterItems = Array.isArray(filterDef)
    ? (filterDef as Record<string, unknown>[])
    : filterDef
      ? [filterDef as Record<string, unknown>]
      : [];
  for (let i = 0; i < filterItems.length; i++) {
    const f = filterItems[i];
    const cfg: FilterConfig = {
      filterType: (f.type as FilterConfig["filterType"]) ?? "lowpass",
      frequency: Number(f.frequency ?? 1000),
      resonance: Number(f.Q ?? 1),
      gain: Number(f.gain ?? 0),
    };
    rack.push({
      id: `filter-${uid}-${i}`,
      type: "filter",
      name: `FILTER ${i + 1}`,
      config: cfg,
    });
  }

  const effectDefs = Array.isArray(def.effects)
    ? (def.effects as Record<string, unknown>[])
    : [];
  for (let i = 0; i < effectDefs.length; i++) {
    const e = effectDefs[i];
    const { type, ...params } = e;
    const cfg = {
      effectType: String(type ?? "reverb") as EffectConfig["effectType"],
      ...(params as Record<string, unknown>),
    } as EffectConfig;
    rack.push({
      id: `effect-${uid}-${i}`,
      type: "effect",
      name: `EFFECT ${i + 1}`,
      config: cfg,
    });
  }

  const lfoDef = def.lfo;
  const lfoItems = Array.isArray(lfoDef)
    ? (lfoDef as Record<string, unknown>[])
    : lfoDef
      ? [lfoDef as Record<string, unknown>]
      : [];
  for (let i = 0; i < lfoItems.length; i++) {
    const l = lfoItems[i];
    const cfg: LfoConfig = {
      lfoType: (l.type as LfoConfig["lfoType"]) ?? "sine",
      frequency: Number(l.frequency ?? 1),
      depth: Number(l.depth ?? 100),
      target: (l.target as LfoConfig["target"]) ?? "frequency",
    };
    rack.push({
      id: `lfo-${uid}-${i}`,
      type: "lfo",
      name: `LFO ${i + 1}`,
      config: cfg,
    });
  }

  if (def.panner && typeof def.panner === "object") {
    const p = def.panner as Record<string, unknown>;
    rack.push({
      id: `spatial-${uid}`,
      type: "spatial",
      name: "SPATIAL 1",
      config: {
        positionX: Number(p.positionX ?? 0),
        positionY: Number(p.positionY ?? 0),
        positionZ: Number(p.positionZ ?? -1),
        panningModel: (p.panningModel as "equalpower" | "HRTF") ?? "HRTF",
        distanceModel:
          (p.distanceModel as "linear" | "inverse" | "exponential") ??
          "inverse",
        rolloffFactor: Number(p.rolloffFactor ?? 1),
      },
    });
  }

  return {
    id: `layer-${uid}`,
    name: `Layer ${idx + 1}`,
    row,
    start,
    length: 4,
    rack,
    source,
    envelope,
    mix: {
      gain: Number(def.gain ?? 0.8),
      pan: Number(def.pan ?? 0),
    },
  };
}

function deserializeFromCode(code: string): {
  layers: Layer[];
  soundName?: string;
} {
  const arg = extractDefineSoundArg(code);
  let raw: unknown;
  try {
    raw = JSON.parse(arg);
  } catch {
    throw new Error(
      "defineSound(...) argument must be valid JSON. Ensure keys are quoted, there are no trailing commas, and no comments.",
    );
  }
  if (!raw || typeof raw !== "object") {
    throw new Error("defineSound(...) argument must be an object.");
  }

  const parsed = raw as Record<string, unknown>;
  const defs =
    Array.isArray(parsed.layers) && parsed.layers.length > 0
      ? (parsed.layers as Record<string, unknown>[])
      : [parsed];
  const layers: Layer[] = [];
  for (let i = 0; i < defs.length; i++) {
    layers.push(toLayerFromDefinition(defs[i], i, layers));
  }
  if (layers.length === 0) throw new Error("No layer definitions found.");
  return { layers, soundName: parseSoundNameFromCode(code) };
}

export function DawEditor() {
  const [layers, setLayers] = useState<Layer[]>(INITIAL_LAYERS);
  const [activeLayerId, setActiveLayerId] = useState<string | undefined>(
    INITIAL_LAYERS[0].id,
  );
  const [soundName, setSoundName] = useState("My Sound");
  const [codeDraft, setCodeDraft] = useState(() =>
    serializeToCode(INITIAL_LAYERS, "My Sound"),
  );
  const [codeDirty, setCodeDirty] = useState(false);
  const [codeError, setCodeError] = useState<string | null>(null);

  const analyserRef = useRef<AudioAnalyser | null>(null);
  const startVisualizerRef = useRef<
    ((schedule: VizScheduleEntry[], opts: VizOptions) => void) | null
  >(null);
  const mouseDownRef = useRef(false);
  const copiedLayerRef = useRef<Layer | null>(null);

  const activeLayer = useMemo(
    () => layers.find((layer) => layer.id === activeLayerId) ?? layers[0],
    [layers, activeLayerId],
  );

  const ensureAnalyser = useCallback(() => {
    if (!analyserRef.current) {
      analyserRef.current = createMasterAnalyser({ fftSize: 2048 });
    }
    return analyserRef.current;
  }, []);

  const handlePlaySelected = useCallback(async () => {
    if (!activeLayer) return;
    await ensureReady();
    ensureAnalyser();
    // Play Selected ignores the timeline position delay — plays immediately.
    // The playhead pre-jumps to the layer's visual start and sweeps to its end.
    const def = { ...layerToDefinition(activeLayer), delay: 0 };
    defineSound(def as Parameters<typeof defineSound>[0])();
    startVisualizerRef.current?.([{ id: activeLayer.id, delay: 0 }], {
      startOffsetUnits: activeLayer.start,
      maxEndUnits: activeLayer.start + activeLayer.length,
    });
  }, [activeLayer, ensureAnalyser]);

  const handlePlayAll = useCallback(async () => {
    await ensureReady();
    ensureAnalyser();
    const snap = layers;
    const def =
      snap.length === 1
        ? layerToDefinition(snap[0])
        : { layers: snap.map(layerToDefinition) };
    defineSound(def as Parameters<typeof defineSound>[0])();
    const maxEnd = snap.reduce((m, l) => Math.max(m, l.start + l.length), 0);
    startVisualizerRef.current?.(
      snap.map((l) => ({ id: l.id, delay: l.start / UNITS_PER_SECOND })),
      { startOffsetUnits: 0, maxEndUnits: maxEnd },
    );
  }, [layers, ensureAnalyser]);

  const handleCopyLayer = useCallback(() => {
    if (activeLayer) copiedLayerRef.current = activeLayer;
  }, [activeLayer]);

  const handlePasteLayer = useCallback(() => {
    const source = copiedLayerRef.current;
    if (!source) return;
    setLayers((prev) => {
      const uid = Date.now();
      const { row, start } = findFreePosition(
        prev,
        source.length,
        source.row,
        source.start + source.length,
      );
      const newLayer: Layer = {
        ...source,
        id: `layer-${uid}`,
        name: makeCopyName(source.name, prev),
        row,
        start,
        rack: source.rack.map((item) => ({
          ...item,
          id: `${item.type}-${uid}-${item.id}`,
        })),
      };
      setActiveLayerId(newLayer.id);
      return [...prev, newLayer];
    });
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 0) mouseDownRef.current = true;
    };
    const onMouseUp = (e: MouseEvent) => {
      if (e.button === 0) mouseDownRef.current = false;
    };
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const inInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      // Ctrl/Cmd+C — copy active layer
      if ((e.ctrlKey || e.metaKey) && e.code === "KeyC") {
        if (!inInput) handleCopyLayer();
        return;
      }
      // Ctrl/Cmd+V — paste copied layer
      if ((e.ctrlKey || e.metaKey) && e.code === "KeyV") {
        if (!inInput) {
          e.preventDefault();
          handlePasteLayer();
        }
        return;
      }
      // Space — play
      if (e.code !== "Space") return;
      if (inInput) return;
      e.preventDefault();
      if (mouseDownRef.current) handlePlaySelected();
      else handlePlayAll();
    };
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handlePlayAll, handlePlaySelected, handleCopyLayer, handlePasteLayer]);

  useEffect(() => {
    return () => {
      analyserRef.current?.dispose();
    };
  }, []);

  const addLayer = () => {
    setLayers((prev) => {
      const nextIndex = prev.length + 1;
      const { row, start } = findFreePosition(prev, 4);
      const nextLayer: Layer = {
        id: `layer-${nextIndex}`,
        name: `Layer ${nextIndex}`,
        row,
        start,
        length: 4,
        rack: [
          { ...DEFAULT_SOURCE_ITEM, id: `source-${nextIndex}` },
          { ...DEFAULT_MIX_ITEM, id: `mix-${nextIndex}` },
        ],
        source: { type: "sine", frequency: 440, detune: 0 },
        envelope: { attack: 0, decay: 0.3, sustain: 0, release: 0 },
        mix: { gain: 0.8, pan: 0 },
      };
      setActiveLayerId(nextLayer.id);
      return [...prev, nextLayer];
    });
  };

  const updateLayer = (layerId: string, updater: (layer: Layer) => Layer) => {
    setLayers((prev) =>
      prev.map((layer) => {
        if (layer.id !== layerId) return layer;
        const next = updater(layer);
        // When the clip is resized (envelope reference unchanged = geometry-only update),
        // scale A/D/R proportionally so the ADSR always fits the clip duration.
        if (
          next.length !== layer.length &&
          layer.length > 0 &&
          next.envelope === layer.envelope
        ) {
          const scale = next.length / layer.length;
          return {
            ...next,
            envelope: {
              attack: Math.max(0, next.envelope.attack * scale),
              decay: Math.max(0.001, next.envelope.decay * scale),
              sustain: next.envelope.sustain, // level — not scaled
              release: Math.max(0, next.envelope.release * scale),
            },
          };
        }
        return next;
      }),
    );
  };

  const addRackItem = (type: Exclude<RackItemType, "source">) => {
    if (!activeLayer) return;
    updateLayer(activeLayer.id, (layer) => {
      const sameTypeCount = layer.rack.filter(
        (item) => item.type === type,
      ).length;
      return {
        ...layer,
        rack: [...layer.rack, createRackItem(type, sameTypeCount + 1)],
      };
    });
  };

  const deleteLayer = useCallback(() => {
    if (layers.length <= 1) return;
    setLayers((prev) => {
      const idx = prev.findIndex((l) => l.id === activeLayerId);
      const next = prev.filter((l) => l.id !== activeLayerId);
      const newActive = next[Math.min(idx, next.length - 1)];
      setActiveLayerId(newActive.id);
      return next;
    });
  }, [layers.length, activeLayerId]);

  const clearLayers = useCallback(() => {
    setLayers([]);
    setActiveLayerId(undefined);
  }, []);

  const code = serializeToCode(layers, soundName);

  useEffect(() => {
    if (codeDirty) return;
    setCodeDraft(code);
  }, [code, codeDirty]);

  const applyCodeImport = useCallback(() => {
    try {
      const parsed = deserializeFromCode(codeDraft);
      setLayers(parsed.layers);
      setActiveLayerId(parsed.layers[0]?.id);
      if (parsed.soundName) setSoundName(parsed.soundName);
      setCodeDirty(false);
      setCodeError(null);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to import code.";
      setCodeError(message);
    }
  }, [codeDraft]);

  return (
    <section className={styles.editor}>
      <PreviewEditor
        layers={layers}
        activeLayerId={activeLayer?.id}
        soundName={soundName}
        onSoundNameChange={setSoundName}
        onAddLayer={addLayer}
        onDeleteLayer={deleteLayer}
        onClearLayers={clearLayers}
        onSelectLayer={setActiveLayerId}
        onUpdateLayer={updateLayer}
        onPlayAll={handlePlayAll}
        onPlaySelected={handlePlaySelected}
        analyserRef={analyserRef}
        onMountVisualizer={(fn) => {
          startVisualizerRef.current = fn as typeof startVisualizerRef.current;
        }}
      />

      <RackEditor
        activeLayer={activeLayer}
        onUpdateLayer={updateLayer}
        onAddFilter={() => addRackItem("filter")}
        onAddEffect={() => addRackItem("effect")}
        onAddLfo={() => addRackItem("lfo")}
        onAddSpatial={() => addRackItem("spatial")}
      />

      <DawCodeOutput
        code={codeDraft}
        isDirty={codeDirty}
        error={codeError}
        onCodeChange={(next) => {
          setCodeDraft(next);
          setCodeDirty(true);
          setCodeError(null);
        }}
        onApplyCode={applyCodeImport}
      />
    </section>
  );
}
