import React from "react";
import Image from "next/image";

interface PageHeroProps {
  tag: string;
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  color?: "emerald" | "blue" | "purple" | "amber" | "rose";
}

const colorMap = {
  emerald: "from-emerald-950 via-emerald-900 to-teal-950",
  blue: "from-blue-950 via-blue-900 to-indigo-950",
  purple: "from-purple-950 via-purple-900 to-indigo-950",
  amber: "from-amber-950 via-orange-900 to-red-950",
  rose: "from-rose-950 via-pink-900 to-red-950",
};

const tagColorMap = {
  emerald: "bg-emerald-500/20 border-emerald-500/40 text-emerald-300",
  blue: "bg-blue-500/20 border-blue-500/40 text-blue-300",
  purple: "bg-purple-500/20 border-purple-500/40 text-purple-300",
  amber: "bg-amber-500/20 border-amber-500/40 text-amber-300",
  rose: "bg-rose-500/20 border-rose-500/40 text-rose-300",
};

export default function PageHero({
  tag,
  title,
  description,
  imageSrc,
  imageAlt,
  color = "emerald",
}: PageHeroProps) {
  return (
    <section
      className={`relative min-h-[60vh] flex items-end bg-gradient-to-br ${colorMap[color]} pt-16 overflow-hidden`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover opacity-30"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32">
        <div
          className={`inline-flex items-center gap-2 border text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest backdrop-blur-sm ${tagColorMap[color]}`}
        >
          {tag}
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
          {title}
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
