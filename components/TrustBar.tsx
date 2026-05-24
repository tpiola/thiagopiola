"use client";

import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { trustBar } from "@/lib/content";
import { Reveal } from "./motion/Reveal";

/** Prova social verificável — leitura em ~10 segundos */
export function TrustBar() {
  return (
    <section
      className="border-b border-border bg-surface-elevated/60 backdrop-blur-sm"
      aria-label="Credenciais verificáveis"
    >
      <div className="mx-auto max-w-6xl px-5 py-6 md:px-8 md:py-8">
        <Reveal variant="fade">
          <ul className="grid gap-4 sm:grid-cols-3">
            {trustBar.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-[var(--brand)]/35"
                  >
                    <TrustIcon />
                    <TrustCopy label={item.label} detail={item.detail} linked />
                  </a>
                ) : (
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                    <TrustIcon />
                    <TrustCopy label={item.label} detail={item.detail} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function TrustIcon() {
  return (
    <div
      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
      style={{ background: "color-mix(in srgb, var(--brand) 12%, transparent)" }}
    >
      <ShieldCheck className="h-4 w-4 text-[var(--brand)]" aria-hidden />
    </div>
  );
}

function TrustCopy({ label, detail, linked }: { label: string; detail: string; linked?: boolean }) {
  return (
    <div className="min-w-0">
      <p className="flex items-center gap-1 text-sm font-semibold text-foreground">
        {label}
        {linked && (
          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-70" />
        )}
      </p>
      <p className="mt-0.5 text-xs text-muted">{detail}</p>
    </div>
  );
}
