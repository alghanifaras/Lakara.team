"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useModal } from "./ModalContext";

export default function Programs() {
  const { openProgramModal } = useModal();

  const programs = [
    {
      title: "LAKARA Berbagi",
      tagline: "Kebutuhan Pokok & Pangan Sehat",
      description:
        "Berbagi kebutuhan dan bantuan pangan serta kebutuhan harian kepada mereka yang membutuhkan dengan terencana dan bermartabat.",
      activities: [
        "Distribusi paket sembako dan nutrisi berkala",
        "Penyaluran pakaian layak dan perlengkapan tidur",
        "Penyediaan kebutuhan sanitasi & perlengkapan higienis harian",
      ],
      schedule: "Dilaksanakan 2 kali sebulan di berbagai panti asuhan & permukiman.",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "LAKARA Mengunjungi",
      tagline: "Waktu, Cerita & Pendampingan",
      description:
        "Menghadirkan waktu, perhatian, dan kebersamaan melalui kunjungan sosial berkala ke panti asuhan dan panti jompo binaan.",
      activities: [
        "Sesi mendengarkan dan obrolan hangat bersama lansia",
        "Pendampingan emosional dan pembinaan karakter anak-anak",
        "Makan bersama dan perayaan momen spesial",
      ],
      schedule: "Setiap akhir pekan secara bergilir bersama para relawan.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
    },
    {
      title: "LAKARA Berkarya",
      tagline: "Aktivitas Kreatif & Edukatif",
      description:
        "Kegiatan kreatif seperti melukis, permainan edukatif, dan kerajinan tangan untuk memantik keceriaan serta percaya diri anak.",
      activities: [
        "Workshop seni rupa, melukis bersama, dan kreasi kriya",
        "Permainan edukasi logika, kerja sama tim, dan kepemimpinan",
        "Pojok baca interaktif dan sesi mendongeng inspiratif",
      ],
      schedule: "Dua minggu sekali bersama fasilitator kreatif.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "LAKARA Bergerak",
      tagline: "Gotong Royong & Aksi Lapangan",
      description:
        "Aksi sosial gotong royong yang melibatkan masyarakat dan relawan untuk merespons kebutuhan lingkungan dan keadaan darurat.",
      activities: [
        "Aksi tanggap darurat bencana lokal dan kebutuhan mendesak",
        "Revitalisasi ruang bermain dan sarana belajar bersama",
        "Gerakan gotong royong kebersihan lingkungan panti",
      ],
      schedule: "Program berkala dan tanggap aksi cepat di lapangan.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section id="program" className="py-28 md:py-36 bg-[#F7F8FA] px-6 md:px-12 border-b border-[#E2E6F0]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <FadeIn direction="up">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#4057A5] mb-3 inline-block">
              Pilar Berkelanjutan
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111318] leading-[1.1] mb-6">
              Dari Kepedulian Menjadi Aksi.
            </h2>
            <p className="text-base sm:text-lg text-[#5C6578] leading-relaxed font-normal">
              Empat program utama yang memastikan kepedulian mengalir dengan konsistensi, rasa hormat, dan dampak nyata.
            </p>
          </FadeIn>
        </div>

        {/* 4 Programs Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((prog, index) => (
            <FadeIn key={prog.title} delay={index * 0.1} direction="up">
              <div className="group rounded-2xl bg-white border border-[#E2E6F0] overflow-hidden hover:border-[#4057A5]/50 transition-all duration-300 flex flex-col h-full justify-between shadow-[0_2px_8px_rgba(17,19,24,0.02)]">
                <div>
                  {/* Photo with subtle label */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#F7F8FA]">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-6 right-6 text-white">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#EEF1FB] block mb-1">
                        {prog.tagline}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        {prog.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Copy */}
                  <div className="p-7 sm:p-8">
                    <p className="text-sm sm:text-base text-[#5C6578] leading-relaxed font-normal mb-6">
                      {prog.description}
                    </p>

                    <div className="space-y-2.5">
                      {prog.activities.slice(0, 2).map((act, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111318]/90 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4057A5] flex-shrink-0" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-7 pb-7 sm:px-8 sm:pb-8 pt-2">
                  <button
                    onClick={() => openProgramModal(prog)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#4057A5] hover:text-[#33488C] group-hover:translate-x-1 transition-all duration-200"
                  >
                    <span>Pelajari lebih lanjut</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
