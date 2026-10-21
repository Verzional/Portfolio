"use client";

import { useEffect } from "react";
import { type SkillCategory, skillCategories, skillsData } from "@/data/skills";

interface YakuzaSkillWheelProps {
  activeCategory: SkillCategory;
  activeNodeId: string;
  onSelectNode: (nodeId: string) => void;
  onSelectCategory: (category: SkillCategory) => void;
}

// Normalize Floating Point Precision
const round2 = (num: number): number => Math.round(num * 100) / 100;

// Convert Polar Coordinates To Cartesian Space
function getCoordinates(ring: number, angleDeg: number) {
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

export function YakuzaSkillWheel({
  activeCategory,
  activeNodeId,
  onSelectNode,
  onSelectCategory,
}: YakuzaSkillWheelProps) {
  const activeCategoryMeta = skillCategories.find(
    (c) => c.id === activeCategory,
  );
  const activeNode =
    skillsData.find((n) => n.id === activeNodeId) || skillsData[0];
  const effectiveCategory =
    activeCategory === "ALL" ? activeNode.category : activeCategory;
  const effectiveCategoryMeta =
    skillCategories.find((c) => c.id === effectiveCategory) ||
    activeCategoryMeta;

  // Resolve Center Crest Asset And Theme Styling
  const isAllCategory = activeCategory === "ALL";
  const currentStyleIcon = isAllCategory
    ? "/images/styles/all-kiwami.png"
    : effectiveCategoryMeta?.styleIcon || "/images/styles/all-kiwami.png";
  const currentThemeColor = isAllCategory
    ? "#ff2a2a"
    : effectiveCategoryMeta?.themeColor || "#f8fafc";
  const currentGlowColor = isAllCategory
    ? "rgba(255, 42, 42, 0.7)"
    : effectiveCategoryMeta?.glowColor || "rgba(255, 255, 255, 0.4)";

  // ==========================================
  // Keyboard WASD And Arrow Navigation
  // ==========================================
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore Keystrokes In Form Input Elements
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      let nextId: string | undefined;

      if (key === "w" || key === "arrowup") {
        nextId = activeNode.neighbors.up;
      } else if (key === "s" || key === "arrowdown") {
        nextId = activeNode.neighbors.down;
      } else if (key === "a" || key === "arrowleft") {
        nextId = activeNode.neighbors.left;
      } else if (key === "d" || key === "arrowright") {
        nextId = activeNode.neighbors.right;
      }

      if (nextId) {
        e.preventDefault();
        onSelectNode(nextId);
        const nextNode = skillsData.find((n) => n.id === nextId);
        if (
          nextNode &&
          activeCategory !== "ALL" &&
          nextNode.category !== activeCategory
        ) {
          onSelectCategory(nextNode.category);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeNode, activeCategory, onSelectNode, onSelectCategory]);

  // Resolve Category Theme Accent Color
  const getCategoryColor = (cat: string) => {
    const found = skillCategories.find((c) => c.id === cat);
    return found?.themeColor || "#2563eb";
  };

  // Resolve Inter Discipline Bridge Gradient
  const getBridgeGradient = (cat1: string, cat2: string) => {
    const pair = [cat1, cat2].sort().join("-");
    if (pair === "MOBILE-WEB") return "url(#bridge-web-mobile)";
    if (pair === "DEVOPS-MOBILE") return "url(#bridge-mobile-devops)";
    if (pair === "DATA-DEVOPS") return "url(#bridge-devops-data)";
    if (pair === "DATA-WEB") return "url(#bridge-data-web)";
    return "rgba(255, 255, 255, 0.7)";
  };

  // Generate Outer Rim Gauge Markings
  const rimTicks = Array.from({ length: 48 }).map((_, i) => {
    const angle = (i * 360) / 48;
    const rad = (angle * Math.PI) / 180;
    const rInner = i % 4 === 0 ? 298 : 304;
    const rOuter = 312;
    return {
      x1: round2(rInner * Math.sin(rad)),
      y1: round2(-rInner * Math.cos(rad)),
      x2: round2(rOuter * Math.sin(rad)),
      y2: round2(-rOuter * Math.cos(rad)),
      isMajor: i % 4 === 0,
    };
  });

  // Precompute Dynamic Coordinates For Inter Discipline Bridges (userSpaceOnUse)
  const bridgeWebMobilePos1 = getCoordinates(
    1,
    skillsData.find((n) => n.id === "core-js")?.angle ?? 300,
  );
  const bridgeWebMobilePos2 = getCoordinates(
    1,
    skillsData.find((n) => n.id === "sec-csharp")?.angle ?? 330,
  );

  const bridgeMobileDevopsPos1 = getCoordinates(
    1,
    skillsData.find((n) => n.id === "sec-java")?.angle ?? 30,
  );
  const bridgeMobileDevopsPos2 = getCoordinates(
    1,
    skillsData.find((n) => n.id === "ops-linux")?.angle ?? 60,
  );

  const bridgeDevopsDataPos1 = getCoordinates(
    1,
    skillsData.find((n) => n.id === "ops-git")?.angle ?? 120,
  );
  const bridgeDevopsDataPos2 = getCoordinates(
    1,
    skillsData.find((n) => n.id === "data-sqlite")?.angle ?? 150,
  );

  const bridgeDataWebPos1 = getCoordinates(
    1,
    skillsData.find((n) => n.id === "data-postgres")?.angle ?? 210,
  );
  const bridgeDataWebPos2 = getCoordinates(
    1,
    skillsData.find((n) => n.id === "core-php")?.angle ?? 240,
  );

  return (
    <div className="relative flex aspect-square h-full w-full items-center justify-center select-none">
      <svg
        viewBox="-340 -340 680 680"
        className="h-full w-full overflow-visible drop-shadow-2xl"
      >
        <defs>
          {/* Subtle Metallic Background Radial Gradient */}
          <radialGradient id="wheel-plate-gradient" cx="0" cy="0" r="100%">
            <stop offset="0%" stopColor="#121620" />
            <stop offset="65%" stopColor="#0b0e14" />
            <stop offset="100%" stopColor="#06080b" />
          </radialGradient>

          {/* Golden Center Hub Enamel Gradient */}
          <radialGradient id="center-hub-gradient" cx="0" cy="0" r="100%">
            <stop offset="0%" stopColor="#222b3d" />
            <stop offset="60%" stopColor="#141926" />
            <stop offset="100%" stopColor="#0a0d14" />
          </radialGradient>

          {/* Active Node Pulse Glow */}
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Active Selected Glow */}
          <filter
            id="selected-glow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="8"
              result="blur1"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="3"
              result="blur2"
            />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Center Hub Inner Clip */}
          <clipPath id="center-hub-clip">
            <circle cx="0" cy="0" r="43.5" />
          </clipPath>

          {/* Render Inter Discipline Bridge Gradients (userSpaceOnUse) */}
          <linearGradient
            id="bridge-web-mobile"
            gradientUnits="userSpaceOnUse"
            x1={bridgeWebMobilePos1.x}
            y1={bridgeWebMobilePos1.y}
            x2={bridgeWebMobilePos2.x}
            y2={bridgeWebMobilePos2.y}
          >
            <stop offset="0%" stopColor="#f43f8e" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient
            id="bridge-mobile-devops"
            gradientUnits="userSpaceOnUse"
            x1={bridgeMobileDevopsPos1.x}
            y1={bridgeMobileDevopsPos1.y}
            x2={bridgeMobileDevopsPos2.x}
            y2={bridgeMobileDevopsPos2.y}
          >
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <linearGradient
            id="bridge-devops-data"
            gradientUnits="userSpaceOnUse"
            x1={bridgeDevopsDataPos1.x}
            y1={bridgeDevopsDataPos1.y}
            x2={bridgeDevopsDataPos2.x}
            y2={bridgeDevopsDataPos2.y}
          >
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient
            id="bridge-data-web"
            gradientUnits="userSpaceOnUse"
            x1={bridgeDataWebPos1.x}
            y1={bridgeDataWebPos1.y}
            x2={bridgeDataWebPos2.x}
            y2={bridgeDataWebPos2.y}
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f43f8e" />
          </linearGradient>
        </defs>

        {/* ========================================== */}
        {/* Background Engraved Plate                  */}
        {/* ========================================== */}
        {/* Outer Circular Disc */}
        <circle
          cx="0"
          cy="0"
          r="320"
          fill="url(#wheel-plate-gradient)"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="3"
        />

        {/* Brushed Metal Concentric Grooves */}
        <circle
          cx="0"
          cy="0"
          r="145"
          fill="none"
          stroke="rgba(255, 255, 255, 0.03)"
          strokeWidth="1"
        />
        <circle
          cx="0"
          cy="0"
          r="225"
          fill="none"
          stroke="rgba(255, 255, 255, 0.03)"
          strokeWidth="1"
        />
        <circle
          cx="0"
          cy="0"
          r="290"
          fill="none"
          stroke="rgba(255, 255, 255, 0.04)"
          strokeWidth="1"
        />

        {/* Outer Notched Rim Gear Ticks */}
        <circle
          cx="0"
          cy="0"
          r="312"
          fill="none"
          stroke="rgba(255, 255, 255, 0.18)"
          strokeWidth="1.5"
        />
        {rimTicks.map((tick, i) => (
          <line
            key={i}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke={
              tick.isMajor
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(255, 255, 255, 0.15)"
            }
            strokeWidth={tick.isMajor ? 2 : 1}
          />
        ))}

        {/* ========================================== */}
        {/* Continuous Concentric Chassis Rails        */}
        {/* ========================================== */}
        {[116, 190, 265].map((r) => (
          <g key={r}>
            {/* Primary Machined Track Rail */}
            <circle
              cx="0"
              cy="0"
              r={r}
              fill="none"
              stroke="rgba(255, 255, 255, 0.16)"
              strokeWidth="1.5"
            />
            {/* Subtle Companion Track Groove */}
            <circle
              cx="0"
              cy="0"
              r={r - 3}
              fill="none"
              stroke="rgba(255, 255, 255, 0.04)"
              strokeWidth="0.75"
            />
          </g>
        ))}

        {/* ========================================== */}
        {/* Concentric Circular Arc Connectors         */}
        {/* ========================================== */}
        {skillsData.map((node) => {
          if (!node.arcNeighbors) return null;
          const pos1 = getCoordinates(node.ring, node.angle);

          return node.arcNeighbors.map((neighborId) => {
            // Deduplicate Bidirectional Arc Segments
            if (node.id > neighborId) return null;
            const neighbor = skillsData.find((n) => n.id === neighborId);
            if (!neighbor) return null;

            // Restrict Cross Discipline Bridges To Foundational Ring
            if (node.category !== neighbor.category && node.ring !== 1)
              return null;

            const pos2 = getCoordinates(neighbor.ring, neighbor.angle);

            const isCrossCategoryRing1 =
              node.ring === 1 && node.category !== neighbor.category;

            const isCurrentActive =
              activeCategory === "ALL" ||
              (node.category === activeCategory &&
                neighbor.category === activeCategory) ||
              (isCrossCategoryRing1 &&
                (node.category === activeCategory ||
                  neighbor.category === activeCategory));

            const strokeColor = isCrossCategoryRing1
              ? isCurrentActive
                ? getBridgeGradient(node.category, neighbor.category)
                : "rgba(255, 255, 255, 0.08)"
              : isCurrentActive
                ? getCategoryColor(node.category)
                : "rgba(255, 255, 255, 0.06)";

            // Calculate Sweep Direction Across Angle Boundary
            let diff = neighbor.angle - node.angle;
            if (diff < -180) diff += 360;
            if (diff > 180) diff -= 360;
            const sweepFlag = diff > 0 ? 1 : 0;

            return (
              <path
                key={`arc-${node.id}-${neighbor.id}`}
                d={`M ${pos1.x} ${pos1.y} A ${pos1.r} ${pos1.r} 0 0 ${sweepFlag} ${pos2.x} ${pos2.y}`}
                fill="none"
                stroke={strokeColor}
                strokeWidth={isCurrentActive ? 2.5 : 1}
                strokeOpacity={isCurrentActive ? 0.9 : 0.25}
                filter={isCurrentActive ? "url(#neon-glow)" : undefined}
                className="transition-all duration-300"
              />
            );
          });
        })}

        {/* ========================================== */}
        {/* Radial Spoke Connectors                    */}
        {/* ========================================== */}
        {skillsData.map((node) => {
          if (!node.radialOutward) return null;
          const pos1 = getCoordinates(node.ring, node.angle);

          return node.radialOutward.map((childId) => {
            const child = skillsData.find((n) => n.id === childId);
            if (!child) return null;
            const pos2 = getCoordinates(child.ring, child.angle);

            const isCurrentActive =
              activeCategory === "ALL" ||
              (node.category === activeCategory &&
                child.category === activeCategory);

            const strokeColor = isCurrentActive
              ? getCategoryColor(node.category)
              : "rgba(255, 255, 255, 0.06)";

            return (
              <line
                key={`radial-${node.id}-${child.id}`}
                x1={pos1.x}
                y1={pos1.y}
                x2={pos2.x}
                y2={pos2.y}
                stroke={strokeColor}
                strokeWidth={isCurrentActive ? 2.5 : 1}
                strokeOpacity={isCurrentActive ? 0.85 : 0.4}
                filter={isCurrentActive ? "url(#neon-glow)" : undefined}
                className="transition-all duration-300"
              />
            );
          });
        })}

        {/* ========================================== */}
        {/* Center Emblem Crest                        */}
        {/* ========================================== */}
        <g
          className="cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={() => onSelectCategory("ALL")}
        >
          {/* Outer Beveled Stance Rim */}
          <circle
            cx="0"
            cy="0"
            r="55"
            fill="none"
            stroke={currentThemeColor}
            strokeWidth="3"
            className="transition-colors duration-300"
            style={{
              filter: `drop-shadow(0 0 6px ${currentGlowColor})`,
            }}
          />

          {/* Rotating Notched Gear Ring */}
          <circle
            cx="0"
            cy="0"
            r="49"
            fill="none"
            stroke={currentThemeColor}
            strokeWidth="1.5"
            strokeDasharray="6 3"
            className="animate-[spin_40s_linear_infinite] transition-colors duration-300"
          />

          {/* Deep Inset Dark Enamel Plate */}
          <circle
            cx="0"
            cy="0"
            r="44"
            fill="url(#center-hub-gradient)"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
          />

          {/* Render Stance Style Seal Asset */}
          <g clipPath="url(#center-hub-clip)">
            <image
              href={currentStyleIcon}
              x="-38"
              y="-38"
              width="76"
              height="76"
              className="pointer-events-none transition-all duration-300 select-none"
              style={{
                filter: `drop-shadow(0 0 10px ${currentGlowColor})`,
              }}
            />
          </g>
        </g>

        {/* ========================================== */}
        {/* Interactive Skill Nodes                    */}
        {/* ========================================== */}
        {skillsData.map((node) => {
          const { x, y } = getCoordinates(node.ring, node.angle);
          const isSelected = activeNodeId === node.id;
          const isInActiveCategory =
            activeCategory === "ALL" || node.category === activeCategory;
          const categoryColor = getCategoryColor(node.category);
          const radius = node.ring === 1 ? 19 : node.ring === 2 ? 18 : 16;

          return (
            <g
              key={node.id}
              transform={`translate(${x}, ${y})`}
              className="cursor-pointer transition-all duration-300 select-none"
              onClick={() => {
                onSelectNode(node.id);
                if (
                  activeCategory !== "ALL" &&
                  node.category !== activeCategory
                ) {
                  onSelectCategory(node.category);
                }
              }}
            >
              {/* Expand Interactive Touch Hit Target Area */}
              <circle cx="0" cy="0" r="28" fill="transparent" />

              {/* Active Selection Glow Ring */}
              {isSelected && (
                <circle
                  cx="0"
                  cy="0"
                  r={radius + 5}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  filter="url(#selected-glow)"
                />
              )}

              {/* Node Background Disc */}
              <circle
                cx="0"
                cy="0"
                r={radius}
                fill={isSelected ? "#1e2433" : "#0d1117"}
                stroke={
                  isSelected
                    ? "#ffffff"
                    : isInActiveCategory
                      ? categoryColor
                      : "rgba(255, 255, 255, 0.15)"
                }
                strokeWidth={isSelected ? 2.5 : isInActiveCategory ? 2 : 1}
                filter={
                  isInActiveCategory && !isSelected
                    ? "url(#neon-glow)"
                    : undefined
                }
                opacity={isInActiveCategory ? 1 : 0.22}
                className="transition-all duration-300"
              />

              {/* Node Inner Bevel Ring */}
              <circle
                cx="0"
                cy="0"
                r={radius - 2.5}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
              />

              {/* Tech SVG Icon */}
              <g
                opacity={isInActiveCategory ? 1 : 0.25}
                className="transition-opacity duration-300"
              >
                <image
                  href={node.icon}
                  x={-(radius * 0.58)}
                  y={-(radius * 0.58)}
                  width={radius * 1.16}
                  height={radius * 1.16}
                  className="pointer-events-none"
                  style={{
                    filter: isInActiveCategory
                      ? "none"
                      : "grayscale(100%) brightness(0.6)",
                  }}
                />
              </g>

              {/* Selected Node Cardinal Indicator Pip */}
              {isSelected && (
                <circle
                  cx="0"
                  cy={-(radius + 7)}
                  r="2.5"
                  fill="#ffffff"
                  filter="url(#neon-glow)"
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
