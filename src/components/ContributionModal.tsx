"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, HandHeart, Building2, CheckCircle2, MessageCircle } from "lucide-react";
import { useModal, ContributionType } from "./ModalContext";

export default function ContributionModal() {
  const { isContributionOpen, selectedContributionType, closeContributionModal } = useModal();
  const [activeTab, setActiveTab] = useState<ContributionType>(selectedContributionType);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setActiveTab(selectedContributionType);
  }, [selectedContributionType]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContributionModal();
    };
    if (isContributionOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isContributionOpen, closeContributionModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const typeLabel =
      activeTab === "relawan"
        ? "Relawan Kegiatan Sosial"
        : activeTab === "donasi"
        ? "Donasi / Penyaluran Kebutuhan"
        : "Kemitraan & Kolaborasi Komunitas";

    const text = encodeURIComponent(
      `Halo Tim LAKARA,\n\nSaya ingin bergabung & berkontribusi dalam program LAKARA.\n\n• Jenis: ${typeLabel}\n• Nama: ${name || "-"}\n• Kontak: ${contact || "-"}\n• Domisili: ${city || "-"}\n• Catatan: ${note || "Ingin berdiskusi lebih lanjut."}\n\nTerima kasih atas ruang kebaikan ini.`
    );
    window.open(`https://wa.me/6285706320368?text=${text}`, "_blank");
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setName("");
    setContact("");
    setCity("");
    setNote("");
    closeContributionModal();
  };

  return (
    <AnimatePresence>
      {isContributionOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#111318]/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-[#E2E6F0] overflow-hidden z-10 flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="px-6 sm:px-8 pt-7 pb-4 flex items-start justify-between border-b border-[#F0F2F6]">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#4057A5] mb-1 block">
                  Langkah Kebaikan
                </span>
                <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#111318]">
                  Gabung Bersama Kami
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6578] mt-1">
                  Kebaikan Anda adalah cahaya bagi mereka yang menanti uluran tangan.
                </p>
              </div>
              <button
                onClick={resetAndClose}
                className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E2E6F0] text-[#111318] hover:bg-[#EEF1FB] flex items-center justify-center transition-colors -mr-1"
                aria-label="Tutup dialog"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
              {isSubmitted ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EEF1FB] text-[#4057A5] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#111318]">Terima Kasih atas Niat Baikmu</h4>
                  <p className="text-[#5C6578] max-w-sm mx-auto text-sm leading-relaxed">
                    Setiap langkah, sekecil apa pun, bernilai sangat besar bagi kami. Tim LAKARA akan segera menghubungi Anda
                    melalui kontak yang dicantumkan.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#4057A5] text-white rounded-xl font-medium text-sm hover:bg-[#33488C] transition-colors"
                    >
                      <MessageCircle size={15} />
                      Konfirmasi via WhatsApp
                    </button>
                    <button
                      onClick={resetAndClose}
                      className="px-5 py-2.5 rounded-xl text-sm font-medium text-[#111318] bg-[#F7F8FA] hover:bg-[#E2E6F0] transition-colors"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Segmented Tab Selector */}
                  <div className="p-1 bg-[#F7F8FA] rounded-xl border border-[#E2E6F0] grid grid-cols-3 gap-1 text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setActiveTab("relawan")}
                      className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg transition-all ${
                        activeTab === "relawan"
                          ? "bg-white text-[#111318] shadow-sm font-semibold"
                          : "text-[#5C6578] hover:text-[#111318]"
                      }`}
                    >
                      <HandHeart size={15} className={activeTab === "relawan" ? "text-[#4057A5]" : ""} />
                      <span>Relawan</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("donasi")}
                      className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg transition-all ${
                        activeTab === "donasi"
                          ? "bg-white text-[#111318] shadow-sm font-semibold"
                          : "text-[#5C6578] hover:text-[#111318]"
                      }`}
                    >
                      <Heart size={15} className={activeTab === "donasi" ? "text-[#4057A5]" : ""} />
                      <span>Donasi</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("mitra")}
                      className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg transition-all ${
                        activeTab === "mitra"
                          ? "bg-white text-[#111318] shadow-sm font-semibold"
                          : "text-[#5C6578] hover:text-[#111318]"
                      }`}
                    >
                      <Building2 size={15} className={activeTab === "mitra" ? "text-[#4057A5]" : ""} />
                      <span>Mitra</span>
                    </button>
                  </div>

                  {/* Contextual Description */}
                  <div className="p-3.5 rounded-xl bg-[#EEF1FB]/60 border border-[#EEF1FB] text-xs text-[#5C6578] leading-relaxed">
                    {activeTab === "relawan" && (
                      <p>
                        ✨ Bergabunglah sebagai relawan kegiatan lapangan: mendampingi anak panti, berbagi waktu mengajar,
                        hingga menyalurkan bantuan secara langsung.
                      </p>
                    )}
                    {activeTab === "donasi" && (
                      <p>
                        💛 Dukung penyediaan paket sembako, nutrisi, perlengkapan sekolah, dan obat-obatan secara berkala dan
                        transparan.
                      </p>
                    )}
                    {activeTab === "mitra" && (
                      <p>
                        🤝 Buka ruang kolaborasi untuk komunitas, sekolah, kampus, maupun program CSR korporasi untuk
                        dampak sosial yang lebih luas.
                      </p>
                    )}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label htmlFor="fullname" className="block text-[11px] font-semibold uppercase tracking-wider text-[#111318] mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        id="fullname"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Rian Anggara"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E6F0] bg-white text-[#111318] placeholder-[#8E98AA] text-sm focus:outline-none focus:ring-2 focus:ring-[#4057A5]/20 focus:border-[#4057A5] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label htmlFor="contact" className="block text-[11px] font-semibold uppercase tracking-wider text-[#111318] mb-1">
                          WhatsApp / Email
                        </label>
                        <input
                          id="contact"
                          type="text"
                          required
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="0812-XXXX-XXXX"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E6F0] bg-white text-[#111318] placeholder-[#8E98AA] text-sm focus:outline-none focus:ring-2 focus:ring-[#4057A5]/20 focus:border-[#4057A5] transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-[11px] font-semibold uppercase tracking-wider text-[#111318] mb-1">
                          Kota Domisili
                        </label>
                        <input
                          id="city"
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Jakarta / Tangerang / dsb."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E6F0] bg-white text-[#111318] placeholder-[#8E98AA] text-sm focus:outline-none focus:ring-2 focus:ring-[#4057A5]/20 focus:border-[#4057A5] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-[11px] font-semibold uppercase tracking-wider text-[#111318] mb-1">
                        {activeTab === "relawan"
                          ? "Keahlian atau Ketersediaan Waktu"
                          : activeTab === "donasi"
                          ? "Bentuk Donasi yang Diinginkan"
                          : "Nama Lembaga / Ide Kolaborasi"}
                      </label>
                      <textarea
                        id="notes"
                        rows={2}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Tuliskan pesan singkat atau harapan Anda..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E6F0] bg-white text-[#111318] placeholder-[#8E98AA] text-sm focus:outline-none focus:ring-2 focus:ring-[#4057A5]/20 focus:border-[#4057A5] transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                      <button
                        type="submit"
                        className="w-full py-3 px-5 bg-[#4057A5] hover:bg-[#33488C] text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-sm"
                      >
                        Kirim Formulir
                      </button>
                      <button
                        type="button"
                        onClick={handleWhatsAppRedirect}
                        className="w-full py-3 px-5 border border-[#E2E6F0] bg-[#F7F8FA] hover:bg-white text-[#111318] font-medium text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={15} className="text-emerald-600" />
                        Chat via WhatsApp
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
