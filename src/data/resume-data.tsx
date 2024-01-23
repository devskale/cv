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
    "Business Developer with a focus on Computer Science, Artificial Intelligence (AI) and Robotics.",
  summary:
    "As a Development Engineer i worked on custom ASICs (Infineon) and created the initial version of optical fiber networ (Riedel). As a Business Developer i cofounded startups, raised research fund and venture capital and built and led teams.",
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
      link: "https://www.nokia.com",
      badges: ["Onsite", "Travel"],
      title: "International Sales Manager",
      logo: NSNLogo,
      start: "2007",
      end: "2008",
      description: "Established international sales contacts for SUE's SW and HW products. Grew the sales pipeline +30%. In 2017 Google aquired a stake in SUE.",
    },
    {
      company: "skale venture development",
      link: "https://www.skale.io",
      badges: ["Onsite", "Remote"],
      title: "Owner",
      logo: NSNLogo,
      start: "2008",
      end: "2024",
      description: "Consulting and coaching for startups and SMEs. Acted as cofounder, business partner, CTO for several startups. Raised research funds and venture capital. Built and led teams.",
    }
  ],
  skills: [
    "Computer Science",
    "ASIC Design",
    "System Architecture",
    "python",
    "ML",
    "Relay",
    "Business Planning",
  ],
  awards: [
    "Best Austrian Startup Award WKO",
    "Winner at Pioneers Startup Festival",
    "3d place at i2b Businessplan Competition",
    "Nominee Austrian Stateprize Consulting WKO"
  ],
  projects: [
    {
      title: "sonarflow",
      techStack: [
        "Founding Partner",
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
      title: "Stromkind",
      techStack: ["Founding Partner",
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
      title: "sylents",
      techStack: ["Founding Partner", "Germany", "Maritime Electric Jet"],
      description:
        "Initiated and cofounded a company that builds electric jets for maritime applications. Led the technical development of the first prototype and moved technology to production.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://sylents.de/",
      },
    },
  ],
  seeds: [
    {
      title: "sonarflow",
      techStack: [
        "Founding Partner",
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
      title: "Stromkind",
      techStack: ["Founding Partner",
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
      title: "sylents",
      techStack: ["Founding Partner", "Germany", "Maritime Electric Jet"],
      description:
        "Initiated and cofounded a company that builds electric jets for maritime applications. Led the technical development of the first prototype and moved technology to production.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://sylents.de/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
  ],
} as const;
