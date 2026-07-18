import { PhoneCall } from "lucide-react";
import { notfall } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function Notfall() {
  const telHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <section aria-labelledby="notfall-heading" className="section-y">
      <div className="container-page">
        <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-2xl bg-ink px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/25 blur-3xl"
          />
          <div className="relative flex items-start gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground">
              <PhoneCall className="size-6" aria-hidden />
            </span>
            <div className="flex flex-col gap-1.5">
              <h2
                id="notfall-heading"
                className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                {notfall.heading}
              </h2>
              <p className="max-w-xl text-white/75">{notfall.text}</p>
            </div>
          </div>
          <a
            href={telHref}
            className="btn-sheen relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-md bg-brand px-6 py-3 font-medium text-brand-foreground transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <PhoneCall className="size-4" aria-hidden />
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
