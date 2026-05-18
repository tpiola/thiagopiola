"use client";

import { motion, useReducedMotion } from "framer-motion";
import { bento } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";
import { cn } from "@/lib/utils";

/* ─── Browser Mockup Window ─────────────────────────────────── */
function BrowserMockup({
  children,
  className,
  url = "app.thiagopiola.com.br",
}: {
  children: React.ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-white/10 bg-black/50", className)}>
      <div className="flex items-center gap-1.5 border-b border-white/8 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
        <div className="mx-auto flex h-5 items-center justify-center rounded-full bg-white/6 px-4 font-mono text-[10px] text-white/25">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

/* ─── Code Snippet Block ────────────────────────────────────── */
const agentCode = [
  { t: "import", c: "#CC99CD" },
  { t: " { AgentExecutor } ", c: "#F8F8F2" },
  { t: "from", c: "#CC99CD" },
  { t: " 'langchain/agents'", c: "#A8FF60" },
  { t: ";", c: "#F8F8F2" },
];

const codeLines: Array<{ tokens: Array<{ t: string; c: string }>; indent?: number }> = [
  {
    tokens: [
      { t: "const", c: "#CC99CD" },
      { t: " agent", c: "#F8F8F2" },
      { t: " =", c: "#F92672" },
      { t: " await", c: "#CC99CD" },
      { t: " AgentExecutor", c: "#66D9EF" },
      { t: ".", c: "#F8F8F2" },
      { t: "create", c: "#A6E22E" },
      { t: "({", c: "#F8F8F2" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: "tools", c: "#F8F8F2" },
      { t: ":", c: "#F92672" },
      { t: " [pharmacyTools,", c: "#F8F8F2" },
      { t: " crmSync", c: "#A6E22E" },
      { t: "],", c: "#F8F8F2" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: "model", c: "#F8F8F2" },
      { t: ":", c: "#F92672" },
      { t: " claude", c: "#66D9EF" },
      { t: ".", c: "#F8F8F2" },
      { t: "latest", c: "#F8F8F2" },
      { t: ",", c: "#F8F8F2" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: "memory", c: "#F8F8F2" },
      { t: ":", c: "#F92672" },
      { t: " true", c: "#AE81FF" },
      { t: ",", c: "#F8F8F2" },
    ],
  },
  { tokens: [{ t: "});", c: "#F8F8F2" }] },
  { tokens: [{ t: "", c: "" }] },
  {
    tokens: [
      { t: "// Deploy to production", c: "#75715E" },
    ],
  },
  {
    tokens: [
      { t: "await", c: "#CC99CD" },
      { t: " agent", c: "#F8F8F2" },
      { t: ".", c: "#F8F8F2" },
      { t: "deploy", c: "#A6E22E" },
      { t: "({ env:", c: "#F8F8F2" },
      { t: " 'prod'", c: "#A8FF60" },
      { t: " });", c: "#F8F8F2" },
    ],
  },
];

function CodeBlock() {
  return (
    <BrowserMockup url="agent.deploy.ts">
      <div className="p-4 md:p-5">
        <div className="mb-3 flex gap-2 font-mono text-[10px]">
          <span className="rounded bg-[#0066CC]/20 px-2 py-0.5 text-[#0066CC]">TypeScript</span>
          <span className="rounded bg-white/5 px-2 py-0.5 text-white/30">n8n</span>
          <span className="rounded bg-white/5 px-2 py-0.5 text-white/30">LangChain</span>
        </div>
        <pre className="font-mono text-[11px] leading-[1.8]">
          <div className="flex gap-3">
            {agentCode.map((token, i) => (
              <span key={i} style={{ color: token.c }}>
                {token.t}
              </span>
            ))}
          </div>
          {codeLines.map((line, li) => (
            <div key={li} className="flex">
              <span className="mr-4 w-4 select-none text-right text-white/20">
                {li + 2}
              </span>
              <span style={{ paddingLeft: `${(line.indent ?? 0) * 0.5}rem` }}>
                {line.tokens.map((token, ti) => (
                  <span key={ti} style={{ color: token.c }}>
                    {token.t}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </BrowserMockup>
  );
}

/* ─── Metrics Block ─────────────────────────────────────────── */
function MetricsBlock({
  metrics,
}: {
  metrics: ReadonlyArray<{ value: string; label: string }>;
}) {
  return (
    <div className="mt-auto grid grid-cols-2 gap-3 pt-4">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-xl border border-white/8 bg-white/5 p-3 text-center"
        >
          <p className="text-2xl font-black tracking-tighter text-white">{m.value}</p>
          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-white/40">
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─── Individual Card ───────────────────────────────────────── */
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

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -3, transition: { duration: 0.25 } }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface-elevated p-6 md:p-8",
        className,
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{card.tag}</p>
      <h3 className="mt-3 text-xl font-semibold leading-tight tracking-tight text-foreground md:text-2xl">
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{card.desc}</p>

      {/* Large AI card gets a code mockup */}
      {card.tag.includes("01") && (
        <div className="mt-6 dark:block hidden">
          <CodeBlock />
        </div>
      )}

      {/* Efficiency card gets metrics */}
      {"metrics" in card && card.metrics && (
        <MetricsBlock metrics={card.metrics} />
      )}

      {/* Management card — visual placeholder for org chart */}
      {card.tag.includes("03") && (
        <div className="mt-auto pt-4">
          <div className="flex items-end gap-2 opacity-40">
            {[60, 80, 45, 90, 55].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-accent/60 transition-all group-hover:opacity-80"
                style={{ height: `${h * 0.6}px` }}
              />
            ))}
          </div>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-muted">
            Ciclos de performance — equipe
          </p>
        </div>
      )}

      {/* Sales card — pipeline visual */}
      {card.tag.includes("04") && (
        <div className="mt-auto pt-4">
          <div className="space-y-1.5">
            {[
              { label: "Prospecção", w: "w-full", opacity: "opacity-60" },
              { label: "Qualificação", w: "w-4/5", opacity: "opacity-70" },
              { label: "Proposta", w: "w-3/5", opacity: "opacity-80" },
              { label: "Fechamento", w: "w-2/5", opacity: "opacity-100" },
            ].map((stage) => (
              <div key={stage.label} className="flex items-center gap-3">
                <span className="w-20 shrink-0 font-mono text-[9px] uppercase tracking-wider text-muted">
                  {stage.label}
                </span>
                <div className={cn("h-1.5 rounded-full bg-accent", stage.w, stage.opacity)} />
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export function BentoGrid() {
  const reduce = useReducedMotion();
  const [card0, card1, card2, card3] = bento.cards;

  return (
    <section id="proposta" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <SectionLabel index="01">Proposta</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tighter text-foreground md:text-4xl lg:text-5xl">
            {bento.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{bento.lead}</p>
        </motion.div>

        {/* Grid — asymmetric bento layout */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Row 1: AI Engineering (2/3) + Efficiency (1/3) */}
          <BentoCard card={card0} index={0} className="lg:col-span-2" />
          <BentoCard card={card1} index={1} />

          {/* Row 2: Management (1/3) + Sales (2/3) */}
          <BentoCard card={card2} index={2} />
          <BentoCard card={card3} index={3} className="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
