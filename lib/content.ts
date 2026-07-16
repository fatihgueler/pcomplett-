/**
 * Zentrale Inhalts-Datei (Single Source of Truth für alle Texte).
 * Änderungen an Website-Texten ausschließlich hier vornehmen.
 * Platzhalter {{NAME}} = vom Kunden mit echten Daten ersetzen.
 */

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über uns", href: "/#vertrauen" },
  { label: "Partner", href: "/#partner" },
  { label: "Kontakt", href: "/#kontakt" },
];

export const hero = {
  eyebrow: "IT-Systemhaus für den Mittelstand",
  headlineLead: "IT, die Ihr Unternehmen",
  headlineAccent: "wirklich voranbringt.",
  subline:
    "Von der Infrastruktur über individuelle Software bis zum laufenden Service: PComplett betreut kleine und mittlere Unternehmen zuverlässig – persönlich, herstellerunabhängig und aus einer Hand.",
  primaryCta: { label: "Beratung anfragen", href: "/#kontakt" },
  secondaryCta: { label: "Leistungen ansehen", href: "/#leistungen" },
  highlights: [
    "Persönlicher Ansprechpartner",
    "Herstellerunabhängig",
    "Schnelle Reaktionszeiten",
  ],
};

export type Service = {
  icon: string; // lucide-react Icon-Name (Mapping in der Komponente)
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "Network",
    title: "IT-Lösungen",
    description:
      "Wir planen, modernisieren und betreuen Ihre komplette IT-Infrastruktur – von Servern und Netzwerken bis zur sicheren Cloud-Anbindung. So läuft Ihr Betrieb stabil, geschützt und ausfallsicher.",
  },
  {
    icon: "Code2",
    title: "Development",
    description:
      "Individuelle Software und Web-Anwendungen, die exakt zu Ihren Abläufen passen. Wir automatisieren wiederkehrende Aufgaben und schaffen digitale Werkzeuge, die Ihrem Team täglich Zeit sparen.",
  },
  {
    icon: "Palette",
    title: "Mediendesign",
    description:
      "Vom Logo bis zum kompletten Webauftritt: Wir geben Ihrer Marke ein professionelles, wiedererkennbares Gesicht. Design, das Vertrauen schafft und neue Kunden überzeugt.",
  },
  {
    icon: "LifeBuoy",
    title: "Service",
    description:
      "Schneller Support, wenn es darauf ankommt – per Fernwartung oder vor Ort. Mit planbaren Wartungsverträgen halten wir Ihre Systeme dauerhaft leistungsfähig und beugen Störungen aktiv vor.",
  },
  {
    icon: "AppWindow",
    title: "Software",
    description:
      "Beratung, Beschaffung und Einrichtung der passenden Software-Lösungen für Ihr Unternehmen. Wir sorgen für saubere Lizenzierung, reibungslose Einführung und Systeme, die zusammenspielen.",
  },
  {
    icon: "Workflow",
    title: "Projektierung",
    description:
      "Ob Standortumzug, Neuausstattung oder Digitalisierungsprojekt: Wir planen Ihr IT-Vorhaben von Anfang bis Ende. Klare Struktur, verlässliche Termine und ein Ansprechpartner für alles.",
  },
  {
    icon: "Boxes",
    title: "Vermietung",
    description:
      "Notebooks, Server oder komplette Event-Technik flexibel mieten statt kaufen. Ideal für Projekte, Veranstaltungen und Spitzenlasten – einsatzbereit konfiguriert und pünktlich geliefert.",
  },
];

export const trust = {
  eyebrow: "Warum PComplett",
  heading: "Ein Partner, auf den sich der Mittelstand verlässt",
  intro:
    "Seit Jahren begleiten wir Unternehmen bei jedem Schritt ihrer Digitalisierung – bodenständig, verbindlich und mit echtem Interesse an Ihrem Erfolg.",
  stats: [
    { value: "{{JAHRE_ERFAHRUNG}}", suffix: "+", label: "Jahre Erfahrung" },
    { value: "{{ANZAHL_KUNDEN}}", suffix: "+", label: "Zufriedene Kunden" },
    { value: "{{ANZAHL_PROJEKTE}}", suffix: "+", label: "Umgesetzte Projekte" },
  ],
  testimonials: [
    { quote: "{{TESTIMONIAL_1}}", author: "{{KUNDE_1_NAME}}", role: "{{KUNDE_1_FIRMA}}" },
    { quote: "{{TESTIMONIAL_2}}", author: "{{KUNDE_2_NAME}}", role: "{{KUNDE_2_FIRMA}}" },
    { quote: "{{TESTIMONIAL_3}}", author: "{{KUNDE_3_NAME}}", role: "{{KUNDE_3_FIRMA}}" },
  ],
};

export const partners = {
  eyebrow: "Technologie-Partner",
  heading: "Wir arbeiten mit bewährten Herstellern",
  // Platzhalter-Namen – durch echte Partner-Logos ersetzen ({{PARTNER_LOGOS}}).
  logos: [
    "{{PARTNER_1}}",
    "{{PARTNER_2}}",
    "{{PARTNER_3}}",
    "{{PARTNER_4}}",
    "{{PARTNER_5}}",
    "{{PARTNER_6}}",
  ],
};

export const ctaBand = {
  heading: "Lassen Sie uns über Ihre IT sprechen.",
  text: "Unverbindlich, ehrlich und ohne Fachchinesisch. Wir hören zu und zeigen Ihnen, wo PComplett Ihren Betrieb spürbar entlastet.",
  cta: { label: "Kontakt aufnehmen", href: "/#kontakt" },
};

export const contact = {
  eyebrow: "Kontakt",
  heading: "Beratung anfragen",
  intro:
    "Erzählen Sie uns kurz von Ihrem Anliegen – wir melden uns zeitnah mit einer konkreten Einschätzung. Kein Callcenter, sondern ein fester Ansprechpartner.",
  formNote:
    "Ihre Angaben verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage. Weitere Informationen finden Sie in unserer Datenschutzerklärung.",
  successTitle: "Vielen Dank für Ihre Anfrage!",
  successText:
    "Wir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich bei Ihnen.",
};

export const footer = {
  tagline:
    "IT-Systemhaus für kleine und mittlere Unternehmen. Zuverlässig, persönlich und aus einer Hand.",
  legalLinks: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};
