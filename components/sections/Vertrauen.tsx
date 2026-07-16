import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
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

        {/* Kennzahlen auf kontrastreichem Panel */}
        <Reveal className="mt-12">
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-ink bg-border/60 sm:grid-cols-3">
            {trust.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 bg-ink p-8 text-center sm:text-left"
              >
                <dt className="order-2 text-sm font-medium uppercase tracking-wide text-white/60">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-4xl font-bold text-white [overflow-wrap:anywhere] sm:text-5xl">
                  {stat.value}
                  <span className="text-brand">{stat.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>
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
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
