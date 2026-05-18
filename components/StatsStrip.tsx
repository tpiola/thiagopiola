"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { type StatItem, stats } from "@/lib/content";

function AnimatedCounter({ target, suffix = "", duration = 1.8 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setCount(target); return; }
    let frame = 0;
    const totalFrames = Math.round(duration * 60);
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (frame >= totalFrames) clearInterval(timer);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration, reduce]);

  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>;
}

function StatBlock({ s, i }: { s: StatItem; i: number }) {
  const reduce = useReducedMotion();
  const isText = !s.animate;

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
      className="flex flex-col px-6 py-8 sm:px-10 md:px-12"
    >
      {isText ? (
        <dt className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-black leading-tight tracking-tight text-foreground">
          {s.value}
        </dt>
      ) : (
        <dt className="text-[clamp(2.8rem,6vw,4rem)] font-black leading-none tracking-tighter text-foreground">
          <AnimatedCounter target={s.target ?? 0} suffix={s.suffix ?? ""} />
        </dt>
      )}
      <dd className="mt-2 max-w-[22ch] text-sm leading-snug text-muted">{s.label}</dd>
    </motion.div>
  );
}

export function StatsStrip() {
  return (
    <div className="border-b border-border bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        <dl className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <StatBlock key={s.value} s={s} i={i} />
          ))}
        </dl>
      </div>
    </div>
  );
}
