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
    <section className="w-full px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">WHAT YOU'LL LEARN</h2>
          <p className="text-muted-foreground">
            No fluff. No theory-heavy tech talk. Just practical systems.
          </p>
        </div>

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
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
