import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getIcon } from "@/lib/icons";
import { branchen } from "@/lib/content";

/**
 * Branchen-/Anwendungsfälle – Relevanz für Zielgruppen und SEO.
 */
export function Branchen() {
  return (
    <section
      id="branchen"
      aria-labelledby="branchen-heading"
      className="section-y scroll-mt-24"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow={branchen.eyebrow}
          title={branchen.heading}
          intro={branchen.intro}
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {branchen.items.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 4) * 80}
                className="flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
