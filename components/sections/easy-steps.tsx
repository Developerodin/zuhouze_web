"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShineBorder } from "@/components/ui/shine-border";
import { motion } from "framer-motion";
import { Play, Bookmark, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: 1,
    icon: Play,
    title: "Swipe & Watch",
    description: "Scroll property videos like reels.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 2,
    icon: Bookmark,
    title: "Shortlist & Share",
    description: "Save or send to friends instantly.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 3,
    icon: MessageCircle,
    title: "Connect & Visit",
    description: "Chat or schedule visits directly.",
    color: "from-green-500 to-emerald-500",
  },
];

export function EasySteps() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Journey Button */}
          <div className="group relative mx-auto inline-flex items-center justify-center rounded-full px-4 py-1.5 bg-white shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mb-6">
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
            <span className="relative z-10 text-sm font-medium" style={{ fontFamily: 'var(--font-fredoka)', color: '#000' }}>
              Journey
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-fredoka)' }}>
            Easy Steps
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-black max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-fredoka)' }}>
            Discover, shortlist, and connect — a seamless path to your new space.
          </p>
        </motion.div>

        {/* Horizontal Steps Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Steps Cards */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative bg-white rounded-2xl p-6 w-64 h-64 flex flex-col items-center text-center border border-gray-200">
                  <ShineBorder
                    className="absolute inset-0 rounded-2xl"
                    shineColor={["#3B82F6", "#10B981", "#8B5CF6"]}
                  />
                  {/* Step Number */}
                  <div className="relative z-10 mb-4">
                    <span className="text-4xl font-bold" style={{ fontFamily: 'var(--font-fredoka)', fontSize: '48px', fontWeight: 400, color: '#000' }}>{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="relative z-10 text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-fredoka)', fontSize: '20px', fontWeight: 400, color: '#000' }}>{step.title}</h3>
                  
                  {/* Description */}
                  <p className="relative z-10 text-sm" style={{ fontFamily: 'var(--font-fredoka)', fontSize: '14px', color: '#000' }}>{step.description}</p>
                </div>
                
                {/* Connection dots */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Property Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-64 lg:w-[500px] lg:h-[400px]">
              <Image
                src="/assets/EasySteps.svg"
                alt="Property showcase"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




