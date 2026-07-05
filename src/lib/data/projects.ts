import { Layers, Monitor, Smartphone, Gamepad2 } from "lucide-react";

export const projectCategories = [
  { id: "ALL", label: "ALL", icon: Layers },
  { id: "WEB", label: "WEB", icon: Monitor },
  { id: "MOBILE", label: "MOBILE", icon: Smartphone },
  { id: "GAMES", label: "GAMES", icon: Gamepad2 },
];

export const projectsData = [
  { id: "1", title: "C-Think Competition Platform", categories: ["WEB"], desc: "Template Description" },
  { id: "2", title: "13th NPLC Competitive Programming Platform", categories: ["WEB"], desc: "Template Description" },
  { id: "3", title: "IMT SU Official Website", categories: ["WEB"], desc: "Template Description" },
  { id: "4", title: "Vexel", categories: ["WEB"], desc: "Template Description" },
  { id: "5", title: "Astrocat", categories: ["MOBILE", "GAMES"], desc: "Template Description" },
  { id: "6", title: "Singaplan", categories: ["MOBILE"], desc: "Template Description" },
];
