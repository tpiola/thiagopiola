"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { nav, site } from "@/lib/content";
import { trackCta } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LinkedinIcon } from "./SocialIcons";

export function Header() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Trava o scroll quando menu mobile está aberto */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className={cn("fixed inset-x-0 top-0 z-[80]",
        scrolled ? "border-b border-border bg-surface/85 backdrop-blur-xl shadow-sm shadow-black/5" : "bg-transparent")}
      initial={false}
      animate={{ height: scrolled ? 80 : 100 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex h-full max-h-24 min-h-[80px] max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" aria-label={`${site.shortName} — início`} className="shrink-0">
          <Logo variant="full" showCredential height={scrolled ? 70 : 90} className="hover:scale-105 transition-transform" />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((link) => (
            <a key={link.href} href={link.href}
              className="group relative rounded-md px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted transition-all duration-200 hover:text-foreground xl:px-3.5">
              {link.label}
              <span className="absolute inset-x-3 bottom-1.5 h-px origin-left scale-x-0 bg-[var(--brand)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.a href={site.linkedin} target="_blank" rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-[var(--brand)]/30 bg-[color-mix(in_srgb,var(--brand)_8%,transparent)] px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--brand)] md:inline-flex"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            onClick={() => trackCta("cta_linkedin_click")}>
            <LinkedinIcon className="h-3.5 w-3.5" />
            LinkedIn
          </motion.a>
          <motion.a href={site.whatsapp} target="_blank" rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg bg-[var(--brand)] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-white lg:inline-flex"
            whileHover={reduce ? undefined : { scale: 1.03, boxShadow: "0 4px 20px var(--brand-glow)" }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            onClick={() => trackCta("cta_whatsapp_click")}>
            <Zap className="h-3.5 w-3.5" />
          </motion.a>
          <button type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Fullscreen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-6"
            style={{
              backgroundColor: "color-mix(in srgb, var(--surface) 97%, transparent)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]"
              aria-label="Fechar menu"
              onClick={closeMenu}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Links do menu com stagger */}
            {nav.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-foreground transition-colors hover:text-[var(--brand)]"
                onClick={closeMenu}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* CTA principal mobile */}
            <motion.a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--brand)] px-10 py-4 text-lg font-bold text-white shadow-lg shadow-[var(--brand)]/30"
              onClick={() => {
                trackCta("cta_linkedin_click");
                closeMenu();
              }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ delay: reduce ? 0 : 0.3, duration: 0.3 }}
            >
              <LinkedinIcon className="h-5 w-5" />
              Ver perfil no LinkedIn
            </motion.a>

            {/* Micro-copy de confiança no mobile */}
            <motion.p
              className="mt-4 text-[11px] text-muted/60 font-mono tracking-wider"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ delay: reduce ? 0 : 0.4 }}
            >
              CRF/SP 58.519 · Resposta em até 2h
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
