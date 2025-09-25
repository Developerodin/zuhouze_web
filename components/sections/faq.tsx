"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
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
    <>
      <section id="faq" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 px-4 sm:px-6 lg:px-8 hidden md:block">
            <div 
              className="w-full h-full bg-center bg-no-repeat rounded-2xl"
              style={{
                backgroundImage: 'url(/assets/FaqBg.svg)',
                backgroundSize: 'contain',
                backgroundPosition: 'center'
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Side - Title */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl" style={{ 
              fontFamily: 'var(--font-fredoka)', 
              fontWeight: 400, 
              color: '#000',
              lineHeight: '1.2'
            }}>
              Here are your
            </h2>
            <AnimatedGradientText
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-medium"
              style={{
                fontFamily: 'var(--font-fredoka)', 
                fontWeight: 400,
                background: 'linear-gradient(90deg, rgba(236, 72, 153, 1), rgba(151, 79, 223, 1), rgba(28, 114, 255, 1), rgba(16, 185, 129, 1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2'
              }}
            >
              Answers...
            </AnimatedGradientText>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3 sm:space-y-4 w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="bg-white/40 backdrop-blur-md border border-white/30 rounded-lg overflow-hidden shadow-sm w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-white/60 transition-colors"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base pr-2">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 sm:h-5 sm:w-5 text-gray-500 transition-transform duration-200 flex-shrink-0",
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
                        <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Email Section - Separate section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-black text-base sm:text-lg px-4" style={{ fontFamily: 'var(--font-fredoka)' }}>
              Still have questions? Email us at{" "}
              <a
                href="mailto:support@zuhouze.com"
                className="text-black hover:text-blue-800 underline"
              >
                support@zuhouze.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
    
  );
}




