import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rohit Sharma",
    role: "Marketing Director",
    text: "The session with Priyank was incredibly insightful. He explained complex AI concepts in such a practical way that it immediately clicked. What I appreciated the most was how he connected AI tools with real business use cases for B2B and D2C growth.",
  },
  {
    name: "Rahul Mehta",
    role: "Startup Founder",
    text: "Priyank doesn’t just teach AI — he shows how to actually implement it. The examples around automation and AI-driven workflows were extremely valuable for my team. We’ve already started applying some of the strategies he shared.",
  },
  {
    name: "Anita Kapoor",
    role: "Product Manager",
    text: "One of the most practical AI sessions I’ve attended. Priyank breaks down complicated topics into simple frameworks and actionable steps. The way he explains AI for sales and marketing automation is truly impressive.",
  },
];

export default function TestimonialSlider() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prev]) => {
      let next = prev + dir;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return [next, dir];
    });
  };

  const testimonial = testimonials[index];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className=" py-20 px-6">

      <div className="max-w-4xl mx-auto relative">

        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-12">
          What learners are saying
        </h2>

        {/* Card */}
        <div className="card-glass rounded-2xl p-10 relative overflow-hidden">

          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight size={22} />
          </button>

          {/* Animated Testimonial */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              variants={variants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="text-md text-gray-800 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}