import { motion } from "motion/react";

interface TsushimaTaleSlotProps {
  index: number;
  isActive: boolean;
  company: string;
  role: string;
  status: string;
  onClick: (index: number) => void;
}

export function TsushimaTaleSlot({
  index,
  isActive,
  company,
  role,
  status,
  onClick,
}: TsushimaTaleSlotProps) {
  return (
    <motion.button
      onClick={() => onClick(index)}
      className="group relative mb-2 w-full px-4 py-5 text-left"
      whileHover={!isActive ? { x: 5 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {/* Indicate Active Selection */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-1 bg-[#D4AF37]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        style={{ originY: 0.5 }}
      />

      {/* Provide Hover Contrast */}
      <div
        className={`absolute inset-0 bg-linear-to-r from-white/10 to-transparent transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
        }`}
      />

      <div className="relative z-10 flex flex-col pl-4">
        <span
          className={`font-edo-sz text-sm tracking-widest transition-colors duration-500 md:text-base ${
            isActive ? "text-[#D4AF37]" : "text-gray-600"
          }`}
        >
          {status === "CLEARED" ? "COMPLETED TALE" : "CURRENT JOURNEY"}
        </span>
        <span
          className={`mt-1 font-lato text-lg font-light tracking-wide transition-colors duration-500 md:text-xl ${
            isActive ? "text-white" : "text-gray-400"
          }`}
        >
          {company}
        </span>
        <span
          className={`mt-1 font-lato text-xs tracking-widest uppercase transition-colors duration-500 md:text-sm ${
            isActive ? "text-white/70" : "text-gray-600"
          }`}
        >
          {role}
        </span>
      </div>
    </motion.button>
  );
}
