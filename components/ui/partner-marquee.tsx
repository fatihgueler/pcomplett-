import { cn } from "@/lib/utils";

/**
 * Endlos laufende Partner-Leiste (Graustufe → Farbe bei Hover).
 * Der sichtbare Teil ist dekorativ (aria-hidden); die Namen stehen zusätzlich
 * einmal für Screenreader bereit.
 */
export function PartnerMarquee({
  partners,
  className,
}: {
  partners: readonly string[];
  className?: string;
}) {
  const doubled = [...partners, ...partners];

  return (
    <div className={className}>
      <div className="marquee-mask relative overflow-hidden" aria-hidden>
        <ul className="animate-marquee flex w-max items-center gap-12 pr-12">
          {doubled.map((partner, index) => (
            <li key={index} className="shrink-0">
              <span className="font-display text-xl font-semibold text-subtle-foreground grayscale transition-all duration-200 hover:text-brand hover:grayscale-0">
                {partner}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="sr-only">
        {partners.map((partner) => (
          <li key={partner}>{partner}</li>
        ))}
      </ul>
    </div>
  );
}
