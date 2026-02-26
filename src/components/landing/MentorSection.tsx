import mentorPhoto from "@/assets/mentor-photo.jpg";

const tags = ["Systems Architect", "AI Consultant", "B2B/B2C Scaling"];

const MentorSection = () => {
  return (
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
  );
};

export default MentorSection;
