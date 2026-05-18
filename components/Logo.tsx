"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

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
        <Image
          src="/images/logo.png"
          alt="Taça de Higeia — símbolo farmacêutico"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative shrink-0", iconClassName)}>
        <Image
          src="/images/logo.png"
          alt="Taça de Higeia — símbolo farmacêutico"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
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
