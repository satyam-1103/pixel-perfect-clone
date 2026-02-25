const items = [
  "NOT A CHATBOT",
  "AI SYSTEMS",
  "WORKFLOW AUTOMATION",
  "HIGH ROI SKILLS",
];

const MarqueeTicker = () => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-marquee-bg text-marquee-fg py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-6 text-sm md:text-base font-semibold tracking-wider uppercase flex items-center gap-6">
            {item}
            <span className="text-marquee-fg/50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
