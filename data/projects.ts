import { Layers, Globe, Smartphone, Gamepad2 } from "lucide-react";

export const projectCategories = [
  { id: "ALL", label: "ALL", icon: Layers },
  { id: "WEB", label: "WEB", icon: Globe },
  { id: "MOBILE", label: "MOBILE", icon: Smartphone },
  { id: "GAMES", label: "GAMES", icon: Gamepad2 },
];

export const projectsData = [
  {
    id: "1",
    title: "C-Think",
    categories: ["WEB"],
    images: [
      "/images/projects/c-think-1.jpg",
      "/images/projects/c-think-2.jpg",
      "/images/projects/c-think-3.jpg",
    ],
    desc: "A high-performance competition platform built to handle thousands of concurrent users.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "shadcn/ui", "Pusher", "Soketi", "Cloudinary"],
    liveUrl: "https://ctc.bebras.uc.ac.id/",
    githubUrl: "https://github.com/Verzional/C-Think",
  },
  {
    id: "2",
    title: "13th NPLC CP",
    categories: ["WEB"],
    images: ["/images/projects/nplc-1.webp", "/images/projects/nplc-2.jpg"],
    desc: "A real-time competitive programming environment with automated judging.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Pusher", "Soketi", "Judge0", "Docker"],
    liveUrl: "https://cp.nplc.ciputra.ac.id/",
    githubUrl: "https://github.com/IMT-SU-25-26/13th-NPLC-CP",
  },
  {
    id: "3",
    title: "Astrocat",
    categories: ["MOBILE", "GAMES"],
    images: [
      "/images/projects/astrocat-1.jpg",
      "/images/projects/astrocat-2.jpg",
      "/images/projects/astrocat-3.jpg",
    ],
    desc: "An action-packed mobile arcade game featuring a cat in space.",
    techStack: ["Swift", "SwiftUI", "SpriteKit", "GameKit", "GameplayKit"],
    liveUrl: "https://testflight.apple.com/join/hUX7gCqu",
    githubUrl: "https://github.com/Verzional/Astrocat",
  },
  {
    id: "4",
    title: "IMT SU",
    categories: ["WEB"],
    images: ["/images/projects/imt-su-1.jpg", "/images/projects/imt-su-2.jpg"],
    desc: "The official Student Union hub featuring event tracking and announcements.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Cloudinary", "OAuth 2.0"],
    liveUrl: "simawa-imtuc.com",
    githubUrl: "https://github.com/IMT-SU-25-26/Web-Main",
  },
  {
    id: "5",
    title: "Vexel",
    categories: ["WEB"],
    images: ["/images/projects/vexel-1.jpg", "/images/projects/vexel-2.jpg"],
    desc: "A modern web application focusing on extreme UI/UX design.",
    techStack: ["Laravel", "PHP", "MySQL", "TailwindCSS", "Alpine.js", "LLM Orchestration (Gemini)"],
    liveUrl: "#",
    githubUrl: "https://github.com/Verzional/Vexel",
  },
  {
    id: "6",
    title: "Singaplan",
    categories: ["MOBILE"],
    images: [
      "/images/projects/singaplan-1.jpg",
      "/images/projects/singaplan-2.jpg",
      "/images/projects/singaplan-3.jpg",
    ],
    desc: "A comprehensive travel planner and itinerary manager for Singapore.",
    techStack: ["Swift", "SwiftUI", "SwiftData"],
    liveUrl: "#",
    githubUrl: "https://github.com/Verzional/Singaplan",
  },
];
