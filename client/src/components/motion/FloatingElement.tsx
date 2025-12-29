import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  rotate?: number; // Max rotation in degrees
  scale?: number; // Max scale variation (e.g., 1.05)
  depth?: number; // Z-index or perceived depth
}

export function FloatingElement({
  children,
  className,
  delay = 0,
  duration = 6,
  yOffset = 15,
  xOffset = 0,
  rotate = 0,
  scale = 1,
  depth = 1,
}: FloatingElementProps) {
  // Randomize start direction slightly based on delay to avoid uniformity
  const isInverted = delay % 2 === 0;

  return (
    <motion.div
      initial={{ y: 0, x: 0, rotate: 0, scale: 1 }}
      animate={{
        y: [0, isInverted ? yOffset : -yOffset, 0],
        x: xOffset ? [0, isInverted ? xOffset : -xOffset, 0] : 0,
        rotate: rotate ? [0, isInverted ? rotate : -rotate, 0] : 0,
        scale: scale !== 1 ? [1, scale, 1] : 1,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className={cn("absolute pointer-events-none", className)}
      style={{ zIndex: depth }}
    >
      {children}
    </motion.div>
  );
}
