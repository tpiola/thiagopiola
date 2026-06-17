"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Logo com filtro de cor para harmonizar com o texto — fundo transparente */
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
        width={800}
        height={674}
        className={cn(
          "h-auto w-auto object-contain brightness-0 invert-[92%]",
          variant === "icon" ? "max-h-[52px]" : "max-h-[52px]",
        )}
        priority
        unoptimized
        sizes="(max-width: 768px) 140px, 160px"
        style={{
          width: variant === "icon" ? "auto" : "auto",
          maxWidth: variant === "icon" ? "150px" : "150px",
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
