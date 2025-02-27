import {
  riedelLogo,
  coactiveLogo,
  infineonLogo,
  sueLogo,
  skaleLogo,
  sLogo,
} from "@/images/logos";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hans Waldherr",
  initials: "HW",
  location: "Neusiedl am See, Austria, CET",
  locationLink: "https://maps.app.goo.gl/hRnHuWXARPzwCYcE8",
  about:
    "Computertechniker mit Fokus auf Robotics/AI und Erfahrung in der Unternehmensentwicklung.",
  summary:
    "Meine technische Entwicklungserfahrung umfasst ASIC-Design, Robotik und ML/KI-Anwendungen für Startups und Technologieunternehmen. Durch meine Expertise in der Unternehmensentwicklung habe ich technische Konzepte zu marktreifen Produkten für unterschiedliche Branchen gebracht. Ich habe Finanzmittel beschafft und technische Teams geleitet.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQFg6bUzH06fxA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728465334303?e=1746057600&v=beta&t=xjyxblpDtiOVpwoVLdtgA7G2SuIkpHYGxGeXwxCpvzE",
  personalWebsiteUrl: "https://skale.io",
  contact: {
    email: "hans@skale.io",
    tel: "+436607383285",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/devskale",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/johannwaldherr/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/woodmastr",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Technische Universität Wien",
      degree: "Diplomstudium Computertechnik",
      start: "1993",
      end: "2000",
    },
    {
      school: "Donau Universität Krems",
      degree: "MBA Kurs Entrepreneurship & Innovation",
      start: "2006",
      end: "2008",
    },
  ],
  work: [
    {
      company: "skale venture development",
      link: "https://www.skale.io",
      badges: ["Onsite", "Remote"],
      title: "Inhaber",
      logo: skaleLogo,
      start: "2008",
      end: "heute",
      description:
        "Als technischer Partner arbeite ich mit Gründern im Bereich Robotik und KI zusammen. Ich entwickle mit ihnen innovative Produkte, sichere Finanzierungen und leite Teams, um marktreife Lösungen zu liefern.",
    },
    {
      company: "StreamUnlimited Engineering (SUE)",
      link: "https://www.streamunlimited.com",
      badges: ["Onsite", "International"],
      title: "International Sales Manager",
      logo: sueLogo,
      start: "2007",
      end: "2008",
      description:
        "Leitung des technischen Vertriebs für eine innovative Smartspeaker Systeme. Ausbau des Vertriebsnetzes mit 30% Pipeline-Wachstum. Unternehmen wurde später von Google übernommen.",
    },
    {
      company: "Riedel Mediornet",
      link: "https://riedel.net",
      badges: ["Onsite"],
      title: "System Engineer → Lead System Architect",
      logo: riedelLogo,
      start: "2004",
      end: "2007",
      description:
        "Erstellung der Systemarchitektur für das erste optische Echtzeit-Netzwerk für Live-Multimedia in der Rundfunkbranche. Vom Konzept zum Produkt, Aufbau des technischen Teams, Betreuung von Hauptkunden (ORF).",
    },
    {
      company: "Infineon Technologies",
      link: "https://infineon.com",
      badges: ["Onsite"],
      title: "ASIC Engineer → DSP Engineer",
      logo: infineonLogo,
      start: "2001",
      end: "2003",
      description:
        "Produktverantwortung für ein Submodul eines komplexen DSL-Modem ASIC-Design. Entwicklung von DSP-Algorithmen.",
    },
    {
      company: "Coactive Networks",
      link: "https://coactive.com",
      badges: ["US", "Silicon Valley"],
      title: "ASIC Designer",
      logo: coactiveLogo,
      start: "1999",
      end: "2000",
      description:
        "ASIC-Design für Powerline-Kommunikation bei einem US Startup. Einführung innovativer HW/SW-Codesign-Prinzipien.",
    },
  ],
  skills: [
    "Business Planning",
    "Tech Funding",
    "Computer Science",
    "System Architecture",
    "AI/ML",
    "Robotics",
    "Embedded Computing",
  ],
  awards: [
    "Bestes Startup Österreichs WKO",
    "Gewinner Pioneers Startup Festival",
    "3er Rang i2b Businessplan",
    "Nominiert für Österreichischer Staatspreis Consulting",
    "WKO Constantinus Preis Finalist",
  ],
  projects: [
    {
      title: "LegalTech",
      techStack: ["Agentic AI", "Legaltech"],
      description:
        "Entwicklung einer sicheren KI-Plattform zur Qualifizierung von Ausschreibungsprozessen.",
      logo: sLogo,
      link: {
        label: "wienerwohnen",
        href: "https://www.wienerwohnen.at/",
      },
    },
    {
      title: "GreenPilot",
      techStack: ["Mobile Game", "Education", "GreenTech"],
      description:
        "Konzeption und Finanzierung eines Handyspiels, das Kindern erneuerbare Energien durch innovative Spielmechaniken vermittelt.",
      logo: sLogo,
      link: {
        label: "greenpilot.at",
        href: "https://www.greenpilot.at/",
      },
    },
    {
      title: "Retinsight AI",
      techStack: ["AI", "MedTech", "Research Grant"],
      description:
        "Beratung für eine KI-gestützte Netzhautanalyse-Plattform. Erfolgreiche Ausgründung als akademisches Spinoff.",
      logo: sLogo,
      link: {
        label: "Retinsight",
        href: "https://retinsight.com/",
      },
    },
    {
      title: "Pino Robotics",
      techStack: ["AI Vision", "Robotics", "Funding"],
      description:
        "Consulting für innovativer KI-Vision-Technologie, um Industrierobotik für KMU nutzbar zu machen.",
      logo: sLogo,
      link: {
        label: "cncmonster.eu",
        href: "https://cncmonster.eu/",
      },
    },
    {
      title: "Bionana eShop",
      techStack: ["biodiversity", "e-commerce"],
      description:
        "Beratung für ein Startup, das einen digitalen Marktplatz für Biodiversität aufbaut.",
      logo: sLogo,
      link: {
        label: "bionana.at",
        href: "https://www.bloomling.at/bionana",
      },
    },
    {
      title: "BlueInvest EU",
      techStack: ["Blue Economy", "Consulting", "EU"],
      description:
        "Coaching für Startups und KMUs in der Blue Economy. Eine Initiative der Europäischen Kommission.",
      logo: sLogo,
      link: {
        label: "blueinvest",
        href: "https://blueinvest-community.converve.io/",
      },
    },
    {
      title: "Seasy ePlatform",
      techStack: ["AI", "Business Development"],
      description:
        "Beratung für ein Startup, das Europas führende Marina-Vermietungsplattform aufbaut.",
      logo: sLogo,
      link: {
        label: "seasy.com",
        href: "https://seasy.com/",
      },
    },
    {
      title: "Skyability Sensors",
      techStack: ["Drone", "Sensor Fusion"],
      description:
        "Leitete den Finanzierungsprozess für ein Startup, das eine drohnenbasierte 3D-Kartierungslösung für die Bauindustrie entwickelt.",
      logo: sLogo,
      link: {
        label: "skyability.com",
        href: "https://skyability.com/",
      },
    },
  ],
  seeds: [
    {
      title: "sylents e-jets",
      techStack: ["e-mobility", "maritime", "Production Rampup", "Germany"],
      description:
        "Gründungspartner eines maritimen E-Jet-Startups. Aufbau des technischen Teams. Leitung der Entwicklung vom ersten Prototyp bis zur Produktion.",
      logo: sLogo,
      link: {
        label: "sylents.de",
        href: "https://sylents.de/",
      },
    },
    {
      title: "stromkind drones",
      techStack: ["Robotics", "Drones", "Business Development"],
      description:
        "Mitgründer eines Unternehmens, das Spezialdrohnen entwickelt und vertreibt. Einwerbung von Seed-Finanzierung. Aufbau der Vertriebspipeline von über 500.000 €.",
      logo: sLogo,
      link: {
        label: "stromkind.com",
        href: "https://stromkind.com/",
      },
    },
    {
      title: "sonarflow visual music discovery",
      techStack: [
        "Machine Learning",
        "Business Planning",
        "Fundraising",
        "Venture Capital",
      ],
      description:
        "Entwicklung einer neuartigen Machine-Learning-Plattform für Musikempfehlungen. Einwerbung von Fördermitteln und Venture Capital, Aufbau und Leitung eines vielseitigen Teams.",
      logo: sLogo,
      link: {
        label: "sonarflow.com",
        href: "https://sonarflow.com/",
      },
    },
  ],
  downloads: [
    {
      institution: "Technische Universität Wien",
      fname: "Diplomzeugnis [pdf]",
      link: "/files/Zeugnisse.pdf", // replace with the actual URL of the PDF file
    },
    {
      institution: "Donau Universität Krems",
      fname: "MBA Kurs Zeugnis [pdf]",
      link: "/files/Waldherr_MBA_Noten.pdf", // replace with the actual URL of the PDF file
    },
  ],
} as const;
