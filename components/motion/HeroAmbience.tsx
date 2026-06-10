"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Partículas flutuantes com canvas — sutis e perfomáticas */
function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduce) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const brand = getComputedStyle(document.documentElement)
      .getPropertyValue("--brand")
      .trim();

    type Particle = {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    };

    const particles: Particle[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      size: 2 + Math.random() * 2, // 2–4px
      speedY: 0.15 + Math.random() * 0.25, // sobe lentamente
      speedX: (Math.random() - 0.5) * 0.15,
      opacity: 0.1 + Math.random() * 0.05, // 0.1–0.15
    }));

    const draw = () => {
      ctx!.clearRect(0, 0, canvas!.clientWidth, canvas!.clientHeight);

      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = brand || "var(--brand)";
        ctx!.globalAlpha = p.opacity;
        ctx!.fill();

        p.y -= p.speedY;
        p.x += p.speedX;

        // Reset when off-screen top
        if (p.y < -p.size) {
          p.y = canvas!.clientHeight + p.size;
          p.x = Math.random() * canvas!.clientWidth;
        }
        // Wrap horizontally
        if (p.x < -p.size) p.x = canvas!.clientWidth + p.size;
        if (p.x > canvas!.clientWidth + p.size) p.x = -p.size;
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

/** Orbes e grade ambiental premium com parallax suave — versão Black Label */
export function HeroAmbience() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 600], [0, 80]);
  const yFast = useTransform(scrollY, [0, 600], [0, 150]);
  const yMedium = useTransform(scrollY, [0, 600], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.15]);

  if (reduce) {
    return (
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, color-mix(in srgb, var(--brand) 20%, transparent), transparent)",
        }}
      />
    );
  }

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity }}
      aria-hidden
    >
      {/* Primary orb — large left */}
      <motion.div
        className="absolute -left-[15%] top-[5%] h-[min(600px,75vw)] w-[min(600px,75vw)] rounded-full"
        style={{
          y: ySlow,
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand) 40%, transparent) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.45,
        }}
        animate={{ scale: [1, 1.06, 1], x: [0, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary orb — right mid */}
      <motion.div
        className="absolute -right-[10%] top-[30%] h-[min(450px,60vw)] w-[min(450px,60vw)] rounded-full"
        style={{
          y: yFast,
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand-light) 35%, transparent) 0%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0.28,
        }}
        animate={{ scale: [1, 1.08, 1], x: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Accent orb — bottom center */}
      <motion.div
        className="absolute left-[35%] bottom-[10%] h-[min(280px,40vw)] w-[min(280px,40vw)] rounded-full"
        style={{
          y: yMedium,
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand) 30%, transparent) 0%, transparent 70%)",
          filter: "blur(70px)",
          opacity: 0.2,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Top radial fade */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, color-mix(in srgb, var(--brand) 28%, transparent), transparent)",
        }}
      />

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 65% at 50% 25%, black, transparent)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles canvas */}
      <FloatingParticles />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.15) 100%)",
        }}
      />
    </motion.div>
  );
}
