"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useModal } from "./ModalContext";

interface RecentItem {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  tag: string;
}

const recentItems: RecentItem[] = [
  {
    id: "1",
    title: "Berbagi Cerita di Rumah Singgah",
    location: "Jakarta Barat",
    date: "14 Februari 2026",
    description: "Sehari untuk berbagi cerita, bermain bersama anak-anak, dan menciptakan ruang kecil untuk merasa didengar.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop",
    tag: "Kunjungan & Edukasi",
  },
  {
    id: "2",
    title: "Hangatnya Dapur Bersama",
    location: "Tangerang",
    date: "28 Januari 2026",
    description: "Menyiapkan dan mendistribusikan ratusan paket makanan bergizi bagi lansia mandiri dan pekerja informal.",
    image: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=2064&auto=format&fit=crop",
    tag: "Pangan & Nutrisi",
  },
  {
    id: "3",
    title: "Warna Ceria Taman Belajar",
    location: "Depok",
    date: "12 Januari 2026",
    description: "Lokakarya seni rupa sederhana dan mewarnai impian bersama puluhan anak-anak panti asuhan.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2070&auto=format&fit=crop",
    tag: "Kreativitas Anak",
  },
  {
    id: "4",
    title: "Pojok Baca & Literasi Asa",
    location: "Bogor",
    date: "22 Desember 2025",
    description: "Menyalurkan buku bacaan inspiratif, rak mini, dan sesi mendongeng interaktif yang menggerakkan mimpi.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop",
    tag: "Literasi Komunitas",
  },
];

export default function RecentActivities() {
  const { openContributionModal } = useModal();
  const [selectedPhoto, setSelectedPhoto] = useState<RecentItem | null>(null);

  return (
    <section className="py-28 md:py-36 bg-[#F7F8FA] px-6 md:px-12 border-b border-[#E2E6F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <FadeIn direction="up">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#4057A5] mb-3 block">
                Dokumentasi & Galeri
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111318] leading-[1.1]">
                Kegiatan Terbaru
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.1}>
            <button
              onClick={() => openContributionModal("relawan")}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#111318] hover:text-[#4057A5] transition-colors group"
            >
              <span>Lihat semua kegiatan</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
          </FadeIn>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentItems.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1} direction="up" className="h-full">
              <article
                onClick={() => setSelectedPhoto(item)}
                className="group cursor-pointer rounded-2xl bg-white border border-[#E2E6F0] overflow-hidden hover:border-[#4057A5]/50 transition-all duration-300 flex flex-col h-full justify-between shadow-[0_2px_8px_rgba(17,19,24,0.02)]"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#F7F8FA]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <span className="absolute top-3.5 left-3.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/95 text-[#111318]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Metadata & Title */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[#5C6578] mb-3 flex-wrap">
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={13} className="text-[#4057A5]" />
                        {item.location}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={13} className="text-[#8E98AA]" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold tracking-tight text-[#111318] group-hover:text-[#4057A5] transition-colors duration-200 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#5C6578] leading-relaxed font-normal">
                      "{item.description}"
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-1">
                  <span className="text-xs font-semibold text-[#4057A5] group-hover:underline">
                    Buka Dokumentasi Foto →
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-80 sm:h-96 w-full">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Tutup foto"
              >
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 text-xs text-[#5C6578] mb-2">
                <span>{selectedPhoto.location}</span>
                <span>•</span>
                <span>{selectedPhoto.date}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#111318] mb-2">{selectedPhoto.title}</h3>
              <p className="text-[#5C6578] text-sm leading-relaxed mb-6">{selectedPhoto.description}</p>
              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  openContributionModal("relawan");
                }}
                className="px-6 py-3 bg-[#4057A5] text-white text-xs font-semibold rounded-xl hover:bg-[#33488C] transition-colors"
              >
                Bergabung di Kegiatan Serupa
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
