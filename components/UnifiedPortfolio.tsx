"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  TrendingUp, 
  MessageCircle, 
  FileText, 
  ArrowUpRight, 
  Zap, 
  History, 
  Layers, 
  Cpu, 
  Microscope,
  Star,
  Download
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Trajetoria } from "@/components/Trajetoria";
import { ProvasEntrega } from "@/components/ProvasEntrega";
import { Projetos } from "@/components/Projetos";
import { PageShell } from "@/components/motion/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { site, hero, trajetoria, projetos } from "@/lib/content";
import { cn } from "@/lib/utils";
import { FloatingCta } from "./FloatingCta";

export function UnifiedPortfolio() {
  return (
    <PageShell>
      <main className="min-h-screen bg-surface text-foreground font-sans selection:bg-[var(--brand)] selection:text-white">
        <Header />
        
        {/* 1. HERO DE ELITE (UNIFICADO) */}
        <Hero sectionType="unified" />

        {/* 2. HIRING INSIGHTS BAR (MÉTRICAS PREMIUM) */}
        <section className="relative z-10 -mt-8 px-5 md:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-surface-elevated/80 backdrop-blur-xl p-6 shadow-strong">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:divide-x md:divide-border/50">
              <div className="flex flex-col items-center text-center md:px-4">
                <div className="mb-2 p-2 rounded-lg bg-[var(--brand)]/5 text-[var(--brand)]">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <span className="text-sm font-bold text-foreground">Top 1% Skills Verified</span>
                <span className="text-xs text-muted">Inteligência Comercial & Farma</span>
              </div>
              <div className="flex flex-col items-center text-center md:px-4">
                <div className="mb-2 p-2 rounded-lg bg-[var(--brand)]/5 text-[var(--brand)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-foreground">Perfil Verificado 2026</span>
                <span className="text-xs text-muted">CRF/SP Ativo & Compliance Total</span>
              </div>
              <div className="flex flex-col items-center text-center md:px-4">
                <div className="mb-2 p-2 rounded-lg bg-[var(--brand)]/5 text-[var(--brand)]">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-foreground">AI Engineering Native</span>
                <span className="text-xs text-muted">Agentes & Orquestração LLM</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROVAS DE ENTREGA (AUTORIDADE RÁPIDA) */}
        <ProvasEntrega />

        {/* 4. TESE DE CAMPO (THE JUDGMENT LAYER) */}
        <section className="py-20 md:py-32 overflow-hidden bg-surface-elevated">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal variant="fade">
              <div className="relative rounded-3xl border border-[var(--brand)]/10 bg-white p-10 md:p-16 text-center shadow-subtle">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand)] p-3 shadow-lg">
                  <Microscope className="h-6 w-6 text-white" />
                </div>
                
                <span className="mb-6 block font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">
                  Manifesto Profissional
                </span>
                
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-foreground balance">
                  &ldquo;A tecnologia acelera processos, mas o <span className="text-gradient-brand">Judgment Layer</span> humano é o que valida o compliance e a conversão no ponto de venda.&rdquo;
                </h2>
                
                <p className="mt-8 text-muted leading-relaxed max-w-2xl mx-auto">
                  Minha abordagem une a precisão de dados da Engenharia de IA com a intuição científica de 15 anos em campo. Eu elimino o ponto cego entre a diretriz da diretoria e o resultado no faturamento da filial.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. TRAJETÓRIA EXECUTIVA (STORYTELLING) */}
        <Trajetoria />

        {/* 6. PROJETOS & INOVAÇÃO (COMPETÊNCIA TÉCNICA) */}
        <Projetos />

        {/* 7. CTA EXECUTIVO (FINAL DO FUNIL) */}
        <section className="py-24 md:py-40 bg-white border-t border-border">
          <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
            <Reveal variant="up">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                Pronto para elevar sua <span className="text-gradient-brand">operação</span>?
              </h3>
            </Reveal>
            
            <Reveal variant="up" delay={0.1}>
              <p className="text-lg text-muted mb-12">
                Recrutadores e Gestores: Estou pronto para aplicar visão estratégica, liderança e inovação tecnológica em ambientes de alta exigência.
              </p>
            </Reveal>

            <div className="flex flex-wrap justify-center gap-4">
              <a href={site.whatsapp} className="btn-primary group scale-110">
                <MessageCircle className="h-5 w-5" />
                Agendar Conversa Estratégica
                <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={site.cvUrl} className="btn-secondary">
                <Download className="h-5 w-5" />
                Baixar Dossiê Completo (PDF)
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-6">
               <a href={site.linkedin} target="_blank" className="text-muted hover:text-[var(--brand)] transition-colors">
                 <LinkedinIcon className="h-6 w-6" />
               </a>
               <a href={`mailto:${site.email}`} className="text-muted hover:text-[var(--brand)] transition-colors">
                 <FileText className="h-6 w-6" />
               </a>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingCta />
      </main>
    </PageShell>
  );
}
