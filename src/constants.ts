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
  { name: "LeetCode", url: "https://leetcode.com/u/yuvateja_003/", icon: "SiLeetcode" },
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

export interface ProjectVersion {
  version: string;
  details: string;
  status: string;
  isActive?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  role: string;
  status: "flagship" | "parent-venture" | "ecosystem-product";
  badge: string;
  projectStatus?: string;
  versions?: ProjectVersion[];
  parentVenture?: string;
  logo?: string;
  logoAlt?: string;
  description: string;
  capabilities?: string[];
  tech: string[];
  live?: string;
  github?: string;
  repoStatusText?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "voiceshield",
    title: "VoiceShield",
    category: "Applied AI / AI Security",
    role: "Applied AI Engineer & Systems Architect",
    status: "flagship",
    badge: "Independent Flagship Project",
    projectStatus: "In Development",
    logo: "/logos/voiceshield-logo.png",
    logoAlt: "VoiceShield logo",
    description: "Real-Time AI-Powered Voice Impersonation Detection, Prevention & Risk Assessment Framework.",
    capabilities: [
      "Real-time voice biometric and synthetic speech detection",
      "Low-latency audio streaming and feature extraction pipeline",
      "Dynamic risk assessment framework for audio impersonation threats",
    ],
    tech: ["Python", "PyTorch", "FastAPI", "WebSockets", "Signal Processing", "AI Security"],
    repoStatusText: "Codebase Private • Verification Pending",
  },
  {
    id: "dripzoid",
    title: "Dripzoid",
    category: "Full-Stack Product Engineering / Fashion Technology",
    role: "Co-Founder & Full-Stack Developer",
    status: "parent-venture",
    badge: "Parent Fashion Tech Venture",
    logo: "/logos/dripzoid-logo.png",
    logoAlt: "Dripzoid logo",
    versions: [
      {
        version: "V1.0",
        details: "React + Bubblewrap · Web & Mobile",
        status: "Completed",
        isActive: false,
      },
      {
        version: "V2.0",
        details: "Flutter",
        status: "Ongoing / Releasing Soon",
        isActive: true,
      },
    ],
    description: "Fashion technology venture and full-stack e-commerce ecosystem.",
    capabilities: [
      "Full-stack e-commerce platform and scalable order management",
      "Secure authentication, inventory pipelines, and automated processing",
      "Parent ecosystem powering the AskDrip intelligent assistant",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "REST APIs", "Order Management"],
    live: "https://dripzoid.com",
    repoStatusText: "Proprietary Architecture",
  },
  {
    id: "askdrip",
    title: "AskDrip",
    category: "Applied AI / Intelligent Fashion Systems",
    role: "Applied AI Developer",
    status: "ecosystem-product",
    badge: "Part of the Dripzoid Ecosystem",
    parentVenture: "Dripzoid",
    projectStatus: "Completed",
    logo: "/logos/askdrip-logo.png",
    logoAlt: "AskDrip logo",
    description: "AI-Powered Fashion Assistant developed within the Dripzoid ecosystem.",
    capabilities: [
      "Conversational recommendation engine tailored to user style profiles",
      "Semantic product catalog search and intent parsing",
      "Deep integration with Dripzoid catalog and customer experience",
    ],
    tech: ["Python", "NLP", "LLM Integration", "React", "Node.js"],
    repoStatusText: "Integrated Venture Product",
  },
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
