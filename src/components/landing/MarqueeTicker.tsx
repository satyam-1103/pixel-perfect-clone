const items = [
    "Not a Chatbot",
    "AI SYSTEMS",
    "Workflow Automation",
    "High ROI Skills",
  ];
const MarqueeTicker = () => {
  

  // Repeat items for seamless marquee effect
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-[#11361B] text-[#ABCFA8] py-6 overflow-hidden transform -rotate-1 origin-left">
      <div className="whitespace-nowrap flex gap-12 animate-[scroll_20s_linear_infinite]">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-2xl font-black uppercase flex items-center gap-6"
          >
            {item}
            <span>•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
