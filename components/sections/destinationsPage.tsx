"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";

const destinations = [
  {
    id: 1,
    name: "Switzerland",
    countryCode: "ch",
    description: "Stunning natural beauty, world-class healthcare, safety, high salaries, political stability.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 2,
    name: "Denmark",
    countryCode: "dk",
    description: "Happiness leader, excellent healthcare & education, work-life balance, low corruption.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 3,
    name: "Norway",
    countryCode: "no",
    description: "High income, clean environment, great welfare system, free education & healthcare.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 4,
    name: "Finland",
    countryCode: "fi",
    description: "Safest country, top education system, happiest population, pristine environment.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 5,
    name: "Sweden",
    countryCode: "se",
    description: "Excellent welfare, gender equality, green spaces, great childcare & work culture.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 6,
    name: "Canada",
    countryCode: "ca",
    description: "Diverse society, immigration-friendly, great healthcare & education, safe cities.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 7,
    name: "Australia",
    countryCode: "au",
    description: "Beautiful weather, strong economy, relaxed lifestyle, top universities.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 8,
    name: "New Zealand",
    countryCode: "nz",
    description: "Peaceful, clean, nature-filled, friendly people, strong community values.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 9,
    name: "Netherlands",
    countryCode: "nl",
    description: "Great infrastructure, happy society, cycling culture, excellent healthcare & education.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 10,
    name: "Germany",
    countryCode: "de",
    description: "Strong economy, great jobs, affordable education, modern infrastructure.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 11,
    name: "Austria",
    countryCode: "at",
    description: "Safe, scenic, high living standards, great transport & social security.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 12,
    name: "Singapore",
    countryCode: "sg",
    description: "Super clean, ultra-safe, great healthcare, education, and business environment.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 13,
    name: "Japan",
    countryCode: "jp",
    description: "Safe, efficient, rich culture, excellent infrastructure, great healthcare.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 14,
    name: "Iceland",
    countryCode: "is",
    description: "Peaceful, gender-equal, low pollution, beautiful nature, high salaries.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 15,
    name: "Ireland",
    countryCode: "ie",
    description: "Friendly people, good economy, English-speaking, top education & healthcare.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 16,
    name: "United Kingdom",
    countryCode: "gb",
    description: "Global culture, strong education, stable economy.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 17,
    name: "France",
    countryCode: "fr",
    description: "Food, culture, healthcare, long life expectancy.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 18,
    name: "Portugal",
    countryCode: "pt",
    description: "Affordable Europe, warm climate, safe & peaceful.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 19,
    name: "Spain",
    countryCode: "es",
    description: "Great weather, relaxed lifestyle, excellent healthcare.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 20,
    name: "United States",
    countryCode: "us",
    description: "Top for innovation, job opportunities, and lifestyle diversity.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 21,
    name: "Turkey",
    countryCode: "tr",
    description: "Relatively low prices, rising development, citizenship-by-investment options.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 22,
    name: "UAE",
    countryCode: "ae",
    description: "Modern infrastructure, favorable tax environment, global connectivity.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 23,
    name: "Greece",
    countryCode: "gr",
    description: "Golden Visa via property investment, reasonable entry prices.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 24,
    name: "Cyprus",
    countryCode: "cy",
    description: "Residency or citizenship via property investments in capital cities or tourist zones.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 25,
    name: "Malta",
    countryCode: "mt",
    description: "Residency or citizenship via property investments, excellent Mediterranean location.",
    video: "/assets/Video/HeroBg.mp4"
  },
  {
    id: 26,
    name: "Panama",
    countryCode: "pa",
    description: "Strong foreign investment laws, stable market history.",
    video: "/assets/Video/HeroBg.mp4"
  }
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
      className="relative rounded-2xl overflow-hidden bg-white cursor-pointer transition-all duration-300"
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
        {/* Video Section - 65% height */}
        <div className="relative" style={{ height: '65%', minHeight: '250px' }}>
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

        {/* Content Section - 35% height */}
        <div className="p-6 flex flex-col justify-between" style={{ height: '35%', minHeight: '150px' }}>
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
    <section className="py-4 md:py-10 bg-white">
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

          {/* Right Side - 26+ countries */}
          <div className="flex flex-col items-end">
            <div className="flex items-baseline gap-2">
              <span style={{ 
                fontFamily: 'var(--font-fredoka)', 
                fontSize: "clamp(32px, 6vw, 48px)", 
                fontWeight: 400, 
                color: '#000'
              }}>
                26+
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}

