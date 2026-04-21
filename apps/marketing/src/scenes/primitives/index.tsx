import { Audio } from "@remotion/media";
import { Trail } from "@remotion/motion-blur";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { SfxCue } from "../../audio/cues";
import { springs } from "../../config/tokens";
import { playful } from "../../generated/sounds";
import { Button } from "../../primitives/button";
import { Card } from "../../primitives/card";
import { Checkbox } from "../../primitives/checkbox";
import { Cursor, type CursorWaypoint } from "../../primitives/cursor";
import { Tabs } from "../../primitives/tabs";
import { Toggle } from "../../primitives/toggle";
import styles from "./styles.module.css";

const STAGE = {
  cardW: 720,
  cardH: 320,
  gap: 40,
};
const GRID_W = STAGE.cardW * 2 + STAGE.gap;
const GRID_H = STAGE.cardH * 2 + STAGE.gap;
const GRID_X = (1920 - GRID_W) / 2;
const GRID_Y = (1080 - GRID_H) / 2;

const CARDS = {
  tl: { x: GRID_X, y: GRID_Y },
  tr: { x: GRID_X + STAGE.cardW + STAGE.gap, y: GRID_Y },
  bl: { x: GRID_X, y: GRID_Y + STAGE.cardH + STAGE.gap },
  br: {
    x: GRID_X + STAGE.cardW + STAGE.gap,
    y: GRID_Y + STAGE.cardH + STAGE.gap,
  },
};

const BEATS = {
  shotSubmit: 0,
  clickSubmit: 36,
  shotCheckbox: 80,
  clickCheckbox: 116,
  shotTabs: 160,
  clickTab: 196,
  shotToggle: 240,
  clickToggle: 276,
  end: 320,
};

const CLOSE_SCALE = 2.3;

export const CUES: readonly SfxCue[] = [
  { at: BEATS.clickSubmit, sound: playful.sounds.click, volume: 0.9 },
  { at: BEATS.clickCheckbox, sound: playful.sounds.checkbox, volume: 0.9 },
  { at: BEATS.clickTab, sound: playful.sounds["tab-switch"], volume: 0.85 },
  { at: BEATS.clickToggle, sound: playful.sounds["toggle-on"], volume: 0.9 },
];

function cardCenter(pos: { x: number; y: number }) {
  return { cx: pos.x + STAGE.cardW / 2, cy: pos.y + STAGE.cardH / 2 };
}

function currentCamera(localFrame: number, fps: number) {
  let shotStart: number;
  if (localFrame < BEATS.shotCheckbox) {
    shotStart = BEATS.shotSubmit;
  } else if (localFrame < BEATS.shotTabs) {
    shotStart = BEATS.shotCheckbox;
  } else if (localFrame < BEATS.shotToggle) {
    shotStart = BEATS.shotTabs;
  } else {
    shotStart = BEATS.shotToggle;
  }

  const t = spring({
    frame: localFrame - shotStart,
    fps,
    config: { damping: 20, stiffness: 200, mass: 0.7 },
    durationInFrames: 10,
  });
  const overshoot = (1 - t) * 0.04;
  const scale = CLOSE_SCALE * (1 + overshoot);
  const origin = shotCenter(localFrame);
  const dx = 1920 / 2 - scale * origin.cx;
  const dy = 1080 / 2 - scale * origin.cy;
  return { dx, dy, scale };
}

function shotCenter(localFrame: number): { cx: number; cy: number } {
  let pos: { x: number; y: number };
  if (localFrame < BEATS.shotCheckbox) pos = CARDS.tl;
  else if (localFrame < BEATS.shotTabs) pos = CARDS.tr;
  else if (localFrame < BEATS.shotToggle) pos = CARDS.bl;
  else pos = CARDS.br;
  return cardCenter(pos);
}

export const Primitives: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const camera = currentCamera(frame, fps);

  const buttonPos = cardCenter(CARDS.tl);
  const checkboxPos = cardCenter(CARDS.tr);
  const tabsPos = cardCenter(CARDS.bl);
  const togglePos = cardCenter(CARDS.br);

  return (
    <AbsoluteFill className={styles.stage}>
      <div
        className={styles.cameraLayer}
        style={{
          transform: `translate(${camera.dx}px, ${camera.dy}px) scale(${camera.scale})`,
        }}
      >
        <DemoCard pos={CARDS.tl}>
          <Button label="Submit" pressAt={BEATS.clickSubmit} />
        </DemoCard>
        <DemoCard pos={CARDS.tr}>
          <Checkbox
            checkAt={BEATS.clickCheckbox}
            label="Enable Notifications"
          />
        </DemoCard>
        <DemoCard pos={CARDS.bl}>
          <Tabs
            items={["General", "Settings", "About"]}
            switchAt={[{ at: BEATS.clickTab, index: 1 }]}
          />
        </DemoCard>
        <DemoCard pos={CARDS.br}>
          <Toggle toggleAt={BEATS.clickToggle} label="Dark Mode" />
        </DemoCard>

        <ShotCursor
          active={[BEATS.shotSubmit, BEATS.shotCheckbox]}
          waypoints={[
            {
              at: BEATS.shotSubmit,
              x: buttonPos.cx + 150,
              y: buttonPos.cy + 90,
            },
            { at: BEATS.clickSubmit - 6, x: buttonPos.cx, y: buttonPos.cy },
            {
              at: BEATS.clickSubmit,
              x: buttonPos.cx,
              y: buttonPos.cy,
              click: true,
            },
            {
              at: BEATS.shotCheckbox - 2,
              x: buttonPos.cx,
              y: buttonPos.cy,
            },
          ]}
        />
        <ShotCursor
          active={[BEATS.shotCheckbox, BEATS.shotTabs]}
          waypoints={[
            {
              at: BEATS.shotCheckbox,
              x: checkboxPos.cx + 130,
              y: checkboxPos.cy - 90,
            },
            {
              at: BEATS.clickCheckbox - 6,
              x: checkboxPos.cx,
              y: checkboxPos.cy,
            },
            {
              at: BEATS.clickCheckbox,
              x: checkboxPos.cx,
              y: checkboxPos.cy,
              click: true,
            },
            {
              at: BEATS.shotTabs - 2,
              x: checkboxPos.cx,
              y: checkboxPos.cy,
            },
          ]}
        />
        <ShotCursor
          active={[BEATS.shotTabs, BEATS.shotToggle]}
          waypoints={[
            {
              at: BEATS.shotTabs,
              x: tabsPos.cx - 170,
              y: tabsPos.cy - 90,
            },
            {
              at: BEATS.clickTab - 6,
              x: tabsPos.cx,
              y: tabsPos.cy,
            },
            {
              at: BEATS.clickTab,
              x: tabsPos.cx,
              y: tabsPos.cy,
              click: true,
            },
            {
              at: BEATS.shotToggle - 2,
              x: tabsPos.cx,
              y: tabsPos.cy,
            },
          ]}
        />
        <ShotCursor
          active={[BEATS.shotToggle, BEATS.end]}
          waypoints={[
            {
              at: BEATS.shotToggle,
              x: togglePos.cx + 150,
              y: togglePos.cy + 90,
            },
            {
              at: BEATS.clickToggle - 6,
              x: togglePos.cx,
              y: togglePos.cy,
            },
            {
              at: BEATS.clickToggle,
              x: togglePos.cx,
              y: togglePos.cy,
              click: true,
            },
            {
              at: BEATS.end - 2,
              x: togglePos.cx,
              y: togglePos.cy,
            },
          ]}
        />
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
    </AbsoluteFill>
  );
};

const DemoCard: React.FC<{
  pos: { x: number; y: number };
  children: React.ReactNode;
}> = ({ pos, children }) => {
  return (
    <div
      className={styles.demoCardWrap}
      style={{
        left: pos.x,
        top: pos.y,
        width: STAGE.cardW,
        height: STAGE.cardH,
      }}
    >
      <Card
        enterAt={0}
        width={STAGE.cardW}
        height={STAGE.cardH}
        padding={0}
        depth="soft"
        background="white"
        style={{
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          borderRadius: 48,
          boxShadow: "none",
        }}
      >
        {children}
      </Card>
    </div>
  );
};

const ShotCursor: React.FC<{
  active: [number, number];
  waypoints: CursorWaypoint[];
}> = ({ active, waypoints }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [start, end] = active;
  if (frame < start || frame >= end) return null;

  const enter = spring({
    frame: frame - start,
    fps,
    config: springs.pop,
    durationInFrames: 14,
  });
  const exitT = Math.max(0, Math.min(1, (frame - (end - 10)) / 10));
  const opacity = enter * (1 - exitT);
  const scale = 0.7 + 0.3 * enter;

  return (
    <div
      className={styles.shotCursor}
      style={{
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: `${waypoints[0].x}px ${waypoints[0].y}px`,
      }}
    >
      <Trail layers={4} lagInFrames={1} trailOpacity={0.55}>
        <Cursor waypoints={waypoints} />
      </Trail>
    </div>
  );
};
