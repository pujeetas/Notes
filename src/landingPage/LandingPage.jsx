import { useNavigate } from "react-router-dom";
import FeatureShowcase from "./FeatureShowcase";
import FAQ from "./FAQ";
import ScreenshotSection from "./ScreenshotSection";
import WhyDailyDeck from "./WhyDailyDeck";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <WhyDailyDeck />
      <FeatureShowcase />
      <ScreenshotSection />
      <FAQ />
      <Footer />
    </div>
  );
}
