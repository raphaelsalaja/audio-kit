import type { Metadata } from "next";
import { DawEditor } from "@/components/daw-editor";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Editor",
  description: "Design and test custom UI sound patches in real time.",
  alternates: { canonical: "https://audio.raphaelsalaja.com/editor" },
  openGraph: {
    title: "Editor",
    description: "Design and test custom UI sound patches in real time.",
    url: "https://audio.raphaelsalaja.com/editor",
  },
};

export default function EditorPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Editor</h1>
        <p className={styles.description}>
          Build and preview custom UI sound patches.
        </p>
      </header>
      <DawEditor />

      {/* <section className={styles.referenceSection}>
        <h2 className={styles.referenceTitle}>Builder (Reference)</h2>
        <SoundBuilder />
      </section> */}
    </main>
  );
}
