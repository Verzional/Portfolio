export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Soft Skills";

import { 
  Code2, Server, Wrench, HeartHandshake, LucideIcon
} from "lucide-react";

export interface SkillNode {
  id: string;
  name: string;
  description: string;
  icon?: string;
  position: {
    x: number; 
    y: number; 
  };
  neighbors: {
    up?: string;
    down?: string;
    left?: string;
    right?: string;
  };
}

export interface SkillStyle {
  id: string;
  title: SkillCategory;
  subtitle: string;
  themeColor: string;
  icon: LucideIcon;
  skills: SkillNode[];
}

const generateFrontendSkills = (): SkillNode[] => {
  return [
    {
      id: "node-ts",
      name: "TypeScript",
      description: "Strictly typed JavaScript for robust applications.",
      icon: "/images/skills/typescript.svg",
      position: { x: 0, y: 0 },
      neighbors: { right: "node-next", down: "node-node" },
    },
    {
      id: "node-next",
      name: "Next.js",
      description: "The React framework for production.",
      icon: "/images/skills/next.svg",
      position: { x: 1, y: 0 },
      neighbors: { left: "node-ts" },
    },
    {
      id: "node-node",
      name: "Node.js",
      description: "Asynchronous event-driven JavaScript runtime.",
      icon: "/images/skills/node.svg",
      position: { x: 0, y: 1 },
      neighbors: { up: "node-ts", right: "node-express", down: "node-go" },
    },
    {
      id: "node-express",
      name: "Express",
      description: "Fast, unopinionated, minimalist web framework for Node.js.",
      icon: "/images/skills/express.svg",
      position: { x: 1, y: 1 },
      neighbors: { left: "node-node", right: "node-laravel" },
    },
    {
      id: "node-go",
      name: "Go",
      description: "High-performance, strongly typed systems language.",
      icon: "/images/skills/go.svg",
      position: { x: 0, y: 2 },
      neighbors: { up: "node-node" },
    },
    {
      id: "node-laravel",
      name: "Laravel",
      description: "The PHP Framework for Web Artisans.",
      icon: "/images/skills/laravel.svg",
      position: { x: 2, y: 1 },
      neighbors: { left: "node-express" },
    }
  ];
};

export const skillsData: SkillStyle[] = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "SHINOBI ARTS",
    themeColor: "var(--color-primary)",
    icon: Code2,
    skills: generateFrontendSkills(),
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "PROSTHETIC ARTS",
    themeColor: "var(--color-accent)",
    icon: Server,
    skills: [], // Empty for now
  },
  {
    id: "tools",
    title: "Tools",
    subtitle: "ASHINA ARTS",
    themeColor: "var(--color-warning)",
    icon: Wrench,
    skills: [], // Empty for now
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    subtitle: "ZEN ARTS",
    themeColor: "var(--color-info)",
    icon: HeartHandshake,
    skills: [], // Empty for now
  }
];
