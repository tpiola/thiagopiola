"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "./AnimateIn";

export function FarmaciaFuturo() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 md:py-36">
      <motion.div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <AnimateIn>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
              Tecnologia
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              A Farmácia do
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff, #93c5fd, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Futuro é Hoje.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/45">
              Inteligência artificial, automação e análise de dados transformando o cuidado à saúde.
              Não no amanhã — agora.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <motion.div
                className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-blue-500/60"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                style={{ originX: 0 }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400/70">
                Farmacêutico CRF/SP 58.519
              </span>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <motion.div
              className="relative w-full overflow-hidden rounded-2xl bg-gray-950 shadow-2xl shadow-black/40"
              style={{ aspectRatio: "16/9" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover opacity-90"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-a-pharmacist-working-in-a-pharmacy-6770/1080p.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <motion.div
                className="absolute bottom-4 left-5 right-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Farmácia · Tecnologia · Cuidado
                </p>
              </motion.div>
            </motion.div>
          </AnimateIn>
        </div>
      </motion.div>
    </section>
  );
}
