"use client";

import * as React from "react";

type Props = {
  /** Zielwert als Zahl. Nicht-numerische Werte werden unverändert angezeigt. */
  value: number;
  durationMs?: number;
  className?: string;
};

/**
 * Zählt beim ersten Sichtbarwerden von 0 auf den Zielwert hoch.
 * Respektiert prefers-reduced-motion (zeigt sofort den Endwert).
 */
export function CountUp({ value, durationMs = 1200, className }: Props) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const step = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / durationMs, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) raf = window.requestAnimationFrame(step);
        };
        raf = window.requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
