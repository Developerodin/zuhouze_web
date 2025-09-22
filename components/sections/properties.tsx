"use client";

import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const locations = ["Mumbai", "Delhi", "Dubai", "Singapore"];

const properties = [
  {
    id: 1,
    title: "Luxury Penthouse",
    price: "₹2.5 Cr",
    location: "Mumbai",
    image: "/assets/properties.svg",
    verified: true,
    new: true,
    size: "small"
  },
  {
    id: 2,
    title: "Modern Apartment",
    price: "₹1.8 Cr",
    location: "Mumbai",
    image: "/assets/properties_2.svg",
    verified: true,
    new: false,
    size: "large"
  },
  {
    id: 3,
    title: "Villa with Garden",
    price: "₹3.2 Cr",
    location: "Mumbai",
    image: "/assets/properties_2.svg",
    verified: true,
    new: true,
    size: "large"
  },
  {
    id: 4,
    title: "Studio Apartment",
    price: "₹95 L",
    location: "Mumbai",
    image: "/assets/properties.svg",
    verified: true,
    new: false,
    size: "small"
  },
];

export function Properties() {
  const [activeLocation, setActiveLocation] = useState("Mumbai");

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Spaces Button with Gradient Text */}
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
            <div className="relative z-10">
              <AnimatedGradientText
                className="text-sm font-medium"
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '18px',
                  fontWeight: 400,
                  background: 'linear-gradient(90deg, rgba(236, 72, 153, 1), rgba(151, 79, 223, 1), rgba(28, 114, 255, 1), rgba(16, 185, 129, 1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 'normal'
                }}
              >
                Spaces
              </AnimatedGradientText>
            </div>
          </div>
          
          {/* Main Title */}
          <h2 style={{ fontFamily: 'var(--font-fredoka)', fontSize: "36px", fontWeight: 400, color: '#000' }}>
            Properties
          </h2>
        </motion.div>

        {/* Location Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-3">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => setActiveLocation(location)}
                className={cn(
                  "flex items-center justify-center transition-all duration-300",
                  "px-[54px] py-2 rounded-[26px]",
                  "text-[18px] font-normal",
                  "border-2",
                  activeLocation === location
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-[#F1F1F1] hover:border-gray-300"
                )}
                style={{
                  fontFamily: 'Poppins',
                  lineHeight: 'normal'
                }}
              >
                {location}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Property Grid - 2x2 Layout */}
        <motion.div
          className="flex flex-col gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* First Row: Small + Large */}
          <div className="flex flex-col lg:flex-row gap-6">
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className=" overflow-hidden relative w-full lg:w-[336px] h-[300px] sm:h-[400px] lg:h-[438.75px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={properties[0].image}
                    alt={properties[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className=" overflow-hidden relative w-full lg:w-[896px] h-[300px] sm:h-[400px] lg:h-[438.75px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={properties[1].image}
                    alt={properties[1].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row: Large + Small */}
          <div className="flex flex-col lg:flex-row gap-6">
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div 
                className="overflow-hidden relative w-full lg:w-[896px] h-[300px] sm:h-[400px] lg:h-[438.75px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={properties[2].image}
                    alt={properties[2].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div 
                className=" overflow-hidden relative w-full lg:w-[336px] h-[300px] sm:h-[400px] lg:h-[438.75px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={properties[3].image}
                    alt={properties[3].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            className="px-6 py-3 text-base font-semibold bg-white text-black hover:bg-black/90 hover:text-white border border-[#E5E5E5]"
            style={{borderRadius:"10px"}}
            onClick={() => {}}
          >
            Explore All Properties
          </button>
        </motion.div>
      </div>
    </section>
  );
}
