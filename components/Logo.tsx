"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Logo SVG que herda a cor do tema — mesma cor do fundo dos botões (var(--brand)) */
export function Logo({
  className,
  iconClassName,
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  const logoSrc = "/images/logo.svg";

  const logoImage = (
    <div className="relative flex items-center justify-center">
      <img
        src={logoSrc}
        alt="Thiago Piola — Farmacêutico CRF/SP 58.519"
        className={cn(
          "h-auto w-auto object-contain",
          variant === "icon" ? "max-h-[52px]" : "max-h-[52px]",
        )}
        style={{
          width: variant === "icon" ? "auto" : "auto",
          maxWidth: variant === "icon" ? "150px" : "150px",
          color: "var(--brand)",
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
        <span className="whitespace-nowrap overflow-hidden text-ellipsis text-[12px] font-semibold tracking-[0.14em] text-foreground">
          THIAGO PIOLA
        </span>
        {showCredential && <span className="text-[11px] text-muted">CRF/SP 58.519</span>}
      </span>
    </span>
  );
}
