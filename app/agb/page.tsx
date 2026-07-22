import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  PlaceholderNote,
} from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen der PComplett-IT für IT- und KI-Dienstleistungen.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/agb" },
};

export default function AgbPage() {
  return (
    <LegalPage
      title="Allgemeine Geschäftsbedingungen"
      intro="Bedingungen für die Erbringung unserer IT- und KI-Dienstleistungen."
    >
      <PlaceholderNote>
        Hinweis: Bitte vor dem Livegang eine anwaltlich geprüfte Fassung
        hinterlegen. Die folgenden Bedingungen sind eine allgemeine Grundlage.
      </PlaceholderNote>

      <LegalSection heading="§ 1 Geltungsbereich">
        <p>
          Diese Bedingungen gelten für Verträge über IT- und KI-Dienstleistungen
          zwischen PComplett-IT (Inhaber Frank Bernhardt) und dem Auftraggeber.
          Ergänzend und vorrangig gelten die im jeweiligen Angebot bzw. Auftrag
          individuell vereinbarten Regelungen.
        </p>
      </LegalSection>

      <LegalSection heading="§ 2 Leistungen und Mitwirkung">
        <p>
          Art und Umfang der Leistungen ergeben sich aus dem jeweiligen Angebot
          bzw. der Auftragsbestätigung. Der Auftraggeber stellt die für die
          Leistungserbringung erforderlichen Informationen, Zugänge und
          Mitwirkungsleistungen rechtzeitig bereit.
        </p>
      </LegalSection>

      <LegalSection heading="§ 3 Preise und Zahlungsbedingungen">
        <p>
          Es gelten die im Angebot genannten Preise zzgl. der gesetzlichen
          Umsatzsteuer. Rechnungen sind, sofern nicht anders vereinbart, ohne
          Abzug innerhalb von 14 Tagen nach Rechnungsdatum zahlbar.
        </p>
      </LegalSection>

      <LegalSection heading="§ 4 Schlussbestimmungen">
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland. Soweit gesetzlich
          zulässig, ist Gerichtsstand Hannover. Sollten einzelne Bestimmungen
          unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
          unberührt.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
