"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Taça de Higeia — logo oficial (PNG transparente) */
export function Logo({
  className,
  iconClassName = "h-11 w-11",
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  const emblem = (
    <Image
      src="/images/logo.png"
      alt="Taça de Higeia — Thiago Piola"
      width={120}
      height={140}
      className={cn("h-full w-auto object-contain drop-shadow-sm", iconClassName)}
      priority
      sizes="(max-width: 768px) 64px, 80px"
    />
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
