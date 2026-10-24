import { Layers, Terminal, GraduationCap, type LucideIcon } from "lucide-react";

export type ExperienceCategory = "ENG" | "ACAD";
export type ExperienceStatus = "ACTIVE" | "CLEARED";

export interface ExperienceData {
  id: string;
  romanNumeral: string;
  categories: ExperienceCategory[];
  role: string;
  company: string;
  duration: string;
  durationMonths: string;
  status: ExperienceStatus;
  description: string;
  skills: string[];
}

export interface ExperienceCategoryItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const experienceCategories: ExperienceCategoryItem[] = [
  { id: "ALL", label: "ALL", icon: Layers },
  { id: "ENG", label: "ENGINEERING", icon: Terminal },
  { id: "ACAD", label: "ACADEMIC", icon: GraduationCap },
];

export const experienceData: ExperienceData[] = [
  {
    id: "1",
    romanNumeral: "I",
    categories: ["ENG"],
    role: "iOS Developer",
    company: "Apple Developer Academy @ UC Surabaya",
    duration: "Mar 2026 - Present",
    durationMonths: "8 mos",
    status: "ACTIVE",
    description:
      "Architecting native iOS applications under Apple HIG standards. Engineered spatial computing and 3D scenes with RealityKit, real-time multiplayer networking via GameKit, on-device AI using FoundationModels, and local persistence with SwiftData across TestFlight sprint releases.",
    skills: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "RealityKit",
      "GameKit",
      "FoundationModels",
    ],
  },
  {
    id: "2",
    romanNumeral: "II",
    categories: ["ACAD"],
    role: "Teaching Assistant - Cyber Security",
    company: "Universitas Ciputra Surabaya",
    duration: "Aug 2026 - Present",
    durationMonths: "3 mos",
    status: "ACTIVE",
    description:
      "Facilitating hands-on security laboratories covering penetration testing methodologies, Kali Linux offensive tooling, network packet inspection with Wireshark, port enumeration, cryptographic protocols, and Hack The Box challenges for undergraduate cohorts.",
    skills: [
      "Teaching",
      "Penetration Testing",
      "Kali Linux",
      "Wireshark",
      "Cryptography",
    ],
  },
  {
    id: "3",
    romanNumeral: "III",
    categories: ["ACAD"],
    role: "Teaching Assistant - Visual Programming",
    company: "Universitas Ciputra Surabaya",
    duration: "Aug 2026 - Present",
    durationMonths: "3 mos",
    status: "ACTIVE",
    description:
      "Instructing undergraduate cohorts in full-stack mobile development. Guided declarative Android UI architecture using Jetpack Compose in Kotlin, asynchronous stream concurrency with Coroutines, REST networking via Retrofit, and backend integration with Express.js (TypeScript).",
    skills: [
      "Teaching",
      "Kotlin",
      "Jetpack Compose",
      "Coroutines",
      "Retrofit",
      "Express.js (TS)",
    ],
  },
  {
    id: "4",
    romanNumeral: "IV",
    categories: ["ENG"],
    role: "Technical Lead",
    company: "IMT Student Union",
    duration: "Apr 2025 - Jun 2026",
    durationMonths: "1 yr 3 mos",
    status: "CLEARED",
    description:
      "Directed engineering operations and system architecture across 8 developers. Modernized the 13th NPLC platform to Next.js 15 (cutting page loads by 40%), integrated Judge0 sandboxed runners and WebSockets processing 833+ live submissions, and automated VPS Docker CI/CD pipelines.",
    skills: [
      "Technical Leadership",
      "System Architecture",
      "Next.js",
      "WebSockets",
      "Docker",
      "CI/CD",
    ],
  },
  {
    id: "5",
    romanNumeral: "V",
    categories: ["ACAD"],
    role: "Teaching Assistant - Object-Oriented Programming",
    company: "Universitas Ciputra Surabaya",
    duration: "Feb 2025 - Jul 2025",
    durationMonths: "6 mos",
    status: "CLEARED",
    description:
      "Facilitated laboratory exercises centered on core OOP paradigms—encapsulation, polymorphism, abstraction, and inheritance. Mentored students on essential data structures (trees, graphs, HashMaps, stacks, queues), recursion, and clean-code audits in idiomatic Java.",
    skills: [
      "Teaching",
      "Java",
      "Object-Oriented Programming",
      "Data Structures",
    ],
  },
  {
    id: "6",
    romanNumeral: "VI",
    categories: ["ACAD"],
    role: "Teaching Assistant - Web Development",
    company: "Universitas Ciputra Surabaya",
    duration: "Aug 2025 - Jan 2026",
    durationMonths: "6 mos",
    status: "CLEARED",
    description:
      "Taught backend web development and MVC architecture using PHP and Laravel. Instructed students on relational database design, query execution, data persistence, and secure server-side request lifecycles with MySQL.",
    skills: [
      "Teaching",
      "PHP",
      "Laravel",
      "MySQL",
    ],
  },
  {
    id: "7",
    romanNumeral: "VII",
    categories: ["ENG"],
    role: "Full Stack Engineer",
    company: "IMT Student Union",
    duration: "Aug 2024 - Apr 2025",
    durationMonths: "9 mos",
    status: "CLEARED",
    description:
      "Engineered game client mechanics in Unity (C#) and constructed backend REST APIs in Laravel (PHP) with MySQL persistence for the 12th NPLC visual novel, maintaining zero downtime across 1,500+ live gameplay sessions.",
    skills: [
      "Unity",
      "C#",
      "Laravel",
      "PHP",
      "REST APIs",
    ],
  },
  {
    id: "8",
    romanNumeral: "VIII",
    categories: ["ACAD"],
    role: "Teaching Assistant - Software Engineering",
    company: "Universitas Ciputra Surabaya",
    duration: "Feb 2026 - Jul 2026",
    durationMonths: "6 mos",
    status: "CLEARED",
    description:
      "Mentored undergraduate cohorts in formal software requirements engineering (gathering, analysis, specification), architectural system design, structural and behavioral UML modeling, and lifecycle governance across the end-to-end SDLC.",
    skills: [
      "Teaching",
      "UML",
      "Software Architecture",
      "Requirements Engineering",
      "SDLC",
    ],
  },
  {
    id: "9",
    romanNumeral: "IX",
    categories: ["ACAD"],
    role: "Teaching Assistant - Database",
    company: "Universitas Ciputra Surabaya",
    duration: "Feb 2026 - Jul 2026",
    durationMonths: "6 mos",
    status: "CLEARED",
    description:
      "Instructed cohorts in relational schema design, Entity-Relationship Diagrams (ERD), cardinality modeling, 1NF through 5NF mathematical normalization, and complex SQL query execution benchmarks.",
    skills: [
      "Teaching",
      "SQL",
      "Database Design",
      "Normalization",
      "ERD",
    ],
  },
];
