"use client";

import Link from "next/link";
import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import LakaraLogo from "./LakaraLogo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111318] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#beranda" className="inline-block focus:outline-none">
              <LakaraLogo variant="light" size="lg" />
            </Link>
            <p className="font-serif text-lg text-white/90 italic">
              "Langkah Kebaikan, Rasa dan Asa"
            </p>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm font-normal">
              Komunitas sosial yang bergerak menumbuhkan kepedulian nyata, merangkul sesama, dan menyalakan harapan di
              setiap sudut kehidupan.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#kegiatan" className="hover:text-white transition-colors">
                  Kegiatan
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-white transition-colors">
                  Program
                </a>
              </li>
              <li>
                <a href="#dampak" className="hover:text-white transition-colors">
                  Dampak
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/40">
              Terhubung Bersama Kami
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#4057A5] flex items-center justify-center transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <span>Instagram @lakara.id</span>
              </a>

              <a
                href="https://wa.me/6285706320368?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#4057A5] flex items-center justify-center transition-colors">
                  <MessageCircle size={15} />
                </div>
                <span>WhatsApp (+62 812-3456-7890)</span>
              </a>

              <a
                href="mailto:halo@lakara.org"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#4057A5] flex items-center justify-center transition-colors">
                  <Mail size={15} />
                </div>
                <span>Email: halo@lakara.org</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Requested Closing Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            <p className="font-medium text-white/80 mb-1">
              "Menumbuhkan kebaikan, satu langkah pada satu waktu."
            </p>
            <p className="text-white/40">
              © 2026 LAKARA. Langkah Kebaikan, Rasa dan Asa.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors text-xs"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke atas</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}