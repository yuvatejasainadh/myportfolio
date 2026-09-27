/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PERSONAL_INFO = {
  name: "Yuvateja Sainadh",
  role: "Applied AI Engineer & Systems Architect",
  tagline: "Engineering intelligent systems, distributed backend infrastructure, and production-grade architectures.",
  email: "yuvatejasainadh.me@gmail.com",
  phone: "+91-9390942546",
  location: "Andhra Pradesh, India",
  logos: {
    light: "/logos/ys-logo-light.png",
    dark: "/logos/ys-logo-dark.png",
  },
  logoAlt: "Yuvateja Sainadh logo",
  summary: "Applied AI Engineer and Systems Architect focused on engineering intelligent systems, real-time AI security frameworks, and resilient backend architectures. Experienced in taking production-oriented technology from concept and design to deployment.",
};

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/yuvatejasainadh", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/pala-yuvateja-sainadh-8848b8294/", icon: "Linkedin" },
  { name: "X", url: "https://x.com/Yuvateja_003", icon: "SiX" },
  { name: "LeetCode", url: "https://leetcode.com/u/yuvateja_sainadh_/", icon: "SiLeetcode" },
  { name: "CodeChef", url: "https://www.codechef.com/users/yuvateja_003", icon: "SiCodechef" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/yuvatejasainadh1", icon: "SiHackerRank" },
  { name: "Codeforces", url: "https://codeforces.com/profile/yuvateja_sainadh_", icon: "SiCodeforces" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/yuvatejasainadh/", icon: "SiGeeksforgeeks" },
];

export const SKILLS = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Responsive UI", "Component Architecture", "Vite", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Authentication", "WebSockets"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    category: "Cloud",
    skills: ["Google Cloud", "Firebase", "Render", "Railway"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "MongoDB Atlas", "VS Code"],
  },
];

export type ProjectStatus = "IN DEVELOPMENT" | "COMPLETED" | "COMPLETED & LIVE";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  fullTitle: string;
  shortDescription: string;
  category: string;
  role: string;
  status: ProjectStatus;
  badge?: string;
  ecosystem?: string;
  relationship?: string;
  logo: string;
  logoAlt: string;
  description: string;
  highlights: string[];
  tech: string[];
  live?: string;
  github?: string;
  repoStatusText?: string;
  seoTitle: string;
  seoDescription: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "voiceshield",
    slug: "voiceshield",
    title: "VOICE SHIELD",
    fullTitle: "Real-Time AI-Powered Voice Impersonation Detection, Prevention & Risk Assessment Framework",
    shortDescription: "Real-Time AI Voice Security",
    category: "AI Security",
    role: "Applied AI Engineer & Systems Architect",
    status: "IN DEVELOPMENT",
    badge: "AI Security",
    logo: "/logos/voiceshield-logo.png",
    logoAlt: "VoiceShield logo",
    description: "VoiceShield is a real-time AI-powered security framework designed to detect synthetic voice generation, deepfakes, and unauthorized voice impersonation attempts. Built with low-latency streaming pipelines, it continuously analyzes incoming audio signals to compute confidence vectors, extract acoustic biometrics, and evaluate dynamic threat scores.",
    highlights: [
      "Real-time voice biometric and synthetic speech deepfake detection",
      "Low-latency audio streaming and spectral/acoustic feature extraction pipeline",
      "Dynamic risk assessment framework for audio impersonation threats",
      "WebSocket-driven architecture for continuous verification and low-overhead telemetry"
    ],
    tech: ["Python", "PyTorch", "FastAPI", "WebSockets", "Signal Processing", "AI Security"],
    repoStatusText: "Codebase Private • Verification Pending",
    seoTitle: "VOICE SHIELD — Real-Time AI-Powered Voice Impersonation Detection",
    seoDescription: "Real-Time AI-Powered Voice Impersonation Detection, Prevention & Risk Assessment Framework by Yuvateja Sainadh."
  },
  {
    id: "dripzoid-v2",
    slug: "dripzoid-v2",
    title: "Dripzoid V2.0",
    fullTitle: "Dripzoid V2.0 — Flutter + AskDrip Integration",
    shortDescription: "Flutter + AskDrip Integration",
    category: "Fashion-Tech / AI",
    role: "Co-Founder & Lead Systems Architect",
    status: "IN DEVELOPMENT",
    badge: "Fashion-Tech / AI",
    ecosystem: "Dripzoid Venture",
    relationship: "Next-generation cross-platform application integrating the AskDrip AI fashion assistant directly into the core user experience.",
    logo: "/logos/dripzoid-logo.png",
    logoAlt: "Dripzoid logo",
    description: "Dripzoid V2.0 represents the next evolutionary step of the Dripzoid fashion technology venture. Engineered as a unified cross-platform Flutter application, V2.0 integrates the conversational capabilities of AskDrip V1.0 directly into the core browsing, styling, and checkout journeys.",
    highlights: [
      "Unified cross-platform Flutter client for iOS, Android, and Web",
      "Native integration of AskDrip conversational styling assistant",
      "Real-time catalog synchronization and dynamic recommendation engine",
      "Modular component architecture with optimized state management and render cycles"
    ],
    tech: ["Flutter", "Dart", "Python", "FastAPI", "REST APIs", "AI Integration"],
    repoStatusText: "Proprietary Architecture",
    seoTitle: "Dripzoid V2.0 — Flutter + AskDrip",
    seoDescription: "Dripzoid V2.0: Next-generation Flutter fashion-tech platform integrating AskDrip AI assistant."
  },
  {
    id: "askdrip-v1",
    slug: "askdrip-v1",
    title: "AskDrip V1.0",
    fullTitle: "AskDrip V1.0 — AI Fashion Assistant",
    shortDescription: "AI Fashion Assistant",
    category: "AI Fashion Assistant",
    role: "Applied AI Developer",
    status: "COMPLETED",
    badge: "AI Fashion Assistant",
    ecosystem: "Dripzoid Venture",
    relationship: "AskDrip V1.0 is completed and its conversational intelligence is now available as part of Dripzoid V2.0.",
    logo: "/logos/askdrip-logo.png",
    logoAlt: "AskDrip logo",
    description: "AskDrip V1.0 is an AI-powered conversational fashion assistant developed within the Dripzoid ecosystem. It parses user intent, style preferences, and aesthetic constraints to provide real-time personalized wardrobe recommendations and semantic product discovery.",
    highlights: [
      "Conversational recommendation engine tailored to user style profiles",
      "Semantic product catalog search and natural language intent parsing",
      "Deep integration with Dripzoid inventory and customer styling pipeline",
      "Transitioned into core feature set for Dripzoid V2.0"
    ],
    tech: ["Python", "NLP", "LLM Integration", "React", "Node.js", "Vector Search"],
    repoStatusText: "Integrated Venture Product",
    seoTitle: "AskDrip V1.0 — AI Fashion Assistant",
    seoDescription: "AskDrip V1.0: AI-powered fashion assistant developed within the Dripzoid ecosystem."
  },
  {
    id: "dripzoid-automation",
    slug: "dripzoid-automation",
    title: "Dripzoid Automation",
    fullTitle: "Dripzoid Automation — Backend Automation Infrastructure",
    shortDescription: "Backend Automation Infrastructure",
    category: "Backend Automation Infrastructure",
    role: "Systems Architect & Backend Engineer",
    status: "COMPLETED",
    badge: "Backend Automation Infrastructure",
    ecosystem: "Dripzoid Venture",
    relationship: "Completed and wired into the Dripzoid Backend.",
    logo: "/logos/dripzoid-logo.png",
    logoAlt: "Dripzoid logo",
    description: "Dripzoid Automation is the dedicated background processing and automation backbone supporting the Dripzoid platform. It orchestrates asynchronous task queues, order dispatch pipelines, automated inventory synchronization, and webhook notification routines.",
    highlights: [
      "Automated order dispatch and real-time inventory synchronization workflows",
      "Event-driven background queues and resilient worker scheduling",
      "Secure webhook handlers with automated retry policies and telemetry",
      "Directly wired into the live Dripzoid production backend"
    ],
    tech: ["Node.js", "PostgreSQL", "Queue Systems", "Event Pipelines", "REST APIs", "Cron Tasks"],
    repoStatusText: "Production Backend Infrastructure",
    seoTitle: "Dripzoid Automation — Backend Automation Infrastructure",
    seoDescription: "Dripzoid Automation: Resilient backend automation infrastructure wired into Dripzoid Backend."
  },
  {
    id: "dripzoid-v1",
    slug: "dripzoid-v1",
    title: "Dripzoid V1.0",
    fullTitle: "Dripzoid V1.0 — React + TWA — Web & Mobile",
    shortDescription: "React + TWA — Web & Mobile",
    category: "React + TWA — Web & Mobile",
    role: "Co-Founder & Full-Stack Developer",
    status: "COMPLETED & LIVE",
    badge: "React + TWA — Web & Mobile",
    ecosystem: "Dripzoid Venture",
    relationship: "The foundational live implementation of the Dripzoid fashion technology venture.",
    logo: "/logos/dripzoid-logo.png",
    logoAlt: "Dripzoid logo",
    description: "Dripzoid V1.0 is the foundational live e-commerce platform and Android Trusted Web Activity (TWA) application. Built with React and a scalable backend architecture, it delivers a smooth shopping experience with streamlined order management.",
    highlights: [
      "High-performance responsive e-commerce web storefront in React",
      "Android Trusted Web Activity (TWA) packaging for Play Store distribution",
      "Full order lifecycle management, secure authentication, and payment integration",
      "Scalable relational data models for customer profiles and catalog indexing"
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "Trusted Web Activities (TWA)", "Tailwind CSS"],
    live: "https://dripzoid.com",
    repoStatusText: "Proprietary Architecture",
    seoTitle: "Dripzoid V1.0 — React + TWA",
    seoDescription: "Dripzoid V1.0: React + TWA Web & Mobile fashion-tech platform by Yuvateja Sainadh."
  }
];

export interface EducationItem {
  degree: string;
  institution: string;
  cgpa: string;
  year: string;
  focus?: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Aditya College of Engineering and Technology",
    cgpa: "8.31",
    year: "2024 – 2028",
    focus: [
      "Artificial Intelligence & Machine Learning",
      "Data Structures & Algorithms",
      "Distributed Systems & Cloud Computing",
      "Database Engineering & Systems Design",
    ],
  },
];

export const CONTACT_API_URL =
  "https://script.google.com/macros/s/AKfycbyWhOHCQlCIRi93Mj7dOTOk85qagRzghhIrFFP8YL2MbwWA02qIn5ycXiCKDpyBw20j/exec";
