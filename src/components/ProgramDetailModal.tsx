"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useModal } from "./ModalContext";

export default function ProgramDetailModal() {
  const { activeProgram, closeProgramModal, openContributionModal } = useModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProgramModal();
    };
    if (activeProgram) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProgram, closeProgramModal]);

  if (!activeProgram) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeProgramModal}
          className="fixed inset-0 bg-[#111318]/50 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl border border-[#E2E6F0] overflow-hidden z-10 flex flex-col max-h-[90vh]"
          role="dialog"
          aria-modal="true"
        >
          {/* Cover Image */}
          <div className="relative h-52 sm:h-60 w-full bg-[#F7F8FA]">
            <Image
              src={activeProgram.image}
              alt={activeProgram.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/70 via-transparent to-black/20" />

            <button
              onClick={closeProgramModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md text-white hover:bg-black/60 flex items-center justify-center transition-colors"
              aria-label="Tutup dialog"
            >
              <X size={16} />
            </button>

            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="inline-block text-[11px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md mb-1.5">
                Program Unggulan
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">{activeProgram.title}</h3>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-7 overflow-y-auto space-y-5">
            <p className="text-sm sm:text-base text-[#111318] leading-relaxed font-normal">
              {activeProgram.description}
            </p>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#5C6578] mb-2.5">
                Fokus Kegiatan & Implementasi
              </h4>
              <div className="space-y-2">
                {activeProgram.activities.map((act, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111318]/90">
                    <div className="w-4 h-4 rounded-full bg-[#EEF1FB] text-[#4057A5] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={2.5} />
                    </div>
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E2E6F0] flex items-center gap-2.5 text-xs sm:text-sm text-[#5C6578]">
              <Calendar size={16} className="text-[#4057A5] flex-shrink-0" />
              <span>
                <strong className="text-[#111318] font-medium">Jadwal Pelaksanaan: </strong>
                {activeProgram.schedule}
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  closeProgramModal();
                  openContributionModal("relawan");
                }}
                className="flex-1 py-3 px-5 bg-[#4057A5] text-white font-medium text-sm rounded-xl hover:bg-[#33488C] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                Ikut Berkontribusi di Program Ini
                <ArrowRight size={15} />
              </button>
              <button
                onClick={closeProgramModal}
                className="py-3 px-5 rounded-xl text-sm font-medium text-[#111318] bg-[#F7F8FA] hover:bg-[#E2E6F0] transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
