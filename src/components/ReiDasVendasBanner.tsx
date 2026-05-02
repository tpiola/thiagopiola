import React from "react";
import { ArrowRight, Zap } from "lucide-react";

interface ReiDasVendasBannerProps {
  context?: string;
}

export default function ReiDasVendasBanner({
  context = "negócio",
}: ReiDasVendasBannerProps) {
  return (
    <section className="py-20 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[40px] p-8 md:p-14 bg-gradient-to-r from-gray-900 to-black border border-emerald-500/20 overflow-hidden">
          {/* glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono tracking-[0.2em] uppercase mb-6">
                <Zap size={14} />
                Soluções Digitais para Saúde &amp; Negócios
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Leve o futuro digital para o seu{" "}
                <span className="text-emerald-400">{context}</span>.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Sites modernos, aplicativos e extensões para{" "}
                <strong className="text-white">profissionais de saúde</strong>,
                farmácias, clínicas e negócios locais. Tecnologia que gera resultados
                reais — pela <strong className="text-emerald-400">Rei das Vendas</strong>.
              </p>
            </div>

            <a
              href="https://reidasvendas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full font-extrabold hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.25)] shrink-0"
            >
              CONHECER SOLUÇÕES
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform duration-300"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
