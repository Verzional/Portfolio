"use client";

import { useRouter } from "next/navigation";
import { useMenu } from "@/hooks/use-menu";
import { SubMenu } from "@/components/sub-menu";
import { SidebarPortal } from "@/components/sidebar-portal";

export default function Experience() {
  const router = useRouter();

  useMenu({
    itemCount: 1,
    onSelect: () => router.push("/"),
  });

  const sidebarContent = (
    <SubMenu 
      title="Experience" 
      isBackActive={true}
      onBackClick={() => router.push("/")}
    >
      <div className="flex h-full items-center justify-center text-muted-foreground font-edo-sz text-2xl text-center px-4">
        Quest Log UI Pending
      </div>
    </SubMenu>
  );

  return (
    <>
      <SidebarPortal>
        {sidebarContent}
      </SidebarPortal>
        
      <div className="text-white font-edo-sz text-4xl">Experience Section</div>
    </>
  );
}
