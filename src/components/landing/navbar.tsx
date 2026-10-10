"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LakaraLogo from "../LakaraLogo";
import { useModal } from "../ModalContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { openContributionModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Tentang", href: "#tentang" },
    { label: "Kegiatan", href: "#kegiatan" },
    { label: "Cerita", href: "#cerita" },
    { label: "Dampak", href: "#dampak" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E8E8E2] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Left: LAKARA Logo */}
          <Link
            href="#beranda"
            className="group focus:outline-none"
            aria-label="Kembali ke atas"
          >
            <LakaraLogo size="md" />
          </Link>

          {/* Right: Editorial Nav + Small CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav
              aria-label="Navigasi Utama"
              className="flex items-center gap-7 text-xs uppercase tracking-widest font-medium text-[#666666]"
            >
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#111111] transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => openContributionModal("relawan")}
              className="px-4 py-2 bg-[#4057A5] hover:bg-[#33488C] text-white text-xs uppercase tracking-widest font-medium rounded transition-colors duration-200"
            >
              Gabung
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-[#111111]"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Buka menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#111111]/30 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAFAF7] w-full p-8 flex flex-col border-b border-[#E8E8E2]"
            >
              <div className="flex justify-between items-center mb-10">
                <LakaraLogo size="md" />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-[#111111]"
                  aria-label="Tutup menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex flex-col gap-5 py-4">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-serif text-3xl text-[#111111] hover:text-[#4057A5] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-[#E8E8E2]">
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    openContributionModal("relawan");
                  }}
                  className="w-full py-3.5 bg-[#4057A5] text-white text-xs uppercase tracking-widest font-medium rounded text-center block"
                >
                  Gabung Bersama Kami
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
