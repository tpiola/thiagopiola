"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ─── Floating3DShapes ──────────────────────────────────────────────
 *   Formas geométricas 3D no background do hero.
 *   - CSS 3D transforms (rotateX, rotateY, translateZ)
 *   - Opacidade ultra-baixa (0.03-0.06) — quase imperceptível
 *   - Giro lento infinito (~30s por ciclo)
 *   - Reduz motion se o usuário preferir
 *   - Zero interação, zero distração
 * ──────────────────────────────────────────────────────────────────── */

const SHAPES = [
  { type: "hexagon", size: 280, top: "15%", left: "5%", duration: 35, delay: 0, depth: -80, opacity: 0.04 },
  { type: "circle", size: 200, top: "55%", right: "8%", duration: 40, delay: 5, depth: -120, opacity: 0.03 },
  { type: "triangle", size: 160, top: "70%", left: "15%", duration: 30, delay: 10, depth: -60, opacity: 0.05 },
  { type: "diamond", size: 120, top: "25%", right: "25%", duration: 45, delay: 2, depth: -150, opacity: 0.035 },
] as const;

function PolygonShape({ size, className }: { size: number; className: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden>
      <polygon
        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function Floating3DShapes() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: "800px" }}
      aria-hidden
    >
      {SHAPES.map((shape, i) => {
        const isFirst = i === 0; // preload first shape

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: shape.top,
              left: "left" in shape ? shape.left : undefined,
              right: "right" in shape ? shape.right : undefined,
              transformStyle: "preserve-3d",
            }}
            animate={
              isFirst
                ? {
                    rotateX: [0, 15, 0, -15, 0],
                    rotateY: [0, -20, 0, 20, 0],
                    rotateZ: [0, 5, -3, 8, 0],
                    x: [0, 8, -5, 10, 0],
                    y: [0, -10, 5, -8, 0],
                  }
                : undefined
            }
            transition={
              isFirst
                ? {
                    duration: shape.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: shape.delay,
                  }
                : undefined
            }
          >
            {isFirst && (
              <div
                className="flex items-center justify-center"
                style={{
                  width: shape.size,
                  height: shape.size,
                  color: "var(--brand)",
                  opacity: shape.opacity,
                  transform: `translateZ(${shape.depth}px)`,
                }}
              >
                <PolygonShape size={shape.size} className="w-full h-full" />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── Floating3DShapesLazy ───────────────────────────────────────────
 *   Versão lazy que só renderiza após o hero estar visível (viewport).
 *   Usado para shapes secundários que podem carregar depois.
 * ──────────────────────────────────────────────────────────────────── */

export function Floating3DShapesLazy() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce]);

  if (reduce) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: "800px", opacity: 0, transition: "opacity 1s ease" }}
      aria-hidden
    >
      {SHAPES.slice(1).map((shape, i) => (
        <motion.div
          key={i + 1}
          className="absolute"
          style={{
            top: shape.top,
            left: "left" in shape ? shape.left : undefined,
            right: "right" in shape ? shape.right : undefined,
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: [0, 12, 0, -12, 0],
            rotateY: [0, -18, 0, 18, 0],
            rotateZ: [0, 4, -2, 6, 0],
            x: [0, 6, -4, 8, 0],
            y: [0, -8, 4, -6, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: shape.size,
              height: shape.size,
              color: "var(--brand)",
              opacity: shape.opacity,
              transform: `translateZ(${shape.depth}px)`,
            }}
          >
            {i === 0 && (
              <div
                style={{
                  width: shape.size * 0.5,
                  height: shape.size * 0.5,
                  border: "0.5px solid currentColor",
                  borderRadius: "50%",
                }}
              />
            )}
            {i === 1 && <PolygonShape size={shape.size} className="w-full h-full" />}
            {i === 2 && (
              <div
                style={{
                  width: shape.size * 0.6,
                  height: shape.size * 0.6,
                  border: "0.5px solid currentColor",
                  transform: "rotate(45deg)",
                }}
              />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
