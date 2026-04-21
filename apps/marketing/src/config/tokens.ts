// interpolateColors requires hex, not CSS vars.
export const palette = {
  gray1: "#fcfcfd",
  gray9: "#8b8d98",
  gray11: "#62636c",
  gray12: "#1e1f24",
  accent11: "#00749e",
  keyword: "#7c3aed",
  number: "#b6622e",
} as const;

export const springs = {
  pop: { damping: 14, stiffness: 220, mass: 0.7 },
  enter: { damping: 24, stiffness: 130, mass: 1 },
  settle: { damping: 26, stiffness: 110, mass: 1.1 },
  snap: { damping: 12, stiffness: 320, mass: 0.5 },
} as const;
