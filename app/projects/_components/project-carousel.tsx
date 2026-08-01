import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "@/data/projects";

type Project = (typeof projectsData)[0];

interface ProjectCarouselProps {
  project: Project;
  imageClipPath: string;
  children?: React.ReactNode;
}

export function ProjectCarousel({
  project,
  imageClipPath,
  children,
}: ProjectCarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const isMobileApp = project?.categories.includes("MOBILE");

  // Handle Carousel Navigation
  const handleNextImage = () => {
    if (!project?.images) return;
    setImageIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0));
  };

  const handlePrevImage = () => {
    if (!project?.images) return;
    setImageIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1));
  };

  // Bind Carousel Shortcuts
  useEffect(() => {
    if (!project || !project.images || project.images.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      if (e.key.toLowerCase() === "a" || e.key === "ArrowLeft") {
        setImageIndex((prev) =>
          prev > 0 ? prev - 1 : project.images.length - 1,
        );
      } else if (e.key.toLowerCase() === "d" || e.key === "ArrowRight") {
        setImageIndex((prev) =>
          prev < project.images.length - 1 ? prev + 1 : 0,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project]);

  return (
    <motion.div
      className="image-carousel-container absolute inset-0 cursor-pointer bg-background shadow-[8px_8px_0_rgba(255,255,255,1)] transition-transform duration-500 group-hover:scale-[1.02]"
      style={{ clipPath: imageClipPath }}
      onTap={(e, info) => {
        const target = e.target as HTMLElement;
        const container = target.closest(".image-carousel-container") || target;
        const rect = container.getBoundingClientRect();
        const x = info.point.x - rect.left;
        if (x > rect.width / 2) {
          handleNextImage();
        } else {
          handlePrevImage();
        }
      }}
    >
      {/* Render Animated Carousel */}
      <AnimatePresence>
        {project.images && project.images.length > 0 && (
          <motion.div
            key={imageIndex}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[imageIndex]}
              alt={`${project.title} screenshot ${imageIndex + 1}`}
              fill={true}
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render Bottom Gradient */}
      {!isMobileApp && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-linear-to-t from-background to-transparent" />
      )}

      {/* Render Position Indicators */}
      {project.images && project.images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {project.images.map((_, i) => (
            <div
              key={i}
              className={`h-2 transition-all duration-300 ${
                i === imageIndex ? "w-8 bg-foreground" : "w-2 bg-foreground/30"
              }`}
              style={{ transform: "skewX(-12deg)" }}
            />
          ))}
        </div>
      )}

      {/* Render Overlay Content */}
      {children}
    </motion.div>
  );
}
