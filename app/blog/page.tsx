import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Aktuelles – Tipps zu IT & KI",
  description:
    "Praxisnahe Beiträge von PComplett zu IT, KI und Technik – verständlich erklärt, für Unternehmen und Privatkunden.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow="Aktuelles"
        title="Tipps & Wissen zu IT und KI"
        subtitle="Praxisnah und verständlich – was wir aus dem Alltag im IT- und KI-Systemhaus weitergeben können."
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Aktuelles" }]}
      />

      <section className="section-y">
        <div className="container-page">
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
