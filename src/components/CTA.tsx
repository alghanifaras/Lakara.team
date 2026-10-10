"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import { useModal } from "./ModalContext";

export default function CTA() {
  const { openContributionModal } = useModal();

  return (
    <section id="kontak" className="py-28 md:py-36 bg-[#4057A5] text-white px-6 md:px-12 relative overflow-hidden">
      {/* Subtle organic sail / wave light glow */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-white/[0.07] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#111318]/20 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-semibold tracking-widest uppercase mb-8 border border-white/20">
            <Sparkles size={12} className="text-white" />
            <span>Mari Melangkah Bersama</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
            Yuk, Jadi Bagian <br />
            dari <span className="italic font-normal">Langkah Ini.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/85 font-normal max-w-2xl mx-auto leading-relaxed mb-12">
            Satu waktu yang kamu berikan, satu kepedulian yang kamu tunjukkan, dapat menjadi berarti bagi seseorang.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openContributionModal("relawan")}
              className="w-full sm:w-auto px-8 py-4 bg-[#4057A5] text-white hover:bg-[#33488C] rounded-xl font-medium text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <span>Gabung Bersama LAKARA</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="#kegiatan"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 hover:border-white bg-white/5 hover:bg-white/15 text-white rounded-xl font-medium text-sm sm:text-base backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Lihat Kegiatan Kami</span>
            </a>
          </div>

          <p className="text-xs text-white/60 mt-10 tracking-wide">
            Terbuka bagi relawan perorangan, inisiatif mahasiswa, dan kemitraan komunitas sosial.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}