import {
  Layers,
  Globe,
  Database,
  Terminal,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type SkillCategory = "ALL" | "WEB" | "DATA" | "DEVOPS" | "MOBILE";
export type SkillRing = 1 | 2 | 3;

export interface SkillNode {
  id: string;
  name: string;
  essenceName: string;
  description: string;
  icon: string;
  category: "WEB" | "DATA" | "DEVOPS" | "MOBILE";
  ring: SkillRing;
  angle: number; // Degrees Clockwise From True North
  radialInward?: string;
  radialOutward?: string[];
  arcNeighbors?: string[];
  neighbors: {
    up?: string;
    down?: string;
    left?: string;
    right?: string;
  };
}

export interface SkillCategoryItem {
  id: SkillCategory;
  label: string;
  stance: string;
  subtitle: string;
  themeColor: string;
  glowColor: string;
  icon: LucideIcon;
  styleIcon: string;
}

export const skillCategories: SkillCategoryItem[] = [
  {
    id: "ALL",
    label: "ALL",
    stance: "KIWAMI",
    subtitle: "ALL DISCIPLINES",
    themeColor: "#ff2a2a",
    glowColor: "rgba(255, 42, 42, 0.65)",
    icon: Layers,
    styleIcon: "/images/styles/all-kiwami.png",
  },
  {
    id: "WEB",
    label: "WEB",
    stance: "BRAWLER",
    subtitle: "WEB & FULLSTACK",
    themeColor: "#2563eb",
    glowColor: "rgba(37, 99, 235, 0.6)",
    icon: Globe,
    styleIcon: "/images/styles/kiryu-brawler.png",
  },
  {
    id: "MOBILE",
    label: "MOBILE",
    stance: "RUSH",
    subtitle: "NATIVE & INTERACTIVE",
    themeColor: "#f43f8e",
    glowColor: "rgba(244, 63, 142, 0.6)",
    icon: Smartphone,
    styleIcon: "/images/styles/kiryu-rush.png",
  },
  {
    id: "DEVOPS",
    label: "DEVOPS",
    stance: "LEGEND",
    subtitle: "INFRA & RELIABILITY",
    themeColor: "#ffffff",
    glowColor: "rgba(255, 255, 255, 0.75)",
    icon: Terminal,
    styleIcon: "/images/styles/kiryu-legend.png",
  },
  {
    id: "DATA",
    label: "DATA",
    stance: "BEAST",
    subtitle: "DATA & PERSISTENCE",
    themeColor: "#eab308",
    glowColor: "rgba(234, 179, 8, 0.6)",
    icon: Database,
    styleIcon: "/images/styles/kiryu-beast.png",
  },
];

export const skillsData: SkillNode[] = [
  // ==========================================
  // North Web Brawler Stance
  // ==========================================
  {
    id: "core-js",
    name: "JavaScript",
    essenceName: "ESSENCE OF DYNAMIC RUNTIME",
    description:
      "The ubiquitous, dynamic scripting foundation of modern web architecture.",
    icon: "/images/skills/javascript.svg",
    category: "WEB",
    ring: 1,
    angle: 340,
    radialOutward: ["core-react", "core-ts", "core-node"],
    arcNeighbors: ["data-mysql", "core-php"],
    neighbors: {
      up: "core-ts",
      down: "core-js",
      left: "data-mysql",
      right: "core-php",
    },
  },
  {
    id: "core-php",
    name: "PHP",
    essenceName: "ESSENCE OF SERVER CRAFT",
    description:
      "Server-side web scripting engine powering enterprise application backends.",
    icon: "/images/skills/php.svg",
    category: "WEB",
    ring: 1,
    angle: 20,
    radialOutward: ["core-laravel"],
    arcNeighbors: ["core-js", "sec-csharp"],
    neighbors: {
      up: "core-laravel",
      down: "core-php",
      left: "core-js",
      right: "sec-csharp",
    },
  },
  {
    id: "core-react",
    name: "React",
    essenceName: "ESSENCE OF REACTIVE UI",
    description:
      "Component-driven interface composition with declarative state updates.",
    icon: "/images/skills/react.svg",
    category: "WEB",
    ring: 2,
    angle: 325,
    radialInward: "core-js",
    radialOutward: ["core-motion", "core-tailwind", "core-next"],
    arcNeighbors: [],
    neighbors: {
      up: "core-motion",
      down: "core-js",
      left: "data-redis",
      right: "core-ts",
    },
  },
  {
    id: "core-ts",
    name: "TypeScript",
    essenceName: "ESSENCE OF TYPE INTEGRITY",
    description:
      "Strict compile-time type validation powering scalable enterprise codebases.",
    icon: "/images/skills/typescript.svg",
    category: "WEB",
    ring: 2,
    angle: 350,
    radialInward: "core-js",
    radialOutward: ["core-next"],
    arcNeighbors: [],
    neighbors: {
      up: "core-next",
      down: "core-js",
      left: "core-react",
      right: "core-node",
    },
  },
  {
    id: "core-node",
    name: "Node.js",
    essenceName: "ESSENCE OF ASYNC IO",
    description:
      "Event-driven, non-blocking I/O runtime powering modern backend microservices.",
    icon: "/images/skills/node.svg",
    category: "WEB",
    ring: 2,
    angle: 10,
    radialInward: "core-js",
    radialOutward: ["core-next", "core-express", "core-websocket"],
    arcNeighbors: [],
    neighbors: {
      up: "core-express",
      down: "core-js",
      left: "core-ts",
      right: "core-laravel",
    },
  },
  {
    id: "core-laravel",
    name: "Laravel",
    essenceName: "ESSENCE OF ELEGANT MVC",
    description:
      "Full-featured PHP web ecosystem with expressive ORM, queues, and artisan tooling.",
    icon: "/images/skills/laravel.svg",
    category: "WEB",
    ring: 2,
    angle: 25,
    radialInward: "core-php",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "core-laravel",
      down: "core-php",
      left: "core-node",
      right: "sec-unity",
    },
  },
  {
    id: "core-motion",
    name: "Motion",
    essenceName: "ESSENCE OF KINETIC FLOW",
    description:
      "Physics-driven 60fps gesture animations and spring transitions for React.",
    icon: "/images/skills/motion.svg",
    category: "WEB",
    ring: 3,
    angle: 315,
    radialInward: "core-react",
    arcNeighbors: ["core-tailwind"],
    neighbors: {
      up: "core-motion",
      down: "core-react",
      left: "sec-python",
      right: "core-tailwind",
    },
  },
  {
    id: "core-tailwind",
    name: "Tailwind CSS",
    essenceName: "ESSENCE OF ATOMIC STYLING",
    description:
      "Utility-first styling system delivering deterministic design token systems.",
    icon: "/images/skills/tailwind.svg",
    category: "WEB",
    ring: 3,
    angle: 335,
    radialInward: "core-react",
    arcNeighbors: ["core-motion"],
    neighbors: {
      up: "core-tailwind",
      down: "core-react",
      left: "core-motion",
      right: "core-next",
    },
  },
  {
    id: "core-next",
    name: "Next.js",
    essenceName: "ESSENCE OF SERVER ARCHITECTURE",
    description:
      "Hybrid SSR, streaming React Server Components, and edge routing.",
    icon: "/images/skills/next.svg",
    category: "WEB",
    ring: 3,
    angle: 350,
    radialInward: "core-ts",
    arcNeighbors: [],
    neighbors: {
      up: "core-next",
      down: "core-ts",
      left: "core-tailwind",
      right: "core-express",
    },
  },
  {
    id: "core-express",
    name: "Express.js",
    essenceName: "ESSENCE OF REST PIPELINE",
    description:
      "Minimalist HTTP routing middleware engine for robust Node.js APIs.",
    icon: "/images/skills/express.svg",
    category: "WEB",
    ring: 3,
    angle: 8,
    radialInward: "core-node",
    arcNeighbors: ["core-websocket"],
    neighbors: {
      up: "core-express",
      down: "core-node",
      left: "core-next",
      right: "core-websocket",
    },
  },
  {
    id: "core-websocket",
    name: "WebSockets",
    essenceName: "ESSENCE OF DUPLEX STREAM",
    description:
      "Persistent, bidirectional full-duplex communication channels for real-time events.",
    icon: "/images/skills/websocket.svg",
    category: "WEB",
    ring: 3,
    angle: 22,
    radialInward: "core-node",
    arcNeighbors: ["core-express"],
    neighbors: {
      up: "core-websocket",
      down: "core-node",
      left: "core-express",
      right: "sec-godot",
    },
  },

  // ==========================================
  // East Mobile Rush Stance
  // ==========================================
  {
    id: "sec-csharp",
    name: "C#",
    essenceName: "ESSENCE OF MANAGED RUNTIME",
    description:
      "Strongly-typed object-oriented language powering enterprise services and game loops.",
    icon: "/images/skills/csharp.svg",
    category: "MOBILE",
    ring: 1,
    angle: 65,
    radialOutward: ["sec-unity"],
    arcNeighbors: ["core-php", "sec-swift"],
    neighbors: {
      up: "sec-unity",
      down: "sec-csharp",
      left: "core-php",
      right: "sec-swift",
    },
  },
  {
    id: "sec-swift",
    name: "Swift",
    essenceName: "ESSENCE OF COCOA ARCHITECTURE",
    description:
      "High-performance Apple systems language with automatic reference counting and protocols.",
    icon: "/images/skills/swift.svg",
    category: "MOBILE",
    ring: 1,
    angle: 90,
    radialOutward: ["sec-flutter"],
    arcNeighbors: ["sec-csharp", "sec-java"],
    neighbors: {
      up: "sec-flutter",
      down: "sec-swift",
      left: "sec-csharp",
      right: "sec-java",
    },
  },
  {
    id: "sec-java",
    name: "Java",
    essenceName: "ESSENCE OF ENTERPRISE JVM",
    description:
      "Battle-tested object-oriented enterprise platform with garbage collection and multi-threading.",
    icon: "/images/skills/java.svg",
    category: "MOBILE",
    ring: 1,
    angle: 115,
    radialOutward: ["sec-kotlin"],
    arcNeighbors: ["sec-swift", "ops-linux"],
    neighbors: {
      up: "sec-kotlin",
      down: "sec-java",
      left: "sec-swift",
      right: "ops-linux",
    },
  },
  {
    id: "sec-unity",
    name: "Unity",
    essenceName: "ESSENCE OF COMPONENT LIFECYCLE",
    description:
      "Cross-platform real-time interactive engine powering 3D simulations and immersive gameplay.",
    icon: "/images/skills/unity.svg",
    category: "MOBILE",
    ring: 2,
    angle: 70,
    radialInward: "sec-csharp",
    radialOutward: ["sec-godot"],
    arcNeighbors: [],
    neighbors: {
      up: "sec-godot",
      down: "sec-csharp",
      left: "core-laravel",
      right: "sec-flutter",
    },
  },
  {
    id: "sec-flutter",
    name: "Flutter",
    essenceName: "ESSENCE OF DART SKIA CANVAS",
    description:
      "Multi-platform reactive UI framework compiling directly to native ARM machine code.",
    icon: "/images/skills/flutter.svg",
    category: "MOBILE",
    ring: 2,
    angle: 90,
    radialInward: "sec-swift",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "sec-flutter",
      down: "sec-swift",
      left: "sec-unity",
      right: "sec-kotlin",
    },
  },
  {
    id: "sec-kotlin",
    name: "Kotlin",
    essenceName: "ESSENCE OF MODERN ANDROID",
    description:
      "Modern expressive JVM language powering idiomatic Android Jetpack architectures.",
    icon: "/images/skills/kotlin.svg",
    category: "MOBILE",
    ring: 2,
    angle: 115,
    radialInward: "sec-java",
    radialOutward: ["core-go"],
    arcNeighbors: [],
    neighbors: {
      up: "core-go",
      down: "sec-java",
      left: "sec-flutter",
      right: "ops-nginx",
    },
  },
  {
    id: "sec-godot",
    name: "Godot",
    essenceName: "ESSENCE OF SCENE TREE",
    description:
      "Node-driven 2D/3D open-source game engine with GDScript and custom C# bindings.",
    icon: "/images/skills/godot.svg",
    category: "MOBILE",
    ring: 3,
    angle: 75,
    radialInward: "sec-unity",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "sec-godot",
      down: "sec-unity",
      left: "core-websocket",
      right: "core-go",
    },
  },
  {
    id: "core-go",
    name: "Go",
    essenceName: "ESSENCE OF CSP CONCURRENCY",
    description:
      "Statically compiled concurrent language with goroutines, channels, and zero-cost abstraction.",
    icon: "/images/skills/go.svg",
    category: "MOBILE",
    ring: 3,
    angle: 115,
    radialInward: "sec-kotlin",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "core-go",
      down: "sec-kotlin",
      left: "sec-godot",
      right: "ops-artillery",
    },
  },

  // ==========================================
  // South DevOps Legend Stance
  // ==========================================
  {
    id: "ops-linux",
    name: "Linux",
    essenceName: "ESSENCE OF KERNEL SUBSYSTEM",
    description:
      "POSIX operating system kernel, systemd processes, filesystem permissions, and bash scripting.",
    icon: "/images/skills/linux.svg",
    category: "DEVOPS",
    ring: 1,
    angle: 160,
    radialOutward: ["ops-nginx", "ops-docker"],
    arcNeighbors: ["sec-java", "ops-git"],
    neighbors: {
      up: "ops-linux",
      down: "ops-docker",
      left: "sec-java",
      right: "ops-git",
    },
  },
  {
    id: "ops-git",
    name: "Git",
    essenceName: "ESSENCE OF VERSION GRAPH",
    description:
      "Distributed version control managing multi-branch DAG commit trees and merging.",
    icon: "/images/skills/git.svg",
    category: "DEVOPS",
    ring: 1,
    angle: 200,
    radialOutward: ["ops-actions"],
    arcNeighbors: ["ops-linux", "data-sqlite"],
    neighbors: {
      up: "ops-git",
      down: "ops-actions",
      left: "ops-linux",
      right: "data-sqlite",
    },
  },
  {
    id: "ops-nginx",
    name: "Nginx",
    essenceName: "ESSENCE OF EDGE PROXY",
    description:
      "High-performance reverse proxy server handling TLS termination, load balancing, and rate limiting.",
    icon: "/images/skills/nginx.svg",
    category: "DEVOPS",
    ring: 2,
    angle: 150,
    radialInward: "ops-linux",
    radialOutward: ["ops-artillery"],
    arcNeighbors: [],
    neighbors: {
      up: "ops-linux",
      down: "ops-artillery",
      left: "sec-kotlin",
      right: "ops-docker",
    },
  },
  {
    id: "ops-docker",
    name: "Docker",
    essenceName: "ESSENCE OF CONTAINER ISOLATION",
    description:
      "OS-level virtualization packaging apps and system dependencies into reproducible images.",
    icon: "/images/skills/docker.svg",
    category: "DEVOPS",
    ring: 2,
    angle: 170,
    radialInward: "ops-linux",
    radialOutward: ["ops-prometheus", "ops-grafana"],
    arcNeighbors: [],
    neighbors: {
      up: "ops-linux",
      down: "ops-prometheus",
      left: "ops-nginx",
      right: "ops-actions",
    },
  },
  {
    id: "ops-actions",
    name: "GitHub Actions",
    essenceName: "ESSENCE OF AUTOMATION WORKFLOW",
    description:
      "Declarative CI/CD pipeline runner executing automated test suites, linting, and deploy hooks.",
    icon: "/images/skills/actions.svg",
    category: "DEVOPS",
    ring: 2,
    angle: 200,
    radialInward: "ops-git",
    radialOutward: ["ops-vercel"],
    arcNeighbors: [],
    neighbors: {
      up: "ops-git",
      down: "ops-vercel",
      left: "ops-docker",
      right: "data-firebase",
    },
  },
  {
    id: "ops-artillery",
    name: "Artillery",
    essenceName: "ESSENCE OF LOAD STRESS",
    description:
      "Cloud-scale performance stress-testing toolkit for benchmarking high-throughput API latency.",
    icon: "/images/skills/artillery.svg",
    category: "DEVOPS",
    ring: 3,
    angle: 145,
    radialInward: "ops-nginx",
    arcNeighbors: [],
    neighbors: {
      up: "ops-nginx",
      down: "ops-artillery",
      left: "core-go",
      right: "ops-prometheus",
    },
  },
  {
    id: "ops-prometheus",
    name: "Prometheus",
    essenceName: "ESSENCE OF TIME SERIES METRICS",
    description:
      "Dimensional time-series monitoring system with pull-based metrics scraping and PromQL querying.",
    icon: "/images/skills/prometheus.svg",
    category: "DEVOPS",
    ring: 3,
    angle: 165,
    radialInward: "ops-docker",
    arcNeighbors: ["ops-grafana"],
    neighbors: {
      up: "ops-docker",
      down: "ops-prometheus",
      left: "ops-artillery",
      right: "ops-grafana",
    },
  },
  {
    id: "ops-grafana",
    name: "Grafana",
    essenceName: "ESSENCE OF OBSERVABILITY HUD",
    description:
      "Interactive operational analytics and visualization dashboard for real-time telemetry alerting.",
    icon: "/images/skills/grafana.svg",
    category: "DEVOPS",
    ring: 3,
    angle: 180,
    radialInward: "ops-docker",
    arcNeighbors: ["ops-prometheus"],
    neighbors: {
      up: "ops-docker",
      down: "ops-grafana",
      left: "ops-prometheus",
      right: "ops-vercel",
    },
  },
  {
    id: "ops-vercel",
    name: "Vercel",
    essenceName: "ESSENCE OF EDGE SERVERLESS",
    description:
      "Global CDN edge platform providing zero-configuration preview deployments and serverless functions.",
    icon: "/images/skills/vercel.svg",
    category: "DEVOPS",
    ring: 3,
    angle: 205,
    radialInward: "ops-actions",
    arcNeighbors: [],
    neighbors: {
      up: "ops-actions",
      down: "ops-vercel",
      left: "ops-grafana",
      right: "data-drizzle",
    },
  },

  // ==========================================
  // West Data Beast Stance
  // ==========================================
  {
    id: "data-sqlite",
    name: "SQLite",
    essenceName: "ESSENCE OF EMBEDDED SQL",
    description:
      "Zero-configuration serverless storage engine embedded directly into processes.",
    icon: "/images/skills/sqlite.svg",
    category: "DATA",
    ring: 1,
    angle: 245,
    radialOutward: ["data-firebase"],
    arcNeighbors: ["ops-git", "data-postgres"],
    neighbors: {
      up: "data-postgres",
      down: "data-sqlite",
      left: "data-firebase",
      right: "ops-git",
    },
  },
  {
    id: "data-postgres",
    name: "PostgreSQL",
    essenceName: "ESSENCE OF RELATIONAL ACID",
    description:
      "Advanced open-source relational database with robust ACID compliance and JSONB operators.",
    icon: "/images/skills/postgresql.svg",
    category: "DATA",
    ring: 1,
    angle: 270,
    radialOutward: ["data-supabase"],
    arcNeighbors: ["data-sqlite", "data-mysql"],
    neighbors: {
      up: "data-mysql",
      down: "data-sqlite",
      left: "data-supabase",
      right: "data-postgres",
    },
  },
  {
    id: "data-mysql",
    name: "MySQL",
    essenceName: "ESSENCE OF INNODB CLUSTER",
    description:
      "High-throughput relational SQL storage engine with multi-master clustering and replication.",
    icon: "/images/skills/mysql.svg",
    category: "DATA",
    ring: 1,
    angle: 295,
    radialOutward: ["data-redis"],
    arcNeighbors: ["data-postgres", "core-js"],
    neighbors: {
      up: "core-js",
      down: "data-postgres",
      left: "data-redis",
      right: "data-mysql",
    },
  },
  {
    id: "data-firebase",
    name: "Firebase",
    essenceName: "ESSENCE OF REALTIME SYNC",
    description:
      "Cloud document store with real-time websocket synchronization and managed security rules.",
    icon: "/images/skills/firebase.svg",
    category: "DATA",
    ring: 2,
    angle: 245,
    radialInward: "data-sqlite",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "data-supabase",
      down: "ops-actions",
      left: "data-firebase",
      right: "data-sqlite",
    },
  },
  {
    id: "data-supabase",
    name: "Supabase",
    essenceName: "ESSENCE OF OPEN POSTGRES",
    description:
      "Open-source Firebase alternative featuring Postgres Row Level Security and auto-generated APIs.",
    icon: "/images/skills/supabase.svg",
    category: "DATA",
    ring: 2,
    angle: 270,
    radialInward: "data-postgres",
    radialOutward: ["data-drizzle", "data-prisma"],
    arcNeighbors: [],
    neighbors: {
      up: "data-redis",
      down: "data-firebase",
      left: "data-prisma",
      right: "data-postgres",
    },
  },
  {
    id: "data-redis",
    name: "Redis",
    essenceName: "ESSENCE OF MEMORY CACHE",
    description:
      "In-memory key-value data structure store used for caching, queues, and pub/sub messaging.",
    icon: "/images/skills/redis.svg",
    category: "DATA",
    ring: 2,
    angle: 295,
    radialInward: "data-mysql",
    radialOutward: ["sec-python"],
    arcNeighbors: [],
    neighbors: {
      up: "core-react",
      down: "data-supabase",
      left: "sec-python",
      right: "data-mysql",
    },
  },
  {
    id: "data-drizzle",
    name: "Drizzle",
    essenceName: "ESSENCE OF ZERO-OVERHEAD ORM",
    description:
      "TypeScript ORM with SQL-like dialect, zero runtime bloat, and automatic schema migrations.",
    icon: "/images/skills/drizzle.svg",
    category: "DATA",
    ring: 3,
    angle: 255,
    radialInward: "data-supabase",
    arcNeighbors: ["data-prisma"],
    neighbors: {
      up: "data-prisma",
      down: "ops-vercel",
      left: "data-drizzle",
      right: "data-supabase",
    },
  },
  {
    id: "data-prisma",
    name: "Prisma",
    essenceName: "ESSENCE OF TYPE-SAFE SCHEMA",
    description:
      "Declarative data modeling ORM generating fully type-safe query builders and migration diffs.",
    icon: "/images/skills/prisma.svg",
    category: "DATA",
    ring: 3,
    angle: 275,
    radialInward: "data-supabase",
    arcNeighbors: ["data-drizzle"],
    neighbors: {
      up: "sec-python",
      down: "data-drizzle",
      left: "data-prisma",
      right: "data-supabase",
    },
  },
  {
    id: "sec-python",
    name: "Python",
    essenceName: "ESSENCE OF DATA PIPELINE",
    description:
      "Interpreted dynamic language powering analytics pipelines, scientific computing, and ML models.",
    icon: "/images/skills/python.svg",
    category: "DATA",
    ring: 3,
    angle: 295,
    radialInward: "data-redis",
    arcNeighbors: [],
    neighbors: {
      up: "core-motion",
      down: "data-prisma",
      left: "sec-python",
      right: "data-redis",
    },
  },
];
