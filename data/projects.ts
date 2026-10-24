import {
  Layers,
  Globe,
  Smartphone,
  Monitor,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";

export type ProjectCategory = "WEB" | "MOBILE" | "DESKTOP" | "GAMES";

export interface ProjectCategoryItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  categories: ProjectCategory[];
  images: string[];
  desc: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectCategories: ProjectCategoryItem[] = [
  { id: "ALL", label: "ALL", icon: Layers },
  { id: "WEB", label: "WEB", icon: Globe },
  { id: "MOBILE", label: "MOBILE", icon: Smartphone },
  { id: "DESKTOP", label: "DESKTOP", icon: Monitor },
  { id: "GAMES", label: "GAMES", icon: Gamepad2 },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "13th NPLC CP",
    categories: ["WEB"],
    images: [
      "/images/projects/nplc-cp/editor.webp",
      "/images/projects/nplc-cp/problems.webp",
      "/images/projects/nplc-cp/leaderboard.webp",
    ],
    desc: "A high-concurrency competitive programming evaluation engine and contest platform. Features sandboxed real-time code evaluation via Judge0, sub-second live leaderboard telemetry via Soketi, and role-based contest administration.",
    techStack: [
      "Next.js 15 (App Router)",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Judge0",
      "Soketi",
      "Docker",
      "NextAuth v4",
      "Tailwind CSS v4",
    ],
    githubUrl: "https://github.com/IMT-SU-25-26/13th-NPLC-CP",
  },
  {
    id: "2",
    title: "CryptoNotch",
    categories: ["DESKTOP"],
    images: ["/images/projects/cryptonotch/demo.webp"],
    desc: "A native macOS Dynamic Island utility delivering sub-second cryptocurrency market intelligence directly to MacBook camera notches and external displays. Features multiplexed WebSockets across Binance, Coinbase, and Kraken, 22 custom metrics, and Sparkle auto-updates.",
    techStack: [
      "Swift",
      "SwiftUI",
      "AppKit",
      "NSPanel",
      "WebSockets",
      "Combine",
      "Sparkle 2",
      "UserNotifications",
    ],
    liveUrl: "https://github.com/Verzional/CryptoNotch/releases",
    githubUrl: "https://github.com/Verzional/CryptoNotch",
  },
  {
    id: "3",
    title: "C-Think",
    categories: ["WEB"],
    images: [
      "/images/projects/c-think/mobile.webp",
      "/images/projects/c-think/scan.webp",
      "/images/projects/c-think/contest.webp",
    ],
    desc: "A real-time logic competition platform supporting live multi-station tracking, automated scoring, and instant leaderboard synchronization. Includes camera-based QR station check-in verification and multi-tier role access for judges, admins, and teams.",
    techStack: [
      "Next.js 16 (App Router)",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Auth.js v5",
      "Pusher",
      "Soketi",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Zod",
      "QR Scanner",
      "Cloudinary",
    ],
    githubUrl: "https://github.com/Verzional/C-Think",
  },
  {
    id: "4",
    title: "Vexel",
    categories: ["WEB"],
    images: [
      "/images/projects/vexel/home.webp",
      "/images/projects/vexel/dashboard.webp",
      "/images/projects/vexel/rubric.webp",
    ],
    desc: "An AI-powered academic evaluation platform integrating Google Gemini 2.5 Flash to automatically grade student PDF submissions against customizable rubrics. Delivers granular multi-band scoring, detailed reasoning breakdowns, and actionable feedback.",
    techStack: [
      "Laravel 12",
      "PHP",
      "Google Gemini 2.5 Flash",
      "PDF Parser",
      "MySQL",
      "Tailwind CSS",
      "Alpine.js",
    ],
    githubUrl: "https://github.com/Verzional/Vexel",
  },
  {
    id: "5",
    title: "Astrocat",
    categories: ["MOBILE", "GAMES"],
    images: [
      "/images/projects/astrocat/splash.webp",
      "/images/projects/astrocat/gameplay.webp",
      "/images/projects/astrocat/menu.webp",
    ],
    desc: "A real-time multiplayer vertical platformer for iOS where players race upward through dynamic hazard gauntlets. Leverages GameKit for low-latency peer-to-peer multiplayer match synchronization and SpriteKit for responsive physics.",
    techStack: [
      "Swift",
      "SwiftUI",
      "SpriteKit",
      "GameKit",
      "GameplayKit",
      "AVFoundation",
    ],
    liveUrl: "https://testflight.apple.com/join/hUX7gCqu",
    githubUrl: "https://github.com/Verzional/Astrocat",
  },
  {
    id: "6",
    title: "Polyfuse",
    categories: ["GAMES", "MOBILE"],
    images: [
      "/images/projects/polyfuse/gameplay.webp",
      "/images/projects/polyfuse/game-over.webp",
      "/images/projects/polyfuse/menu.webp",
    ],
    desc: "An endless spatial strategy puzzle where players fit geometric polyforms into a 3-axis isometric canvas to trigger cascading line clears. Driven by escalating combo momentum, core haptics, and procedural particle feedback in an addictive arcade loop.",
    techStack: [
      "Unity 6",
      "C#",
      "Isometric Grid Engine",
      "Universal Render Pipeline (URP)",
      "Unity Input System",
      "Core Haptics",
    ],
    githubUrl: "https://github.com/Verzional/Polyfuse",
  },
  {
    id: "7",
    title: "Count Downcula",
    categories: ["GAMES"],
    images: [
      "/images/projects/count-downcula/gameplay.webp",
      "/images/projects/count-downcula/shop.webp",
      "/images/projects/count-downcula/menu.webp",
    ],
    desc: "A fast-paced 1v1 rogue-lite arena fighter featuring procedural enemy encounters, precision parry timings, and high-stakes duels. Built with a modular hierarchical state machine and responsive 2D physics.",
    techStack: [
      "Unity 6",
      "C#",
      "2D Universal Render Pipeline (URP)",
      "Finite State Machine (FSM)",
      "Unity Input System",
      "Unity Test Framework",
    ],
    liveUrl: "https://verzional.itch.io/count-downcula",
  },
  {
    id: "8",
    title: "IMT SU Hub",
    categories: ["WEB"],
    images: [
      "/images/projects/imt-su/home.webp",
      "/images/projects/imt-su/about.webp",
      "/images/projects/imt-su/achievements.webp",
    ],
    desc: "The official web portal for the Information & Multimedia Technology Student Union. Powers departmental achievement archives, event scheduling, and social initiatives with smooth GSAP animations and authenticated content pipelines.",
    techStack: [
      "Next.js 15 (App Router)",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "GSAP",
      "Tailwind CSS v4",
      "NextAuth v4",
      "Zod",
      "Cloudinary",
    ],
    githubUrl: "https://github.com/IMT-SU-25-26/Web-Main",
  },
  {
    id: "9",
    title: "Singaplan",
    categories: ["MOBILE"],
    images: [
      "/images/projects/singaplan/itinerary.webp",
      "/images/projects/singaplan/search.webp",
      "/images/projects/singaplan/districts.webp",
    ],
    desc: "An iOS travel planner that synthesizes tailored Singapore itineraries based on personalized priorities, pace, and geographic districts. Uses SwiftData for offline-first persistence and fluid declarative SwiftUI interfaces.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "Observation"],
    githubUrl: "https://github.com/Verzional/Singaplan",
  },
  {
    id: "10",
    title: "12th NPLC VN",
    categories: ["GAMES"],
    images: [
      "/images/projects/12th-nplc-vn/dialogue.webp",
      "/images/projects/12th-nplc-vn/login.webp",
    ],
    desc: "An interactive web-based visual novel developed for the 12th NPLC competition. Features branching narrative paths, dynamic dialogue evaluation, and backend state persistence driven by live team rally performance.",
    techStack: ["Unity WebGL", "C#", "Laravel", "PHP", "MySQL"],
  },
];
