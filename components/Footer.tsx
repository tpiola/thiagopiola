"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { footerTagline, nav, site } from "@/lib/content";
import { trackCta } from "@/lib/analytics";
import { Logo } from "./Logo";
import { SocialLinksGrouped } from "./SocialLinksGrouped";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="relative border-t border-border bg-surface-elevated py-16 md:py-24 overflow-hidden footer-gradient-border shadow-[0_-1px_8px_rgba(0,0,0,0.04)]"
    >
      {/* Brand accent line */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, color-mix(in srgb, var(--brand) 40%, transparent) 50%, transparent)" }}
        aria-hidden
      />
      {/* Ambient bg */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, var(--brand), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">

        {/* Rei das Vendas Destaque */}
        <div className="mb-14 rounded-2xl border border-[var(--brand)]/20 bg-[color-mix(in_srgb,var(--brand)_4%,transparent)] p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)] mb-1">
                Founder & CEO
              </p>
              <h3 className="text-lg font-bold text-foreground md:text-xl">
                Rei das Vendas
              </h3>
              <p className="mt-1 text-sm text-muted max-w-md">
                Plataforma de treinamento comercial para o setor farmacêutico — metodologia que transforma equipes em máquinas de conversão ética.
              </p>
            </div>
            <a
              href={site.reidasvendas}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-white shrink-0 transition-all hover:opacity-90"
              onClick={() => trackCta("cta_reidasvendas_footer")}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              reidasvendas.com.br
            </a>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo variant="full" showCredential iconClassName="h-11 w-11" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">{footerTagline}</p>
            <SocialLinksGrouped className="mt-8" />

            <a
              href={site.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[var(--brand)]/30 bg-[color-mix(in_srgb,var(--brand)_6%,transparent)] px-5 py-3 text-sm font-semibold text-[var(--brand)] transition-colors hover:border-[var(--brand)]/50"
              onClick={() => trackCta("cta_cv_download")}
            >
              {site.cvLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          {/* Nav column */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">Menu</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item, i) => (
                <motion.li key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}>
                  <a href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-foreground hover:text-[var(--brand)] transition-colors duration-200">
                    <span className="w-3 h-[1px] bg-border group-hover:bg-[var(--brand)] transition-colors duration-300" />
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-60 -translate-y-0.5 group-hover:translate-y-0" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">Contato</p>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={site.phoneHref}
                  className="group flex gap-3 text-sm text-foreground hover:text-[var(--brand)] transition-colors duration-200">
                  <div className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "color-mix(in srgb, var(--brand) 8%, transparent)" }}>
                    <Phone className="h-3.5 w-3.5" style={{ color: "var(--brand)" }} />
                  </div>
                  <span>
                    {site.phone}
                    <span className="block text-[11px] text-muted mt-0.5">Telefone e WhatsApp</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 text-sm text-foreground hover:text-[var(--brand)] hover:scale-[1.03] hover:[text-shadow:0_0_8px_var(--brand)] transition-all duration-200">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "color-mix(in srgb, var(--brand) 8%, transparent)" }}>
                    <Mail className="h-3.5 w-3.5" style={{ color: "var(--brand)" }} />
                  </div>
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "color-mix(in srgb, var(--brand) 8%, transparent)" }}>
                  <MapPin className="h-3.5 w-3.5" style={{ color: "var(--brand)" }} />
                </div>
                {site.location}
              </li>
            </ul>

            <div className="mt-8 p-4 border border-border rounded-lg">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted mb-2">Site</p>
              <a href={site.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: "var(--brand)" }}>
                www.thiagopiola.com.br
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-muted">
            © {year} {site.name} — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-muted/60">
            <span>
              Criado por{" "}
              <a
                href={site.reidasvendas}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--brand)] hover:underline"
              >
                Rei das Vendas
              </a>
            </span>
            <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
