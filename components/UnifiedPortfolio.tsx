"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Store,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Mail
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Trajetoria } from "@/components/Trajetoria";
import { ProvasEntrega } from "@/components/ProvasEntrega";
import { Projetos } from "@/components/Projetos";
import { PageShell } from "@/components/motion/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { spring } from "@/lib/motion";
import { projetos, competenciasCards } from "@/lib/content";
import { FloatingCta } from "./FloatingCta";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_NEWSLETTER_WEBHOOK;

      if (!webhookUrl) {
        console.error("NEXT_PUBLIC_MAKE_NEWSLETTER_WEBHOOK não configurado");
        setStatus("error");
        return;
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source: "thiagopiola",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        console.error("Webhook respondeu com status", response.status);
        setStatus("error");
      }
    } catch (err) {
      console.error("Erro ao enviar email para webhook:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={spring.soft}
        className="rounded-2xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 p-8 text-center"
      >
        <Mail className="h-8 w-8 text-[var(--brand)] mx-auto mb-3" />
        <p className="text-base font-medium text-foreground">
          Obrigado por assinar! 🎉
        </p>
        <p className="text-sm text-muted mt-1">
          Você receberá os próximos conteúdos no seu email.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]/30 transition-all disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary whitespace-nowrap disabled:opacity-50"
      >
        {status === "loading" ? "Enviando…" : "Assinar"}
      </button>
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-full text-sm text-red-500 text-center"
        >
          Ocorreu um erro ao enviar. Tente novamente mais tarde.
        </motion.p>
      )}
    </form>
  );
}

export function UnifiedPortfolio() {
  return (
    <PageShell>
      <main className="min-h-screen bg-surface text-foreground font-sans selection:bg-[var(--brand)] selection:text-white">
        <Header />
        
        {/* 1. HERO DE ELITE (UNIFICADO) */}
        <Hero sectionType="unified" />

        {/* 2. PROVAS DE ENTREGA (AUTORIDADE RÁPIDA) */}
        <ProvasEntrega />

        {/* 4. TESE DE CAMPO (THE JUDGMENT LAYER) */}
        <section className="py-20 md:py-32 overflow-hidden bg-surface-elevated">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal variant="fade">
              <div className="relative rounded-3xl border border-[var(--brand)]/10 bg-white p-8 md:p-14 text-center shadow-subtle">
                
                <span className="mb-6 block font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">
                  Manifesto Profissional
                </span>
                
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-foreground balance">
                  &ldquo;A tecnologia acelera processos, mas o <span className="text-gradient-brand">Judgment Layer</span> humano é o que valida o compliance e a conversão no ponto de venda.&rdquo;
                </h2>
                
                <p className="mt-8 text-muted leading-relaxed max-w-2xl mx-auto">
                  Minha abordagem une a precisão de dados da Engenharia de IA com a intuição científica de anos em campo. Eu elimino o ponto cego entre a diretriz da diretoria e o resultado no faturamento da filial.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. COMPETÊNCIAS PROFISSIONAIS */}
        <section className="py-20 md:py-32 overflow-hidden bg-surface-elevated border-b border-border">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal variant="fade">
              <div className="text-center mb-14">
                <span className="inline-block mb-5 rounded-full bg-[var(--brand)]/10 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--brand)]">
                  Atuação Profissional
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-foreground balance mb-4">
                  Competências profissionais
                </h2>
                <p className="text-muted leading-relaxed max-w-xl mx-auto">
                  Comunicação técnica, vendas consultivas, relacionamento profissional, treinamento e tecnologia.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {competenciasCards.map((card, i) => {
                const icons = [Store, ShieldCheck, Cpu, GraduationCap];
                const Icon = icons[i];
                return (
                  <motion.div
                    key={card.titulo}
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.08, ...spring.soft }}
                    className="group rounded-2xl border border-border bg-white p-6 md:p-8 hover:border-[var(--brand)]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {card.titulo}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 6. TRAJETÓRIA EXECUTIVA (STORYTELLING) */}
        <Trajetoria />

        {/* 7. PROJETOS & INOVAÇÃO (COMPETÊNCIA TÉCNICA) */}
        <Projetos />

        {/* 8. NEWSLETTER */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-surface-elevated to-white border-t border-border">
          <div className="mx-auto max-w-xl px-5 md:px-8 text-center">
            <Reveal variant="up">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Receba conteúdos sobre saúde, farmácia e tecnologia
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                Análises, insights e novidades direto na sua caixa de entrada.
              </p>
            </Reveal>
            <NewsletterForm />
          </div>
        </section>

        <Footer />
        <FloatingCta />
      </main>
    </PageShell>
  );
}
