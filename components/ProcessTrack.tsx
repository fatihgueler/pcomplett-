"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Dezente horizontale Fortschrittslinie hinter den Prozess-Schritten.
 * Füllt sich einmalig von links nach rechts, sobald der Bereich beim
 * Scrollen in den Viewport kommt. Nur ab lg sichtbar (dort, wo die vier
 * Schritte nebeneinander stehen); respektiert prefers-reduced-motion.
 */
export function ProcessTrack({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [filled, setFilled] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setFilled(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setFilled(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-6 top-10 hidden h-px bg-border-strong lg:block",
        className,
      )}
    >
      <div
        className={cn(
          "h-full origin-left scale-x-0 bg-brand transition-transform duration-[1400ms] ease-out",
          filled && "scale-x-100",
        )}
      />
    </div>
  );
}
