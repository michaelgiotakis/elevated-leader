"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-warm-stone">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-b border-warm-stone">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans font-semibold text-base md:text-lg text-obsidian">
                {item.question}
              </span>
              <span className="font-sans text-xl leading-none text-obsidian shrink-0 select-none opacity-30 transition-opacity duration-150">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="font-sans text-sm md:text-base text-obsidian/60 leading-relaxed pb-6">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
