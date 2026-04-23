"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useState } from "react";
import { codeToTokens } from "shiki";
import { CheckIcon, CopyIcon } from "@/components/controls/icons";
import styles from "./code-output.module.css";
import panelStyles from "./styles.module.css";

type Props = {
  code: string;
  isDirty: boolean;
  error?: string | null;
  onCodeChange: (next: string) => void;
  onApplyCode: () => void;
};

type UiToken = {
  content: string;
  style: CSSProperties;
};

export function DawCodeOutput({
  code,
  isDirty,
  error,
  onCodeChange,
  onApplyCode,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [lines, setLines] = useState<UiToken[][]>([]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    let cancelled = false;
    const timer = setTimeout(async () => {
      try {
        const out = await codeToTokens(code, {
          lang: "ts",
          themes: { light: "snazzy-light", dark: "slack-dark" },
          defaultColor: false,
        });
        if (cancelled) return;
        setLines(
          (out.tokens ?? []).map((line) =>
            line.map((token) => ({
              content: token.content,
              style: (token.htmlStyle ?? {}) as CSSProperties,
            })),
          ),
        );
      } catch {
        if (cancelled) return;
        setLines(
          code.split("\n").map((l) => [{ content: l || " ", style: {} }]),
        );
      }
    }, 90);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [code]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        onApplyCode();
      }
    },
    [onApplyCode],
  );

  // Always derive line count from live code so gutter is never stale
  const lineCount = code.split("\n").length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <section className={panelStyles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>
          Code
          {isDirty && (
            <span className={styles.dirtyDot} title="Unsaved changes" />
          )}
        </span>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.actionBtn}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <CheckIcon size={12} /> Copied
              </>
            ) : (
              <>
                <CopyIcon size={12} /> Copy
              </>
            )}
          </button>
          <button
            type="button"
            className={`${styles.actionBtn} ${isDirty ? styles.actionBtnPrimary : ""}`}
            onClick={onApplyCode}
            disabled={!isDirty}
            title={
              isDirty ? "Apply changes (Ctrl+Enter)" : "No pending changes"
            }
          >
            Apply
          </button>
        </div>
      </div>

      <div className={styles.preFrame}>
        {/* Sticky line-number gutter — completely separate from the text layers */}
        <div className={styles.gutter} aria-hidden="true">
          {lineNumbers.map((lineNo) => (
            <span key={lineNo} className={styles.gutterLine}>
              {lineNo}
            </span>
          ))}
        </div>

        {/* Code area: pre (highlight) + textarea (input) perfectly stacked */}
        <div className={styles.codeArea}>
          <pre className={styles.pre} aria-hidden="true">
            <code>
              {lines.map((line, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: stable order
                <span key={i} className={styles.line}>
                  {line.map((token, j) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: stable order
                    <span key={j} style={token.style}>
                      {token.content}
                    </span>
                  ))}
                </span>
              ))}
            </code>
          </pre>

          <textarea
            className={styles.editorInput}
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            aria-label="Editable sound code"
          />
        </div>
      </div>

      {error && (
        <p className={styles.errorText} role="alert">
          {error}
        </p>
      )}
    </section>
  );
}
