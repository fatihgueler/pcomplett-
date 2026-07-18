import Link from "next/link";
import { Building2, UserRound, ArrowRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Tilt } from "@/components/Tilt";
import { entryCards } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = { Building2, UserRound };

export function EntryCards() {
  return (
    <section aria-label="Einstieg nach Zielgruppe" className="section-y">
      <div className="container-page">
        <ul className="grid gap-5 md:grid-cols-2">
          {entryCards.map((card, index) => {
            const Icon = iconMap[card.icon] ?? Building2;
            return (
              <Reveal as="li" key={card.title} delay={index * 90} className="h-full">
                <Tilt className="h-full">
                <Link
                  href={card.cta.href}
                  className="card-glow group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {card.title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-brand">
                    {card.cta.label}
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
                </Tilt>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
