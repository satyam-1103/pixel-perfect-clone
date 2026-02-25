import mentorPhoto from "@/assets/mentor-photo.jpg";

const tags = ["Systems Architect", "AI Consultant", "B2B/B2C Scaling"];

const MentorSection = () => {
  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Mentor image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-card shadow-xl">
            <img
              src={mentorPhoto}
              alt="Your Mentor"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bio content */}
        <div className="text-center md:text-left">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
            YOUR MENTOR
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Your Name Here</h2>
          <p className="text-lg mb-4">🧡 Your tagline goes here! 🤖</p>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
            Building Custom AI Systems for scaling businesses. I don't just teach theory; I build systems that process real data and deliver real results.
          </p>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-primary/10 text-primary rounded-full px-4 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
