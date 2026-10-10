"use client";

import React from "react";

interface ProgressiveBlurProps {
  className?: string;
  direction?: "top" | "bottom" | "left" | "right";
  blurLevels?: number;
}

export function ProgressiveBlur({
  className = "",
  direction = "bottom",
}: ProgressiveBlurProps) {
  const gradientDirection = {
    top: "to top",
    bottom: "to bottom",
    left: "to left",
    right: "to right",
  }[direction];

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background: `linear-gradient(${gradientDirection}, rgba(250, 250, 247, 0.95) 0%, rgba(250, 250, 247, 0.4) 40%, rgba(250, 250, 247, 0) 100%)`,
      }}
      aria-hidden="true"
    />
  );
}

export default ProgressiveBlur;
