"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, Play, VolumeX } from "lucide-react";

interface VideoHeroProps {
  headline: React.ReactNode;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  videoSrc?: string;
}

export default function VideoHero({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  videoSrc = "https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_25fps.mp4",
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.addEventListener("canplay", () => setVideoLoaded(true));
  }, []);

  const isExternal = (href: string) =>
    href.startsWith("http") || href.startsWith("//");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-950/80 via-emerald-950/60 to-gray-950/70"
        aria-hidden="true"
      />

      {/* Fallback gradient when video not loaded */}
      {!videoLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-gray-900 to-teal-950"
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Thiago B. G. Piola · CRF/SP 58.519
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {isExternal(ctaPrimary.href) ? (
              <a
                href={ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-center shadow-lg shadow-emerald-900/50 hover:scale-105"
              >
                {ctaPrimary.label}
              </a>
            ) : (
              <Link
                href={ctaPrimary.href}
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-center shadow-lg shadow-emerald-900/50 hover:scale-105"
              >
                {ctaPrimary.label}
              </Link>
            )}

            {ctaSecondary && (
              isExternal(ctaSecondary.href) ? (
                <a
                  href={ctaSecondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm"
                >
                  {ctaSecondary.label}
                </a>
              ) : (
                <Link
                  href={ctaSecondary.href}
                  className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm"
                >
                  {ctaSecondary.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce z-10"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
