"use client";

import { loadPatch } from "@web-kits/audio";
import MediaPause from "@web-kits/icons/fill/media-pause";
import MediaPlay from "@web-kits/icons/fill/media-play";
import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { useVisualizer } from "@/components/controls/visualizer";
import type { PatchWithStats } from "@/lib/patches";
import styles from "./styles.module.css";

interface CardProps {
  patch: PatchWithStats;
}

export function Card({ patch }: CardProps) {
  const [playing, setPlaying] = useState(false);
  const patchRef = useRef<Awaited<ReturnType<typeof loadPatch>> | null>(null);
  const voiceRef = useRef<{ stop: (t?: number) => void } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { start: startVis, stop: stopVis } = useVisualizer(canvasRef);

  const handlePlay = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (voiceRef.current) {
        voiceRef.current.stop();
        voiceRef.current = null;
        stopVis();
        setPlaying(false);
        return;
      }

      try {
        if (!patchRef.current) {
          patchRef.current = await loadPatch(`/api/patch/${patch.name}`);
        }

        const p = patchRef.current;
        const sounds = p.sounds;
        if (sounds.length === 0) return;

        startVis();
        const sound = sounds[Math.floor(Math.random() * sounds.length)];
        const voice = p.play(sound);
        voiceRef.current = voice;
        setPlaying(true);

        setTimeout(() => {
          if (voiceRef.current === voice) {
            voiceRef.current = null;
            stopVis();
            setPlaying(false);
          }
        }, 400);
      } catch {
        setPlaying(false);
      }
    },
    [patch.name, startVis, stopVis],
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
    <div className={styles.card}>
      <div className={styles.preview} data-playing={playing || undefined}>
        <canvas ref={canvasRef} className={styles.canvas} />
        <motion.button
          type="button"
          className={styles.play}
          data-playing={playing || undefined}
          onClick={handlePlay}
          aria-label={playing ? "Stop preview" : "Preview sound"}
        >
          {playing ? <MotionPause {...props} /> : <MotionPlay {...props} />}
        </motion.button>
      </div>
      <div className={styles.footer}>
        <Link href={`/library/${patch.name}`} className={styles.name}>
          {patch.name}
        </Link>
        <Link href={`/library/${patch.name}`} className={styles.button}>
          View
        </Link>
      </div>
    </div>
  );
}
