"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMenu } from "@/hooks/use-menu";
import { socialsData } from "@/data/socials";
import { SubMenu } from "@/components/sub-menu";
import { SidebarPortal } from "@/components/sidebar-portal";

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

  // Check if the Back Button is the Active Item
  const isBackActive = activeIndex === socialsData.length;

  // Sidebar Content
  const sidebarContent = (
    <SubMenu
      title="Socials"
      isBackActive={isBackActive}
      onBackClick={() => router.push("/")}
      onBackMove={() => setActiveIndex(socialsData.length)}
      controls={[
        { key: "W/S", action: "NAVIGATE" },
        { key: "ENTER", action: "CONNECT" },
      ]}
    >
      <div className="flex flex-col gap-2 p-4">
        {/* Social Links */}
        {socialsData.map((social, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={social.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex cursor-pointer items-center gap-4 px-6 py-4 transition-all duration-200 ${
                isActive
                  ? "bg-menu-select text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <div
                className={`relative h-6 w-6 shrink-0 transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-50 grayscale"}`}
              >
                {/* Social Icon */}
                <Image
                  src={social.icon}
                  alt={social.name}
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              {/* Social Name */}
              <span className="font-edo-sz text-2xl tracking-widest uppercase md:text-3xl">
                {social.name}
              </span>
            </div>
          );
        })}
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>{sidebarContent}</SidebarPortal>
      <div className="h-full w-full"></div>
    </>
  );
}
