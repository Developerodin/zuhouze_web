"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { motion } from "framer-motion";
import Image from "next/image";

export function Properties() {
  return (
    <section id="properties" className="py-4 md:py-10 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
        {/* Recent AI Driven Suggestions */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-1">
            <AnimatedGradientText
              className="text-sm font-medium"
              style={{
                fontFamily: 'var(--font-fredoka)', 
                fontSize: 'clamp(18px, 4vw, 24px)',
                fontWeight: 400,
                background: 'linear-gradient(90deg, rgba(236, 72, 153, 1), rgba(151, 79, 223, 1), rgba(28, 114, 255, 1), rgba(16, 185, 129, 1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 'normal'
              }}
            >
              Recent AI Driven Suggestions
            </AnimatedGradientText>
            <Image
              src="/assets/Star.png"
              alt="Star"
              width={36}
              height={36}
              className="sm:w-[46px] sm:h-[46px]"
            />
          </div>
          <p
            className="mt-2 text-black"
            style={{
              fontFamily: "var(--font-fredoka)",
              fontSize: "clamp(16px, 3vw, 20px)",
              fontWeight: 400,
              lineHeight: "1.4",
            }}
          >
            A Modern Global Real Estate Platform for Discovering Properties Worldwide
          </p>
        </motion.div>

        {/* Featured Properties section — commented out on home page
        <motion.div
          className="flex justify-between items-start mb-6"
          ...
        </motion.div>
        */}
      </div>
    </section>
  );
}
