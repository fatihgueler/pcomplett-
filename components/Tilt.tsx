"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Maximaler Neigungswinkel in Grad. */
  max?: number;
};

/**
 * Dezentes 3D-Tilt: die Karte neigt sich leicht zur Mausposition.
 * Respektiert prefers-reduced-motion (dann statisch) und ist rein transform-basiert.
 */
export function Tilt({ children, className, max = 5 }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(!reduce && finePointer);
  }, []);

  function handleMove(e: React.MouseEvent) {
    const node = ref.current;
    if (!node || !enabled) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--tilt-y", `${(px * max).toFixed(2)}deg`);
    node.style.setProperty("--tilt-x", `${(-py * max).toFixed(2)}deg`);
  }

  function reset() {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--tilt-x", "0deg");
    node.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div
      ref={ref}
      onMouseMove={enabled ? handleMove : undefined}
      onMouseLeave={enabled ? reset : undefined}
      className={cn(enabled && "tilt", className)}
    >
      {children}
    </div>
  );
}
