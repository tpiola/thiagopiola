npm install lucide-react tailwind-merge clsx && \
mkdir -p components && \
cat <<EOF > components/B2BSection.tsx
import React from 'react';
import { ArrowRight, Laptop } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utilitário para manter o HTML limpo e classes organizadas
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const B2BSection = React.memo(() => {
  return (
    <section className="py-20 bg-emerald-950/20 w-full overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={cn(
          "relative p-8 md:p-12 rounded-[40px]",
          "bg-gradient-to-r from-gray-900 to-black",
          "border border-emerald-500/30",
          "flex flex-col lg:flex-row items-center justify-between gap-10"
        )}>
          
          {/* Conteúdo - Semântico e Direto */}
          <article className="max-w-2xl text-center lg:text-left">
            <header className="flex items-center justify-center lg:justify-start gap-3 text-emerald-400 mb-6 font-mono text-sm tracking-[0.2em] uppercase">
              <Laptop size={18} aria-hidden="true" />
              <span>Oportunidade Corporativa</span>
            </header>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Leve esta maturidade tecnológica para o seu negócio.
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed antialiased">
              Profissional de saúde ou dono de farmácia? Implemente ecossistemas de alta conversão e 
              <span className="text-white font-semibold italic"> SEO Inteligente </span> 
              projetados pela <strong className="text-white">Rei das Vendas</strong>.
            </p>
          </article>
          
          {/* Call to Action */}
          <nav>
            <a 
              href="https://reidasvendas.com.br" 
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group inline-flex items-center gap-3",
                "bg-white text-black px-10 py-5 rounded-full font-extrabold",
                "hover:bg-emerald-400 hover:scale-105 transition-all duration-300",
                "shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              )}
            >
              CONHECER SOLUÇÕES B2B
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </a>
          </nav>

        </div>
      </div>
    </section>
  );
});

B2BSection.displayName = "B2BSection";
EOF