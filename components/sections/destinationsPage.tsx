"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const destinations = [
  {
    id: 1,
    name: "Switzerland",
    countryCode: "ch",
    description: "Stunning natural beauty, world-class healthcare, safety, high salaries, political stability.",
    video: "https://vsc-files-storage.s3.ap-south-1.amazonaws.com/1761109748824-1f9c1ee4-41d3-428e-8129-827d9827e886.mp4"
  },
  {
    id: 2,
    name: "Denmark",
    countryCode: "dk",
    description: "Happiness leader, excellent healthcare & education, work-life balance, low corruption.",
    video: "https://vsc-files-storage.s3.ap-south-1.amazonaws.com/1761109791675-82cb671d-1173-4b96-9594-e1ace6f92980.mp4"
  },
  {
    id: 3,
    name: "Norway",
    countryCode: "no",
    description: "High income, clean environment, great welfare system, free education & healthcare.",
    video: "https://vsc-files-storage.s3.ap-south-1.amazonaws.com/1761109837972-a3fa31f1-559e-4c9c-aaaf-348bb8b35840.mp4"
  },
  {
    id: 4,
    name: "Finland",
    countryCode: "fi",
    description: "Safest country, top education system, happiest population, pristine environment.",
    video: "https://vsc-files-storage.s3.ap-south-1.amazonaws.com/1761109865681-8a0f9171-6cb0-4890-98a2-b4c8c9f6c4ba.mp4"
  },
  {
    id: 5,
    name: "Sweden",
    countryCode: "se",
    description: "Excellent welfare, gender equality, green spaces, great childcare & work culture.",
    video: "https://vsc-files-storage.s3.ap-south-1.amazonaws.com/1761109915157-86a0344b-0f6a-4aa7-80ad-9ed37380d98f.mp4"
  },
  {
    id: 6,
    name: "Canada",
    countryCode: "ca",
    description: "Diverse society, immigration-friendly, great healthcare & education, safe cities.",
    video: "https://vsc-files-storage.s3.ap-south-1.amazonaws.com/1761109946416-acf6d141-5ad7-451a-a822-29177d689e5f.mp4"
  },
  {
    id: 7,
    name: "Australia",
    countryCode: "au",
    description: "Beautiful weather, strong economy, relaxed lifestyle, top universities.",
    video: "https://vsc-files-storage.s3.ap-south-1.amazonaws.com/1761109977158-f94a8a97-f891-4dcb-a412-7c959d30c183.mp4"
  },
  {
    id: 8,
    name: "New Zealand",
    countryCode: "nz",
    description: "Peaceful, clean, nature-filled, friendly people, strong community values.",
    video: "https://vsc-files-storage.s3.ap-south-1.amazonaws.com/1761110007127-bccd4ac6-079c-4c22-b555-a09d08042698.mp4"
  },
];

function DestinationCard({ destination }: { destination: typeof destinations[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden bg-white cursor-pointer transition-all duration-300 h-[400px]"
      style={{
        border: isHovered ? 'none' : '2px solid #ECECEC'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <ShineBorder
          borderWidth={2}
          duration={10}
          shineColor={["#EC4899", "#974FDF", "#1C72FF", "#10B981"]}
        />
      )}
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Video Section */}
        <div className="relative h-[250px]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
          >
            <source src={destination.video} type="video/mp4" />
          </video>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h3 
                className="text-2xl font-medium"
                style={{ 
                  fontFamily: 'var(--font-fredoka)',
                  color: '#000'
                }}
              >
                {destination.name}
              </h3>
              <img
                src={`https://flagcdn.com/w40/${destination.countryCode}.png`}
                srcSet={`https://flagcdn.com/w80/${destination.countryCode}.png 2x`}
                width="32"
                height="24"
                alt={`${destination.name} flag`}
                className="rounded shadow-sm"
              />
            </div>
            <p 
              className="text-sm leading-relaxed"
              style={{ 
                fontFamily: 'Poppins',
                color: '#666'
              }}
            >
              {destination.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function DestinationsPage() {
  return (
    <section className="py-4 md:py-10 bg-white mt-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
        {/* Explore Global Opportunities */}
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
              Explore Global Opportunities
            </AnimatedGradientText>
            <Image
              src="/assets/Star.png"
              alt="Star"
              width={36}
              height={36}
              className="sm:w-[46px] sm:h-[46px]"
            />
          </div>
        </motion.div>

        {/* Main Header Section */}
        <motion.div
          className="flex justify-between items-start mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left Side - Main Heading */}
          <div>
            <h2 style={{ 
              fontFamily: 'var(--font-fredoka)', 
              fontSize: "clamp(32px, 8vw, 60px)", 
              fontWeight: 400, 
              color: '#000',
              lineHeight: '1.2'
            }}>
              Top Destinations
            </h2>
          </div>

          {/* Right Side - 8+ countries */}
          <div className="flex flex-col items-end">
            <div className="flex items-baseline gap-2">
              <span style={{ 
                fontFamily: 'var(--font-fredoka)', 
                fontSize: "clamp(32px, 6vw, 48px)", 
                fontWeight: 400, 
                color: '#000'
              }}>
                8+
              </span>
              <span style={{ 
                fontFamily: 'var(--font-fredoka)', 
                fontSize: "clamp(14px, 3vw, 18px)", 
                fontWeight: 400, 
                color: '#000',
                alignSelf: 'flex-end',
                marginBottom: '8px'
              }}>
                countries
              </span>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mb-6 lg:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div 
            style={{ 
              height: '1px', 
              backgroundColor: 'rgba(0, 0, 0, 0.15)' 
            }}
          />
        </motion.div>

        {/* Destinations Grid - 4 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ShimmerButton
            className="px-8 py-3 text-base font-semibold hover:text-black"
            borderRadius="8px"
            onClick={() => {}}
          >
            Explore More
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}

