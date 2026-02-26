import { RobotIcon, CurrencyInrIcon } from "@phosphor-icons/react";
const ShiftSection = () => {
  return (
    <section className="w-full px-6 md:px-10  bg-[#ABCFA8]">
      <div className="py-24 px-6 max-w-4xl mx-auto text-center">
        <span className="text-sm font-bold tracking-widest uppercase mb-4 block opacity-70">The Shift is Happening</span>

        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Most people use AI to <span className="italic font-serif">assist</span> their work.<br/>
            A small group uses AI to <span className="bg-[#11361B] text-white px-2">replace work.</span>
</h2>

        <p className="text-xl opacity-80 max-w-2xl mx-auto mb-12">
            This live session teaches you <strong>both sides of the equation</strong>: How AI Agents actually work, and how to turn that skill into clients, projects, and revenue.
        </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="card-glass p-8 rounded-3xl">
<div className="w-12 h-12 bg-[#11361B] rounded-full flex items-center justify-center text-white text-2xl mb-4">
<RobotIcon size={32} weight="bold" />
</div>
<h3 className="text-xl font-bold mb-2">Beyond Chatbots</h3>
<p className="opacity-80">Agents take actions, make decisions, and execute tasks end-to-end. Stop prompting, start building systems.</p>
</div>
<div className="card-glass p-8 rounded-3xl">
<div className="w-12 h-12 bg-[#11361B] rounded-full flex items-center justify-center text-white text-2xl mb-4">
<CurrencyInrIcon size={32} weight="bold" />
</div>
<h3 className="text-xl font-bold mb-2">Outcome &gt; Tools</h3>
<p className="opacity-80">Businesses don't pay for AI tools. They pay for outcomes. We teach you: Problem → Workflow → Revenue.</p>
</div>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;
