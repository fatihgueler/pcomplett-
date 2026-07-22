import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlueprintLines } from "@/components/BlueprintLines";
import { ctaBand } from "@/lib/content";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-brand px-6 py-14 sm:px-12 md:py-16">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/10 blur-2xl"
          />
          <BlueprintLines className="pointer-events-none absolute right-4 top-1/2 hidden h-64 w-auto -translate-y-1/2 text-white/30 md:block" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3">
              <h2
                id="cta-heading"
                className="max-w-2xl font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
              >
                {ctaBand.heading}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/85">
                {ctaBand.text}
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="shrink-0 bg-white text-brand shadow-sm hover:bg-white hover:text-brand-active"
            >
              <Link href={ctaBand.cta.href}>
                {ctaBand.cta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
