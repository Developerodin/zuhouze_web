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
    <section id="properties" className="py-20 bg-white">
      <div className="w-full mx-auto" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
        {/* Recent AI Driven Suggestions */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <AnimatedGradientText
              className="text-sm font-medium"
              style={{
                fontFamily: 'var(--font-fredoka)', 
                fontSize: '24px',
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
            {/* <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-xs">✨</span>
            </div> */}
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
              fontSize: "60px", 
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
                fontSize: "48px", 
                fontWeight: 400, 
                color: '#000'
              }}>
                109+
              </span>
              <span style={{ 
                fontFamily: 'var(--font-fredoka)', 
                fontSize: "18px", 
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
          className="flex items-center justify-between mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Left Side - Price Filter and City Buttons */}
          <div className="flex items-center gap-6">
            {/* Price Filter */}
            <button
              className="flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors"
              style={{ 
                fontFamily: 'Poppins',
                borderRadius: '10px',
                border: '1px solid #ECECEC',
                padding: '11px 32px',
                color: '#000',
                marginRight: '20px'
              }}
            >
              <span>Price</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>

            {/* City Buttons */}
            <div className="flex gap-3">
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
                    padding: '14px 40px',
                    color: activeLocation === location ? '#fff' : '#000',
                    backgroundColor: activeLocation === location ? '#000' : 'rgba(234, 234, 238, 0.31)'
                  }}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - View Properties Button */}
          <button
            className="px-6 py-3 text-base font-semibold bg-black text-white hover:bg-black/90 rounded-lg"
            style={{ fontFamily: 'Poppins' }}
          >
            View Properties
          </button>
        </motion.div>


        <motion.div
          className="mb-10"
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
          className="flex gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* First Property Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative" style={{ width: '709px', height: '576px' }}>
              <Image
                src="/assets/NewProperty.svg"
                alt="Property 1"
                width={709}
                height={576}
                className="object-contain"
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
            <div className="relative" style={{ width: '709px', height: '576px' }}>
              <Image
                src="/assets/NewProperty_2.svg"
                alt="Property 2"
                width={709}
                height={576}
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
