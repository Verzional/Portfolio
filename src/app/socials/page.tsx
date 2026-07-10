"use client";

import { useRouter } from "next/navigation";
import { useMenu } from "@/hooks/use-menu";
import { SubMenu } from "@/components/layout/sub-menu";
import { SidebarPortal } from "@/components/layout/sidebar-portal";

export default function Socials() {
  const router = useRouter();

  useMenu({
    itemCount: 1,
    onSelect: () => router.push("/"),
  });

  const sidebarContent = (
    <SubMenu 
      title="Socials" 
      isBackActive={true}
      onBackClick={() => router.push("/")}
    >
      <div className="flex h-full items-center justify-center text-muted-foreground font-edo-sz text-2xl text-center px-4">
        Social Waypoint UI Pending
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>
        {sidebarContent}
      </SidebarPortal>
        
      <div className="text-white font-edo-sz text-4xl">Socials Section</div>
    </>
  );
}
