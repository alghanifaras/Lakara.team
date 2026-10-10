"use client";

import FadeIn from "./FadeIn";
import { HandHeart, Heart, Sparkles } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: HandHeart,
      title: "Kebaikan",
      meaning: "Langkah Pertama",
      desc: "Berbuat baik tanpa menunggu alasan. Menjadikan ketulusan sebagai bahasa universal dalam setiap interaksi kemanusiaan.",
    },
    {
      icon: Heart,
      title: "Rasa",
      meaning: "Empati & Kedalaman",
      desc: "Hadir, mendengar, dan peduli terhadap sesama. Menghargai martabat setiap insan sebelum menyalurkan bantuan materi.",
    },
    {
      icon: Sparkles,
      title: "Asa",
      meaning: "Menyalakan Harapan",
      desc: "Menumbuhkan harapan melalui langkah-langkah kecil. Bersama menyalakan keyakinan bahwa hari esok dapat lebih hangat.",
    },
  ];

  return (
    <section id="tentang" className="py-28 md:py-36 bg-white px-6 md:px-12 border-y border-[#E2E6F0] relative overflow-hidden">
      {/* Subtle background sail curve accent */}
      <div
        className="absolute -right-32 top-1/3 w-96 h-96 rounded-full border border-[#EEF1FB] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Editorial 2-Column Philosophy Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 md:mb-32">
          {/* Left Column: Large Editorial Serif Headline */}
          <div className="lg:col-span-6">
            <FadeIn direction="up">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#4057A5] mb-4 block">
                Filosofi Kami
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111318] leading-[1.12]">
                Kebaikan Tidak Selalu <br />
                Datang Dalam <span className="italic text-[#4057A5] font-normal">Langkah Besar.</span>
              </h2>
            </FadeIn>
          </div>

          {/* Right Column: Short paragraph explaining LAKARA */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn delay={0.1} direction="up">
              <p className="font-serif text-2xl sm:text-3xl text-[#111318] font-normal leading-snug">
                "Kadang, ia hadir dalam waktu yang kita berikan, tangan yang kita ulurkan, dan kepedulian yang kita pilih
                untuk terus hidup."
              </p>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <p className="text-base sm:text-lg text-[#5C6578] leading-relaxed font-normal">
                LAKARA adalah komunitas terbuka yang mempertemukan orang-orang yang ingin berbagi waktu, tenaga, perhatian,
                dan kepedulian. Kami bergerak langsung merawat hubungan kemanusiaan—melalui kunjungan panti, bakti sosial,
                pemberdayaan anak, dan aksi sosial bermakna.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Subtle Wave Accent Divider */}
        <div className="flex items-center gap-4 mb-16" aria-hidden="true">
          <div className="h-px bg-[#E2E6F0] flex-1" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#4057A5]" />
          <div className="h-px bg-[#E2E6F0] flex-1" />
        </div>

        {/* Three Core Values in Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <FadeIn
              key={v.title}
              delay={0.1 * i}
              direction="up"
              className="p-8 sm:p-9 rounded-2xl bg-[#F7F8FA] border border-[#E2E6F0] hover:border-[#4057A5]/40 hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E6F0] flex items-center justify-center text-[#4057A5] mb-6 shadow-sm">
                  <v.icon size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#8E98AA] block mb-1">
                  {v.meaning}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#111318] mb-3">
                  {v.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5C6578] leading-relaxed font-normal">
                  {v.desc}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E2E6F0]/70 flex items-center text-xs font-semibold text-[#4057A5]">
                <span>Nilai Penuntun LAKARA</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}