"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/* ─── Card3DTilt ─────────────────────────────────────────────────
 *   Wrapper que aplica rotação 3D seguindo o cursor do mouse.
 *   - Rotação em X e Y: max 8 graus (sutil)
 *   - Z-offset: 20px no hover
 *   - Brilho especular que segue o cursor
 *   - GPU acelerado (transform + will-change)
 *   - Desativa se o usuário prefere reduced motion
 * ─────────────────────────────────────────────────────────────────── */

interface Card3DTiltProps {
  children: ReactNode;
  className?: string;
  /** Max rotation angle in degrees (default: 6) */
  maxTilt?: number;
  /** Scale on hover (default: 1.01) */
  scale?: number;
  /** Z-axis lift on hover in px (default: 12) */
  lift?: number;
  /** Apply perspective to parent (default: true) */
  perspective?: boolean;
}

export function Card3DTilt({
  children,
  className = "",
  maxTilt = 6,
  scale = 1.01,
  lift = 12,
  perspective = true,
}: Card3DTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const translateZ = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });
  const springZ = useSpring(translateZ, { stiffness: 400, damping: 35 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const px = (e.clientX - cx) / (rect.width / 2);  // -1 to 1
    const py = (e.clientY - cy) / (rect.height / 2); // -1 to 1

    rotateY.set(px * maxTilt);
    rotateX.set(-py * maxTilt);
    translateZ.set(lift);

    // Glow highlight follows cursor
    glowX.set((px + 1) * 50);
    glowY.set((py + 1) * 50);
  }

  function handleMouseLeave() {
    if (reduce) return;
    rotateX.set(0);
    rotateY.set(0);
    translateZ.set(0);
    glowX.set(50);
    glowY.set(50);
  }

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: springRotateX,
        rotateY: springRotateY,
        translateZ: springZ,
        willChange: "transform",
      }}
      whileHover={{ scale }}
      transition={{ scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Specular highlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
        style={{
          background:
            "radial-gradient(circle at " + glowX.get() + "% " + glowY.get() + "%, rgba(255,255,255,0.04) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      {perspective && (
        <div style={{ transformStyle: "preserve-3d" }}>{children}</div>
      )}
      {!perspective && children}
    </motion.div>
  );
}
