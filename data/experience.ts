import { Layers, Terminal, GraduationCap, Users, type LucideIcon } from "lucide-react";

export type ExperienceCategory = "DEV" | "ACAD" | "LEAD";
export type ExperienceStatus = "ACTIVE" | "CLEARED";

export interface ConfidantAbility {
  level: string;
  name: string;
  desc: string;
}

export interface ExperienceData {
  id: string;
  categories: ExperienceCategory[];
  arcana: string;
  arcanaNumber: string;
  frenchArcana: string;
  role: string;
  company: string;
  employmentType: string;
  workplaceType: string;
  duration: string;
  durationMonths: string;
  location: string;
  status: ExperienceStatus;
  rankLevel: number;
  maxRank: number;
  rankTitle: string;
  description: string;
  abilities: ConfidantAbility[];
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
    categories: ["DEV"],
    arcana: "THE MAGICIAN",
    arcanaNumber: "I",
    frenchArcana: "LE BATELEUR",
    role: "iOS Developer",
    company: "Apple Developer Academy @ UC Surabaya",
    employmentType: "Apprenticeship",
    workplaceType: "On-site",
    duration: "Mar 2026 - Present",
    durationMonths: "7 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "ACTIVE",
    rankLevel: 10,
    maxRank: 10,
    rankTitle: "RANK MAX",
    description:
      "Intensive apprenticeship program centered on architecting native iOS software and tackling complex societal challenges through Apple's Challenge-Based Learning framework.",
    abilities: [
      {
        level: "LV. 1",
        name: "Challenge Initiation",
        desc: "Utilizing Challenge-Based Learning (CBL) to investigate real-world problems and prototype validated solutions.",
      },
      {
        level: "LV. 5",
        name: "Swift Synthesis",
        desc: "Architecting high-performance native iOS applications with Swift, SwiftUI, Combine, and Apple HIG patterns.",
      },
      {
        level: "MAX",
        name: "Squad Synchronization",
        desc: "Coordinating in multidisciplinary agile squads across design, user research, and technical implementation.",
      },
    ],
    skills: ["Swift (Programming Language)", "SwiftUI", "iOS Architecture", "CoreML"],
  },
  {
    id: "2",
    categories: ["ACAD"],
    arcana: "JUSTICE",
    arcanaNumber: "VIII",
    frenchArcana: "LA JUSTICE",
    role: "Teaching Assistant - Software Engineering",
    company: "Universitas Ciputra Surabaya",
    employmentType: "Contract",
    workplaceType: "On-site",
    duration: "Feb 2026 - Jun 2026",
    durationMonths: "5 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    rankLevel: 8,
    maxRank: 10,
    rankTitle: "RANK 08",
    description:
      "Mentored undergraduate cohorts in software engineering rigor, structural UML modeling, agile sprint cycles, and institutional code review standards.",
    abilities: [
      {
        level: "LV. 2",
        name: "UML & System Modeling",
        desc: "Coached students through structural modeling (class, component diagrams) and behavioral modeling (use-case, sequence diagrams).",
      },
      {
        level: "LV. 5",
        name: "Code Review Discipline",
        desc: "Conducted peer code reviews and enforced Git branching standards and pull request workflows.",
      },
      {
        level: "LV. 8",
        name: "Agile Ritual Coaching",
        desc: "Mentored teams through sprint planning, backlog grooming, and milestone delivery reviews.",
      },
    ],
    skills: ["Teaching", "Unified Modeling Language (UML)", "Software Engineering", "Agile Methodologies"],
  },
  {
    id: "3",
    categories: ["ACAD"],
    arcana: "THE HIGH PRIESTESS",
    arcanaNumber: "II",
    frenchArcana: "LA PAPESSE",
    role: "Teaching Assistant - Database",
    company: "Universitas Ciputra Surabaya",
    employmentType: "Contract",
    workplaceType: "On-site",
    duration: "Feb 2026 - Jun 2026",
    durationMonths: "5 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    rankLevel: 7,
    maxRank: 10,
    rankTitle: "RANK 07",
    description:
      "Guided students in relational schema modeling, 3NF normalization, index optimization, and high-performance SQL query tuning.",
    abilities: [
      {
        level: "LV. 1",
        name: "Relational Modeling",
        desc: "Instructed students on entity-relationship diagrams, foreign key integrity, and normalization standards.",
      },
      {
        level: "LV. 4",
        name: "Query Optimization",
        desc: "Demonstrated execution plans, index tuning, and latency reduction in relational queries.",
      },
      {
        level: "LV. 7",
        name: "Lab Supervision",
        desc: "Supervised hands-on laboratory exercises and evaluated transactional isolation benchmarks.",
      },
    ],
    skills: ["Teaching", "Database", "SQL", "Relational Database", "PostgreSQL"],
  },
  {
    id: "4",
    categories: ["LEAD", "DEV"],
    arcana: "THE EMPEROR",
    arcanaNumber: "IV",
    frenchArcana: "L'EMPEREUR",
    role: "Technical Lead",
    company: "IMT Student Union",
    employmentType: "Contract",
    workplaceType: "Hybrid",
    duration: "Apr 2025 - Jun 2026",
    durationMonths: "1 yr 3 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    rankLevel: 9,
    maxRank: 10,
    rankTitle: "RANK 09",
    description:
      "Spearheaded the student union's technology operations, managing departmental infrastructure, mentoring division peers, and coordinating high-traffic web portals.",
    abilities: [
      {
        level: "LV. 3",
        name: "Pipeline Automation",
        desc: "Implemented CI/CD pipelines to automate automated testing and server deployments.",
      },
      {
        level: "LV. 6",
        name: "Infrastructure Reliability",
        desc: "Maintained uptime and cloud environments for official competition portals and student applications.",
      },
      {
        level: "LV. 9",
        name: "Technical Direction",
        desc: "Mentored division members, delegated project epics, and established division coding guidelines.",
      },
    ],
    skills: ["Software Project Management", "DevOps", "CI/CD", "Leadership", "Docker"],
  },
  {
    id: "5",
    categories: ["ACAD"],
    arcana: "THE HIEROPHANT",
    arcanaNumber: "V",
    frenchArcana: "LE PAPE",
    role: "Teaching Assistant - Web Development",
    company: "Universitas Ciputra Surabaya",
    employmentType: "Contract",
    workplaceType: "On-site",
    duration: "Aug 2025 - Jan 2026",
    durationMonths: "6 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    rankLevel: 7,
    maxRank: 10,
    rankTitle: "RANK 07",
    description:
      "Taught foundational and intermediate web technologies, emphasizing responsive interface structures, server-side scripting, and API communication.",
    abilities: [
      {
        level: "LV. 1",
        name: "Web Pedagogy",
        desc: "Delivered interactive lab tutorials covering responsive layouts, modern CSS, and DOM manipulation.",
      },
      {
        level: "LV. 4",
        name: "Full-Stack Integration",
        desc: "Assisted students in connecting front-end interfaces to server-side endpoints and REST APIs.",
      },
      {
        level: "LV. 7",
        name: "Defect Triage",
        desc: "Trained students in browser devtools debugging, network tracing, and error resolution.",
      },
    ],
    skills: ["Teaching", "PHP", "JavaScript", "Web Architecture", "HTML/CSS"],
  },
  {
    id: "6",
    categories: ["ACAD"],
    arcana: "THE HERMIT",
    arcanaNumber: "IX",
    frenchArcana: "L'ERMITE",
    role: "Teaching Assistant - Object-Oriented Programming",
    company: "Universitas Ciputra Surabaya",
    employmentType: "Contract",
    workplaceType: "On-site",
    duration: "Feb 2025 - Jul 2025",
    durationMonths: "6 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    rankLevel: 6,
    maxRank: 10,
    rankTitle: "RANK 06",
    description:
      "Facilitated hands-on laboratory exercises focusing on Object-Oriented Programming paradigm essentials, design patterns, and robust error handling.",
    abilities: [
      {
        level: "LV. 2",
        name: "Encapsulation Deep-Dive",
        desc: "Mentored students on core principles: encapsulation, polymorphism, inheritance, and abstraction.",
      },
      {
        level: "LV. 4",
        name: "Pattern Instruction",
        desc: "Demonstrated real-world implementations of factory, singleton, and observer design patterns.",
      },
      {
        level: "LV. 6",
        name: "Code Correctness Audits",
        desc: "Audited lab assignments for algorithmic efficiency, clean variable naming, and idiomatic Java.",
      },
    ],
    skills: ["Teaching", "Object-Oriented Programming (OOP)", "Java", "Design Patterns"],
  },
  {
    id: "7",
    categories: ["DEV"],
    arcana: "THE CHARIOT",
    arcanaNumber: "VII",
    frenchArcana: "LE CHARIOT",
    role: "Full Stack Engineer",
    company: "IMT Student Union",
    employmentType: "Contract",
    workplaceType: "Hybrid",
    duration: "Aug 2024 - Apr 2025",
    durationMonths: "9 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    rankLevel: 8,
    maxRank: 10,
    rankTitle: "RANK 08",
    description:
      "Collaborated on software development and web platform maintenance for university events, ensuring stability and timely deployment.",
    abilities: [
      {
        level: "LV. 2",
        name: "Feature Implementation",
        desc: "Built modules for event registration, scoring engines, and participant management portals using Laravel.",
      },
      {
        level: "LV. 4",
        name: "Cross-Functional Sync",
        desc: "Coordinated with event marketing and operations divisions to translate requirements into web features.",
      },
      {
        level: "LV. 6",
        name: "Rapid Deployment",
        desc: "Delivered urgent hotfixes and supported live competition platforms with zero downtime.",
      },
    ],
    skills: ["Software Project Management", "Laravel", "PHP", "Full Stack Development", "Linux"],
  },
  {
    id: "8",
    categories: ["ACAD"],
    arcana: "WHEEL OF FORTUNE",
    arcanaNumber: "X",
    frenchArcana: "LA ROUE DE FORTUNE",
    role: "Teaching Assistant - Entrepreneurship Essentials",
    company: "Universitas Ciputra Surabaya",
    employmentType: "Contract",
    workplaceType: "On-site",
    duration: "Aug 2024 - Jan 2025",
    durationMonths: "6 mos",
    location: "Surabaya, East Java, Indonesia",
    status: "CLEARED",
    rankLevel: 6,
    maxRank: 10,
    rankTitle: "RANK 06",
    description:
      "Assisted instructional teams in cultivating student business acumen, validating value propositions, and structuring lean business models.",
    abilities: [
      {
        level: "LV. 1",
        name: "Lean Canvas Analysis",
        desc: "Guided student venture teams through business model canvas formulation and market analysis.",
      },
      {
        level: "LV. 3",
        name: "Problem-Solution Fit",
        desc: "Facilitated customer discovery interviews and hypothesis validation testing.",
      },
      {
        level: "LV. 5",
        name: "Pitch Coaching",
        desc: "Coached teams on executive pitching, presentation clarity, and prototype demonstration.",
      },
    ],
    skills: ["Teaching", "Entrepreneurship", "Business Modeling", "Public Speaking"],
  },
];
