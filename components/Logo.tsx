"use client";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Taça de Higéia oficial em SVG vetorial refinado — sem fundo, adaptável ao tema. */
export function Logo({
  className,
  iconClassName = "h-11 w-11",
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  const emblem = (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center text-foreground",
        iconClassName,
      )}
      aria-label="Taça de Higéia — símbolo oficial da farmácia"
      role="img"
    >
      <svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        {/* Bowl */}
        <path
          d="M 170 290 C 170 250, 195 220, 230 210 C 245 206, 252 200, 256 195 L 256 200 C 260 195, 267 200, 282 210 C 317 220, 342 250, 342 290 C 342 340, 290 370, 256 370 C 222 370, 170 340, 170 290 Z"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeLinejoin="round"
        />
        <ellipse
          cx="256"
          cy="290"
          rx="86"
          ry="18"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
        />
        {/* Bowl inner detail */}
        <path
          d="M 200 290 C 200 260, 220 240, 240 235 C 245 233, 250 230, 256 228"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.25"
        />
        {/* Stem */}
        <rect x="246" y="370" width="20" height="50" rx="4" fill="currentColor" />
        {/* Base */}
        <path
          d="M 210 420 L 210 418 C 210 410, 230 405, 256 405 C 282 405, 302 410, 302 418 L 302 420 Z"
          fill="currentColor"
        />
        <ellipse
          cx="256"
          cy="420"
          rx="46"
          ry="8"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
        />

        {/* Serpent left */}
        <path
          d="M 176 275 C 140 260, 130 220, 148 185 C 160 162, 182 150, 200 140 C 215 132, 228 125, 235 115"
          stroke="currentColor"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        {/* Serpent right */}
        <path
          d="M 336 275 C 372 260, 382 220, 364 185 C 352 162, 330 150, 312 140 C 297 132, 284 125, 277 115"
          stroke="currentColor"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />

        {/* Serpent top connection */}
        <path
          d="M 240 115 C 245 108, 256 105, 256 105 C 256 105, 267 108, 272 115"
          stroke="currentColor"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />

        {/* Serpent upper left */}
        <path
          d="M 235 115 C 210 95, 195 75, 200 55 C 205 40, 218 32, 232 35"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Serpent upper right */}
        <path
          d="M 277 115 C 302 95, 317 75, 312 55 C 307 40, 294 32, 280 35"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Top connection */}
        <path
          d="M 232 35 C 242 28, 270 28, 280 35"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Serpent head - left-facing */}
        <path
          d="M 232 35 C 225 30, 216 28, 208 30 C 195 33, 185 42, 185 52 C 185 60, 190 66, 200 68 C 208 70, 218 66, 224 60"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="205" cy="47" r="3.5" fill="currentColor" />

        {/* Serpent tail */}
        <path
          d="M 280 35 C 290 30, 300 30, 308 35 C 315 40, 318 50, 314 55"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Scale details */}
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15">
          <path d="M 170 250 C 165 248, 165 244, 170 242" />
          <path d="M 155 220 C 150 218, 150 214, 155 212" />
          <path d="M 150 200 C 145 198, 145 194, 150 192" />
          <path d="M 342 250 C 347 248, 347 244, 342 242" />
          <path d="M 357 220 C 362 218, 362 214, 357 212" />
          <path d="M 362 200 C 367 198, 367 194, 362 192" />
        </g>
      </svg>
    </span>
  );

  if (variant === "icon") {
    return <span className={cn("inline-flex shrink-0 items-center", className)}>{emblem}</span>;
  }

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {emblem}
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="whitespace-nowrap text-[11px] font-semibold tracking-[0.14em] text-foreground">
          THIAGO PIOLA
        </span>
        {showCredential && <span className="text-[10px] text-muted">CRF/SP 58.519</span>}
      </span>
    </span>
  );
}
