"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

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

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-[80]",
        scrolled
          ? "border-b border-border bg-surface/85 backdrop-blur-xl shadow-sm shadow-black/5"
          : "bg-transparent",
      )}
      initial={false}
      animate={{
        height: scrolled ? 60 : 64,
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex h-full max-h-16 min-h-[60px] max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#" aria-label={`${site.shortName} — início`}>
          <Logo variant="full" showCredential iconClassName="h-9 w-9" />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute inset-x-3 bottom-1.5 h-px origin-left scale-x-0 bg-[var(--brand)] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-foreground px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--surface)] md:inline-block"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            Contato
          </motion.a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <motion.nav
        className="border-t border-border bg-surface-elevated px-5 py-4 md:hidden"
        aria-label="Menu mobile"
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        style={{ overflow: "hidden", pointerEvents: menuOpen ? "auto" : "none" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {nav.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block rounded-lg bg-foreground px-4 py-3 text-center text-sm font-medium text-[var(--surface)]"
        >
          WhatsApp
        </a>
      </motion.nav>
    </motion.header>
  );
}
