import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hans Waldherr",
  initials: "HW",
  location: "Neusiedl am See, Austria, CET",
  locationLink: "https://maps.app.goo.gl/hRnHuWXARPzwCYcE8",
  about:
    "Business developer with applied expertise in Computer Science, Artificial Intelligence (AI), and Robotics.",
  summary:
    "In my role as a Development Engineer, I specialized in designing custom ASICs and played a pivotal role in developing the first version of the optical fiber network at Riedel. Transitioning into Business Development, I have successfully co-founded several startups, securing research funding and venture capital. My expertise extends to building and leading diverse teams, fostering innovation and driving business growth.",
  avatarUrl: "https://media.licdn.com/dms/image/C5603AQEuKW28-ihawA/profile-displayphoto-shrink_800_800/0/1531836294847?e=1711584000&v=beta&t=QP45JPmvSL8eESn8f8bWxNvOSc5xxHv0o9x2Ns05iNA",
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
      school: "Vienna University of Technology",
      degree: "Master's Degree in Computer Science",
      start: "1993",
      end: "2000",
    },
    {
      school: "Danube University Krems",
      degree: "MBA in Entrepreneurship & Innovation",
      start: "2004",
      end: "2006",
    }
  ],
  work: [
    {
      company: "Coactive Networks",
      link: "https://coactive.com",
      badges: ["US", "Silicon Valley"],
      title: "ASIC Designer",
      logo: ParabolLogo,
      start: "1999",
      end: "2000",
      description:
        "ASIC design for powerline communication",
    },
    {
      company: "Infineon Technologies",
      link: "https://infineon.com",
      badges: ["Onsite"],
      title: "ASIC Engineer → DSP Engineer",
      logo: ClevertechLogo,
      start: "2001",
      end: "2003",
      description:
        "DSL modem ASIC design, DSP algorithm development",
    },
    {
      company: "Riedel Mediornet",
      link: "https://riedel.net",
      badges: ["Onsite"],
      title: "System Engineer → Lead System Architect",
      logo: JojoMobileLogo,
      start: "2004",
      end: "2007",
      description:
        "Built the system architecture for the first optical fiber network for audio and video transmission. Led the development of the first version of the product.",
    },
    {
      company: "StreamUnlimited Engineering (SUE)",
      link: "https://www.streamunlimited.com",
      badges: ["Onsite", "Travel"],
      title: "International Sales Manager",
      logo: NSNLogo,
      start: "2007",
      end: "2008",
      description: "Expanded the global sales network for SUE's software and hardware products, achieving a 30% growth in the sales pipeline. Notably, in 2017, Google acquired a stake in SUE.",
    },
    {
      company: "skale venture development",
      link: "https://www.skale.io",
      badges: ["Onsite", "Remote"],
      title: "Owner",
      logo: NSNLogo,
      start: "2008",
      end: "ongoing",
      description: "Consulting and coaching for startups and SMEs. Acted as cofounder, business partner, CTO for several startups. Raised research funds and venture capital. Built and led teams.",
    }
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
    "Best Austrian Startup Award WKO",
    "Winner at Pioneers Startup Festival",
    "3d place at i2b Businessplan Competition",
    "Nominee Austrian Stateprize Consulting WKO",
    "WKO Constantinus Award Finalist"
  ],
  projects: [
    {
      title: "GreenPilot",
      techStack: ["Mobile Game", "Education", "GreenTech"],
      description:
        "Conception and financing of a mobile game that teaches kids about renewable energy.",
      logo: Minimal,
      link: {
        label: "greenpilot.at",
        href: "https://www.greenpilot.at/",
      },
    },
    {
      title: "Retinsight",
      techStack: ["AI", "MedTech", "Research Grant"],
      description:
        "Aquisition of seed grant of 500k€ from the Austrian Research Promotion Agency (FFG) for a university spinoff project that uses AI to analyze the retina.",
      logo: BarepapersLogo,
      link: {
        label: "Retinsight",
        href: "https://retinsight.com/",
      },
    },
    {
      title: "Pino Robotics",
      techStack: ["AI Vision", "Robotics", "Funding"],
      description: "Funding for an innovative AI vision technology to make industrial robotics usable for SMEs.",
      logo: YearProgressLogo,
      link: {
        label: "cncmonster.eu",
        href: "https://cncmonster.eu/",
      },
    },
    {
      title: "Bionana",
      techStack: [
        "biodiversity",
        "e-commerce",
      ],
      description:
        "Consulting for a startup that builds a marketplace for biodiversity.",
      logo: ParabolLogo,
      link: {
        label: "bionana.at",
        href: "https:/bionana.at/",
      },
    },
    {
      title: "BlueInvest",
      techStack: [
        "Blue Economy",
        "Consulting",
        "EU",
      ],
      description:
        "Coaching for startups and SMEs in the Blue Economy. BlueInvest is an initiative of the European Commission.",
      logo: ParabolLogo,
      link: {
        label: "blueinvest",
        href: "https://blueinvest-community.converve.io/",
      },
    },
    {
      title: "Seasy",
      techStack: [
        "AI",
        "Business Development",
      ],
      description:
        "Consulting for a startup that builds europes leading marina rental platform.",
      logo: ParabolLogo,
      link: {
        label: "seasy.com",
        href: "https://seasy.com/",
      },
    },
    {
      title: "Skyability",
      techStack: [
        "Drone",
        "Sensor Fusion",
        "3D Mapping",
      ],
      description:
        "Led the funding process for a startup that builds a drone based 3D mapping solution for the construction industry.",
      logo: ParabolLogo,
      link: {
        label: "skyability.com",
        href: "https://skyability.com/",
      },
    },
  ],
  seeds: [
    {
      title: "sonarflow visual music discovery",
      techStack: [
        "Machine Learning",
        "Business Planning",
        "Fundraising",
        "Venture Capital"
      ],
      description: "A machine learning platform for music recommendation. I cofounded the company, raised research funds and venture capital and built and led the business team.",
      logo: ConsultlyLogo,
      link: {
        label: "sonarflow.com",
        href: "https://sonarflow.com/",
      },
    },
    {
      title: "stromkind drones",
      techStack: [
        "Robotics",
        "Drones",
        "Business Development"],
      description:
        "Cofounded a company that builds and sells industrial drones. Won client contracts in Switzerland, Norway, UAE, Thailand and China.",
      logo: MonitoLogo,
      link: {
        label: "stromkind.com",
        href: "https://stromkind.com/",
      },
    },
    {
      title: "sylents e-jets",
      techStack: ["e-mobility", "maritime", "Production Rampup", "Germany"],
      description:
        "Initiated and cofounded a company that builds novel electric jets for maritime applications. Built techteam. Led development from first prototype to production.",
      logo: JarockiMeLogo,
      link: {
        label: "sylents.de",
        href: "https://sylents.de/",
      },
    },

  ],
} as const;
