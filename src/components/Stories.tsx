"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import { Quote } from "lucide-react";

interface Story {
  quote: string;
  reflection: string;
  author: string;
  role: string;
  avatar: string;
}

const stories: Story[] = [
  {
    quote: "Kami datang untuk berbagi, tetapi pulang membawa lebih banyak rasa syukur.",
    reflection:
      "Awalnya saya merasa sedang menolong mereka. Tetapi ketika duduk bersama adik-adik panti, mendengarkan mereka bernyanyi dengan mata berbinar, hati saya yang justru dipulihkan.",
    author: "Amanda Saraswati",
    role: "Relawan Pendamping Panti",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "Tawa anak-anak hari itu mengingatkan kami bahwa kehadiran utuh jauh lebih berharga daripada sekadar materi.",
    reflection:
      "Anak-anak tidak meminta hal yang rumit. Mereka hanya ingin ditemani bermain, diajak bercerita, dan didengarkan impiannya tanpa dihakimi.",
    author: "Dimas Suryo Pratama",
    role: "Koordinator Relawan Lapangan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    quote: "Di LAKARA, saya menemukan ruang di mana empati bukan sekadar kata-kata, melainkan tindakan nyata yang tenang.",
    reflection:
      "Tidak ada sorot kamera berlebih atau kepalsuan. Semua bergerak dengan ketulusan yang murni untuk menyentuh kehidupan sesama.",
    author: "Nurul Fitriani",
    role: "Sahabat & Donatur Komunitas",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Stories() {
  return (
    <section id="cerita" className="py-28 md:py-36 bg-white px-6 md:px-12 border-b border-[#E2E6F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <FadeIn direction="up">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#4057A5] mb-3 inline-block">
              Cerita & Refleksi
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111318] leading-[1.1] mb-6">
              "Setiap pertemuan meninggalkan cerita."
            </h2>
            <p className="text-base sm:text-lg text-[#5C6578] leading-relaxed font-normal">
              Bukan sekadar agenda seremonial, setiap momen bersama LAKARA adalah rajutan kisah kemanusiaan yang berakar di hati.
            </p>
          </FadeIn>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((s, idx) => (
            <FadeIn
              key={s.author}
              delay={idx * 0.1}
              direction="up"
              className="p-8 sm:p-9 rounded-2xl bg-[#F7F8FA] border border-[#E2E6F0] flex flex-col justify-between hover:bg-white hover:border-[#4057A5]/40 transition-all duration-300"
            >
              <div>
                <Quote size={24} className="text-[#4057A5]/60 mb-5" />
                <blockquote className="font-serif text-xl sm:text-2xl font-bold text-[#111318] leading-snug tracking-tight mb-5">
                  "{s.quote}"
                </blockquote>
                <p className="text-sm text-[#5C6578] leading-relaxed font-normal mb-8">
                  {s.reflection}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#E2E6F0] flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#E2E6F0] flex-shrink-0">
                  <Image
                    src={s.avatar}
                    alt={s.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#111318]">{s.author}</h4>
                  <p className="text-xs text-[#8E98AA]">{s.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
