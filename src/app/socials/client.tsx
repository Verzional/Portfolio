"use client";

import { useRouter } from "next/navigation";
import { useMenu } from "@/hooks/use-menu";
import { useValidIndex } from "@/hooks/use-valid-index";
import { socialsData } from "@/data/socials";
import { SubMenu } from "@/components/sub-menu";
import { SidebarPortal } from "@/components/sidebar-portal";
import { SocialSlot } from "./_components/social-slot";
import { TaxiMap } from "./_components/taxi-map";

export function SocialsClient() {
  const router = useRouter();

  // Handle Menu Navigation and Selection
  const { activeIndex, setActiveIndex } = useMenu({
    itemCount: socialsData.length + 1,
    onSelect: (index) => {
      if (index === socialsData.length) {
        router.push("/");
      } else {
        window.open(socialsData[index].url, "_blank");
      }
    },
  });

  // Track if Back Button is Active
  const isBackActive = activeIndex === socialsData.length;

  const displayIndex = useValidIndex(activeIndex, socialsData.length);

  // Sidebar Content
  const sidebarContent = (
    <SubMenu
      title="Socials"
      isBackActive={isBackActive}
      onBackClick={() => router.push("/")}
      controls={[
        { key: "W/S", action: "NAVIGATE" },
        { key: "ENTER", action: "CONNECT" },
      ]}
    >
      <div className="flex min-h-0 w-full flex-1 scrollbar-none flex-col gap-2 overflow-x-hidden overflow-y-auto pt-2 pb-4">
        {/* Social Links */}
        {socialsData.map((social, idx) => (
          <SocialSlot
            key={social.id}
            isActive={activeIndex === idx}
            onClickAction={() => {
              if (activeIndex !== idx) {
                setActiveIndex(idx);
              } else {
                window.open(social.url, "_blank");
              }
            }}
            onHoverAction={() => setActiveIndex(idx)}
            name={social.name}
            handle={social.handle}
          />
        ))}
      </div>
    </SubMenu>
  );

  const handleMapClick = (idx: number) => {
    setActiveIndex(idx);
    window.open(socialsData[idx].url, "_blank");
  };

  return (
    <>
      <SidebarPortal>{sidebarContent}</SidebarPortal>
      <TaxiMap
        activeIndex={displayIndex}
        onHoverAction={setActiveIndex}
        onClickAction={handleMapClick}
      />
    </>
  );
}
