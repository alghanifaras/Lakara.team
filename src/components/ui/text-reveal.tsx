"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal: FC<TextRevealProps> = ({ text, className = "" }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative z-0 ${className}`}>
      <p className="flex flex-wrap leading-tight">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <span className="relative mr-3 lg:mr-4 inline-block">
      <span className="absolute opacity-15 select-none">{children}</span>
      <motion.span style={{ opacity }} className="text-[#111111]">
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
