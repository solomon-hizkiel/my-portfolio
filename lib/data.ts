export type Achievement = {
  place: string;
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  role: string;
  result: string;
  stack: string[];
  github: string;
  live?: string;
  highlight?: string;
};

export const SITE = {
  name: "Solomon Hizkiel Kinfu",
  shortName: "Solomon",
  title: "Electrical & Computer Engineering Student",
  valueStatement:
    "Building intelligent, secure software at the intersection of machine learning, cybersecurity, and product.",
  email: "solomonhizkiel@gmail.com",
  phone: "+251 969 141 973",
  location: "Addis Ababa, Ethiopia",
  university: "Addis Ababa University (CTBE)",
  degree: "B.Sc. Electrical and Computer Engineering",
  graduation: "Expected 2027",
  year: "5th-year",
  cvPath: "/resume.html",
  interests: [
    "Machine Learning",
    "Cybersecurity",
    "Software Development",
    "Entrepreneurship",
  ],
  languages: [
    { name: "English", level: "Professional" },
    { name: "Amharic", level: "Native" },
    { name: "Afaan Oromo", level: "Native" },
  ],
};

export const SOCIAL = [
  {
    name: "GitHub",
    href: "https://github.com/solomon-hizkiel",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/solomon-hizkiel-b5a3a1361/",
  },
  {
    name: "Telegram",
    href: "https://t.me/Solanke_777",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    place: "2nd Place",
    title: "Cursor AI [EVENT_NAME]",
    detail: "[DATE] — competitive AI/build contest",
  },
  {
    place: "Finalist",
    title: "VI International Olympiad on Financial Security",
    detail: "2026 · Russia · Team Project Contest · “Tool” track",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Machine Learning",
    skills: ["Python", "scikit-learn", "Data analysis", "NLP basics", "Prompted LLM workflows"],
  },
  {
    title: "Security",
    skills: [
      "Threat monitoring",
      "OSINT tooling",
      "Secure coding habits",
      "Risk scoring",
      "Telegram OSINT (Telethon)",
    ],
  },
  {
    title: "Web",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git / GitHub", "Streamlit", "Linux", "Vercel", "EmailJS / Form APIs"],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "chigni-ai",
    title: "Chigni AI",
    tagline: "[ONE_SENTENCE_DESCRIPTION]",
    problem:
      "[PROBLEM] — What pain point or opportunity Chigni AI addresses for users.",
    solution:
      "[SOLUTION] — How the product works and what makes the approach clear or novel.",
    role: "[ROLE] e.g. Founder / Full-stack / ML engineer",
    result: "[METRIC or qualitative outcome] — never invent numbers.",
    stack: ["[STACK]", "e.g. Next.js", "Python"],
    github: "[GITHUB_URL]",
    live: "[LIVE_DEMO_URL]",
  },
  {
    slug: "stayethio",
    title: "StayEthio",
    tagline:
      "Localized hotel booking platform for Ethiopia — a full-stack startup built around local needs.",
    problem:
      "Travelers and hosts in Ethiopia need booking experiences that reflect local payment habits, language, and discovery patterns — not generic global templates.",
    solution:
      "A full-stack booking platform designed for Ethiopian context: property discovery, reservations, and flows shaped around local users and operators.",
    role: "Founder & full-stack developer",
    result: "[METRIC] e.g. listings live, users onboarded, or milestone — fill in when ready.",
    stack: ["[STACK]", "Full-stack web"],
    github: "[GITHUB_URL]",
    live: "[LIVE_DEMO_URL]",
    highlight: "Startup",
  },
  {
    slug: "fin-guardian",
    title: "Fin-Guardian",
    tagline:
      "International Olympiad on Financial Security finalist — OSINT dashboard for illicit finance signals on Telegram.",
    problem:
      "Investigators need faster ways to spot money-mule recruitment and illicit financial activity in public Telegram groups before evidence disappears.",
    solution:
      "A Streamlit + Telethon dashboard that scans public groups, scores risk with keywords and optional GPT-4o, and exports an evidence CSV for investigators.",
    role: "Team contributor · Tool track",
    result:
      "Finalist — VI International Olympiad on Financial Security 2026 (Russia), Team Project Contest, “Tool” track.",
    stack: ["Streamlit", "Telethon", "Python", "GPT-4o (optional)", "CSV export"],
    github: "[GITHUB_URL]",
    highlight: "Olympiad Finalist",
  },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "achievements", label: "Achievements" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
