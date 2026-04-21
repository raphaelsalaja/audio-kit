import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { springs } from "../../config/tokens";
import styles from "./styles.module.css";

export type ToggleProps = {
  toggleAt?: number;
  label?: string;
  defaultOn?: boolean;
};

const TRACK_W = 96;
const TRACK_H = 52;
const KNOB = 40;
const PAD = (TRACK_H - KNOB) / 2;
const TRAVEL = TRACK_W - KNOB - PAD * 2;

export const Toggle: React.FC<ToggleProps> = ({
  toggleAt,
  label,
  defaultOn = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const toggled = toggleAt !== undefined && frame >= toggleAt;
  const on = toggled ? !defaultOn : defaultOn;

  const slide =
    toggleAt === undefined
      ? defaultOn
        ? 1
        : 0
      : spring({
          frame: frame - toggleAt,
          fps,
          config: springs.snap,
          from: defaultOn ? 1 : 0,
          to: defaultOn ? 0 : 1,
        });

  const pulse =
    toggleAt === undefined
      ? 0
      : interpolate(frame - toggleAt, [0, 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
  const scale = 1 + (pulse < 0.5 ? pulse * 0.08 : (1 - pulse) * 0.08);

  const knobX = PAD + slide * TRAVEL;

  return (
    <div className={styles.row}>
      <div
        className={styles.track}
        style={{
          width: TRACK_W,
          height: TRACK_H,
          background: on ? "var(--ds-gray-12)" : "var(--ds-gray-a4)",
          transform: `scale(${scale})`,
        }}
      >
        <div
          className={styles.knob}
          style={{
            width: KNOB,
            height: KNOB,
            transform: `translateX(${knobX}px)`,
          }}
        />
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};
