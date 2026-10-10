"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useInView, Variants, useReducedMotion } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.7,
  delay = 0,
  yOffset = 14,
  inView = true,
  inViewMargin = "-60px",
  blur = "10px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });
  const isInView = !inView || inViewResult;
  const shouldReduceMotion = useReducedMotion();

  const defaultVariants: Variants = {
    hidden: {
      y: shouldReduceMotion ? 0 : yOffset,
      opacity: 0,
      filter: shouldReduceMotion ? "none" : `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: shouldReduceMotion ? 0 : delay,
          duration: shouldReduceMotion ? 0.01 : duration,
          ease: [0.16, 1, 0.3, 1], // Quiet, smooth editorial easing
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default BlurFade;
