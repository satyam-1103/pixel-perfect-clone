import mentorPhoto from "@/assets/mentor-photo.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full px-6 md:px-10 pt-8 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-6">
        {/* Left content */}
        <div className="flex-1 max-w-2xl">
          {/* Limited seats badge */}
          <div className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse-dot" />
            <span className="text-sm font-medium">Limited Seats Available</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Learn AI Agents.
            <br />
            <span className="block">Turn Skills</span>
            <span className="block">Into Side</span>
            <span className="block">Income</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-md mb-8">
            Learn to build AI Agents that replace manual effort and get paid for it. Turn skills into a future-proof side income.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#event-details"
              className="cta-button inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold rounded-full px-7 py-4 text-base"
            >
              Join Webinar (₹25)
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-bold">AI</span>
                <span className="w-8 h-8 rounded-full bg-foreground/15 flex items-center justify-center text-xs font-bold">$$</span>
              </div>
              <span className="text-sm font-medium">Side Hustle Ready</span>
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
            {/* Rotating text around image */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" viewBox="0 0 300 300">
              <defs>
                <path id="circlePath" d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
              </defs>
              <text fill="hsl(var(--foreground))" fontSize="12" fontWeight="700" letterSpacing="3">
                <textPath href="#circlePath">LEARN AI AGENTS • AUTOMATE &amp; EARN •&nbsp;</textPath>
              </text>
            </svg>
          </div>
          {/* Instructor label */}
          <div className="absolute bottom-4 right-0 md:-right-4 bg-card rounded-xl shadow-lg px-5 py-3 backdrop-blur-sm border border-white/30">
            <p className="text-xs text-muted-foreground">Instructor</p>
            <p className="font-bold text-sm">Priyank Singh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
