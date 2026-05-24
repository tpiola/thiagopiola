"use client";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  variant?: "icon" | "full";
  showCredential?: boolean;
};

const LOGO_SRC =
  "data:image/png;base64,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";

/** Taca de Higeia: logo azul com fundo transparente, adaptada para o tema do site. */
export function Logo({
  className,
  iconClassName = "h-11 w-11",
  variant = "icon",
  showCredential = false,
}: LogoProps) {
  const emblem = (
    <img
      src={LOGO_SRC}
      alt="Taca de Higeia azul de Thiago Biasoli Garcia Piola"
      width={143}
      height={160}
      className={cn(
        "h-full w-auto object-contain drop-shadow-[0_10px_24px_rgba(12,35,64,0.22)] dark:drop-shadow-[0_10px_24px_rgba(81,139,207,0.3)]",
        iconClassName,
      )}
      decoding="async"
      fetchPriority="high"
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
