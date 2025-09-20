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
                Journey
              </AnimatedGradientText>
            </div>
          </div>
          
          {/* Main Title */}
          <h2 style={{ fontFamily: 'var(--font-fredoka)',fontSize:"36px",fontWeight:400 }}>
            Easy Steps
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-black max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-fredoka)' }}>
            Discover, shortlist, and connect — a seamless path to your new space.
          </p>
        </motion.div>

        {/* Horizontal Steps Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
          {/* Steps Cards Container */}
          <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-0 lg:gap-0 w-full lg:w-auto" style={{gap:30}}>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative w-full sm:w-1/3 lg:w-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div 
                  className="relative flex flex-col items-center justify-center  w-full h-[200px] sm:h-[300px] px-4 py-8 sm:px-6 sm:py-12"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    borderRadius: '26px',
                    border:"1px solid #f1f1f1",
                    background: '#F8F8F8',
                    minWidth: '280px',
                    maxWidth: '320px',
                    marginRight: '0'
                  }}
                >
      
                  <div className="relative z-10">
                    <span style={{ fontFamily: 'var(--font-fredoka)', fontSize: '18px', fontWeight: 400, color: '#000' }}>{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="relative z-10 text-lg font-bold" style={{ fontFamily: 'var(--font-fredoka)', fontSize: '20px', fontWeight: 400, color: '#000' }}>{step.title}</h3>
                  
                  {/* Description */}
                  <p className="relative z-10 text-sm" style={{ fontFamily: 'var(--font-fredoka)', fontSize: '14px', color: '#666' }}>{step.description}</p>
                </div>
                
                {/* Connecting dots between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-20">
                    <div 
                      style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#10B981',
                        borderRadius: '50%',
                      }}
                    ></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Property Image */}
          <motion.div
            className="relative w-full lg:w-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div 
              className="relative w-full h-[200px] sm:h-[300px] lg:h-[300px]"
              style={{
                width: '60%',
                minWidth: '168px',
                maxWidth: '192px',
                borderRadius: '26px',
                overflow: 'hidden',
                border: '1px solid #f1f1f1',
                borderLeft: 'none',
                marginLeft: '0'
              }}
            >
              <Image
                src="/assets/EasySteps.svg"
                alt="Property showcase"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




