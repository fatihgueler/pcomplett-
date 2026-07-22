"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

// Leaflet nur clientseitig laden (kein SSR) – spart Bundle und vermeidet
// window-Zugriffe auf dem Server.
const LeafletMap = dynamic(() => import("@/components/ui/leaflet-map"), {
  ssr: false,
  loading: () => <MapFallback />,
});

function MapFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-muted text-subtle-foreground">
      <MapPin className="size-8" aria-hidden />
    </div>
  );
}

/**
 * Lazy-Load-Wrapper: die Karte (und damit Leaflet + OSM-Kacheln) wird erst
 * geladen, wenn der Bereich in den Viewport kommt. So werden vor dem Sichtbar-
 * werden keinerlei externe Anfragen ausgelöst.
 */
export function MapLazy({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <div ref={ref} className={className}>
      {inView ? <LeafletMap /> : <MapFallback />}
    </div>
  );
}
