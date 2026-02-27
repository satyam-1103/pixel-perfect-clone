import mentorPhoto from "@/assets/priyankSingh.jpeg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full px-6 md:px-10 pt-28 pb-16 md:pb-24 bg-[#ABCFA8]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-6">
        {/* Left content */}
        <div className="flex-1 max-w-2xl">
          {/* Limited seats badge */}
          <div className="inline-block bg-[#11361B] text-[#ABCFA8] px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-fade-in-up">
            <span className="mr-2">🔴</span> Limited Seats Available
             </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 hero-text opacity-1">
                    Learn AI Agents. <br/> Turn Skills Into Side Income
</h1>
<p className="text-lg md:text-xl font-medium max-w-md mb-8 leading-relaxed opacity-1 hero-subtext">
                    Learn to build AI Agents that replace manual effort and get paid for it. Turn skills into a future-proof side income.
                </p>

          <div className="flex flex-col sm:flex-row hero-cta  items-center gap-4">
            <a
              href="/payment"
              className="cta-button inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold rounded-full px-7 py-4 text-base"
            >
              Join Webinar (₹25)
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                <span className="w-10 h-10 rounded-full bg-white border-2 border-[#ABCFA8] flex items-center justify-center text-xs font-bold z-10">AI</span>
                <span className="w-10 h-10 rounded-full bg-[#11361B] border-2 border-[#ABCFA8]  flex items-center justify-center text-white text-xs font-bold z-20">$$</span>
              </div>
              <span className="text-sm font-semibold">Side Hustle Ready</span>
            </div>
          </div>
        </div>

        {/* Right - mentor image with rotating text */}
        <div className="flex-shrink-0 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-xl relative">
            <img
              src={mentorPhoto}
              alt="Priyank Singh - AI Agents Instructor"
              className="w-full h-full object-cover"
              loading="eager"
            />
            
          </div>
          {/* Instructor label */}
          <div className="absolute -bottom-4 right-0 bg-white text-[#11361B] md:-right-4 bg-card rounded-xl border border-[#11361B]/10 transform rotate-3 hover:scale-105 transition duration-500 shadow-lg px-5 py-3">
            <p className="text-sm font-bold">Instructor</p>
            <p className="font-black text-xl">Priyank Singh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
