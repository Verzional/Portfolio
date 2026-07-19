"use client";

import React from "react";
import { SkillStyle } from "@/data/skills";
import { SekiroSkillNode } from "./sekiro-skill-node";

interface SekiroSkillTreeProps {
  activeStyle: SkillStyle;
}

export function SekiroSkillTree({ activeStyle }: SekiroSkillTreeProps) {
  const nodes = activeStyle.skills || [];

  if (nodes.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center text-muted">
        No nodes found.
      </div>
    );
  }

  // Calculate grid bounds to determine scaling
  const maxX = Math.max(...nodes.map((n) => n.position.x));
  const maxY = Math.max(...nodes.map((n) => n.position.y));

  // Determine relative position percentages based on grid coordinates
  // Adding padding (+2) so nodes at the edges aren't pushed completely off-screen
  const getX = (x: number) => `${((x + 1) / (maxX + 2)) * 100}%`;
  const getY = (y: number) => `${((y + 1) / (maxY + 2)) * 100}%`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-transparent">
      {/* SVG Lines Layer */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full">
        {nodes.flatMap((node) => {
          const lines = [];

          // Draw lines for 'right' and 'down' to prevent duplicate bi-directional lines
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
                />
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
                />
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
          }}
        >
          <SekiroSkillNode node={node} isActive={false} />
        </div>
      ))}
    </div>
  );
}
