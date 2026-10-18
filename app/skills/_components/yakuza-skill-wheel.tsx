"use client";

import { useEffect } from "react";
import {
  type SkillCategory,
  skillCategories,
  skillsData,
} from "@/data/skills";

interface YakuzaSkillWheelProps {
  activeCategory: SkillCategory;
  activeNodeId: string;
  onSelectNode: (nodeId: string) => void;
  onSelectCategory: (category: SkillCategory) => void;
}

// Polar to Cartesian Math (theta in degrees clockwise from 12:00 North)
function getCoordinates(ring: number, angleDeg: number) {
  const radii: Record<number, number> = {
    1: 116,
    2: 190,
    3: 265,
  };
  const r = radii[ring] || 190;
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: r * Math.sin(rad),
    y: -r * Math.cos(rad),
    r,
  };
}

export function YakuzaSkillWheel({
  activeCategory,
  activeNodeId,
  onSelectNode,
  onSelectCategory,
}: YakuzaSkillWheelProps) {
  const activeCategoryMeta = skillCategories.find((c) => c.id === activeCategory);
  const activeNode = skillsData.find((n) => n.id === activeNodeId) || skillsData[0];
  const effectiveCategory =
    activeCategory === "ALL" ? activeNode.category : activeCategory;
  const effectiveCategoryMeta =
    skillCategories.find((c) => c.id === effectiveCategory) || activeCategoryMeta;

  // Authentic Center Medallion Icon & Theme (Kiwami seal for ALL, Stances for Disciplines)
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
  // Keyboard WASD & Arrow Key Navigation
  // ==========================================
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore inputs in text fields
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

  // Color lookup helper
  const getCategoryColor = (cat: string) => {
    const found = skillCategories.find((c) => c.id === cat);
    return found?.themeColor || "#2563eb";
  };

  // Generate outer rim ticks
  const rimTicks = Array.from({ length: 48 }).map((_, i) => {
    const angle = (i * 360) / 48;
    const rad = (angle * Math.PI) / 180;
    const rInner = i % 4 === 0 ? 298 : 304;
    const rOuter = 312;
    return {
      x1: rInner * Math.sin(rad),
      y1: -rInner * Math.cos(rad),
      x2: rOuter * Math.sin(rad),
      y2: -rOuter * Math.cos(rad),
      isMajor: i % 4 === 0,
    };
  });

  return (
    <div className="relative flex h-full w-full items-center justify-center select-none aspect-square">
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
          <filter id="selected-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur2" />
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
        </defs>

        {/* ========================================== */}
        {/* BACKGROUND ENGRAVED PLATE                   */}
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
            stroke={tick.isMajor ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.15)"}
            strokeWidth={tick.isMajor ? 2 : 1}
          />
        ))}

        {/* Quadrant Divider Rays (45°, 135°, 225°, 315°) */}
        {[45, 135, 225, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={angle}
              x1={60 * Math.sin(rad)}
              y1={-60 * Math.cos(rad)}
              x2={300 * Math.sin(rad)}
              y2={-300 * Math.cos(rad)}
              stroke="rgba(255, 255, 255, 0.05)"
              strokeDasharray="6 4"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Concentric Guide Ring Tracks */}
        {[116, 190, 265].map((r) => (
          <circle
            key={r}
            cx="0"
            cy="0"
            r={r}
            fill="none"
            stroke="rgba(255, 255, 255, 0.07)"
            strokeDasharray="3 3"
            strokeWidth="1.5"
          />
        ))}

        {/* ========================================== */}
        {/* CONCENTRIC CIRCULAR ARC CONNECTORS         */}
        {/* ========================================== */}
        {skillsData.map((node) => {
          if (!node.arcNeighbors) return null;
          const pos1 = getCoordinates(node.ring, node.angle);

          return node.arcNeighbors.map((neighborId) => {
            // Deduplicate arcs by ID sort
            if (node.id > neighborId) return null;
            const neighbor = skillsData.find((n) => n.id === neighborId);
            if (!neighbor) return null;
            const pos2 = getCoordinates(neighbor.ring, neighbor.angle);

            const isCurrentActive =
              activeCategory === "ALL" ||
              (node.category === activeCategory && neighbor.category === activeCategory);

            const strokeColor = isCurrentActive
              ? getCategoryColor(node.category)
              : "rgba(255, 255, 255, 0.06)";

            // Draw circular arc path
            // SVG Arc: A rx ry x-axis-rotation large-arc-flag sweep-flag x y
            // Determine sweep flag: if angle2 > angle1 (taking modulo wrap into account)
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
                strokeWidth={isCurrentActive ? 2 : 1}
                strokeOpacity={isCurrentActive ? 0.8 : 0.4}
                filter={isCurrentActive ? "url(#neon-glow)" : undefined}
                className="transition-all duration-300"
              />
            );
          });
        })}

        {/* ========================================== */}
        {/* RADIAL SPOKE CONNECTORS (INWARD / OUTWARD) */}
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
              (node.category === activeCategory && child.category === activeCategory);

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
        {/* CENTER EMBLEM / CREST                      */}
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

          {/* Authentic Yakuza 0 / Kiwami Core Style Icon */}
          <g clipPath="url(#center-hub-clip)">
            <image
              href={currentStyleIcon}
              x="-38"
              y="-38"
              width="76"
              height="76"
              className="pointer-events-none select-none transition-all duration-300"
              style={{
                filter: `drop-shadow(0 0 10px ${currentGlowColor})`,
              }}
            />
          </g>
        </g>

        {/* ========================================== */}
        {/* SKILL NODES                                */}
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
                if (activeCategory !== "ALL" && node.category !== activeCategory) {
                  onSelectCategory(node.category);
                }
              }}
            >
              {/* Invisible Large Hit Box for Mobile (48px) */}
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
                filter={isInActiveCategory && !isSelected ? "url(#neon-glow)" : undefined}
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
