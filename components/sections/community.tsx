"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { MarqueeDemo } from "@/components/ui/marquee-demo";
import { AvatarCirclesDemo } from "@/components/ui/avatar-circles-demo";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John",
    avatar: "/assets/user-avatar-1.png",
    quote: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    id: 2,
    name: "Jack",
    avatar: "/assets/user-avatar-2.png",
    quote: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    id: 3,
    name: "Jill",
    avatar: "/assets/user-avatar-3.png",
    quote: "This platform changed how I search for properties. Absolutely fantastic!",
  },
  {
    id: 4,
    name: "James",
    avatar: "/assets/user-avatar-4.png",
    quote: "The video tours are incredible. Found my dream home in just 2 days!",
  },
  {
    id: 5,
    name: "Jane",
    avatar: "/assets/user-avatar-5.png",
    quote: "Best real estate app I've ever used. Highly recommended!",
  },
];

const avatars = [
  "/assets/user-avatar-1.png",
  "/assets/user-avatar-2.png",
  "/assets/user-avatar-3.png",
  "/assets/user-avatar-4.png",
  "/assets/user-avatar-5.png",
  "/assets/user-avatar-6.png",
  "/assets/user-avatar-7.png",
  "/assets/user-avatar-8.png",
];

export function Community() {
  return (
    <section id="community" className="py-20 bg-white mb-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Users Button with Gradient Text */}
          <div className="group relative mx-auto inline-flex items-center justify-center  mb-0">
            {/* <span
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
            /> */}
            <div className="relative z-10">
              <AnimatedGradientText
                className="text-sm font-medium"
                style={{
                  fontFamily: 'var(--font-fredoka)', 
                  fontSize: 'clamp(24px, 6vw, 60px)',
                  fontWeight: 400,
                  background: 'linear-gradient(90deg, rgba(236, 72, 153, 1), rgba(151, 79, 223, 1), rgba(28, 114, 255, 1), rgba(16, 185, 129, 1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 'normal'
                }}
              >
                Connecting
              </AnimatedGradientText>
            </div>
          </div>
          
          {/* Main Title */}
          <h2 style={{ fontFamily: 'var(--font-fredoka)', fontSize: "clamp(24px, 6vw, 60px)", fontWeight: 400, color: '#000' }}>
            Homes & People
          </h2>
        </motion.div>

        {/* User Avatars */}
        {/* <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AvatarCirclesDemo />
        </motion.div> */}

        {/* Testimonials Marquee */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <MarqueeDemo />
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          className="mt-12 flex justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto w-full">
            {/* Desktop Layout */}
            <div className="hidden md:flex border border-[#E5E5E5] rounded-lg p-1 items-center">
              {/* Waitlist Label */}
              <div className="px-6 py-4 flex items-center">
                <span className="text-gray-800 font-medium text-sm">Waitlist</span>
                <div className="w-px h-6 bg-gray-300 mx-4"></div>
              </div>
              
              {/* Email Input */}
              <div className="flex-1 px-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border-0 focus:outline-none focus:ring-0 text-gray-600 placeholder-gray-400"
                />
              </div>
              
              {/* Join Button */}
              <div className="px-2">
                <ShimmerButton
                  className="px-6 py-3 text-sm font-semibold bg-black text-white hover:bg-black/90"
                  borderRadius="8px"
                  onClick={() => {}}
                >
                  Join the waitlist
                </ShimmerButton>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden space-y-3">
              <div className="text-center mb-3">
                <span className="text-gray-800 font-medium text-sm">Join the Waitlist</span>
              </div>
              
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 placeholder-gray-400 text-base"
                />
                
                <ShimmerButton
                  className="w-full px-6 py-3 text-sm font-semibold bg-black text-white hover:bg-black/90 hover:text-black rounded-lg"
                  borderRadius="8px"
                  onClick={() => {}}
                >
                  Join the waitlist
                </ShimmerButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
