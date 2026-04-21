import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { springs } from "../../config/tokens";
import styles from "./styles.module.css";

export type CheckboxProps = {
  checkAt?: number;
  label?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ checkAt, label }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const checked = checkAt !== undefined && frame >= checkAt;
  const progress =
    checkAt === undefined
      ? 0
      : spring({
          frame: frame - checkAt,
          fps,
          config: springs.snap,
        });

  const size = 52;
  const dash = 30;
  const offset = (1 - progress) * dash;

  const pulse =
    checkAt === undefined
      ? 0
      : interpolate(frame - checkAt, [0, 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
  const scale = 1 + (pulse < 0.5 ? pulse * 0.14 : (1 - pulse) * 0.14);

  return (
    <div className={styles.row}>
      <div
        className={styles.box}
        style={{
          background: checked ? "var(--ds-gray-12)" : "var(--ds-gray-1)",
          borderColor: checked ? "var(--ds-gray-12)" : "var(--ds-gray-a5)",
          transform: `scale(${scale})`,
        }}
      >
        <svg
          width={size - 14}
          height={size - 14}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <title>Checkmark</title>
          <path
            d="M5 12.5L10 17.5L19 7.5"
            stroke="var(--ds-gray-1)"
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={dash}
            strokeDashoffset={offset}
          />
        </svg>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};
