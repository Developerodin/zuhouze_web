"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroVideo() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  // Transform values based on scroll
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, 1]);
  const buttonY = useTransform(scrollYProgress, [0, 0.3], [20, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden pt-24 pb-20">
      {/* Video Container */}
      <div className="w-full px-2">
        <div className="relative">
          {/* Video Background */}
          <div 
            className="relative mx-auto"
            style={{
              width: '100%',
              maxWidth: 'calc(100% - 60px)',
              borderRadius: '32px',
              overflow: 'hidden',
              margin: '30px auto',
              height: '100vh',
              maxHeight: '700px'
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/video/HeroBg_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(10, 18, 117, 0.00) 53.14%, rgba(10, 18, 117, 0.10) 81.75%)'
              }}
            />

            {/* Text Overlay on Video */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center px-4">
                {/* Main Title */}
                <motion.h1
                  className="font-bold leading-tight"
                  style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                    fontSize: 160,
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    scale: titleScale,
                    y: titleY,
                  }}
                >
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    Bringing the Global
                  </motion.span>
                  
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    Real Estate Closer.
                  </motion.span>
                </motion.h1>

                {/* Subtitle - Appears on scroll */}
                <motion.p
                  className="text-white/90 max-w-3xl mx-auto mt-6 sm:mt-8"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "clamp(0.9rem, 2vw, 1.25rem)",
                    fontWeight: 400,
                    lineHeight: "1.6",
                    opacity: subtitleOpacity,
                  }}
                  initial={{ opacity: 0 }}
                >
                  Swipe through global properties with ease. Get AI-matched homes, video tours, 
                  smart recommendations, and instant connections - all in one place.
                </motion.p>

                {/* Button - Appears on scroll */}
                <motion.div
                  className="mt-8 sm:mt-12"
                  style={{
                    opacity: buttonOpacity,
                    y: buttonY,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                >
                  <ShimmerButton
                    className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white text-black hover:bg-white/90 transition-all duration-300 w-full sm:w-auto"
                    borderRadius="12px"
                    onClick={() => {}}
                  >
                    <span className="flex items-center gap-3">
                      Search Properties
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </ShimmerButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
