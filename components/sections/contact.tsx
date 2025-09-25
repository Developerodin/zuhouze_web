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
import Image from "next/image";

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
    <section id="contact" className="py-20 bg-white">
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
            <div className="relative z-10 flex items-center gap-1">
              <Image
                src="/assets/Phone.png"
                alt="Phone"
                width={32}
                height={32}
              />
              <AnimatedGradientText
                className="text-sm font-medium"
                style={{
                  fontFamily: 'var(--font-fredoka)', 
                  fontSize: 'clamp(24px, 6vw, 34px)',
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
          <h2 style={{ fontFamily: 'var(--font-fredoka)', fontSize: "clamp(32px, 8vw, 60px)", fontWeight: 400, color: '#000' }}>
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
            <div className="flex justify-center items-center gap-6 mt-12">
              {/* Facebook */}
              <a 
                href="#" 
                className="hover:opacity-70 transition-opacity duration-300"
                aria-label="Facebook"
              >
                <Image
                  src="/assets/Facebook.png"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
              </a>

              {/* Instagram */}
              <a 
                href="#" 
                className="hover:opacity-70 transition-opacity duration-300"
                aria-label="Instagram"
              >
                <Image
                  src="/assets/Insta.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>

              {/* YouTube */}
              <a 
                href="#" 
                className="hover:opacity-70 transition-opacity duration-300"
                aria-label="YouTube"
              >
                <Image
                  src="/assets/Youtube.png"
                  alt="YouTube"
                  width={37}
                  height={26}
                />
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
