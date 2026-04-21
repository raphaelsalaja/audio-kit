import { AbsoluteFill, Sequence } from "remotion";
import { AnimatedText } from "../../primitives/animated-text";
import styles from "./styles.module.css";

export const Introducing: React.FC = () => {
  return (
    <AbsoluteFill className={styles.stage}>
      <div className={styles.headline}>
        <Sequence from={4} layout="none">
          <AnimatedText
            duration={90}
            animation={{
              // Capture every word boundary plus the special characters in the
              // package name so "@", "/", "-" and "." each get their own beat.
              delimiter: /([\s@/.-])/,
              opacity: [0, 1],
              blur: [10, 0],
              y: [0.12, 0],
              windowSize: 60,
            }}
          >
            Introducing @web-kits/audio.
          </AnimatedText>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
