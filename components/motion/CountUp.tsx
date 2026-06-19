"use client";

import { animate, useInView, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: string;
  className?: string;
};

/** Extrai prefixo, valor numérico e sufixo de strings como "15", "100%".
 *  Retorna null para valores como "1/14.000" ou "Ativa" (não animáveis). */
function parseNumeric(value: string): { prefix: string; numeric: number; suffix: string } | null {
  const match = value.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
  if (!match) return null;
  const numeric = parseInt(match[2], 10);
  if (Number.isNaN(numeric)) return null;
  return { prefix: match[1], numeric, suffix: match[3] };
}

/** Métricas com contagem animada (useMotionValue + animate) quando entram na viewport */
export function CountUp({ value, className }: CountUpProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const parsed = parseNumeric(value);

  useEffect(() => {
    if (!parsed || reduce || !inView || !ref.current) return;

    const controls = animate(motionValue, parsed.numeric, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${parsed.prefix}${Math.round(latest)}${parsed.suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, motionValue, parsed, reduce]);

  if (!parsed || reduce) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}0{parsed.suffix}
    </span>
  );
}
