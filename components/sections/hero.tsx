"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SVGPhoneMockup } from "@/components/ui/svg-phone-mockup";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Zuhouze Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-purple-200 bg-purple-50">
                <span className="text-sm font-medium text-purple-700">Zuhouze</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                <TextReveal delay={0.2}>
                  Bringing the Global
                </TextReveal>
                
                <TextReveal delay={0.6}>
                  Real Estate Closer.
                </TextReveal>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                <TypingAnimation 
                  text="Explore properties around the globe in an easy, swipe-friendly style. Discover improved matchmaking that connects you with the right homes, rentals, or PGs based on your lifestyle."
                  speed={30}
                  delay={1000}
                />
                <br /><br />
                <TypingAnimation 
                  text="Get video tours, smart recommendations, and instant connections — all in one place."
                  speed={30}
                  delay={3000}
                />
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ShimmerButton
                className="px-6 py-3 text-base font-semibold bg-black text-white hover:bg-black/90"
                onClick={() => {}}
              >
                Download App
              </ShimmerButton>
            </div>
          </motion.div>

          {/* Right Content - Device Mockups */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Single Phone Mockup */}
              <div className="relative z-10 flex justify-center">
                <motion.div
                  className="relative w-full h-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Image
                    src="/assets/branding/phonemockup.svg"
                    alt="Phone Mockup"
                    width={600}
                    height={800}
                    className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
