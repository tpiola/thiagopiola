"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Orientações", href: "#orientacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-bold text-emerald-700 text-lg">
          <Leaf size={22} />
          <span>Thiago Piola</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-emerald-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-emerald-700 transition-colors"
          >
            Agende uma conversa
          </a>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-emerald-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="bg-emerald-600 text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-emerald-700"
          >
            Agende uma conversa
          </a>
        </div>
      )}
    </header>
  );
}
