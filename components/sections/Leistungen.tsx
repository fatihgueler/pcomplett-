import {
  Network,
  Code2,
  Palette,
  LifeBuoy,
  AppWindow,
  Workflow,
  Boxes,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Network,
  Code2,
  Palette,
  LifeBuoy,
  AppWindow,
  Workflow,
  Boxes,
};

export function Leistungen() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-heading"
      className="section-y scroll-mt-24"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Leistungen"
          title="Alles rund um Ihre IT – aus einer Hand"
          intro="Sieben Kompetenzfelder, ein Ansprechpartner. Wir kombinieren sie passgenau zu einer Lösung, die zu Ihrem Unternehmen passt."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Boxes;
            const headingId = `leistung-${index}`;
            return (
              <Reveal
                as="li"
                key={service.title}
                delay={(index % 3) * 80}
                className="group relative flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_44px_-24px_rgba(13,14,17,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <ArrowUpRight
                    className="size-5 text-subtle-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <h3
                  id={headingId}
                  className="font-display text-xl font-semibold tracking-tight text-ink"
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
