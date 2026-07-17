import Link from "next/link";
import { Check, ShieldCheck, Activity, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Parallax } from "@/components/Parallax";
import { hero } from "@/lib/content";

const statusItems = [
  { icon: Activity, label: "Systeme", value: "Online", tone: "ok" },
  { icon: ShieldCheck, label: "Backup", value: "Aktuell", tone: "ok" },
  { icon: Headset, label: "Support", value: "Erreichbar", tone: "ok" },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-aurora relative overflow-hidden border-b border-border"
    >
      {/* Atmosphäre: Punkt-Raster + weicher Marken-Schimmer */}
      <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-70" />
      <div
        aria-hidden
        className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-subtle blur-3xl"
      />

      <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        {/* Textspalte */}
        <div className="flex flex-col items-start gap-6">
          <span className="hero-rise hero-rise-1 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            {hero.eyebrow}
          </span>

          <h1
            id="hero-heading"
            className="hero-rise hero-rise-1 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            {hero.headlineLead}{" "}
            <span className="text-gradient-brand">{hero.headlineAccent}</span>
          </h1>

          <p className="hero-rise hero-rise-2 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.subline}
          </p>

          <div className="hero-rise hero-rise-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </div>

          <ul className="hero-rise hero-rise-4 mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {hero.highlights.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <Check className="size-4 text-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Dekorative Verlässlichkeits-Karte (rein visuell) */}
        <Parallax
          speed={0.12}
          className="hero-rise hero-rise-3 relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div aria-hidden className="glass absolute -left-6 -top-6 hidden h-24 w-24 rounded-2xl sm:block" />
          <div
            aria-hidden
            className="glass-strong relative rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="font-display text-sm font-semibold text-ink">
                IT-Statusübersicht
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-subtle px-2.5 py-1 text-xs font-medium text-brand">
                <span className="size-1.5 animate-pulse rounded-full bg-brand" />
                Live
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {statusItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/40 px-4 py-3"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-medium text-foreground">
                    <item.icon className="size-4 text-brand" />
                    {item.label}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    {item.value}
                    <span className="size-2 rounded-full bg-emerald-500" />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-lg bg-ink px-4 py-3 text-sm text-white/90">
              <span className="font-medium text-white">Rundum betreut</span> –
              wir behalten Ihre IT im Blick, damit Sie sich auf Ihr Geschäft
              konzentrieren können.
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
