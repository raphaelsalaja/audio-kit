import type { ContextOptions, Listener } from "./types";

let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let storedOptions: ContextOptions = {};

export function getContext(options?: ContextOptions): AudioContext {
  if (options) {
    storedOptions = options;
  }
  if (!ctx || ctx.state === "closed") {
    ctx = new AudioContext({
      latencyHint: storedOptions.latencyHint,
      sampleRate: storedOptions.sampleRate,
    });
    masterGain = null;
  }
  if (ctx.state === "suspended") {
    ctx.resume();
  }
  return ctx;
}

export async function ensureReady(
  options?: ContextOptions,
): Promise<AudioContext> {
  const audio = getContext(options);
  if (audio.state === "suspended") {
    await audio.resume();
  }
  return audio;
}

export function dispose(): void {
  if (ctx) {
    ctx.close();
    ctx = null;
    masterGain = null;
  }
}

// ---------------------------------------------------------------------------
// Master bus
// ---------------------------------------------------------------------------

export function getMasterBus(): GainNode {
  const c = getContext();
  if (!masterGain || masterGain.context !== c) {
    masterGain = c.createGain();
    masterGain.connect(c.destination);
  }
  return masterGain;
}

export function getDestination(): AudioNode {
  const c = getContext();
  if (masterGain && masterGain.context === c) {
    return masterGain;
  }
  return c.destination;
}

export function setMasterVolume(volume: number): void {
  getMasterBus().gain.value = volume;
}

// ---------------------------------------------------------------------------
// Listener
// ---------------------------------------------------------------------------

export function setListener(listener: Listener): void {
  const audio = getContext();
  const l = audio.listener;

  l.positionX.value = listener.positionX;
  l.positionY.value = listener.positionY;
  l.positionZ.value = listener.positionZ;

  l.forwardX.value = listener.forwardX ?? 0;
  l.forwardY.value = listener.forwardY ?? 0;
  l.forwardZ.value = listener.forwardZ ?? -1;

  l.upX.value = listener.upX ?? 0;
  l.upY.value = listener.upY ?? 1;
  l.upZ.value = listener.upZ ?? 0;
}

export function getListener(): Listener {
  const audio = getContext();
  const l = audio.listener;
  return {
    positionX: l.positionX.value,
    positionY: l.positionY.value,
    positionZ: l.positionZ.value,
    forwardX: l.forwardX.value,
    forwardY: l.forwardY.value,
    forwardZ: l.forwardZ.value,
    upX: l.upX.value,
    upY: l.upY.value,
    upZ: l.upZ.value,
  };
}
