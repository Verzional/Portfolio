import { BookOpen, Flag, Scroll } from "lucide-react";

export type ExperienceType = "MAIN QUEST" | "SUB-STORY";
export type ExperienceStatus = "CLEARED" | "IN PROGRESS";

export interface ExperienceData {
  id: string;
  type: ExperienceType;
  company: string;
  role: string;
  duration: string;
  status: ExperienceStatus;
  objectives: string[];
  rewards: string[];
}

export const experienceCategories = [
  { id: "ALL", label: "ALL TALES", icon: BookOpen },
  { id: "MAIN QUEST", label: "MAIN QUESTS", icon: Flag },
  { id: "SUB-STORY", label: "SUB-STORIES", icon: Scroll },
];

export const experienceData: ExperienceData[] = [
  {
    id: "1",
    type: "MAIN QUEST",
    company: "Apple Developer Academy @ UC Surabaya",
    role: "iOS Developer",
    duration: "Mar 2026 - Present",
    status: "IN PROGRESS",
    objectives: [
      "Apprenticeship focused on developing high-quality iOS applications.",
      "Engaging in Challenge-Based Learning to solve real-world problems.",
    ],
    rewards: ["Swift", "SwiftUI"],
  },
  {
    id: "2",
    type: "SUB-STORY",
    company: "Universitas Ciputra Surabaya",
    role: "Software Engineering Student Assistant",
    duration: "Feb 2026 - Jun 2026",
    status: "CLEARED",
    objectives: [
      "Mentored students in Software Engineering practices and methodologies.",
    ],
    rewards: ["Software Engineering Practices", "Teaching"],
  },
  {
    id: "3",
    type: "SUB-STORY",
    company: "Universitas Ciputra Surabaya",
    role: "Database Student Assistant",
    duration: "Feb 2026 - Jun 2026",
    status: "CLEARED",
    objectives: [
      "Guided students in database design, management, and SQL query optimization.",
    ],
    rewards: ["SQL", "Database"],
  },
  {
    id: "4",
    type: "SUB-STORY",
    company: "Universitas Ciputra Surabaya",
    role: "Web Development Student Assistant",
    duration: "Sep 2025 - Jan 2026",
    status: "CLEARED",
    objectives: [
      "Taught foundational web development concepts and practical applications.",
    ],
    rewards: ["PHP", "Teaching"],
  },
  {
    id: "5",
    type: "MAIN QUEST",
    company: "IMT Student Union",
    role: "Technology Division Coordinator",
    duration: "Apr 2025 - Jun 2026",
    status: "CLEARED",
    objectives: [
      "Led the Technology Division in managing and deploying software projects.",
      "Implemented Continuous Integration and Continuous Delivery (CI/CD) pipelines.",
    ],
    rewards: ["CI/CD", "Software Project Management"],
  },
  {
    id: "6",
    type: "MAIN QUEST",
    company: "IMT Student Union",
    role: "Technology Division Member",
    duration: "Aug 2024 - Apr 2025",
    status: "CLEARED",
    objectives: [
      "Contributed to division initiatives and assisted in software project management.",
    ],
    rewards: ["Software Project Management", "PHP"],
  },
  {
    id: "7",
    type: "SUB-STORY",
    company: "Universitas Ciputra Surabaya",
    role: "Object-Oriented Programming Student Assistant",
    duration: "Feb 2025 - Jun 2025",
    status: "CLEARED",
    objectives: [
      "Facilitated hands-on learning for Object-Oriented Programming (OOP) concepts.",
    ],
    rewards: ["Object-Oriented Programming (OOP)", "Teaching"],
  },
  {
    id: "8",
    type: "SUB-STORY",
    company: "Universitas Ciputra Surabaya",
    role: "Entrepreneurship Essentials Student Assistant",
    duration: "Aug 2024 - Jan 2025",
    status: "CLEARED",
    objectives: [
      "Assisted in teaching Entrepreneurship Essentials and fostering student business acumen.",
    ],
    rewards: ["Entrepreneurship", "Teaching"],
  },
];
