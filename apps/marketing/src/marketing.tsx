import { loadFont } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
// biome-ignore lint/style/useImportType: Remotion bundler's JSX transform requires React in scope at runtime.
import React from "react";
import { AbsoluteFill, Easing } from "remotion";
import { BackingTrack } from "./audio/backing-track";
import { SCENES, TRANSITION_FRAMES } from "./config/timing";
import { ColdOpen } from "./scenes/cold-open";
import { Introducing } from "./scenes/introducing";
import { Outro } from "./scenes/outro";
import { Primitives } from "./scenes/primitives";

loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
loadMono("normal", { weights: ["400", "500"], subsets: ["latin"] });

const transition = (
  <TransitionSeries.Transition
    presentation={fade()}
    timing={linearTiming({
      durationInFrames: TRANSITION_FRAMES,
      easing: Easing.bezier(0.42, 0, 0.58, 1),
    })}
  />
);

export const Marketing: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "var(--ds-gray-1)" }}>
      <BackingTrack />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SCENES.coldOpen.duration}>
          <ColdOpen />
        </TransitionSeries.Sequence>
        {transition}
        <TransitionSeries.Sequence
          durationInFrames={SCENES.introducing.duration}
        >
          <Introducing />
        </TransitionSeries.Sequence>
        {transition}
        <TransitionSeries.Sequence
          durationInFrames={SCENES.primitives.duration}
        >
          <Primitives />
        </TransitionSeries.Sequence>
        {transition}
        <TransitionSeries.Sequence durationInFrames={SCENES.outro.duration}>
          <Outro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
