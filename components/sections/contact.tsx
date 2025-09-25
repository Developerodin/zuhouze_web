"use client";

import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe } from "@/components/ui/globe";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { motion } from "framer-motion";
import { useState, forwardRef, useRef } from "react";
import { Users, Mail, Phone, MapPin, MessageCircle, Send, Heart, Star, ChevronRight } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Refs for animated beam
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contact Button with Gradient Text */}
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
                  fontSize: '30px',
                  fontWeight: 400,
                  background: 'linear-gradient(90deg, rgba(236, 72, 153, 1), rgba(151, 79, 223, 1), rgba(28, 114, 255, 1), rgba(16, 185, 129, 1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 'normal'
                }}
              >
                Contact
              </AnimatedGradientText>
            </div>
          </div>
          
          {/* Main Title */}
          <h2 style={{ fontFamily: 'var(--font-fredoka)', fontSize: "60px", fontWeight: 400, color: '#000' }}>
            Let's Connect
          </h2>
        </motion.div>

        {/* Animated Beam Section */}
        {/* <motion.div
          className="relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10 mb-16"
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex size-full max-h-[300px] max-w-2xl flex-col items-stretch justify-between gap-10">
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div1Ref}>
                <MessageCircle className="h-6 w-6 text-blue-500" />
              </Circle>
              <Circle ref={div5Ref}>
                <Mail className="h-6 w-6 text-green-500" />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div2Ref}>
                <Phone className="h-6 w-6 text-purple-500" />
              </Circle>
              <Circle ref={div4Ref} className="size-16">
                <Heart className="h-8 w-8 text-red-500" />
              </Circle>
              <Circle ref={div6Ref}>
                <Star className="h-6 w-6 text-yellow-500" />
              </Circle>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Circle ref={div3Ref}>
                <Users className="h-6 w-6 text-indigo-500" />
              </Circle>
              <Circle ref={div7Ref}>
                <Send className="h-6 w-6 text-pink-500" />
              </Circle>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div4Ref}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
            reverse
          />
        </motion.div> */}

        {/* Contact Form Section */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
         

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label> */}
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                required
                className="w-full"
                style={{
                  padding: '21px 24px',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '8px',
                  border: '1px solid #E5E5E5',
                  background: '#F8F8F8'
                }}
              />
            </div>

            <div>
              {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label> */}
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                required
                className="w-full"
                style={{
                  padding: '21px 24px',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '8px',
                  border: '1px solid #E5E5E5',
                  background: '#F8F8F8'
                }}
              />
            </div>

            <div>
              {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label> */}
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={7}
                placeholder="Your Message"
                required
                className="w-full"
                style={{
                  padding: '21px 24px',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '8px',
                  border: '1px solid #E5E5E5',
                  background: '#F8F8F8'
                }}
              />
            </div>

            <div className="flex justify-center mt-8">
              <ShimmerButton
                className="px-12 py-3 w-48 text-base font-semibold bg-black text-white hover:bg-black/90 hover:text-black"
                borderRadius="10px"
                onClick={() => handleSubmit(new Event('submit') as any)}
              >
                Let's Talk
              </ShimmerButton>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center gap-2 mt-12">
              {/* Facebook */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 flex items-center justify-center transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
