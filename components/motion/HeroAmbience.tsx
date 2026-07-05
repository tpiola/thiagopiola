"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Neurónios flutuantes com canvas — sutis, elegantes e perfomáticos */
function NeuronParticles() {
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

    type Neuron = {
      x: number;
      y: number;
      speedY: number;
      speedX: number;
      baseOpacity: number;
      somaRadius: number;
      dendriteCount: number;
      dendriteLength: number;
      phase: number; // for floating sine wobble
      pulsePhase: number; // for occasional pulse
      pulseSpeed: number;
    };

    const count = 13;

    const neurons: Neuron[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      speedY: 0.08 + Math.random() * 0.12,
      speedX: (Math.random() - 0.5) * 0.06,
      baseOpacity: 0.06 + Math.random() * 0.06, // 0.06–0.12
      somaRadius: 3 + Math.random() * 2, // 3–5px soma
      dendriteCount: 3 + Math.floor(Math.random() * 2), // 3–4 dendrites
      dendriteLength: 3 + Math.random() * 4, // 3–7px
      phase: Math.random() * Math.PI * 2,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.005 + Math.random() * 0.008,
    }));

    const drawNeuron = (
      ctx: CanvasRenderingContext2D,
      n: Neuron,
      currentOpacity: number,
    ) => {
      const { x, y, somaRadius, dendriteCount, dendriteLength } = n;
      const color = brand || "var(--brand)";

      ctx.save();
      ctx.globalAlpha = currentOpacity;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 1;

      // Draw dendrites
      const angleStep = (Math.PI * 2) / dendriteCount;
      const offset = Math.random() * 0.3; // slight randomness per frame for organic look
      for (let i = 0; i < dendriteCount; i++) {
        const angle = angleStep * i + offset;
        const endX = x + Math.cos(angle) * dendriteLength;
        const endY = y + Math.sin(angle) * dendriteLength;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Small terminal bulb at dendrite tip
        ctx.beginPath();
        ctx.arc(endX, endY, 1, 0, Math.PI * 2);
        ctx.fill();
      }

      // Soma (cell body)
      ctx.beginPath();
      ctx.arc(x, y, somaRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const draw = () => {
      ctx!.clearRect(0, 0, canvas!.clientWidth, canvas!.clientHeight);
      const w = canvas!.clientWidth;
      const h = canvas!.clientHeight;
      const now = Date.now();

      for (const n of neurons) {
        // Calculate floating wobble
        const wobbleX = Math.sin(now * 0.0003 + n.phase) * 3;
        // Calculate pulse — occasional brightness increase
        n.pulsePhase += n.pulseSpeed;
        const pulseFactor =
          Math.sin(n.pulsePhase) > 0.85
            ? 1 + (Math.sin(n.pulsePhase) - 0.85) * 6
            : 1;
        const opacity = Math.min(n.baseOpacity * pulseFactor, 0.25);

        drawNeuron(ctx!, n, opacity);

        // Movement
        n.y -= n.speedY;
        n.x += n.speedX + wobbleX * 0.01;

        // Reset when off-screen top
        if (n.y < -16) {
          n.y = h + 16;
          n.x = Math.random() * w;
        }
        // Wrap horizontally
        if (n.x < -16) n.x = w + 16;
        if (n.x > w + 16) n.x = -16;
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

      {/* Floating neurons canvas */}
      <NeuronParticles />

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
