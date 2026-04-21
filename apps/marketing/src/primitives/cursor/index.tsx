import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { springs } from "../../config/tokens";
import styles from "./styles.module.css";

export type CursorWaypoint = {
  at: number;
  x: number;
  y: number;
  click?: boolean;
};

export type CursorProps = {
  waypoints: CursorWaypoint[];
};

// (x, y) anchors at the cursor tip, matching how an OS cursor lands on a target.
const CURSOR_W = 28;
const CURSOR_H = 32;
const CURSOR_CX = 3;
const CURSOR_CY = 2;

export const Cursor: React.FC<CursorProps> = ({ waypoints }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sorted = [...waypoints].sort((a, b) => a.at - b.at);

  let from = sorted[0];
  let to = sorted[0];
  for (let i = 0; i < sorted.length - 1; i++) {
    if (frame >= sorted[i].at && frame <= sorted[i + 1].at) {
      from = sorted[i];
      to = sorted[i + 1];
      break;
    }
    if (frame > sorted[i + 1].at) {
      from = sorted[i + 1];
      to = sorted[i + 1];
    }
  }

  const t =
    to.at === from.at
      ? 1
      : interpolate(frame, [from.at, to.at], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

  const eased = 1 - (1 - t) ** 3;
  const x = from.x + (to.x - from.x) * eased;
  const y = from.y + (to.y - from.y) * eased;

  let scale = 1;
  for (const wp of sorted) {
    if (!wp.click) continue;
    const dt = frame - wp.at;
    if (dt < -2 || dt > 30) continue;
    const press = spring({
      frame: dt,
      fps,
      config: springs.snap,
      durationInFrames: 18,
    });
    const dip = press < 0.5 ? press * 2 : 2 - press * 2;
    scale = Math.min(scale, 1 - dip * 0.18);
  }

  return (
    <div
      className={styles.cursor}
      style={{
        left: x - CURSOR_CX,
        top: y - CURSOR_CY,
        transform: `scale(${scale})`,
        transformOrigin: `${CURSOR_CX}px ${CURSOR_CY}px`,
      }}
    >
      <svg
        width={CURSOR_W}
        height={CURSOR_H}
        viewBox={`0 0 ${CURSOR_W} ${CURSOR_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <title>Cursor</title>
        <path
          d="M3 2L3 26L9.5 20L13.5 28.5L17 27L13 19L22 19L3 2Z"
          fill="white"
          stroke="var(--ds-gray-12)"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
