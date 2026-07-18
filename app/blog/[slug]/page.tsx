import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/CtaBand";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Aktuelles", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section-y">
        <div className="container-page max-w-3xl">
          <div className="mb-8 flex items-center gap-3 border-b border-border pb-6 text-sm text-subtle-foreground">
            <time dateTime={post.date}>{post.dateLabel}</time>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden />
              {post.readingMinutes} Min. Lesezeit
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {post.content.map((section, index) => (
              <section key={index} className="flex flex-col gap-3">
                {section.heading ? (
                  <h2 className="font-display text-xl font-semibold text-ink">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Button asChild variant="ghost">
              <Link href="/blog">
                <ArrowLeft className="size-4" aria-hidden />
                Alle Beiträge
              </Link>
            </Button>
            <Button asChild>
              <Link href="/kontakt">Beratung anfragen</Link>
            </Button>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
