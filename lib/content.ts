/**
 * Zentrale Inhalts-Datei (Single Source of Truth für alle Texte).
 * Änderungen an Website-Texten ausschließlich hier vornehmen.
 * Platzhalter {{NAME}} = vom Kunden mit echten Daten ersetzen.
 */

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Aktuelles", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

export const hero = {
  eyebrow: "IT- & KI-Systemhaus",
  headlineLead: "IT und KI, die Ihren Alltag",
  headlineAccent: "einfacher machen.",
  subline:
    "Von der IT-Infrastruktur über smarte KI-Automatisierung bis zum schnellen PC-Service. PComplett ist Ihr verlässlicher Partner – für Unternehmen und Privatkunden.",
  primaryCta: { label: "Beratung anfragen", href: "/kontakt" },
  secondaryCta: { label: "Leistungen entdecken", href: "/leistungen" },
  highlights: [
    "Für Unternehmen & Privat",
    "KI aus eigener Praxis",
    "Persönlich & regional",
  ],
};

export type EntryCard = {
  icon: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

export const entryCards: EntryCard[] = [
  {
    icon: "Building2",
    title: "Für Unternehmen",
    description:
      "IT-Betreuung, Sicherheit und KI-Automatisierung, die Ihr Geschäft effizienter und zukunftssicher machen.",
    cta: { label: "Zu den Unternehmensleistungen", href: "/leistungen" },
  },
  {
    icon: "UserRound",
    title: "Für Privatkunden",
    description:
      "Schnelle Hilfe bei PC, Technik und allen digitalen Fragen – unkompliziert, verständlich und fair.",
    cta: { label: "Zum Privatkunden-Service", href: "/#service-privat" },
  },
];

export type Service = {
  slug: string;
  icon: string; // lucide-react Icon-Name (Mapping in der Komponente)
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "ki-loesungen",
    icon: "Sparkles",
    title: "KI-Lösungen",
    description:
      "Wir bringen KI dorthin, wo sie wirklich Zeit spart – von der automatisierten Auftragsbearbeitung bis zur intelligenten E-Mail-Verarbeitung. Praxiserprobt, denn wir setzen es täglich selbst ein.",
  },
  {
    slug: "it-loesungen",
    icon: "Network",
    title: "IT-Lösungen",
    description:
      "Wir planen, modernisieren und betreuen Ihre komplette IT – Server, Netzwerke und Cloud. Stabil, sicher und ohne Ausfallsorgen.",
  },
  {
    slug: "it-sicherheit",
    icon: "ShieldCheck",
    title: "IT-Sicherheit",
    description:
      "Firewalls, Backups und wirksamer Schutz vor Angriffen: Wir sichern Ihre Systeme und Daten ab, bevor ein Zwischenfall zum Problem wird.",
  },
  {
    slug: "software-jtl",
    icon: "Puzzle",
    title: "Software & JTL-Module",
    description:
      "Individuelle Software und maßgeschneiderte JTL-Module für Ihre Prozesse. Wir erweitern Ihr System genau um das, was Ihnen im Alltag fehlt.",
  },
  {
    slug: "development",
    icon: "Code2",
    title: "Development",
    description:
      "Von der Web-Anwendung bis zur Schnittstelle: Wir entwickeln Software, die exakt zu Ihren Abläufen passt und mit Ihnen wächst.",
  },
];

export const kiPraxis = {
  eyebrow: "KI in der Praxis",
  heading: "Wir nutzen KI selbst – jeden Tag",
  intro:
    "Keine Theorie, sondern gelebte Automatisierung aus unseren eigenen Abläufen. Genau diese Lösungen bauen wir auch für Sie.",
  cta: { label: "Das bauen wir auch für Sie", href: "/kontakt" },
  cases: [
    {
      icon: "FileText",
      title: "Automatisierte Auftragsbearbeitung",
      problem:
        "Problem: Eingehende Aufträge mussten manuell erfasst und verteilt werden – zeitaufwändig und fehleranfällig.",
      solution:
        "Lösung: Eine KI liest die Auftragsdaten automatisch aus und legt sie strukturiert im System an.",
      result:
        "Ergebnis: Deutlich weniger manuelle Erfassung und spürbar schnellere Bearbeitung.",
    },
    {
      icon: "Mail",
      title: "KI-gestützte E-Mail-Bearbeitung",
      problem:
        "Problem: Das Postfach lief über, wichtige Anfragen gingen zwischen Standardmails unter.",
      solution:
        "Lösung: Eine KI kategorisiert eingehende E-Mails, priorisiert sie und schlägt passende Antworten vor.",
      result:
        "Ergebnis: Schnellere Reaktionszeiten und ein dauerhaft aufgeräumter Posteingang.",
    },
    {
      icon: "AudioLines",
      title: "Sprach-zu-Text-Workflows",
      problem:
        "Problem: Notizen und Besprechungen kosteten im Nachgang viel Tipparbeit.",
      solution:
        "Lösung: Mit Whisper wandeln wir Sprache automatisch in durchsuchbaren Text um.",
      result:
        "Ergebnis: Dokumentation entsteht nebenbei – ganz ohne Abtippen.",
    },
  ],
};

export const servicePrivat = {
  eyebrow: "Für Privatkunden",
  heading: "Schnelle Hilfe bei Technik & PC",
  intro:
    "Wenn der Rechner streikt oder die Technik nicht mitspielt: Wir helfen unkompliziert und erklären alles verständlich.",
  // {{B2C_LEISTUNGEN}} – bei Bedarf anpassen. Fallback-Inhalte:
  items: [
    {
      icon: "Cog",
      title: "PC-Service & Aufrüstung",
      description:
        "Einrichtung, Optimierung und Aufrüstung Ihres Rechners – damit alles wieder rund läuft.",
    },
    {
      icon: "HardDrive",
      title: "Reparatur & Datenrettung",
      description:
        "Defekte Hardware, verlorene Dateien? Wir reparieren und retten, was zu retten ist.",
    },
    {
      icon: "UserRound",
      title: "Beratung & Einrichtung",
      description:
        "Neues Gerät, WLAN, Smart Home: Wir beraten ehrlich und richten alles startklar ein.",
    },
  ],
};

export const trust = {
  eyebrow: "Partner & Vertrauen",
  heading: "Verlässlich für Unternehmen und Privatkunden",
  intro:
    "Wir arbeiten mit bewährten Technologiepartnern und begleiten unsere Kunden langfristig – bodenständig und verbindlich.",
  // Vier Partner-Slots (Design sieht keine weiteren vor). Panasonic und
  // Deutsche Messe daher NICHT ergänzt.
  partnerHeading: "Unsere Technologie-Partner",
  // icon = Schlüssel aus brandLogoMap (echtes Logo). Ohne icon = Text-Wortmarke.
  partners: [
    { name: "HP", icon: "hp" },
    { name: "Fujitsu", icon: "fujitsu" },
    { name: "Starface" },
    { name: "Jeester" },
  ],
  stats: [
    // Belegbar: Firma im Dezember 1994 in Hannover gegründet.
    { value: "30", suffix: "+", label: "Jahre Erfahrung" },
    // Belegbar durch die namhaften Referenzprojekte unten.
    { value: "5", suffix: "+", label: "Namhafte Referenzen" },
  ],
  // Echte, zur Nennung freigegebene Referenzprojekte (neutrale Projektbeschreibung, keine erfundenen Zitate).
  testimonials: [
    {
      quote: "Individuelle Warenwirtschaftssoftware – entwickelt und betreut von PComplett.",
      author: "ThyssenKrupp Stahlbau",
      role: "Projekt: Warenwirtschaft",
    },
    {
      quote: "Word-Automatisierung für standardisierte Dokumentenvorlagen.",
      author: "TUI",
      role: "Projekt: Dokumenten-Automatisierung",
    },
    {
      quote: "Software zur Abrechnung und Störungserfassung.",
      author: "Deutsche Messe AG, Hannover",
      role: "Projekt: Fachsoftware",
    },
    {
      quote: "Telefonanlage mit 300 Anschlüssen – geplant und umgesetzt.",
      author: "HIS Hochschul-Informations-System GmbH",
      role: "Projekt: Telekommunikation",
    },
    {
      quote: "Warenwirtschaft und Betrieb virtueller Server.",
      author: "J+S Druckfarben",
      role: "Projekt: IT & Warenwirtschaft",
    },
  ],
};

export const ctaBand = {
  heading: "Lassen Sie uns über Ihre IT & KI sprechen.",
  text: "Unverbindlich, ehrlich und ohne Fachchinesisch. Wir zeigen Ihnen, wo PComplett Ihren Alltag spürbar entlastet.",
  cta: { label: "Kontakt aufnehmen", href: "/kontakt" },
};

export const prozess = {
  eyebrow: "So arbeiten wir",
  heading: "In vier Schritten zur Lösung",
  intro:
    "Klar, transparent und mit einem festen Ansprechpartner – von der ersten Idee bis zum laufenden Betrieb.",
  steps: [
    {
      title: "Erstgespräch",
      text: "Wir hören zu und verstehen Ihre Ziele, Abläufe und Herausforderungen – unverbindlich.",
    },
    {
      title: "Analyse & Konzept",
      text: "Wir prüfen Ihre Situation und schlagen eine konkrete, passende Lösung mit klaren Schritten vor.",
    },
    {
      title: "Umsetzung",
      text: "Wir realisieren die Lösung sauber und nachvollziehbar – ohne Ihren Betrieb auszubremsen.",
    },
    {
      title: "Betreuung",
      text: "Nach dem Start bleiben wir Ihr Ansprechpartner und halten alles zuverlässig am Laufen.",
    },
  ],
};

export const notfall = {
  heading: "IT-Störung? Wir helfen sofort.",
  text: "Wenn nichts mehr geht, zählt jede Minute. Rufen Sie uns an – wir unterstützen per Fernwartung oder vor Ort.",
  cta: { label: "Jetzt anrufen", href: "tel:" },
};

export const faq = {
  eyebrow: "Häufige Fragen",
  heading: "Was Kunden oft fragen",
  intro:
    "Sie haben eine Frage, die hier nicht beantwortet wird? Melden Sie sich einfach – wir helfen gern weiter.",
  items: [
    {
      q: "Betreuen Sie auch kleine Betriebe und Privatkunden?",
      a: "Ja. Wir betreuen Unternehmen jeder Größe – vom Handwerksbetrieb bis zum Mittelstand – und helfen Privatkunden unkompliziert bei PC und Technik.",
    },
    {
      q: "Was kostet eine Beratung?",
      a: "Das Erstgespräch ist unverbindlich und kostenfrei. Erst danach erhalten Sie ein transparentes Angebot.",
    },
    {
      q: "Wie schnell sind Sie im Notfall erreichbar?",
      a: "Bei Störungen erreichen Sie uns telefonisch. Wir helfen per Fernwartung oder vor Ort – so schnell wie möglich.",
    },
    {
      q: "Arbeiten Sie herstellerunabhängig?",
      a: "Ja. Wir empfehlen die Lösung, die zu Ihnen passt, statt an bestimmte Hersteller gebunden zu sein.",
    },
    {
      q: "Was macht Ihre KI-Lösungen besonders?",
      a: "Wir setzen KI seit Jahren in unseren eigenen Abläufen ein und bauen nur, was sich in der Praxis bewährt – kein Hype, sondern echter Nutzen.",
    },
    {
      q: "Sind Sie nur in Hannover tätig?",
      a: "Unser Sitz ist in Hannover, Vor-Ort-Service bieten wir in der Region. Viele Leistungen erbringen wir deutschlandweit per Fernzugriff.",
    },
  ],
};

export const contact = {
  eyebrow: "Kontakt",
  heading: "Beratung anfragen",
  intro:
    "Erzählen Sie uns kurz von Ihrem Anliegen – wir melden uns zeitnah mit einer konkreten Einschätzung. Kein Callcenter, sondern ein fester Ansprechpartner.",
  // Auswahlmöglichkeiten für das Feld „Anliegen“
  subjects: [
    "Unternehmen – IT / KI",
    "Privatkunde – PC & Service",
    "Sonstiges",
  ],
  formNote:
    "Ihre Angaben verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage. Weitere Informationen finden Sie in unserer Datenschutzerklärung.",
  successTitle: "Vielen Dank für Ihre Anfrage!",
  successText:
    "Wir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich bei Ihnen.",
};

export const newsletter = {
  eyebrow: "Newsletter",
  heading: "Bleiben Sie auf dem Laufenden",
  text: "Praktische Tipps zu IT, KI und Technik – für Unternehmen und Privatkunden. Kein Spam, jederzeit abbestellbar.",
  segments: [
    { value: "unternehmen", label: "Unternehmen" },
    { value: "privat", label: "Privat" },
  ],
  successTitle: "Fast geschafft!",
  successText:
    "Bitte bestätigen Sie Ihre Anmeldung über den Link, den wir Ihnen per E-Mail gesendet haben (Double-Opt-in).",
};

export const footer = {
  tagline:
    "IT- & KI-Systemhaus für Unternehmen und Privatkunden. Zuverlässig, persönlich und aus einer Hand.",
  legalLinks: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
    { label: "Barrierefreiheit", href: "/barrierefreiheit" },
  ],
};

export const chatbot = {
  title: "PComplett Assistent",
  subtitle: "Fragen zu unseren Leistungen? Fragen Sie mich.",
  openLabel: "Chat öffnen",
  closeLabel: "Chat schließen",
  placeholder: "Ihre Frage …",
  greeting:
    "Hallo! Ich beantworte gern Ihre Fragen zu den Leistungen von PComplett – IT, KI-Automatisierung oder PC-Service. Wie kann ich helfen?",
  unavailable:
    "Der Chat-Assistent ist derzeit nicht verfügbar. Schreiben Sie uns gern direkt über das Kontaktformular – wir melden uns zeitnah.",
  errorText:
    "Entschuldigung, das hat gerade nicht geklappt. Bitte versuchen Sie es erneut oder nutzen Sie das Kontaktformular.",
};
