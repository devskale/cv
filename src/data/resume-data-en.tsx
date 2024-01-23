import {
  riedelLogo,
  coactiveLogo,
  infineonLogo,
  sueLogo,
  skaleLogo,
  sLogo,
} from "@/images/logos";


import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA_EN = {
  name: "Hans Waldherr",
  initials: "HW",
  location: "Neusiedl am See, Austria, CET",
  locationLink: "https://maps.app.goo.gl/hRnHuWXARPzwCYcE8",
  about:
    "Business developer specializing in Computer Science, AI, and Robotics.",
  summary:
    "As a Development Engineer, I designed custom ASICs and advanced to a Team Lead, steering the creation of a novel optical fiber network. My career pivoted to Business Development, where I worked with technology firms and co-founded startups, securing significant venture capital, and honed my skills in transforming ideas into products. My expertise lies in growing diverse teams and fostering innovation to drive business growth.",
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
      degree: "MBA course in Entrepreneurship & Innovation",
      start: "2004",
      end: "2006",
    }
  ],
  work: [
    {
      company: "skale venture development",
      link: "https://www.skale.io",
      badges: ["Onsite", "Remote"],
      title: "Owner",
      logo: skaleLogo,
      start: "2008",
      end: "ongoing",
      description: "Consulting and coaching for startups and SMEs. Acting as cofounder, business partner, CTO for several tech companies. Raised research funds and venture capital. Built, grew and led teams.",
    },
    {
      company: "StreamUnlimited Engineering (SUE)",
      link: "https://www.streamunlimited.com",
      badges: ["Onsite", "International"],
      title: "International Sales Manager",
      logo: sueLogo,
      start: "2007",
      end: "2008",
      description: "Expanded the global sales network for SUE's software and hardware products, achieving a 30% growth in the sales pipeline. Notably, in 2017, Google acquired a stake in SUE.",
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
        "Built the system architecture for the first optical fiber network for audio and video transmission. Led the development of the first version of the product.",
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
        "Product ownership of a complex DSL modem ASIC design. DSP algorithm development into IP phone equipment.",
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
        "ASIC design for powerline communication. Integration of a USB IP core into a custom chip design.",
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
        "Aquisition of seed grant of 500k€ from the Austrian Research Promotion Agency (FFG) for a university spinoff project that uses AI to analyze the retina.",
      logo: sLogo,
      link: {
        label: "Retinsight",
        href: "https://retinsight.com/",
      },
    },
    {
      title: "Pino Robotics",
      techStack: ["AI Vision", "Robotics", "Funding"],
      description: "Funding for an innovative AI vision technology to make industrial robotics usable for SMEs.",
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
        "Consulting for a startup that builds a marketplace for biodiversity.",
      logo: sLogo,
      link: {
        label: "bionana.at",
        href: "https:/bionana.at/",
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
        "Coaching for startups and SMEs in the Blue Economy. BlueInvest is an initiative of the European Commission.",
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
        "Consulting for a startup that builds europes leading marina rental platform.",
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
        "Led the funding process for a startup that builds a drone based 3D mapping solution for the construction industry.",
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
        "Initiated and cofounded a company that builds novel electric jets for maritime applications. Built techteam. Led development from first prototype to production.",
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
        "Cofounded a company that builds and sells industrial drones. Aquireed seed funding. Won clients in Switzerland, Norway, UAE, Thailand and China exceeding 500k€ in sales value",
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
      description: "A machine learning platform for music recommendation. I cofounded the company, raised research funds and venture capital and built and led the business team.",
      logo: sLogo,
      link: {
        label: "sonarflow.com",
        href: "https://sonarflow.com/",
      },
    },

  ],
} as const;
