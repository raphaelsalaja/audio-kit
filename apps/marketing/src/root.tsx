import "@web-kits/ui/styles/tokens.css";
import "@web-kits/ui/styles/shadows.css";
import { Composition } from "remotion";
import { FPS, TOTAL_DURATION } from "./config/timing";
import { Marketing } from "./marketing";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Marketing"
      component={Marketing}
      durationInFrames={TOTAL_DURATION}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};
