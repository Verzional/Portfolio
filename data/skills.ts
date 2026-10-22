import {
  Layers,
  Globe,
  Database,
  Terminal,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type SkillCategory = "ALL" | "WEB" | "MOBILE" | "DATA" | "DEVOPS";
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
    id: "MOBILE",
    label: "MOBILE",
    stance: "BRAWLER",
    subtitle: "NATIVE & INTERACTIVE",
    themeColor: "#2563eb",
    glowColor: "rgba(37, 99, 235, 0.6)",
    icon: Smartphone,
    styleIcon: "/images/styles/kiryu-brawler.png",
  },
  {
    id: "WEB",
    label: "WEB",
    stance: "RUSH",
    subtitle: "WEB & FULLSTACK",
    themeColor: "#f43f8e",
    glowColor: "rgba(244, 63, 142, 0.6)",
    icon: Globe,
    styleIcon: "/images/styles/kiryu-rush.png",
  },
  {
    id: "DEVOPS",
    label: "DEVOPS",
    stance: "BEAST",
    subtitle: "INFRA & RELIABILITY",
    themeColor: "#eab308",
    glowColor: "rgba(234, 179, 8, 0.6)",
    icon: Terminal,
    styleIcon: "/images/styles/kiryu-beast.png",
  },
  {
    id: "DATA",
    label: "DATA",
    stance: "LEGEND",
    subtitle: "DATA & PERSISTENCE",
    themeColor: "#ffffff",
    glowColor: "rgba(255, 255, 255, 0.75)",
    icon: Database,
    styleIcon: "/images/styles/kiryu-legend.png",
  },
];

export const skillsData: SkillNode[] = [
  // ==========================================
  // West Web Rush Stance (Balanced Uniform 2-Pillar Fan)
  // ==========================================
  {
    id: "core-js",
    name: "JavaScript",
    essenceName: "ESSENCE OF DYNAMIC RUNTIME",
    description:
      "Modern ECMAScript standard driving responsive web interfaces, event loops, and asynchronous I/O.",
    icon: "/images/skills/javascript.svg",
    category: "WEB",
    ring: 1,
    angle: 300,
    radialOutward: ["core-node", "core-ts", "core-react"],
    arcNeighbors: ["core-php", "sec-csharp"],
    neighbors: {
      up: "sec-csharp",
      down: "core-php",
      left: "core-react",
      right: "core-js",
    },
  },
  {
    id: "core-php",
    name: "PHP",
    essenceName: "ESSENCE OF SERVER HYPERTEXT",
    description:
      "Server-side scripting engine powering enterprise backends, MVC web apps, and CMS platforms.",
    icon: "/images/skills/php.svg",
    category: "WEB",
    ring: 1,
    angle: 240,
    radialOutward: ["core-laravel"],
    arcNeighbors: ["data-postgres", "core-js"],
    neighbors: {
      up: "core-js",
      down: "data-postgres",
      left: "core-laravel",
      right: "core-php",
    },
  },
  {
    id: "core-laravel",
    name: "Laravel",
    essenceName: "ESSENCE OF ELOQUENT MVC",
    description:
      "Robust PHP framework featuring Eloquent ORM, expressive routing, queued jobs, and auth scaffolding.",
    icon: "/images/skills/laravel.svg",
    category: "WEB",
    ring: 2,
    angle: 235.8,
    radialInward: "core-php",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "core-node",
      down: "data-prisma",
      left: "core-websocket",
      right: "core-php",
    },
  },
  {
    id: "core-node",
    name: "Node.js",
    essenceName: "ESSENCE OF ASYNC IO",
    description:
      "Event-driven, non-blocking I/O runtime powering modern backend microservices, realtime feeds, and high-throughput APIs.",
    icon: "/images/skills/node.svg",
    category: "WEB",
    ring: 2,
    angle: 258.6,
    radialInward: "core-js",
    radialOutward: ["core-websocket", "core-express", "core-next"],
    arcNeighbors: ["core-ts"],
    neighbors: {
      up: "core-ts",
      down: "core-laravel",
      left: "core-express",
      right: "core-js",
    },
  },
  {
    id: "core-ts",
    name: "TypeScript",
    essenceName: "ESSENCE OF STRICT TYPING",
    description:
      "Strict compile-time type validation powering scalable enterprise codebases with zero runtime overhead.",
    icon: "/images/skills/typescript.svg",
    category: "WEB",
    ring: 2,
    angle: 281.4,
    radialInward: "core-js",
    radialOutward: ["core-next"],
    arcNeighbors: ["core-node", "core-react"],
    neighbors: {
      up: "core-react",
      down: "core-node",
      left: "core-next",
      right: "core-js",
    },
  },
  {
    id: "core-react",
    name: "React",
    essenceName: "ESSENCE OF VIRTUAL DOM",
    description:
      "Declarative component architecture with concurrent rendering, custom hooks, and reactive UI state.",
    icon: "/images/skills/react.svg",
    category: "WEB",
    ring: 2,
    angle: 304.2,
    radialInward: "core-js",
    radialOutward: ["core-next", "core-motion"],
    arcNeighbors: ["core-ts"],
    neighbors: {
      up: "sec-unity",
      down: "core-ts",
      left: "core-motion",
      right: "core-js",
    },
  },
  {
    id: "core-websocket",
    name: "WebSockets",
    essenceName: "ESSENCE OF REALTIME DUPLEX",
    description:
      "Persistent bidirectional TCP communication protocol powering instant state synchronization and live feeds in Node.js.",
    icon: "/images/skills/websocket.svg",
    category: "WEB",
    ring: 3,
    angle: 234,
    radialInward: "core-node",
    arcNeighbors: ["core-express"],
    neighbors: {
      up: "core-express",
      down: "data-supabase",
      left: "core-websocket",
      right: "core-node",
    },
  },
  {
    id: "core-express",
    name: "Express",
    essenceName: "ESSENCE OF MODULAR ROUTING",
    description:
      "Minimalist web framework for Node.js powering RESTful middleware pipelines and microservice routing.",
    icon: "/images/skills/express.svg",
    category: "WEB",
    ring: 3,
    angle: 252,
    radialInward: "core-node",
    arcNeighbors: ["core-websocket"],
    neighbors: {
      up: "core-next",
      down: "core-websocket",
      left: "core-express",
      right: "core-node",
    },
  },
  {
    id: "core-next",
    name: "Next.js",
    essenceName: "ESSENCE OF FULLSTACK MATRIX",
    description:
      "Full-stack React framework synthesizing React components, Node.js server runtime, and TypeScript into production apps.",
    icon: "/images/skills/next.svg",
    category: "WEB",
    ring: 3,
    angle: 270,
    radialInward: "core-ts",
    arcNeighbors: ["core-tailwind"],
    neighbors: {
      up: "core-tailwind",
      down: "core-express",
      left: "core-next",
      right: "core-ts",
    },
  },
  {
    id: "core-tailwind",
    name: "Tailwind CSS",
    essenceName: "ESSENCE OF UTILITY ENGINE",
    description:
      "Utility-first CSS design system generating atomic, responsive, and performance-optimized styles.",
    icon: "/images/skills/tailwind.svg",
    category: "WEB",
    ring: 3,
    angle: 288,
    radialInward: "core-next",
    radialOutward: [],
    arcNeighbors: ["core-next"],
    neighbors: {
      up: "core-react",
      down: "core-next",
      left: "core-tailwind",
      right: "core-next",
    },
  },
  {
    id: "core-motion",
    name: "Motion",
    essenceName: "ESSENCE OF KINETIC FLOW",
    description:
      "Physics-driven 60fps gesture animations and spring transitions for React and modern DOM trees.",
    icon: "/images/skills/motion.svg",
    category: "WEB",
    ring: 3,
    angle: 306,
    radialInward: "core-react",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "sec-godot",
      down: "core-react",
      left: "core-motion",
      right: "core-react",
    },
  },

  // ==========================================
  // North Mobile Brawler Stance
  // ==========================================
  {
    id: "sec-csharp",
    name: "C-Sharp",
    essenceName: "ESSENCE OF MANAGED RUNTIME",
    description:
      "Strongly-typed object-oriented language powering enterprise services and game loops.",
    icon: "/images/skills/csharp.svg",
    category: "MOBILE",
    ring: 1,
    angle: 330,
    radialOutward: ["sec-unity"],
    arcNeighbors: ["core-js", "sec-swift"],
    neighbors: {
      up: "sec-unity",
      down: "sec-csharp",
      left: "core-js",
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
    angle: 0,
    radialOutward: ["sec-swiftui"],
    arcNeighbors: ["sec-csharp", "sec-java"],
    neighbors: {
      up: "sec-swiftui",
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
    angle: 30,
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
    angle: 325.8,
    radialInward: "sec-csharp",
    radialOutward: ["sec-godot"],
    arcNeighbors: [],
    neighbors: {
      up: "sec-godot",
      down: "sec-csharp",
      left: "core-react",
      right: "sec-swiftui",
    },
  },
  {
    id: "sec-swiftui",
    name: "SwiftUI",
    essenceName: "ESSENCE OF DECLARATIVE APPLE UI",
    description:
      "Declarative UI toolkit with reactive state binding, fluid gesture handling, and native iOS/macOS layout.",
    icon: "/images/skills/swiftui.svg",
    category: "MOBILE",
    ring: 2,
    angle: 0,
    radialInward: "sec-swift",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "sec-swiftui",
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
    angle: 34.2,
    radialInward: "sec-java",
    radialOutward: ["sec-compose"],
    arcNeighbors: [],
    neighbors: {
      up: "sec-compose",
      down: "sec-java",
      left: "sec-swiftui",
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
    angle: 324,
    radialInward: "sec-unity",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "sec-godot",
      down: "sec-unity",
      left: "core-motion",
      right: "sec-compose",
    },
  },
  {
    id: "sec-compose",
    name: "Jetpack Compose",
    essenceName: "ESSENCE OF DECLARATIVE ANDROID UI",
    description:
      "Modern declarative UI toolkit simplifying native Android UI development with reactive composables.",
    icon: "/images/skills/jetpackcompose.svg",
    category: "MOBILE",
    ring: 3,
    angle: 36,
    radialInward: "sec-kotlin",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "sec-compose",
      down: "sec-kotlin",
      left: "sec-godot",
      right: "ops-artillery",
    },
  },

  // ==========================================
  // East DevOps Beast Stance (2-Pillar Fan)
  // ==========================================
  {
    id: "ops-linux",
    name: "Linux",
    essenceName: "ESSENCE OF KERNEL SUBSYSTEM",
    description:
      "Unix-like open-source operating system kernel managing hardware resources and process isolation.",
    icon: "/images/skills/linux.svg",
    category: "DEVOPS",
    ring: 1,
    angle: 60,
    radialOutward: ["ops-nginx", "ops-docker"],
    arcNeighbors: ["sec-java", "ops-git"],
    neighbors: {
      up: "sec-java",
      down: "ops-git",
      left: "ops-linux",
      right: "ops-nginx",
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
    angle: 120,
    radialOutward: ["ops-actions"],
    arcNeighbors: ["ops-linux", "data-sqlite"],
    neighbors: {
      up: "ops-linux",
      down: "data-sqlite",
      left: "ops-git",
      right: "ops-actions",
    },
  },
  {
    id: "ops-nginx",
    name: "Nginx",
    essenceName: "ESSENCE OF EDGE PROXY",
    description:
      "High-performance edge reverse proxy handling TLS termination, routing, and Prometheus telemetry metrics.",
    icon: "/images/skills/nginx.svg",
    category: "DEVOPS",
    ring: 2,
    angle: 55.8,
    radialInward: "ops-linux",
    radialOutward: [],
    arcNeighbors: ["ops-docker"],
    neighbors: {
      up: "sec-kotlin",
      down: "ops-docker",
      left: "ops-linux",
      right: "ops-nginx",
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
    angle: 90,
    radialInward: "ops-linux",
    radialOutward: [
      "ops-artillery",
      "ops-prometheus",
      "ops-grafana",
      "ops-redis",
    ],
    arcNeighbors: ["ops-nginx", "ops-actions"],
    neighbors: {
      up: "ops-nginx",
      down: "ops-actions",
      left: "ops-linux",
      right: "ops-grafana",
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
    angle: 124.2,
    radialInward: "ops-git",
    radialOutward: ["ops-vercel"],
    arcNeighbors: ["ops-docker"],
    neighbors: {
      up: "ops-docker",
      down: "data-mongodb",
      left: "ops-git",
      right: "ops-vercel",
    },
  },
  {
    id: "ops-artillery",
    name: "Artillery",
    essenceName: "ESSENCE OF LOAD STRESS",
    description:
      "Containerized cloud-scale performance stress-testing toolkit for benchmarking high-throughput API latency.",
    icon: "/images/skills/artillery.svg",
    category: "DEVOPS",
    ring: 3,
    angle: 54,
    radialInward: "ops-docker",
    radialOutward: [],
    arcNeighbors: ["ops-prometheus"],
    neighbors: {
      up: "sec-compose",
      down: "ops-prometheus",
      left: "ops-docker",
      right: "ops-artillery",
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
    angle: 72,
    radialInward: "ops-docker",
    radialOutward: [],
    arcNeighbors: ["ops-artillery", "ops-grafana"],
    neighbors: {
      up: "ops-artillery",
      down: "ops-grafana",
      left: "ops-docker",
      right: "ops-prometheus",
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
    angle: 90,
    radialInward: "ops-docker",
    radialOutward: [],
    arcNeighbors: ["ops-prometheus"],
    neighbors: {
      up: "ops-prometheus",
      down: "ops-redis",
      left: "ops-docker",
      right: "ops-grafana",
    },
  },
  {
    id: "ops-redis",
    name: "Redis",
    essenceName: "ESSENCE OF MEMORY CACHE",
    description:
      "In-memory key-value data structure store used for caching, queues, and pub/sub messaging.",
    icon: "/images/skills/redis.svg",
    category: "DEVOPS",
    ring: 3,
    angle: 108,
    radialInward: "ops-docker",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "ops-grafana",
      down: "ops-vercel",
      left: "ops-docker",
      right: "ops-redis",
    },
  },
  {
    id: "ops-vercel",
    name: "Vercel",
    essenceName: "ESSENCE OF EDGE SERVERLESS",
    description:
      "Automated edge deployment platform providing zero-configuration preview deployments and serverless functions.",
    icon: "/images/skills/vercel.svg",
    category: "DEVOPS",
    ring: 3,
    angle: 126,
    radialInward: "ops-actions",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "ops-redis",
      down: "data-firebase",
      left: "ops-actions",
      right: "ops-vercel",
    },
  },

  // ==========================================
  // South Data Legend Stance (Clean 3 2 3 Spokes)
  // ==========================================
  {
    id: "data-sqlite",
    name: "SQLite",
    essenceName: "ESSENCE OF EMBEDDED SQL",
    description:
      "Zero-configuration serverless storage engine embedded directly into applications and client processes.",
    icon: "/images/skills/sqlite.svg",
    category: "DATA",
    ring: 1,
    angle: 150,
    radialOutward: ["data-mongodb"],
    arcNeighbors: ["ops-git", "data-mysql"],
    neighbors: {
      up: "ops-git",
      down: "data-mongodb",
      left: "ops-git",
      right: "data-mysql",
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
    angle: 180,
    radialOutward: ["data-mariadb"],
    arcNeighbors: ["data-sqlite", "data-postgres"],
    neighbors: {
      up: "data-mysql",
      down: "data-mariadb",
      left: "data-sqlite",
      right: "data-postgres",
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
    angle: 210,
    radialOutward: ["data-prisma"],
    arcNeighbors: ["data-mysql", "core-php"],
    neighbors: {
      up: "data-postgres",
      down: "data-prisma",
      left: "data-mysql",
      right: "core-php",
    },
  },
  {
    id: "data-mongodb",
    name: "MongoDB",
    essenceName: "ESSENCE OF DOCUMENT STORE",
    description:
      "Scalable NoSQL document database with rich BSON querying, dynamic schemas, and aggregation pipelines.",
    icon: "/images/skills/mongodb.svg",
    category: "DATA",
    ring: 2,
    angle: 145.8,
    radialInward: "data-sqlite",
    radialOutward: ["data-firebase"],
    arcNeighbors: [],
    neighbors: {
      up: "data-sqlite",
      down: "data-firebase",
      left: "ops-actions",
      right: "data-mariadb",
    },
  },
  {
    id: "data-mariadb",
    name: "MariaDB",
    essenceName: "ESSENCE OF COMMUNITY SQL",
    description:
      "High-performance open-source relational database server with optimized storage engines and binary drop-in parity.",
    icon: "/images/skills/mariadb.svg",
    category: "DATA",
    ring: 2,
    angle: 180,
    radialInward: "data-mysql",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "data-mysql",
      down: "data-mariadb",
      left: "data-mongodb",
      right: "data-prisma",
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
    ring: 2,
    angle: 214.2,
    radialInward: "data-postgres",
    radialOutward: ["data-supabase"],
    arcNeighbors: [],
    neighbors: {
      up: "data-postgres",
      down: "data-supabase",
      left: "data-mariadb",
      right: "core-laravel",
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
    ring: 3,
    angle: 144,
    radialInward: "data-mongodb",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "data-mongodb",
      down: "data-firebase",
      left: "ops-vercel",
      right: "data-supabase",
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
    ring: 3,
    angle: 216,
    radialInward: "data-prisma",
    radialOutward: [],
    arcNeighbors: [],
    neighbors: {
      up: "data-prisma",
      down: "data-supabase",
      left: "data-firebase",
      right: "core-websocket",
    },
  },
];
