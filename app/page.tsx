"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the 20% upfront deposit policy work?",
    answer: "To guarantee your villa reservation, a 20% deposit is payable upon booking. The remaining 80% balance is due 30 days prior to your arrival date. This structured policy ensures secure date blocking and builds mutual trust between travelers and hosts.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Cancellations made 60 days or more prior to the arrival date will receive a full refund of the 20% deposit. Cancellations made between 30 and 60 days prior will forfeit the deposit. Cancellations within 30 days are non-refundable.",
  },
  {
    question: "Are airport or port transfers included in my stay?",
    answer: "Yes, every reservation at PrivaVillas includes complimentary VIP round-trip transfers from Santorini Airport (JTR) or Athinios Port in our luxury climate-controlled Mercedes vans, including professional porter service.",
  },
  {
    question: "Can your concierge arrange private yachts, chefs, or helicopter charters?",
    answer: "Absolutely. Our bespoke concierge team is local to Santorini and on call 24/7. We can seamlessly coordinate private catamaran charters, in-villa fine dining with elite chefs, vineyard tours, massage therapy, and helicopter transfers.",
  },
];

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Villas Grid Section */}
      <FeaturedGrid />

      {/* Trust Pillars Section (Why Choose Us) */}
      <section className="py-24 bg-white dark:bg-aegean-950 border-t border-slate-100 dark:border-aegean-900/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-aegean-600 dark:text-aegean-400">
              The PrivaVillas Promise
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-aegean-900 dark:text-aegean-50 mt-2 mb-4">
              A Refined Booking Experience
            </h2>
            <div className="h-0.5 w-16 bg-aegean-500 dark:bg-aegean-400 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Curated Luxury */}
            <div className="flex flex-col items-center md:items-start p-2">
              <div className="p-3 bg-aegean-50 dark:bg-aegean-900/50 rounded-lg text-aegean-650 dark:text-aegean-300 mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c-.107-.19-.23-.385-.369-.583A8.472 8.472 0 006.185 1.5c-4.661 0-8.435 3.738-8.435 8.35 0 2.213.87 4.225 2.28 5.727l5.95 6.223a2.25 2.25 0 003.226 0l5.95-6.223c1.41-1.502 2.28-3.514 2.28-5.727 0-4.612-3.774-8.35-8.435-8.35a8.472 8.472 0 00-4.926 1.416z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0-6.75a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium text-aegean-900 dark:text-aegean-50 mb-3">
                Curated Luxury Portfolios
              </h3>
              <p className="text-sm text-aegean-600/80 dark:text-aegean-300/80 font-light leading-relaxed">
                Every villa is personally inspected to guarantee unmatched privacy, panoramic caldera view vistas, premium bedding, and elite amenities.
              </p>
            </div>

            {/* Bespoke Local Concierge */}
            <div className="flex flex-col items-center md:items-start p-2">
              <div className="p-3 bg-aegean-50 dark:bg-aegean-900/50 rounded-lg text-aegean-650 dark:text-aegean-300 mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.75 3.75 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium text-aegean-900 dark:text-aegean-50 mb-3">
                Bespoke Concierge 24/7
              </h3>
              <p className="text-sm text-aegean-600/80 dark:text-aegean-300/80 font-light leading-relaxed">
                From luxury catamaran charters to reservation lock-ins at exclusive restaurants, our dedicated on-island hosts craft your perfect custom itinerary.
              </p>
            </div>

            {/* Seamless Trust */}
            <div className="flex flex-col items-center md:items-start p-2">
              <div className="p-3 bg-aegean-50 dark:bg-aegean-900/50 rounded-lg text-aegean-650 dark:text-aegean-300 mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.214.19c2.43 2.158 6.54 2.158 8.97 0l.214-.19M16.5 12h-9m-1.5-6h12" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium text-aegean-900 dark:text-aegean-50 mb-3">
                Secure & Transparent Terms
              </h3>
              <p className="text-sm text-aegean-600/80 dark:text-aegean-300/80 font-light leading-relaxed">
                Enjoy complete peace of mind with our standard 20% upfront deposit policy, secure billing encryptions, and zero hidden hospitality fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50 dark:bg-aegean-950/40 border-t border-slate-100 dark:border-aegean-900/20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-aegean-600 dark:text-aegean-400">
              Booking Guide
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-aegean-900 dark:text-aegean-50 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-0.5 w-16 bg-aegean-500 dark:bg-aegean-400 mx-auto" />
          </div>

          {/* Accordion Container */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-aegean-900/30 border border-slate-200/60 dark:border-aegean-800/30 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-aegean-900 dark:text-aegean-50 hover:bg-slate-50/50 dark:hover:bg-aegean-900/50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-aegean-500 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-60 border-t border-slate-100 dark:border-aegean-800/40" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 py-5 text-sm text-aegean-650 dark:text-aegean-300 font-light leading-relaxed bg-slate-50/30 dark:bg-aegean-950/10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
