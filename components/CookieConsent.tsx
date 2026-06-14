"use client";

import { useState, useEffect } from "react";
import { site } from "@/lib/content";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

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
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-surface/95 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <p className="text-xs text-muted leading-relaxed">
          Usamos cookies para melhorar sua experiência.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/privacidade"
            className="text-[11px] font-medium text-muted hover:text-foreground underline-offset-2 hover:underline transition-colors"
          >
            Saiba mais
          </a>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-[var(--brand)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
