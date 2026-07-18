import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { faq } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-y scroll-mt-24">
      <div className="container-page">
        <FaqJsonLd />
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.heading}
          intro={faq.intro}
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faq.items.map((item, index) => (
            <Reveal key={index} delay={index * 50}>
              <details className="group rounded-lg border border-border bg-card px-5 transition-colors open:border-brand/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    className="size-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
