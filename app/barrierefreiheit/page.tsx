import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  PlaceholderNote,
} from "@/components/layout/LegalPage";
import { barrierefreiheitPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Erklärung zur Barrierefreiheit",
  description:
    "Erklärung zur Barrierefreiheit der Website von PComplett – unser Anspruch, der Stand der Vereinbarkeit und wie Sie Barrieren melden können.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/barrierefreiheit" },
};

export default function BarrierefreiheitPage() {
  return (
    <LegalPage
      title={barrierefreiheitPage.heading}
      intro={barrierefreiheitPage.intro}
    >
      <PlaceholderNote>
        Hinweis: Diese Erklärung sollte vor dem Livegang rechtlich geprüft und
        der Stand der Barrierefreiheit bestätigt werden.
      </PlaceholderNote>

      {barrierefreiheitPage.sections.map((section) => (
        <LegalSection key={section.heading} heading={section.heading}>
          <p>{section.text}</p>
        </LegalSection>
      ))}
    </LegalPage>
  );
}
