"use client";

/** 3D-style floating pharmacy / AI icons — purely decorative, desktop only */

/* ── Shared SVG defs helper ───────────────────────────────────────────── */
type SvgProps = { className?: string };

export function PillIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 96 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pill-l" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4DA6FF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#003A9B" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="pill-r" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(220,235,255,0.92)" />
          <stop offset="100%" stopColor="rgba(140,190,255,0.7)" />
        </linearGradient>
        <filter id="pill-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0033AA" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#pill-shadow)">
        {/* Left blue half */}
        <path d="M48 4 L19 4 Q4 4 4 19 Q4 34 19 34 L48 34 Z" fill="url(#pill-l)" />
        {/* Right white half */}
        <path d="M48 4 L77 4 Q92 4 92 19 Q92 34 77 34 L48 34 Z" fill="url(#pill-r)" />
        {/* Join seam */}
        <line x1="48" y1="4" x2="48" y2="34" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        {/* Top highlight */}
        <ellipse cx="33" cy="12" rx="11" ry="3.5" fill="rgba(255,255,255,0.28)" transform="rotate(-18 33 12)" />
      </g>
    </svg>
  );
}

export function MoleculeIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="mol-atom" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#60B0FF" />
          <stop offset="100%" stopColor="#0044BB" />
        </radialGradient>
        <radialGradient id="mol-center" cx="25%" cy="25%">
          <stop offset="0%" stopColor="#80C8FF" />
          <stop offset="100%" stopColor="#0055CC" />
        </radialGradient>
        <filter id="mol-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#mol-glow)">
        {/* Bonds */}
        {[
          [32, 32, 12, 14], [32, 32, 52, 14], [32, 32, 52, 50], [32, 32, 12, 50],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0066CC" strokeWidth="2" strokeOpacity="0.65" />
        ))}
        {/* Outer atoms */}
        {[[12, 14], [52, 14], [52, 50], [12, 50]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5.5" fill="url(#mol-atom)" fillOpacity="0.85" />
        ))}
        {/* Center atom */}
        <circle cx="32" cy="32" r="9" fill="url(#mol-center)" />
        {/* Center highlight */}
        <circle cx="28.5" cy="28.5" r="3" fill="rgba(255,255,255,0.4)" />
      </g>
    </svg>
  );
}

export function CrossIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cross-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3D9EFF" />
          <stop offset="100%" stopColor="#002D8A" />
        </linearGradient>
        <filter id="cross-shadow">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#001A66" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#cross-shadow)">
        {/* 3D shadow layer */}
        <rect x="22" y="8" width="16" height="40" rx="3" fill="rgba(0,15,60,0.45)" transform="translate(3,3)" />
        <rect x="8" y="22" width="40" height="16" rx="3" fill="rgba(0,15,60,0.45)" transform="translate(3,3)" />
        {/* Cross body */}
        <rect x="22" y="8" width="16" height="40" rx="3" fill="url(#cross-g)" />
        <rect x="8" y="22" width="40" height="16" rx="3" fill="url(#cross-g)" />
        {/* Highlight strip */}
        <rect x="22" y="8" width="6" height="40" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="8" y="22" width="40" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      </g>
    </svg>
  );
}

export function HexChipIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="hex-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A70D4" />
          <stop offset="100%" stopColor="#001848" />
        </linearGradient>
        <filter id="hex-glow">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#0066CC" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#hex-glow)">
        {/* Outer hex */}
        <path d="M32 5 L55 18.5 L55 45.5 L32 59 L9 45.5 L9 18.5 Z" fill="url(#hex-g)" />
        {/* Inner hex */}
        <path d="M32 15 L47 23.5 L47 40.5 L32 49 L17 40.5 L17 23.5 Z" fill="none" stroke="rgba(0,102,204,0.5)" strokeWidth="1.5" />
        {/* Connection dots */}
        {[[32, 5], [55, 18.5], [55, 45.5], [32, 59], [9, 45.5], [9, 18.5]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" fill="#0066CC" fillOpacity="0.8" />
        ))}
        {/* Center glow */}
        <circle cx="32" cy="32" r="6" fill="#0066CC" fillOpacity="0.7" />
        <circle cx="32" cy="32" r="3" fill="rgba(255,255,255,0.5)" />
        {/* Top highlight bevel */}
        <path d="M32 5 L55 18.5 L55 24 L32 11 L9 24 L9 18.5 Z" fill="rgba(255,255,255,0.1)" />
      </g>
    </svg>
  );
}

export function DnaIcon({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 32 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="dna-glow">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#dna-glow)">
        {/* Strand 1 */}
        <path d="M8 4 C22 12 10 24 22 32 C10 40 22 52 8 60 C10 62 12 64 14 68"
          stroke="#0066CC" strokeWidth="2.5" strokeOpacity="0.8" strokeLinecap="round" fill="none" />
        {/* Strand 2 */}
        <path d="M24 4 C10 12 22 24 10 32 C22 40 10 52 24 60 C22 62 20 64 18 68"
          stroke="#4DA6FF" strokeWidth="2.5" strokeOpacity="0.8" strokeLinecap="round" fill="none" />
        {/* Base pair rungs */}
        {[16, 24, 40, 48].map((y) => (
          <line key={y} x1="10" y1={y} x2="22" y2={y} stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
        ))}
      </g>
    </svg>
  );
}

/* ── Composition — all icons positioned in hero ──────────────────────── */
export function FloatingIcons() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] select-none overflow-hidden hidden lg:block"
      aria-hidden
    >
      {/* Pill — upper right */}
      <div
        className="float-a absolute right-[7%] top-[16%] opacity-[0.13]"
        style={{ "--dur": "15s", "--delay": "0s" } as React.CSSProperties}
      >
        <PillIcon className="h-16 w-auto" />
      </div>

      {/* DNA — mid right */}
      <div
        className="float-b absolute right-[12%] top-[40%] opacity-[0.1]"
        style={{ "--dur": "20s", "--delay": "3s" } as React.CSSProperties}
      >
        <DnaIcon className="h-24 w-auto" />
      </div>

      {/* Molecule — upper mid-right */}
      <div
        className="float-c absolute right-[28%] top-[22%] opacity-[0.09]"
        style={{ "--dur": "18s", "--delay": "7s" } as React.CSSProperties}
      >
        <MoleculeIcon className="h-16 w-16" />
      </div>

      {/* Medical cross — lower right */}
      <div
        className="float-d absolute bottom-[20%] right-[5%] opacity-[0.11]"
        style={{ "--dur": "22s", "--delay": "1.5s" } as React.CSSProperties}
      >
        <CrossIcon className="h-14 w-14" />
      </div>

      {/* Hex chip — mid right area */}
      <div
        className="float-a absolute right-[20%] bottom-[35%] opacity-[0.08]"
        style={{ "--dur": "25s", "--delay": "5s" } as React.CSSProperties}
      >
        <HexChipIcon className="h-20 w-20" />
      </div>
    </div>
  );
}
