"use client";

import FadeIn from "./FadeIn";

export default function Impact() {
  const stats = [
    {
      num: "10+",
      label: "Kegiatan Sosial",
      detail: "Inisiatif kemanusiaan yang telah terlaksana",
    },
    {
      num: "100+",
      label: "Penerima Manfaat",
      detail: "Anak panti, lansia, dan keluarga binaan",
    },
    {
      num: "20+",
      label: "Relawan Terlibat",
      detail: "Insan yang mendedikasikan waktu & hati",
    },
  ];

  return (
    <section id="dampak" className="py-28 md:py-36 bg-white px-6 md:px-12 border-b border-[#E2E6F0] relative overflow-hidden">
      {/* Subtle organic light blue ambient circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#EEF1FB] rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto text-center">
        {/* Editorial Headline */}
        <div className="max-w-3xl mx-auto mb-20 md:mb-24">
          <FadeIn direction="up">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#4057A5] mb-3 block">
              Dampak Bersama
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111318] leading-[1.12]">
              Karena Kebaikan <br />
              <span className="italic text-[#4057A5] font-normal">Tumbuh Saat Dibagikan.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Minimal Editorial Statistics Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} direction="up" className="flex flex-col items-center">
              <span className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#4057A5] mb-2 leading-none">
                {stat.num}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-[#111318] mb-1">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6578] max-w-[200px] leading-relaxed">
                {stat.detail}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Editorial Subtext */}
        <FadeIn delay={0.35} direction="up" className="mt-16 pt-10 border-t border-[#E2E6F0] max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-[#8E98AA] leading-relaxed font-normal">
            Data terstruktur untuk pencatatan dampak berkala. Setiap angka mewakili senyuman, kebersamaan, dan asa yang
            tumbuh nyata di lapangan.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}