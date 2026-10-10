"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlurFade from "../ui/blur-fade";

const pillars = [
  {
    index: "01",
    word: "LANGKAH",
    meaning: "Langkah",
    note: "Memulai dengan ketulusan — setiap tindakan nyata adalah awal dari sesuatu yang berarti.",
  },
  {
    index: "02",
    word: "KEBAIKAN",
    meaning: "Kebaikan",
    note: "Berbagi tanpa memandang latar belakang, karena kebaikan tidak mengenal batas.",
  },
  {
    index: "03",
    word: "RASA",
    meaning: "Rasa",
    note: "Merawat empati dan hadir dengan utuh — bukan sekadar memberikan, tetapi merasakan.",
  },
  {
    index: "04",
    word: "ASA",
    meaning: "Asa",
    note: "Menyalakan harapan bersama, karena masa depan yang lebih baik dimulai hari ini.",
    accent: true,
  },
];

const stats = [
  { num: "10+", label: "Kegiatan Sosial", sub: "Terlaksana sejak 2024" },
  { num: "100+", label: "Penerima Manfaat", sub: "Langsung menerima dampak" },
  { num: "20+", label: "Relawan Aktif", sub: "Dari berbagai latar belakang" },
];

function PillarRow({
  item,
  i,
}: {
  item: (typeof pillars)[number];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0, 0, 1] }}
      className="group border-b border-[#E8E8E2] py-7 sm:py-9"
    >
      <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-0 md:justify-between">
        {/* Index + Word */}
        <div className="flex items-baseline gap-4 md:gap-6">
          <span className="font-mono text-[11px] text-[#BBBBBB] tracking-widest flex-shrink-0 w-6">
            {item.index}
          </span>
          <span
            className={`font-serif leading-none tracking-tight transition-colors duration-300 ${
              item.accent
                ? "text-[#4057A5]"
                : "text-[#111111] group-hover:text-[#4057A5]"
            } text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            {item.word}
          </span>
        </div>

        {/* Note — right aligned on desktop */}
        <p className="ml-10 md:ml-0 text-[13px] text-[#777777] font-light leading-relaxed max-w-[280px] md:text-right">
          {item.note}
        </p>
      </div>
    </motion.div>
  );
}

export default function WordmarkSection() {
  return (
    <section
      id="dampak"
      className="py-24 sm:py-32 md:py-40 px-6 md:px-12 border-t border-[#E8E8E2]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <BlurFade delay={0.05} duration={0.7} className="mb-3">
          <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#999999] block">
            Pilar Filosofi
          </span>
        </BlurFade>
        <BlurFade delay={0.12} duration={0.8} className="mb-14 md:mb-16">
          <p className="font-serif text-xl sm:text-2xl text-[#111111] font-normal max-w-lg leading-[1.45]">
            Empat kata yang membentuk cara kami memandang dunia — dan cara kami bergerak di dalamnya.
          </p>
        </BlurFade>

        {/* Pillar rows */}
        <div className="mb-20 md:mb-28">
          {pillars.map((item, i) => (
            <PillarRow key={item.word} item={item} i={i} />
          ))}
        </div>

        {/* Divider + Dampak header */}
        <BlurFade delay={0.1} duration={0.7} className="mb-10 md:mb-12">
          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#999999]">
              Dampak Lapangan
            </span>
            <div className="flex-1 h-px bg-[#E8E8E2]" />
          </div>
        </BlurFade>

        {/* Stats — typographic, no cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 md:gap-16">
          {stats.map((s, idx) => (
            <BlurFade key={s.label} delay={0.15 + idx * 0.1} duration={0.8}>
              <div className="flex flex-col gap-1">
                <span className="font-serif text-[64px] sm:text-[72px] md:text-[84px] font-normal text-[#111111] leading-none tracking-tight">
                  {s.num}
                </span>
                <span className="text-sm font-medium text-[#111111] mt-1">
                  {s.label}
                </span>
                <span className="text-xs text-[#999999] font-light">
                  {s.sub}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Closing statement */}
        <BlurFade delay={0.4} duration={0.8} className="mt-20 md:mt-24">
          <p className="font-serif text-lg sm:text-xl text-[#666666] italic max-w-xl leading-relaxed border-l-2 border-[#4057A5] pl-5">
            "Setiap langkah kebaikan yang kita ambil bersama, adalah pilar dari harapan yang kita bangun untuk masa depan."
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
