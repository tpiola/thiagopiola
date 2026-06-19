/** Eventos de conversão — Vercel Analytics */
export type CtaEvent =
  | "cta_whatsapp_click"
  | "cta_whatsapp_floating"
  | "cta_whatsapp_missao"
  | "cta_email_click"
  | "cta_linkedin_click"
  | "cta_linkedin_missao"
  | "cta_cv_download"
  | "cta_reidasvendas_footer";

export function trackCta(event: CtaEvent) {
  if (typeof window === "undefined") return;
  try {
    void import("@vercel/analytics").then(({ track }) => track(event));
  } catch {
    /* analytics opcional */
  }
}
