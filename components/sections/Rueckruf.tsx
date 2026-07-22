import { PhoneCall, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { RueckrufFormular } from "@/components/RueckrufFormular";
import { ContactMedia } from "@/components/ui/contact-media";
import { rueckruf } from "@/lib/content";
import { siteConfig } from "@/lib/site";

/**
 * Rückrufservice mit Terminwunsch – primärer Kontaktweg der Startseite
 * (es gibt keine anklickbaren Kontaktdaten mehr).
 * Daneben E-Mail und Telefon als eigenständige Bild-Module (nicht verlinkt).
 */
export function Rueckruf() {
  return (
    <section
      id="rueckruf"
      aria-labelledby="rueckruf-heading"
      className="section-y scroll-mt-24 bg-muted/50"
    >
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              <span aria-hidden className="h-px w-6 bg-brand" />
              {rueckruf.eyebrow}
            </span>
            <h2
              id="rueckruf-heading"
              className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              {rueckruf.heading}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              {rueckruf.text}
            </p>
          </div>

          {/* E-Mail & Telefon als eigenständige Bild-Module (nicht verlinkt) */}
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <span className="text-sm font-semibold text-ink">
              Sie erreichen uns auch direkt
            </span>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                <PhoneCall className="size-5" aria-hidden />
              </span>
              <ContactMedia kind="telefon" label="Telefon" />
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                <Mail className="size-5" aria-hidden />
              </span>
              <ContactMedia kind="email-service" label="E-Mail" />
            </div>
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 shrink-0 text-brand" aria-hidden />
              {siteConfig.openingHours}
            </p>
          </div>
        </div>

        <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <RueckrufFormular />
          <p className="mt-5 text-xs leading-relaxed text-subtle-foreground">
            {rueckruf.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
