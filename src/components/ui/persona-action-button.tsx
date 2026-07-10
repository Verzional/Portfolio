interface PersonaActionButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
}

export function PersonaActionButton({
  label,
  onClick,
  href,
  variant = "primary",
}: PersonaActionButtonProps) {
  const isPrimary = variant === "primary";

  const baseClasses =
    "group relative font-optima-nova text-xs tracking-widest px-8 py-3 -skew-x-12 hover:translate-x-2 transition-all md:text-2xl";
  const primaryClasses =
    "bg-primary text-foreground shadow-[4px_4px_0_rgba(255,255,255,1)]";
  const secondaryClasses =
    "bg-black border-2 border-primary text-primary shadow-[4px_4px_0_#d4030d]";

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses}`}
    >
      <span className="block skew-x-12">{label}</span>

      {isPrimary ? (
        <div className="pointer-events-none absolute inset-0 scale-110 border-2 border-foreground opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"></div>
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-primary opacity-0 transition-opacity group-hover:opacity-10"></div>
      )}
    </Component>
  );
}
