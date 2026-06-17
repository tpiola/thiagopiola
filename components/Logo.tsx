"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Logo em PNG com fundo transparente — altíssima definição (1536x1024) */
export function Logo({
  className,
  iconClassName,
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  const logoSrc = "/images/logo-principal.png";

  const logoImage = (
    <div className="relative flex items-center justify-center">
      <Image
        src={logoSrc}
        alt="Thiago Piola — Farmacêutico CRF/SP 58.519"
        width={1536}
        height={1024}
        className={cn(
          "h-auto w-auto object-contain",
          variant === "icon" ? "max-h-14" : "max-h-14",
        )}
        priority
        sizes="(max-width: 768px) 140px, 180px"
        style={{
          width: variant === "icon" ? "auto" : "auto",
          maxWidth: variant === "icon" ? "160px" : "160px",
        }}
      />
    </div>
  );

  if (variant === "icon") {
    return (
      <span className={cn("inline-flex shrink-0 items-center", className)}>
        {logoImage}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-4", className)}>
      {logoImage}
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="whitespace-nowrap text-[12px] font-semibold tracking-[0.14em] text-foreground">
          THIAGO PIOLA
        </span>
        {showCredential && <span className="text-[11px] text-muted">CRF/SP 58.519</span>}
      </span>
    </span>
  );
}
