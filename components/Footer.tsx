"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { nav, site, socialLinks } from "@/lib/content";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XTwitterIcon } from "./SocialIcons";

const iconMap = {
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  X: XTwitterIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="full" showCredential iconClassName="h-10 w-10" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Farmacêutico e engenheiro de IA. Atuação em saúde, negócios e tecnologia — com foco em
              resultado e método.
            </p>
            <div className="mt-8 flex gap-2">
              {socialLinks.map(({ href, label }) => {
                const Icon = iconMap[label as keyof typeof iconMap];
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Menu</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground hover:text-accent"
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
                  className="flex gap-3 text-sm text-foreground hover:text-accent"
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
                  className="flex gap-3 text-sm text-foreground hover:text-accent"
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

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p className="font-mono uppercase tracking-wider">{site.credential}</p>
        </div>
      </div>
    </footer>
  );
}
