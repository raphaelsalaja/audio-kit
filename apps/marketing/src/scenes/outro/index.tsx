import { Audio } from "@remotion/media";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { SfxCue } from "../../audio/cues";
import { playful } from "../../generated/sounds";
import styles from "./styles.module.css";

const SEG1_IN = 8;
const SEG1_END = 30;
const SEG2_IN = 46;
const SEG2_END = 68;
const SUCCESS_AT = SEG2_END - 10;
const FADE_DURATION = 24;

export const CUES: readonly SfxCue[] = [
  { at: SUCCESS_AT, sound: playful.sounds.success, volume: 0.85 },
];

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const FADE_START = durationInFrames - FADE_DURATION;

  const SOFT_EASE = Easing.bezier(0.22, 1, 0.36, 1);

  const seg1 = interpolate(frame, [SEG1_IN, SEG1_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: SOFT_EASE,
  });
  const seg2 = interpolate(frame, [SEG2_IN, SEG2_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: SOFT_EASE,
  });
  const wash = interpolate(frame, [FADE_START, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: SOFT_EASE,
  });

  return (
    <AbsoluteFill className={styles.stage}>
      <div className={styles.row}>
        <Segment text="@web-kits" t={seg1} />
        <Segment text="/audio" t={seg2} />
      </div>

      {CUES.map((cue) => (
        <Sequence
          key={`${cue.sound.src}-${cue.at}`}
          from={cue.at}
          premountFor={fps}
        >
          <Audio src={cue.sound.src} volume={cue.volume ?? 1} />
        </Sequence>
      ))}

      <AbsoluteFill className={styles.wash} style={{ opacity: wash }} />
    </AbsoluteFill>
  );
};

const Segment: React.FC<{ text: string; t: number }> = ({ text, t }) => {
  return (
    <span
      className={styles.segment}
      style={{
        color: blend("var(--ds-gray-8)", "var(--ds-gray-12)", t),
        opacity: 0.1 + 0.9 * t,
      }}
    >
      {text}
    </span>
  );
};

function blend(from: string, to: string, t: number): string {
  if (t >= 1) return to;
  if (t <= 0) return from;
  const pct = Math.round(t * 100);
  return `color-mix(in srgb, ${to} ${pct}%, ${from})`;
}
