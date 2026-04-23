"use client";

import { OVERLAY_ATTR } from "../picker";
import type {
  AspectRatio,
  BackgroundStyle,
  FrameStyle,
  Rect,
  ShadowPreset,
} from "../types";
import styles from "./toolbar.module.css";

type ToolbarProps = {
  frameRect: Rect;
  style: FrameStyle;
  onStyleChange: (patch: Partial<FrameStyle>) => void;
  onRePick: () => void;
  onCancel: () => void;
  onRecord: () => void;
  onStop: () => void;
  recording: boolean;
  supportsRegionCapture: boolean;
};

const ASPECTS: AspectRatio[] = ["free", "16:9", "4:3", "1:1"];
const SHADOWS: ShadowPreset[] = ["none", "sm", "md", "lg", "xl"];

const BACKGROUND_PRESETS: { label: string; value: BackgroundStyle }[] = [
  { label: "Transparent", value: { kind: "transparent" } },
  { label: "White", value: { kind: "solid", color: "#ffffff" } },
  { label: "Light", value: { kind: "solid", color: "#f4f4f5" } },
  { label: "Dark", value: { kind: "solid", color: "#0a0a0a" } },
  {
    label: "Sunset",
    value: {
      kind: "gradient",
      from: "#fb7185",
      to: "#fbbf24",
      angle: 135,
    },
  },
  {
    label: "Ocean",
    value: {
      kind: "gradient",
      from: "#38bdf8",
      to: "#6366f1",
      angle: 135,
    },
  },
  {
    label: "Mint",
    value: {
      kind: "gradient",
      from: "#34d399",
      to: "#0ea5e9",
      angle: 135,
    },
  },
];

function backgroundSwatchStyle(bg: BackgroundStyle): React.CSSProperties {
  switch (bg.kind) {
    case "transparent":
      return {};
    case "solid":
      return { background: bg.color };
    case "gradient":
      return {
        background: `linear-gradient(${bg.angle}deg, ${bg.from}, ${bg.to})`,
      };
  }
}

function backgroundEquals(a: BackgroundStyle, b: BackgroundStyle): boolean {
  if (a.kind !== b.kind) return false;
  if (a.kind === "transparent") return true;
  if (a.kind === "solid" && b.kind === "solid") return a.color === b.color;
  if (a.kind === "gradient" && b.kind === "gradient") {
    return a.from === b.from && a.to === b.to && a.angle === b.angle;
  }
  return false;
}

export function Toolbar({
  frameRect,
  style,
  onStyleChange,
  onRePick,
  onCancel,
  onRecord,
  onStop,
  recording,
  supportsRegionCapture,
}: ToolbarProps) {
  const overlayProps = { [OVERLAY_ATTR]: "" };

  const centerX = frameRect.x + frameRect.width / 2;
  const top = Math.min(
    frameRect.y + frameRect.height + 16,
    window.innerHeight - 64,
  );

  return (
    <div
      role="toolbar"
      aria-label="Recorder controls"
      className={styles.root}
      {...overlayProps}
      style={{ top, left: centerX }}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className={styles.group} {...overlayProps}>
        <span className={styles.label}>Pad</span>
        <input
          type="range"
          className={styles.slider}
          min={0}
          max={128}
          step={1}
          value={style.padding}
          onChange={(e) => onStyleChange({ padding: Number(e.target.value) })}
        />
        <span className={styles.num}>{style.padding}</span>
      </div>

      <div className={styles.group} {...overlayProps}>
        <span className={styles.label}>Border</span>
        <input
          type="color"
          className={styles.color}
          value={style.borderColor}
          onChange={(e) => onStyleChange({ borderColor: e.target.value })}
        />
        <input
          type="range"
          className={styles.slider}
          min={0}
          max={8}
          step={1}
          value={style.borderWidth}
          onChange={(e) =>
            onStyleChange({ borderWidth: Number(e.target.value) })
          }
        />
        <span className={styles.num}>{style.borderWidth}</span>
      </div>

      <div className={styles.group} {...overlayProps}>
        <span className={styles.label}>Radius</span>
        <input
          type="range"
          className={styles.slider}
          min={0}
          max={48}
          step={1}
          value={style.radius}
          onChange={(e) => onStyleChange({ radius: Number(e.target.value) })}
        />
        <span className={styles.num}>{style.radius}</span>
      </div>

      <div className={styles.group} {...overlayProps}>
        <span className={styles.label}>BG</span>
        <div className={styles.swatches}>
          {BACKGROUND_PRESETS.map((preset) => {
            const active = backgroundEquals(preset.value, style.background);
            const isTransparent = preset.value.kind === "transparent";
            return (
              <button
                key={preset.label}
                type="button"
                title={preset.label}
                aria-label={preset.label}
                data-active={active}
                className={`${styles.swatch} ${
                  isTransparent ? styles.swatchCheck : ""
                }`}
                style={backgroundSwatchStyle(preset.value)}
                onClick={() => onStyleChange({ background: preset.value })}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.group} {...overlayProps}>
        <span className={styles.label}>Shadow</span>
        <div className={styles.segmented}>
          {SHADOWS.map((s) => (
            <button
              key={s}
              type="button"
              className={styles.segment}
              data-active={style.shadow === s}
              onClick={() => onStyleChange({ shadow: s })}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.group} {...overlayProps}>
        <span className={styles.label}>Ratio</span>
        <div className={styles.segmented}>
          {ASPECTS.map((a) => (
            <button
              key={a}
              type="button"
              className={styles.segment}
              data-active={style.aspect === a}
              onClick={() => onStyleChange({ aspect: a })}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.group} {...overlayProps}>
        <span className={styles.label}>Focus</span>
        <button
          type="button"
          className={styles.segment}
          data-active={style.spotlight}
          onClick={() => onStyleChange({ spotlight: !style.spotlight })}
          title="Dim the rest of the page so the framed area stands out"
        >
          {style.spotlight ? "on" : "off"}
        </button>
      </div>

      {!supportsRegionCapture ? (
        <span
          className={styles.notice}
          title="Region Capture not available — using canvas crop fallback"
        >
          Fallback mode
        </span>
      ) : null}

      <div className={styles.actions} {...overlayProps}>
        {!recording ? (
          <>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={onRePick}
            >
              Re-pick
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnRecord}`}
              onClick={onRecord}
            >
              Record
            </button>
          </>
        ) : (
          <button
            type="button"
            className={`${styles.btn} ${styles.btnStop}`}
            onClick={onStop}
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}
