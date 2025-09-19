"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Is it free?",
    answer: "Yes, our basic features are completely free to use. We also offer premium features for advanced property search and analytics.",
  },
  {
    id: 2,
    question: "How are properties verified?",
    answer: "All properties go through a rigorous verification process including document checks, location verification, and quality assessment by our team of experts.",
  },
  {
    id: 3,
    question: "Can I list my property?",
    answer: "Absolutely! Property owners can easily list their properties through our platform. We provide tools to manage listings, schedule viewings, and connect with potential buyers.",
  },
  {
    id: 4,
    question: "How does the video tour feature work?",
    answer: "Our video tour feature allows property owners to create immersive 360-degree virtual tours. You can walk through properties from the comfort of your home, getting a real feel for the space before scheduling an in-person visit.",
  },
  {
    id: 5,
    question: "What makes Zuhouze different from other real estate platforms?",
    answer: "Zuhouze combines the best of social media and real estate. Our swipe-based interface makes property browsing fun and engaging, while our AI-powered matchmaking ensures you find properties that truly match your lifestyle and preferences.",
  },
];

export function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4">
            FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Here are your Answers...
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(faq.id)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform duration-200",
                      openItem === faq.id && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openItem === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600">
              Still have questions? Email us at{" "}
              <a
                href="mailto:support@zuhouze.com"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                support@zuhouze.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}




