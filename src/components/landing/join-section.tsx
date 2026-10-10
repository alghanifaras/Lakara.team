"use client";

import BlurFade from "../ui/blur-fade";
import { useModal } from "../ModalContext";

export default function JoinSection() {
  const { openContributionModal } = useModal();

  return (
    <section id="kontak" className="py-32 sm:py-44 md:py-52 px-6 md:px-12 bg-[#FAFAF7] border-t border-[#E8E8E2]">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <BlurFade delay={0.1} duration={0.8}>
          <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#999999] block mb-8">
            Undangan Terbuka
          </span>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.9}>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#111111] leading-[1.1] mb-8">
            Kalau ingin, <br />
            mari berjalan bersama.
          </h2>
        </BlurFade>

        <BlurFade delay={0.35} duration={0.8}>
          <p className="text-base sm:text-lg md:text-xl text-[#666666] font-light max-w-lg mx-auto leading-relaxed mb-12">
            LAKARA terbuka untuk siapa pun yang ingin menyisihkan sedikit waktu untuk sesuatu yang berarti.
          </p>
        </BlurFade>

        <BlurFade delay={0.45} duration={0.8}>
          <button
            onClick={() => openContributionModal("relawan")}
            className="px-8 py-4 bg-[#4057A5] hover:bg-[#33488C] text-white text-xs uppercase tracking-widest font-medium rounded transition-colors duration-200"
          >
            Gabung Bersama LAKARA
          </button>
        </BlurFade>

        <BlurFade delay={0.55} duration={0.8} className="mt-8">
          <p className="text-xs text-[#999999] tracking-wide font-light">
            Menjadi relawan kegiatan, pendamping panti, atau mitra kolaborasi.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
