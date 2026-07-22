import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { blogPosts, aktionen } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Aktuelles – Neuigkeiten, Fachbeiträge & Aktionen",
  description:
    "Neuigkeiten, Fachbeiträge und aktuelle Aktionen von PComplett rund um IT-Betreuung, Server, Netzwerke und Telefonanlagen – für Unternehmen.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow="Aktuelles"
        title="Neuigkeiten, Fachbeiträge & Aktionen"
        subtitle="Praxisnah und verständlich – Wissenswertes aus dem Alltag im IT-Systemhaus, dazu gezielte Aktionen für Unternehmen."
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Aktuelles" }]}
      />

      {/* Aktionen */}
      <section aria-labelledby="aktionen-heading" className="section-y">
        <div className="container-page flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              <Tag className="size-4" aria-hidden />
              Aktionen
            </span>
            <h2
              id="aktionen-heading"
              className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Aktuelle Angebote für Unternehmen
            </h2>
          </div>

          {aktionen.length > 0 ? (
            <ul className="grid gap-5 md:grid-cols-2">
              {aktionen.map((aktion) => (
                <Reveal
                  as="li"
                  key={aktion.title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-brand/30 bg-brand-subtle p-6"
                >
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-xs font-medium text-brand-foreground">
                    <Tag className="size-3" aria-hidden />
                    {aktion.badge}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {aktion.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {aktion.description}
                  </p>
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-brand">
                    <CalendarClock className="size-4" aria-hidden />
                    {aktion.period}
                  </p>
                  <Link
                    href="/#rueckruf"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                  >
                    Rückruf zur Aktion anfordern
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Reveal>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-8">
              <p className="max-w-2xl leading-relaxed text-muted-foreground">
                Aktuell läuft keine gesonderte Aktion. Sprechen Sie uns gern auf
                passende Angebote für Ihren Betrieb an – etwa bei Serverwechsel,
                Arbeitsplatz-Rollout oder einem neuen Servicevertrag.
              </p>
              <Link
                href="/#rueckruf"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                Rückruf anfordern
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Blog / Fachbeiträge */}
      <section aria-labelledby="blog-heading" className="section-y bg-muted/50">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Fachbeiträge
            </span>
            <h2
              id="blog-heading"
              className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Wissen aus dem IT-Alltag
            </h2>
          </div>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal as="li" key={post.slug} delay={(index % 3) * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-glow group flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40"
                >
                  <div className="flex items-center gap-3 text-xs font-medium text-subtle-foreground">
                    <span className="rounded-full bg-brand-subtle px-2.5 py-1 text-brand">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" aria-hidden />
                      {post.readingMinutes} Min.
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                    {post.title}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <time
                      dateTime={post.date}
                      className="text-xs text-subtle-foreground"
                    >
                      {post.dateLabel}
                    </time>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Weiterlesen
                      <ArrowRight
                        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
