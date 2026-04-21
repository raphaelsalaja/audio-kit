import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { springs } from "../../config/tokens";
import styles from "./styles.module.css";

export type ButtonProps = {
  label: string;
  pressAt?: number;
};

export const Button: React.FC<ButtonProps> = ({ label, pressAt }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const press =
    pressAt === undefined
      ? 0
      : spring({
          frame: frame - pressAt,
          fps,
          config: springs.snap,
          durationInFrames: 18,
        });
  const dip = press < 0.5 ? press * 2 : 2 - press * 2;
  const scale = 1 - dip * 0.08;

  return (
    <button
      type="button"
      className={styles.button}
      style={{ transform: `scale(${scale})` }}
    >
      {label}
    </button>
  );
};
