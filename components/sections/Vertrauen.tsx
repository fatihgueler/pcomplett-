import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatGrid } from "@/components/ui/stat-grid";
import { PartnerMarquee } from "@/components/ui/partner-marquee";
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
          <PartnerMarquee partners={trust.partners} />
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
