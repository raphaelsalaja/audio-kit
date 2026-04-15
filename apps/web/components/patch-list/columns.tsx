import { createColumnHelper } from "@tanstack/react-table";
import type { PatchWithStats } from "@/lib/patches";
import styles from "./styles.module.css";

const col = createColumnHelper<PatchWithStats>();

const _formatDate = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "short",
  day: "numeric",
});

const compactNumber = new Intl.NumberFormat(undefined, {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function createColumns() {
  return [
    col.accessor("name", {
      header: "Patch",
      cell: ({ row }) => (
        <div className={styles.patch}>
          <span className={styles.name}>{row.original.name}</span>
          <span className={styles.author}>{row.original.author}</span>
        </div>
      ),
    }),
    col.accessor("description", {
      header: "Description",
      cell: ({ row }) => (
        <span className={styles.description}>{row.original.description}</span>
      ),
    }),
    col.accessor("loads", {
      header: "Installs",
      cell: ({ getValue }) => {
        const loads = getValue();
        if (loads < 5) {
          return <span className={styles.loads}>&lt;5</span>;
        }
        return (
          <span className={styles.loads}>{compactNumber.format(loads)}</span>
        );
      },
      meta: { align: "right" as const },
    }),
  ];
}
