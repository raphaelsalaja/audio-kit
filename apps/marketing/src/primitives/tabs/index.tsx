import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { springs } from "../../config/tokens";
import styles from "./styles.module.css";

export type TabsProps = {
  items: string[];
  switchAt: { at: number; index: number }[];
  initialIndex?: number;
};

const ITEM_WIDTH = 152;
const GAP = 4;
const PADDING = 8;

export const Tabs: React.FC<TabsProps> = ({
  items,
  switchAt,
  initialIndex = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  let active = initialIndex;
  let lastSwitch = 0;
  for (const sw of [...switchAt].sort((a, b) => a.at - b.at)) {
    if (frame >= sw.at) {
      active = sw.index;
      lastSwitch = sw.at;
    }
  }

  const targetX = PADDING + active * (ITEM_WIDTH + GAP);
  const slide = spring({
    frame: frame - lastSwitch,
    fps,
    config: springs.snap,
  });
  const previousActive = (() => {
    let prev = initialIndex;
    for (const sw of [...switchAt].sort((a, b) => a.at - b.at)) {
      if (sw.at < lastSwitch) prev = sw.index;
      if (sw.at === lastSwitch) return prev;
    }
    return prev;
  })();
  const startX = PADDING + previousActive * (ITEM_WIDTH + GAP);
  const indicatorX = startX + (targetX - startX) * slide;

  return (
    <div className={styles.container}>
      <div className={styles.indicator} style={{ left: indicatorX }} />
      {items.map((label, i) => (
        <div
          key={label}
          className={styles.item}
          style={{
            color: i === active ? "var(--ds-gray-12)" : "var(--ds-gray-9)",
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};
