"use client";

import { useState, useEffect } from "react";
import { site } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { locale } = useLocale();

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-surface/95 backdrop-blur-md shadow-lg pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3 md:px-8 flex-col sm:flex-row sm:justify-between">
        <p className="text-xs text-muted leading-relaxed">
          {locale === "pt"
            ? "Usamos cookies para melhorar sua experiência."
            : "We use cookies to improve your experience."}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/privacidade"
            className="text-[11px] font-medium text-muted hover:text-foreground underline-offset-2 hover:underline transition-colors"
          >
            {locale === "pt" ? "Saiba mais" : "Learn more"}
          </a>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-[var(--brand)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          >
            {locale === "pt" ? "Aceitar" : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}
