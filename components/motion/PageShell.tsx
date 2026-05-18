"use client";

import type { ReactNode } from "react";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <SmoothScroll>
      <ScrollProgress />
      {children}
    </SmoothScroll>
  );
}
