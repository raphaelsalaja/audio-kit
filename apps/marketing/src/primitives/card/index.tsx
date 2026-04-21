import type { CSSProperties, ReactNode } from "react";
import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { springs } from "../../config/tokens";
import styles from "./styles.module.css";

export type CardProps = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  enterAt?: number;
  depth?: "soft" | "button" | "raised" | "floating";
  style?: CSSProperties;
  padding?: number | string;
  background?: string;
};

const SHADOWS = {
  soft: "var(--shadow-1)",
  button: "var(--shadow-2)",
  raised: "var(--shadow-3)",
  floating: "var(--shadow-5)",
} as const;

export const Card: React.FC<CardProps> = ({
  children,
  width,
  height,
  enterAt = 0,
  depth = "button",
  style,
  padding = 32,
  background,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({
    frame: frame - enterAt,
    fps,
    config: springs.enter,
  });
  const opacityT = interpolate(frame, [enterAt, enterAt + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const scale = 0.94 + 0.06 * enter;
  const translateY = (1 - enter) * 18;
  const blurPx = (1 - opacityT) * 10;

  return (
    <div
      className={styles.card}
      style={{
        width,
        height,
        padding,
        background: background ?? "var(--ds-gray-1)",
        boxShadow: SHADOWS[depth],
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: opacityT,
        filter: `blur(${blurPx}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
