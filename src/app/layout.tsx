import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "LAKARA — Langkah Kebaikan, Rasa dan Asa",
  description:
    "LAKARA adalah ruang bagi mereka yang ingin berbuat baik, bersama.",

  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    title: "LAKARA — Langkah Kebaikan, Rasa dan Asa",
    description:
      "Ruang bagi mereka yang ingin berbuat baik, bersama. Langkah kecil membawa arti besar.",
    url: "https://lakara.org",
    siteName: "LAKARA",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans bg-[#FAFAF7] text-[#111111] min-h-screen flex flex-col antialiased selection:bg-[#4057A5] selection:text-white`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}