"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Taca de Higeia oficial: sempre preserva proporcao e fundo transparente. */
export function Logo({
  className,
  iconClassName = "h-11 w-11",
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  const emblem = (
    <span className={cn("relative block aspect-[15/16] shrink-0", iconClassName)}>
      <Image
        src="/images/logo.webp"
        alt="Taca de Higeia - Thiago Piola"
        fill
        className="object-contain drop-shadow-sm"
        priority
        sizes="(max-width: 768px) 56px, 72px"
      />
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
