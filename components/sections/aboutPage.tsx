"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutPage() {
  return (
    <section id="about" className="py-4 md:py-10 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 mt-10">
        {/* About Us Badge */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-1">
            {/* <AnimatedGradientText
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
              About Us
            </AnimatedGradientText> */}
            {/* <Image
              src="/assets/Star.png"
              alt="Star"
              width={36}
              height={36}
              className="sm:w-[46px] sm:h-[46px]"
            /> */}
          </div>
        </motion.div>
        <motion.div
          className="text-center mb-20 mt-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Title with Animated Zuhaush */}
          <h1 className="text-xl sm:text-xl md:text-3xl lg:text-4xl mb-6 px-4" style={{ fontFamily: 'var(--font-fredoka)' }}>
            <AnimatedGradientText
              style={{
                background: 'linear-gradient(90deg, rgba(236, 72, 153, 1), rgba(151, 79, 223, 1), rgba(28, 114, 255, 1), rgba(16, 185, 129, 1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'inherit',
                fontWeight: 'inherit'
              }}
            >
              Zuhouze
            </AnimatedGradientText>{" "}
            is a modern real-estate marketplace that puts the world’s homes at your fingertips—discover, connect, and dream in just a tap
          </h1>
        </motion.div>

        {/* Main Header Section */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 style={{ 
            fontFamily: 'var(--font-fredoka)', 
            fontSize: "clamp(22px, 8vw, 45px)", 
            fontWeight: 400, 
            color: '#000',
            lineHeight: '1.2'
          }}>
            Mission & Vision
          </h2>
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

        {/* Mission Section - Image Left, Text Right */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Mission Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Mission"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Mission Text */}
          <motion.div
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontFamily: 'var(--font-fredoka)',
              fontSize: 'clamp(20px, 5vw, 35px)',
              fontWeight: 400,
              color: '#000',
              marginBottom: '16px'
            }}>
              Our Mission
            </h3>
            <div style={{
              fontFamily: 'Poppins',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 400,
              color: '#666',
              lineHeight: '1.8'
            }}>
              <p className="mb-4">
                Our mission is to reimagine the property search experience through the power of advanced AI innovation and human connection. We're transforming the way people discover their dream homes — making it as simple, smart, and enjoyable as swiping through your favorite app.
              </p>
              
              <p className="mb-4">
                We believe that finding a home should be inspiring, not overwhelming. That's why our platform seamlessly connects property seekers with the perfect spaces that match their lifestyle, aspirations, and personal taste — no matter where they are in the world.
              </p>
              
              <p className="mb-4">
                By blending intelligent technology with a deep understanding of user preferences, we empower our community to make faster, confident, and well-informed decisions.
              </p>
              
              <p>
                At the heart of our mission lies one purpose — to turn the journey of finding a home into an effortless, personalized, and extraordinary experience.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Vision Section - Text Left, Image Right */}
        <motion.div
          className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-8 xl:gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Vision Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Vision"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Vision Text */}
          <motion.div
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontFamily: 'var(--font-fredoka)',
              fontSize: 'clamp(20px, 5vw, 35px)',
              fontWeight: 400,
              color: '#000',
              marginBottom: '16px'
            }}>
              Our Vision
            </h3>
            <div style={{
              fontFamily: 'Poppins',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 400,
              color: '#666',
              lineHeight: '1.8'
            }}>
              <p className="mb-4">
                We envision a world where finding your perfect property is not a challenge — but a joyful journey of discovery.
              </p>
              
              <p className="mb-4">
                Our vision is to become the world's most trusted and intelligent property-matching platform, where cutting-edge technology meets human aspiration in perfect harmony.
              </p>
              
              <p className="mb-4">
                We see a future where every individual, everywhere, can explore properties that are tailored to their dreams, lifestyle, and ambitions — effortlessly and confidently.
              </p>
              
              <p className="mb-4">
                Through continuous innovation, intuitive design, and deep personalization, we aim to set a new global standard in real estate — one where technology doesn't replace the human touch, but enhances it.
              </p>
              
              <p>
                At our core, we're shaping a future where finding a home isn't just about location — it's about connection, belonging, and possibility.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

