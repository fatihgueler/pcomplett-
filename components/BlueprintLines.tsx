"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Dezente „Blueprint"-Leiterbahnen, die sich beim Scrollen in den Viewport
 * selbst zeichnen (stroke-dashoffset). Rein dekorativ (aria-hidden),
 * respektiert prefers-reduced-motion (siehe globals.css) und ist bewusst
 * zurückhaltend – passt zum Konzept „Ruhiger Maschinenraum".
 */
export function BlueprintLines({ className }: { className?: string }) {
  const ref = React.useRef<SVGSVGElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 600 300"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className={cn("blueprint", visible && "is-visible", className)}
    >
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path pathLength={1} d="M20 250 L20 90 L180 90 Q250 90 250 150 Q250 210 180 210 L90 210" />
        <path pathLength={1} d="M320 40 L320 160 L470 160 L470 260 L560 260" />
        <path pathLength={1} d="M20 170 L-40 170 M250 150 L360 150 L360 60" />
      </g>
      <g fill="currentColor">
        <circle cx="20" cy="250" r="4" />
        <circle cx="90" cy="210" r="4" />
        <circle cx="560" cy="260" r="4" />
        <circle cx="320" cy="40" r="4" />
      </g>
    </svg>
  );
}
