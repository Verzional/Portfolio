import { Layers, Terminal, GraduationCap, Users, type LucideIcon } from "lucide-react";

export type ExperienceCategory = "DEV" | "ACAD" | "LEAD";
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
  { id: "DEV", label: "DEV", icon: Terminal },
  { id: "ACAD", label: "ACADEMIC", icon: GraduationCap },
  { id: "LEAD", label: "LEADERSHIP", icon: Users },
];

export const experienceData: ExperienceData[] = [
  {
    id: "1",
    romanNumeral: "I",
    categories: ["ACAD", "DEV"],
    role: "Teaching Assistant - Visual Programming",
    company: "Universitas Ciputra Surabaya",
    duration: "Aug 2026 - Present",
    durationMonths: "2 mos",
    status: "ACTIVE",
    description:
      "Instructing undergraduate cohorts in declarative mobile interface design, reactive state management, and modern native Android architecture using Kotlin and Jetpack Compose.",
    skills: ["Teaching", "Kotlin", "Android Development", "Jetpack Compose", "Mobile UI"],
  },
  {
    id: "2",
    romanNumeral: "II",
    categories: ["ACAD"],
    role: "Teaching Assistant - Cyber Security",
    company: "Universitas Ciputra Surabaya",
    duration: "Aug 2026 - Present",
    durationMonths: "2 mos",
    status: "ACTIVE",
    description:
      "Facilitating hands-on security laboratories covering threat modeling, network traffic analysis, vulnerability assessment, and cryptographic principles.",
    skills: ["Teaching", "Cybersecurity", "Network Security", "Vulnerability Assessment", "Cryptography"],
  },
  {
    id: "3",
    romanNumeral: "III",
    categories: ["DEV"],
    role: "iOS Developer",
    company: "Apple Developer Academy @ UC Surabaya",
    duration: "Mar 2026 - Present",
    durationMonths: "7 mos",
    status: "ACTIVE",
    description:
      "Intensive engineering apprenticeship centered on architecting native iOS software and tackling complex societal challenges through Apple's Challenge-Based Learning framework.",
    skills: ["Swift", "SwiftUI", "iOS Architecture", "CoreML", "Combine"],
  },
  {
    id: "4",
    romanNumeral: "IV",
    categories: ["ACAD"],
    role: "Teaching Assistant - Software Engineering",
    company: "Universitas Ciputra Surabaya",
    duration: "Feb 2026 - Jul 2026",
    durationMonths: "6 mos",
    status: "CLEARED",
    description:
      "Mentored undergraduate software engineering cohorts in system modeling rigor, agile sprint execution, and industry-standard pull request reviews.",
    skills: ["Teaching", "UML", "Software Engineering", "Agile Methodologies", "Git Flow"],
  },
  {
    id: "5",
    romanNumeral: "V",
    categories: ["ACAD"],
    role: "Teaching Assistant - Database",
    company: "Universitas Ciputra Surabaya",
    duration: "Feb 2026 - Jul 2026",
    durationMonths: "6 mos",
    status: "CLEARED",
    description:
      "Instructed cohorts in relational schema design, 3NF normalization, query execution plans, and transaction isolation benchmarks.",
    skills: ["Teaching", "Database Design", "SQL", "Relational Databases", "PostgreSQL"],
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
      "Taught foundational and intermediate full-stack web development, emphasizing semantic layouts, client-server communication, and REST APIs.",
    skills: ["Teaching", "PHP", "JavaScript", "Web Architecture", "REST APIs", "HTML/CSS"],
  },
  {
    id: "7",
    romanNumeral: "VII",
    categories: ["LEAD", "DEV"],
    role: "Technical Lead",
    company: "IMT Student Union",
    duration: "Apr 2025 - Jun 2026",
    durationMonths: "1 yr 3 mos",
    status: "CLEARED",
    description:
      "Led technology operations for the student union, overseeing department infrastructure, mentoring engineers, and deploying competition platforms.",
    skills: ["Software Project Management", "DevOps", "CI/CD", "Technical Leadership", "Docker", "Linux"],
  },
  {
    id: "8",
    romanNumeral: "VIII",
    categories: ["ACAD"],
    role: "Teaching Assistant - Object-Oriented Programming",
    company: "Universitas Ciputra Surabaya",
    duration: "Feb 2025 - Jul 2025",
    durationMonths: "6 mos",
    status: "CLEARED",
    description:
      "Facilitated laboratory exercises centered on Object-Oriented Programming fundamentals, software design patterns, and idiomatic Java.",
    skills: ["Teaching", "Object-Oriented Programming", "Java", "Design Patterns", "Clean Code"],
  },
  {
    id: "9",
    romanNumeral: "IX",
    categories: ["DEV"],
    role: "Full Stack Engineer",
    company: "IMT Student Union",
    duration: "Aug 2024 - Apr 2025",
    durationMonths: "9 mos",
    status: "CLEARED",
    description:
      "Engineered core modules and web platforms for major student union events, maintaining uptime and delivering rapid hotfixes.",
    skills: ["Laravel", "PHP", "Full Stack Development", "MySQL", "Linux", "REST APIs"],
  },
  {
    id: "10",
    romanNumeral: "X",
    categories: ["ACAD"],
    role: "Teaching Assistant - Entrepreneurship Essentials",
    company: "Universitas Ciputra Surabaya",
    duration: "Aug 2024 - Jan 2025",
    durationMonths: "6 mos",
    status: "CLEARED",
    description:
      "Guided undergraduate venture teams in business model formulation, customer discovery validation, and executive pitch delivery.",
    skills: ["Teaching", "Entrepreneurship", "Business Modeling", "User Research", "Public Speaking"],
  },
];
