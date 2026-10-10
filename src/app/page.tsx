import CTA from "@/components/CTA";
import AboutLakara from "@/components/landing/about-lakara";
import ActivityIndex from "@/components/landing/activity-index";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import IntroStatement from "@/components/landing/intro-statement";
import JoinSection from "@/components/landing/join-section";
import MarqueeBanner from "@/components/landing/marquee-banner";
import Navbar from "@/components/landing/navbar";
import PhotoStory from "@/components/landing/photo-story";
import WordmarkSection from "@/components/landing/wordmark-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#FAFAF7] text-[#111111]">
      <Navbar />
      <main>
        <Hero />
        <IntroStatement />
        <AboutLakara />
        <ActivityIndex />
        <PhotoStory />
        <MarqueeBanner />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}