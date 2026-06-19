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
  height = 80,
}: LogoProps & { height?: number }) {
  const logoSrc = "/logo.png";

  const logoImage = (
    <div className="relative flex items-center justify-center">
      <img
        src={logoSrc}
        alt="Thiago Piola — Farmacêutico CRF/SP 58.519"
        className={cn(
          "h-auto w-auto object-contain transition-all duration-300",
          className
        )}
        style={{
          height: `${height}px`,
          maxWidth: "400px",
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
