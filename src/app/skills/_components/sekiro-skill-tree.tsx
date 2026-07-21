"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
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
  // Memoize Nodes To Prevent Unnecessary Renders
  const nodes = useMemo(() => activeStyle.skills || [], [activeStyle.skills]);

  // Derive Active Node
  const isNodeValid = nodes.some((n) => n.id === activeNodeId);
  const effectiveActiveNodeId = isNodeValid
    ? activeNodeId
    : nodes[0]?.id || null;

  // Track Initial Load State
  const [currentStyleId, setCurrentStyleId] = useState(activeStyle.id);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Reset Initial Load Flag
  if (activeStyle.id !== currentStyleId) {
    setCurrentStyleId(activeStyle.id);
    setIsInitialLoad(true);
  }

  useEffect(() => {
    if (!isInitialLoad) return;
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [isInitialLoad, activeStyle.id]);

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
        nextNodeId =
          activeNode.neighbors.up ||
          nodes.find((n) => n.neighbors.down === startId)?.id ||
          activeNode.neighbors.upLeft ||
          activeNode.neighbors.upRight ||
          nodes.find((n) => n.neighbors.downRight === startId)?.id ||
          nodes.find((n) => n.neighbors.downLeft === startId)?.id ||
          startId;
      } else if (key === "s" || key === "arrowdown") {
        nextNodeId =
          activeNode.neighbors.down ||
          nodes.find((n) => n.neighbors.up === startId)?.id ||
          activeNode.neighbors.downLeft ||
          activeNode.neighbors.downRight ||
          nodes.find((n) => n.neighbors.upRight === startId)?.id ||
          nodes.find((n) => n.neighbors.upLeft === startId)?.id ||
          startId;
      } else if (key === "a" || key === "arrowleft") {
        nextNodeId =
          activeNode.neighbors.left ||
          nodes.find((n) => n.neighbors.right === startId)?.id ||
          activeNode.neighbors.downLeft ||
          activeNode.neighbors.upLeft ||
          nodes.find((n) => n.neighbors.downRight === startId)?.id ||
          nodes.find((n) => n.neighbors.upRight === startId)?.id ||
          startId;
      } else if (key === "d" || key === "arrowright") {
        nextNodeId =
          activeNode.neighbors.right ||
          nodes.find((n) => n.neighbors.left === startId)?.id ||
          activeNode.neighbors.downRight ||
          activeNode.neighbors.upRight ||
          nodes.find((n) => n.neighbors.downLeft === startId)?.id ||
          nodes.find((n) => n.neighbors.upLeft === startId)?.id ||
          startId;
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

  // Convert Grid Coordinates To Pure Percentages
  const getX = (x: number) => (maxX === 0 ? "50%" : `${(x / maxX) * 100}%`);
  const getY = (y: number) => (maxY === 0 ? "50%" : `${(y / maxY) * 100}%`);

  const treeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const nodeVariants: Variants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-transparent">
      <AnimatePresence mode="wait">
        {/* Inner Padding Container */}
        <motion.div
          key={activeStyle.id}
          variants={treeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-x-12.5 inset-y-15 md:inset-x-20 md:inset-y-15 xl:inset-x-40 xl:inset-y-50"
        >
          {/* SVG Lines Layer */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            <defs>
              {/* Mobile Marker Offset */}
              <marker
                id="skill-dot-mobile"
                viewBox="0 0 16 16"
                refX="38"
                refY="8"
                markerWidth="16"
                markerHeight="16"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <circle cx="8" cy="8" r="6" fill="#C5B39A" />
              </marker>

              {/* Desktop Marker Offset */}
              <marker
                id="skill-dot-desktop"
                viewBox="0 0 16 16"
                refX="54"
                refY="8"
                markerWidth="16"
                markerHeight="16"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <circle cx="8" cy="8" r="6" fill="#C5B39A" />
              </marker>

              {/* Active Mobile Marker */}
              <marker
                id="skill-dot-mobile-active"
                viewBox="0 0 16 16"
                refX="38"
                refY="8"
                markerWidth="16"
                markerHeight="16"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <circle cx="8" cy="8" r="6" fill={activeStyle.themeColor} />
              </marker>

              {/* Active Desktop Marker */}
              <marker
                id="skill-dot-desktop-active"
                viewBox="0 0 16 16"
                refX="54"
                refY="8"
                markerWidth="16"
                markerHeight="16"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <circle cx="8" cy="8" r="6" fill={activeStyle.themeColor} />
              </marker>
            </defs>

            {(() => {
              const drawnLines = new Set<string>();
              return nodes.flatMap((node) => {
                const lines: React.ReactNode[] = [];
                const directions = [
                  "up",
                  "down",
                  "left",
                  "right",
                  "upLeft",
                  "upRight",
                  "downLeft",
                  "downRight",
                ] as const;

                directions.forEach((dir) => {
                  const targetId = node.neighbors[dir];
                  if (targetId) {
                    const target = nodes.find((n) => n.id === targetId);
                    if (target) {
                      // Generate Directionless Edge Key
                      const lineKey = [node.id, target.id].sort().join("-");

                      if (!drawnLines.has(lineKey)) {
                        drawnLines.add(lineKey);

                        const isSourceActive =
                          node.id === effectiveActiveNodeId;
                        const isTargetActive =
                          target.id === effectiveActiveNodeId;
                        const isLineActive = isSourceActive || isTargetActive;

                        let lineOpacity = 0.25;
                        if (isSourceActive) lineOpacity = 1;
                        else if (isTargetActive) lineOpacity = 0.6;

                        // Render Base Grid Line
                        lines.push(
                          <motion.line
                            key={`${lineKey}-base`}
                            variants={{
                              hidden: { pathLength: 0, opacity: 0 },
                              visible: {
                                pathLength: 1,
                                opacity: 0.3,
                                strokeWidth: 2,
                                stroke: "#C5B39A",
                                transition: {
                                  duration: 0.4,
                                  ease: "easeInOut",
                                },
                              },
                            }}
                            x1={getX(node.position.x)}
                            y1={getY(node.position.y)}
                            x2={getX(target.position.x)}
                            y2={getY(target.position.y)}
                            strokeLinecap="round"
                            className="[marker-end:url(#skill-dot-mobile)] md:[marker-end:url(#skill-dot-desktop)]"
                          />,
                        );

                        // Render Active Energy Line
                        lines.push(
                          <motion.line
                            key={`${lineKey}-energy`}
                            variants={{
                              hidden: { pathLength: 0, opacity: 0 },
                              visible: {
                                pathLength: 1,
                                opacity: isLineActive ? lineOpacity : 0,
                                strokeWidth: 4,
                                stroke: activeStyle.themeColor,
                                filter: isLineActive
                                  ? `drop-shadow(0 0 8px ${activeStyle.themeColor})`
                                  : "drop-shadow(0 0 0px transparent)",
                                transition: {
                                  duration: 0.4,
                                  ease: "easeInOut",
                                  opacity: {
                                    delay:
                                      isLineActive && isInitialLoad ? 1.8 : 0,
                                    duration: 0.4,
                                  },
                                  filter: {
                                    delay:
                                      isLineActive && isInitialLoad ? 1.8 : 0,
                                    duration: 0.4,
                                  },
                                },
                              },
                            }}
                            x1={getX(node.position.x)}
                            y1={getY(node.position.y)}
                            x2={getX(target.position.x)}
                            y2={getY(target.position.y)}
                            strokeLinecap="round"
                            className={
                              isLineActive
                                ? "[marker-end:url(#skill-dot-mobile-active)] md:[marker-end:url(#skill-dot-desktop-active)]"
                                : ""
                            }
                          />,
                        );
                      }
                    }
                  }
                });
                return lines;
              });
            })()}
          </svg>

          {/* Nodes Layer */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              variants={nodeVariants}
              className="absolute"
              style={{
                left: getX(node.position.x),
                top: getY(node.position.y),
                x: "-50%",
                y: "-50%",
                zIndex: effectiveActiveNodeId === node.id ? 10 : 1,
              }}
            >
              <SekiroSkillNode
                node={node}
                isActive={effectiveActiveNodeId === node.id}
                onClick={() => onActiveNodeChange(node.id)}
                onHover={() => onActiveNodeChange(node.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
