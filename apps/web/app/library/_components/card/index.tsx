"use client";

import { loadPatch } from "@web-kits/audio";
import MediaPause from "@web-kits/icons/fill/media-pause";
import MediaPlay from "@web-kits/icons/fill/media-play";
import { generateRadixColorsScaleFromName } from "@web-kits/ui/lib/colors";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useVisualizer } from "@/components/controls/visualizer";
import type { PatchWithStats } from "@/lib/db/patches";
import styles from "./styles.module.css";

interface CardProps {
  patch: PatchWithStats;
  isActive: boolean;
  registerStop: (patchId: number, stop: () => void) => () => void;
  requestPlay: (patchId: number) => void;
  clearActive: (patchId: number) => void;
}

export function Card({
  patch,
  isActive,
  registerStop,
  requestPlay,
  clearActive,
}: CardProps) {
  const [playing, setPlaying] = useState(false);
  const patchRef = useRef<Awaited<ReturnType<typeof loadPatch>> | null>(null);
  const voiceRef = useRef<{ stop: (t?: number) => void } | null>(null);
  const playRequestRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { start: startVis, stop: stopVis } = useVisualizer(canvasRef);

  const stopPlayback = useCallback(() => {
    playRequestRef.current += 1;
    if (voiceRef.current) {
      voiceRef.current.stop();
      voiceRef.current = null;
    }
    stopVis();
    setPlaying(false);
  }, [stopVis]);

  useEffect(() => registerStop(patch.id, stopPlayback), [patch.id, registerStop, stopPlayback]);

  useEffect(() => {
    if (!isActive && playing) stopPlayback();
  }, [isActive, playing, stopPlayback]);

  const handlePlay = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (isActive && voiceRef.current) {
        stopPlayback();
        clearActive(patch.id);
        return;
      }

      requestPlay(patch.id);
      playRequestRef.current += 1;
      const requestId = playRequestRef.current;

      try {
        if (!patchRef.current) {
          patchRef.current = await loadPatch(`/api/patch/${patch.name}`);
        }
        if (requestId !== playRequestRef.current) return;

        const p = patchRef.current;
        const sounds = p.sounds;
        if (sounds.length === 0) return;

        startVis();
        const sound = sounds[Math.floor(Math.random() * sounds.length)];
        const voice = p.play(sound);
        voiceRef.current = voice;
        setPlaying(true);

        setTimeout(() => {
          if (requestId !== playRequestRef.current) return;
          if (voiceRef.current === voice) {
            stopPlayback();
            clearActive(patch.id);
          }
        }, 400);
      } catch {
        if (requestId !== playRequestRef.current) return;
        stopPlayback();
        clearActive(patch.id);
        setPlaying(false);
      }
    },
    [
      isActive,
      stopPlayback,
      clearActive,
      patch.id,
      requestPlay,
      patch.name,
      startVis,
    ],
  );

  const colorVars = useMemo(
    () =>
      generateRadixColorsScaleFromName(patch.name) as Record<string, string>,
    [patch.name],
  );

  const MotionPause = motion(MediaPause);
  const MotionPlay = motion(MediaPlay);

  const props = {
    width: 18,
    height: 18,
    initial: { opacity: 0, scale: 0.95, filter: "blur(2px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.95, filter: "blur(2px)" },
  };

  return (
    <div className={styles.card} style={colorVars as CSSProperties}>
      <div className={styles.preview} data-playing={playing || undefined}>
        <canvas ref={canvasRef} className={styles.canvas} />
        <motion.button
          type="button"
          className={styles.play}
          data-playing={playing || undefined}
          onClick={handlePlay}
          aria-label={playing ? "Stop preview" : "Preview sound"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {playing ? <MotionPause {...props} /> : <MotionPlay {...props} />}
          </AnimatePresence>
        </motion.button>
      </div>
      <div className={styles.footer}>
        <Link href={`/library/${patch.name}`} className={styles.details}>
          <span className={styles.name}> {patch.name}</span>
          <span className={styles.author}>{patch.author}</span>
        </Link>
        <Link href={`/library/${patch.name}`} className={styles.button}>
          View
        </Link>
      </div>
    </div>
  );
}
