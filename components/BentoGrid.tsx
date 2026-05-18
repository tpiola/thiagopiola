"use client";

import { motion, useReducedMotion } from "framer-motion";
import { bento } from "@/lib/content";
import { cn } from "@/lib/utils";

/* ─── Mac-style window chrome ───────────────────────────────── */
function WindowChrome({ url = "app.thiagopiola.com.br" }: { url?: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/8 px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/60" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/60" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/60" />
      <div className="mx-auto flex h-5 max-w-[180px] items-center justify-center overflow-hidden rounded-full bg-white/5 px-4 font-mono text-[10px] text-white/20">
        {url}
      </div>
    </div>
  );
}

/* ─── AI code mockup ─────────────────────────────────────────── */
function CodeMockup() {
  const lines = [
    { text: "// AI Agent — Farmácia + Engenharia", color: "#6B7280" },
    { text: "", color: "" },
    { text: "const agent = await AgentExecutor.create({", color: "#E5E7EB" },
    { text: "  model:   claude.latest,", color: "#9CA3AF" },
    { text: "  tools:   [pharmacyTools, crmSync],", color: "#9CA3AF" },
    { text: "  domain:  'pharmaceutical',", color: "#60A5FA" },
    { text: "  memory:  true,", color: "#34D399" },
    { text: "});", color: "#E5E7EB" },
    { text: "", color: "" },
    { text: "await agent.deploy({ env: 'production' });", color: "#A78BFA" },
  ];

  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-white/8 bg-black/60">
      <WindowChrome url="agent.deploy.ts" />
      <div className="p-4">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {["TypeScript", "n8n", "LangChain"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 px-2 py-0.5 font-mono text-[9px] text-white/35"
            >
              {tag}
            </span>
          ))}
        </div>
        <pre className="overflow-x-auto font-mono text-[11px] leading-[1.75]">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-3 whitespace-pre">
              <span className="w-4 shrink-0 select-none text-right text-[9px] text-white/15">
                {i + 1}
              </span>
              <span style={{ color: line.color || "transparent" }}>{line.text || " "}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

/* ─── Metrics bar chart ──────────────────────────────────────── */
function MetricsViz({
  metrics,
}: {
  metrics: ReadonlyArray<{ value: string; label: string }>;
}) {
  return (
    <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
      {metrics.map((m) => (
        <div key={m.label} className="rounded-xl border border-white/8 bg-white/4 p-4 text-center">
          <p className="text-[1.75rem] font-black leading-none tracking-tighter text-white">
            {m.value}
          </p>
          <p className="mt-1.5 font-mono text-[9px] uppercase tracking-wider text-white/35">
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─── Pipeline funnel ────────────────────────────────────────── */
function PipelineViz() {
  const stages = [
    { label: "Prospecção", pct: 100 },
    { label: "Qualificação", pct: 78 },
    { label: "Proposta", pct: 54 },
    { label: "Fechamento", pct: 36 },
  ];
  return (
    <div className="mt-auto space-y-2 pt-5">
      {stages.map((s) => (
        <div key={s.label} className="flex items-center gap-3">
          <span className="w-20 shrink-0 font-mono text-[9px] uppercase tracking-wider text-white/30">
            {s.label}
          </span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
            <div
              className="h-full rounded-full bg-[#0066CC]"
              style={{ width: `${s.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Performance bars ───────────────────────────────────────── */
function PerfBars() {
  const bars = [58, 72, 45, 88, 63];
  return (
    <div className="mt-auto flex items-end gap-1.5 pt-5">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-[#0066CC]/50 transition-all"
          style={{ height: `${h * 0.55}px` }}
        />
      ))}
    </div>
  );
}

/* ─── Card ───────────────────────────────────────────────────── */
function BentoCard({
  card,
  index,
  className,
}: {
  card: (typeof bento.cards)[number];
  index: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const isAI = card.tag.includes("01");
  const isEff = "metrics" in card && card.metrics;
  const isMgmt = card.tag.includes("03");
  const isSales = card.tag.includes("04");

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface-elevated p-6 md:p-7",
        "dark:bg-[#0d0d0d] dark:border-white/8",
        className,
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{card.tag}</p>
      <h3 className="mt-3 text-xl font-black leading-tight tracking-tight text-foreground md:text-2xl">
        {card.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">{card.desc}</p>

      {/* AI card — code mockup (dark-only, hidden on light) */}
      {isAI && (
        <div className="hidden dark:block">
          <CodeMockup />
        </div>
      )}

      {/* Efficiency — metrics */}
      {isEff && <MetricsViz metrics={(card as { metrics: ReadonlyArray<{ value: string; label: string }> }).metrics} />}

      {/* Management — performance bars */}
      {isMgmt && <PerfBars />}

      {/* Sales — pipeline funnel */}
      {isSales && <PipelineViz />}
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export function BentoGrid() {
  const reduce = useReducedMotion();
  const [card0, card1, card2, card3] = bento.cards;

  return (
    <section id="proposta" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-3xl font-black leading-tight tracking-tighter text-foreground md:text-4xl lg:text-5xl">
            {bento.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{bento.lead}</p>
        </motion.div>

        {/* Asymmetric grid: 2+1 on row 1, 1+2 on row 2 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <BentoCard card={card0} index={0} className="lg:col-span-2" />
          <BentoCard card={card1} index={1} />
          <BentoCard card={card2} index={2} />
          <BentoCard card={card3} index={3} className="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
