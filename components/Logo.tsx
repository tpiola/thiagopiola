"use client";

import { cn } from "@/lib/utils";

/* ─── Bowl of Hygieia (Taça de Higeia) — pharmacy symbol ─────── */
function HigeiaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {/* Left chalice arm */}
      <path
        d="M0,21 C3,19 7,17 11,17 L11,25 C7,25 3,24 0,21Z"
        fill="currentColor"
      />
      {/* Right chalice arm */}
      <path
        d="M40,21 C37,19 33,17 29,17 L29,25 C33,25 37,24 40,21Z"
        fill="currentColor"
      />
      {/* Cup body */}
      <path
        d="M11,17 C16,14 24,14 29,17 L25,34 C22,36 18,36 15,34Z"
        fill="currentColor"
      />
      {/* Stem */}
      <rect x="17" y="34" width="6" height="12" rx="2" fill="currentColor" />
      {/* Base */}
      <path d="M8,46 L32,46 L32,50 C32,54 8,54 8,50Z" fill="currentColor" />
      {/* Snake head */}
      <path
        d="M21,9 C22,5 27,4 31,6 C34,8 34,12 31,13 C27,15 22,13 21,9Z"
        fill="currentColor"
      />
      {/* Snake eye — inverse color shows depth */}
      <circle cx="28" cy="8" r="1.2" fill="var(--surface)" />
      {/* Snake body coiling through chalice and around stem */}
      <path
        d="M24,14 C25,18 25,21 21,23 C17,25 16,29 19,33 C20,34 19,38 17,41 C15,44 14,48 16,51"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

export function Logo({
  className,
  iconClassName = "h-10 w-10",
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  if (variant === "icon") {
    return (
      <div className={cn("relative shrink-0", iconClassName, className)}>
        <HigeiaIcon className="h-full w-full" />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative shrink-0", iconClassName)}>
        <HigeiaIcon className="h-full w-full" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] font-semibold tracking-[0.14em] text-foreground">
          THIAGO PIOLA
        </span>
        {showCredential && (
          <span className="text-[10px] text-muted">CRF/SP 58.519</span>
        )}
      </div>
    </div>
  );
}
