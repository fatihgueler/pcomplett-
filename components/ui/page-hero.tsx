import type { LucideIcon } from "lucide-react";
import { Breadcrumbs } from "./breadcrumbs";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  breadcrumbs?: { label: string; href?: string }[];
};

/**
 * Einheitlicher Seitenkopf für Unterseiten – mit Aurora-Atmosphäre.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  breadcrumbs,
}: Props) {
  return (
    <section className="bg-aurora relative overflow-hidden border-b border-border">
      <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-60" />
      <div className="container-page relative flex flex-col gap-6 py-14 md:py-20">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}

        <div className="flex flex-col gap-5">
          {Icon ? (
            <span className="glass inline-flex size-14 items-center justify-center rounded-2xl text-brand">
              <Icon className="size-7" aria-hidden />
            </span>
          ) : null}

          {eyebrow ? (
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              <span aria-hidden className="h-px w-6 bg-brand" />
              {eyebrow}
            </span>
          ) : null}

          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
