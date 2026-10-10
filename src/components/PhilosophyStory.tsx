"use client";

import FadeIn from "./FadeIn";

export default function PhilosophyStory() {
  const words = [
    {
      word: "Langkah.",
      detail: "Mengambil tindakan nyata, sekecil apa pun permulaannya.",
    },
    {
      word: "Kebaikan.",
      detail: "Melandasi setiap niat dengan ketulusan yang murni.",
    },
    {
      word: "Rasa.",
      detail: "Membawa kehangatan empati dan kehadiran yang utuh.",
    },
    {
      word: "Asa.",
      detail: "Menyalakan harapan bersama menuju hari esok yang bermartabat.",
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-[#EEF1FB] px-6 md:px-12 border-b border-[#E2E6F0] relative overflow-hidden">
      {/* Subtle organic sail / wave accent in background */}
      <div
        className="absolute -left-20 bottom-0 w-[420px] h-[420px] rounded-full bg-white/60 blur-[60px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <FadeIn direction="up" className="mb-8 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#4057A5] block">
            Makna Nama & Identitas
          </span>
        </FadeIn>

        {/* Large Typographic Composition: Langkah. Kebaikan. Rasa. Asa. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-16 md:mb-20">
          {words.map((item, idx) => (
            <FadeIn key={item.word} delay={idx * 0.1} direction="up" className="flex flex-col">
              <span className="text-xs font-mono font-semibold text-[#4057A5] mb-2">0{idx + 1}</span>
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111318] mb-4">
                {item.word}
              </h3>
              <p className="text-sm text-[#5C6578] leading-relaxed font-normal">
                {item.detail}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Editorial Narrative Card */}
        <FadeIn delay={0.4} direction="up">
          <div className="rounded-2xl bg-white border border-[#E2E6F0] p-8 sm:p-12 shadow-[0_4px_20px_rgba(17,19,24,0.02)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h4 className="font-serif text-2xl sm:text-3xl text-[#111318] font-bold mb-4">
                  Mengapa LAKARA Hadir?
                </h4>
                <p className="text-base sm:text-lg text-[#5C6578] leading-relaxed font-normal">
                  LAKARA lahir dari sebuah keyakinan bahwa harapan tidak diciptakan oleh satu gerakan raksasa yang sesaat,
                  melainkan oleh ribuan langkah kecil yang konsisten. Dengan membawa empati di dada dan ketulusan dalam
                  tindakan, kami membuka ruang bagi siapa pun untuk saling merangkul, berbagi beban, dan merajut kembali rasa
                  kemanusiaan.
                </p>
              </div>

              <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-[#E2E6F0]">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-[#8E98AA] font-semibold">
                    Prinsip Komunitas
                  </div>
                  <div className="text-sm text-[#111318] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4057A5]" />
                    Inklusif & Terbuka untuk Semua
                  </div>
                  <div className="text-sm text-[#111318] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4057A5]" />
                    Transparan & Bertanggung Jawab
                  </div>
                  <div className="text-sm text-[#111318] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4057A5]" />
                    Berakar pada Kebutuhan Lapangan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
