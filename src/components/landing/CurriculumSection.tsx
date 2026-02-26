import { CheckIcon } from "@phosphor-icons/react";

const modules = [
  {
    part: "Part 01",
    title: "Understanding AI Agents",
    items: [
      "What Agents really are (beyond prompts)",
      "How systems think & decide",
      "Tools that matter vs tools to ignore",
      "No-code/Low-code approaches",
    ],
    label: null,
  },
  {
    part: "Part 02",
    title: "Real Business Cases",
    items: [
      "Workflows companies pay for",
      "Sales, Support & Ops automation",
      "Identifying High-ROI opportunities",
      "Why most implementations fail",
    ],
    label: "BUSINESS FOCUS",
  },
  {
    part: "Part 03",
    title: "From Skills to Side Hustle",
    items: [
      "How to land clients without being a dev",
      "Pricing logic: Projects vs Retainers",
      "Simple offers you can sell today",
      "Avoiding beginner mistakes",
    ],
    label: null,
  },
];

const CurriculumSection = () => {
  return (
    <section className="w-full px-6 md:px-10 py-20 bg-[#11361B] text-[#ABCFA8] rounded-t-[3rem] -mt-10 relative z-20 md:py-28">
      <div className="max-w-6xl mx-auto">
<<<<<<< HEAD
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">WHAT YOU'LL LEARN</h2>
          <p className="text-xl opacity-80">
=======
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">WHAT YOU'LL LEARN</h2>
          <p className="text-muted-foreground">
>>>>>>> 9e563541191026ff876f68a39b0d0aff40cb9734
            No fluff. No theory-heavy tech talk. Just practical systems.
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition">
<span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4 block">Part 01</span>
<h3 className="text-2xl font-bold text-white mb-4">Understanding AI Agents</h3>
<ul className="space-y-3 opacity-90">
<li className="flex items-start gap-2"><CheckIcon className="text-green-400 mt-1" weight="bold" /> What Agents really are (beyond prompts)</li>
<li className="flex items-start gap-2"><CheckIcon className="text-green-400 mt-1" weight="bold" /> How systems think &amp; decide</li>
<li className="flex items-start gap-2"><CheckIcon className="text-green-400 mt-1" weight="bold" /> Tools that matter vs tools to ignore</li>
<li className="flex items-start gap-2"><CheckIcon className="text-green-400 mt-1" weight="bold" /> No-code/Low-code approaches</li>
</ul>
</div>

<div className="bg-white/10 border-2 border-white/20 p-8 rounded-3xl shadow-xl transform md:-translate-y-4 hover:bg-white/15 transition relative overflow-hidden">
<div className="absolute top-0 right-0 bg-green-400 text-[#11361B] text-xs font-bold px-3 py-1 rounded-bl-xl">BUSINESS FOCUS</div>
<span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4 block">Part 02</span>
<h3 className="text-2xl font-bold text-white mb-4">Real Business Cases</h3>
<ul className="space-y-3 opacity-90">
<li className="flex items-start gap-2"><CheckIcon className="text-[#11361B] bg-green-400 rounded-full p-0.5 text-xs mt-1" weight="bold" /> Workflows companies pay for</li>
<li className="flex items-start gap-2"><CheckIcon className="text-[#11361B] bg-green-400 rounded-full p-0.5 text-xs mt-1" weight="bold" /> Sales, Support &amp; Ops automation</li>
<li className="flex items-start gap-2"><CheckIcon className="text-[#11361B] bg-green-400 rounded-full p-0.5 text-xs mt-1" weight="bold" /> Identifying High-ROI opportunities</li>
<li className="flex items-start gap-2"><CheckIcon className="text-[#11361B] bg-green-400 rounded-full p-0.5 text-xs mt-1" weight="bold" /> Why most implementations fail</li>
</ul>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition">
<span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4 block">Part 03</span>
<h3 className="text-2xl font-bold text-white mb-4">From Skills to Side Hustle</h3>
<ul className="space-y-3 opacity-90">
<li className="flex items-start gap-2"><CheckIcon className="text-green-400 mt-1" weight="bold" /> How to land clients without being a dev</li>
<li className="flex items-start gap-2"><CheckIcon className="text-green-400 mt-1" weight="bold" /> Pricing logic: Projects vs Retainers</li>
<li className="flex items-start gap-2"><CheckIcon className="text-green-400 mt-1" weight="bold" /> Simple offers you can sell today</li>
<li className="flex items-start gap-2"><CheckIcon className="text-green-400 mt-1" weight="bold" /> Avoiding beginner mistakes</li>
</ul>
</div>
</div>

        <div className="text-center mt-16">
          <a className="inline-block bg-white text-[#11361B] px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition shadow-[0_0_40px_rgba(255,255,255,0.2)]" href="https://topmate.io/priyanksinghofficial/1940263/pay" target="_blank">
                    Get The Roadmap for ₹25 <i className="ph-bold ph-arrow-right ml-2"></i>
</a>
=======
        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.part}
              className="card-glass rounded-2xl p-7 shadow-sm border border-white/30 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                  {mod.part}
                </span>
                {mod.label && (
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary rounded-full px-3 py-1">
                    {mod.label}
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl font-bold mb-5">{mod.title}</h3>
              <ul className="space-y-3 flex-1">
                {mod.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#event-details"
            className="cta-button inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold rounded-full px-7 py-4 text-base"
          >
            Get The Roadmap for ₹25
          </a>
>>>>>>> 9e563541191026ff876f68a39b0d0aff40cb9734
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
