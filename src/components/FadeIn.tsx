"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  className = "",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: 28 };
      case "down":
        return { x: 0, y: -28 };
      case "left":
        return { x: 28, y: 0 };
      case "right":
        return { x: -28, y: 0 };
      default:
        return { x: 0, y: 28 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1], // Apple-style smooth ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}