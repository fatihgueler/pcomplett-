import { brandLogoMap } from "@/components/ui/brand-logos";

export type Partner = { name: string; icon?: string };

/**
 * Endlos laufende Partner-Leiste. Echte Logos (brandLogoMap) werden als SVG
 * gerendert, sonst eine Text-Wortmarke. Graustufe → Farbe bei Hover.
 * Der sichtbare Teil ist dekorativ (aria-hidden); die Namen stehen zusätzlich
 * einmal für Screenreader bereit.
 */
export function PartnerMarquee({
  partners,
  className,
}: {
  partners: readonly Partner[];
  className?: string;
}) {
  const doubled = [...partners, ...partners];

  return (
    <div className={className}>
      <div className="marquee-mask relative overflow-hidden" aria-hidden>
        <ul className="animate-marquee flex w-max items-center gap-14 pr-14">
          {doubled.map((partner, index) => {
            const Logo = partner.icon ? brandLogoMap[partner.icon] : undefined;
            return (
              <li key={index} className="shrink-0">
                {Logo ? (
                  <Logo className="h-7 w-auto text-subtle-foreground/70 grayscale transition-all duration-200 hover:text-ink hover:grayscale-0" />
                ) : (
                  <span className="font-display text-xl font-semibold text-subtle-foreground grayscale transition-all duration-200 hover:text-brand hover:grayscale-0">
                    {partner.name}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="sr-only">
        {partners.map((partner) => (
          <li key={partner.name}>{partner.name}</li>
        ))}
      </ul>
    </div>
  );
}
