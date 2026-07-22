"use client";

import * as React from "react";

/**
 * Liefert true, wenn der Nutzer „prefers-reduced-motion: reduce" gesetzt hat.
 * Wird u. a. genutzt, um das Hero-Karussell-Autoplay zu pausieren.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}
