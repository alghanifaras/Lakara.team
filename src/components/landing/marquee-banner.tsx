"use client";

import Marquee from "../ui/marquee";

export default function MarqueeBanner() {
  return (
    <div className="py-8 border-y border-[#E8E8E2] bg-[#FAFAF7] overflow-hidden select-none" aria-hidden="true">
      <Marquee className="[--duration:45s]">
        <div className="flex items-center gap-12 font-serif text-xl sm:text-2xl tracking-[0.2em] text-[#888888]/70">
          <span>LANGKAH KEBAIKAN</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4057A5]/50" />
          <span>RASA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4057A5]/50" />
          <span>ASA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4057A5]/50" />
        </div>
      </Marquee>
    </div>
  );
}
