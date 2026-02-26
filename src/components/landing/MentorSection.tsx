import mentorPhoto from "@/assets/mentor-photo.jpg";

const tags = ["Systems Architect", "AI Consultant", "B2B/B2C Scaling"];

const MentorSection = () => {
  return (
<<<<<<< HEAD
   <section className="py-24 px-6 relative bg-[#ABCFA8]">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/3">
<div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-[#11361B] shadow-[12px_12px_0_0_#11361B]">
<img alt="Priyank Singh" className="w-full h-full object-cover" src={mentorPhoto}/>
</div>
</div>
<div className="w-full md:w-2/3">
<div className="inline-block bg-white px-4 py-1 rounded-full text-sm font-bold border border-[#11361B] mb-4">YOUR MENTOR</div>
<h2 className="text-4xl md:text-5xl font-bold mb-6">Priyank Singh</h2>
<div className="space-y-4 text-lg font-medium opacity-90 mb-8">
<p>🧡 Making India AI Ready! 🤖</p>
<p>Building Custom AI Systems for scaling B2B, B2C, and D2C Businesses. I don't just teach theory; I build systems that process real money and real data.</p>
</div>
<div className="flex flex-wrap gap-4 text-sm font-bold">
<div className="bg-white/50 px-4 py-2 rounded-lg">Systems Architect</div>
<div className="bg-white/50 px-4 py-2 rounded-lg">AI Consultant</div>
<div className="bg-white/50 px-4 py-2 rounded-lg">B2B/B2C Scaling</div>
</div>
</div>
</div>
</section>
=======
    <section className="w-full px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-card shadow-xl">
            <img
              src={mentorPhoto}
              alt="Priyank Singh"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
            YOUR MENTOR
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-2">Priyank Singh</h2>
          <p className="text-lg mb-4">🧡 Making India AI Ready! 🤖</p>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
            Building Custom AI Systems for scaling B2B, B2C, and D2C Businesses. I don't just teach theory; I build systems that process real money and real data.
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
>>>>>>> 9e563541191026ff876f68a39b0d0aff40cb9734
  );
};

export default MentorSection;
