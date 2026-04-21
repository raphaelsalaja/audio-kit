export const FPS = 60;

export const TRANSITION_FRAMES = 18;

export const SCENES = {
  coldOpen: { duration: 3 * FPS },
  introducing: { duration: 3 * FPS },
  primitives: { duration: 5.5 * FPS },
  outro: { duration: 2.25 * FPS },
} as const;

const SCENE_FRAMES = Object.values(SCENES).reduce(
  (sum, s) => sum + s.duration,
  0,
);
const TRANSITION_COUNT = Object.keys(SCENES).length - 1;

export const TOTAL_DURATION =
  SCENE_FRAMES - TRANSITION_COUNT * TRANSITION_FRAMES;
