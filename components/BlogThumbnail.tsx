"use client";

import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────
export type Category =
  | "Farmácia Clínica"
  | "Inovação"
  | "Tecnologia"
  | "Gestão"
  | "Regulatório"
  | "Liderança"
  | "Automação";

interface BlogThumbnailProps {
  category: Category;
  title?: string;
  className?: string;
}

// ─── Theme ────────────────────────────────────────────────
const BG_DARK = "#0a1628";
const BG_MID = "#0f1f35";
const BG_LIGHT = "#152a45";

// ─── Lucide SVG path data per category ──────────────────
// (paths extracted from Lucide icons, self-contained)
interface IconDef {
  paths: string[];
  gradient: [string, string];
  label: string;
}

const ICONS: Record<Category, IconDef> = {
  "Farmácia Clínica": {
    paths: [
      "M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7Z",
      "M8.5 8.5l7 7",
    ],
    gradient: ["#00C9A7", "#009B7D"],
    label: "Pill",
  },
  Inovação: {
    paths: [
      "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
      "M2 12h20",
      "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
    ],
    gradient: ["#7C3AED", "#5B21B6"],
    label: "Atom",
  },
  Tecnologia: {
    paths: [
      "M4 4h16v16H4z",
      "M9 9h6v6H9z",
      "M15 2v2M15 20v2M2 9h2M20 9h2M2 15h2M20 15h2M9 2v2M9 20v2",
    ],
    gradient: ["#3B82F6", "#1D4ED8"],
    label: "Chip",
  },
  Gestão: {
    paths: [
      "M3 3v18h18",
      "M7 16v-3",
      "M11 16v-7",
      "M15 16V8",
      "M19 16v-2",
    ],
    gradient: ["#F59E0B", "#D97706"],
    label: "Chart",
  },
  Regulatório: {
    paths: [
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    ],
    gradient: ["#EF4444", "#B91C1C"],
    label: "Shield",
  },
  Liderança: {
    paths: [
      "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    ],
    gradient: ["#F97316", "#EA580C"],
    label: "Star",
  },
  Automação: {
    paths: [
      "M12 9a3 3 0 100 6 3 3 0 000-6z",
      "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
    ],
    gradient: ["#14B8A6", "#0D9488"],
    label: "Gear",
  },
};

/**
 * BlogThumbnail — SVG thumbnail temático para cards de blog.
 *
 * Gera um SVG auto-contido, responsivo (aspect-ratio 16/9),
 * com fundo gradiente e ícone representativo da categoria
 * usando paths do Lucide.
 */
export function BlogThumbnail({ category, title, className }: BlogThumbnailProps) {
  const icon = ICONS[category] ?? ICONS["Tecnologia"];
  const id = `bg-${icon.label.toLowerCase()}`;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl",
        "aspect-[16/9]",
        className,
      )}
      role="img"
      aria-label={`Thumbnail: ${category}${title ? ` — ${title}` : ""}`}
    >
      <svg
        viewBox="0 0 160 90"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Background gradient */}
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={BG_DARK} />
            <stop offset="50%" stopColor={BG_MID} />
            <stop offset="100%" stopColor={BG_LIGHT} />
          </linearGradient>

          {/* Glow gradient */}
          <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={icon.gradient[0]} stopOpacity="0.25" />
            <stop offset="100%" stopColor={icon.gradient[0]} stopOpacity="0" />
          </radialGradient>

          {/* Icon gradient */}
          <linearGradient id={`${id}-icon`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={icon.gradient[0]} />
            <stop offset="100%" stopColor={icon.gradient[1]} />
          </linearGradient>

          {/* Decorative dots pattern */}
          <pattern id={`${id}-dots`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" fill={icon.gradient[0]} opacity="0.12" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="160" height="90" fill={`url(#${id})`} rx="12" />

        {/* Glow */}
        <rect width="160" height="90" fill={`url(#${id}-glow)`} rx="12" />

        {/* Subtle top accent line */}
        <rect x="0" y="0" width="160" height="2" fill={icon.gradient[0]} opacity="0.6" rx="1" />

        {/* Decorative dots overlay */}
        <rect width="160" height="90" fill={`url(#${id}-dots)`} rx="12" />

        {/* Accent blob — bottom-right circle */}
        <circle cx="130" cy="72" r="40" fill={icon.gradient[0]} opacity="0.06" />
        
        {/* Accent blob — top-left circle */}
        <circle cx="24" cy="18" r="28" fill={icon.gradient[0]} opacity="0.04" />

        {/* Category label */}
        <text
          x="16"
          y="22"
          fill={icon.gradient[0]}
          fontSize="7"
          fontWeight="700"
          fontFamily="ui-monospace, monospace"
          letterSpacing="1.5"
          textAnchor="start"
        >
          {(category || "").toUpperCase()}
        </text>

        {/* Icon group — centered */}
        <g
          transform="translate(80, 46)"
          fill="none"
          stroke={`url(#${id}-icon)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon.paths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      </svg>
    </div>
  );
}
