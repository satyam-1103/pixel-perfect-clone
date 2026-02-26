import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need coding experience?",
    answer:
      "No. The webinar covers No-code and Low-code approaches specifically designed for non-developers, marketers, and founders.",
  },
  {
    question: "Is this just another prompting class?",
    answer:
      "Absolutely not. Prompting is input. Agents are systems that execute. We focus on building workflows that run on autopilot.",
  },
  {
    question: "Who is the ideal audience?",
    answer:
      "Freelancers, consultants, founders, and working professionals looking to build a future-proof side hustle or scale their current operations.",
  },
];

const FaqSection = () => {
  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-28 bg-[#ABCFA8] relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-12">
          Is this for you?
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card-glass rounded-2xl border border-border/50 px-6 shadow-sm"
            >
              <AccordionTrigger className="text-base font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
