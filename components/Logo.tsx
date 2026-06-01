"use client";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Taça de Higéia oficial em SVG — responsivo, sem fundo, adapta ao tema. */
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
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        {/* Bowl / Chalice */}
        <path
          d="M70 155c0-28 22-50 50-50s50 22 50 50-22 50-50 50-50-22-50-50z"
          stroke="currentColor"
          strokeWidth="7"
          fill="none"
        />
        <ellipse
          cx="120"
          cy="155"
          rx="50"
          ry="12"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
        />
        {/* Bowl stem */}
        <rect x="114" y="205" width="12" height="28" rx="3" fill="currentColor" />
        {/* Bowl base */}
        <path
          d="M95 233c0-5 11-9 25-9s25 4 25 9-11 9-25 9-25-4-25-9z"
          fill="currentColor"
        />
        {/* Serpent left */}
        <path
          d="M70 155c-30-10-30-55 0-65s48 15 35 45"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Serpent right */}
        <path
          d="M170 155c30-10 30-55 0-65s-48 15-35 45"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Serpent upper body */}
        <path
          d="M90 95c-10-20 5-45 30-45"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M150 95c10-20-5-45-30-45"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Serpent head */}
        <path
          d="M95 60c-6-10-2-22 8-24s20 4 20 14-6 20-16 20c-6 0-10-3-10-8"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Serpent eye */}
        <circle cx="100" cy="56" r="2.5" fill="currentColor" />
        {/* Serpent tongue */}
        <path
          d="M90 52c-4-2-7-5-5-8"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
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
