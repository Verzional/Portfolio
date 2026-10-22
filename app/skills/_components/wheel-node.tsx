import { type SkillNode, type SkillCategory } from "@/data/skills";
import { getCoordinates, getCategoryColor, round2 } from "./wheel-utils";

interface WheelNodeProps {
  node: SkillNode;
  isSelected: boolean;
  activeCategory: SkillCategory;
  onSelectNode: (nodeId: string) => void;
  onSelectCategory: (category: SkillCategory, targetNodeId?: string) => void;
}

export function WheelNode({
  node,
  isSelected,
  activeCategory,
  onSelectNode,
  onSelectCategory,
}: WheelNodeProps) {
  const { x, y } = getCoordinates(node.ring, node.angle);
  const isInActiveCategory =
    activeCategory === "ALL" || node.category === activeCategory;
  const categoryColor = getCategoryColor(node.category);

  const radius = node.ring === 1 ? 19 : node.ring === 2 ? 18 : 16;
  const reticleRadius = radius + 6;
  const quarterCircumference = (2 * Math.PI * reticleRadius) / 4;
  const dashLength = round2(quarterCircumference * 0.78);
  const gapLength = round2(quarterCircumference * 0.22);

  const handleClick = () => {
    onSelectNode(node.id);
    if (activeCategory !== "ALL" && node.category !== activeCategory) {
      onSelectCategory(node.category, node.id);
    }
  };

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className="cursor-pointer transition-all duration-300 select-none"
      onClick={handleClick}
    >
      {/* Expand Interactive Touch Hit Target Area */}
      <circle cx="0" cy="0" r="28" fill="transparent" />

      {/* Active Yakuza Selection 4-Part Spinning Reticle */}
      {isSelected && (
        <circle
          cx="0"
          cy="0"
          r={reticleRadius}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeDasharray={`${dashLength} ${gapLength}`}
          strokeLinecap="round"
          filter="url(#selected-glow)"
          className="pointer-events-none animate-[spin_8s_linear_infinite]"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      )}

      {/* Node Background Disc */}
      <circle
        cx="0"
        cy="0"
        r={radius}
        fill={isSelected ? "#1e2433" : "#0d1117"}
        stroke={
          isInActiveCategory ? categoryColor : "rgba(255, 255, 255, 0.15)"
        }
        strokeWidth={isInActiveCategory ? 2 : 1}
        filter={isInActiveCategory ? "url(#neon-glow)" : undefined}
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
    </g>
  );
}
