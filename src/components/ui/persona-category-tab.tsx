"use client";

interface PersonaCategoryTabProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

export function PersonaCategoryTab({ isActive, onClick, label }: PersonaCategoryTabProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 transition-all duration-200 ${
        isActive ? "scale-110 -rotate-3 z-10" : "scale-100 rotate-2 opacity-60 hover:opacity-100"
      }`}
    >
      <div 
        className={`absolute inset-0 ${isActive ? "bg-primary" : "bg-black"} border-2 ${isActive ? "border-white" : "border-primary"}`}
        style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
      />
      <span className={`relative z-10 font-optima-nova tracking-widest text-sm md:text-base ${isActive ? "text-white" : "text-primary"}`}>
        {label}
      </span>
    </button>
  );
}
