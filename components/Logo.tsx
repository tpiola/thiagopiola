"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Logo com blend-mode para integrar perfeitamente ao fundo do site */
export function Logo({
  className,
  iconClassName,
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  const logoSrc = "/images/logo-principal.jpg";

  const logoImage = (
    <div className="relative flex items-center justify-center blend-container">
      <Image
        src={logoSrc}
        alt="Thiago Piola — Farmacêutico CRF/SP 58.519"
        width={1536}
        height={1024}
        className={cn(
          "h-auto w-auto object-contain blend-logo",
          variant === "icon" ? "max-h-10" : "max-h-10",
        )}
        priority
        style={{
          maxWidth: variant === "icon" ? "120px" : "120px",
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
    <span className={cn("inline-flex items-center gap-3", className)}>
      {logoImage}
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="whitespace-nowrap text-[11px] font-semibold tracking-[0.14em] text-foreground">
          THIAGO PIOLA
        </span>
        {showCredential && <span className="text-[10px] text-muted">CRF/SP 58.519</span>}
      </span>
    </span>
  );
}
