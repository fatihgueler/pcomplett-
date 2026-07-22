/**
 * Zentrale Inhalts-Datei (Single Source of Truth für alle Texte).
 * Änderungen an Website-Texten ausschließlich hier vornehmen.
 * Platzhalter {{NAME}} = vom Kunden mit echten Daten ersetzen.
 *
 * Zielgruppe: ausschließlich Geschäftskunden (B2B).
 * Leitmotiv: professionelle Betreuung.
 */

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Aktuelles", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

/**
 * Hero: automatisches Bild-Karussell + Werbeslogan.
 * Die vier Slides sind 16:9-Platzhalter (gleiche Maße) und können vom Kunden
 * 1:1 ausgetauscht werden ({{HERO_BILD_1}} … {{HERO_BILD_4}}).
 */
export const hero = {
  eyebrow: "IT-Systemhaus · Hannover",
  // Werbeslogan – Fallback aktiv; kann vom Kunden jederzeit ersetzt werden.
  slogan: "Ihre IT läuft. Dafür sorgen wir.",
  sublineFallback:
    "Wir übernehmen den Betrieb Ihrer IT – zuverlässig, dokumentiert und mit verbindlichen Reaktionszeiten. Sie konzentrieren sich auf Ihr Kerngeschäft.",
  primaryCta: { label: "Rückruf anfordern", href: "#rueckruf" },
  secondaryCta: { label: "Leistungen ansehen", href: "#leistungen" },
  slides: [
    { src: "/hero/hero-1.svg", placeholder: "{{HERO_BILD_1}}" },
    { src: "/hero/hero-2.svg", placeholder: "{{HERO_BILD_2}}" },
    { src: "/hero/hero-3.svg", placeholder: "{{HERO_BILD_3}}" },
    { src: "/hero/hero-4.svg", placeholder: "{{HERO_BILD_4}}" },
  ],
};

/**
 * Leistungsmodule der Startseite – die Haupteinnahmequellen prominent beworben.
 * icon = Schlüssel aus lib/icons.ts.
 */
export type LeistungsModul = {
  icon: string;
  title: string;
  description: string;
};

export const homeLeistungen: LeistungsModul[] = [
  {
    icon: "FileCheck2",
    title: "Serviceverträge",
    description:
      "Definierte Leistungen, kalkulierbare Kosten und verbindliche Reaktionszeiten für den laufenden Betrieb Ihrer Systeme.",
  },
  {
    icon: "Server",
    title: "Serveraufbau",
    description:
      "Planung, Einrichtung und Betrieb Ihrer Server – vor Ort oder virtualisiert. Stabil, ausfallsicher und sauber dokumentiert.",
  },
  {
    icon: "Network",
    title: "Netzwerke",
    description:
      "Strukturierte Verkabelung, WLAN und sichere Netzwerktechnik – zuverlässig geplant und für Wachstum vorbereitet.",
  },
  {
    icon: "MonitorSmartphone",
    title: "Arbeitsplätze einrichten",
    description:
      "Neue PC-Arbeitsplätze komplett startklar: Hardware, Software und Anbindung – einheitlich eingerichtet und übergeben.",
  },
  {
    icon: "PhoneCall",
    title: "Telefonanlagen",
    description:
      "Moderne Telefonie für Unternehmen: Planung, Einrichtung und Betreuung Ihrer Telefonanlage – klar und wartungsarm.",
  },
  {
    icon: "ShieldCheck",
    title: "IT-Sicherheit & Hardware",
    description:
      "Firewalls, Backups und geprüfte Hardware. Wir sichern Systeme und Daten ab, bevor ein Zwischenfall zum Problem wird.",
  },
  {
    icon: "Boxes",
    title: "Hardware & Software",
    description:
      "Beschaffung und Auflistung passender Hardware und Software – herstellerunabhängig empfohlen und einsatzfertig geliefert.",
  },
];

/**
 * Erklär-Abschnitte (als Bild-Karussell dargestellt).
 * Bildplatzhalter mit korrektem 16:9-Seitenverhältnis.
 */
export const erklaerSlides = [
  {
    title: "Ein Verantwortlicher für Ihre gesamte IT",
    text: "Server, Netzwerk und Arbeitsplätze bleiben in einer Hand – überwacht, dokumentiert und jederzeit ansprechbar.",
    placeholder: "{{BILD_BETREUUNG}}",
  },
  {
    title: "Infrastruktur, die mitwächst",
    text: "Wir konzipieren Server- und Speicherlandschaften, die dem Wachstum Ihres Betriebs standhalten – heute wie in fünf Jahren.",
    placeholder: "{{BILD_SERVERRAUM}}",
  },
  {
    title: "Telefonie und Vernetzung",
    text: "Standorte, Endgeräte und Telefonanlage greifen sauber ineinander – abgesichert und leicht zu erweitern.",
    placeholder: "{{BILD_TELEFONIE}}",
  },
  {
    title: "Präsenz in der Region Hannover",
    text: "Kurze Anfahrtswege für den Ernstfall, ergänzt um Fernwartung für die schnelle Lösung dazwischen.",
    placeholder: "{{BILD_VOR_ORT}}",
  },
];

/**
 * Rückrufservice mit Terminwunsch – primärer Kontaktweg der Startseite.
 */
export const rueckruf = {
  eyebrow: "Rückrufservice",
  heading: "Wir rufen Sie zurück",
  text: "Nennen Sie uns Wunschtag und -zeit. Sie sprechen direkt mit einer zuständigen Fachkraft – nicht mit einer Warteschleife.",
  successTitle: "Vielen Dank – wir rufen Sie zurück!",
  successText:
    "Ihre Rückrufbitte ist bei uns eingegangen. Wir melden uns zum gewünschten Zeitpunkt bei Ihnen.",
  note: "Ihre Angaben nutzen wir ausschließlich für den Rückruf. Details in unserer Datenschutzerklärung.",
};

/**
 * Serviceverträge – drei Stufen, bewusst OHNE Preise (nur Leistungsumfang).
 * Reaktionszeiten sind Platzhalter und werden individuell festgelegt.
 */
export const servicevertraege = {
  eyebrow: "Serviceverträge",
  heading: "Betreuung nach Maß – planbar statt überraschend",
  intro:
    "Drei klar umrissene Stufen. Sie bestimmen die Tiefe der Betreuung, wir sichern den laufenden Betrieb – vom Monitoring bis zum Vor-Ort-Einsatz.",
  note: "Konkrete Konditionen und Reaktionszeiten stimmen wir individuell mit Ihnen ab.",
  reactionLabel: "Reaktionszeit",
  tiers: [
    {
      name: "Basis",
      tagline: "Solide Grundabsicherung",
      featured: false,
      reaction: "bis zum nächsten Werktag",
      features: [
        "Support per Fernwartung",
        "Update- & Patch-Management",
        "Backup-Überwachung",
        "Fester Ansprechpartner",
      ],
    },
    {
      name: "Komfort",
      tagline: "Für den laufenden Betrieb",
      featured: true,
      reaction: "innerhalb von 4 Stunden",
      features: [
        "Alles aus Basis",
        "Proaktives Monitoring",
        "Vor-Ort-Service nach Bedarf",
        "Priorisierte Bearbeitung",
      ],
    },
    {
      name: "Premium",
      tagline: "Maximale Verfügbarkeit",
      featured: false,
      reaction: "innerhalb von 1 Stunde",
      features: [
        "Alles aus Komfort",
        "Erweiterte IT-Sicherheit",
        "Regelmäßige IT-Strategiegespräche",
        "Bevorzugte Reaktionszeiten",
      ],
    },
  ],
};

/**
 * Branchen-/Anwendungsfälle – Relevanz und SEO.
 */
export const branchen = {
  eyebrow: "Branchen",
  heading: "IT-Betreuung, die Ihre Branche versteht",
  intro:
    "Wir kennen die Anforderungen unterschiedlicher Branchen und richten IT, Netzwerke und Telefonie passend ein.",
  items: [
    {
      icon: "Boxes",
      title: "Handel & E-Commerce",
      text: "Stabile Systeme für Verkauf und Warenwirtschaft – inklusive JTL-Umfeld.",
    },
    {
      icon: "Wrench",
      title: "Handwerk & Mittelstand",
      text: "Verlässliche IT und Telefonie für den Betriebsalltag – ohne eigenes IT-Team.",
    },
    {
      icon: "Scale",
      title: "Kanzleien & Praxen",
      text: "Sichere, datenschutzkonforme IT für den Umgang mit sensiblen Daten.",
    },
    {
      icon: "Building2",
      title: "Dienstleister & Büros",
      text: "Moderne Arbeitsplätze, Netzwerke und Telefonie in einem stimmigen Setup.",
    },
  ],
};

/**
 * Dezenter Störungs-/Notfall-Hinweis – führt zum Rückrufservice.
 */
export const stoerung = {
  heading: "Störung im Betrieb? Schnelle Reaktion – aus der Ferne oder vor Ort.",
  text: "Ein Anruf über den Rückrufservice genügt. Wir grenzen das Problem per Fernzugriff ein und kommen, wenn nötig, vorbei.",
  cta: { label: "Rückruf anfordern", href: "#rueckruf" },
};

/**
 * KI-Baustein (auf der Startseite bewusst untergeordnet, ein Anwendungsfall).
 */
export const kiHome = {
  eyebrow: "Ergänzend: KI in der Praxis",
  heading: "Sprache-zu-Text – lokal und datenschutzkonform",
  text: "In eigenen Abläufen bereits im Einsatz: lokal laufende KI (Whisper) verschriftet Sprache automatisch – ohne Cloud, ohne Datenabfluss.",
  cta: { label: "Mehr zur KI-Praxis", href: "/ki-in-der-praxis" },
};

// --- Leistungen (Detailfelder für /leistungen und Chatbot-Kontext) ----------

export type Service = {
  slug: string;
  icon: string; // lucide-react Icon-Name (Mapping in der Komponente)
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "it-loesungen",
    icon: "Network",
    title: "IT-Lösungen & Infrastruktur",
    description:
      "Wir planen, modernisieren und betreuen Ihre komplette IT – Server, Netzwerke und Arbeitsplätze. Stabil, sicher und ohne Ausfallsorgen.",
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
      "Individuelle Software und maßgeschneiderte JTL-Module für Ihre Prozesse. Wir erweitern Ihr System genau um das, was im Alltag fehlt.",
  },
  {
    slug: "development",
    icon: "Code2",
    title: "Development",
    description:
      "Von der Web-Anwendung bis zur Schnittstelle: Wir entwickeln Software, die exakt zu Ihren Abläufen passt und mit Ihnen wächst.",
  },
  {
    slug: "ki-loesungen",
    icon: "Sparkles",
    title: "KI-Lösungen",
    description:
      "Praxiserprobte KI dort, wo sie Zeit spart – etwa Sprache-zu-Text mit lokal laufender KI, datenschutzkonform ohne Cloud.",
  },
];

export const kiPraxis = {
  eyebrow: "KI in der Praxis",
  heading: "Sprache-zu-Text mit lokaler KI",
  intro:
    "Ein klarer Anwendungsfall statt großer Versprechen: Wir wandeln Sprache automatisch in durchsuchbaren Text um – mit lokal laufender KI (Whisper), ohne Cloud und ohne Datenabfluss.",
  cta: { label: "Das richten wir auch für Sie ein", href: "/kontakt" },
  cases: [
    {
      icon: "AudioLines",
      title: "Sprache-zu-Text mit Whisper",
      problem:
        "Problem: Notizen, Besprechungen und Serviceeinsätze kosten im Nachgang viel Tipparbeit.",
      solution:
        "Lösung: Eine lokal laufende KI (Whisper) wandelt Sprache automatisch in Text um – die Daten bleiben im Haus.",
      result:
        "Ergebnis: Dokumentation entsteht nebenbei – datenschutzkonform, ohne Cloud und ohne Abtippen.",
    },
  ],
};

export const trust = {
  eyebrow: "Partner & Vertrauen",
  heading: "Verlässlich für Unternehmen",
  intro:
    "Wir arbeiten mit bewährten Technologiepartnern und begleiten unsere Kunden langfristig – bodenständig und verbindlich.",
  partnerHeading: "Unsere Technologie-Partner",
  // „Diese Unternehmen vertrauen uns" – echte Referenzkunden. Logo-Nutzung nur
  // nach Freigabe des jeweiligen Kunden, daher zunächst Namensplatzhalter.
  kundenHeading: "Diese Unternehmen vertrauen uns",
  kunden: [
    "ThyssenKrupp Stahlbau",
    "TUI",
    "Deutsche Messe AG",
    "HIS GmbH",
    "J+S Druckfarben",
  ],
  // Zertifizierungen/Partnerstatus – Platzhalter, mit echten Nachweisen füllen.
  zertifikateHeading: "Zertifizierungen & Partnerstatus",
  zertifikate: ["{{ZERTIFIKAT_1}}", "{{ZERTIFIKAT_2}}", "{{ZERTIFIKAT_3}}"],
  // icon = Schlüssel aus brandLogoMap (echtes Logo). Ohne icon = Text-Wortmarke.
  partners: [
    { name: "HP", icon: "hp" },
    { name: "Fujitsu", icon: "fujitsu" },
    { name: "Starface" },
    { name: "Yeastar" },
    { name: "Jeester" },
  ],
  // Qualitative Vertrauens-Merkmale (belegbar, keine „dünnen" Zahlen).
  points: [
    {
      icon: "Award",
      title: "Seit 1994",
      text: "Über 30 Jahre Erfahrung als IT-Systemhaus in Hannover.",
    },
    {
      icon: "ShieldCheck",
      title: "Herstellerunabhängig",
      text: "Wir empfehlen die Lösung, die zu Ihrem Betrieb passt.",
    },
    {
      icon: "UserRound",
      title: "Fester Ansprechpartner",
      text: "Persönliche Betreuung statt wechselnder Hotlines.",
    },
    {
      icon: "MapPin",
      title: "Region Hannover",
      text: "Schnell vor Ort – und deutschlandweit per Fernwartung.",
    },
  ],
  // Echte, zur Nennung freigegebene Referenzprojekte (neutrale Projektbeschreibung, keine erfundenen Zitate).
  testimonials: [
    {
      quote: "Individuelle Warenwirtschaftssoftware – entwickelt und betreut von PComplett-IT.",
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
  heading: "Lassen Sie uns über Ihre IT sprechen.",
  text: "Wir analysieren Ihre Situation und zeigen Ihnen konkret, wo wir Ihren Betrieb entlasten und absichern – unverbindlich und verständlich.",
  cta: { label: "Rückruf anfordern", href: "/#rueckruf" },
};

export const prozess = {
  eyebrow: "So arbeiten wir",
  heading: "In vier Schritten zur Lösung",
  intro:
    "Vier nachvollziehbare Schritte – von der ersten Bestandsaufnahme bis zum dauerhaften Betrieb.",
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

export const faq = {
  eyebrow: "Häufige Fragen",
  heading: "Was Kunden oft fragen",
  intro:
    "Sie haben eine Frage, die hier nicht beantwortet wird? Fordern Sie einfach einen Rückruf an – wir helfen gern weiter.",
  items: [
    {
      q: "Für welche Unternehmen arbeiten Sie?",
      a: "Wir betreuen Unternehmen jeder Größe – vom Handwerksbetrieb bis zum Mittelstand – mit Serviceverträgen, Infrastruktur, Telefonie und IT-Sicherheit.",
    },
    {
      q: "Was bringt ein Servicevertrag?",
      a: "Kalkulierbare Kosten, verbindliche Reaktionszeiten und laufende Wartung – statt erst dann zu handeln, wenn bereits etwas ausgefallen ist.",
    },
    {
      q: "Wie schnell sind Sie im Notfall erreichbar?",
      a: "Bei Störungen helfen wir per Fernwartung oder vor Ort – so schnell wie möglich, im Rahmen Ihres Servicevertrags priorisiert.",
    },
    {
      q: "Arbeiten Sie herstellerunabhängig?",
      a: "Ja. Wir empfehlen die Lösung, die zu Ihrem Betrieb passt, statt an bestimmte Hersteller gebunden zu sein.",
    },
    {
      q: "Richten Sie auch Telefonanlagen ein?",
      a: "Ja. Wir planen, installieren und betreuen moderne Telefonanlagen für Unternehmen – vom kleinen Team bis zu mehreren Hundert Anschlüssen.",
    },
    {
      q: "Wie läuft der Wechsel des IT-Dienstleisters ab?",
      a: "Strukturiert und ohne Ausfall: Wir übernehmen Dokumentation und Zugänge, prüfen Ihre Systeme und übernehmen die Betreuung schrittweise – Ihr Betrieb läuft dabei weiter.",
    },
    {
      q: "Wie ist der Datenschutz geregelt?",
      a: "Wir arbeiten DSGVO-konform, schließen bei Bedarf einen Auftragsverarbeitungsvertrag ab und setzen – wo möglich – auf Lösungen, die Ihre Daten im Haus halten.",
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
    "Schildern Sie uns Ihr Anliegen – wir antworten zeitnah mit einer fachlichen Ersteinschätzung. Kein anonymes Ticket, sondern eine konkrete Rückmeldung.",
  // Auswahlmöglichkeiten für das Feld „Anliegen"
  subjects: [
    "Servicevertrag / IT-Betreuung",
    "Serveraufbau / Netzwerk",
    "Arbeitsplätze / Hardware & Software",
    "Telefonanlage",
    "IT-Sicherheit",
    "Sonstiges",
  ],
  formNote:
    "Ihre Angaben verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage. Weitere Informationen finden Sie in unserer Datenschutzerklärung.",
  successTitle: "Vielen Dank für Ihre Anfrage!",
  successText:
    "Wir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich bei Ihnen.",
};

export const footer = {
  tagline:
    "IT-Systemhaus für Unternehmen in Hannover. Seit 1994 verlässlicher Partner für Betrieb, Sicherheit und Telefonie der Unternehmens-IT.",
  legalLinks: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
    { label: "Barrierefreiheit", href: "/barrierefreiheit" },
  ],
};

export const chatbot = {
  title: "PComplett-IT Assistent",
  subtitle: "Fragen zu unseren Leistungen? Fragen Sie mich.",
  openLabel: "Chat öffnen",
  closeLabel: "Chat schließen",
  placeholder: "Ihre Frage …",
  greeting:
    "Hallo! Ich beantworte gern Ihre Fragen zu den Leistungen von PComplett-IT – IT-Betreuung, Serveraufbau, Netzwerke, Telefonanlagen und IT-Sicherheit. Wie kann ich helfen?",
  unavailable:
    "Der Chat-Assistent ist derzeit nicht verfügbar. Fordern Sie gern einen Rückruf an oder nutzen Sie das Kontaktformular – wir melden uns zeitnah.",
  errorText:
    "Entschuldigung, das hat gerade nicht geklappt. Bitte versuchen Sie es erneut oder nutzen Sie das Kontaktformular.",
};
