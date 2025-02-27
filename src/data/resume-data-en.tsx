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
    "Computer scientist bridging innovative technology development with business acumen",
  summary:
    "My experience spans ASIC design, robotics, and ML/AI applications for startups and tech firms. Through venture development expertise, I have successfully transformed technical concepts into market-ready products, secured capital funding, and led technical teams to deliver solutions across a diverse range of industries including legaltech, maritime e-mobility, and medical technology.",
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
    },
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
      description:
        "As a technical partner, I collaborate with founders in robotics and AI to develop innovative products and secure funding, leading teams to deliver market-leading solutions.",
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
        "Led technical sales for an innovative electronics platform, expanding sales and achieving 30% pipeline growth. Company was later acquired by Google.",
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
        "Built the system architecture for the first optical realtime network for live multimedia in the broadcast industry. From concept to product, built techteam, served lead clients.",
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
        "Product ownership of a complex DSL modem ASIC design. Development of DSP algorithms.",
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
        "ASIC design for powerline communication at a Silicon Valley tech startup. Introducing of innovative HW/SW codesign princpiles.",
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
    "WKO Constantinus Award Finalist",
  ],
  projects: [
    {
      title: "LegalTech",
      techStack: ["Agentic AI", "Legaltech"],
      description:
        "Development of a secure AI-driven legaltech platform to qualify tender processing, enhancing transactional precision and operational efficiency.",
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
        "Conception and funding of a mobile game that teaches kids on renewable energy with innovative game mechanics.",
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
        "Technical consulting for an AI-driven platform analyzing retinal data, enabling the successful spinoff of a university project into a venture focused on advancing this innovative technology.",
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
        "Technical consulting that led to securing funding for an innovative AI-powered machine vision technologyy to make industrial robotics usable for SMEs.",
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
        "Consulting for a startup that builds a digital marketplace for biodiversity.",
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
        "Coaching for startups and SMEs in the Blue Economy. BlueInvest is an initiative of the European Commission.",
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
        "Consulting for a startup that builds europes leading marina rental platform.",
      logo: sLogo,
      link: {
        label: "seasy.com",
        href: "https://seasy.com/",
      },
    },
    {
      title: "Skyability Sensors",
      techStack: ["Drone", "Machine Vision", "3D Mapping"],
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
      techStack: ["Robotics", "Drones", "Business Development"],
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
        "Venture Capital",
      ],
      description:
        "A novel machine learning platform for music recommendation and entity relationship vizualization. I cofounded the company, raised funds and venture capital, built and led teams.",
      logo: sLogo,
      link: {
        label: "sonarflow.com",
        href: "https://sonarflow.com/",
      },
    },
  ],
} as const;
