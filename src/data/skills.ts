export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Soft Skills";


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
  skills: SkillNode[];
}

const generateFrontendSkills = (): SkillNode[] => {
  return [
    {
      id: "node-root",
      name: "FRONTEND MASTERY",
      description: "The beginning of the Frontend arts. Master the foundations of the web.",
      position: { x: 0, y: 0 },
      neighbors: { right: "node-js" },
    },
    {
      id: "node-js",
      name: "JavaScript Core",
      description: "ES6+, closures, and asynchronous programming.",
      position: { x: 1, y: 0 },
      neighbors: { left: "node-root", right: "node-react", up: "node-ts", down: "node-html" },
    },
    {
      id: "node-ts",
      name: "TypeScript",
      description: "Static typing, generics, and interface design.",
      position: { x: 2, y: -1 },
      neighbors: { down: "node-js", right: "node-react-ts" },
    },
    {
      id: "node-html",
      name: "HTML/CSS",
      description: "Semantic markup and cascading styles.",
      position: { x: 2, y: 1 },
      neighbors: { up: "node-js", right: "node-tailwind" },
    },
    {
      id: "node-react",
      name: "React.js",
      description: "Component lifecycle, hooks, and context.",
      position: { x: 3, y: 0 },
      neighbors: { left: "node-js", up: "node-react-ts", down: "node-tailwind", right: "node-next" },
    },
    {
      id: "node-react-ts",
      name: "React + TS",
      description: "Strictly typed components and props.",
      position: { x: 3, y: -1 },
      neighbors: { left: "node-ts", down: "node-react" },
    },
    {
      id: "node-tailwind",
      name: "Tailwind CSS",
      description: "Utility-first design and responsive layouts.",
      position: { x: 3, y: 1 },
      neighbors: { left: "node-html", up: "node-react", right: "node-framer" },
    },
    {
      id: "node-next",
      name: "Next.js",
      description: "Server-side rendering, App Router, and full-stack React.",
      position: { x: 4, y: 0 },
      neighbors: { left: "node-react" },
    },
    {
      id: "node-framer",
      name: "Framer Motion",
      description: "Complex physics-based layout animations.",
      position: { x: 4, y: 1 },
      neighbors: { left: "node-tailwind" },
    }
  ];
};

export const skillsData: SkillStyle[] = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "SHINOBI ARTS",
    themeColor: "var(--color-primary)",
    skills: generateFrontendSkills(),
  },
];
