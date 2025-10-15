"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const customerFaqs = [
  {
    id: 1,
    question: "Is it free to use Zuhouze?",
    answer: "Yes, our basic features are completely free to use. We also offer premium features for advanced property search and analytics.",
  },
  {
    id: 2,
    question: "How do I search for properties?",
    answer: "Simply swipe through our curated property listings. You can filter by location, price range, property type, and more to find your perfect match.",
  },
  {
    id: 3,
    question: "Can I schedule property viewings?",
    answer: "Yes! You can easily schedule viewings directly through the app. Connect with property owners or agents and book a time that works for you.",
  },
  {
    id: 4,
    question: "How does the video tour feature work?",
    answer: "Our video tour feature allows you to experience immersive 360-degree virtual tours. Walk through properties from the comfort of your home before scheduling an in-person visit.",
  },
  {
    id: 5,
    question: "Is my personal information secure?",
    answer: "Absolutely. We use industry-standard encryption to protect your data and never share your personal information without your consent.",
  },
];

const builderFaqs = [
  {
    id: 1,
    question: "How can I list my projects on Zuhouze?",
    answer: "Create a builder account and easily upload your projects with photos, floor plans, and detailed specifications. Our team will verify and publish your listings.",
  },
  {
    id: 2,
    question: "What are the listing fees?",
    answer: "We offer flexible pricing plans based on the number of projects and features you need. Contact our sales team for customized packages that suit your business.",
  },
  {
    id: 3,
    question: "Can I track leads and inquiries?",
    answer: "Yes! Our builder dashboard provides comprehensive analytics including lead tracking, inquiry management, and performance insights for all your listings.",
  },
  {
    id: 4,
    question: "How are properties verified?",
    answer: "All properties go through a rigorous verification process including document checks, location verification, and quality assessment by our expert team.",
  },
  {
    id: 5,
    question: "Can I promote my premium projects?",
    answer: "Absolutely! We offer featured listings, sponsored placements, and targeted marketing options to give your premium projects maximum visibility.",
  },
];

const agentFaqs = [
  {
    id: 1,
    question: "How do I become a verified agent on Zuhouze?",
    answer: "Register as an agent, submit your credentials and license documentation. Our verification team will review and approve your account within 24-48 hours.",
  },
  {
    id: 2,
    question: "Can I manage multiple properties?",
    answer: "Yes! Our agent dashboard allows you to manage unlimited property listings, schedule viewings, and communicate with multiple clients simultaneously.",
  },
  {
    id: 3,
    question: "What commission structure do you follow?",
    answer: "We don't charge commission on deals closed through our platform. You keep 100% of your earnings and only pay a small monthly subscription fee.",
  },
  {
    id: 4,
    question: "How do I connect with potential buyers?",
    answer: "Our AI-powered matching system connects you with qualified buyers interested in your listings. You'll receive instant notifications when someone shows interest.",
  },
  {
    id: 5,
    question: "Can I collaborate with other agents?",
    answer: "Yes! You can invite co-agents, share listings, and split commissions directly through our platform, making collaboration seamless and transparent.",
  },
];



interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// FAQ Section Component (reusable)
function FAQSection({ sectionIndex, title, faqs, backgroundImage }: { sectionIndex: number; title: string; faqs: FAQ[]; backgroundImage: string }) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-8 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 px-4 sm:px-6 lg:px-10 hidden md:block">
          <div 
            className="w-full h-full bg-center bg-no-repeat rounded-3xl"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
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
              Answers for
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
              {title}...
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
                  key={`${sectionIndex}-${faq.id}`}
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
  );
}

export function FAQPage() {
  return (
    <div className="mt-24">
      {/* Customer FAQ Section */}
      <FAQSection sectionIndex={1} title="Customer" faqs={customerFaqs} backgroundImage="/assets/FaqBg.svg" />
      
      {/* Spacing between sections */}
      <div className="h-12 md:h-20" />
      
      {/* Builder FAQ Section */}
      <FAQSection sectionIndex={2} title="Builder" faqs={builderFaqs} backgroundImage="/assets/FaqBg2.svg" />
      
      {/* Spacing between sections */}
      <div className="h-12 md:h-20" />
      
      {/* Agent FAQ Section */}
      <FAQSection sectionIndex={3} title="Agent" faqs={agentFaqs} backgroundImage="/assets/FaqBg3.svg" />
      
      {/* Email Section */}
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
    </div>
  );
}

