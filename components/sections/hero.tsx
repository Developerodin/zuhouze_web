"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SVGPhoneMockup } from "@/components/ui/svg-phone-mockup";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { TextReveal } from "@/components/ui/text-reveal";
import { RetroGrid } from "@/components/ui/retro-grid";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Retro Grid Background - Full Width */}
      <RetroGrid 
        className="absolute inset-0 z-0 w-full h-full"
        angle={65}
        cellSize={60}
        opacity={0.5}
        darkLineColor="#EDEDED"
      />
      
      {/* Content Container - Centered */}
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
              <div className="group relative mx-auto inline-flex items-center justify-center rounded-full px-4 py-1.5 bg-white shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                <span
                  className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                <div className="relative z-10">
                  <AnimatedGradientText
                    className="text-sm font-medium"
                    style={{
                      fontFamily: 'Fredoka',
                      fontSize: '18px',
                      fontWeight: 400,
                      background: 'linear-gradient(90deg, rgba(236, 72, 153, 1), rgba(151, 79, 223, 1), rgba(28, 114, 255, 1), rgba(16, 185, 129, 1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 'normal'
                    }}
                  >
                    Zuhouze
                  </AnimatedGradientText>
                </div>
              </div>

              <h1 
                className="leading-tight"
                style={{
                  color: "#000",
                  fontFamily: "Fredoka",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal"
                }}
              >
                <TextReveal delay={0.2}>
                  Bringing the <AnimatedGradientText
                    style={{
                      background: 'linear-gradient(90deg, rgba(236, 72, 153, 1), rgba(151, 79, 223, 1), rgba(28, 114, 255, 1), rgba(16, 185, 129, 1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Global
                  </AnimatedGradientText>
                </TextReveal>
                
                <TextReveal delay={0.6}>
                  <AnimatedGradientText
                    style={{
                      background: 'linear-gradient(90deg, rgba(236, 72, 153, 1), rgba(151, 79, 223, 1), rgba(28, 114, 255, 1), rgba(16, 185, 129, 1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Real Estate
                  </AnimatedGradientText> Closer.
                </TextReveal>
              </h1>
              
              <p 
                className=" max-w-xl leading-relaxed"
                style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 400, lineHeight: "normal" ,color:"#000"}}
              >
                <TypingAnimation 
                  text="Explore properties around the globe in an easy, swipe-friendly style. Discover improved matchmaking that connects you with the right homes, rentals, or PGs based on your lifestyle.Get video tours, smart recommendations, and instant connections — all in one place."
                  speed={30}
                  delay={1000}
                />
               
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ShimmerButton
                className="px-6 py-3 text-base font-semibold bg-black text-white hover:bg-black/90 hover:text-black "
                borderRadius="10px"
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
                    className=" ml-20 w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl object-contain"
                    
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
