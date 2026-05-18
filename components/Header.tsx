"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-[background,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-surface/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:px-12 lg:px-16">
        <a href="#" aria-label={`${site.shortName} — início`}>
          <Logo variant="full" showCredential iconClassName="h-9 w-9" />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/curriculo-thiago-piola.pdf"
            download
            className="hidden items-center gap-1.5 rounded-lg border border-border bg-surface-elevated px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-wider text-foreground transition-all hover:border-accent/40 hover:text-accent md:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            CV PDF
          </a>
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

      {menuOpen && (
        <nav
          className="border-t border-border bg-surface-elevated px-6 py-4 md:hidden"
          aria-label="Menu mobile"
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
            href="/curriculo-thiago-piola.pdf"
            download
            className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground"
          >
            <Download className="h-4 w-4" />
            Baixar Currículo PDF
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block rounded-lg bg-foreground px-4 py-3 text-center text-sm font-medium text-[var(--surface)]"
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
