import * as React from "react";

type Props = {
  title: string;
  intro?: string;
  children: React.ReactNode;
};

/**
 * Einheitliches Layout für Rechtsseiten (Impressum, Datenschutz, AGB).
 * Linksbündige, gut lesbare Typografie mit klarer Hierarchie.
 */
export function LegalPage({ title, intro, children }: Props) {
  return (
    <article className="section-y">
      <div className="container-page max-w-3xl">
        <header className="flex flex-col gap-4 border-b border-border pb-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          {intro ? (
            <p className="text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          ) : null}
        </header>

        <div className="legal-prose mt-8 flex flex-col gap-8">{children}</div>
      </div>
    </article>
  );
}

/** Abschnitt innerhalb einer Rechtsseite. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-xl font-semibold text-ink">{heading}</h2>
      <div className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </section>
  );
}

/**
 * Deutlich markierter Platzhalter-Hinweis, damit offene Stellen sichtbar sind.
 */
export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-md border border-dashed border-brand/40 bg-brand-subtle px-4 py-3 text-sm text-brand">
      {children}
    </p>
  );
}
