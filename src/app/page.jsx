import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import CurrentFocus from "../components/CurrentFocus";
import RecentMedia from "../components/RecentMedia";
import ShortBio from "../components/ShortBio";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 pt-12 pb-8">
        <HeroSection />
        <CurrentFocus />
        <RecentMedia />
        <ShortBio />
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
