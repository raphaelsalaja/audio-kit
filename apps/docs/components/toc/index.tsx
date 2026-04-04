"use client";

import type { TOCItemType } from "fumadocs-core/toc";
import { AnchorProvider, useActiveAnchor } from "fumadocs-core/toc";
import styles from "./styles.module.css";

function TOCLink({ item }: { item: TOCItemType }) {
  const active = useActiveAnchor();
  const id = item.url.slice(1);
  const isActive = active === id;

  return (
    <a
      href={item.url}
      className={`${styles.link} ${isActive ? styles.active : ""}`}
      style={{ paddingLeft: `${(item.depth - 2) * 12 + 8}px` }}
    >
      {item.title}
    </a>
  );
}

export function TableOfContents({ toc }: { toc: TOCItemType[] }) {
  if (toc.length === 0) return null;

  return (
    <AnchorProvider toc={toc}>
      <aside className={styles.toc}>
        <div className={styles.label}>On this page</div>
        <nav className={styles.nav}>
          {toc.map((item) => (
            <TOCLink key={item.url} item={item} />
          ))}
        </nav>
      </aside>
    </AnchorProvider>
  );
}
