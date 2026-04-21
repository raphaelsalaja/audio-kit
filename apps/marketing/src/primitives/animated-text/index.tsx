// Vendored from `remotion-animate-text` (MIT, github.com/pskd73/remotion-animate-text)
// and re-built against React 19's JSX runtime; the published bundle ships React-18
// elements which React 19 rejects with error #525 in production builds.

import type { CSSProperties, PropsWithChildren } from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

const SOFT_IN_OUT = Easing.bezier(0.22, 1, 0.36, 1);

export type TextAnimation = {
  delimiter?: string | RegExp;
  opacity?: number[];
  y?: number[];
  x?: number[];
  scale?: number[];
  rotate?: number[];
  hideLoading?: boolean;
  windowSize?: number;
  showOverflow?: boolean;
  refRange?: number[];
  durations?: number[];
  blur?: number[];
};

type Part = { text: string; pct: number };

function interpolateText({
  text,
  frame,
  range,
  delimiter,
  windowPct,
  durations,
}: {
  text: string;
  frame: number;
  range: [number, number];
  windowPct: number;
  delimiter: string | RegExp;
  durations: number[];
}) {
  const [start, end] = range;
  const duration = end - start;
  // Capturing-group regex delimiters keep separators as their own parts so
  // we can stagger `@`, `/`, `-` etc. independently of the words around them.
  const split = (text.split(delimiter as string) as string[]).filter(
    (p) => p !== undefined,
  );
  const parts: Part[] = [];

  const blur = (windowPct / 100) * duration || 1;
  const iDuration = (duration - blur) / split.length;
  const netStart = frame - start;

  let totalDuration = 0;
  for (let i = 0; i < split.length; i++) {
    let fPct = interpolate(
      netStart,
      [i * iDuration, i * iDuration + iDuration + blur],
      [0, 100],
      {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
        easing: SOFT_IN_OUT,
      },
    );
    if (durations[i] !== undefined) {
      fPct = interpolate(
        netStart,
        [totalDuration, totalDuration + durations[i]],
        [0, 100],
        {
          extrapolateRight: "clamp",
          extrapolateLeft: "clamp",
          easing: SOFT_IN_OUT,
        },
      );
      totalDuration += durations[i];
    }
    parts.push({ text: split[i], pct: fPct });
  }

  return { parts };
}

function renderParts({
  parts,
  joinBy,
  toStyle,
}: {
  parts: Part[];
  joinBy: string | RegExp;
  toStyle: (args: { pct: number }) => CSSProperties;
}) {
  // Regex delimiters preserve their separator characters as parts already, so
  // we can render flatly without re-injecting whitespace between groups.
  if (joinBy instanceof RegExp) {
    return (
      <>
        {parts.map((part, i) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: parts list is stable per render
            key={`p-${i}`}
            style={{ ...toStyle({ pct: part.pct }), whiteSpace: "pre" }}
          >
            {part.text}
          </span>
        ))}
      </>
    );
  }

  const brk = joinBy === " " ? "" : " ";
  const nowrap = brk === " ";
  const elements: React.ReactNode[] = [];
  let tmp: React.ReactNode[] = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.text !== brk) {
      tmp.push(
        <span
          key={`p-${i}`}
          style={{ ...toStyle({ pct: part.pct }), whiteSpace: "pre" }}
        >
          {part.text}
        </span>,
      );
    }
    if (part.text === brk || brk === "" || i === parts.length - 1) {
      elements.push(
        <span
          key={`grp-${i}`}
          style={{ whiteSpace: nowrap ? "nowrap" : undefined }}
        >
          {tmp}
        </span>,
      );
      if (i !== parts.length - 1) {
        elements.push(<span key={`space-${i}`}>&nbsp;</span>);
      }
      tmp = [];
    }
  }

  return <>{elements}</>;
}

export const AnimatedText = ({
  children,
  animation = {
    delimiter: " ",
    opacity: [0, 1],
    blur: [10, 0],
    y: [1, 0],
    windowSize: 70,
  },
  duration = 100,
}: PropsWithChildren<{
  duration?: number;
  animation?: TextAnimation;
}>) => {
  const frame = useCurrentFrame();
  const delimiter: string | RegExp = animation?.delimiter ?? "";
  const { parts } = interpolateText({
    text: children as string,
    frame,
    range: [0, duration],
    delimiter,
    windowPct: animation?.windowSize || 50,
    durations: animation?.durations || [],
  });

  return renderParts({
    parts,
    joinBy: delimiter,
    toStyle: ({ pct }) => {
      const transforms: string[] = [];
      const refRange = animation?.refRange || [0, 100];
      let blur = 0;

      if (animation?.scale) {
        const v = interpolate(pct, refRange, animation.scale, {
          extrapolateRight: "clamp",
        });
        transforms.push(`scale(${v})`);
      }
      if (animation?.y) {
        const v = interpolate(pct, refRange, animation.y, {
          extrapolateRight: "clamp",
        });
        transforms.push(`translateY(${v}em)`);
      }
      if (animation?.x) {
        const v = interpolate(pct, refRange, animation.x, {
          extrapolateRight: "clamp",
        });
        transforms.push(`translateX(${v}em)`);
      }
      if (animation?.rotate) {
        const v = interpolate(pct, refRange, animation.rotate, {
          extrapolateRight: "clamp",
        });
        transforms.push(`rotate(${v}deg)`);
      }
      if (animation?.blur) {
        blur = interpolate(pct, refRange, animation.blur, {
          extrapolateRight: "clamp",
        });
      }

      return {
        opacity:
          animation?.opacity &&
          interpolate(pct, refRange, animation.opacity, {
            extrapolateRight: "clamp",
          }),
        transform: transforms.length > 0 ? transforms.join(" ") : undefined,
        display: animation?.hideLoading && pct === 0 ? "none" : "inline-block",
        filter: `blur(${blur}px)`,
      };
    },
  });
};
