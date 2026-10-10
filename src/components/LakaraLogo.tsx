import Image from "next/image";

interface LakaraLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "default";
}

// The actual lakara.png is a portrait PNG (2480×3508, ~0.707 ratio)
// It includes both the logo mark and wordmark — render it as a single image.
// White background, best on warm-white / white surfaces.
const logoHeight = { sm: 36, md: 44, lg: 56 };
// Computed width to preserve aspect ratio (2480/3508 ≈ 0.707)
const logoWidth = { sm: 26, md: 31, lg: 40 };

export default function LakaraLogo({
  className = "",
  iconOnly = false,
  size = "md",
  // variant is kept for API compatibility but not needed since logo is always on light bg
  variant: _variant = "default",
}: LakaraLogoProps) {
  const h = logoHeight[size];
  const w = logoWidth[size];

  if (iconOnly) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <Image
          src="/favicon.svg"
          alt="LAKARA"
          width={w}
          height={h}
          className="object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/favicon.svg"
        alt="LAKARA"
        width={w}
        height={h}
        className="object-contain flex-shrink-0"
        priority
      />
      <span
        className={`font-serif tracking-tight font-bold leading-none ${
          size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl"
        } text-[#111318]`}
      >
        LAKARA
      </span>
    </div>
  );
}
