/** Curvas e variantes compartilhadas — estética quiet luxury */
export const easeLuxury = [0.16, 1, 0.3, 1] as const;
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const duration = {
  fast: 0.35,
  base: 0.65,
  slow: 0.9,
} as const;

export const spring = {
  soft: { type: "spring", stiffness: 110, damping: 22, mass: 0.9 },
  smooth: { type: "spring", stiffness: 140, damping: 20, mass: 0.8 },
} as const;

export const viewport = {
  once: true,
  margin: "-80px" as const,
  amount: 0.2 as const,
};
