"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { footerBio, nav, site, socialLinks } from "@/lib/content";
import {
  BlueSkyIcon, FacebookIcon, GitHubIcon, GoogleIcon,
  InstagramIcon, LinkedinIcon, NotionIcon, RedditIcon,
  TelegramIcon, TikTokIcon, WhatsAppIcon, XTwitterIcon,
} from "./SocialIcons";

const iconMap = {
  Bluesky: BlueSkyIcon,
  Facebook: FacebookIcon,
  GitHub: GitHubIcon,
  Google: GoogleIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
  Notion: NotionIcon,
  Reddit: RedditIcon,
  Telegram: TelegramIcon,
  TikTok: TikTokIcon,
  X: XTwitterIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="overflow-hidden bg-surface">
      {/* ── Editorial display ── */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-16 sm:px-8 md:px-12 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {site.credential}
          </p>
          <h2
            className="mt-3 text-[clamp(3rem,10vw,8rem)] font-black leading-[0.88] tracking-[-0.04em] text-foreground"
            aria-label={site.shortName}
          >
            Thiago
            <span className="block text-muted/40">Piola.</span>
          </h2>
        </div>
      </div>

      {/* ── Links + contact ── */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:px-12 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">

          {/* Bio */}
          <div className="lg:col-span-4">
            <p className="max-w-xs text-sm leading-relaxed text-muted">{footerBio}</p>

            {/* Founder */}
            <a
              href={site.reidasVendas}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-surface-elevated px-3 py-2 text-xs font-medium text-muted transition-all hover:border-accent/40 hover:text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0066CC]" />
              Founder · Rei das Vendas
              <ArrowUpRight className="h-3 w-3 opacity-50" />
            </a>

            {/* Social icons — animated, icon only */}
            <div className="mt-8 flex flex-wrap gap-5">
              {socialLinks.map(({ href, label }) => {
                const Icon = iconMap[label as keyof typeof iconMap];
                return (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.25, y: -3 }}
                    whileTap={{ scale: 0.85 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3 lg:col-start-6">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Menu</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Contato</p>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={site.whatsappWithMessage}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-3 text-sm text-foreground transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                  <span>
                    {site.phone}
                    <span className="block text-xs text-muted">WhatsApp</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex gap-3 text-sm text-foreground transition-colors hover:text-accent"
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

            <a
              href={site.whatsappWithMessage}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-[var(--surface)] transition-opacity hover:opacity-85 active:scale-[0.98]"
            >
              Iniciar conversa
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* QR Code */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-12">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
            WhatsApp direto — escaneie o QR code
          </p>
          <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
            <QRCodeSVG
              value={site.whatsappWithMessage}
              size={128}
              level="M"
              bgColor="#ffffff"
              fgColor="#07090f"
            />
          </div>
          <p className="text-xs text-muted">{site.phone}</p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-12 lg:px-16">
          <p>
            Criado por:{" "}
            <a
              href={site.reidasVendas}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              © {year} Rei das Vendas
            </a>
          </p>
          <p className="font-mono uppercase tracking-wider">{site.credential}</p>
        </div>
      </div>
    </footer>
  );
}
