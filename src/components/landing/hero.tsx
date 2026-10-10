"use client";

import Image from "next/image";
import BlurFade from "../ui/blur-fade";
import TextAnimate from "../ui/text-animate";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="pt-36 sm:pt-44 md:pt-52 pb-0 flex flex-col items-center text-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Small Eyebrow */}
        <BlurFade delay={0.1} duration={0.6}>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-[#666666] mb-8">
            Langkah Kebaikan · Rasa · Asa
          </p>
        </BlurFade>

        {/* Dominant Headline using TextAnimate & Cormorant Garamond Serif */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-normal tracking-tight text-[#111111] leading-[1.04] mb-8 max-w-4xl">
          <TextAnimate animation="blurInUp" by="word" once duration={0.9}>
            Langkah kecil, membawa arti besar.
          </TextAnimate>
        </h1>

        {/* Quiet Supporting Sentence */}
        <BlurFade delay={0.4} duration={0.8}>
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#666666] max-w-xl mx-auto leading-relaxed font-light mb-10">
            Ruang bagi mereka yang ingin berbuat baik, bersama.
          </p>
        </BlurFade>

        {/* Two Restrained Actions */}
        <BlurFade delay={0.55} duration={0.8} className="flex items-center gap-6 mb-20 md:mb-28">
          <a
            href="#tentang"
            className="px-6 py-3 bg-[#4057A5] hover:bg-[#33488C] text-white text-xs uppercase tracking-widest font-medium rounded transition-colors duration-200"
          >
            Kenali LAKARA
          </a>
          <a
            href="#kegiatan"
            className="text-xs uppercase tracking-widest font-medium text-[#666666] hover:text-[#111111] transition-colors py-3"
          >
            Lihat kegiatan →
          </a>
        </BlurFade>
      </div>

      {/* Photographic Editorial Spread (No card, No border-radius, No shadow) */}
      <BlurFade delay={0.65} duration={1} yOffset={20} className="w-full">
        <div className="relative w-full h-[380px] sm:h-[500px] md:h-[640px] lg:h-[720px] bg-[#E8E8E2]">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
            alt="Dokumentasi interaksi tulus bersama anak-anak dalam kegiatan sosial LAKARA"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale-[15%] contrast-[1.02]"
          />
          {/* Subtle bottom fade transition */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAFAF7] to-transparent pointer-events-none" />
        </div>
      </BlurFade>
    </section>
  );
}
