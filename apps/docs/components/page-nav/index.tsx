import type { Item } from "fumadocs-core/page-tree";
import Link from "next/link";
import styles from "./styles.module.css";

interface PageNavProps {
  previous?: Item;
  next?: Item;
}

export function PageNav({ previous, next }: PageNavProps) {
  if (!previous && !next) return null;

  return (
    <nav className={styles.nav}>
      {previous ? (
        <Link href={previous.url} className={styles.card}>
          <span className={styles.direction}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 4L6 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Previous
          </span>
          <span className={styles.title}>{previous.name}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.url} className={`${styles.card} ${styles.next}`}>
          <span className={styles.direction}>
            Next
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.title}>{next.name}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
