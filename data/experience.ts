import { Layers, Terminal, GraduationCap, Users, type LucideIcon } from "lucide-react";

export type ExperienceCategory = "DEV" | "ACAD" | "LEAD";
export type ExperienceStatus = "ACTIVE" | "CLEARED";

export interface ExperienceDeliverable {
  tag: string;
  title: string;
  desc: string;
}

export interface ExperienceData {
  id: string;
  romanNumeral: string;
  categories: ExperienceCategory[];
  role: string;
  company: string;
  employmentType: string;
  workplaceType: string;
  duration: string;
  durationMonths: string;
  location: string;
  status: ExperienceStatus;
  description: string;
  deliverables: ExperienceDeliverable[];
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
    categories: ["DEV"],
    role: "iOS Developer",
    company: "Apple Developer Academy @ UC Surabaya",
    employmentType: "Apprenticeship",
    workplaceType: "On-site",
    duration: "Mar 2026 - Present",
    durationMonths: "7 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "ACTIVE",
    description:
      "Intensive engineering apprenticeship centered on architecting native iOS software and tackling complex societal challenges through Apple's Challenge-Based Learning framework.",
    deliverables: [
      {
        tag: "METHODOLOGY",
        title: "Challenge-Based Learning & Prototyping",
        desc: "Utilizing Challenge-Based Learning (CBL) to investigate real-world user problems, design validated prototypes, and iterate on production software.",
      },
      {
        tag: "ARCHITECTURE",
        title: "Swift & SwiftUI Native Engineering",
        desc: "Architecting native iOS applications with Swift, SwiftUI, Combine, and Apple Human Interface Guidelines for responsive performance.",
      },
      {
        tag: "COLLABORATION",
        title: "Cross-Functional Agile Delivery",
        desc: "Collaborating in multidisciplinary agile squads alongside product designers, domain researchers, and technical peers to deliver shippable software.",
      },
    ],
    skills: ["Swift", "SwiftUI", "iOS Architecture", "CoreML", "Combine"],
  },
  {
    id: "2",
    romanNumeral: "II",
    categories: ["ACAD"],
    role: "Teaching Assistant - Software Engineering",
    company: "Universitas Ciputra Surabaya",
    employmentType: "Contract",
    workplaceType: "On-site",
    duration: "Feb 2026 - Jun 2026",
    durationMonths: "5 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    description:
      "Mentored undergraduate software engineering cohorts in system modeling rigor, agile sprint execution, and industry-standard pull request reviews.",
    deliverables: [
      {
        tag: "SYSTEM DESIGN",
        title: "UML Structural & Behavioral Modeling",
        desc: "Coached student teams through class diagrams, component architectures, sequence diagrams, and use-case specifications.",
      },
      {
        tag: "CODE REVIEW",
        title: "Engineering Rigor & Pull Requests",
        desc: "Conducted systematic peer code reviews, establishing Git flow branching discipline and test-driven code hygiene standards.",
      },
      {
        tag: "AGILE COACHING",
        title: "Sprint Ceremonies & Backlog Grooming",
        desc: "Facilitated agile ceremonies, guiding student project squads through backlog refinement, velocity tracking, and milestone delivery.",
      },
    ],
    skills: ["Teaching", "UML", "Software Engineering", "Agile Methodologies", "Git Flow"],
  },
  {
    id: "3",
    romanNumeral: "III",
    categories: ["ACAD"],
    role: "Teaching Assistant - Database",
    company: "Universitas Ciputra Surabaya",
    employmentType: "Contract",
    workplaceType: "On-site",
    duration: "Feb 2026 - Jun 2026",
    durationMonths: "5 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    description:
      "Instructed cohorts in relational schema design, 3NF normalization, query execution plans, and transaction isolation benchmarks.",
    deliverables: [
      {
        tag: "DATA MODELING",
        title: "Relational Schema Design & 3NF",
        desc: "Instructed students on entity-relationship modeling, referential integrity constraints, and third normal form normalization.",
      },
      {
        tag: "OPTIMIZATION",
        title: "Query Tuning & Execution Plans",
        desc: "Analyzed relational query execution plans, teaching index optimization strategies, foreign key indexes, and latency reduction in PostgreSQL.",
      },
      {
        tag: "LAB BENCHMARKS",
        title: "Transaction Isolation & Benchmarking",
        desc: "Supervised hands-on laboratory experiments evaluating ACID compliance, concurrency anomalies, and transactional benchmarks.",
      },
    ],
    skills: ["Teaching", "Database Design", "SQL", "Relational Databases", "PostgreSQL"],
  },
  {
    id: "4",
    romanNumeral: "IV",
    categories: ["ACAD"],
    role: "Teaching Assistant - Web Development",
    company: "Universitas Ciputra Surabaya",
    employmentType: "Contract",
    workplaceType: "On-site",
    duration: "Aug 2025 - Jan 2026",
    durationMonths: "6 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    description:
      "Taught foundational and intermediate full-stack web development, emphasizing semantic layouts, client-server communication, and REST APIs.",
    deliverables: [
      {
        tag: "WEB PEDAGOGY",
        title: "Interactive Full-Stack Instruction",
        desc: "Delivered interactive lab tutorials covering responsive layouts, modern CSS specifications, and asynchronous DOM manipulation.",
      },
      {
        tag: "INTEGRATION",
        title: "Client-Server Architecture & APIs",
        desc: "Guided students through structuring RESTful API endpoints, server-side data validation, and front-end state synchronization.",
      },
      {
        tag: "TRIAGE",
        title: "Browser DevTools & Defect Triage",
        desc: "Trained students in network tracing, payload inspection, and browser devtools debugging to diagnose production defects.",
      },
    ],
    skills: ["Teaching", "PHP", "JavaScript", "Web Architecture", "REST APIs", "HTML/CSS"],
  },
  {
    id: "5",
    romanNumeral: "V",
    categories: ["LEAD", "DEV"],
    role: "Technical Lead",
    company: "IMT Student Union",
    employmentType: "Contract",
    workplaceType: "Hybrid",
    duration: "Apr 2025 - Jun 2026",
    durationMonths: "1 yr 3 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    description:
      "Led technology operations for the student union, overseeing department infrastructure, mentoring engineers, and deploying competition platforms.",
    deliverables: [
      {
        tag: "DEVOPS & CI/CD",
        title: "Automated Deployment Pipelines",
        desc: "Architected CI/CD pipelines with Docker and automated testing routines, drastically reducing deployment cycle times and human error.",
      },
      {
        tag: "INFRASTRUCTURE",
        title: "High-Availability Competition Portals",
        desc: "Maintained cloud environments and uptime for campus-wide competition web applications serving hundreds of concurrent participants.",
      },
      {
        tag: "LEADERSHIP",
        title: "Technical Governance & Mentorship",
        desc: "Established division coding standards, conducted architecture reviews, and mentored junior developers across project epics.",
      },
    ],
    skills: ["Software Project Management", "DevOps", "CI/CD", "Technical Leadership", "Docker", "Linux"],
  },
  {
    id: "6",
    romanNumeral: "VI",
    categories: ["ACAD"],
    role: "Teaching Assistant - Object-Oriented Programming",
    company: "Universitas Ciputra Surabaya",
    employmentType: "Contract",
    workplaceType: "On-site",
    duration: "Feb 2025 - Jul 2025",
    durationMonths: "6 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    description:
      "Facilitated laboratory exercises centered on Object-Oriented Programming fundamentals, software design patterns, and idiomatic Java.",
    deliverables: [
      {
        tag: "OOP PARADIGM",
        title: "Object-Oriented Design Principles",
        desc: "Mentored students on encapsulation, polymorphism, inheritance, and interface abstraction in robust system architectures.",
      },
      {
        tag: "DESIGN PATTERNS",
        title: "Gang of Four Pattern Implementations",
        desc: "Demonstrated production implementations of creational and behavioral design patterns, including Factory, Singleton, and Observer.",
      },
      {
        tag: "CODE QUALITY",
        title: "Algorithmic Efficiency & Clean Code",
        desc: "Audited lab submissions for time complexity, memory allocation efficiency, clean naming conventions, and idiomatic structure.",
      },
    ],
    skills: ["Teaching", "Object-Oriented Programming", "Java", "Design Patterns", "Clean Code"],
  },
  {
    id: "7",
    romanNumeral: "VII",
    categories: ["DEV"],
    role: "Full Stack Engineer",
    company: "IMT Student Union",
    employmentType: "Contract",
    workplaceType: "Hybrid",
    duration: "Aug 2024 - Apr 2025",
    durationMonths: "9 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    description:
      "Engineered core modules and web platforms for major student union events, maintaining uptime and delivering rapid hotfixes.",
    deliverables: [
      {
        tag: "FEATURE DELIVERY",
        title: "Event Registration & Scoring Portals",
        desc: "Engineered scalable registration portals, scoring engines, and participant dashboards using Laravel and MySQL.",
      },
      {
        tag: "CROSS-FUNCTIONAL",
        title: "Requirements Translation",
        desc: "Partnered with marketing and operations committees to translate operational event requirements into production web features.",
      },
      {
        tag: "OPERATIONS",
        title: "Zero-Downtime Live Event Support",
        desc: "Monitored production servers during high-traffic competition events, deploying hotfixes with zero platform downtime.",
      },
    ],
    skills: ["Laravel", "PHP", "Full Stack Development", "MySQL", "Linux", "REST APIs"],
  },
  {
    id: "8",
    romanNumeral: "VIII",
    categories: ["ACAD"],
    role: "Teaching Assistant - Entrepreneurship Essentials",
    company: "Universitas Ciputra Surabaya",
    employmentType: "Contract",
    workplaceType: "On-site",
    duration: "Aug 2024 - Jan 2025",
    durationMonths: "6 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    description:
      "Guided undergraduate venture teams in business model formulation, customer discovery validation, and executive pitch delivery.",
    deliverables: [
      {
        tag: "LEAN VALIDATION",
        title: "Business Model Canvas Formulation",
        desc: "Coached student teams through value proposition design, cost structure modeling, and market viability assessments.",
      },
      {
        tag: "USER RESEARCH",
        title: "Hypothesis Testing & Discovery",
        desc: "Facilitated customer discovery interviews and rapid validation experiments to test product-market hypotheses.",
      },
      {
        tag: "PITCH COACHING",
        title: "Executive Presentations & Demo Days",
        desc: "Trained venture teams on storytelling clarity, financial forecasting defense, and prototype live demonstrations.",
      },
    ],
    skills: ["Teaching", "Entrepreneurship", "Business Modeling", "User Research", "Public Speaking"],
  },
];
