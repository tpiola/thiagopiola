"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footerTagline, nav, site } from "@/lib/content";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t border-border bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="full" showCredential iconClassName="h-11 w-11" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">{footerTagline}</p>
            <SocialLinks className="mt-8" />
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Menu</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground hover:text-[var(--brand)]"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Contato</p>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex gap-3 text-sm text-foreground hover:text-[var(--brand)]"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                  <span>
                    {site.phone}
                    <span className="block text-xs text-muted">Telefone e WhatsApp</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex gap-3 text-sm text-foreground hover:text-[var(--brand)]"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted">
          © {year} {site.name}
        </div>
      </div>
    </footer>
  );
}
