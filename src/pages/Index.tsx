import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import MarqueeTicker from "@/components/landing/MarqueeTicker";
import ShiftSection from "@/components/landing/ShiftSection";
import CurriculumSection from "@/components/landing/CurriculumSection";
import MentorSection from "@/components/landing/MentorSection";
import EventDetails from "@/components/landing/EventDetails";
import FaqSection from "@/components/landing/FaqSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <ShiftSection />
      <CurriculumSection />
      <MentorSection />
      <EventDetails />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
