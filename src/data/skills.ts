import {
  Code,
  Database,
  Server,
  Terminal,
  LucideIcon,
} from "lucide-react";

export type SkillCategory =
  "Core" | "Data & ORM" | "Infrastructure & DevOps" | "Secondary";

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
    upLeft?: string;
    upRight?: string;
    downLeft?: string;
    downRight?: string;
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

const coreSkills = (): SkillNode[] => {
  return [
    {
      id: "core-js",
      name: "JavaScript",
      description: "The dynamic language of the web.",
      icon: "/images/skills/javascript.svg",
      position: { x: 0, y: 0 },
      neighbors: { right: "core-ts" },
    },
    {
      id: "core-ts",
      name: "TypeScript",
      description: "Strictly typed JavaScript for robust applications.",
      icon: "/images/skills/typescript.svg",
      position: { x: 1, y: 0 },
      neighbors: {
        right: "core-express",
        down: "core-next",
        downLeft: "core-react",
        downRight: "core-node",
      },
    },
    {
      id: "core-express",
      name: "Express.js",
      description: "Fast, unopinionated, minimalist web framework.",
      icon: "/images/skills/express.svg",
      position: { x: 2, y: 0 },
      neighbors: { right: "core-websocket" },
    },
    {
      id: "core-websocket",
      name: "WebSockets",
      description: "Real-time, bi-directional network communication.",
      icon: "/images/skills/websocket.svg",
      position: { x: 3, y: 0 },
      neighbors: {},
    },
    {
      id: "core-react",
      name: "React",
      description: "Component-based UI library.",
      icon: "/images/skills/react.svg",
      position: { x: 0, y: 1 },
      neighbors: { right: "core-next", down: "core-motion" },
    },
    {
      id: "core-next",
      name: "Next.js",
      description: "The React framework for production.",
      icon: "/images/skills/next.svg",
      position: { x: 1, y: 1 },
      neighbors: {},
    },
    {
      id: "core-node",
      name: "Node.js",
      description: "Asynchronous event-driven JavaScript runtime.",
      icon: "/images/skills/node.svg",
      position: { x: 2, y: 1 },
      neighbors: { up: "core-express", left: "core-next" },
    },
    {
      id: "core-go",
      name: "Go",
      description: "High-performance, strongly typed systems language.",
      icon: "/images/skills/go.svg",
      position: { x: 3, y: 1 },
      neighbors: { up: "core-websocket" },
    },
    {
      id: "core-motion",
      name: "Motion",
      description: "Production-ready animation library for React.",
      icon: "/images/skills/motion.svg",
      position: { x: 0, y: 2 },
      neighbors: {},
    },
    {
      id: "core-tailwind",
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
      icon: "/images/skills/tailwind.svg",
      position: { x: 1, y: 2 },
      neighbors: { up: "core-next" },
    },
    {
      id: "core-php",
      name: "PHP",
      description: "Server-side scripting language.",
      icon: "/images/skills/php.svg",
      position: { x: 2, y: 2 },
      neighbors: { right: "core-laravel" },
    },
    {
      id: "core-laravel",
      name: "Laravel",
      description: "The PHP Framework for Web Artisans.",
      icon: "/images/skills/laravel.svg",
      position: { x: 3, y: 2 },
      neighbors: {},
    },
  ];
};

const dataSkills = (): SkillNode[] => {
  return [
    {
      id: "data-sqlite",
      name: "SQLite",
      description: "Lightweight, file-based database.",
      icon: "/images/skills/sqlite.svg",
      position: { x: 0, y: 0 },
      neighbors: { right: "data-mysql" },
    },
    {
      id: "data-mysql",
      name: "MySQL",
      description: "Popular relational database management system.",
      icon: "/images/skills/mysql.svg",
      position: { x: 1, y: 0 },
      neighbors: { right: "data-postgres" },
    },
    {
      id: "data-postgres",
      name: "PostgreSQL",
      description: "Advanced open-source relational database.",
      icon: "/images/skills/postgresql.svg",
      position: { x: 2, y: 0 },
      neighbors: { right: "data-redis", downRight: "data-prisma" },
    },
    {
      id: "data-redis",
      name: "Redis",
      description: "In-memory data structure store for caching.",
      icon: "/images/skills/redis.svg",
      position: { x: 3, y: 0 },
      neighbors: {},
    },
    {
      id: "data-firebase",
      name: "Firebase",
      description: "App development platform with NoSQL database.",
      icon: "/images/skills/firebase.svg",
      position: { x: 1, y: 1 },
      neighbors: { right: "data-supabase" },
    },
    {
      id: "data-supabase",
      name: "Supabase",
      description: "Open-source Firebase alternative based on Postgres.",
      icon: "/images/skills/supabase.svg",
      position: { x: 2, y: 1 },
      neighbors: { right: "data-prisma" },
    },
    {
      id: "data-prisma",
      name: "Prisma",
      description: "Next-generation ORM for Node.js and TypeScript.",
      icon: "/images/skills/prisma.svg",
      position: { x: 3, y: 1 },
      neighbors: { down: "data-drizzle" },
    },
    {
      id: "data-drizzle",
      name: "Drizzle",
      description: "Headless TypeScript ORM.",
      icon: "/images/skills/drizzle.svg",
      position: { x: 3, y: 2 },
      neighbors: {},
    },
  ];
};

const devOpsSkills = (): SkillNode[] => {
  return [
    {
      id: "ops-linux",
      name: "Linux",
      description: "Open-source operating system.",
      icon: "/images/skills/linux.svg",
      position: { x: 1, y: 0 },
      neighbors: { downLeft: "ops-git", downRight: "ops-docker" },
    },
    {
      id: "ops-git",
      name: "Git",
      description: "Distributed version control system.",
      icon: "/images/skills/git.svg",
      position: { x: 0, y: 1 },
      neighbors: { downRight: "ops-actions" },
    },
    {
      id: "ops-docker",
      name: "Docker",
      description: "Containerization platform.",
      icon: "/images/skills/docker.svg",
      position: { x: 2, y: 1 },
      neighbors: { right: "ops-nginx", downLeft: "ops-actions" },
    },
    {
      id: "ops-nginx",
      name: "Nginx",
      description: "Web server and reverse proxy.",
      icon: "/images/skills/nginx.svg",
      position: { x: 3, y: 1 },
      neighbors: {},
    },
    {
      id: "ops-actions",
      name: "GitHub Actions",
      description: "CI/CD automation for GitHub repositories.",
      icon: "/images/skills/actions.svg",
      position: { x: 1, y: 2 },
      neighbors: { down: "ops-vercel" },
    },
    {
      id: "ops-vercel",
      name: "Vercel",
      description: "Cloud platform for static sites and Serverless Functions.",
      icon: "/images/skills/vercel.svg",
      position: { x: 1, y: 3 },
      neighbors: {},
    },
  ];
};

const secondarySkills = (): SkillNode[] => {
  return [
    {
      id: "sec-python",
      name: "Python",
      description: "Versatile, high-level programming language.",
      icon: "/images/skills/python.svg",
      position: { x: 1, y: 0 },
      neighbors: { downLeft: "sec-godot", downRight: "sec-csharp" },
    },
    {
      id: "sec-godot",
      name: "Godot",
      description: "Open-source 2D/3D game engine.",
      icon: "/images/skills/godot.svg",
      position: { x: 0, y: 1 },
      neighbors: { downRight: "sec-unity" },
    },
    {
      id: "sec-csharp",
      name: "C#",
      description: "Modern, object-oriented language by Microsoft.",
      icon: "/images/skills/csharp.svg",
      position: { x: 2, y: 1 },
      neighbors: { downLeft: "sec-unity", right: "sec-kotlin" },
    },
    {
      id: "sec-unity",
      name: "Unity",
      description: "Industry standard 3D game engine.",
      icon: "/images/skills/unity.svg",
      position: { x: 1, y: 2 },
      neighbors: {},
    },
    {
      id: "sec-kotlin",
      name: "Kotlin",
      description: "Modern language for Android development.",
      icon: "/images/skills/kotlin.svg",
      position: { x: 3, y: 1 },
      neighbors: { down: "sec-swift" },
    },
    {
      id: "sec-swift",
      name: "Swift",
      description: "Powerful language for iOS/macOS apps.",
      icon: "/images/skills/swift.svg",
      position: { x: 3, y: 2 },
      neighbors: { downLeft: "sec-flutter" },
    },
    {
      id: "sec-flutter",
      name: "Flutter",
      description: "UI toolkit for building natively compiled apps.",
      icon: "/images/skills/flutter.svg",
      position: { x: 2, y: 3 },
      neighbors: {},
    },
  ];
};

export const skillsData: SkillStyle[] = [
  {
    id: "core",
    title: "Core",
    subtitle: "SHINOBI ARTS",
    themeColor: "var(--color-primary)",
    icon: Code,
    skills: coreSkills(),
  },
  {
    id: "data-orm",
    title: "Data & ORM",
    subtitle: "PROSTHETIC ARTS",
    themeColor: "var(--color-primary)",
    icon: Database,
    skills: dataSkills(),
  },
  {
    id: "infra-devops",
    title: "Infrastructure & DevOps",
    subtitle: "ASHINA ARTS",
    themeColor: "var(--color-primary)",
    icon: Server,
    skills: devOpsSkills(),
  },
  {
    id: "secondary",
    title: "Secondary",
    subtitle: "TEMPLE ARTS",
    themeColor: "var(--color-primary)",
    icon: Terminal,
    skills: secondarySkills(),
  },
];
