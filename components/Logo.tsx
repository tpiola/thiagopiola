"use client";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Monograma TP — marca limpa, sem clichê de template */
export function Logo({
  className,
  iconClassName = "h-10 w-10",
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  const emblem = (
    <svg
      viewBox="0 0 40 40"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="40" height="40" rx="10" className="fill-foreground" />
      <path
        d="M12 28V12h4.2l5.8 9.2V12H26v16h-4.2l-5.8-9.4V28H12z"
        className="fill-[var(--surface)]"
      />
      <circle cx="30" cy="10" r="3" className="fill-accent" />
    </svg>
  );

  if (variant === "icon") {
    return <div className={cn("relative shrink-0", iconClassName, className)}>{emblem}</div>;
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative shrink-0", iconClassName)}>{emblem}</div>
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] font-semibold tracking-[0.14em] text-foreground">
          THIAGO PIOLA
        </span>
        {showCredential && <span className="text-[10px] text-muted">CRF/SP 58.519</span>}
      </div>
    </div>
  );
}
