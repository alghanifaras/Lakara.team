"use client";

import Link from "next/link";
import LakaraLogo from "../LakaraLogo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAFAF7] text-[#111111] pt-20 pb-16 px-6 md:px-12 border-t border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        {/* Left: Brand */}
        <div className="space-y-4">
          <Link href="#beranda" className="inline-block focus:outline-none">
            <LakaraLogo size="md" />
          </Link>
          <p className="font-serif text-lg text-[#111111] italic">
            "Langkah Kebaikan, Rasa dan Asa"
          </p>
          <p className="text-xs text-[#666666] font-light max-w-xs leading-relaxed">
            Menjadi bagian dari kebaikan, satu langkah pada satu waktu.
          </p>
        </div>

        {/* Right: Minimal Editorial Nav + Instagram */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 text-xs uppercase tracking-widest text-[#666666]">
          <a href="#tentang" className="hover:text-[#111111] transition-colors">
            Tentang
          </a>
          <a href="#kegiatan" className="hover:text-[#111111] transition-colors">
            Kegiatan
          </a>
          <a href="#cerita" className="hover:text-[#111111] transition-colors">
            Cerita
          </a>
          <a
            href="https://instagram.com/lakara.team"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4057A5] transition-colors"
          >
            Instagram
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-[#111111] transition-colors cursor-pointer"
          >
            Atas ↑
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#E8E8E2]/60 flex flex-col sm:flex-row justify-between text-[11px] text-[#999999] font-mono">
        <span>© 2026 LAKARA. Komunitas Sosial Kemanusiaan.</span>
        <span className="mt-2 sm:mt-0">Lampung · Indonesia</span>
      </div>
    </footer>
  );
}
