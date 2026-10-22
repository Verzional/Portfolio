"use client";

import { useEffect } from "react";
import { type SkillCategory, skillsData } from "@/data/skills";
import { WheelDefs } from "./wheel-defs";
import { WheelChassis } from "./wheel-chassis";
import { WheelConnectors } from "./wheel-connectors";
import { WheelCenterHub } from "./wheel-center-hub";
import { WheelNode } from "./wheel-node";

interface YakuzaSkillWheelProps {
  activeCategory: SkillCategory;
  activeNodeId: string;
  onSelectNode: (nodeId: string) => void;
  onSelectCategory: (category: SkillCategory, targetNodeId?: string) => void;
}

export function YakuzaSkillWheel({
  activeCategory,
  activeNodeId,
  onSelectNode,
  onSelectCategory,
}: YakuzaSkillWheelProps) {
  const activeNode =
    skillsData.find((n) => n.id === activeNodeId) || skillsData[0];
  const effectiveCategory =
    activeCategory === "ALL" ? activeNode.category : activeCategory;

  // Handle Keyboard WASD And Arrow Navigation
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

  return (
    <div className="relative flex aspect-square h-full w-full items-center justify-center select-none">
      <svg
        viewBox="-340 -340 680 680"
        className="h-full w-full overflow-visible drop-shadow-2xl"
      >
        <WheelDefs />
        <WheelChassis />
        <WheelConnectors activeCategory={activeCategory} />
        <WheelCenterHub
          activeCategory={activeCategory}
          effectiveCategory={effectiveCategory}
          onSelectAll={() => onSelectCategory("ALL")}
        />

        {/* Interactive Skill Nodes */}
        {skillsData.map((node) => (
          <WheelNode
            key={node.id}
            node={node}
            isSelected={activeNodeId === node.id}
            activeCategory={activeCategory}
            onSelectNode={onSelectNode}
            onSelectCategory={onSelectCategory}
          />
        ))}
      </svg>
    </div>
  );
}
