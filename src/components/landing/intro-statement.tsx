"use client";

import TextReveal from "../ui/text-reveal";
import BlurFade from "../ui/blur-fade";

export default function IntroStatement() {
  return (
    <section className="py-32 sm:py-44 md:py-56 px-6 md:px-12 max-w-5xl mx-auto flex flex-col justify-center">
      <BlurFade delay={0.1} duration={0.8}>
        <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#999999] block mb-12">
          Refleksi
        </span>
      </BlurFade>

      <div className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#111111] leading-[1.18] max-w-4xl">
        <TextReveal text="Barangkali, kebaikan memang tidak pernah membutuhkan alasan yang besar." />
      </div>

      <BlurFade delay={0.3} duration={0.8} className="mt-16 sm:mt-24 pt-8 border-t border-[#E8E8E2]/60 max-w-md">
        <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-light">
          Ia hadir dalam waktu yang kita berikan, telinga yang mendengarkan, dan kepedulian yang kita rawat setiap hari.
        </p>
      </BlurFade>
    </section>
  );
}
