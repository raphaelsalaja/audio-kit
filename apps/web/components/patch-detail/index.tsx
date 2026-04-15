"use client";

import { click, copy as copySfx } from "@audio/core";
import { usePatch, useSound } from "@web-kits/audio/react";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";
import type { PatchSoundsByCategory, PatchWithStats } from "@/lib/patches";
import styles from "./styles.module.css";

function formatLoads(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(Math.round(n));
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function PatchDetail({
  patch,
  sounds,
}: {
  patch: PatchWithStats;
  sounds: PatchSoundsByCategory[];
}) {
  const [copied, setCopied] = useState(false);
  const snippet = `npx @web-kits/audio add raphaelsalaja/audio --patch ${patch.name}`;
  const playClick = useSound(click);
  const playCopy = useSound(copySfx);

  function handleCopy() {
    navigator.clipboard.writeText(snippet);
    playCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        <Link
          href="/library"
          className={styles.breadcrumbLink}
          onClick={playClick}
        >
          patches
        </Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{patch.name}</span>
      </nav>

      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>{patch.name}</h1>
            {(patch.featured || patch.verified) && (
              <div className={styles.badges}>
                {patch.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
                {patch.verified && (
                  <span className={styles.verifiedBadge}>Verified</span>
                )}
              </div>
            )}
          </div>

          <div className={styles.installSection}>
            <span className={styles.installLabel}>INSTALLATION</span>
            <div className={styles.snippet}>
              <code className={styles.code}>
                <span className={styles.codeDim}>$ </span>
                {snippet}
              </code>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={handleCopy}
                aria-label={copied ? "Copied" : "Copy install command"}
              >
                {copied ? (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {patch.description && (
            <p className={styles.description}>{patch.description}</p>
          )}

          {patch.tags.length > 0 && (
            <div className={styles.tags}>
              {patch.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/library?tag=${tag}`}
                  className={styles.tag}
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {sounds.length > 0 && (
            <div className={styles.soundsSection}>
              <h2 className={styles.sectionTitle}>Sounds</h2>
              <SoundDemo patchName={patch.name} sounds={sounds} />
            </div>
          )}
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarBlock}>
            <span className={styles.sidebarLabel}>Installs</span>
            <span className={styles.sidebarHero}>
              {formatLoads(patch.loads)}
            </span>
          </div>

          {patch.version && (
            <div className={styles.sidebarBlock}>
              <span className={styles.sidebarLabel}>Version</span>
              <span className={styles.sidebarValue}>v{patch.version}</span>
            </div>
          )}

          <div className={styles.sidebarBlock}>
            <span className={styles.sidebarLabel}>Author</span>
            <span className={styles.sidebarValue}>{patch.author}</span>
          </div>

          {patch.createdAt && (
            <div className={styles.sidebarBlock}>
              <span className={styles.sidebarLabel}>Published</span>
              <span className={styles.sidebarValue}>
                {formatDate(patch.createdAt)}
              </span>
            </div>
          )}

          {patch.license && (
            <div className={styles.sidebarBlock}>
              <span className={styles.sidebarLabel}>License</span>
              <span className={styles.sidebarValue}>{patch.license}</span>
            </div>
          )}

          {patch.compatibility && (
            <div className={styles.sidebarBlock}>
              <span className={styles.sidebarLabel}>Compatibility</span>
              <span className={styles.sidebarValue}>{patch.compatibility}</span>
            </div>
          )}

          {patch.sourceTypes.length > 0 && (
            <div className={styles.sidebarBlock}>
              <span className={styles.sidebarLabel}>Source Types</span>
              <div className={styles.sidebarPills}>
                {patch.sourceTypes.map((st) => (
                  <span key={st} className={styles.pill}>
                    {st}
                  </span>
                ))}
                {patch.hasEffects && (
                  <span className={styles.pill}>effects</span>
                )}
                {patch.hasLayers && <span className={styles.pill}>layers</span>}
              </div>
            </div>
          )}

          <div className={styles.sidebarBlock}>
            <span className={styles.sidebarLabel}>Stats</span>
            <div className={styles.statsList}>
              <div className={styles.statsRow}>
                <span className={styles.statsKey}>Sounds</span>
                <span className={styles.statsVal}>{patch.soundCount}</span>
              </div>
              {patch.fileSize > 0 && (
                <div className={styles.statsRow}>
                  <span className={styles.statsKey}>Size</span>
                  <span className={styles.statsVal}>
                    {formatBytes(patch.fileSize)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {(patch.sourceUrl || patch.source) && (
            <div className={styles.sidebarBlock}>
              <span className={styles.sidebarLabel}>Source</span>
              {patch.sourceUrl ? (
                <a
                  href={patch.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarLink}
                >
                  View JSON
                </a>
              ) : patch.source ? (
                <a
                  href={patch.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarLink}
                >
                  GitHub
                </a>
              ) : null}
            </div>
          )}

          {patch.forkedFrom && (
            <div className={styles.sidebarBlock}>
              <span className={styles.sidebarLabel}>Forked from</span>
              <span className={styles.sidebarValue}>
                Patch #{patch.forkedFrom}
              </span>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

function SoundDemo({
  patchName,
  sounds,
}: {
  patchName: string;
  sounds: PatchSoundsByCategory[];
}) {
  const patch = usePatch(`/api/patch/${patchName}`);
  const [playing, setPlaying] = useState<string | null>(null);
  const voiceRef = useRef<{ stop: (t?: number) => void } | null>(null);
  const playingRef = useRef<string | null>(null);

  const soundSet = useMemo(() => new Set(patch.sounds), [patch.sounds]);

  const handlePlay = useCallback(
    (soundName: string) => {
      if (voiceRef.current) {
        voiceRef.current.stop();
        voiceRef.current = null;
      }

      if (playingRef.current === soundName) {
        playingRef.current = null;
        setPlaying(null);
        return;
      }

      if (!patch.ready) return;
      if (!soundSet.has(soundName)) return;

      const voice = patch.play(soundName);
      voiceRef.current = voice;
      playingRef.current = soundName;
      setPlaying(soundName);

      setTimeout(() => {
        if (playingRef.current === soundName) {
          playingRef.current = null;
          voiceRef.current = null;
        }
        setPlaying((current) => (current === soundName ? null : current));
      }, 3000);
    },
    [patch, soundSet],
  );

  return (
    <div className={styles.soundCategories}>
      {sounds.map((group) => (
        <div key={group.category} className={styles.categoryGroup}>
          <h3 className={styles.categoryTitle}>{group.category}</h3>
          <div className={styles.soundGrid}>
            {group.sounds.map((sound) => {
              const isAvailable = patch.ready && soundSet.has(sound.name);
              const isPlaying = playing === sound.name;

              return (
                <button
                  key={sound.id}
                  type="button"
                  className={styles.soundCard}
                  data-playing={isPlaying}
                  data-available={isAvailable}
                  onClick={() => handlePlay(sound.name)}
                  disabled={!patch.ready}
                >
                  <div className={styles.soundIcon}>
                    {isPlaying ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    )}
                  </div>
                  <div className={styles.soundInfo}>
                    <span className={styles.soundName}>{sound.name}</span>
                    {sound.description && (
                      <span className={styles.soundDesc}>
                        {sound.description}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
      {!patch.ready && <p className={styles.loadingHint}>Loading patch...</p>}
    </div>
  );
}
