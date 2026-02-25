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
      "Anyone curious about turning AI knowledge into income — freelancers, marketers, founders, and side-hustlers looking for a future-proof skill.",
  },
];

const FaqSection = () => {
  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Is this for you?
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm"
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
