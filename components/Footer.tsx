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
import { footerTagline, nav, site } from "@/lib/content";
import { trackCta } from "@/lib/analytics";
import { Logo } from "./Logo";
import { SocialLinksGrouped } from "./SocialLinksGrouped";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="relative border-t border-border bg-surface-elevated py-16 md:py-24 overflow-hidden"
    >
      {/* ── Brand accent glow line ── */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--brand) 50%, transparent) 50%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* ── Ambient orbs ── */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] orb opacity-[0.06]"
        style={{ background: "var(--brand)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 w-[400px] h-[400px] orb opacity-[0.04]"
        style={{ background: "var(--brand)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* ══════════════════════════════════
            LINKEDIN DESTAQUE — card premium
           ══════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="group relative rounded-2xl border border-[var(--brand)]/20 p-6 md:p-8 transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, color-mix(in srgb, var(--brand) 5%, transparent) 0%, color-mix(in srgb, var(--brand) 2%, transparent) 100%)",
            }}
          >
            {/* Subtle hover glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(600px circle at 30% 50%, color-mix(in srgb, var(--brand) 8%, transparent), transparent 70%)",
              }}
              aria-hidden
            />

            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand)]/15 bg-[color-mix(in_srgb,var(--brand)_5%,transparent)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                  Perfil Profissional
                </span>
                <h3 className="text-lg font-bold text-foreground md:text-xl">
                  LinkedIn
                </h3>
                <p className="mt-1.5 text-sm text-muted max-w-lg leading-relaxed">
                  Conecte-se para acompanhar trajetória, resultados e
                  posicionamento no setor farmacêutico. Perfil verificado com
                  recomendações e histórico completo.
                </p>
              </div>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shrink-0 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                style={{
                  boxShadow: "0 4px 20px color-mix(in srgb, var(--brand) 30%, transparent)",
                }}
                onClick={() => trackCta("cta_linkedin_click")}
              >
                <ExternalLink className="h-4 w-4" />
                Ver perfil no LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════
            MAIN GRID
           ══════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid gap-12 lg:grid-cols-12"
        >
          {/* ── Brand column ── */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <Logo variant="full" showCredential height={160} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {footerTagline}
            </p>
            <SocialLinksGrouped className="mt-6" />

            <a
              href={site.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-[var(--brand)]/25 bg-[color-mix(in_srgb,var(--brand)_5%,transparent)] px-5 py-3 text-sm font-semibold text-[var(--brand)] transition-all duration-300 hover:border-[var(--brand)]/40 hover:bg-[color-mix(in_srgb,var(--brand)_10%,transparent)] hover:scale-[1.02]"
              onClick={() => trackCta("cta_cv_download")}
            >
              {site.cvLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* ── Nav column ── */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <p className="text-label text-muted">Menu</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.15, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-foreground transition-all duration-300 hover:text-[var(--brand)]"
                  >
                    <span className="w-0 h-[1.5px] rounded-full bg-[var(--brand)] transition-all duration-300 group-hover:w-4" />
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      {item.label}
                    </span>
                    <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact column ── */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <p className="text-label text-muted">Contato</p>
            <ul className="mt-5 space-y-3">
              {/* WhatsApp */}
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated group flex items-center gap-4 rounded-xl p-4 text-sm text-foreground transition-all duration-300 hover:scale-[1.02]"
                  aria-label="WhatsApp — Fale com Thiago Piola"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-sm"
                    style={{
                      background:
                        "color-mix(in srgb, var(--brand) 10%, transparent)",
                      color: "var(--brand)",
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold">WhatsApp</span>
                    <span className="block text-[11px] text-muted mt-0.5">
                      Mensagem rápida
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>

              {/* Phone */}
              <li>
                <a
                  href={site.phoneHref}
                  className="card-elevated group flex items-center gap-4 rounded-xl p-4 text-sm text-foreground transition-all duration-300 hover:scale-[1.02]"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-sm"
                    style={{
                      background:
                        "color-mix(in srgb, var(--brand) 10%, transparent)",
                      color: "var(--brand)",
                    }}
                  >
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold">{site.phone}</span>
                    <span className="block text-[11px] text-muted mt-0.5">
                      Telefone
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="card-elevated group flex items-center gap-4 rounded-xl p-4 text-sm text-foreground transition-all duration-300 hover:scale-[1.02]"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-sm"
                    style={{
                      background:
                        "color-mix(in srgb, var(--brand) 10%, transparent)",
                      color: "var(--brand)",
                    }}
                  >
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold truncate block">
                      {site.email}
                    </span>
                    <span className="block text-[11px] text-muted mt-0.5">
                      E-mail
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>

              {/* Location */}
              <li className="card-elevated flex items-center gap-4 rounded-xl p-4 text-sm text-muted">
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
                <span className="font-medium">{site.location}</span>
              </li>
            </ul>

            {/* Site link */}
            <div className="mt-5 rounded-xl border border-border bg-[color-mix(in_srgb,var(--brand)_3%,transparent)] p-4 transition-all duration-300 hover:border-[var(--brand)]/20 hover:bg-[color-mix(in_srgb,var(--brand)_5%,transparent)]">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                Site
              </span>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300"
                style={{ color: "var(--brand)" }}
              >
                www.thiagopiola.com.br
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════
            BOTTOM BAR
           ══════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="divider-brand mt-16 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-[11px] text-muted/70 leading-relaxed">
            &copy; {year} {site.name} — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-muted/50">
              Criado por{" "}
              <a
                href={site.reidasvendas}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--brand)] transition-all duration-200 hover:opacity-80 hover:underline"
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
