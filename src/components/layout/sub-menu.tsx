"use client";

interface SubMenuProps {
  title: string;
  children?: React.ReactNode;
  isBackActive?: boolean;
  onBackClick?: () => void;
  onBackMove?: () => void;
}

export function SubMenu({
  title,
  children,
  isBackActive = false,
  onBackClick,
  onBackMove,
}: SubMenuProps) {

  return (
    <div className="flex h-full flex-col justify-between text-foreground">
      <div>
        <h2 className="truncate pl-4 font-edo-sz text-3xl tracking-widest text-muted-foreground uppercase md:pl-8 md:text-4xl">
          {title}
        </h2>
        <div className="my-6 h-0.5 w-[90%] bg-divider" />

        <div
          id="sidebar-slot"
          className="flex w-full flex-1 flex-col items-center justify-center py-4 pl-4 md:pl-8"
        >
          {children}
        </div>
      </div>

      <div>
        <div className="my-6 h-0.5 w-[90%] bg-divider" />
        <button
          onPointerMove={onBackMove}
          onClick={onBackClick}
          className={`w-[95%] pt-2 pb-4 pl-4 text-left font-edo-sz text-3xl tracking-widest uppercase transition-colors md:pl-8 ${
            isBackActive
              ? "relative bg-menu-select text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Back
        </button>
      </div>
    </div>
  );
}
