"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/content";
import { AnimateIn } from "./AnimateIn";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá Thiago! Me chamo ${name}. Email: ${email}. WhatsApp: ${phone}. Gostaria de entrar em contato.`
    );
    window.open(`https://wa.me/5516992333344?text=${msg}`, "_blank", "noreferrer");
  };

  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="gap-16 lg:flex lg:items-start">
          {/* Left */}
          <div className="mb-12 lg:mb-0 lg:w-[380px] lg:shrink-0">
            <AnimateIn>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                Deixe seu contato
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tighter text-foreground md:text-4xl">
                Pronto para a conversa certa?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Preencha seus dados e inicie a conversa diretamente no WhatsApp.
                Rápido, sem burocracia.
              </p>
            </AnimateIn>
          </div>

          {/* Form */}
          <div className="flex-1">
            <AnimateIn delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
                      Nome completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted">
                    WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(16) 99999-9999"
                    className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-all focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066CC] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0055BB]"
                >
                  Enviar pelo WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </motion.button>

                <p className="text-center text-xs text-muted">
                  Seus dados são usados apenas para entrar em contato. Conforme a LGPD.
                </p>
              </form>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
