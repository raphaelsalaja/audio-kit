"use client";

import type { AudioAnalyser, SoundDefinition } from "audio-kit";
import { createMasterAnalyser, defineSound, ensureReady } from "audio-kit";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

/* ------------------------------------------------------------------ */
/*  Examples                                                           */
/* ------------------------------------------------------------------ */

type Example = {
  id: string;
  title: string;
  description: string;
  code: string;
  sound: ReturnType<typeof defineSound>;
};

const EXAMPLES: Example[] = [
  {
    id: "click",
    title: "Click",
    description: "Single oscillator, short decay",
    code: `defineSound({
  source: { type: "sine", frequency: 800 },
  envelope: { decay: 0.06 },
})`,
    sound: defineSound({
      source: { type: "sine", frequency: 800 },
      envelope: { decay: 0.06 },
      gain: 0.2,
    }),
  },
  {
    id: "rise",
    title: "Rise",
    description: "Frequency sweep from 400 to 800 Hz",
    code: `defineSound({
  source: { type: "sine", frequency: { start: 400, end: 800 } },
  envelope: { decay: 0.15 },
})`,
    sound: defineSound({
      source: { type: "sine", frequency: { start: 400, end: 800 } },
      envelope: { decay: 0.15 },
      gain: 0.2,
    }),
  },
  {
    id: "notify",
    title: "Notification",
    description: "Two sine layers at different frequencies",
    code: `defineSound({
  layers: [
    { source: { type: "sine", frequency: 1200 }, envelope: { decay: 0.3 } },
    { source: { type: "sine", frequency: 1800 }, envelope: { decay: 0.2 } },
  ],
})`,
    sound: defineSound({
      layers: [
        {
          source: { type: "sine", frequency: 1200 },
          envelope: { attack: 0.01, decay: 0.3 },
          gain: 0.12,
        },
        {
          source: { type: "sine", frequency: 1800 },
          envelope: { attack: 0.02, decay: 0.22 },
          gain: 0.07,
        },
      ],
    } as SoundDefinition),
  },
  {
    id: "snare",
    title: "Snare",
    description: "Triangle body with high-passed noise",
    code: `defineSound({
  layers: [
    { source: { type: "triangle", frequency: 185 }, envelope: { decay: 0.08 } },
    { source: { type: "noise", color: "white" }, envelope: { decay: 0.18 },
      filter: { type: "highpass", frequency: 2000 } },
  ],
})`,
    sound: defineSound({
      layers: [
        {
          source: { type: "triangle", frequency: 185 },
          envelope: { decay: 0.08 },
          gain: 0.3,
        },
        {
          source: { type: "noise", color: "white" },
          envelope: { decay: 0.18 },
          gain: 0.25,
          filter: { type: "highpass", frequency: 2000 },
        },
      ],
    } as SoundDefinition),
  },
  {
    id: "ambient",
    title: "Ambient",
    description: "Layered chord with reverb",
    code: `defineSound({
  layers: [
    { source: { type: "sine", frequency: 440 }, envelope: { decay: 0.5 } },
    { source: { type: "sine", frequency: 554 }, envelope: { decay: 0.4 } },
  ],
  effects: [{ type: "reverb", decay: 1.2, mix: 0.6 }],
})`,
    sound: defineSound({
      layers: [
        {
          source: { type: "sine", frequency: 440 },
          envelope: { decay: 0.5 },
          gain: 0.15,
        },
        {
          source: { type: "sine", frequency: 554 },
          envelope: { decay: 0.4 },
          gain: 0.1,
        },
      ],
      effects: [{ type: "reverb", decay: 1.2, mix: 0.6 }],
    } as SoundDefinition),
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Playground() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const analyserRef = useRef<AudioAnalyser | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  const waveformStarted = useRef(false);
  const startWaveformRef = useRef<() => void>(() => {});

  const play = useCallback(async (example: Example) => {
    await ensureReady();
    if (!analyserRef.current) {
      analyserRef.current = createMasterAnalyser({ fftSize: 2048 });
    }
    if (!waveformStarted.current) {
      waveformStarted.current = true;
      startWaveformRef.current();
    }
    example.sound();

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveId(example.id);
    timeoutRef.current = setTimeout(() => setActiveId(null), 400);
  }, []);

  /* ----- waveform ----- */
  const drawWaveform = useCallback(() => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    if (!canvas || !analyser) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width * dpr;
    const h = rect.height * dpr;

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    const data = analyser.getTimeDomainData();
    const len = data.length;
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(128,128,128,0.06)";
    ctx.lineWidth = dpr;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    const cs = getComputedStyle(canvas);
    ctx.strokeStyle = cs.getPropertyValue("--gray-8").trim() || "#999";
    ctx.lineWidth = 1.5 * dpr;
    ctx.lineJoin = "round";
    ctx.beginPath();

    const sliceW = w / len;
    for (let i = 0; i < len; i++) {
      const v = data[i] / 128.0;
      const y = (v * h) / 2;
      if (i === 0) ctx.moveTo(0, y);
      else ctx.lineTo(i * sliceW, y);
    }
    ctx.stroke();
    rafRef.current = requestAnimationFrame(drawWaveform);
  }, []);

  const startWaveform = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(drawWaveform);
  }, [drawWaveform]);

  startWaveformRef.current = startWaveform;

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={styles.demo}>
      <div className={styles.waveform}>
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>

      <div className={styles.examples}>
        {EXAMPLES.map((ex) => (
          <div
            key={ex.id}
            className={styles.example}
            data-active={activeId === ex.id || undefined}
          >
            <div className={styles.exampleHeader}>
              <div className={styles.meta}>
                <span className={styles.title}>{ex.title}</span>
                <span className={styles.description}>{ex.description}</span>
              </div>
              <button
                type="button"
                className={styles.playBtn}
                data-active={activeId === ex.id || undefined}
                onClick={() => play(ex)}
                aria-label={`Play ${ex.title}`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2.5 1v10l8.5-5-8.5-5z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <pre className={styles.code}>
              <code>{ex.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
