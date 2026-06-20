"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { footerTagline, footerTaglineEn, nav, site, blog } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { trackCta } from "@/lib/analytics";
import { Logo } from "./Logo";
import { SocialLinksGrouped } from "./SocialLinksGrouped";
import { useLocale } from "@/lib/i18n";

/* ─── Animation presets ─── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideItem = (i: number) => ({
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06 + 0.15,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── Shared card class ─── */

const cardBase =
  "card-elevated group flex items-center gap-4 rounded-xl p-4 text-sm text-foreground transition-all duration-[400ms] hover:scale-[1.02]";

/* ─── Component ─── */

export function Footer() {
  const year = new Date().getFullYear();
  const { locale } = useLocale();

  return (
    <footer
      id="contato"
      className="relative border-t border-border bg-surface-elevated py-16 md:py-24 overflow-hidden"
    >
      {/* ── Dual-layer top accent ── */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--brand) 50%, transparent 100%)",
            opacity: 0.35,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--brand) 60%, transparent) 50%, transparent 100%)",
            filter: "blur(4px)",
            opacity: 0.6,
          }}
        />
      </div>

      {/* ── Refined ambient orbs ── */}
      <div
        className="pointer-events-none absolute -top-48 -right-48 w-[600px] h-[600px] orb opacity-[0.07]"
        style={{ background: "var(--brand)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-48 w-[500px] h-[500px] orb opacity-[0.05]"
        style={{ background: "var(--brand)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] orb opacity-[0.02]"
        style={{ background: "var(--brand)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* ═══════════════════════════════════════════
            LINKEDIN DESTAQUE — card premium refinado
           ═══════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div
            variants={scaleIn}
            className="group relative overflow-hidden rounded-2xl border border-[var(--brand)]/20 p-6 md:p-8 transition-all duration-500 hover:border-[var(--brand)]/30 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--brand) 6%, transparent) 0%, color-mix(in srgb, var(--brand) 2%, transparent) 100%)",
              boxShadow:
                "0 0 0 0 color-mix(in srgb, var(--brand) 0%, transparent)",
              transition:
                "box-shadow 0.5s ease, border-color 0.5s ease, transform 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 40px color-mix(in srgb, var(--brand) 12%, transparent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 0 0 color-mix(in srgb, var(--brand) 0%, transparent)";
            }}
          >
            {/* Hover glow radial */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(600px circle at 30% 50%, color-mix(in srgb, var(--brand) 10%, transparent), transparent 70%)",
              }}
              aria-hidden
            />

            {/* Shine sweep on hover */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, color-mix(in srgb, var(--brand) 6%, transparent) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
                animation: "none",
              }}
              aria-hidden
            />

            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                {/* Badge */}
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand)]/15 bg-[color-mix(in_srgb,var(--brand)_5%,transparent)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] dot-pulse" />
                  {locale === "pt" ? "Perfil Profissional" : "Professional Profile"}
                </motion.span>
                <motion.h3
                  variants={fadeUp}
                  className="text-lg font-bold text-foreground md:text-xl tracking-tight"
                >
                  LinkedIn
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  className="mt-1.5 text-sm text-muted max-w-lg leading-relaxed"
                >
                  {locale === "pt"
                    ? "Conecte-se para acompanhar trajetória, resultados e posicionamento no setor farmacêutico. Perfil verificado com recomendações e histórico completo."
                    : "Connect to follow career journey, results and positioning in the pharmaceutical sector. Verified profile with recommendations and full history."}
                </motion.p>
              </div>
              <motion.a
                variants={fadeUp}
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shrink-0 transition-all duration-300 hover:scale-[1.04] hover:shadow-lg active:scale-[0.98]"
                style={{
                  boxShadow:
                    "0 4px 20px color-mix(in srgb, var(--brand) 30%, transparent)",
                }}
                onClick={() => trackCta("cta_linkedin_click")}
              >
                <ExternalLink className="h-4 w-4" />
                <span>{locale === "pt" ? "Ver perfil no LinkedIn" : "View LinkedIn profile"}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            MAIN GRID — layout mais arejado
           ═══════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid gap-10 lg:gap-12 lg:grid-cols-12"
        >
          {/* ── Brand column ── */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <Logo variant="full" showCredential height={160} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {locale === "pt" ? footerTagline : footerTaglineEn}
            </p>

            <SocialLinksGrouped className="mt-6" />

            <motion.a
              variants={fadeIn}
              href={site.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2.5 rounded-xl border border-[var(--brand)]/25 bg-[color-mix(in_srgb,var(--brand)_5%,transparent)] px-5 py-3 text-sm font-semibold text-[var(--brand)] transition-all duration-[400ms] hover:border-[var(--brand)]/45 hover:bg-[color-mix(in_srgb,var(--brand)_10%,transparent)] hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => trackCta("cta_cv_download")}
            >
              <span className="relative inline-flex items-center gap-1">
                {site.cvLabel}
              </span>
              <ArrowUpRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>

          {/* ── Nav column ── */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <p className="text-label text-muted tracking-[0.24em]">{locale === "pt" ? blog.footerMenu : blog.footerMenuEn}</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  variants={slideItem(i)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-foreground/85 transition-all duration-300 hover:text-[var(--brand)]"
                  >
                    <span className="h-[1.5px] w-0 rounded-full bg-[var(--brand)] transition-all duration-300 group-hover:w-4" />
                    <span className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:font-semibold">
                      {locale === "pt" ? item.label : (item as { labelEn?: string }).labelEn || item.label}
                    </span>
                    <ChevronRight className="h-3 w-3 text-muted/40 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact column ── */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <p className="text-label text-muted tracking-[0.24em]">{locale === "pt" ? blog.footerContact : blog.footerContactEn}</p>
            <ul className="mt-5 space-y-3">
              {/* WhatsApp */}
              <motion.li variants={fadeIn}>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardBase} relative overflow-hidden`}
                  aria-label={`WhatsApp — ${locale === "pt" ? "Fale com Thiago Piola" : "Talk to Thiago Piola"}`}
                >
                  {/* Hover border glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px color-mix(in srgb, var(--brand) 25%, transparent)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-[400ms] group-hover:scale-110 group-hover:shadow-sm"
                    style={{
                      background:
                        "color-mix(in srgb, var(--brand) 10%, transparent)",
                      color: "var(--brand)",
                    }}
                  >
                    <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-8deg]" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold">WhatsApp</span>
                    <span className="block text-[11px] text-muted/70 mt-0.5 tracking-wider font-medium uppercase">
                      {locale === "pt" ? blog.footerWhatsappDesc : blog.footerWhatsappDescEn}
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </motion.li>

              {/* Phone */}
              <motion.li variants={fadeIn}>
                <a
                  href={site.phoneHref}
                  className={`${cardBase} relative overflow-hidden`}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px color-mix(in srgb, var(--brand) 25%, transparent)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-[400ms] group-hover:scale-110 group-hover:shadow-sm"
                    style={{
                      background:
                        "color-mix(in srgb, var(--brand) 10%, transparent)",
                      color: "var(--brand)",
                    }}
                  >
                    <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-8deg]" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold">{site.phone}</span>
                    <span className="block text-[11px] text-muted/70 mt-0.5 tracking-wider font-medium uppercase">
                      {locale === "pt" ? blog.footerPhoneLabel : blog.footerPhoneLabelEn}
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </motion.li>

              {/* Email */}
              <motion.li variants={fadeIn}>
                <a
                  href={`mailto:${site.email}`}
                  className={`${cardBase} relative overflow-hidden`}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px color-mix(in srgb, var(--brand) 25%, transparent)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-[400ms] group-hover:scale-110 group-hover:shadow-sm"
                    style={{
                      background:
                        "color-mix(in srgb, var(--brand) 10%, transparent)",
                      color: "var(--brand)",
                    }}
                  >
                    <Mail className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-8deg]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold truncate block">
                      {site.email}
                    </span>
                    <span className="block text-[11px] text-muted/70 mt-0.5 tracking-wider font-medium uppercase">
                      {locale === "pt" ? blog.footerEmailLabel : blog.footerEmailLabelEn}
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </motion.li>

              {/* Location (non-clickable) */}
              <motion.li variants={fadeIn}>
                <div className="card-elevated flex items-center gap-4 rounded-xl p-4 text-sm text-muted transition-all duration-300 hover:border-[var(--brand)]/15">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background:
                        "color-mix(in srgb, var(--brand) 10%, transparent)",
                      color: "var(--brand)",
                    }}
                  >
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium">{site.location}</span>
                    <span className="block text-[11px] text-muted/50 mt-0.5 tracking-wider font-medium uppercase">
                      {locale === "pt" ? blog.footerLocationLabel : blog.footerLocationLabelEn}
                    </span>
                  </div>
                </div>
              </motion.li>
            </ul>

            {/* Site link card */}
            <motion.div
              variants={fadeIn}
              className="mt-5 rounded-xl border border-border bg-[color-mix(in_srgb,var(--brand)_3%,transparent)] p-4 transition-all duration-[400ms] hover:border-[var(--brand)]/20 hover:bg-[color-mix(in_srgb,var(--brand)_6%,transparent)] hover:shadow-sm"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
              {locale === "pt" ? blog.footerSite : blog.footerSiteEn}
              </span>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300"
                style={{ color: "var(--brand)" }}
              >
                <span className="transition-all duration-300 group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[var(--brand)]/40">
                  www.thiagopiola.com.br
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            FOUNDER / ECOSYSTEM — seção destacada
           ═══════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="relative mt-16 pt-8"
        >
          <div
            className="absolute left-5 right-5 md:left-8 md:right-8 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--brand) 25%, transparent) 50%, transparent 100%)",
            }}
            aria-hidden
          />
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/50">
              {locale === "pt" ? "CRIADO POR" : "CREATED BY"}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
              <a href={site.reidasvendas} target="_blank" rel="noopener noreferrer"
                className="font-semibold text-foreground/80 transition-colors duration-200 hover:text-[var(--brand)]">
                reidasvendas.com.br
              </a>
              <span className="text-muted/30 hidden sm:inline">·</span>
              <a href={site.saudegpt} target="_blank" rel="noopener noreferrer"
                className="font-semibold text-foreground/80 transition-colors duration-200 hover:text-[var(--brand)]">
                saudegpt.com
              </a>
              <span className="text-muted/30 hidden sm:inline">·</span>
              <a href={site.thiagolab} target="_blank" rel="noopener noreferrer"
                className="font-semibold text-foreground/80 transition-colors duration-200 hover:text-[var(--brand)]">
                thiagolab.com
              </a>
            </div>
            <p className="text-[11px] text-muted/40 max-w-md leading-relaxed">
              {locale === "pt"
                ? "Thiago Piola — Founder & ecossistema de transformação digital para o setor farmacêutico."
                : "Thiago Piola — Founder & digital transformation ecosystem for the pharmaceutical sector."}
            </p>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            BOTTOM BAR — refinada
           ═══════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="relative mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          {/* Subtle divider line */}
          <div
            className="absolute left-5 right-5 md:left-8 md:right-8 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--brand) 25%, transparent) 50%, transparent 100%)",
            }}
            aria-hidden
          />

          <p className="text-[11px] text-muted/60 leading-relaxed tracking-wide">
            &copy; {year} {site.name} — {locale === "pt" ? blog.footerCopyright : blog.footerCopyrightEn}
          </p>
          <span className="text-[10px] text-muted/40 tracking-wider">
            Ecossistema:{" "}
            <a href={site.reidasvendas} target="_blank" rel="noopener noreferrer"
              className="font-medium text-muted/60 transition-colors duration-200 hover:text-[var(--brand)]">
              reidasvendas.com.br
            </a>
            <span className="mx-1.5">·</span>
            <a href={site.saudegpt} target="_blank" rel="noopener noreferrer"
              className="font-medium text-muted/60 transition-colors duration-200 hover:text-[var(--brand)]">
              saudegpt.com
            </a>
            <span className="mx-1.5">·</span>
            <a href={site.thiagolab} target="_blank" rel="noopener noreferrer"
              className="font-medium text-muted/60 transition-colors duration-200 hover:text-[var(--brand)]">
              thiagolab.com
            </a>
          </span>
          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <span className="text-[10px] text-muted/50 tracking-wider">
              {locale === "pt" ? blog.footerCreatedBy : blog.footerCreatedByEn}{" "}
              <a
                href={site.reidasvendas}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--brand)] transition-all duration-200 hover:opacity-80 hover:underline hover:underline-offset-2"
              >
                Rei das Vendas
              </a>
            </span>
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-30"
                style={{ background: "var(--brand)" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: "var(--brand)" }}
              />
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
