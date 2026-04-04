import { getContext, getMasterBus } from "./context";
import type { AnalyserOptions } from "./types";

export type AudioAnalyser = {
  node: AnalyserNode;
  getFrequencyData: () => Uint8Array;
  getTimeDomainData: () => Uint8Array;
  getFloatFrequencyData: () => Float32Array;
  getFloatTimeDomainData: () => Float32Array;
  frequencyBinCount: number;
  dispose: () => void;
};

export function createAnalyser(opts?: AnalyserOptions): AudioAnalyser {
  const ctx = getContext();
  const node = ctx.createAnalyser();

  node.fftSize = opts?.fftSize ?? 2048;
  node.smoothingTimeConstant = opts?.smoothingTimeConstant ?? 0.8;
  if (opts?.minDecibels !== undefined) node.minDecibels = opts.minDecibels;
  if (opts?.maxDecibels !== undefined) node.maxDecibels = opts.maxDecibels;

  const freqData = new Uint8Array(node.frequencyBinCount);
  const timeData = new Uint8Array(node.fftSize);
  const floatFreqData = new Float32Array(node.frequencyBinCount);
  const floatTimeData = new Float32Array(node.fftSize);

  return {
    node,
    frequencyBinCount: node.frequencyBinCount,

    getFrequencyData() {
      node.getByteFrequencyData(freqData);
      return freqData;
    },

    getTimeDomainData() {
      node.getByteTimeDomainData(timeData);
      return timeData;
    },

    getFloatFrequencyData() {
      node.getFloatFrequencyData(floatFreqData);
      return floatFreqData;
    },

    getFloatTimeDomainData() {
      node.getFloatTimeDomainData(floatTimeData);
      return floatTimeData;
    },

    dispose() {
      try {
        node.disconnect();
      } catch (_) {
        /* noop */
      }
    },
  };
}

export function createMasterAnalyser(opts?: AnalyserOptions): AudioAnalyser {
  const bus = getMasterBus();
  const analyser = createAnalyser(opts);

  bus.connect(analyser.node);

  const originalDispose = analyser.dispose;
  analyser.dispose = () => {
    try {
      bus.disconnect(analyser.node);
    } catch (_) {
      /* noop */
    }
    originalDispose();
  };

  return analyser;
}
