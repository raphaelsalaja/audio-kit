import { Select } from "@base-ui/react/select";
import { Switch } from "@base-ui/react/switch";
import {
  CheckIcon,
  ChevronIcon,
  DiceIcon,
  PowerIcon,
  TrashIcon,
} from "@/components/controls/icons";
import panelStyles from "../styles.module.css";
import type {
  EffectConfig,
  FilterConfig,
  Layer,
  LfoConfig,
  MixConfig,
  OscillatorType,
  RackItemConfig,
  SourceConfig,
  SpatialConfig,
} from "../types";
import { AdsrEditor } from "./adsr-editor";
import { Knob } from "./knob";
import controlStyles from "./preview-editor-controls.module.css";
import rackStyles from "./rack-editor.module.css";

const SOURCE_TYPES = [
  "sine",
  "triangle",
  "square",
  "sawtooth",
  "noise",
  "wavetable",
  "sample",
  "constant",
] as const;

const OSCILLATOR_TYPES: OscillatorType[] = [
  "sine",
  "triangle",
  "square",
  "sawtooth",
];

function defaultForType(type: string): SourceConfig {
  switch (type) {
    case "noise":
      return { type: "noise", color: "white" };
    case "wavetable":
      return { type: "wavetable", frequency: 440, harmonics: [1, 0.5, 0.25] };
    case "sample":
      return { type: "sample", url: "", playbackRate: 1, loop: false };
    case "constant":
      return { type: "constant", offset: 1 };
    default:
      return { type: type as OscillatorType, frequency: 440, detune: 0 };
  }
}

const DEFAULT_MIX: MixConfig = { gain: 0.8, pan: 0 };
const UNITS_PER_SECOND = 4;

type RackEditorProps = {
  activeLayer?: Layer;
  onUpdateLayer: (layerId: string, updater: (layer: Layer) => Layer) => void;
  onAddFilter: () => void;
  onAddEffect: () => void;
  onAddLfo: () => void;
  onAddSpatial: () => void;
};

export function RackEditor({
  activeLayer,
  onUpdateLayer,
  onAddFilter,
  onAddEffect,
  onAddLfo,
  onAddSpatial,
}: RackEditorProps) {
  const updateSource = (updater: (source: SourceConfig) => SourceConfig) => {
    if (!activeLayer) return;
    onUpdateLayer(activeLayer.id, (layer) => ({
      ...layer,
      source: updater(layer.source),
    }));
  };

  const updateEnvelope = (
    updater: (envelope: Layer["envelope"]) => Layer["envelope"],
  ) => {
    if (!activeLayer) return;
    onUpdateLayer(activeLayer.id, (layer) => ({
      ...layer,
      envelope: updater(layer.envelope),
    }));
  };

  const updateMix = (updater: (mix: MixConfig) => MixConfig) => {
    if (!activeLayer) return;
    onUpdateLayer(activeLayer.id, (layer) => ({
      ...layer,
      mix: updater(layer.mix ?? DEFAULT_MIX),
    }));
  };

  const updateItemConfig = <T extends RackItemConfig>(
    itemId: string,
    updater: (cfg: T) => T,
  ) => {
    if (!activeLayer) return;
    onUpdateLayer(activeLayer.id, (layer) => ({
      ...layer,
      rack: layer.rack.map((i) =>
        i.id === itemId ? { ...i, config: updater(i.config as T) } : i,
      ),
    }));
  };

  const deleteRackItem = (itemId: string) => {
    if (!activeLayer) return;
    onUpdateLayer(activeLayer.id, (layer) => ({
      ...layer,
      rack: layer.rack.filter((i) => i.id !== itemId),
    }));
  };

  const toggleBypass = (itemId: string) => {
    if (!activeLayer) return;
    onUpdateLayer(activeLayer.id, (layer) => ({
      ...layer,
      rack: layer.rack.map((i) =>
        i.id === itemId ? { ...i, bypassed: !i.bypassed } : i,
      ),
    }));
  };

  const moveRackItem = (itemId: string, direction: -1 | 1) => {
    if (!activeLayer) return;
    onUpdateLayer(activeLayer.id, (layer) => {
      const rack = [...layer.rack];
      const idx = rack.findIndex((i) => i.id === itemId);
      if (idx === -1) return layer;
      const target = idx + direction;
      if (target < 0 || target >= rack.length) return layer;
      // Don't swap past locked source/mix items
      if (rack[target].type === "source" || rack[target].type === "mix")
        return layer;
      [rack[idx], rack[target]] = [rack[target], rack[idx]];
      return { ...layer, rack };
    });
  };

  const src = activeLayer?.source;
  const isOscillator =
    src && OSCILLATOR_TYPES.includes(src.type as OscillatorType);
  const isSweep =
    isOscillator &&
    src &&
    typeof (src as { frequency: unknown }).frequency === "object";
  const baseFrequency =
    isOscillator && src
      ? typeof (src as { frequency: number | { start: number; end: number } })
          .frequency === "number"
        ? (src as { frequency: number }).frequency
        : (src as { frequency: { start: number; end: number } }).frequency.start
      : 440;

  const sourceTitle =
    src?.type === "noise"
      ? "Noise"
      : src?.type === "wavetable"
        ? "Wavetable"
        : src?.type === "sample"
          ? "Sample"
          : src?.type === "constant"
            ? "Constant"
            : "Oscillator";

  return (
    <section className={panelStyles.panel}>
      <div className={rackStyles.rack}>
        {activeLayer && src ? (
          <>
            {/* rack items */}
            <div className={rackStyles.rackItems}>
              <div className={rackStyles.rackItem}>
                <CornerBolts />
                <div className={rackStyles.rackItemHeader}>
                  <span className={rackStyles.rackItemType}>source</span>
                  <button
                    type="button"
                    className={rackStyles.iconBtn}
                    title="Randomize source"
                    onClick={() => {
                      const types = [
                        "sine",
                        "triangle",
                        "square",
                        "sawtooth",
                      ] as const;
                      const type =
                        types[Math.floor(Math.random() * types.length)];
                      const hasFm =
                        isOscillator && !!(src as { fm?: unknown }).fm;
                      const freq = isSweep
                        ? {
                            start: Math.round(60 + Math.random() * 800),
                            end: Math.round(200 + Math.random() * 1400),
                          }
                        : Math.round(80 + Math.random() * 1200);
                      updateSource(() => ({
                        type,
                        frequency: freq,
                        detune: Math.round((Math.random() - 0.5) * 100),
                        ...(hasFm
                          ? {
                              fm: {
                                ratio: +(1 + Math.random() * 9).toFixed(1),
                                depth: Math.round(50 + Math.random() * 400),
                              },
                            }
                          : {}),
                      }));
                    }}
                  >
                    <DiceIcon size={14} />
                    Randomize
                  </button>
                </div>
                <strong className={rackStyles.rackItemTitle}>
                  {sourceTitle}
                </strong>

                <div className={rackStyles.field}>
                  <span className={rackStyles.fieldLabel}>Type</span>
                  <Select.Root
                    value={src.type}
                    onValueChange={(next) => {
                      if (next) updateSource(() => defaultForType(next));
                    }}
                  >
                    <Select.Trigger className={controlStyles.controlSelect}>
                      <Select.Value />
                      <Select.Icon className={controlStyles.selectIcon}>
                        <ChevronDown />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Positioner
                        className={controlStyles.selectPositioner}
                      >
                        <Select.Popup className={controlStyles.selectPopup}>
                          {SOURCE_TYPES.map((type) => (
                            <Select.Item
                              key={type}
                              className={controlStyles.selectItem}
                              value={type}
                            >
                              <Select.ItemText>{type}</Select.ItemText>
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

                {/* ── Oscillator fields ── */}
                {isOscillator && (
                  <>
                    <div className={rackStyles.knobRow}>
                      {isSweep ? (
                        <>
                          <Knob
                            label="Start"
                            easing="log"
                            value={
                              (
                                src as {
                                  frequency: { start: number; end: number };
                                }
                              ).frequency.start
                            }
                            min={20}
                            max={20000}
                            step={1}
                            onChange={(v) =>
                              updateSource((s) => {
                                const f = (
                                  s as {
                                    frequency:
                                      | number
                                      | { start: number; end: number };
                                  }
                                ).frequency;
                                if (typeof f === "number") return s;
                                return {
                                  ...s,
                                  frequency: { ...f, start: v },
                                } as SourceConfig;
                              })
                            }
                          />
                          <Knob
                            label="End"
                            easing="log"
                            value={
                              (
                                src as {
                                  frequency: { start: number; end: number };
                                }
                              ).frequency.end
                            }
                            min={20}
                            max={20000}
                            step={1}
                            onChange={(v) =>
                              updateSource((s) => {
                                const f = (
                                  s as {
                                    frequency:
                                      | number
                                      | { start: number; end: number };
                                  }
                                ).frequency;
                                if (typeof f === "number") return s;
                                return {
                                  ...s,
                                  frequency: { ...f, end: v },
                                } as SourceConfig;
                              })
                            }
                          />
                        </>
                      ) : (
                        <Knob
                          label="Freq"
                          easing="log"
                          value={baseFrequency}
                          min={20}
                          max={20000}
                          step={1}
                          onChange={(v) =>
                            updateSource((s) => ({ ...s, frequency: v }))
                          }
                        />
                      )}
                      <Knob
                        label="Detune"
                        value={(src as { detune: number }).detune}
                        min={-1200}
                        max={1200}
                        step={1}
                        resetValue={0}
                        onChange={(v) =>
                          updateSource((s) => ({ ...s, detune: v }))
                        }
                      />
                    </div>

                    <div className={rackStyles.fieldInline}>
                      <span className={rackStyles.fieldLabel}>Sweep</span>
                      <Switch.Root
                        checked={!!isSweep}
                        onCheckedChange={(checked) =>
                          updateSource(
                            (s) =>
                              ({
                                ...s,
                                frequency: checked
                                  ? {
                                      start: baseFrequency,
                                      end: baseFrequency * 2,
                                    }
                                  : baseFrequency,
                              }) as SourceConfig,
                          )
                        }
                        className={rackStyles.switch}
                      >
                        <Switch.Thumb className={rackStyles.switchThumb} />
                      </Switch.Root>
                    </div>

                    <div className={rackStyles.fieldInline}>
                      <span className={rackStyles.fieldLabel}>FM</span>
                      <Switch.Root
                        checked={!!(src as { fm?: unknown }).fm}
                        onCheckedChange={(checked) =>
                          updateSource((s) => {
                            if (!checked) {
                              const { fm: _fm, ...rest } = s as {
                                fm?: unknown;
                              } & SourceConfig;
                              return rest as SourceConfig;
                            }
                            const osc = s as {
                              fm?: { ratio: number; depth: number };
                            } & SourceConfig;
                            return {
                              ...s,
                              fm: osc.fm ?? { ratio: 3.5, depth: 200 },
                            };
                          })
                        }
                        className={rackStyles.switch}
                      >
                        <Switch.Thumb className={rackStyles.switchThumb} />
                      </Switch.Root>
                    </div>

                    {(src as { fm?: { ratio: number; depth: number } }).fm && (
                      <div className={rackStyles.knobRow}>
                        <Knob
                          label="FM Ratio"
                          value={
                            (src as { fm: { ratio: number; depth: number } }).fm
                              .ratio
                          }
                          min={0.1}
                          max={16}
                          step={0.1}
                          onChange={(v) =>
                            updateSource((s) => {
                              const osc = s as {
                                fm: { ratio: number; depth: number };
                              } & SourceConfig;
                              return { ...s, fm: { ...osc.fm, ratio: v } };
                            })
                          }
                        />
                        <Knob
                          label="FM Depth"
                          value={
                            (src as { fm: { ratio: number; depth: number } }).fm
                              .depth
                          }
                          min={0}
                          max={2000}
                          step={10}
                          onChange={(v) =>
                            updateSource((s) => {
                              const osc = s as {
                                fm: { ratio: number; depth: number };
                              } & SourceConfig;
                              return { ...s, fm: { ...osc.fm, depth: v } };
                            })
                          }
                        />
                      </div>
                    )}
                  </>
                )}

                {/* ── Noise fields ── */}
                {src.type === "noise" && (
                  <div className={rackStyles.field}>
                    <span className={rackStyles.fieldLabel}>Color</span>
                    <Select.Root
                      value={src.color}
                      onValueChange={(next) =>
                        updateSource((s) => ({
                          ...s,
                          color: next as "white" | "pink" | "brown",
                        }))
                      }
                    >
                      <Select.Trigger className={controlStyles.controlSelect}>
                        <Select.Value />
                        <Select.Icon className={controlStyles.selectIcon}>
                          <ChevronDown />
                        </Select.Icon>
                      </Select.Trigger>
                      <Select.Portal>
                        <Select.Positioner
                          className={controlStyles.selectPositioner}
                        >
                          <Select.Popup className={controlStyles.selectPopup}>
                            {["white", "pink", "brown"].map((c) => (
                              <Select.Item
                                key={c}
                                className={controlStyles.selectItem}
                                value={c}
                              >
                                <Select.ItemText>{c}</Select.ItemText>
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
                )}

                {/* ── Wavetable fields ── */}
                {src.type === "wavetable" && (
                  <>
                    <div className={rackStyles.knobRow}>
                      <Knob
                        label="Freq"
                        easing="log"
                        value={src.frequency}
                        min={20}
                        max={20000}
                        step={1}
                        onChange={(v) =>
                          updateSource((s) => ({ ...s, frequency: v }))
                        }
                      />
                    </div>
                    <label className={rackStyles.field}>
                      <span className={rackStyles.fieldLabel}>Harmonics</span>
                      <input
                        type="text"
                        className={rackStyles.fieldInput}
                        value={src.harmonics.join(", ")}
                        onChange={(e) => {
                          const harmonics = e.target.value
                            .split(",")
                            .map((v) => Number(v.trim()))
                            .filter((n) => !Number.isNaN(n));
                          if (harmonics.length > 0)
                            updateSource((s) => ({ ...s, harmonics }));
                        }}
                      />
                    </label>
                  </>
                )}

                {/* ── Sample fields ── */}
                {src.type === "sample" && (
                  <>
                    <label className={rackStyles.field}>
                      <span className={rackStyles.fieldLabel}>URL</span>
                      <input
                        type="text"
                        className={rackStyles.fieldInput}
                        placeholder="/sounds/kick.wav"
                        value={src.url}
                        onChange={(e) =>
                          updateSource((s) => ({ ...s, url: e.target.value }))
                        }
                      />
                    </label>
                    <div className={rackStyles.knobRow}>
                      <Knob
                        label="Speed"
                        value={src.playbackRate}
                        min={0.1}
                        max={4}
                        step={0.01}
                        resetValue={1}
                        onChange={(v) =>
                          updateSource((s) => ({ ...s, playbackRate: v }))
                        }
                      />
                    </div>
                    <div className={rackStyles.fieldInline}>
                      <span className={rackStyles.fieldLabel}>Loop</span>
                      <Switch.Root
                        checked={src.loop}
                        onCheckedChange={(checked) =>
                          updateSource((s) => ({ ...s, loop: checked }))
                        }
                        className={rackStyles.switch}
                      >
                        <Switch.Thumb className={rackStyles.switchThumb} />
                      </Switch.Root>
                    </div>
                  </>
                )}

                {/* ── Constant fields ── */}
                {src.type === "constant" && (
                  <div className={rackStyles.knobRow}>
                    <Knob
                      label="Offset"
                      value={src.offset}
                      min={-1}
                      max={2}
                      step={0.01}
                      resetValue={1}
                      onChange={(v) =>
                        updateSource((s) => ({ ...s, offset: v }))
                      }
                    />
                  </div>
                )}
              </div>

              <div className={rackStyles.rackItem}>
                <CornerBolts />
                <div className={rackStyles.rackItemHeader}>
                  <span className={rackStyles.rackItemType}>envelope</span>
                  <button
                    type="button"
                    className={rackStyles.iconBtn}
                    title="Randomize ADSR"
                    onClick={() => {
                      const totalTime = Math.max(
                        0.1,
                        activeLayer.length / UNITS_PER_SECOND,
                      );
                      const susVis = Math.max(0.05, totalTime * 0.12);
                      // Distribute 88 % of available time randomly across A, D, R
                      const available = (totalTime - susVis) * 0.88;
                      const rA = Math.random();
                      const rD = Math.random();
                      const rR = Math.random();
                      const sum = rA + rD + rR || 1;
                      onUpdateLayer(activeLayer.id, (layer) => ({
                        ...layer,
                        envelope: {
                          attack: Math.max(0, (rA / sum) * available),
                          decay: Math.max(0.001, (rD / sum) * available),
                          sustain: Math.random(),
                          release: Math.max(0, (rR / sum) * available),
                        },
                      }));
                    }}
                  >
                    <DiceIcon size={14} />
                    Randomize
                  </button>
                </div>
                <strong className={rackStyles.rackItemTitle}>ADSR</strong>
                <AdsrEditor
                  value={activeLayer.envelope}
                  totalTime={Math.max(
                    0.1,
                    activeLayer.length / UNITS_PER_SECOND,
                  )}
                  onChange={(next) => updateEnvelope(() => next)}
                />
                <div className={rackStyles.knobRow}>
                  <Knob
                    label="A"
                    value={activeLayer.envelope.attack}
                    min={0}
                    max={2}
                    step={0.01}
                    onChange={(v) =>
                      onUpdateLayer(activeLayer.id, (layer) => ({
                        ...layer,
                        envelope: { ...layer.envelope, attack: v },
                      }))
                    }
                  />
                  <Knob
                    label="D"
                    value={activeLayer.envelope.decay}
                    min={0.01}
                    max={4}
                    step={0.01}
                    onChange={(v) =>
                      onUpdateLayer(activeLayer.id, (layer) => ({
                        ...layer,
                        envelope: { ...layer.envelope, decay: v },
                      }))
                    }
                  />
                  <Knob
                    label="S"
                    value={activeLayer.envelope.sustain}
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={(v) =>
                      onUpdateLayer(activeLayer.id, (layer) => ({
                        ...layer,
                        envelope: { ...layer.envelope, sustain: v },
                      }))
                    }
                  />
                  <Knob
                    label="R"
                    value={activeLayer.envelope.release}
                    min={0}
                    max={4}
                    step={0.01}
                    onChange={(v) =>
                      onUpdateLayer(activeLayer.id, (layer) => ({
                        ...layer,
                        envelope: { ...layer.envelope, release: v },
                      }))
                    }
                  />
                </div>
              </div>

              {activeLayer.rack
                .filter((item) => item.type !== "source")
                .map((item) => {
                  if (item.type === "mix") {
                    const mix = activeLayer.mix ?? DEFAULT_MIX;
                    const posDelaySec = activeLayer.start / UNITS_PER_SECOND;
                    return (
                      <div
                        key={item.id}
                        className={`${rackStyles.rackItem} ${rackStyles.rackItemSlim}`}
                      >
                        <CornerBolts />
                        <div className={rackStyles.rackItemHeader}>
                          <span className={rackStyles.rackItemType}>mix</span>
                        </div>
                        <strong className={rackStyles.rackItemTitle}>
                          MIXER
                        </strong>

                        <div className={rackStyles.mixControls}>
                          {/* Vertical gain fader */}
                          <div className={rackStyles.mixFaderCol}>
                            <input
                              type="range"
                              className={rackStyles.faderV}
                              min={0}
                              max={1}
                              step={0.01}
                              value={mix.gain}
                              onChange={(e) =>
                                updateMix((m) => ({
                                  ...m,
                                  gain: Number(e.target.value),
                                }))
                              }
                            />
                            <span className={rackStyles.mixLabel}>
                              {Math.round(mix.gain * 100)}%
                            </span>
                            <span className={rackStyles.mixParamLabel}>
                              gain
                            </span>
                          </div>

                          {/* Pan knob */}
                          <div className={rackStyles.mixKnobCol}>
                            <Knob
                              label=""
                              value={mix.pan}
                              min={-1}
                              max={1}
                              step={0.01}
                              resetValue={0}
                              onChange={(v) =>
                                updateMix((m) => ({ ...m, pan: v }))
                              }
                            />
                            <span className={rackStyles.mixLabel}>
                              {mix.pan === 0
                                ? "C"
                                : mix.pan > 0
                                  ? `R${Math.round(mix.pan * 100)}`
                                  : `L${Math.round(-mix.pan * 100)}`}
                            </span>
                            <span className={rackStyles.mixParamLabel}>
                              pan
                            </span>
                          </div>

                          {/* Delay — mirrors clip X position */}
                          <div className={rackStyles.mixDelayCol}>
                            <input
                              type="number"
                              className={rackStyles.mixDelayInput}
                              min={0}
                              step={0.25}
                              value={Math.round(posDelaySec * 100) / 100}
                              onChange={(e) => {
                                const secs = Math.max(
                                  0,
                                  Number(e.target.value),
                                );
                                onUpdateLayer(activeLayer.id, (l) => ({
                                  ...l,
                                  start: secs * UNITS_PER_SECOND,
                                }));
                              }}
                            />
                            <span className={rackStyles.mixParamLabel}>
                              delay (s)
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  /* ── FILTER ──────────────────────────────────────────── */
                  if (item.type === "filter") {
                    const cfg: FilterConfig = (item.config as FilterConfig) ?? {
                      filterType: "lowpass",
                      frequency: 1000,
                      resonance: 1,
                      gain: 0,
                    };
                    const updateCfg = (u: (c: FilterConfig) => FilterConfig) =>
                      updateItemConfig<FilterConfig>(item.id, u);
                    const hasGain = [
                      "peaking",
                      "lowshelf",
                      "highshelf",
                    ].includes(cfg.filterType);
                    return (
                      <div
                        key={item.id}
                        className={`${rackStyles.rackItem}${item.bypassed ? ` ${rackStyles.rackItemBypassed}` : ""}`}
                      >
                        <CornerBolts />
                        <div className={rackStyles.rackItemHeader}>
                          <span className={rackStyles.rackItemType}>
                            filter
                          </span>
                          <div className={rackStyles.headerActions}>
                            {(() => {
                              const mv = activeLayer.rack.filter(
                                (i) => i.type !== "source" && i.type !== "mix",
                              );
                              const mi = mv.findIndex((i) => i.id === item.id);
                              return (
                                <>
                                  <button
                                    type="button"
                                    className={rackStyles.moveBtn}
                                    disabled={mi <= 0}
                                    onClick={() => moveRackItem(item.id, -1)}
                                    title="Move left"
                                  >
                                    <span className={rackStyles.chevronFlip}>
                                      <ChevronIcon size={11} open={false} />
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className={rackStyles.moveBtn}
                                    disabled={mi >= mv.length - 1}
                                    onClick={() => moveRackItem(item.id, 1)}
                                    title="Move right"
                                  >
                                    <ChevronIcon size={11} open={false} />
                                  </button>
                                </>
                              );
                            })()}
                            <button
                              type="button"
                              className={rackStyles.iconBtn}
                              onClick={() => {
                                const types: FilterConfig["filterType"][] = [
                                  "lowpass",
                                  "highpass",
                                  "bandpass",
                                  "notch",
                                  "allpass",
                                ];
                                updateCfg(() => ({
                                  filterType:
                                    types[
                                      Math.floor(Math.random() * types.length)
                                    ],
                                  frequency: Math.round(
                                    50 + Math.random() * 8000,
                                  ),
                                  resonance: +(0.3 + Math.random() * 7).toFixed(
                                    1,
                                  ),
                                  gain: 0,
                                }));
                              }}
                            >
                              <DiceIcon size={14} /> Randomize
                            </button>
                            <button
                              type="button"
                              className={rackStyles.bypassBtn}
                              data-bypassed={item.bypassed ? "true" : undefined}
                              onClick={() => toggleBypass(item.id)}
                              title={item.bypassed ? "Enable" : "Bypass"}
                            >
                              <PowerIcon size={12} />
                            </button>
                            <button
                              type="button"
                              className={rackStyles.deleteBtn}
                              onClick={() => deleteRackItem(item.id)}
                              title="Delete"
                            >
                              <TrashIcon size={12} />
                            </button>
                          </div>
                        </div>
                        <strong className={rackStyles.rackItemTitle}>
                          {item.name}
                        </strong>
                        <div className={rackStyles.field}>
                          <span className={rackStyles.fieldLabel}>Type</span>
                          <Select.Root
                            value={cfg.filterType}
                            onValueChange={(v) => {
                              if (v)
                                updateCfg((c) => ({
                                  ...c,
                                  filterType: v as FilterConfig["filterType"],
                                }));
                            }}
                          >
                            <Select.Trigger
                              className={controlStyles.controlSelect}
                            >
                              <Select.Value />
                              <Select.Icon className={controlStyles.selectIcon}>
                                <ChevronDown />
                              </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                              <Select.Positioner
                                className={controlStyles.selectPositioner}
                              >
                                <Select.Popup
                                  className={controlStyles.selectPopup}
                                >
                                  {(
                                    [
                                      "lowpass",
                                      "highpass",
                                      "bandpass",
                                      "notch",
                                      "allpass",
                                      "peaking",
                                      "lowshelf",
                                      "highshelf",
                                    ] as const
                                  ).map((t) => (
                                    <Select.Item
                                      key={t}
                                      value={t}
                                      className={controlStyles.selectItem}
                                    >
                                      <Select.ItemIndicator
                                        className={
                                          controlStyles.selectIndicator
                                        }
                                      >
                                        <CheckIcon size={12} />
                                      </Select.ItemIndicator>
                                      <Select.ItemText>{t}</Select.ItemText>
                                    </Select.Item>
                                  ))}
                                </Select.Popup>
                              </Select.Positioner>
                            </Select.Portal>
                          </Select.Root>
                        </div>
                        <div className={rackStyles.knobRow}>
                          <Knob
                            label="Freq"
                            easing="log"
                            value={cfg.frequency}
                            min={20}
                            max={20000}
                            step={1}
                            onChange={(v) =>
                              updateCfg((c) => ({ ...c, frequency: v }))
                            }
                          />
                          <Knob
                            label="Q"
                            value={cfg.resonance}
                            min={0.1}
                            max={20}
                            step={0.1}
                            onChange={(v) =>
                              updateCfg((c) => ({ ...c, resonance: v }))
                            }
                          />
                          {hasGain && (
                            <Knob
                              label="Gain"
                              value={cfg.gain}
                              min={-30}
                              max={30}
                              step={0.1}
                              onChange={(v) =>
                                updateCfg((c) => ({ ...c, gain: v }))
                              }
                            />
                          )}
                        </div>
                      </div>
                    );
                  }

                  /* ── EFFECT ──────────────────────────────────────────── */
                  if (item.type === "effect") {
                    const cfg: EffectConfig = (item.config as EffectConfig) ?? {
                      effectType: "reverb",
                      decay: 0.5,
                      preDelay: 0,
                      damping: 0,
                      roomSize: 1,
                      mix: 0.3,
                    };
                    const EFFECT_DEFAULTS: Record<
                      EffectConfig["effectType"],
                      EffectConfig
                    > = {
                      reverb: {
                        effectType: "reverb",
                        decay: 0.5,
                        preDelay: 0,
                        damping: 0,
                        roomSize: 1,
                        mix: 0.3,
                      },
                      delay: {
                        effectType: "delay",
                        time: 0.25,
                        feedback: 0.3,
                        mix: 0.3,
                      },
                      distortion: {
                        effectType: "distortion",
                        amount: 50,
                        mix: 0.5,
                      },
                      chorus: {
                        effectType: "chorus",
                        rate: 1.5,
                        depth: 0.003,
                        mix: 0.3,
                      },
                      flanger: {
                        effectType: "flanger",
                        rate: 0.5,
                        depth: 0.002,
                        feedback: 0.5,
                        mix: 0.5,
                      },
                      phaser: {
                        effectType: "phaser",
                        rate: 0.5,
                        depth: 1000,
                        stages: 4,
                        feedback: 0.5,
                        mix: 0.5,
                      },
                      tremolo: { effectType: "tremolo", rate: 4, depth: 0.5 },
                      bitcrusher: {
                        effectType: "bitcrusher",
                        bits: 8,
                        sampleRateReduction: 1,
                        mix: 1,
                      },
                      compressor: {
                        effectType: "compressor",
                        threshold: -24,
                        knee: 30,
                        ratio: 4,
                        attack: 0.003,
                        release: 0.25,
                      },
                      gain: { effectType: "gain", value: 0.5 },
                      pan: { effectType: "pan", value: 0 },
                    };
                    const EFFECT_RAND: Record<
                      EffectConfig["effectType"],
                      () => EffectConfig
                    > = {
                      reverb: () => ({
                        effectType: "reverb",
                        decay: +(Math.random() * 5).toFixed(2),
                        preDelay: +(Math.random() * 0.1).toFixed(3),
                        damping: +Math.random().toFixed(2),
                        roomSize: +(0.1 + Math.random() * 3.9).toFixed(2),
                        mix: +Math.random().toFixed(2),
                      }),
                      delay: () => ({
                        effectType: "delay",
                        time: +(0.05 + Math.random() * 0.95).toFixed(2),
                        feedback: +(Math.random() * 0.9).toFixed(2),
                        mix: +Math.random().toFixed(2),
                      }),
                      distortion: () => ({
                        effectType: "distortion",
                        amount: Math.round(1 + Math.random() * 399),
                        mix: +Math.random().toFixed(2),
                      }),
                      chorus: () => ({
                        effectType: "chorus",
                        rate: +(0.1 + Math.random() * 9.9).toFixed(1),
                        depth: +(Math.random() * 0.02).toFixed(4),
                        mix: +Math.random().toFixed(2),
                      }),
                      flanger: () => ({
                        effectType: "flanger",
                        rate: +(0.05 + Math.random() * 4.95).toFixed(2),
                        depth: +(Math.random() * 0.02).toFixed(4),
                        feedback: +(Math.random() * 0.9).toFixed(2),
                        mix: +Math.random().toFixed(2),
                      }),
                      phaser: () => ({
                        effectType: "phaser",
                        rate: +(0.05 + Math.random() * 4.95).toFixed(2),
                        depth: Math.round(100 + Math.random() * 4900),
                        stages: Math.round(2 + Math.random() * 10),
                        feedback: +(Math.random() * 0.9).toFixed(2),
                        mix: +Math.random().toFixed(2),
                      }),
                      tremolo: () => ({
                        effectType: "tremolo",
                        rate: +(0.1 + Math.random() * 19.9).toFixed(1),
                        depth: +Math.random().toFixed(2),
                      }),
                      bitcrusher: () => ({
                        effectType: "bitcrusher",
                        bits: Math.max(1, Math.round(Math.random() * 16)),
                        sampleRateReduction: +(1 + Math.random() * 49).toFixed(
                          1,
                        ),
                        mix: +Math.random().toFixed(2),
                      }),
                      compressor: () => ({
                        effectType: "compressor",
                        threshold: Math.round(-60 + Math.random() * 60),
                        knee: +(Math.random() * 40).toFixed(1),
                        ratio: +(1 + Math.random() * 19).toFixed(1),
                        attack: +(Math.random() * 0.5).toFixed(3),
                        release: +(Math.random() * 2).toFixed(2),
                      }),
                      gain: () => ({
                        effectType: "gain",
                        value: +(Math.random() * 2).toFixed(2),
                      }),
                      pan: () => ({
                        effectType: "pan",
                        value: +((Math.random() - 0.5) * 2).toFixed(2),
                      }),
                    };
                    const EFFECT_TYPES = Object.keys(
                      EFFECT_DEFAULTS,
                    ) as EffectConfig["effectType"][];
                    return (
                      <div
                        key={item.id}
                        className={`${rackStyles.rackItem}${item.bypassed ? ` ${rackStyles.rackItemBypassed}` : ""}`}
                      >
                        <CornerBolts />
                        <div className={rackStyles.rackItemHeader}>
                          <span className={rackStyles.rackItemType}>
                            effect
                          </span>
                          <div className={rackStyles.headerActions}>
                            {(() => {
                              const mv = activeLayer.rack.filter(
                                (i) => i.type !== "source" && i.type !== "mix",
                              );
                              const mi = mv.findIndex((i) => i.id === item.id);
                              return (
                                <>
                                  <button
                                    type="button"
                                    className={rackStyles.moveBtn}
                                    disabled={mi <= 0}
                                    onClick={() => moveRackItem(item.id, -1)}
                                    title="Move left"
                                  >
                                    <span className={rackStyles.chevronFlip}>
                                      <ChevronIcon size={11} open={false} />
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className={rackStyles.moveBtn}
                                    disabled={mi >= mv.length - 1}
                                    onClick={() => moveRackItem(item.id, 1)}
                                    title="Move right"
                                  >
                                    <ChevronIcon size={11} open={false} />
                                  </button>
                                </>
                              );
                            })()}
                            <button
                              type="button"
                              className={rackStyles.iconBtn}
                              onClick={() =>
                                updateItemConfig<EffectConfig>(item.id, () =>
                                  EFFECT_RAND[cfg.effectType](),
                                )
                              }
                            >
                              <DiceIcon size={14} /> Randomize
                            </button>
                            <button
                              type="button"
                              className={rackStyles.bypassBtn}
                              data-bypassed={item.bypassed ? "true" : undefined}
                              onClick={() => toggleBypass(item.id)}
                              title={item.bypassed ? "Enable" : "Bypass"}
                            >
                              <PowerIcon size={12} />
                            </button>
                            <button
                              type="button"
                              className={rackStyles.deleteBtn}
                              onClick={() => deleteRackItem(item.id)}
                              title="Delete"
                            >
                              <TrashIcon size={12} />
                            </button>
                          </div>
                        </div>
                        <strong className={rackStyles.rackItemTitle}>
                          {item.name}
                        </strong>
                        <div className={rackStyles.field}>
                          <span className={rackStyles.fieldLabel}>Type</span>
                          <Select.Root
                            value={cfg.effectType}
                            onValueChange={(v) => {
                              if (v)
                                updateItemConfig<EffectConfig>(
                                  item.id,
                                  () =>
                                    EFFECT_DEFAULTS[
                                      v as EffectConfig["effectType"]
                                    ],
                                );
                            }}
                          >
                            <Select.Trigger
                              className={controlStyles.controlSelect}
                            >
                              <Select.Value />
                              <Select.Icon className={controlStyles.selectIcon}>
                                <ChevronDown />
                              </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                              <Select.Positioner
                                className={controlStyles.selectPositioner}
                              >
                                <Select.Popup
                                  className={controlStyles.selectPopup}
                                >
                                  {EFFECT_TYPES.map((t) => (
                                    <Select.Item
                                      key={t}
                                      value={t}
                                      className={controlStyles.selectItem}
                                    >
                                      <Select.ItemIndicator
                                        className={
                                          controlStyles.selectIndicator
                                        }
                                      >
                                        <CheckIcon size={12} />
                                      </Select.ItemIndicator>
                                      <Select.ItemText>{t}</Select.ItemText>
                                    </Select.Item>
                                  ))}
                                </Select.Popup>
                              </Select.Positioner>
                            </Select.Portal>
                          </Select.Root>
                        </div>
                        <div className={rackStyles.knobRow}>
                          {cfg.effectType === "reverb" && (
                            <>
                              <Knob
                                label="Decay"
                                value={cfg.decay}
                                min={0}
                                max={5}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, decay: v }),
                                  )
                                }
                              />
                              <Knob
                                label="PreDly"
                                value={cfg.preDelay}
                                min={0}
                                max={0.5}
                                step={0.001}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, preDelay: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Damp"
                                value={cfg.damping}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, damping: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Room"
                                value={cfg.roomSize}
                                min={0.1}
                                max={4}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, roomSize: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Mix"
                                value={cfg.mix}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, mix: v }),
                                  )
                                }
                              />
                            </>
                          )}
                          {cfg.effectType === "delay" && (
                            <>
                              <Knob
                                label="Time"
                                value={cfg.time}
                                min={0.01}
                                max={2}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, time: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Feedback"
                                value={cfg.feedback}
                                min={0}
                                max={0.95}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, feedback: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Mix"
                                value={cfg.mix}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, mix: v }),
                                  )
                                }
                              />
                            </>
                          )}
                          {cfg.effectType === "distortion" && (
                            <>
                              <Knob
                                label="Amount"
                                value={cfg.amount}
                                min={1}
                                max={400}
                                step={1}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, amount: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Mix"
                                value={cfg.mix}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, mix: v }),
                                  )
                                }
                              />
                            </>
                          )}
                          {cfg.effectType === "chorus" && (
                            <>
                              <Knob
                                label="Rate"
                                value={cfg.rate}
                                min={0.1}
                                max={10}
                                step={0.1}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, rate: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Depth"
                                value={cfg.depth}
                                min={0}
                                max={0.02}
                                step={0.0001}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, depth: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Mix"
                                value={cfg.mix}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, mix: v }),
                                  )
                                }
                              />
                            </>
                          )}
                          {cfg.effectType === "flanger" && (
                            <>
                              <Knob
                                label="Rate"
                                value={cfg.rate}
                                min={0.05}
                                max={5}
                                step={0.05}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, rate: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Depth"
                                value={cfg.depth}
                                min={0}
                                max={0.02}
                                step={0.0001}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, depth: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Feedback"
                                value={cfg.feedback}
                                min={0}
                                max={0.95}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, feedback: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Mix"
                                value={cfg.mix}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, mix: v }),
                                  )
                                }
                              />
                            </>
                          )}
                          {cfg.effectType === "phaser" && (
                            <>
                              <Knob
                                label="Rate"
                                value={cfg.rate}
                                min={0.05}
                                max={5}
                                step={0.05}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, rate: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Depth"
                                value={cfg.depth}
                                min={100}
                                max={5000}
                                step={10}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, depth: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Stages"
                                value={cfg.stages}
                                min={2}
                                max={12}
                                step={2}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, stages: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Feedback"
                                value={cfg.feedback}
                                min={0}
                                max={0.95}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, feedback: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Mix"
                                value={cfg.mix}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, mix: v }),
                                  )
                                }
                              />
                            </>
                          )}
                          {cfg.effectType === "tremolo" && (
                            <>
                              <Knob
                                label="Rate"
                                value={cfg.rate}
                                min={0.1}
                                max={20}
                                step={0.1}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, rate: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Depth"
                                value={cfg.depth}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, depth: v }),
                                  )
                                }
                              />
                            </>
                          )}
                          {cfg.effectType === "bitcrusher" && (
                            <>
                              <Knob
                                label="Bits"
                                value={cfg.bits}
                                min={1}
                                max={16}
                                step={1}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, bits: v }),
                                  )
                                }
                              />
                              <Knob
                                label="SRR"
                                value={cfg.sampleRateReduction}
                                min={1}
                                max={50}
                                step={0.5}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, sampleRateReduction: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Mix"
                                value={cfg.mix}
                                min={0}
                                max={1}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, mix: v }),
                                  )
                                }
                              />
                            </>
                          )}
                          {cfg.effectType === "compressor" && (
                            <>
                              <Knob
                                label="Thresh"
                                value={cfg.threshold}
                                min={-60}
                                max={0}
                                step={0.5}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, threshold: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Knee"
                                value={cfg.knee}
                                min={0}
                                max={40}
                                step={0.5}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, knee: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Ratio"
                                value={cfg.ratio}
                                min={1}
                                max={20}
                                step={0.5}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, ratio: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Atk"
                                value={cfg.attack}
                                min={0}
                                max={0.5}
                                step={0.001}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, attack: v }),
                                  )
                                }
                              />
                              <Knob
                                label="Rel"
                                value={cfg.release}
                                min={0}
                                max={2}
                                step={0.01}
                                onChange={(v) =>
                                  updateItemConfig<EffectConfig>(
                                    item.id,
                                    () => ({ ...cfg, release: v }),
                                  )
                                }
                              />
                            </>
                          )}
                          {cfg.effectType === "gain" && (
                            <Knob
                              label="Gain"
                              value={cfg.value}
                              min={0}
                              max={4}
                              step={0.01}
                              onChange={(v) =>
                                updateItemConfig<EffectConfig>(item.id, () => ({
                                  ...cfg,
                                  value: v,
                                }))
                              }
                            />
                          )}
                          {cfg.effectType === "pan" && (
                            <Knob
                              label="Pan"
                              value={cfg.value}
                              min={-1}
                              max={1}
                              step={0.01}
                              resetValue={0}
                              onChange={(v) =>
                                updateItemConfig<EffectConfig>(item.id, () => ({
                                  ...cfg,
                                  value: v,
                                }))
                              }
                            />
                          )}
                        </div>
                      </div>
                    );
                  }

                  /* ── LFO ─────────────────────────────────────────────── */
                  if (item.type === "lfo") {
                    const cfg: LfoConfig = (item.config as LfoConfig) ?? {
                      lfoType: "sine",
                      frequency: 1,
                      depth: 100,
                      target: "frequency",
                    };
                    const updateCfg = (u: (c: LfoConfig) => LfoConfig) =>
                      updateItemConfig<LfoConfig>(item.id, u);
                    const LFO_TARGETS: LfoConfig["target"][] = [
                      "frequency",
                      "detune",
                      "gain",
                      "pan",
                      "filter.frequency",
                      "filter.detune",
                      "filter.Q",
                      "filter.gain",
                      "playbackRate",
                    ];
                    return (
                      <div
                        key={item.id}
                        className={`${rackStyles.rackItem}${item.bypassed ? ` ${rackStyles.rackItemBypassed}` : ""}`}
                      >
                        <CornerBolts />
                        <div className={rackStyles.rackItemHeader}>
                          <span className={rackStyles.rackItemType}>lfo</span>
                          <div className={rackStyles.headerActions}>
                            {(() => {
                              const mv = activeLayer.rack.filter(
                                (i) => i.type !== "source" && i.type !== "mix",
                              );
                              const mi = mv.findIndex((i) => i.id === item.id);
                              return (
                                <>
                                  <button
                                    type="button"
                                    className={rackStyles.moveBtn}
                                    disabled={mi <= 0}
                                    onClick={() => moveRackItem(item.id, -1)}
                                    title="Move left"
                                  >
                                    <span className={rackStyles.chevronFlip}>
                                      <ChevronIcon size={11} open={false} />
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className={rackStyles.moveBtn}
                                    disabled={mi >= mv.length - 1}
                                    onClick={() => moveRackItem(item.id, 1)}
                                    title="Move right"
                                  >
                                    <ChevronIcon size={11} open={false} />
                                  </button>
                                </>
                              );
                            })()}
                            <button
                              type="button"
                              className={rackStyles.iconBtn}
                              onClick={() =>
                                updateCfg(() => ({
                                  lfoType: (
                                    [
                                      "sine",
                                      "triangle",
                                      "square",
                                      "sawtooth",
                                    ] as const
                                  )[Math.floor(Math.random() * 4)],
                                  frequency: +(
                                    0.01 +
                                    Math.random() * 19.99
                                  ).toFixed(2),
                                  depth: Math.round(Math.random() * 500),
                                  target:
                                    LFO_TARGETS[
                                      Math.floor(
                                        Math.random() * LFO_TARGETS.length,
                                      )
                                    ],
                                }))
                              }
                            >
                              <DiceIcon size={14} /> Randomize
                            </button>
                            <button
                              type="button"
                              className={rackStyles.bypassBtn}
                              data-bypassed={item.bypassed ? "true" : undefined}
                              onClick={() => toggleBypass(item.id)}
                              title={item.bypassed ? "Enable" : "Bypass"}
                            >
                              <PowerIcon size={12} />
                            </button>
                            <button
                              type="button"
                              className={rackStyles.deleteBtn}
                              onClick={() => deleteRackItem(item.id)}
                              title="Delete"
                            >
                              <TrashIcon size={12} />
                            </button>
                          </div>
                        </div>
                        <strong className={rackStyles.rackItemTitle}>
                          {item.name}
                        </strong>
                        <div className={rackStyles.field}>
                          <span className={rackStyles.fieldLabel}>Shape</span>
                          <Select.Root
                            value={cfg.lfoType}
                            onValueChange={(v) => {
                              if (v)
                                updateCfg((c) => ({
                                  ...c,
                                  lfoType: v as LfoConfig["lfoType"],
                                }));
                            }}
                          >
                            <Select.Trigger
                              className={controlStyles.controlSelect}
                            >
                              <Select.Value />
                              <Select.Icon className={controlStyles.selectIcon}>
                                <ChevronDown />
                              </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                              <Select.Positioner
                                className={controlStyles.selectPositioner}
                              >
                                <Select.Popup
                                  className={controlStyles.selectPopup}
                                >
                                  {(
                                    [
                                      "sine",
                                      "triangle",
                                      "square",
                                      "sawtooth",
                                    ] as const
                                  ).map((t) => (
                                    <Select.Item
                                      key={t}
                                      value={t}
                                      className={controlStyles.selectItem}
                                    >
                                      <Select.ItemIndicator
                                        className={
                                          controlStyles.selectIndicator
                                        }
                                      >
                                        <CheckIcon size={12} />
                                      </Select.ItemIndicator>
                                      <Select.ItemText>{t}</Select.ItemText>
                                    </Select.Item>
                                  ))}
                                </Select.Popup>
                              </Select.Positioner>
                            </Select.Portal>
                          </Select.Root>
                        </div>
                        <div className={rackStyles.field}>
                          <span className={rackStyles.fieldLabel}>Target</span>
                          <Select.Root
                            value={cfg.target}
                            onValueChange={(v) => {
                              if (v)
                                updateCfg((c) => ({
                                  ...c,
                                  target: v as LfoConfig["target"],
                                }));
                            }}
                          >
                            <Select.Trigger
                              className={controlStyles.controlSelect}
                            >
                              <Select.Value />
                              <Select.Icon className={controlStyles.selectIcon}>
                                <ChevronDown />
                              </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                              <Select.Positioner
                                className={controlStyles.selectPositioner}
                              >
                                <Select.Popup
                                  className={controlStyles.selectPopup}
                                >
                                  {LFO_TARGETS.map((t) => (
                                    <Select.Item
                                      key={t}
                                      value={t}
                                      className={controlStyles.selectItem}
                                    >
                                      <Select.ItemIndicator
                                        className={
                                          controlStyles.selectIndicator
                                        }
                                      >
                                        <CheckIcon size={12} />
                                      </Select.ItemIndicator>
                                      <Select.ItemText>{t}</Select.ItemText>
                                    </Select.Item>
                                  ))}
                                </Select.Popup>
                              </Select.Positioner>
                            </Select.Portal>
                          </Select.Root>
                        </div>
                        <div className={rackStyles.knobRow}>
                          <Knob
                            label="Rate"
                            value={cfg.frequency}
                            min={0.01}
                            max={20}
                            step={0.01}
                            onChange={(v) =>
                              updateCfg((c) => ({ ...c, frequency: v }))
                            }
                          />
                          <Knob
                            label="Depth"
                            value={cfg.depth}
                            min={0}
                            max={1000}
                            step={1}
                            onChange={(v) =>
                              updateCfg((c) => ({ ...c, depth: v }))
                            }
                          />
                        </div>
                      </div>
                    );
                  }

                  /* ── SPATIAL ─────────────────────────────────────────── */
                  if (item.type === "spatial") {
                    const cfg: SpatialConfig =
                      (item.config as SpatialConfig) ?? {
                        positionX: 0,
                        positionY: 0,
                        positionZ: -1,
                        panningModel: "HRTF",
                        distanceModel: "inverse",
                        rolloffFactor: 1,
                      };
                    const updateCfg = (
                      u: (c: SpatialConfig) => SpatialConfig,
                    ) => updateItemConfig<SpatialConfig>(item.id, u);
                    return (
                      <div
                        key={item.id}
                        className={`${rackStyles.rackItem}${item.bypassed ? ` ${rackStyles.rackItemBypassed}` : ""}`}
                      >
                        <CornerBolts />
                        <div className={rackStyles.rackItemHeader}>
                          <span className={rackStyles.rackItemType}>
                            spatial
                          </span>
                          <div className={rackStyles.headerActions}>
                            {(() => {
                              const mv = activeLayer.rack.filter(
                                (i) => i.type !== "source" && i.type !== "mix",
                              );
                              const mi = mv.findIndex((i) => i.id === item.id);
                              return (
                                <>
                                  <button
                                    type="button"
                                    className={rackStyles.moveBtn}
                                    disabled={mi <= 0}
                                    onClick={() => moveRackItem(item.id, -1)}
                                    title="Move left"
                                  >
                                    <span className={rackStyles.chevronFlip}>
                                      <ChevronIcon size={11} open={false} />
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className={rackStyles.moveBtn}
                                    disabled={mi >= mv.length - 1}
                                    onClick={() => moveRackItem(item.id, 1)}
                                    title="Move right"
                                  >
                                    <ChevronIcon size={11} open={false} />
                                  </button>
                                </>
                              );
                            })()}
                            <button
                              type="button"
                              className={rackStyles.iconBtn}
                              onClick={() =>
                                updateCfg(() => ({
                                  positionX: +(
                                    (Math.random() - 0.5) *
                                    20
                                  ).toFixed(2),
                                  positionY: +(
                                    (Math.random() - 0.5) *
                                    10
                                  ).toFixed(2),
                                  positionZ: +(-Math.random() * 10).toFixed(2),
                                  panningModel:
                                    Math.random() > 0.5 ? "HRTF" : "equalpower",
                                  distanceModel: (
                                    [
                                      "linear",
                                      "inverse",
                                      "exponential",
                                    ] as const
                                  )[Math.floor(Math.random() * 3)],
                                  rolloffFactor: +(
                                    0.1 +
                                    Math.random() * 9.9
                                  ).toFixed(2),
                                }))
                              }
                            >
                              <DiceIcon size={14} /> Randomize
                            </button>
                            <button
                              type="button"
                              className={rackStyles.bypassBtn}
                              data-bypassed={item.bypassed ? "true" : undefined}
                              onClick={() => toggleBypass(item.id)}
                              title={item.bypassed ? "Enable" : "Bypass"}
                            >
                              <PowerIcon size={12} />
                            </button>
                            <button
                              type="button"
                              className={rackStyles.deleteBtn}
                              onClick={() => deleteRackItem(item.id)}
                              title="Delete"
                            >
                              <TrashIcon size={12} />
                            </button>
                          </div>
                        </div>
                        <strong className={rackStyles.rackItemTitle}>
                          {item.name}
                        </strong>
                        <div className={rackStyles.field}>
                          <span className={rackStyles.fieldLabel}>Model</span>
                          <Select.Root
                            value={cfg.panningModel}
                            onValueChange={(v) => {
                              if (v)
                                updateCfg((c) => ({
                                  ...c,
                                  panningModel:
                                    v as SpatialConfig["panningModel"],
                                }));
                            }}
                          >
                            <Select.Trigger
                              className={controlStyles.controlSelect}
                            >
                              <Select.Value />
                              <Select.Icon className={controlStyles.selectIcon}>
                                <ChevronDown />
                              </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                              <Select.Positioner
                                className={controlStyles.selectPositioner}
                              >
                                <Select.Popup
                                  className={controlStyles.selectPopup}
                                >
                                  {(["HRTF", "equalpower"] as const).map(
                                    (t) => (
                                      <Select.Item
                                        key={t}
                                        value={t}
                                        className={controlStyles.selectItem}
                                      >
                                        <Select.ItemIndicator
                                          className={
                                            controlStyles.selectIndicator
                                          }
                                        >
                                          <CheckIcon size={12} />
                                        </Select.ItemIndicator>
                                        <Select.ItemText>{t}</Select.ItemText>
                                      </Select.Item>
                                    ),
                                  )}
                                </Select.Popup>
                              </Select.Positioner>
                            </Select.Portal>
                          </Select.Root>
                        </div>
                        <div className={rackStyles.field}>
                          <span className={rackStyles.fieldLabel}>
                            Distance
                          </span>
                          <Select.Root
                            value={cfg.distanceModel}
                            onValueChange={(v) => {
                              if (v)
                                updateCfg((c) => ({
                                  ...c,
                                  distanceModel:
                                    v as SpatialConfig["distanceModel"],
                                }));
                            }}
                          >
                            <Select.Trigger
                              className={controlStyles.controlSelect}
                            >
                              <Select.Value />
                              <Select.Icon className={controlStyles.selectIcon}>
                                <ChevronDown />
                              </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                              <Select.Positioner
                                className={controlStyles.selectPositioner}
                              >
                                <Select.Popup
                                  className={controlStyles.selectPopup}
                                >
                                  {(
                                    [
                                      "linear",
                                      "inverse",
                                      "exponential",
                                    ] as const
                                  ).map((t) => (
                                    <Select.Item
                                      key={t}
                                      value={t}
                                      className={controlStyles.selectItem}
                                    >
                                      <Select.ItemIndicator
                                        className={
                                          controlStyles.selectIndicator
                                        }
                                      >
                                        <CheckIcon size={12} />
                                      </Select.ItemIndicator>
                                      <Select.ItemText>{t}</Select.ItemText>
                                    </Select.Item>
                                  ))}
                                </Select.Popup>
                              </Select.Positioner>
                            </Select.Portal>
                          </Select.Root>
                        </div>
                        <div className={rackStyles.knobRow}>
                          <Knob
                            label="X"
                            value={cfg.positionX}
                            min={-10}
                            max={10}
                            step={0.1}
                            resetValue={0}
                            onChange={(v) =>
                              updateCfg((c) => ({ ...c, positionX: v }))
                            }
                          />
                          <Knob
                            label="Y"
                            value={cfg.positionY}
                            min={-10}
                            max={10}
                            step={0.1}
                            resetValue={0}
                            onChange={(v) =>
                              updateCfg((c) => ({ ...c, positionY: v }))
                            }
                          />
                          <Knob
                            label="Z"
                            value={cfg.positionZ}
                            min={-10}
                            max={10}
                            step={0.1}
                            resetValue={-1}
                            onChange={(v) =>
                              updateCfg((c) => ({ ...c, positionZ: v }))
                            }
                          />
                          <Knob
                            label="Rolloff"
                            value={cfg.rolloffFactor}
                            min={0}
                            max={10}
                            step={0.1}
                            resetValue={1}
                            onChange={(v) =>
                              updateCfg((c) => ({ ...c, rolloffFactor: v }))
                            }
                          />
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}
            </div>

            <div className={rackStyles.addRackControls}>
              <button
                type="button"
                className={rackStyles.addRackBtn}
                onClick={onAddFilter}
              >
                + Filter
              </button>
              <button
                type="button"
                className={rackStyles.addRackBtn}
                onClick={onAddEffect}
              >
                + Effect
              </button>
              <button
                type="button"
                className={rackStyles.addRackBtn}
                onClick={onAddLfo}
              >
                + LFO
              </button>
              <button
                type="button"
                className={rackStyles.addRackBtn}
                onClick={onAddSpatial}
              >
                + Spatial
              </button>
            </div>
          </>
        ) : (
          <p className={panelStyles.emptyState}>
            Add and select a layer to edit its rack.
          </p>
        )}
      </div>
    </section>
  );
}

function CornerBolts() {
  return (
    <>
      <span className={`${rackStyles.bolt} ${rackStyles.boltTL}`} />
      <span className={`${rackStyles.bolt} ${rackStyles.boltTR}`} />
      <span className={`${rackStyles.bolt} ${rackStyles.boltBL}`} />
      <span className={`${rackStyles.bolt} ${rackStyles.boltBR}`} />
    </>
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
