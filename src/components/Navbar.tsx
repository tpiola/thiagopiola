"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Saúde", href: "/saude" },
  { label: "Tecnologia", href: "/tecnologia" },
  { label: "Inteligência Artificial", href: "/ia" },
  { label: "Profissionais", href: "/profissionais" },
  { label: "Sobre", href: "/sobre" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg =
    scrolled || !isHome
      ? "bg-white/95 shadow-sm backdrop-blur-md"
      : "bg-transparent";

  const textColor =
    scrolled || !isHome ? "text-gray-700" : "text-white";

  const logoColor =
    scrolled || !isHome ? "text-emerald-700" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-2 font-bold text-lg transition-colors ${logoColor}`}
        >
          <Leaf size={22} />
          <span>Thiago Piola</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  active
                    ? "text-emerald-500"
                    : textColor
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href="https://reidasvendas.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-emerald-700 transition-colors whitespace-nowrap"
          >
            Rei das Vendas →
          </a>
        </nav>

        <button
          className={`lg:hidden ${textColor}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium hover:text-emerald-600 ${
                pathname === l.href ? "text-emerald-600" : "text-gray-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://reidasvendas.com.br"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="bg-emerald-600 text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-emerald-700"
          >
            Rei das Vendas →
          </a>
        </div>
      )}
    </header>
  );
}
