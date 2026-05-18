"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
                  LGPD · Privacidade
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  Este site usa cookies para melhorar sua experiência. Ao continuar navegando,
                  você concorda com nossa{" "}
                  <span className="text-accent">Política de Privacidade</span> conforme a Lei
                  Geral de Proteção de Dados (Lei 13.709/2018).
                </p>
              </div>
              <button
                type="button"
                onClick={decline}
                className="shrink-0 text-muted transition-colors hover:text-foreground"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={accept}
                className="rounded-xl bg-[#0066CC] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#0055BB] active:scale-[0.97]"
              >
                Aceitar cookies
              </button>
              <button
                type="button"
                onClick={decline}
                className="rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-muted transition-all hover:text-foreground"
              >
                Recusar opcionais
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
