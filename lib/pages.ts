/**
 * Inhalte der Unterseiten (Leistungs-Detailseiten, Über uns, Kontakt).
 * Texte hier zentral pflegen.
 */

export type ServiceDetail = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  /** Einzigartige Meta-Description (140–160 Zeichen) für <head>. */
  metaDescription: string;
  intro: string;
  benefits: { title: string; text: string }[];
  leistungen: string[];
  audience: string;
};

export const servicesDetail: ServiceDetail[] = [
  {
    slug: "ki-loesungen",
    icon: "Sparkles",
    title: "KI-Lösungen",
    tagline: "Künstliche Intelligenz, die im Alltag wirklich Zeit spart.",
    metaDescription:
      "KI-Lösungen für Unternehmen in Hannover: Wir automatisieren wiederkehrende Aufgaben wie Dokumenten- und Sprachverarbeitung – praxiserprobt und DSGVO-konform.",
    intro:
      "Viele KI-Projekte bleiben Theorie. Bei uns nicht: Wir setzen KI seit Jahren in unseren eigenen Abläufen ein und bauen genau diese praxiserprobten Lösungen für Ihr Unternehmen – vom ersten Anwendungsfall bis zum laufenden Betrieb.",
    benefits: [
      {
        title: "Weniger Routinearbeit",
        text: "Wiederkehrende Aufgaben wie Auftragserfassung oder E-Mail-Sortierung übernimmt die KI. Ihr Team gewinnt Zeit für das Wesentliche.",
      },
      {
        title: "Praxiserprobt",
        text: "Wir empfehlen nur, was wir selbst im Einsatz haben – kein Hype, sondern messbarer Nutzen.",
      },
      {
        title: "Datenschutzbewusst",
        text: "Wir wählen Modelle und Architektur passend zu Ihren Anforderungen an Vertraulichkeit und DSGVO.",
      },
    ],
    leistungen: [
      "Analyse Ihrer Prozesse auf sinnvolle KI-Anwendungsfälle",
      "Automatisierte Auftrags- und Dokumentenverarbeitung",
      "KI-gestützte E-Mail-Bearbeitung und Priorisierung",
      "Sprach-zu-Text-Workflows (z. B. mit Whisper)",
      "Anbindung an Ihre bestehenden Systeme",
      "Schulung und laufende Betreuung",
    ],
    audience:
      "Für Unternehmen, die konkrete Aufgaben automatisieren möchten – vom Handwerksbetrieb bis zum Mittelstand.",
  },
  {
    slug: "it-loesungen",
    icon: "Network",
    title: "IT-Lösungen",
    tagline: "Eine IT, die einfach läuft – geplant, modernisiert und betreut.",
    metaDescription:
      "IT-Betreuung und Infrastruktur für Unternehmen in Hannover: Server, Netzwerke und Arbeitsplätze planen, modernisieren und stabil betreiben – ohne Ausfallsorgen.",
    intro:
      "Ihre IT soll Ihr Geschäft tragen, nicht bremsen. Wir planen, modernisieren und betreuen Ihre gesamte Infrastruktur – von Servern und Netzwerken bis zur Cloud. Zuverlässig, sicher und mit einem festen Ansprechpartner.",
    benefits: [
      {
        title: "Ausfallsicher",
        text: "Durchdachte Infrastruktur und Monitoring sorgen dafür, dass Ihre Systeme stabil laufen.",
      },
      {
        title: "Aus einer Hand",
        text: "Beratung, Umsetzung und Betrieb – ein Partner für Ihre komplette IT.",
      },
      {
        title: "Zukunftssicher",
        text: "Wir modernisieren Schritt für Schritt, ohne Ihren Betrieb zu unterbrechen.",
      },
    ],
    leistungen: [
      "Planung und Aufbau von Server- und Netzwerkinfrastruktur",
      "Cloud-Anbindung und Hybrid-Lösungen",
      "Virtualisierung und virtuelle Server",
      "Backup- und Wiederherstellungskonzepte",
      "Monitoring und Wartung",
      "Support per Fernwartung und vor Ort",
    ],
    audience:
      "Für Unternehmen, die eine verlässliche IT ohne eigenes IT-Team brauchen.",
  },
  {
    slug: "it-sicherheit",
    icon: "ShieldCheck",
    title: "IT-Sicherheit",
    tagline: "Schutz, bevor aus einem Vorfall ein Problem wird.",
    metaDescription:
      "IT-Sicherheit für Unternehmen in Hannover: Firewalls, Backups und Schutz vor Ransomware und Phishing – bevor ein Zwischenfall zum Stillstand wird.",
    intro:
      "Cyberangriffe treffen längst nicht nur Konzerne. Wir sichern Ihre Systeme und Daten mit einem stimmigen Konzept ab – von der Firewall über Backups bis zur Sensibilisierung Ihrer Mitarbeitenden.",
    benefits: [
      {
        title: "Mehrschichtiger Schutz",
        text: "Firewall, Endpoint-Schutz und Backups greifen ineinander statt einzeln.",
      },
      {
        title: "Für den Notfall vorgesorgt",
        text: "Getestete Backups und ein Wiederherstellungsplan – damit ein Zwischenfall kein Stillstand wird.",
      },
      {
        title: "Verständlich",
        text: "Wir erklären Risiken und Maßnahmen klar und verständlich.",
      },
    ],
    leistungen: [
      "Firewall- und Netzwerksicherheit",
      "Backup- und Notfallkonzepte",
      "Schutz vor Viren, Ransomware und Phishing",
      "Sichere Fernzugriffe (VPN)",
      "Sicherheits-Checks Ihrer bestehenden IT",
      "Sensibilisierung Ihrer Mitarbeitenden",
    ],
    audience:
      "Für Unternehmen, die ihre Daten und ihren Betrieb wirksam absichern wollen.",
  },
  {
    slug: "software-jtl",
    icon: "Puzzle",
    title: "Software & JTL-Module",
    tagline: "Software, die genau zu Ihren Prozessen passt.",
    metaDescription:
      "Individuelle Software und JTL-Module für Unternehmen in Hannover: Wir erweitern Ihre Warenwirtschaft um die Funktionen, die Ihnen im Tagesgeschäft fehlen.",
    intro:
      "Standardsoftware kann viel – aber selten alles. Wir entwickeln individuelle Anwendungen und maßgeschneiderte JTL-Module, die Ihr System genau um das erweitern, was Ihnen im Alltag fehlt.",
    benefits: [
      {
        title: "Passgenau",
        text: "Funktionen, die exakt Ihre Abläufe abbilden – nicht umgekehrt.",
      },
      {
        title: "JTL-Erfahrung",
        text: "Wir erweitern Ihre JTL-Warenwirtschaft gezielt um fehlende Bausteine.",
      },
      {
        title: "Investitionssicher",
        text: "Saubere Umsetzung, dokumentiert und wartbar.",
      },
    ],
    leistungen: [
      "Individuelle JTL-Module und Erweiterungen",
      "Anbindung von Warenwirtschaft und Schnittstellen",
      "Automatisierung wiederkehrender Abläufe",
      "Datenimporte, Reports und Auswertungen",
      "Anpassung bestehender Software",
      "Wartung und Weiterentwicklung",
    ],
    audience:
      "Für Händler und Betriebe, die ihre Software an ihre Prozesse anpassen wollen.",
  },
  {
    slug: "development",
    icon: "Code2",
    title: "Development",
    tagline: "Individuelle Software, die mit Ihnen wächst.",
    metaDescription:
      "Softwareentwicklung für Unternehmen in Hannover: Web-Anwendungen, Schnittstellen und Datenbanken – passgenau zu Ihren Abläufen und langfristig wartbar.",
    intro:
      "Wenn Standardlösungen an ihre Grenzen kommen, entwickeln wir passgenaue Software – von der Web-Anwendung bis zur Schnittstelle zwischen Ihren Systemen. Sauber umgesetzt und langfristig wartbar.",
    benefits: [
      {
        title: "Auf Ihre Abläufe zugeschnitten",
        text: "Wir bauen, was Sie wirklich brauchen – nicht mehr und nicht weniger.",
      },
      {
        title: "Integriert",
        text: "Schnittstellen verbinden Ihre Systeme, damit Daten nicht doppelt gepflegt werden.",
      },
      {
        title: "Nachhaltig",
        text: "Wartbarer Code und Dokumentation sichern Ihre Investition.",
      },
    ],
    leistungen: [
      "Individuelle Web-Anwendungen",
      "Schnittstellen (APIs) zwischen Systemen",
      "Automatisierung von Geschäftsprozessen",
      "Datenbank-Lösungen",
      "Wartung und Weiterentwicklung",
      "Beratung zu Architektur und Technologie",
    ],
    audience:
      "Für Unternehmen mit besonderen Anforderungen, die Standard nicht abdeckt.",
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return servicesDetail.find((s) => s.slug === slug);
}

export const aboutPage = {
  eyebrow: "Über uns",
  heading: "Seit 1994 Ihr IT-Partner in Hannover",
  intro:
    "Seit 1994 verantwortet PComplett die IT von Unternehmen in Hannover und der Region – vom einzelnen Serverprojekt bis zur vollständigen Betriebsübernahme.",
  ownerNote: "Inhaber: Frank Bernhardt",
  values: [
    {
      title: "Persönlich",
      text: "Feste Ansprechpartner, die Ihre Systeme kennen – keine wechselnden Hotlines.",
    },
    {
      title: "Herstellerunabhängig",
      text: "Wir empfehlen, was zu Ihnen passt – nicht, was wir verkaufen müssen.",
    },
    {
      title: "Betreuungsqualität",
      text: "Wir halten Ihre IT dauerhaft am Laufen – planbar über Serviceverträge.",
    },
    {
      title: "Regional verwurzelt",
      text: "Seit über 30 Jahren in Hannover zu Hause und in der Region aktiv.",
    },
  ],
  story: [
    "Als IT-Systemhaus begleiten wir Unternehmen seit über drei Jahrzehnten bei jedem Technologiesprung – von den ersten Netzwerken bis zur heutigen Infrastruktur.",
    "Unsere Kompetenz reicht von Serveraufbau und Netzwerken über Arbeitsplätze bis zu Telefonanlagen. Vieles läuft im Rahmen fester Serviceverträge – damit Sie sich auf Ihr Geschäft konzentrieren können.",
  ],
  // Kompetenzfelder als kurze Stichworte (B2B).
  competences: [
    "Serviceverträge & IT-Betreuung",
    "Serveraufbau & Infrastruktur",
    "Netzwerke",
    "Telefonanlagen",
    "IT-Sicherheit & Hardware",
  ],
};

export const fernwartungPage = {
  eyebrow: "Fernwartung",
  heading: "Schnelle Hilfe per Fernzugriff",
  intro:
    "Mit unserer Fernwartung lösen wir viele Probleme direkt an Ihrem Bildschirm – ohne Anfahrt und ohne Wartezeit. Sie behalten dabei jederzeit die Kontrolle und sehen alles mit.",
  // TODO(CONTENT): Nach Wahl des Tools den echten Download-Link einsetzen.
  downloadLabel: "Fernwartung starten",
  downloadHref: "{{FERNWARTUNG_DOWNLOAD_URL}}",
  toolNote:
    "Hinweis: Der Download-Link wird eingerichtet, sobald das Fernwartungs-Tool festgelegt ist.",
  steps: [
    {
      title: "1. Anrufen",
      text: "Rufen Sie uns an. Gemeinsam klären wir kurz Ihr Anliegen.",
    },
    {
      title: "2. Programm starten",
      text: "Sie starten das kleine Fernwartungs-Programm – keine Installation nötig.",
    },
    {
      title: "3. Verbinden",
      text: "Sie nennen uns die angezeigte ID und Ihr Einmal-Passwort. Erst dann bauen wir die Verbindung auf.",
    },
    {
      title: "4. Lösen",
      text: "Wir beheben das Problem direkt an Ihrem Rechner – Sie sehen jeden Schritt mit.",
    },
  ],
  security: [
    "Die Verbindung kommt nur mit Ihrer aktiven Zustimmung zustande.",
    "Der Zugriff ist auf die Sitzung begrenzt und endet, sobald Sie das Programm schließen.",
    "Übertragung verschlüsselt – Sie können jederzeit abbrechen.",
  ],
};

export const karrierePage = {
  eyebrow: "Karriere",
  heading: "Werden Sie Teil von PComplett",
  intro:
    "Wir sind ein kleines, eingespieltes Team mit kurzen Wegen und viel Gestaltungsspielraum – und arbeiten mit modernster IT und KI. Bei uns übernehmen Sie Verantwortung und sehen, was Sie bewirken.",
  benefits: [
    { title: "Kurze Wege", text: "Flache Hierarchien, schnelle Entscheidungen und ein echtes Team statt Konzernstrukturen." },
    { title: "Moderne Technik", text: "Sie arbeiten mit aktueller IT und praxiserprobter KI – nicht mit Alt-Systemen." },
    { title: "Weiterentwicklung", text: "Zertifizierungen, Schulungen und Raum, Neues auszuprobieren." },
    { title: "Region Hannover", text: "Ein sicherer Arbeitsplatz bei einem etablierten Partner mit über 30 Jahren Erfahrung." },
  ],
  // TODO(CONTENT): Offene Stellen ergänzen, sobald vorhanden.
  openPositions: [] as { title: string; type: string }[],
  initiativ:
    "Aktuell sind keine Stellen ausgeschrieben. Sie passen trotzdem zu uns? Wir freuen uns über Ihre Initiativbewerbung – am einfachsten über unser Kontaktformular oder den Rückrufservice.",
};

export const barrierefreiheitPage = {
  eyebrow: "Barrierefreiheit",
  heading: "Erklärung zur Barrierefreiheit",
  intro:
    "Wir möchten, dass diese Website von möglichst allen Menschen genutzt werden kann – unabhängig von Einschränkungen oder Technik.",
  // TODO(CONTENT): Vor Livegang rechtlich prüfen und Stand/Status bestätigen.
  sections: [
    {
      heading: "Unser Anspruch",
      text: "Wir orientieren uns bei der Gestaltung an den Web Content Accessibility Guidelines (WCAG 2.2, Stufe AA): semantisches HTML, ausreichende Kontraste, sichtbare Fokus-Markierungen, Tastaturbedienbarkeit und Rücksicht auf die Einstellung für reduzierte Bewegung.",
    },
    {
      heading: "Stand der Vereinbarkeit",
      text: "Diese Website ist nach unserer Einschätzung weitgehend barrierefrei nutzbar. Sollten einzelne Inhalte noch nicht vollständig barrierefrei sein, arbeiten wir laufend an Verbesserungen.",
    },
    {
      heading: "Barrieren melden",
      text: "Ist Ihnen eine Barriere aufgefallen oder benötigen Sie Inhalte in einer zugänglicheren Form? Melden Sie sich bitte über unser Kontaktformular oder den Rückrufservice – wir helfen weiter und bessern nach.",
    },
  ],
};

export const kontaktPage = {
  eyebrow: "Kontakt",
  heading: "Sprechen wir über Ihr Vorhaben",
  intro:
    "Ob Servicevertrag, Serveraufbau, Netzwerk oder Telefonanlage: Erzählen Sie uns kurz von Ihrem Anliegen. Wir melden uns zeitnah mit einer konkreten, verständlichen Einschätzung.",
  anfahrtHeading: "So finden Sie uns",
  anfahrt: [
    {
      title: "Mit dem Auto",
      text: 'Von der A7, Abfahrt Altwarmbüchen, durch den Ort auf die Podbielskistraße. An der Stadtbahn-Haltestelle „Vier Grenzen" rechts in die Straße „Am Listholze" – nach ca. 400 m liegt die Hausnummer 31A.',
    },
    {
      title: "Mit Bus & Bahn",
      text: 'Mit der Stadtbahn Linie 3 oder 7 ab Hannover Hauptbahnhof Richtung Lahe/Fasanenkrug bis zur Haltestelle „Vier Grenzen". Von dort ca. 400 m die Straße „Am Listholze" entlang bis zur Nr. 31A.',
    },
  ],
};
