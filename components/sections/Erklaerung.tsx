"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "@/components/ui/section-heading";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { erklaerSlides } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Erklär-Abschnitte als Bild-Karussell (shadcn/embla + Autoplay-Plugin).
 * Fehlende Bilder sind 16:9-Platzhalter, vom Kunden austauschbar.
 */
export function Erklaerung() {
  const reduced = usePrefersReducedMotion();
  const autoplay = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  return (
    <section
      aria-labelledby="erklaerung-heading"
      className="section-y scroll-mt-24"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="So arbeiten wir"
          title="Was das im Betrieb konkret bedeutet"
          intro="Vier Einblicke, wie wir Systeme absichern, Standorte verbinden und im Ernstfall schnell zur Stelle sind."
        />

        <Carousel
          className="mt-12"
          opts={{ loop: true, align: "start" }}
          plugins={reduced ? [] : [autoplay.current]}
        >
          <CarouselContent className="-ml-5">
            {erklaerSlides.map((slide) => (
              <CarouselItem key={slide.placeholder} className="pl-5 md:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-4">
                  <MediaPlaceholder label={slide.placeholder} ratio="video" className="w-full" />
                  <figcaption className="flex flex-col gap-2 px-1 pb-1">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {slide.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {slide.text}
                    </p>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-center gap-3">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
