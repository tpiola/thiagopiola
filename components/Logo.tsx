"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
  theme?: "light" | "dark";
};

/** Emblema inspirado em conselhos profissionais (CRF-SP): escudo, cruz de farmácia e tipografia sóbria */
export function Logo({
  className,
  iconClassName = "h-11 w-11",
  variant = "icon",
  showCredential = false,
  theme = "dark",
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const isDark = theme === "dark";
  const shieldId = `logoShield-${uid}`;
  const accentId = `logoAccent-${uid}`;

  const emblem = (
    <svg
      viewBox="0 0 48 48"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={shieldId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id={accentId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path
        d="M24 2L8 8v12c0 10.5 7.2 18.3 16 22 8.8-3.7 16-11.5 16-22V8L24 2z"
        fill={`url(#${shieldId})`}
      />
      <path
        d="M24 4.5L10 9.5v10.5c0 9 6.2 15.8 14 18.8 7.8-3 14-9.8 14-18.8V9.5L24 4.5z"
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="0.75"
      />
      <rect x="22" y="14" width="4" height="20" rx="1" fill="white" />
      <rect x="14" y="22" width="20" height="4" rx="1" fill="white" />
      <path
        d="M26 18c2 3 2 6 0 9-1.5 2-4 3-6 2"
        stroke={`url(#${accentId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="26" cy="17" r="1.2" fill="#10b981" />
    </svg>
  );

  if (variant === "icon") {
    return <div className={cn("relative shrink-0", iconClassName, className)}>{emblem}</div>;
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative shrink-0 drop-shadow-lg", iconClassName)}>{emblem}</div>
      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-xs font-black tracking-[0.12em]",
            isDark ? "text-white" : "text-gray-900",
          )}
        >
          THIAGO PIOLA
        </span>
        {showCredential && (
          <span className="text-[10px] font-medium text-emerald-600">
            Farmacêutico CRF/SP 58.519
          </span>
        )}
      </div>
    </div>
  );
}
