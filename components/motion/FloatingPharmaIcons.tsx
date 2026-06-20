"use client";
import { useEffect, useState } from "react";

interface PharmaItem {
  emoji: string;
  label: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const items: Omit<PharmaItem, 'x' | 'y'>[] = [
  { emoji: "💊", label: "Cápsula", size: 28, duration: 8, delay: 0 },
  { emoji: "💉", label: "Seringa", size: 24, duration: 11, delay: 1 },
  { emoji: "🌡️", label: "Termômetro", size: 22, duration: 9, delay: 2 },
  { emoji: "🔬", label: "Microscópio", size: 26, duration: 12, delay: 0.5 },
  { emoji: "🧪", label: "Frasco", size: 24, duration: 10, delay: 1.5 },
  { emoji: "🩺", label: "Estetoscópio", size: 26, duration: 13, delay: 3 },
  { emoji: "📋", label: "Prescrição", size: 22, duration: 8.5, delay: 2.5 },
  { emoji: "🏥", label: "Farmácia", size: 30, duration: 14, delay: 0.8 },
];

export function FloatingPharmaIcons() {
  const [positions, setPositions] = useState<PharmaItem[]>([]);

  useEffect(() => {
    setPositions(
      items.map((item) => ({
        ...item,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {positions.map((item, i) => (
        <div
          key={i}
          className="absolute select-none opacity-[0.08] dark:opacity-[0.06]"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            animation: `float-pharma ${item.duration}s ease-in-out ${item.delay}s infinite`,
            transform: `rotate(${i * 37}deg)`,
          }}
          title={item.label}
        >
          {item.emoji}
        </div>
      ))}
      <style jsx>{`
        @keyframes float-pharma {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(8deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-25px) rotate(3deg); }
        }
      `}</style>
    </div>
  );
}
