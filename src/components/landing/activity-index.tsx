"use client";

import { useState } from "react";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";
import { useModal } from "../ModalContext";
import { ArrowUpRight } from "lucide-react";

interface ActivityItem {
  num: string;
  title: string;
  desc: string;
  image: string;
}

const activities: ActivityItem[] = [
  {
    num: "01",
    title: "Kunjungan Panti",
    desc: "Menghadirkan kebersamaan melalui interaksi tulus, permainan, dan ruang bercerita bersama anak-anak serta lansia.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Bakti Sosial",
    desc: "Penyaluran kebutuhan pokok, suplemen nutrisi, dan perlengkapan harian bagi keluarga yang membutuhkan.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Kegiatan Bersama",
    desc: "Aktivitas kreatif seperti melukis, dongeng edukatif, dan kerajinan tangan untuk memantik keceriaan anak.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Aksi Kebaikan",
    desc: "Gerakan tanggap kepedulian, gotong royong sosial, dan ruang kolaborasi terbuka di berbagai wilayah.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop",
  },
];

export default function ActivityIndex() {
  const [activeImage, setActiveImage] = useState<string>(activities[0].image);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { openContributionModal } = useModal();

  return (
    <section id="kegiatan" className="py-28 sm:py-36 md:py-44 px-6 md:px-12 border-t border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <BlurFade delay={0.1} duration={0.8} className="mb-16 md:mb-24">
          <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#999999] block mb-4">
            Arsip Inisiatif
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#111111]">
            Yang Kami Lakukan
          </h2>
        </BlurFade>

        {/* Editorial Index Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Horizontal Rows List */}
          <div className="lg:col-span-7 divide-y divide-[#E8E8E2]">
            {activities.map((act, i) => (
              <BlurFade key={act.num} delay={0.15 * i} duration={0.6}>
                <div
                  onMouseEnter={() => {
                    setActiveImage(act.image);
                    setHoveredIndex(i);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => openContributionModal("relawan")}
                  className="py-8 sm:py-10 group cursor-pointer flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 transition-colors duration-200"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-xs text-[#999999] group-hover:text-[#4057A5] transition-colors">
                      {act.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] group-hover:text-[#4057A5] transition-colors mb-2">
                        {act.title}
                      </h3>
                      <p className="text-sm text-[#666666] max-w-md font-light leading-relaxed">
                        {act.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs uppercase tracking-widest text-[#999999] group-hover:text-[#4057A5] self-end sm:self-center transition-colors">
                    <span className="hidden sm:inline">Ikut Serta</span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Right: Editorial Contextual Image Preview (Reveals with smooth transition) */}
          <div className="lg:col-span-5 hidden lg:block sticky top-32">
            <BlurFade delay={0.3} duration={0.8}>
              <div className="relative h-[480px] w-full overflow-hidden bg-[#E8E8E2] border border-[#E8E8E2]">
                <Image
                  src={activeImage}
                  alt="Dokumentasi aktivitas LAKARA"
                  fill
                  sizes="40vw"
                  className="object-cover transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white/90 bg-black/40 backdrop-blur-sm px-3 py-1.5 w-fit">
                  Dokumentasi Lapangan LAKARA
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
