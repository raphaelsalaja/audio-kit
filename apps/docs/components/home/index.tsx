import styles from "./styles.module.css";

export function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1 className={styles.name}>Audio Kit</h1>
          <span className={styles.version}>0.1.0</span>
        </div>
        <p className={styles.description}>
          A declarative synthesizer for the web. Describe sounds as plain
          objects and play them with a single function call. Works with vanilla
          JS, React, or any framework.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.title}>Features</h2>
        <p className={styles.sectionDescription}>
          Everything you need to add sound to the web.
        </p>
        <div className={styles.featureGrid}></div>
      </section>
    </div>
  );
}
