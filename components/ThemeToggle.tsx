"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { locale } = useLocale();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return <span className={cn("inline-block h-11 w-11", className)} aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "touch-target inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-elevated text-muted transition-colors hover:text-foreground",
        className,
      )}
      aria-label={isDark ? (locale === "pt" ? "Ativar modo claro" : "Switch to light mode") : (locale === "pt" ? "Ativar modo escuro" : "Switch to dark mode")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
