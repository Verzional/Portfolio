import { type SkillCategory, skillsData } from "@/data/skills";
import {
  getCoordinates,
  getCategoryColor,
  getBridgeGradient,
} from "./wheel-utils";

interface WheelConnectorsProps {
  activeCategory: SkillCategory;
}

export function WheelConnectors({ activeCategory }: WheelConnectorsProps) {
  return (
    <g>
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
          if (node.category !== neighbor.category && node.ring !== 1) {
            return null;
          }

          const pos2 = getCoordinates(neighbor.ring, neighbor.angle);

          const isCrossCategoryRing1 =
            node.ring === 1 && node.category !== neighbor.category;

          // Restrict Connectors In Category View To Active Stance
          if (activeCategory !== "ALL") {
            if (isCrossCategoryRing1) return null;
            if (
              node.category !== activeCategory ||
              neighbor.category !== activeCategory
            ) {
              return null;
            }
          }

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

          // Restrict Radial Connectors In Category View To Active Stance
          if (activeCategory !== "ALL") {
            if (
              node.category !== activeCategory ||
              child.category !== activeCategory
            ) {
              return null;
            }
          }

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
    </g>
  );
}
