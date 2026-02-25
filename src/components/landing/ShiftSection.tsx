const ShiftSection = () => {
  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
          The Shift is Happening
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto text-balance">
          Most people use AI to assist their work.{" "}
          <span className="block mt-1">A small group uses AI to replace work.</span>
        </h2>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          This live session teaches you both sides of the equation: How AI Agents actually work, and how to turn that skill into clients, projects, and revenue.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 text-left shadow-sm border border-border/50">
            <h3 className="text-lg font-bold mb-3">Beyond Chatbots</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Agents take actions, make decisions, and execute tasks end-to-end. Stop prompting, start building systems.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 text-left shadow-sm border border-border/50">
            <h3 className="text-lg font-bold mb-3">Outcome &gt; Tools</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Businesses don't pay for AI tools. They pay for outcomes. We teach you: Problem → Workflow → Revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;
