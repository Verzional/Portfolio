"use client";

import { useEffect, useMemo } from "react";
import { SkillStyle } from "@/data/skills";
import { SekiroSkillNode } from "./sekiro-skill-node";

interface SekiroSkillTreeProps {
  activeStyle: SkillStyle;
  activeNodeId: string | null;
  onActiveNodeChange: (id: string | null) => void;
}

export function SekiroSkillTree({
  activeStyle,
  activeNodeId,
  onActiveNodeChange,
}: SekiroSkillTreeProps) {
  // Wrap Nodes in useMemo to Prevent Unnecessary Renders
  const nodes = useMemo(() => activeStyle.skills || [], [activeStyle.skills]);

  // Derive Active Node
  const isNodeValid = nodes.some((n) => n.id === activeNodeId);
  const effectiveActiveNodeId = isNodeValid
    ? activeNodeId
    : nodes[0]?.id || null;

  // Sync Active Node State
  useEffect(() => {
    if (activeNodeId !== effectiveActiveNodeId) {
      onActiveNodeChange(effectiveActiveNodeId);
    }
  }, [effectiveActiveNodeId, activeNodeId, onActiveNodeChange]);

  // Handle WASD Graph Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const isNavKey = [
        "w",
        "a",
        "s",
        "d",
        "arrowup",
        "arrowdown",
        "arrowleft",
        "arrowright",
      ].includes(key);

      if (!isNavKey) return;

      e.preventDefault();

      const startId = effectiveActiveNodeId;
      const activeNode = nodes.find((n) => n.id === startId);
      if (!activeNode) return;

      let nextNodeId = startId;

      if (key === "w" || key === "arrowup") {
        nextNodeId = activeNode.neighbors.up || startId;
      } else if (key === "s" || key === "arrowdown") {
        nextNodeId = activeNode.neighbors.down || startId;
      } else if (key === "a" || key === "arrowleft") {
        nextNodeId = activeNode.neighbors.left || startId;
      } else if (key === "d" || key === "arrowright") {
        nextNodeId = activeNode.neighbors.right || startId;
      }

      if (nextNodeId && nextNodeId !== activeNodeId) {
        onActiveNodeChange(nextNodeId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nodes, effectiveActiveNodeId, activeNodeId, onActiveNodeChange]);

  // Render Empty State
  if (nodes.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center text-muted">
        No nodes found.
      </div>
    );
  }

  // Calculate Grid Boundaries
  const maxX = Math.max(...nodes.map((n) => n.position.x));
  const maxY = Math.max(...nodes.map((n) => n.position.y));

  // Convert Grid Coordinates to Percentages
  const getX = (x: number) => `${((x + 1) / (maxX + 2)) * 100}%`;
  const getY = (y: number) => `${((y + 1) / (maxY + 2)) * 100}%`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-transparent">
      {/* SVG Lines Layer */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full">
        {nodes.flatMap((node) => {
          const lines = [];

          if (node.neighbors.right) {
            const target = nodes.find((n) => n.id === node.neighbors.right);
            if (target) {
              lines.push(
                <line
                  key={`${node.id}-right`}
                  x1={getX(node.position.x)}
                  y1={getY(node.position.y)}
                  x2={getX(target.position.x)}
                  y2={getY(target.position.y)}
                  stroke="#C5B39A"
                  strokeWidth={3}
                  strokeOpacity={0.6}
                  strokeLinecap="round"
                />,
              );
            }
          }

          if (node.neighbors.down) {
            const target = nodes.find((n) => n.id === node.neighbors.down);
            if (target) {
              lines.push(
                <line
                  key={`${node.id}-down`}
                  x1={getX(node.position.x)}
                  y1={getY(node.position.y)}
                  x2={getX(target.position.x)}
                  y2={getY(target.position.y)}
                  stroke="#C5B39A"
                  strokeWidth={3}
                  strokeOpacity={0.6}
                  strokeLinecap="round"
                />,
              );
            }
          }

          return lines;
        })}
      </svg>

      {/* Nodes Layer */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute"
          style={{
            left: getX(node.position.x),
            top: getY(node.position.y),
            transform: "translate(-50%, -50%)",
            zIndex: effectiveActiveNodeId === node.id ? 10 : 1,
          }}
        >
          <SekiroSkillNode
            node={node}
            isActive={effectiveActiveNodeId === node.id}
            onClick={() => onActiveNodeChange(node.id)}
            onHover={() => onActiveNodeChange(node.id)}
          />
        </div>
      ))}
    </div>
  );
}
