"use client";

import BlurFade from "../ui/blur-fade";

export default function AboutLakara() {
  return (
    <section id="tentang" className="py-28 sm:py-36 md:py-44 px-6 md:px-12 border-t border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: LAKARA Large Typography */}
          <div className="lg:col-span-5">
            <BlurFade delay={0.1} duration={0.8}>
              <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#999999] block mb-6">
                Identitas
              </span>
              <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-[#111111] leading-none">
                LAKARA
              </h2>
            </BlurFade>
          </div>

          {/* Right: Asymmetric Narrative */}
          <div className="lg:col-span-7 space-y-8 lg:pt-8">
            <BlurFade delay={0.2} duration={0.8}>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111111] leading-[1.15]">
                Langkah Kebaikan, <br />
                Rasa dan Asa.
              </h3>
            </BlurFade>

            <BlurFade delay={0.3} duration={0.8}>
              <p className="text-lg sm:text-xl md:text-2xl text-[#444444] font-light leading-relaxed max-w-xl">
                LAKARA tumbuh dari hal sederhana: keinginan untuk hadir, berbagi waktu, dan membuat ruang kecil menjadi
                sedikit lebih berarti.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} duration={0.8} className="pt-6">
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-lg font-light">
                Kami bukan organisasi berjarak. Kami adalah kawan jalan bagi siapa pun yang ingin menyisihkan sebagian
                waktunya—mendampingi anak-anak di panti, berbagi kebutuhan pokok, atau sekadar duduk bersama mendengarkan
                cerita mereka yang kerap terlupa.
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
