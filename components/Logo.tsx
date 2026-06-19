"use client";

import { cn } from "@/lib/utils";

type LogoProps = {
    className?: string;
    iconClassName?: string;
    variant?: "icon" | "full";
    showCredential?: boolean;
    height?: number;
};

/**
 * Logo oficial — Thiago Piola
 * Usa mix-blend-mode + filter para adaptar automaticamente ao tema claro/escuro.
 * No dark mode: logo permanece na cor original (azul navy).
 * No light mode: logo adapta contraste via CSS filter.
 */
export function Logo({
    className,
    iconClassName,
    variant = "icon",
    showCredential = false,
    height = 88,
}: LogoProps) {
    const logoImage = (
          <div className="relative flex items-center justify-center logo-container">
                <img
                          src="/logo.png"
                          alt="Thiago Piola — Farmacêutico CRF/SP 58.519"
                          className={cn(
                                      "h-auto w-auto object-contain transition-all duration-300 logo-adaptive",
                                      iconClassName
                                    )}
                          style={{
                                      height: `${height}px`,
                                      maxWidth: "320px",
                                      filter: "drop-shadow(0 2px 8px rgba(var(--brand-rgb, 30 58 138) / 0.18))",
                          }}
                        />
          </div>div>
        );
  
    if (variant === "icon") {
          return (
        <span className={cn("inline-flex shrink-0 items-center", className)}>
          {logoImage}
        </span>span>
                );
    }
  
    return (
          <span className={cn("inline-flex items-center gap-3", className)}>
            {logoImage}
            {showCredential && (
                    <span className="flex min-w-0 flex-col leading-tight">
                              <span className="whitespace-nowrap overflow-hidden text-ellipsis text-[13px] font-bold tracking-[0.12em] text-foreground uppercase">
                                          Thiago Piola
                              </span>span>
                              <span className="text-[10px] text-muted tracking-wider font-mono">CRF/SP 58.519</span>span>
                    </span>span>
                )}
          </span>span>
        );
}</div>
