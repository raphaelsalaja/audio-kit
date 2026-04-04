import type { ReactNode } from "react";
import styles from "./styles.module.css";

interface StepProps {
  title: string;
  children: ReactNode;
}

export function Steps({ children }: { children: ReactNode }) {
  return <div className={styles.steps}>{children}</div>;
}

export function Step({ title, children }: StepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.indicator}>
        <span className={styles.number} />
        <span className={styles.line} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
}
