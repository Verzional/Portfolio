import Image from "next/image";
import { motion } from "motion/react";
import { useIdlePreload } from "@/hooks/use-idle-preload";
import { type ArcanaItem, arcanaMap } from "./persona-arcana-data";

interface PersonaTarotCardProps {
  arcana: ArcanaItem;
}

export function PersonaTarotCard({ arcana }: PersonaTarotCardProps) {
  const shouldPreload = useIdlePreload();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -60, scale: 0.94 },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 300, damping: 25 },
        },
      }}
      className="relative z-20 flex shrink-0 flex-col items-center"
    >
      {/* 3D Angled Major Arcana Tarot Card Anchor */}
      <div className="relative aspect-53/98 w-36 -rotate-3 cursor-default drop-shadow-[6px_8px_0_#000000] filter select-none sm:w-48 md:w-64 md:drop-shadow-[8px_10px_0_#000000] lg:w-76 xl:w-84">
        <Image
          src={arcana.image}
          alt={`${arcana.arcana} - ${arcana.french}`}
          width={530}
          height={980}
          priority={true}
          className="pointer-events-none h-full w-full object-contain select-none"
        />
      </div>

      {/* Preload Other Tarot Cards for Instant Navigation */}
      {shouldPreload && (
        <div
          className="pointer-events-none fixed inset-0 -z-50 overflow-hidden opacity-0"
          aria-hidden="true"
        >
          {Object.values(arcanaMap)
            .filter((item) => item.image !== arcana.image)
            .map((item) => (
              <Image
                key={item.image}
                src={item.image}
                alt=""
                width={530}
                height={980}
              />
            ))}
        </div>
      )}
    </motion.div>
  );
}
