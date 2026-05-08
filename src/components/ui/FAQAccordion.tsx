"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  dark?: boolean;
}

export function FAQAccordion({ items, dark = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-warm-stone/30">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-b border-warm-stone/25">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-8 py-8 md:py-10 text-left"
              aria-expanded={isOpen}
            >
              <span className={`font-sans font-medium text-base md:text-lg leading-snug ${dark ? "text-ivory" : "text-obsidian"}`}>
                {item.question}
              </span>
              <span className={`font-sans text-sm leading-none shrink-0 select-none mt-0.5 ${dark ? "text-warm-stone" : "text-obsidian/25"}`}>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className={`font-sans text-sm md:text-base leading-relaxed pb-9 max-w-xl ${dark ? "text-warm-stone" : "text-obsidian/55"}`}>
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
