"use client";

import { toggleOff, toggleOn } from "@audio/core";
import { useSound } from "@web-kits/audio/react";
import Moon from "@web-kits/icons/fill/moon";
import Sun from "@web-kits/icons/fill/sun";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const playToggleOn = useSound(toggleOn);
  const playToggleOff = useSound(toggleOff);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={styles.toggle} />;

  const isDark = resolvedTheme === "dark";

  const MotionMoon = motion(Moon);

  const MotionSun = motion(Sun);

  const props = {
    initial: { opacity: 0, scale: 0.9, filter: "blur(2px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.9, filter: "blur(2px)" },
    transition: { duration: 0.2, ease: "easeInOut" },
    width: 14,
    height: 14,
    style: { display: "flex" },
  } as const;

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => {
        if (isDark) playToggleOff();
        else playToggleOn();
        setTheme(isDark ? "light" : "dark");
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <MotionMoon key="moon" {...props} />
        ) : (
          <MotionSun key="sun" {...props} />
        )}
      </AnimatePresence>
    </button>
  );
}
