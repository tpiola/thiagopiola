import React from "react";

interface SectionHeaderProps {
  tag?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center mx-auto" : "";
  const tagColor = light ? "text-emerald-400" : "text-emerald-600";
  const titleColor = light ? "text-white" : "text-gray-900";
  const descColor = light ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`max-w-2xl mb-16 ${textAlign}`}>
      {tag && (
        <p className={`font-semibold text-sm uppercase tracking-widest mb-3 ${tagColor}`}>
          {tag}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 leading-tight ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`leading-relaxed text-lg ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
