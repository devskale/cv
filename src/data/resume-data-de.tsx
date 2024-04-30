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
    "Business Developer mit Hintergrund in Computertechnik, KI und Robotik.",
  summary:
    "Meine Spezialisierung als Entwicklungsingenieur waren digitale ASICs. Ich leitete die Entwicklung eines innovativen optischen Glasfasernetzwerks, das heute in der Formel 1 zum Einsatz kommt. Als Business Development Manager kooperierte ich mit führenden Technologieunternehmen und gründete mehrere Start-ups mit. Dabei akquirierte ich erfolgreich Risikokapital und schärfte meine Fähigkeiten zur Produktentwicklung. Mein Fachgebiet ist die Motivation von diversen Teams und die Förderung von Innovationen, um das Unternehmenswachstum zu beschleunigen.",
  avatarUrl: "https://skale.io/wp-content/uploads/2024/04/me_400x400.jpg",
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
    }
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
      description: "Beratung und Coaching für Start-ups und KMU. Als Mitgründer, Geschäftspartner, CTO für mehrere Technologieunternehmen tätig. Einwerbung von Forschungsgelder und Risikokapital. Teams aufgebaut und geleitet.",
    },
    {
      company: "StreamUnlimited Engineering (SUE)",
      link: "https://www.streamunlimited.com",
      badges: ["Onsite", "International"],
      title: "International Sales Manager",
      logo: sueLogo,
      start: "2007",
      end: "2008",
      description: "Ausweitung des globalen Vertriebsnetzes für die Software- und Hardwareprodukte von SUE, wodurch ein Wachstum der Vertriebspipeline um 30 % erreicht wurde. Bemerkenswert: 2017 beteiligt sich Google an SUE.",
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
        "Aufbau der Systemarchitektur für das erste Glasfasernetzwerk zur Audio- und Videoübertragung. Leitete die Entwicklung der ersten Version des Produkts.",
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
        "Produktbesitz eines komplexen DSL-Modem-ASIC-Designs. Entwicklung von DSP-Algorithmen für IP-Telefongeräte.",
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
        "ASIC-Design für Powerline-Kommunikation. Integration eines USB-IP-Cores in ein individuelles Chipdesign.",
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
    "WKO Constantinus Preis Finalist"
  ],
  projects: [
    {
      title: "GreenPilot",
      techStack: ["Mobile Game", "Education", "GreenTech"],
      description:
        "Konzeption und Finanzierung eines Handyspiels, das Kindern erneuerbare Energien näherbringt.",
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
        "Beratung für einen Seed Grant über 500.000 € von der Österreichischen Forschungsförderungsgesellschaft (FFG) für ein universitäres Spin-off-Projekt, das KI zur Analyse der Netzhaut nutzt.",
      logo: sLogo,
      link: {
        label: "Retinsight",
        href: "https://retinsight.com/",
      },
    },
    {
      title: "Pino Robotics",
      techStack: ["AI Vision", "Robotics", "Funding"],
      description: "Förderung einer innovativen KI-Vision-Technologie, um Industrierobotik für KMU nutzbar zu machen.",
      logo: sLogo,
      link: {
        label: "cncmonster.eu",
        href: "https://cncmonster.eu/",
      },
    },
    {
      title: "Bionana eShop",
      techStack: [
        "biodiversity",
        "e-commerce",
      ],
      description:
        "Beratung für ein Startup, das einen Marktplatz für Biodiversität aufbaut.",
      logo: sLogo,
      link: {
        label: "bionana.at",
        href: "https://www.bloomling.at/bionana",
      },
    },
    {
      title: "BlueInvest EU",
      techStack: [
        "Blue Economy",
        "Consulting",
        "EU",
      ],
      description:
        "Coaching für Startups und KMUs in der Blue Economy. BlueInvest ist eine Initiative der Europäischen Kommission.",
      logo: sLogo,
      link: {
        label: "blueinvest",
        href: "https://blueinvest-community.converve.io/",
      },
    },
    {
      title: "Seasy ePlatform",
      techStack: [
        "AI",
        "Business Development",
      ],
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
      techStack: [
        "Drone",
        "Sensor Fusion",
        "3D Mapping",
      ],
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
        "Mitbegründer eines Unternehmens, das neuartige Elektrojets für maritime Anwendungen baut. Aufbau eines Techteams. Entwicklungsleitung vom Prototyp bis zur Produktion.",
      logo: sLogo,
      link: {
        label: "sylents.de",
        href: "https://sylents.de/",
      },
    },
    {
      title: "stromkind drones",
      techStack: [
        "Robotics",
        "Drones",
        "Business Development"],
      description:
        "Mitbegründer eines Unternehmens, das Industriedrohnen baut und verkauft. Erworbene Startkapitalfinanzierung. Gewinnung von Kunden in der Schweiz, Norwegen, den Vereinigten Arabischen Emiraten, Thailand und China mit einem Umsatzwert von über 500.000 €",
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
        "Venture Capital"
      ],
      description: "Eine maschinelle Lernplattform für Musikempfehlungen. Ich war Mitbegründer des Unternehmens, sammelte Forschungsgelder und Risikokapital und leitete das Business Team.",
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
    }
  ],
} as const;
