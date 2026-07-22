/**
 * Blog / Aktuelles – Startartikel als Beispiel-Content.
 * Frei erweiterbar: neuen Eintrag ergänzen, Slug ist eindeutig.
 */

export type BlogSection = { heading?: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  /** Kurzer SEO-Titel (< 45 Zeichen, damit inkl. Marken-Suffix < 60). */
  metaTitle?: string;
  excerpt: string;
  date: string; // ISO (für Schema/Sortierung)
  dateLabel: string;
  readingMinutes: number;
  category: string;
  content: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ki-im-mittelstand-wo-sie-sich-lohnt",
    title: "Künstliche Intelligenz im Mittelstand: Wo sie sich heute wirklich lohnt",
    metaTitle: "KI im Mittelstand: Wo sie sich lohnt",
    excerpt:
      "KI muss kein Großprojekt sein. Wir zeigen drei Bereiche, in denen kleine und mittlere Betriebe schon heute mit überschaubarem Aufwand spürbar Zeit sparen.",
    date: "2026-07-15",
    dateLabel: "15. Juli 2026",
    readingMinutes: 4,
    category: "KI",
    content: [
      {
        paragraphs: [
          "Künstliche Intelligenz klingt nach Zukunftsmusik und großen Budgets. In der Praxis ist das Gegenteil der Fall: Die größten Effekte entstehen dort, wo KI kleine, wiederkehrende Aufgaben übernimmt, die heute Zeit und Nerven kosten. Genau hier setzen wir an.",
        ],
      },
      {
        heading: "1. Dokumente automatisch erfassen",
        paragraphs: [
          "Aufträge, Lieferscheine, Rechnungen: Vieles kommt noch als PDF oder E-Mail-Anhang und wird von Hand ins System übertragen. Eine KI liest diese Dokumente aus, erkennt die relevanten Felder und legt sie strukturiert ab – zuverlässig und in Sekunden statt Minuten.",
        ],
      },
      {
        heading: "2. E-Mails vorsortieren und beantworten",
        paragraphs: [
          "Ein volles Postfach ist ein Zeitfresser. KI kann eingehende Nachrichten kategorisieren, Wichtiges nach vorne holen und Antwortvorschläge liefern. Sie entscheiden weiterhin – aber deutlich schneller.",
        ],
      },
      {
        heading: "3. Sprache in Text verwandeln",
        paragraphs: [
          "Notizen, Besprechungen oder Kundengespräche lassen sich automatisch verschriften und durchsuchbar machen. Dokumentation entsteht nebenbei, ohne Abtippen.",
          "Unser Rat: Fangen Sie klein an. Suchen Sie sich eine konkrete Aufgabe, die oft anfällt, und automatisieren Sie genau diese. So sehen Sie schnell einen Effekt – und bauen von dort aus weiter.",
        ],
      },
    ],
  },
  {
    slug: "it-sicherheit-grundlagen-kleine-betriebe",
    title: "IT-Sicherheit für kleine Betriebe: Die wichtigsten Grundlagen",
    metaTitle: "IT-Sicherheit: Grundlagen für Betriebe",
    excerpt:
      "Cyberangriffe treffen längst nicht nur Konzerne. Mit wenigen, konsequent umgesetzten Maßnahmen schützen Sie Ihren Betrieb wirksam – ganz ohne eigene IT-Abteilung.",
    date: "2026-07-08",
    dateLabel: "8. Juli 2026",
    readingMinutes: 5,
    category: "IT-Sicherheit",
    content: [
      {
        paragraphs: [
          "Viele kleine Betriebe denken, sie seien für Angreifer uninteressant. Das Gegenteil stimmt: Automatisierte Angriffe treffen wahllos – und gerade dort, wo Schutzmaßnahmen fehlen, richten sie den größten Schaden an. Die gute Nachricht: Die wichtigsten Grundlagen sind mit überschaubarem Aufwand umsetzbar.",
        ],
      },
      {
        heading: "Backups, die im Ernstfall funktionieren",
        paragraphs: [
          "Ein Backup ist nur so gut wie seine Wiederherstellung. Wichtig sind regelmäßige, automatische Sicherungen – und ein gelegentlicher Test, ob sich die Daten wirklich zurückspielen lassen. Mindestens eine Kopie sollte getrennt vom Tagesbetrieb liegen.",
        ],
      },
      {
        heading: "Updates und Passwörter",
        paragraphs: [
          "Veraltete Software ist das häufigste Einfallstor. Halten Sie Systeme aktuell und nutzen Sie einen Passwort-Manager sowie – wo möglich – Zwei-Faktor-Authentifizierung. Das kostet wenig und verhindert die meisten Standardangriffe.",
        ],
      },
      {
        heading: "Menschen mitnehmen",
        paragraphs: [
          "Die meisten Vorfälle beginnen mit einer Phishing-Mail. Kurze, verständliche Sensibilisierung Ihrer Mitarbeitenden bringt oft mehr als teure Technik. Wer die typischen Maschen kennt, klickt seltener.",
          "Sie sind unsicher, wo Ihr Betrieb steht? Ein kurzer Sicherheits-Check zeigt die größten Lücken – und was zuerst zu tun ist.",
        ],
      },
    ],
  },
  {
    slug: "sprache-statt-tippen-whisper-im-buero",
    title: "Sprache statt Tippen: Wie automatische Verschriftung Büroarbeit beschleunigt",
    metaTitle: "Sprache statt Tippen: KI-Verschriftung",
    excerpt:
      "Aus Gesprächen und Notizen wird durchsuchbarer Text – automatisch. Wir erklären, wie Sprach-zu-Text-Workflows funktionieren und wo sie im Alltag am meisten bringen.",
    date: "2026-06-30",
    dateLabel: "30. Juni 2026",
    readingMinutes: 3,
    category: "KI & Automatisierung",
    content: [
      {
        paragraphs: [
          "Ein großer Teil der Büroarbeit besteht aus Dokumentation: Gesprächsnotizen, Protokolle, Übergaben. Vieles davon wird nachträglich abgetippt – zeitaufwändig und ungern gemacht. Moderne Spracherkennung nimmt Ihnen diesen Schritt ab.",
        ],
      },
      {
        heading: "So funktioniert es",
        paragraphs: [
          "Ein Sprach-zu-Text-Modell wandelt Audio automatisch in geschriebenen Text um – erstaunlich genau, auch bei Fachbegriffen. Der Text ist anschließend durchsuchbar, lässt sich weiterverarbeiten und in Ihre Systeme einbinden.",
        ],
      },
      {
        heading: "Wo es sich lohnt",
        paragraphs: [
          "Besonders wertvoll ist das dort, wo regelmäßig gesprochen und dokumentiert wird: bei Serviceeinsätzen, Kundengesprächen oder internen Besprechungen. Die Dokumentation entsteht nebenbei, und niemand muss abends noch tippen.",
          "Wir setzen solche Workflows selbst ein und richten sie passgenau für Ihren Betrieb ein – datenschutzbewusst und in Ihre Abläufe integriert.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/**
 * Aktionen – Bereich für gezielte Werbeaktionen (B2B).
 * Inhalte sind Platzhalter und vom Kunden mit echten Aktionen zu füllen.
 * Struktur bewusst schlank: Titel, Kurztext, Zeitraum.
 */
export type Aktion = {
  badge: string;
  title: string;
  description: string;
  period: string;
};

// Echte Aktionen hier eintragen. Solange leer, zeigt die Seite einen
// neutralen Hinweis statt roher Platzhalter.
export const aktionen: Aktion[] = [];
