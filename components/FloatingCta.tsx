"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/lib/content";
import { trackCta } from "@/lib/analytics";

/** WhatsApp fixo — apenas mobile, alta conversão */
export function FloatingCta() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-lg shadow-[var(--brand)]/30 transition-transform hover:scale-105 active:scale-95 md:hidden"
      aria-label="Abrir WhatsApp"
      onClick={() => trackCta("cta_whatsapp_click")}
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
    </a>
  );
}
