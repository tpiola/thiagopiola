"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  className?: string;
};

/** Métricas com contagem animada quando entram na viewport */
export function CountUp({ value, className }: CountUpProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const isPureNumber = /^\d+$/.test(value);
  const hasNumber = isPureNumber && !Number.isNaN(numeric);

  const [count, setCount] = useState(hasNumber ? 0 : null);

  useEffect(() => {
    if (!hasNumber || reduce || !inView) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1100;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(numeric * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hasNumber, inView, numeric, reduce]);

  if (!hasNumber || reduce) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
