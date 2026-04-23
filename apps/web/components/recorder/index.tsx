"use client";

import dynamic from "next/dynamic";

const ENABLED =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_RECORDER === "1";

const Recorder = ENABLED
  ? dynamic(() => import("@web-kits/recorder/react").then((m) => m.Recorder), {
      ssr: false,
    })
  : () => null;

export function RecorderMount() {
  if (!ENABLED) return null;
  return <Recorder />;
}
