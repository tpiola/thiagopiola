"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#farmacia", label: "Farmácia" },
  { href: "#competencias", label: "Competências" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#trajetoria", label: "Trajetória" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
        scrolled
          ? "border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#" aria-label="Thiago Piola — início">
          <Logo
            variant="full"
            showCredential
            iconClassName="h-10 w-10"
            theme={scrolled ? "light" : "dark"}
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-all",
                scrolled
                  ? "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                  : "text-white/80 hover:bg-white/10 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/5516992333344"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 md:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden />
            Contato
          </a>
          <button
            type="button"
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl transition-colors md:hidden",
              scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10",
            )}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={cn(
            "border-t px-5 py-4 backdrop-blur-md md:hidden",
            scrolled ? "border-gray-200 bg-white/98" : "border-white/10 bg-gray-950/95",
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "block rounded-lg px-4 py-3 text-sm font-semibold",
                scrolled ? "text-gray-800 hover:bg-blue-50" : "text-white/80 hover:bg-white/10",
              )}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5516992333344"
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      )}
    </motion.header>
  );
}
