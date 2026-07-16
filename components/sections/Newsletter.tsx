import { Reveal } from "@/components/Reveal";
import { NewsletterForm } from "@/components/NewsletterForm";
import { newsletter } from "@/lib/content";

export function Newsletter() {
  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="section-y"
    >
      <div className="container-page">
        <Reveal className="grid gap-8 rounded-2xl border border-border bg-muted/50 p-8 md:grid-cols-2 md:items-center md:gap-12 md:p-12">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              {newsletter.eyebrow}
            </span>
            <h2
              id="newsletter-heading"
              className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              {newsletter.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {newsletter.text}
            </p>
          </div>
          <NewsletterForm />
        </Reveal>
      </div>
    </section>
  );
}
