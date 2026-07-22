"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Kontaktdaten als klickbare, barrierefreie Links – aber scam-/harvest-sicher:
 * Nummern und Adressen liegen NICHT im Klartext im SSR-HTML, sondern als
 * Zeichencode-Arrays. Erst clientseitig (useEffect, nach Hydration) werden
 * Anzeigetext und href zusammengesetzt und das "mailto:"/"tel:" angehängt.
 * Screenreader lesen den hydrierten DOM – also voll zugänglich; einfache
 * E-Mail-/Telefon-Harvester (die statisches HTML scannen) finden nichts.
 */

const CODES = {
  telDisplay: [48, 53, 49, 49, 32, 55, 54, 48, 32, 55, 55, 51, 32, 48],
  telHref: [43, 52, 57, 53, 49, 49, 55, 54, 48, 55, 55, 51, 48],
  faxDisplay: [48, 53, 49, 49, 32, 55, 54, 48, 32, 55, 55, 51, 32, 52, 57],
  emailService: [
    115, 101, 114, 118, 105, 99, 101, 64, 112, 99, 111, 109, 112, 108, 101,
    116, 116, 46, 100, 101,
  ],
  emailIt: [
    105, 116, 64, 112, 99, 111, 109, 112, 108, 101, 116, 116, 46, 100, 101,
  ],
} as const;

const decode = (codes: readonly number[]) =>
  String.fromCharCode(...codes);

export type ContactMediaKind = "telefon" | "fax" | "email-service" | "email-kontakt";

type Resolved = { text: string; href?: string; scheme?: "tel" | "mail" };

function resolve(kind: ContactMediaKind): Resolved {
  switch (kind) {
    case "telefon":
      return { text: decode(CODES.telDisplay), href: decode(CODES.telHref), scheme: "tel" };
    case "fax":
      // Fax wird nicht verlinkt (kein sinnvolles Protokoll), nur angezeigt.
      return { text: decode(CODES.faxDisplay) };
    case "email-service":
      return { text: decode(CODES.emailService), scheme: "mail" };
    case "email-kontakt":
      return { text: decode(CODES.emailIt), scheme: "mail" };
  }
}

type Props = {
  kind: ContactMediaKind;
  /** Kleines Label darüber, z. B. „Telefon" oder „E-Mail". */
  label?: string;
  className?: string;
  linkClassName?: string;
};

export function ContactMedia({ kind, label, className, linkClassName }: Props) {
  const [data, setData] = React.useState<Resolved | null>(null);

  React.useEffect(() => {
    setData(resolve(kind));
  }, [kind]);

  const ariaLabel =
    kind === "telefon"
      ? "Telefonnummer"
      : kind === "fax"
        ? "Faxnummer"
        : "E-Mail-Adresse";

  const linkClasses = cn(
    "font-medium text-foreground underline-offset-4 transition-colors hover:text-brand hover:underline",
    linkClassName,
  );

  let content: React.ReactNode;
  if (!data) {
    // Vor Hydration: neutraler Platzhalter, kein Klartext im Quelltext.
    content = (
      <span aria-hidden className="select-none text-subtle-foreground">
        …
      </span>
    );
  } else if (data.scheme === "tel" && data.href) {
    content = (
      <a href={`tel:${data.href}`} className={linkClasses} aria-label={ariaLabel}>
        {data.text}
      </a>
    );
  } else if (data.scheme === "mail") {
    content = (
      <a href={`mailto:${data.text}`} className={linkClasses} aria-label={ariaLabel}>
        {data.text}
      </a>
    );
  } else {
    content = <span className="font-medium text-foreground">{data.text}</span>;
  }

  return (
    <span className={cn("flex flex-col gap-0.5", className)}>
      {label ? (
        <span className="text-xs font-medium uppercase tracking-wide text-subtle-foreground">
          {label}
        </span>
      ) : null}
      <span className="text-sm">{content}</span>
    </span>
  );
}
