"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative pt-36 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden"
    >
      {/* Subtle organic blue wave gradient ambient accent inspired by LAKARA sail mark */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[#EEF1FB] rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Eyebrow badge */}
      <FadeIn delay={0.05} direction="up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E6F0] text-xs font-semibold text-[#4057A5] tracking-widest uppercase mb-8 shadow-[0_1px_4px_rgba(17,19,24,0.03)]">
          <Sparkles size={13} className="text-[#4057A5]" />
          <span>Langkah Kebaikan · Rasa · Asa</span>
        </div>
      </FadeIn>

      {/* Large Centered Editorial Serif Headline */}
      <FadeIn delay={0.15} direction="up" className="max-w-4xl">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-[#111318] leading-[1.08] mb-8">
          Langkah Kecil, <br className="hidden sm:inline" />
          Membawa Arti <span className="text-[#4057A5] italic font-normal">Besar.</span>
        </h1>
      </FadeIn>

      {/* Supporting Copy */}
      <FadeIn delay={0.25} direction="up" className="max-w-2xl mb-10">
        <p className="text-base sm:text-lg md:text-xl text-[#5C6578] leading-relaxed font-normal">
          LAKARA hadir untuk menumbuhkan kebaikan melalui langkah sederhana, kepedulian yang nyata, dan ruang untuk
          berbagi bersama mereka yang membutuhkan.
        </p>
      </FadeIn>

      {/* Two CTA Buttons */}
      <FadeIn delay={0.35} direction="up" className="flex flex-wrap items-center justify-center gap-4 mb-16 md:mb-20">
        <a
          href="#tentang"
          className="px-7 py-3.5 bg-[#4057A5] hover:bg-[#33488C] text-white rounded-xl font-medium text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
        >
          <span>Kenali LAKARA</span>
          <ArrowRight size={16} />
        </a>
        <a
          href="#kegiatan"
          className="px-7 py-3.5 bg-white hover:bg-[#F4F6FC] text-[#111318] border border-[#E2E6F0] rounded-xl font-medium text-sm sm:text-base transition-all duration-200 shadow-[0_1px_3px_rgba(17,19,24,0.02)]"
        >
          Lihat Kegiatan
        </a>
      </FadeIn>

      {/* Large Human-Centered Visual Composition (People Emerging from Bottom) */}
      <FadeIn delay={0.45} direction="up" className="w-full max-w-5xl relative">
        {/* Subtle organic sail / wave outline accent */}
        <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border border-[#4057A5]/15 pointer-events-none hidden md:block" />
        <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full border border-[#4057A5]/10 pointer-events-none hidden md:block" />

        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#E2E6F0] bg-white shadow-[0_8px_30px_rgba(17,19,24,0.04)]">
          {/* Main Visual Image */}
          <div className="relative h-[360px] sm:h-[460px] md:h-[560px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
              alt="Interaksi tulus anak-anak dan relawan dalam program sosial kemanusiaan LAKARA"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover object-center"
            />
            {/* Soft gradient bottom vignette for editorial caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/75 via-[#111318]/15 to-transparent" />

            {/* Bottom Editorial Caption */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between text-white text-left gap-4">
              <div className="max-w-md">
                <span className="text-[11px] uppercase tracking-widest text-[#EEF1FB] font-semibold block mb-1">
                  Kebersamaan Nyata
                </span>
                <p className="text-base sm:text-lg font-serif italic text-white/95">
                  "Menghadirkan kehangatan bukan tentang seberapa banyak yang kita beri, melainkan seberapa tulus kita hadir."
                </p>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 text-xs font-medium bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-white self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-[#4057A5]" />
                <span>Dokumentasi Lapangan LAKARA</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}