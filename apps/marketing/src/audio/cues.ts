import { SCENES, TRANSITION_FRAMES } from "../config/timing";
import type { SoundEntry } from "../generated/sounds";
import { CUES as outroCues } from "../scenes/outro";
import { CUES as primitivesCues } from "../scenes/primitives";

export type SfxCue = {
  at: number;
  sound: SoundEntry;
  volume?: number;
};

export type GlobalCue = {
  globalFrame: number;
  sound: SoundEntry;
  volume: number;
};

const CUES_BY_SCENE: Record<keyof typeof SCENES, readonly SfxCue[]> = {
  coldOpen: [],
  introducing: [],
  primitives: primitivesCues,
  outro: outroCues,
};

const sceneIds = Object.keys(SCENES) as Array<keyof typeof SCENES>;

function sceneOffset(index: number): number {
  let offset = 0;
  for (let i = 0; i < index; i++) {
    offset += SCENES[sceneIds[i]].duration;
  }
  return offset - index * TRANSITION_FRAMES;
}

export const ALL_CUES: GlobalCue[] = sceneIds.flatMap((id, i) => {
  const offset = sceneOffset(i);
  return CUES_BY_SCENE[id].map((cue) => ({
    globalFrame: offset + cue.at,
    sound: cue.sound,
    volume: cue.volume ?? 1,
  }));
});
