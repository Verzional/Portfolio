import { skillCategories, skillsData } from "@/data/skills";

// Normalize Floating Point Precision
export const round2 = (num: number): number => Math.round(num * 100) / 100;

// Convert Polar Coordinates To Cartesian Space
export function getCoordinates(ring: number, angleDeg: number) {
  const radii: Record<number, number> = {
    1: 116,
    2: 190,
    3: 265,
  };
  const r = radii[ring] || 190;
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: round2(r * Math.sin(rad)),
    y: round2(-r * Math.cos(rad)),
    r,
  };
}

// Resolve Category Theme Accent Color
export const getCategoryColor = (cat: string): string => {
  const found = skillCategories.find((c) => c.id === cat);
  return found?.themeColor || "#2563eb";
};

// Resolve Inter Discipline Bridge Gradient
export const getBridgeGradient = (cat1: string, cat2: string): string => {
  const pair = [cat1, cat2].sort().join("-");
  if (pair === "MOBILE-WEB") return "url(#bridge-web-mobile)";
  if (pair === "DEVOPS-MOBILE") return "url(#bridge-mobile-devops)";
  if (pair === "DATA-DEVOPS") return "url(#bridge-devops-data)";
  if (pair === "DATA-WEB") return "url(#bridge-data-web)";
  return "rgba(255, 255, 255, 0.7)";
};

// Precompute Coordinates For Foundational Inter Discipline Bridges
export const bridgeCoordinates = {
  webMobile1: getCoordinates(
    1,
    skillsData.find((n) => n.id === "core-js")?.angle ?? 300,
  ),
  webMobile2: getCoordinates(
    1,
    skillsData.find((n) => n.id === "sec-csharp")?.angle ?? 330,
  ),
  mobileDevops1: getCoordinates(
    1,
    skillsData.find((n) => n.id === "sec-java")?.angle ?? 30,
  ),
  mobileDevops2: getCoordinates(
    1,
    skillsData.find((n) => n.id === "ops-linux")?.angle ?? 60,
  ),
  devopsData1: getCoordinates(
    1,
    skillsData.find((n) => n.id === "ops-git")?.angle ?? 120,
  ),
  devopsData2: getCoordinates(
    1,
    skillsData.find((n) => n.id === "data-sqlite")?.angle ?? 150,
  ),
  dataWeb1: getCoordinates(
    1,
    skillsData.find((n) => n.id === "data-postgres")?.angle ?? 210,
  ),
  dataWeb2: getCoordinates(
    1,
    skillsData.find((n) => n.id === "core-php")?.angle ?? 240,
  ),
};
