"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  /** Positiv = bewegt sich langsamer (nach oben beim Scrollen). Typisch 0.1–0.4. */
  speed?: number;
  className?: string;
};

/**
 * Dezente Scroll-Parallax auf Deko-Elementen.
 * Nur transform (compositor-freundlich), rAF-gedrosselt, respektiert
 * prefers-reduced-motion (dann komplett statisch).
 */
export function Parallax({ children, speed = 0.2, className }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const distance = rect.top + rect.height / 2 - viewportCenter;
      const offset = -(distance * speed);
      node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-parallax", className)}>
      {children}
    </div>
  );
}
