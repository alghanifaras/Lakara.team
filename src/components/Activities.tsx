"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useModal } from "./ModalContext";

interface Activity {
  title: string;
  tag: string;
  description: string;
  image: string;
}

const activities: Activity[] = [
  {
    title: "Bakti Sosial",
    tag: "Kepedulian Langsung",
    description: "Berbagi waktu, perhatian, dan kebutuhan bersama mereka yang membutuhkan di berbagai wilayah.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Kunjungan Panti",
    tag: "Interaksi & Kebersamaan",
    description: "Menghadirkan kebersamaan melalui interaksi, permainan, dan kegiatan yang bermakna bagi penghuni panti.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Kegiatan Komunitas",
    tag: "Kolaborasi Relawan",
    description: "Menghubungkan orang-orang yang ingin tumbuh dan bergerak bersama dalam misi sosial kemanusiaan.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Aksi Kebaikan",
    tag: "Langkah Nyata",
    description: "Mengubah kepedulian menjadi langkah nyata yang membawa dampak positif dan harapan berkelanjutan.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop",
  },
];

export default function Activities() {
  const { openContributionModal } = useModal();

  return (
    <section id="kegiatan" className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-16 md:mb-20">
        <FadeIn direction="up">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#4057A5] mb-3 block">
            Aktivitas Kami
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111318] leading-[1.1] mb-6">
            Ruang Untuk Berbuat Baik
          </h2>
          <p className="text-base sm:text-lg text-[#5C6578] leading-relaxed font-normal">
            Dari kunjungan sederhana hingga kegiatan bersama, setiap langkah menjadi ruang untuk berbagi dan bertumbuh.
          </p>
        </FadeIn>
      </div>

      {/* 4 Large Editorial Story Cards (2x2 Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {activities.map((act, i) => (
          <FadeIn key={act.title} delay={i * 0.1} direction="up">
            <article
              onClick={() => openContributionModal("relawan")}
              className="group cursor-pointer rounded-2xl bg-white border border-[#E2E6F0] overflow-hidden hover:border-[#4057A5]/50 transition-all duration-300 flex flex-col h-full shadow-[0_2px_8px_rgba(17,19,24,0.02)]"
            >
              {/* Large Image Container */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#F7F8FA]">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                <span className="absolute top-4 left-4 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-md bg-white/95 text-[#111318] shadow-sm">
                  {act.tag}
                </span>

                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-lg bg-white text-[#111318] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm">
                  <ArrowUpRight size={17} />
                </div>
              </div>

              {/* Editorial Description Content */}
              <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#111318] group-hover:text-[#4057A5] transition-colors duration-200 mb-3">
                    {act.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C6578] leading-relaxed font-normal">
                    {act.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2E6F0] flex items-center justify-between text-xs font-semibold text-[#4057A5]">
                  <span>Ikuti Kegiatan Ini</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}