const items = [
    "Not a Chatbot",
    "AI SYSTEMS",
    "Workflow Automation",
    "High ROI Skills",
  ];
const MarqueeTicker = () => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative bg-[#11361B] overflow-hidden">
      {/* Rotated strip */}
      <div className="py-6 pb-8 text-[#ABCFA8] -rotate-1 origin-left w-[110%] translate-y-4 -ml-[5%] ">
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
    </div>
  );
};

export default MarqueeTicker;
