"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Verzögerung in ms für gestaffelte Effekte */
  delay?: number;
  as?: "div" | "li" | "section";
};

/**
 * Einmaliger Fade-in/Slide-up beim Scrollen, threshold-basiert via IntersectionObserver.
 * Respektiert prefers-reduced-motion (CSS blendet den Effekt dann aus) und
 * zeigt Inhalte auch ohne JS/Observer garantiert an.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Comp = as;
  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}
