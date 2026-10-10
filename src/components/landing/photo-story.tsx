"use client";

import Image from "next/image";
import BlurFade from "../ui/blur-fade";
import ProgressiveBlur from "../ui/progressive-blur";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
    alt: "Momen kehangatan bersama anak-anak dalam kegiatan sosial LAKARA",
    caption: "Kunjungan Panti · 2026",
    col: "col-span-2",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop",
    alt: "Relawan LAKARA dalam bakti sosial bersama masyarakat",
    caption: "Bakti Sosial · 2026",
    col: "col-span-1",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1074&auto=format&fit=crop",
    alt: "Berbagi kebutuhan pokok kepada warga yang membutuhkan",
    caption: "Berbagi Sembako · 2026",
    col: "col-span-1",
    tall: false,
  },
];

export default function PhotoStory() {
  return (
    <section id="cerita" className="py-24 sm:py-32 md:py-40 border-t border-[#E8E8E2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <BlurFade delay={0.05} duration={0.7}>
              <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#999999] block mb-5">
                Catatan Hati
              </span>
            </BlurFade>
            <BlurFade delay={0.15} duration={0.85}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal tracking-tight text-[#111111] leading-[1.14]">
                Yang kami ingat bukan berapa banyak yang kami beri.
              </h2>
            </BlurFade>
          </div>

          <BlurFade delay={0.28} duration={0.85} className="md:max-w-[280px] md:text-right flex-shrink-0">
            <p className="font-serif text-xl sm:text-2xl italic text-[#4057A5] font-normal leading-[1.35]">
              Tetapi siapa yang sempat tersenyum bersama kita.
            </p>
            <div className="mt-4 w-8 h-px bg-[#4057A5] md:ml-auto" />
          </BlurFade>
        </div>

        {/* Editorial Photo Grid — asymmetric, cinematic */}
        <BlurFade delay={0.3} duration={0.95} yOffset={24}>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {/* Hero photo — spans 2 columns, tall */}
            <div className="col-span-3 md:col-span-2 relative h-[320px] sm:h-[440px] md:h-[580px] bg-[#E8E8E2] overflow-hidden">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
              <ProgressiveBlur direction="bottom" className="h-24 top-auto" />
              <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/90 bg-black/30 px-2.5 py-1 backdrop-blur-sm">
                {photos[0].caption}
              </div>
            </div>

            {/* Two smaller photos stacked on the right */}
            <div className="col-span-3 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-2 sm:gap-3 md:gap-4">
              {photos.slice(1).map((p) => (
                <div
                  key={p.caption}
                  className="relative h-[160px] sm:h-[212px] md:h-[283px] bg-[#E8E8E2] overflow-hidden"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 32vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <ProgressiveBlur direction="bottom" className="h-16 top-auto opacity-80" />
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/90 bg-black/30 px-2 py-0.5 backdrop-blur-sm">
                    {p.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Pull Quote */}
        <BlurFade delay={0.5} duration={0.85} yOffset={16}>
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 border-t border-[#E8E8E2] pt-12">
            <span className="font-serif text-5xl sm:text-6xl text-[#E8E8E2] leading-none select-none flex-shrink-0">
              "
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#111111] font-normal italic leading-[1.4] max-w-2xl">
              Kehadiran kita — bukan harta yang kita bawa — adalah yang paling mereka butuhkan.
            </blockquote>
            <div className="md:ml-auto flex-shrink-0 text-right">
              <p className="text-xs uppercase tracking-widest text-[#999999] font-medium">
                Relawan LAKARA
              </p>
              <p className="text-[11px] text-[#BBBBBB] mt-0.5">Kunjungan Panti, 2026</p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
