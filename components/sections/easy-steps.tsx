"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { RetroGrid } from "@/components/ui/retro-grid";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    icon: "/assets/Connect.png",
    title: "Connect & Visit",
    description: "Chat or schedule visits directly.",
    position: "left"
  },
  {
    icon: "/assets/Swipe.png",
    title: "Swipe & Watch",
    description: "Scroll property videos like reels.",
    position: "left"
  },
  {
    icon: "/assets/Shortlist.png", 
    title: "Shortlist & Share",
    description: "Save or send to friends instantly.",
    position: "right"
  },
  {
    icon: "/assets/Connect.png", // You may need to add a specific icon for Smart Matchmaking
    title: "Smart Matchmaking",
    description: "AI Finds Your Perfect Home",
    position: "right"
  }
];

export function EasySteps() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Retro Grid Background */}
      <RetroGrid 
        className="absolute inset-0 z-0 w-full h-full"
        angle={65}
        cellSize={60}
        opacity={0.3}
        darkLineColor="#EDEDED"
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Title with Animated Zuhaush */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'var(--font-fredoka)' }}>
            <AnimatedGradientText
              style={{
                background: 'linear-gradient(90deg, rgba(236, 72, 153, 1), rgba(151, 79, 223, 1), rgba(28, 114, 255, 1), rgba(16, 185, 129, 1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'inherit',
                fontWeight: 'inherit'
              }}
            >
              Zuhaush
            </AnimatedGradientText>{" "}
            is a modern real-estate marketplace with a video-first approach, making property discovery engaging, transparent, and aspirational.
          </h1>
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Side Cards */}
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            {/* Top Left Card - Connect & Visit */}
            <motion.div
              className="w-full lg:w-auto"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="rounded-full p-6 shadow-sm"
                style={{ 
                  minWidth: '350px', 
                  maxWidth: '380px',
                  
                  background: 'rgba(10, 18, 117, 0.04)',
                  backdropFilter: 'blur(8.350000381469727px)'
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={steps[0].icon}
                      alt={steps[0].title}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg text-black" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {steps[0].title}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {steps[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Card - Swipe & Watch */}
            <motion.div
              className="w-full lg:w-auto"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div 
                className="rounded-full p-6 shadow-sm"
                style={{ 
                  minWidth: '350px', 
                  maxWidth: '380px',
                 
                  background: 'rgba(10, 18, 117, 0.04)',
                  backdropFilter: 'blur(8.350000381469727px)'
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={steps[1].icon}
                      alt={steps[1].title}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg text-black" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {steps[1].title}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {steps[1].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center Phone Image */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-96 lg:w-80 lg:h-[500px]">
              <Image
                src="/assets/PhoneVideo.svg"
                alt="Zuhaush App"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            {/* Top Right Card - Shortlist & Share */}
            <motion.div
              className="w-full lg:w-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="rounded-full p-6 shadow-sm"
                style={{ 
                  minWidth: '350px', 
                  maxWidth: '380px',
                  
                  background: 'rgba(10, 18, 117, 0.04)',
                  backdropFilter: 'blur(8.350000381469727px)'
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={steps[2].icon}
                      alt={steps[2].title}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg text-black" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {steps[2].title}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {steps[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Card - Smart Matchmaking */}
            <motion.div
              className="w-full lg:w-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div 
                className="rounded-full p-6 shadow-sm"
                style={{ 
                  minWidth: '350px', 
                  maxWidth: '380px',
                  
                  background: 'rgba(10, 18, 117, 0.04)',
                  backdropFilter: 'blur(8.350000381469727px)'
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={steps[3].icon}
                      alt={steps[3].title}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg text-black" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {steps[3].title}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {steps[3].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}




