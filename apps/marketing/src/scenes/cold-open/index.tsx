import { AbsoluteFill, Sequence } from "remotion";
import { AnimatedText } from "../../primitives/animated-text";
import styles from "./styles.module.css";

export const ColdOpen: React.FC = () => {
  return (
    <AbsoluteFill className={styles.stage}>
      {/* Width:100% so the inline-blocks render across the full viewport
          and center stays anchored to the frame, not to the AnimatedText's
          shrink-to-fit wrapper. */}
      <div className={styles.headline}>
        <Sequence from={6} layout="none">
          <AnimatedText>
            Creating Sounds on the Web Should Be Simple.
          </AnimatedText>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
