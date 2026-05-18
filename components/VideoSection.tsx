"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface VideoSectionProps {
  /** Path to video file, e.g. /videos/mid-loop.mp4 */
  src: string;
  /** Optional poster image shown before video loads */
  poster?: string;
  /** Extra classes for the outer <section> */
  className?: string;
  /** Extra classes for the gradient overlay */
  overlayClassName?: string;
  /** Video opacity (0–1). Default 0.22 */
  opacity?: number;
  children?: ReactNode;
}

export function VideoSection({
  src,
  poster,
  className,
  overlayClassName,
  opacity = 0.22,
  children,
}: VideoSectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-black", className)}>
      {/* Background video */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          style={{ opacity }}
          className="h-full w-full object-cover"
          src={src}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85",
            overlayClassName,
          )}
        />
      </div>

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 100% at 50% 50%, black, transparent)",
        }}
        aria-hidden
      />

      {/* Content layer */}
      {children && (
        <div className="relative z-10 flex min-h-full flex-col items-center justify-center">
          {children}
        </div>
      )}
    </section>
  );
}
