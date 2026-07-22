"use client";

import * as React from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * Tippt einen kurzen Text einmalig aus (Mono-Signatur der Hero-Eyebrow).
 * Bei prefers-reduced-motion wird der Text sofort vollständig gezeigt.
 */
export function TypingText({
  text,
  className,
  speedMs = 45,
}: {
  text: string;
  className?: string;
  speedMs?: number;
}) {
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = React.useState(0);
  const done = count >= text.length;

  React.useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return;
    }
    setCount(0);
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, speedMs);
    return () => clearInterval(id);
  }, [text, reduced, speedMs]);

  return (
    <span className={cn("type-caret", done && "type-done", className)}>
      {/* Voller Text für Screenreader, sichtbar wird nur der getippte Teil */}
      <span className="sr-only">{text}</span>
      <span aria-hidden>{text.slice(0, count)}</span>
    </span>
  );
}
