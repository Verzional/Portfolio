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
          transition: { type: "tween", duration: 0.1, ease: "easeOut" } 
        }
      }}
      className="font-optima-nova font-bold text-xs md:text-sm tracking-widest bg-white text-black px-4 py-1.5 -skew-x-12 shadow-[3px_3px_0_#d4030d] transition-transform hover:-translate-y-1 cursor-default"
    >
      <span className="block skew-x-12">{label}</span>
    </motion.div>
  );
}
