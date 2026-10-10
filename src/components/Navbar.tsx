"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useModal } from "./ModalContext";
import LakaraLogo from "./LakaraLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { openContributionModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Kegiatan", href: "#kegiatan" },
    { label: "Program", href: "#program" },
    { label: "Dampak", href: "#dampak" },
    { label: "Cerita", href: "#cerita" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E2E6F0] py-3.5 shadow-[0_2px_12px_-4px_rgba(17,19,24,0.04)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo on Left */}
          <Link
            href="#beranda"
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4057A5] rounded-lg"
          >
            <LakaraLogo size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C6578]"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#111318] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Primary CTA on Right */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openContributionModal("relawan")}
              className="px-5 py-2.5 bg-[#4057A5] hover:bg-[#33488C] text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              Gabung Bersama Kami
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden w-10 h-10 rounded-xl bg-white border border-[#E2E6F0] flex items-center justify-center text-[#111318] hover:bg-[#F7F8FA] transition-colors"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={isMobileOpen}
          >
            <Menu size={20} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Sheet */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#111318]/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full rounded-b-2xl shadow-xl p-6 sm:p-8 flex flex-col border-b border-[#E2E6F0]"
            >
              <div className="flex justify-between items-center mb-8">
                <LakaraLogo size="md" />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-9 h-9 rounded-xl bg-[#F7F8FA] border border-[#E2E6F0] flex items-center justify-center text-[#111318] hover:bg-[#EEF1FB] transition-colors"
                  aria-label="Tutup menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="flex flex-col gap-2 py-2">
                {navLinks.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-between text-xl font-serif text-[#111318] hover:text-[#4057A5] py-2.5 border-b border-[#F0F2F6] transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={16} className="text-[#8E98AA]" />
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8 pt-4">
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    openContributionModal("relawan");
                  }}
                  className="w-full py-3.5 bg-[#4057A5] hover:bg-[#33488C] text-white text-sm font-medium rounded-xl transition-all duration-200 text-center block shadow-sm"
                >
                  Gabung Bersama Kami
                </button>
                <p className="text-center text-xs text-[#5C6578] mt-3">
                  Menumbuhkan kebaikan, satu langkah pada satu waktu.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}