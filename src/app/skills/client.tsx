"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCategories } from "@/hooks/use-categories";
import { skillsData } from "@/data/skills";
import { SidebarPortal } from "@/components/sidebar-portal";
import { SubMenu } from "@/components/sub-menu";
import { SekiroCategoryTab } from "./_components/sekiro-category-tab";
import { SekiroSkillTree } from "./_components/sekiro-skill-tree";

export function SkillsClient() {
  const router = useRouter();
  const { activeCategory, setActiveCategory } = useCategories(skillsData);

  // Track Active Skill Node
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  // Determine Active Style Based on Selected Category
  const activeStyle =
    skillsData.find((s) => s.id === activeCategory) || skillsData[0];

  // Derive Active Skill Node
  const activeNode =
    activeStyle.skills?.find((n) => n.id === activeNodeId) ||
    activeStyle.skills?.[0] ||
    null;

  // Render Sidebar Content
  const sidebarContent = (
    <SubMenu
      title="Skills"
      isBackActive={false}
      onBackClick={() => router.push("/")}
      controls={[
        { key: "Q / E", action: "Category" },
        { key: "W / A / S / D & ▲ / ◀ / ▼ / ▶", action: "Navigate" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 flex-col">
        {/* Category Tabs */}
        <div className="flex w-full shrink-0 scrollbar-none flex-nowrap items-center justify-start gap-4 overflow-x-auto px-4 pt-4 pb-6 [-ms-overflow-style:none] md:justify-center md:gap-5 [&::-webkit-scrollbar]:hidden">
          {skillsData.map((cat) => (
            <SekiroCategoryTab
              key={cat.id}
              id={cat.id}
              isActive={activeCategory === cat.id}
              onClick={setActiveCategory}
              label={cat.title}
              themeColor={cat.themeColor}
              icon={cat.icon}
            />
          ))}
        </div>

        {/* Active Skill Node Details */}
        <div className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto px-4 pb-8 md:px-8">
          {activeNode && (
            <div className="flex flex-col gap-2">
              <h4 className="font-edo-sz text-xl tracking-wider text-foreground md:text-2xl">
                {activeNode.name}
              </h4>
              <p className="mt-2 font-lato text-sm text-muted md:text-base">
                {activeNode.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>{sidebarContent}</SidebarPortal>

      {/* Global SVG Ink Filter */}
      <svg
        width="0"
        height="0"
        className="pointer-events-none absolute"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter
            id="sekiro-ink-bleed"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.4"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Main Skill Tree Canvas */}
      <SekiroSkillTree
        activeStyle={activeStyle}
        activeNodeId={activeNodeId}
        onActiveNodeChange={setActiveNodeId}
      />
    </>
  );
}
