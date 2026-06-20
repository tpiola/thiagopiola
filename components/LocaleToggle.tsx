"use client";

import { useLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className={cn("inline-flex rounded-lg border border-border p-0.5", className)}>
      {(["pt", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          className={cn(
            "touch-target rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors",
            locale === code
              ? "bg-[var(--brand)] text-white"
              : "text-muted hover:text-foreground",
          )}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
