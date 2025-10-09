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
    <section id="contact" className="py-10 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Contact Button with Gradient Text */}
          <div className="group relative mx-auto inline-flex items-center justify-center mb-0">
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
          {/* <h2 style={{ fontFamily: 'var(--font-fredoka)', fontSize: "clamp(32px, 8vw, 60px)", fontWeight: 400, color: '#000' }}>
            Let's Connect
          </h2> */}
        </motion.div>

        {/* Desktop: Side by Side Layout | Mobile: Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Heading */}
            <h2 style={{ fontFamily: 'var(--font-fredoka)', fontSize: "clamp(32px, 8vw, 50px)", fontWeight: 400, color: '#000' }}>
              Reach Out to Us
            </h2>
            
            {/* Subheading */}
            <p 
              style={{ 
                fontFamily: 'var(--font-fredoka)', 
                fontSize: "clamp(16px, 3vw, 18px)", 
                fontWeight: 300, 
                color: '#666',
                lineHeight: '1.6'
              }}
            >
              We'd love to hear from you! Get in touch with us for any inquiries or support.
            </p>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black to-purple-500 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p 
                  style={{ 
                    fontFamily: 'var(--font-fredoka)', 
                    fontSize: "14px", 
                    fontWeight: 500, 
                    color: '#999',
                    marginBottom: '0px'
                  }}
                >
                  Phone
                </p>
                <a 
                  href="tel:9967567964"
                  style={{ 
                    fontFamily: 'var(--font-fredoka)', 
                    fontSize: "clamp(14px, 3vw, 18px)", 
                    fontWeight: 400, 
                    color: '#000'
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  9967567964
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p 
                  style={{ 
                    fontFamily: 'var(--font-fredoka)', 
                    fontSize: "14px", 
                    fontWeight: 500, 
                    color: '#999',
                    marginBottom: '0px'
                  }}
                >
                  Email
                </p>
                <a 
                  href="mailto:support@zuhouze.com"
                  style={{ 
                    fontFamily: 'var(--font-fredoka)', 
                    fontSize: "clamp(14px, 3vw, 18px)", 
                    fontWeight: 400, 
                    color: '#000'
                  }}
                  className="hover:text-blue-600 transition-colors break-all"
                >
                  support@zuhouze.com
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
              {/* Facebook */}
              <a 
                href="#" 
                className="hover:opacity-70 transition-opacity duration-300"
                aria-label="Facebook"
              >
                <Image
                  src="/assets/Facebook.png"
                  alt="Facebook"
                  width={25}
                  height={25}
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
                  width={25}
                  height={25}
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
                  width={27}
                  height={16}
                />
              </a>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Heading */}
            <h2 style={{ fontFamily: 'var(--font-fredoka)', fontSize: "clamp(32px, 8vw, 50px)", fontWeight: 400, color: '#000' }}>
              Let's Connect
            </h2>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
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

              {/* Email Input */}
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

              {/* Message Textarea */}
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

              {/* Submit Button */}
              <div className="flex justify-start lg:justify-start">
                <ShimmerButton
                  className="px-12 py-3 w-48 text-base font-semibold bg-black text-white hover:bg-black/90 hover:text-black"
                  borderRadius="10px"
                  onClick={() => handleSubmit(new Event('submit') as any)}
                >
                  Let's Talk
                </ShimmerButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
