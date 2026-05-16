import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ index, children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted",
        className,
      )}
    >
      <span className="text-accent">{index}</span>
      <span className="mx-2 text-border">/</span>
      {children}
    </p>
  );
}
