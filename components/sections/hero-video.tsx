"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

// Avatar data for the button
const buttonAvatars = [
  {
    imageUrl: "/assets/owner-avatar.png",
    profileUrl: "#"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627", 
    profileUrl: "#"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "#"
  }
];

export function HeroVideo() {
  const [scrollY, setScrollY] = useState(0);
  const [showLargeTitle, setShowLargeTitle] = useState(true);
  const { scrollYProgress } = useScroll();

  // Transform values based on scroll - all happen together with single scroll
  const titleScale = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);
  const titleY = useTransform(scrollYProgress, [0, 0.05], [0, 0]); // Keep title in same position
  const largeTitleOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]); // Hide large title quickly
  const smallTitleOpacity = useTransform(scrollYProgress, [0, 0.02, 0.05], [0, 0, 1]); // Show small title
  const containerMarginTop = useTransform(scrollYProgress, [0, 0.05], [0, 0]); // Reduce margin
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.02, 0.05], [0, 0, 1]); // Show subtitle
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.02, 0.05], [0, 0, 1]); // Show button
  const buttonY = useTransform(scrollYProgress, [0, 0.05], [20, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Hide large title when scroll progress is greater than 0.03
      setShowLargeTitle(window.scrollY < window.innerHeight * 0.06);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden pt-16 pb-8">
      {/* Video Container */}
      <div className="w-full px-2 sm:px-4">
        <div className="relative">
          {/* Video Background */}
          <div 
            className="relative mx-auto md:h-screen h-[60vh]"
            style={{
              width: '100%',
              maxWidth: 'calc(100% - 60px)',
              borderRadius: '26px',
              overflow: 'hidden',
              margin: '30px auto',
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
              <motion.div 
                className="text-center px-4 flex flex-col items-center justify-center md:block" 
                style={{ 
                  marginTop: containerMarginTop,
                }}
              >
                {/* Small Title - Shows on scroll (Desktop only) */}
                <motion.h1
                  className="font-bold leading-tight hidden md:block"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: '#FFF',
                    textAlign: 'center',
                    fontSize: 70,
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    transform: `scale(${titleScale})`,
                    opacity: smallTitleOpacity,
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

                {/* Large Title - Shows initially, hides on scroll (Desktop only) */}
                {showLargeTitle && (
                  <motion.h1
                    className="leading-tight hidden md:block"
                    style={{
                      color: '#FFF',
                      fontSize: 160,
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      opacity: largeTitleOpacity,
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
                )}

                {/* Mobile Large Title - Always visible on mobile */}
                <motion.h1
                  className="leading-tight block md:hidden text-center"
                  style={{
                    color: '#FFF',
                    fontSize: 'clamp(24px, 6vw, 36px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    fontFamily: "var(--font-poppins)",
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

                {/* Mobile Subtitle */}
                <motion.p
                  className="text-white/90 max-w-sm mx-auto mt-4 block md:hidden text-center"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "1.5",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  Swipe through global properties with ease. Get AI-matched homes, video tours, 
                  smart recommendations, and instant connections - all in one place.
                </motion.p>

                {/* Mobile Button */}
                <motion.div
                  className="mt-6 flex justify-center block md:hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.4 }}
                >
                  <div 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-300 shadow-lg"
                    onClick={() => {}}
                  >
                    <span 
                      className="font-semibold text-black"
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Search Properties
                    </span>
                    
                    <svg
                      className="w-3 h-3 text-black"
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
                    
                    <AvatarCircles 
                      avatarUrls={buttonAvatars}
                      className="!-space-x-1"
                    />
                    <span 
                      className="text-black"
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      +99
                    </span>
                  </div>
                </motion.div>

                {/* Subtitle - Appears on scroll (Desktop only) */}
                <motion.p
                  className="text-white/90 max-w-3xl mx-auto mt-2 hidden md:block"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "1.6",
                    opacity: subtitleOpacity,
                  }}
                  initial={{ opacity: 0 }}
                >
                  Swipe through global properties with ease. Get AI-matched homes, video tours, 
                  smart recommendations, and instant connections - all in one place.
                </motion.p>

                {/* Custom Button - Appears on scroll (Desktop only) */}
                <motion.div
                  className="mt-8 sm:mt-12 flex justify-center hidden md:flex"
                  style={{
                    opacity: buttonOpacity,
                    y: buttonY,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                >
                  <div 
                    className="flex items-center justify-center gap-4 px-8 py-2 bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-300 shadow-lg"
                    onClick={() => {}}
                  >
                    {/* Search Properties Text */}
                    <span 
                      className="font-semibold text-black"
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      Search Properties
                    </span>
                    
                    {/* Arrow Icon */}
                    <svg
                      className="w-5 h-5 text-black"
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
                    
                    {/* Avatar Circles */}
                    <AvatarCircles 
                      avatarUrls={buttonAvatars}
                      
                      className="!-space-x-2"
                    />
                     <span 
                      className="text-black"
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      +99
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
