import { Audio } from "@remotion/media";
import { backingTrack } from "../generated/music";
import { ALL_CUES, type GlobalCue } from "./cues";

// Per-cue duck envelope. The pad sits at `BASE_LEVEL` by default and dips to
// `BASE_LEVEL * DUCK_FLOOR` while a cue is firing, with a short ramp on each
// side so the dip itself isn't audible.
const BASE_LEVEL = 0.3;
const DUCK_FLOOR = 0.25;
const ATTACK_FRAMES = 6;
const RELEASE_FRAMES = 14;

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function duckMultiplier(frame: number, cue: GlobalCue): number {
  const hold = cue.sound.durationInFrames;
  const start = cue.globalFrame - ATTACK_FRAMES;
  const end = cue.globalFrame + hold + RELEASE_FRAMES;
  if (frame <= start || frame >= end) return 1;
  if (frame < cue.globalFrame) {
    return lerp(1, DUCK_FLOOR, (frame - start) / ATTACK_FRAMES);
  }
  if (frame < cue.globalFrame + hold) return DUCK_FLOOR;
  return lerp(DUCK_FLOOR, 1, (frame - cue.globalFrame - hold) / RELEASE_FRAMES);
}

function volumeAt(frame: number): number {
  let mul = 1;
  for (const cue of ALL_CUES) {
    const m = duckMultiplier(frame, cue);
    if (m < mul) mul = m;
  }
  return BASE_LEVEL * mul;
}

export const BackingTrack: React.FC = () => {
  return <Audio src={backingTrack.src} volume={volumeAt} />;
};
