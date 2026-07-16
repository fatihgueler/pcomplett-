import { Reveal } from "@/components/Reveal";
import { partners } from "@/lib/content";

export function Partner() {
  return (
    <section
      id="partner"
      aria-labelledby="partner-heading"
      className="section-y scroll-mt-24"
    >
      <div className="container-page flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            {partners.eyebrow}
          </span>
          <h2
            id="partner-heading"
            className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {partners.heading}
          </h2>
        </div>

        <Reveal className="w-full">
          <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {partners.logos.map((logo, index) => (
              <li key={index} className="flex items-center justify-center">
                {/* {{PARTNER_LOGOS}} – Text-Platzhalter durch echte Logos (next/image) ersetzen */}
                <span className="font-display text-lg font-semibold text-subtle-foreground grayscale transition-all duration-200 hover:text-brand hover:grayscale-0">
                  {logo}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
