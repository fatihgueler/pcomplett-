import { cn } from "@/lib/utils";

/**
 * Spam-Schutz: Kontaktdaten (E-Mail/Telefon) werden ausschließlich als Bild
 * dargestellt – niemals als Text im DOM und niemals als anklickbarer Link.
 * Die eigentliche Adresse steht nur in der verlinkten SVG-Datei unter
 * /public/kontakt/ und ist damit für einfache Harvester nicht auslesbar.
 * Das alt-Attribut bleibt bewusst neutral (enthält keine Adresse).
 */

export type ContactMediaKind = "telefon" | "fax" | "email-service" | "email-kontakt";

const sources: Record<ContactMediaKind, { src: string; alt: string; width: number; height: number }> = {
  telefon: { src: "/kontakt/telefon.svg", alt: "Telefonnummer als Bild", width: 300, height: 44 },
  fax: { src: "/kontakt/fax.svg", alt: "Faxnummer als Bild", width: 300, height: 44 },
  "email-service": { src: "/kontakt/email-service.svg", alt: "E-Mail-Adresse als Bild", width: 320, height: 44 },
  "email-kontakt": { src: "/kontakt/email-kontakt.svg", alt: "E-Mail-Adresse als Bild", width: 340, height: 44 },
};

type Props = {
  kind: ContactMediaKind;
  /** Kleines Label darüber, z. B. „Telefon" oder „E-Mail". */
  label?: string;
  className?: string;
  imgClassName?: string;
};

export function ContactMedia({ kind, label, className, imgClassName }: Props) {
  const { src, alt, width, height } = sources[kind];
  return (
    <span className={cn("flex flex-col gap-1", className)}>
      {label ? (
        <span className="text-xs font-medium uppercase tracking-wide text-subtle-foreground">
          {label}
        </span>
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={cn("h-8 w-auto max-w-full select-none", imgClassName)}
      />
    </span>
  );
}
