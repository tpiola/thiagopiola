"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Locale = "pt" | "en";

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (pt: string, en: string) => string;
};

const I18nContext = createContext<I18nContextType>({
  locale: "pt",
  setLocale: () => {},
  t: (pt: string) => pt,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  // Load persisted locale on mount
  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "pt" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", next);
    }
  };

  const t = (pt: string, en: string) => (locale === "pt" ? pt : en);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale() {
  return useContext(I18nContext);
}

/**
 * Hook para textos condicionais por locale.
 * Uso: const greeting = useT("Olá", "Hello");
 */
export function useT() {
  const { locale } = useLocale();
  return (pt: string, en: string) => (locale === "pt" ? pt : en);
}
