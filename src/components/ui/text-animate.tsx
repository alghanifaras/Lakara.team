"use client";

import React, { ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TextAnimateProps {
  children: string;
  className?: string;
  as?: ElementType;
  animation?: "blurInUp" | "blurIn" | "fadeIn";
  by?: "word" | "character" | "line";
  once?: boolean;
  delay?: number;
  duration?: number;
}

export function TextAnimate({
  children,
  className = "",
  as: Component = "span",
  animation = "blurInUp",
  by = "word",
  once = true,
  delay = 0,
  duration = 0.8,
}: TextAnimateProps) {
  const shouldReduceMotion = useReducedMotion();

  // Split tokens
  const tokens = by === "character" ? children.split("") : children.split(" ");

  const getVariants = () => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }

    switch (animation) {
      case "blurInUp":
        return {
          hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        };
      case "blurIn":
        return {
          hidden: { opacity: 0, filter: "blur(10px)" },
          visible: { opacity: 1, filter: "blur(0px)" },
        };
      case "fadeIn":
      default:
        return {
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <Component className={`inline-block ${className}`} aria-label={children}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-40px" }}
        transition={{
          staggerChildren: shouldReduceMotion ? 0 : 0.08,
          delayChildren: shouldReduceMotion ? 0 : delay,
        }}
        className="inline"
      >
        {tokens.map((token, index) => (
          <motion.span
            key={index}
            variants={variants}
            transition={{
              duration: shouldReduceMotion ? 0.01 : duration,
              ease: [0.16, 1, 0.3, 1], // Slow, calm editorial ease-out
            }}
            className="inline-block"
          >
            {token}
            {by === "word" && index < tokens.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

export default TextAnimate;
