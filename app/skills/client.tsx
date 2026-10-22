"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCategories } from "@/hooks/use-categories";
import { skillsData, skillCategories, type SkillCategory } from "@/data/skills";
import { SidebarPortal } from "@/components/sidebar-portal";
import { SubMenu } from "@/components/sub-menu";
import { YakuzaCategoryTab } from "./_components/yakuza-category-tab";
import { YakuzaSkillWheel } from "./_components/yakuza-skill-wheel";
import { YakuzaHeatDossier } from "./_components/yakuza-heat-dossier";

// Canonical Category Entry Nodes
const CATEGORY_ROOT_NODES: Record<SkillCategory, string> = {
  ALL: "core-ts",
  WEB: "core-js",
  MOBILE: "sec-swift",
  DEVOPS: "ops-linux",
  DATA: "data-mysql",
};

export function SkillsClient() {
  const router = useRouter();

  // Track Active Skill Node
  const [activeNodeId, setActiveNodeId] = useState<string>("core-ts");

  // Handle Category Switching With Root Node Targeting
  const handleCategoryChange = (catId: string) => {
    const rootNode = CATEGORY_ROOT_NODES[catId as SkillCategory];
    if (rootNode) {
      setActiveNodeId(rootNode);
    }
  };

  const { activeCategory, setActiveCategory } = useCategories(
    skillCategories,
    handleCategoryChange,
  );

  // Handle Wheel Category Or Direct Node Selection
  const handleSelectCategory = (cat: SkillCategory, targetNodeId?: string) => {
    setActiveCategory(cat);
    if (targetNodeId) {
      setActiveNodeId(targetNodeId);
    } else {
      const rootNode = CATEGORY_ROOT_NODES[cat];
      if (rootNode) {
        setActiveNodeId(rootNode);
      }
    }
  };

  // Derive Active Skill Node
  const activeNode =
    skillsData.find((n) => n.id === activeNodeId) || skillsData[0];

  // Render Sidebar Tactical SubMenu
  const sidebarContent = (
    <SubMenu
      title="Skills"
      isBackActive={false}
      onBackClick={() => router.push("/")}
      controls={[
        { key: "W / A / S / D", action: "Navigate" },
        { key: "Q / E", action: "Category" },
        { key: "ESC", action: "Back" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 flex-col">
        {/* Yakuza Stance Tabs */}
        <div className="flex w-full shrink-0 scrollbar-none flex-nowrap items-center justify-start gap-3 overflow-x-auto px-6 pt-2.5 pb-4 [-ms-overflow-style:none] md:justify-between md:gap-0 md:px-8 md:pt-3 md:pb-4.5 [&::-webkit-scrollbar]:hidden">
          {skillCategories.map((cat) => (
            <YakuzaCategoryTab
              key={cat.id}
              id={cat.id}
              label={cat.label}
              themeColor={cat.themeColor}
              glowColor={cat.glowColor}
              icon={cat.icon}
              isActive={activeCategory === cat.id}
              onClick={(id) => setActiveCategory(id)}
            />
          ))}
        </div>

        {/* Tactical Heat Dossier */}
        <YakuzaHeatDossier activeNode={activeNode} />
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>{sidebarContent}</SidebarPortal>

      {/* Main Wheel Viewport */}
      <div className="relative flex h-full w-full flex-1 flex-col items-center justify-center overflow-hidden p-2 sm:p-4 md:p-6 lg:p-8">
        {/* Interactive Radial Ability Wheel */}
        <div className="my-auto flex h-full max-h-[min(94vh,880px)] w-full max-w-[min(94vh,880px)] items-center justify-center">
          <YakuzaSkillWheel
            activeCategory={activeCategory as SkillCategory}
            activeNodeId={activeNodeId}
            onSelectNode={setActiveNodeId}
            onSelectCategory={handleSelectCategory}
          />
        </div>
      </div>
    </>
  );
}
