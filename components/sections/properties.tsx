"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const locations = ["Dubai", "Singapore", "Malaysia", "India"];

export function Properties() {
  const [activeLocation, setActiveLocation] = useState("Dubai");

  return (
    <section id="properties" className="py-4 md:py-10 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
        {/* Recent AI Driven Suggestions */}
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
              Recent AI Driven Suggestions
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
              Featured Properties
            </h2>
          </div>

          {/* Right Side - 109+ offers */}
          <div className="flex flex-col items-end">
            <div className="flex items-baseline gap-2">
              <span style={{ 
                fontFamily: 'var(--font-fredoka)', 
                fontSize: "clamp(32px, 6vw, 48px)", 
                fontWeight: 400, 
                color: '#000'
              }}>
                109+
              </span>
              <span style={{ 
                fontFamily: 'var(--font-fredoka)', 
                fontSize: "clamp(14px, 3vw, 18px)", 
                fontWeight: 400, 
                color: '#000',
                alignSelf: 'flex-end',
                marginBottom: '8px'
              }}>
                offers
              </span>
            </div>
          </div>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4 md:gap-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Left Side - Price Filter and City Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Price Filter */}
            <button
              className="flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors mb-3 sm:mb-0 sm:mr-5"
                style={{ 
                fontFamily: 'Poppins',
                borderRadius: '10px',
                border: '1px solid #ECECEC',
                padding: '11px 32px',
                color: '#000'
              }}
            >
              <span>Price</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>

            {/* City Buttons */}
            <div className="flex flex-wrap gap-3">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setActiveLocation(location)}
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    fontFamily: 'Poppins',
                    lineHeight: 'normal',
                    borderRadius: '32px',
                    border: '1px solid #ECECEC',
                    padding: '12px 24px',
                    color: activeLocation === location ? '#fff' : '#000',
                    backgroundColor: activeLocation === location ? '#000' : 'rgba(234, 234, 238, 0.31)'
                  }}
                  className="sm:px-10 sm:py-3.5"
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - View Properties Button */}
          <button
            className="px-6 py-3 text-base font-semibold bg-black text-white hover:bg-black/90 rounded-lg w-full md:w-auto"
            style={{ fontFamily: 'Poppins' }}
          >
            View Properties
          </button>
        </motion.div>


        <motion.div
          className="mb-6 lg:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div 
            style={{ 
              height: '1px', 
              backgroundColor: 'rgba(0, 0, 0, 0.15)' 
            }}
          />
        </motion.div>

        {/* Property Images */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 lg:gap-4 xl:gap-3 2xl:gap-3 mb-12 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* First Property Image */}
          <motion.div
            className="flex-1 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden ">
              <Image
                src="/assets/NewProperty.svg"
                alt="Property 1"
                width={100}
                height={100}
                className=" w-full"
              />
            </div>
          </motion.div>

          {/* Second Property Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full  overflow-hidden">
              <Image
                src="/assets/NewProperty_2.svg"
                alt="Property 2"
               width={100}
               height={100}
                className="w-full"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
