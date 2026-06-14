"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUpRight, Award, Bot, Code2, TrendingUp } from "lucide-react";
import { projetos } from "@/lib/content";

/* ─── smooth lerp ─── */
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ─── 3D card data ─── */
const cards = projetos.items.map((p, i) => ({
  ...p,
  icon: [Award, Bot, Code2][i % 3],
  color: [ "#0c2340", "#1a4d8c", "#2a6db5" ][i % 3],
}));

/* ─── Card Component ─── */
function Card3D({
  item,
  index,
  progress,
  total,
}: {
  item: (typeof cards)[0];
  index: number;
  progress: number;
  total: number;
}) {
  /** Angle: each card distributed evenly around 360° */
  const angle = (index / total) * Math.PI * 2;
  /** Rotate the whole ring based on scroll progress */
  const rotation = progress * Math.PI * 2;

  /* 3D position on a circle in the XY plane */
  const radius = 320;
  const x = Math.sin(angle + rotation) * radius;
  const z = Math.cos(angle + rotation) * radius - radius * 1.2;
  const isVisible = z > -50; // front-facing threshold

  const Icon = item.icon;

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `translateX(-50%) translateY(-50%) translateX(${x}px) translateZ(${z}px)`,
        willChange: "transform",
        opacity: isVisible ? Math.min(1, (z + radius * 1.5) / (radius * 2)) : 0,
        pointerEvents: isVisible ? "auto" : "none" as React.CSSProperties["pointerEvents"],
      }}
    >
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-[260px] rounded-2xl border border-border bg-surface-elevated p-6 shadow-medium transition-all duration-300 hover:shadow-strong hover:-translate-y-1"
        style={{ borderColor: isVisible ? "var(--border)" : "transparent" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ background: `color-mix(in srgb, ${item.color} 12%, transparent)` }}
          >
            <Icon className="h-5 w-5" style={{ color: item.color }} />
          </div>
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <h3 className="mt-4 text-base font-bold leading-snug text-foreground">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
          {item.problem}
        </p>

        {/* Result */}
        <div className="mt-4 rounded-xl border border-border bg-surface/60 p-3">
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand mb-1">
            Resultado
          </p>
          <p className="text-sm font-medium text-foreground leading-relaxed">
            {item.result}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border bg-[color-mix(in_srgb,var(--brand)_4%,transparent)] px-2 py-0.5 font-mono text-[10px] text-brand"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5 duration-200">
          Ver projeto
          <ArrowUpRight className="h-3.5 w-3.5 arrow-bounce" />
        </div>
      </a>
    </div>
  );
}

/* ─── Main Component ─── */
export function ScrollShowcase3D() {
  const sectionRef = useRef<HTMLElement>(null!);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rafRef = useRef<number>(0!);
  const currentRef = useRef(0);
  const targetRef = useRef(0);

  /* Check prefers-reduced-motion */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* Scroll handler with smooth lerp */
  const handleScroll = useCallback(() => {
    if (!sectionRef.current || reducedMotion) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const winH = window.innerHeight;
    const sectionH = rect.height;
    const offset = winH - rect.top;

    /* Progress: 0 when section bottom hits viewport bottom, 1 when top leaves viewport top */
    const raw = (winH - rect.top) / (winH + sectionH);
    targetRef.current = Math.max(0, Math.min(1, raw));
  }, [reducedMotion]);

  /* RAF animation loop */
  useEffect(() => {
    if (reducedMotion) {
      setProgress(0.5); /* midpoint static */
      return;
    }

    const animate = () => {
      currentRef.current = lerp(currentRef.current, targetRef.current, 0.08);
      if (Math.abs(currentRef.current - targetRef.current) > 0.0001) {
        setProgress(currentRef.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion]);

  /* Attach scroll listener */
  useEffect(() => {
    if (reducedMotion) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="showcase-3d"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Sticky container */}
      <div className="sticky top-0 min-h-screen">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-elevated to-surface" />

        {/* Decorative orbs */}
        <div
          className="orb absolute -top-40 -right-40 h-96 w-96"
          style={{ background: `color-mix(in srgb, var(--brand) 6%, transparent)` }}
        />
        <div
          className="orb absolute -bottom-40 -left-40 h-80 w-80"
          style={{ background: `color-mix(in srgb, var(--brand) 4%, transparent)` }}
        />

        {/* 3D scene */}
        <div
          className="relative flex min-h-screen items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* Center label */}
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center">
            <div className="text-center">
              <p className="text-label text-muted mb-2">Projetos em produção</p>
              <h2 className="text-heading font-semibold text-foreground text-gradient-brand">
                Gire para explorar
              </h2>
              <p className="mt-2 text-sm text-muted max-w-xs mx-auto">
                Arraste ou role para ver cada entrega em 3D
              </p>
            </div>
          </div>

          {/* 3D ring of cards */}
          <div
            className="relative h-[500px] w-[500px]"
            style={{
              transformStyle: "preserve-3d",
              transform: reducedMotion ? "none" : undefined,
            }}
          >
            {cards.map((item, i) => (
              <Card3D
                key={item.title}
                item={item}
                index={i}
                progress={progress}
                total={cards.length}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-label text-muted text-[9px]">Role para girar</span>
            <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5">
              <span
                className="h-1.5 w-0.5 rounded-full bg-muted animate-scroll-bounce"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer so the sticky has room to scroll */}
      <div className="h-[200vh]" />
    </section>
  );
}
