"use client";

import { tap } from "@audio/core";
import { Field } from "@base-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useSound } from "@web-kits/audio/react";
import Magnifier from "@web-kits/icons/outline/magnifier";
import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import { useEffect, useMemo, useRef } from "react";
import type { PatchWithStats } from "@/lib/patches";
import { createColumns } from "./columns";
import styles from "./styles.module.css";

export function PatchList({ patches }: { patches: PatchWithStats[] }) {
  const [query, setQuery] = useQueryState(
    "q",
    parseAsString
      .withDefault("")
      .withOptions({ shallow: true, throttleMs: 300 }),
  );

  const router = useRouter();

  const playTap = useSound(tap);

  const columns = useMemo(() => createColumns(), []);

  const table = useReactTable({
    data: patches,
    columns,
    state: { globalFilter: query },
    globalFilterFn: (row, _columnId, filterValue) => {
      const s = (filterValue as string).toLowerCase();
      const { name, author, description } = row.original;
      return (
        name.toLowerCase().includes(s) ||
        author.toLowerCase().includes(s) ||
        description.toLowerCase().includes(s)
      );
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getRowId: (row) => String(row.id),
  });

  const { rows } = table.getRowModel();
  const tableRef = useRef<HTMLTableElement>(null);

  const supportsHighlight =
    typeof window !== "undefined" &&
    "highlights" in CSS &&
    typeof Highlight !== "undefined";

  useEffect(() => {
    if (!supportsHighlight) return;
    const id = "search-results-highlight-style";
    const style = document.createElement("style");
    style.id = id;
    style.textContent =
      "::highlight(search-results) { background-color: var(--ds-accent-a3); color: inherit; }";
    document.head.appendChild(style);
    return () => style.remove();
  }, [supportsHighlight]);

  useEffect(() => {
    if (!supportsHighlight) return;
    CSS.highlights.delete("search-results");

    const term = query.trim().toLowerCase();
    if (!term || !tableRef.current) return;

    const walker = document.createTreeWalker(
      tableRef.current,
      NodeFilter.SHOW_TEXT,
    );
    const ranges: Range[] = [];
    for (
      let node = walker.nextNode();
      node !== null;
      node = walker.nextNode()
    ) {
      const text = node.textContent?.toLowerCase() ?? "";
      let start = 0;
      while (start < text.length) {
        const idx = text.indexOf(term, start);
        if (idx === -1) break;
        const range = new Range();
        range.setStart(node, idx);
        range.setEnd(node, idx + term.length);
        ranges.push(range);
        start = idx + term.length;
      }
    }

    if (ranges.length > 0) {
      CSS.highlights.set("search-results", new Highlight(...ranges));
    }
  }, [supportsHighlight, query]);

  const virtualizer = useWindowVirtualizer({
    count: rows.length,
    estimateSize: () => 40,
    overscan: 10,
  });

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <Field.Root className={styles.search}>
          <Magnifier
            className={styles.icon}
            width={14}
            height={14}
            strokewidth={2}
            aria-hidden="true"
          />

          <Field.Control
            placeholder="Find Sound..."
            className={styles.control}
            onValueChange={(value) => setQuery(value)}
          />
        </Field.Root>
      </div>

      {rows.length === 0 ? (
        <div className={styles.empty}>No patches found.</div>
      ) : (
        <table ref={tableRef} className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              {table.getFlatHeaders().map((header) => (
                <th
                  key={header.id}
                  className={styles.th}
                  data-align={header.column.columnDef.meta?.align}
                  data-column={header.column.id}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {virtualizer.getVirtualItems().length > 0 && (
              <tr className={styles.tr}>
                <td
                  style={{
                    height: virtualizer.getVirtualItems()[0].start,
                    padding: 0,
                    border: "none",
                  }}
                />
              </tr>
            )}
            {virtualizer.getVirtualItems().map((virtualRow) => {
              const row = rows[virtualRow.index];
              const isLast = virtualRow.index === rows.length - 1;

              return (
                <tr
                  key={row.id}
                  className={clsx(styles.tr, isLast && styles.last)}
                  data-index={virtualRow.index}
                  ref={(node) => virtualizer.measureElement(node)}
                  onClick={() => {
                    playTap();
                    router.push(`/library/${row.original.name}`);
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={styles.td}
                      data-align={cell.column.columnDef.meta?.align}
                      data-column={cell.column.id}
                      data-fill={cell.column.columnDef.meta?.fill || undefined}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
            {virtualizer.getVirtualItems().length > 0 && (
              <tr className={styles.tr}>
                <td
                  style={{
                    height:
                      virtualizer.getTotalSize() -
                      ((items) => items[items.length - 1]?.end ?? 0)(
                        virtualizer.getVirtualItems(),
                      ),
                    padding: 0,
                    border: "none",
                  }}
                />
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
