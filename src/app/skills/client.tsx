"use client";

import { useRouter } from "next/navigation";
import { useCategories } from "@/hooks/use-categories";
import { skillsData } from "@/data/skills";
import { SidebarPortal } from "@/components/sidebar-portal";
import { SubMenu } from "@/components/sub-menu";
import { SekiroCategoryTab } from "./_components/sekiro-category-tab";

export function SkillsClient() {
  const router = useRouter();
  const { activeCategory, setActiveCategory } = useCategories(skillsData);

  // Determine Active Style Based on Selected Category
  const activeStyle =
    skillsData.find((s) => s.id === activeCategory) || skillsData[0];

  const sidebarContent = (
    <SubMenu
      title="Skills"
      isBackActive={false}
      onBackClick={() => router.push("/")}
      controls={[
        { key: "Q / E", action: "Category" },
        { key: "W / S & ▼ / ▲", action: "Navigate" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 flex-col">
        {/* Category Tabs */}
        <div className="flex w-full shrink-0 flex-nowrap items-center justify-start gap-3 overflow-x-auto px-4 pt-2 pb-6 md:justify-center">
          {/* Icon Cluster */}
          <div className="flex items-center gap-5">
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
        </div>

        {/* Selected Category Details */}
        <div className="mt-4 flex flex-col px-4 md:px-8">
          <h3
            className="font-edo-sz text-2xl tracking-widest uppercase md:text-3xl"
            style={{
              color: activeStyle.themeColor,
              textShadow: `0 0 10px ${activeStyle.themeColor}`,
            }}
          >
            {activeStyle.subtitle}
          </h3>
          <p className="mt-2 font-lato text-muted">
            The tree is currently empty.
          </p>
        </div>
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>{sidebarContent}</SidebarPortal>

      {/* SVG Ink Filter */}
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
    </>
  );
}
