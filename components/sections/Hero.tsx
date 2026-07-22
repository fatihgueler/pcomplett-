"use client";

import * as React from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlueprintLines } from "@/components/BlueprintLines";
import { TypingText } from "@/components/TypingText";
import { hero } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * Hero mit automatischem Bild-Karussell (shadcn/embla + Autoplay-Plugin).
 * - Autoplay ~5 s pro Slide, Endlosschleife, sanfte Überblendung (CSS-Crossfade).
 * - Bei prefers-reduced-motion wird kein Autoplay geladen (Karussell steht still).
 * - Über dem Karussell: Werbeslogan {{WERBESLOGAN}} mit Overlay für Lesbarkeit.
 * Die vier Slides sind 16:9-Platzhalter und lassen sich 1:1 austauschen.
 */
export function Hero() {
  const reduced = usePrefersReducedMotion();
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchDrag: false },
    reduced ? [] : [autoplay.current],
  );
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border bg-ink"
    >
      {/* Sichtbare Crossfade-Ebene (folgt dem Karussell-Index) */}
      <div aria-hidden className="absolute inset-0">
        {hero.slides.map((slide, index) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out motion-reduce:transition-none",
              index === selected ? "opacity-100" : "opacity-0",
            )}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        ))}
      </div>

      {/* Lesbarkeits-Overlay: ruhiger Navy-Scrim */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/80 to-ink/60"
      />
      <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-[0.15]" />

      {/* Dezente Blueprint-Linien, die sich beim Laden/Scrollen zeichnen */}
      <BlueprintLines className="pointer-events-none absolute -right-6 top-1/2 hidden h-[34rem] w-auto -translate-y-1/2 text-white/30 md:block" />

      {/* Embla-Engine-Ebene: treibt Timing/Index/Loop, visuell unsichtbar */}
      <div
        ref={emblaRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-0"
      >
        <div className="flex h-full">
          {hero.slides.map((slide) => (
            <div key={slide.src} className="min-w-0 shrink-0 grow-0 basis-full" />
          ))}
        </div>
      </div>

      {/* Inhalt */}
      <div className="container-page relative flex min-h-[30rem] flex-col items-start justify-center gap-6 py-20 md:min-h-[36rem] md:py-28">
        <span className="inline-flex items-center gap-2 rounded-sm border-l-2 border-brand bg-white/5 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/90">
          <span aria-hidden className="size-1.5 rounded-full bg-brand" />
          <TypingText text={hero.eyebrow} />
        </span>

        <h1
          id="hero-heading"
          className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {hero.slogan}
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-white/80">
          {hero.sublineFallback}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href={hero.primaryCta.href}>
              <PhoneCall className="size-4" aria-hidden />
              {hero.primaryCta.label}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/15 hover:text-white"
          >
            <Link href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>

        {/* Slide-Indikatoren */}
        <div className="mt-2 flex items-center gap-2" role="presentation">
          {hero.slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Zu Slide ${index + 1}`}
              aria-current={index === selected}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === selected ? "w-8 bg-brand" : "w-4 bg-white/40 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
