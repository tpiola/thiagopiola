"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PharmacyIcon } from "./PharmacyIcon";

const navLinks = [
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
          ? "border-b border-white/10 bg-gray-950/90 backdrop-blur-md shadow-lg"
          : "bg-transparent",
      )}
    >
      <motion.div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="Thiago Piola">
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <PharmacyIcon className="h-5 w-5" />
          </motion.div>
          <motion.div
            className="flex flex-col leading-none"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span
              className={cn(
                "text-xs font-black tracking-[0.1em] transition-colors",
                scrolled ? "text-gray-900" : "text-white",
              )}
            >
              THIAGO PIOLA
            </span>
            <span className="text-[10px] font-semibold text-blue-500">CRF-SP 58.519</span>
          </motion.div>
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
              "flex h-9 w-9 items-center justify-center rounded-xl transition-colors hover:bg-black/10 md:hidden",
              scrolled ? "text-gray-900" : "text-white",
            )}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-gray-950/95 px-5 py-4 backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10"
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
