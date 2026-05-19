"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footerTagline, nav, site } from "@/lib/content";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="relative border-t border-border bg-surface-elevated py-16 md:py-24 overflow-hidden">
      {/* Subtle top gradient accent */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--brand) 25%, transparent) 30%, color-mix(in srgb, var(--brand) 40%, transparent) 50%, color-mix(in srgb, var(--brand) 25%, transparent) 70%, transparent)' }}
        aria-hidden
      />
      {/* BG ambient */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[300px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, var(--brand), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo variant="full" showCredential iconClassName="h-11 w-11" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">{footerTagline}</p>
            <SocialLinks className="mt-8" />

            {/* Founder of badge */}
            <div className="mt-8 inline-flex items-center gap-2.5 border border-border px-4 py-2.5 rounded-lg glass-dark">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Founder</span>
              <div className="w-px h-3 bg-border" />
              <a
                href="https://www.reidasvendas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors"
                style={{ color: 'var(--brand)' }}
              >
                reidasvendas.com.br
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">Menu</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-foreground hover:text-[var(--brand)] transition-colors duration-200"
                  >
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
                <a
                  href={site.phoneHref}
                  className="group flex gap-3 text-sm text-foreground hover:text-[var(--brand)] transition-colors duration-200"
                >
                  <div className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ background: 'color-mix(in srgb, var(--brand) 8%, transparent)' }}>
                    <Phone className="h-3.5 w-3.5" style={{ color: 'var(--brand)' }} />
                  </div>
                  <span>
                    {site.phone}
                    <span className="block text-[11px] text-muted mt-0.5">Telefone e WhatsApp</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 text-sm text-foreground hover:text-[var(--brand)] transition-colors duration-200"
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'color-mix(in srgb, var(--brand) 8%, transparent)' }}>
                    <Mail className="h-3.5 w-3.5" style={{ color: 'var(--brand)' }} />
                  </div>
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'color-mix(in srgb, var(--brand) 8%, transparent)' }}>
                  <MapPin className="h-3.5 w-3.5" style={{ color: 'var(--brand)' }} />
                </div>
                {site.location}
              </li>
            </ul>

            {/* Site reference */}
            <div className="mt-8 p-4 border border-border rounded-lg glass-dark">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted mb-2">Site</p>
              <a
                href="https://www.thiagopiola.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                style={{ color: 'var(--brand)' }}
              >
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
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted/50">
            <span className="w-1 h-1 rounded-full bg-green-400" />
            Disponível para projetos
          </div>
        </div>
      </div>
    </footer>
  );
}
