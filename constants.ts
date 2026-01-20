import { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Trajectory", href: "#trajectory" },
  { label: "Portfolio", href: "#portfolio" },
];

export const HERO_CONTENT = {
  greeting: "HELLO, I AM",
  name: {
    first: "Asyraf Karunia",
    last: "Asroel"
  },
  roles: [
    "INFORMATION SYSTEMS ENTHUSIAST",
    "STRATEGIC LEADER",
    "TECH INNOVATOR"
  ],
  description: "An ambitious technologist dedicated to bridging the frontier of complex technical systems and strategic global business. Driven by a commitment to academic excellence and trans-disciplinary innovation, I leverage a design-driven mindset to build scalable solutions that thrive in pluralistic, digital-first environments.",
};

export const EXPERIENCE_DATA = [
  {
    year: "2026 — Present",
    location: "Jakarta, Indonesia",
    role: "Information Systems Specialist",
    company: "PT Surveyor Indonesia",
    metrics: [
      { label: "System Uptime", value: "99.9%" },
      { label: "Digital Initiatives", value: "Lead" }
    ],
    description: "Spearheaded comprehensive digital transformation initiatives across regional offices.",
    icon: "verified"
  },
  {
    year: "2024 — 2025",
    location: "Canada",
    role: "Student Exchange Awardee",
    company: "Ministry of Education and Culture",
    metrics: [
      { label: "Award Status", value: "Fully Funded" },
      { label: "Focus Area", value: "New Media" }
    ],
    description: "Bridge-builder and strategic thinker with mastery in trans-disciplinary collaboration and new media literacy, adept at navigating pluralistic environments through design-driven solutions and cognitive agility.",
    icon: "public"
  },
  {
    year: "2023 — 2024",
    location: "Jakarta, Indonesia",
    role: "IT Support Specialist",
    company: "SLB Jakarta",
    metrics: [
      { label: "Tickets Resolved", value: "346" },
      { label: "Response Time", value: "-15%" }
    ],
    description: null,
    icon: "trending_up"
  },
  {
    year: "2023 — 2024",
    location: "Remote / Hybrid",
    role: "Technical Instructor",
    company: "LearningX",
    metrics: [
      { label: "Students Mentored", value: "30+" },
      { label: "Satisfaction", value: "4.8/5" }
    ],
    description: "Developed comprehensive IS curriculum and led weekly workshops.",
    icon: "school"
  }
];