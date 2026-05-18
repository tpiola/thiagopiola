"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/content";

export function StatsStrip() {
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-border bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        <dl className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col px-6 py-8 sm:px-10 md:px-12"
            >
              <dt className="text-[clamp(2.8rem,6vw,4rem)] font-black leading-none tracking-tighter text-foreground">
                {s.value}
              </dt>
              <dd className="mt-2 max-w-[18ch] text-sm leading-snug text-muted">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
