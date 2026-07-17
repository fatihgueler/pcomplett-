import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatGrid } from "@/components/ui/stat-grid";
import { trust } from "@/lib/content";

export function Vertrauen() {
  return (
    <section
      id="vertrauen"
      aria-labelledby="vertrauen-heading"
      className="section-y scroll-mt-24 bg-muted/50"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow={trust.eyebrow}
          title={trust.heading}
          intro={trust.intro}
        />

        {/* Partner-Logos */}
        <Reveal className="mt-12 flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
            {trust.partnerHeading}
          </span>
          <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-4">
            {trust.partners.map((partner, index) => (
              <li key={index} className="flex items-center justify-center sm:justify-start">
                {/* Text-Platzhalter durch echte Logos (next/image) ersetzen */}
                <span className="font-display text-xl font-semibold text-subtle-foreground grayscale transition-all duration-200 hover:text-brand hover:grayscale-0">
                  {partner}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Kennzahlen */}
        <Reveal className="mt-12">
          <StatGrid stats={trust.stats} />
        </Reveal>

        {/* Kundenstimmen */}
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {trust.testimonials.map((testimonial, index) => (
            <Reveal
              as="li"
              key={index}
              delay={index * 90}
              className="flex h-full flex-col gap-5 rounded-lg border border-border bg-card p-6"
            >
              <Quote className="size-7 text-brand" aria-hidden />
              <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                {testimonial.quote}
              </blockquote>
              <footer className="mt-1 border-t border-border pt-4">
                <p className="font-semibold text-ink">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
