import { motion } from "motion/react";

interface PersonaSkillTagProps {
  label: string;
}

export function PersonaSkillTag({ label }: PersonaSkillTagProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 1.5 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { type: "tween", duration: 0.1, ease: "easeOut" },
        },
      }}
      className="-skew-x-12 cursor-default bg-foreground px-4 py-1.5 font-optima-nova text-xs font-bold tracking-widest text-background shadow-[3px_3px_0_#d4030d] transition-transform hover:-translate-y-1 md:text-sm"
    >
      <span className="block skew-x-12">{label}</span>
    </motion.div>
  );
}
