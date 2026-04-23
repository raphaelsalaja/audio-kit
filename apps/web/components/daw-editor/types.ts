export type RackItemType =
  | "source"
  | "filter"
  | "effect"
  | "lfo"
  | "spatial"
  | "mix";

export type OscillatorType = "sine" | "triangle" | "square" | "sawtooth";

export type SourceConfig =
  | {
      type: OscillatorType;
      frequency: number | { start: number; end: number };
      detune: number;
      fm?: { ratio: number; depth: number };
    }
  | { type: "noise"; color: "white" | "pink" | "brown" }
  | { type: "wavetable"; frequency: number; harmonics: number[] }
  | { type: "sample"; url: string; playbackRate: number; loop: boolean }
  | { type: "constant"; offset: number };

export type EnvelopeConfig = {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
};

export type MixConfig = {
  gain: number;
  pan: number;
};

export type FilterConfig = {
  filterType:
    | "lowpass"
    | "highpass"
    | "bandpass"
    | "notch"
    | "allpass"
    | "peaking"
    | "lowshelf"
    | "highshelf";
  frequency: number;
  resonance: number;
  gain: number;
};

export type EffectConfig =
  | {
      effectType: "reverb";
      decay: number;
      preDelay: number;
      damping: number;
      roomSize: number;
      mix: number;
    }
  | { effectType: "delay"; time: number; feedback: number; mix: number }
  | { effectType: "distortion"; amount: number; mix: number }
  | { effectType: "chorus"; rate: number; depth: number; mix: number }
  | {
      effectType: "flanger";
      rate: number;
      depth: number;
      feedback: number;
      mix: number;
    }
  | {
      effectType: "phaser";
      rate: number;
      depth: number;
      stages: number;
      feedback: number;
      mix: number;
    }
  | { effectType: "tremolo"; rate: number; depth: number }
  | {
      effectType: "bitcrusher";
      bits: number;
      sampleRateReduction: number;
      mix: number;
    }
  | {
      effectType: "compressor";
      threshold: number;
      knee: number;
      ratio: number;
      attack: number;
      release: number;
    }
  | { effectType: "gain"; value: number }
  | { effectType: "pan"; value: number };

export type LfoConfig = {
  lfoType: "sine" | "triangle" | "square" | "sawtooth";
  frequency: number;
  depth: number;
  target:
    | "frequency"
    | "detune"
    | "gain"
    | "pan"
    | "filter.frequency"
    | "filter.detune"
    | "filter.Q"
    | "filter.gain"
    | "playbackRate";
};

export type SpatialConfig = {
  positionX: number;
  positionY: number;
  positionZ: number;
  panningModel: "equalpower" | "HRTF";
  distanceModel: "linear" | "inverse" | "exponential";
  rolloffFactor: number;
};

export type RackItemConfig =
  | FilterConfig
  | EffectConfig
  | LfoConfig
  | SpatialConfig;

export type RackItem = {
  id: string;
  type: RackItemType;
  name: string;
  config?: RackItemConfig;
  bypassed?: boolean;
};

export type Layer = {
  id: string;
  name: string;
  row: number;
  start: number;
  length: number;
  rack: RackItem[];
  source: SourceConfig;
  envelope: EnvelopeConfig;
  mix?: MixConfig;
};
