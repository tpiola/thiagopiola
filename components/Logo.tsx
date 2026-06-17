"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

/** Logo principal do site — imagem fornecida pelo usuário */
export function Logo({
  className,
  iconClassName,
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  const logoSrc = "/images/logo-principal.jpg";

  if (variant === "icon") {
    return (
      <span className={cn("inline-flex shrink-0 items-center", className)}>
        <Image
          src={logoSrc}
          alt="Thiago Piola — Farmacêutico CRF/SP 58.519"
          width={120}
          height={80}
          className="h-auto w-auto max-h-10 object-contain"
          priority
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src={logoSrc}
        alt="Thiago Piola — Farmacêutico CRF/SP 58.519"
        width={120}
        height={80}
        className="h-auto w-auto max-h-10 object-contain"
        priority
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="whitespace-nowrap text-[11px] font-semibold tracking-[0.14em] text-foreground">
          THIAGO PIOLA
        </span>
        {showCredential && <span className="text-[10px] text-muted">CRF/SP 58.519</span>}
      </span>
    </span>
  );
}
