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
      viewBox="0 0 340 300"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className={cn("blueprint", visible && "is-visible", className)}
    >
      {/* Dezent als PC angedeutet: Monitor + Standfuß + Tower, als Leiterbahnen. */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Monitor-Rahmen + Zuleitung */}
        <path
          pathLength={1}
          d="M40 210 L40 60 Q40 46 54 46 L206 46 Q220 46 220 60 L220 176 Q220 190 206 190 L54 190 Q40 190 40 176 Z"
        />
        {/* Standfuß + Sockel */}
        <path pathLength={1} d="M130 190 L130 224 M96 232 L164 232" />
        {/* Tower + Verbindungs-/Anschlussbahnen */}
        <path
          pathLength={1}
          d="M220 118 L268 118 L268 250 L316 250 M268 118 L268 70 M40 130 L8 130"
        />
      </g>
      <g fill="currentColor">
        <circle cx="130" cy="118" r="3.5" />
        <circle cx="268" cy="118" r="3.5" />
        <circle cx="316" cy="250" r="3.5" />
        <circle cx="8" cy="130" r="3.5" />
      </g>
    </svg>
  );
}
