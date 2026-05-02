import React from "react";
import Link from "next/link";
import { Leaf, ExternalLink } from "lucide-react";

const pages = [
  { label: "Saúde", href: "/saude" },
  { label: "Tecnologia", href: "/tecnologia" },
  { label: "Inteligência Artificial", href: "/ia" },
  { label: "Profissionais", href: "/profissionais" },
  { label: "Sobre", href: "/sobre" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-lg mb-4">
              <Leaf size={20} />
              <span>Thiago Piola</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-4 max-w-sm">
              Farmacêutico CRF/SP 58.519. Conectando saúde, tecnologia e conhecimento
              para um futuro mais saudável para todos.
            </p>
            <a
              href="https://reidasvendas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-colors"
            >
              Rei das Vendas
              <ExternalLink size={14} />
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Páginas
            </h3>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contato
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@thiagopiola.com.br"
                  className="hover:text-emerald-400 transition-colors"
                >
                  contato@thiagopiola.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/thiago.piola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  @thiago.piola
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Thiago B. G. Piola · CRF/SP 58.519 · Farmacêutico
          </p>
          <p className="text-xs text-gray-600 max-w-md text-center md:text-right">
            Conteúdo educativo e informativo. Não substitui consulta médica ou farmacêutica.
            Sempre procure um profissional de saúde habilitado.
          </p>
        </div>
      </div>
    </footer>
  );
}
