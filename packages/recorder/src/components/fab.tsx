"use client";

import { OVERLAY_ATTR } from "../picker";
import styles from "./fab.module.css";

type FabProps = {
  active: boolean;
  onClick: () => void;
};

export function Fab({ active, onClick }: FabProps) {
  const overlayProps = { [OVERLAY_ATTR]: "" };

  return (
    <button
      type="button"
      aria-label={active ? "Cancel recorder" : "Start recorder"}
      data-active={active}
      className={styles.fab}
      {...overlayProps}
      onClick={onClick}
    >
      <span className={styles.dot} />
    </button>
  );
}
