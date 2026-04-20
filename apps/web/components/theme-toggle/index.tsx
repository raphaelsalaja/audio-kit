"use client";

import { toggleOff, toggleOn } from "@audio/core";
import { useSound } from "@web-kits/audio/react";
import Moon from "@web-kits/icons/fill/moon";
import Palette from "@web-kits/icons/fill/palette";
import Sun from "@web-kits/icons/fill/sun";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const THEME_CYCLE = ["dark", "system", "light"] as const;

type ThemeMode = (typeof THEME_CYCLE)[number];

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const playToggleOn = useSound(toggleOn);
  const playToggleOff = useSound(toggleOff);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={styles.toggle} />;

  const current: ThemeMode = (THEME_CYCLE as readonly string[]).includes(
    theme ?? "",
  )
    ? (theme as ThemeMode)
    : "system";

  const next =
    THEME_CYCLE[(THEME_CYCLE.indexOf(current) + 1) % THEME_CYCLE.length];

  const MotionMoon = motion(Moon);
  const MotionSun = motion(Sun);
  const MotionPalette = motion(Palette);

  const props = {
    initial: { opacity: 0, scale: 0.9, filter: "blur(2px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.9, filter: "blur(2px)" },
    transition: { duration: 0.2, ease: "easeInOut" },
    width: 14,
    height: 14,
    style: { display: "flex" },
  } as const;

  const label = `Theme: ${current} (click for ${next})`;

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={label}
      title={label}
      onClick={() => {
        const nextResolved =
          next === "system"
            ? (window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light")
            : next;
        if (nextResolved === "dark" && resolvedTheme !== "dark") {
          playToggleOff();
        } else if (nextResolved !== "dark" && resolvedTheme === "dark") {
          playToggleOn();
        } else {
          playToggleOn();
        }
        setTheme(next);
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {current === "dark" ? (
          <MotionMoon key="moon" {...props} />
        ) : current === "system" ? (
          <MotionPalette key="system" {...props} />
        ) : (
          <MotionSun key="sun" {...props} />
        )}
      </AnimatePresence>
    </button>
  );
}
