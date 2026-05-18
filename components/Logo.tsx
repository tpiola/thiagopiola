"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Taça de Higeia — identidade farmacêutica corporativa */
export function Logo({
  className,
  iconClassName = "h-11 w-11",
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  const emblem = (
    <Image
      src="/logo-hygieia.svg"
      alt=""
      width={48}
      height={56}
      className={cn("h-full w-auto object-contain", iconClassName)}
      priority
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
