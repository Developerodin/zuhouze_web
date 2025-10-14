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
            <p style={{
              fontFamily: 'Poppins',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 400,
              color: '#666',
              lineHeight: '1.8'
            }}>
              Our mission is to revolutionize the property search experience by leveraging cutting-edge AI technology. 
              We aim to make finding your dream property as simple and enjoyable as swiping through your favorite app. 
              By connecting property seekers with the perfect homes across the globe, we strive to eliminate the 
              stress and complexity traditionally associated with property hunting. Our platform empowers users to 
              make informed decisions quickly and confidently, ensuring that every match is tailored to their unique 
              preferences and lifestyle needs.
            </p>
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
            <p style={{
              fontFamily: 'Poppins',
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 400,
              color: '#666',
              lineHeight: '1.8'
            }}>
              We envision a world where finding the perfect property is no longer a daunting task but an exciting 
              journey of discovery. Our goal is to become the world's most trusted and innovative property matching 
              platform, where technology and human aspirations meet seamlessly. We see a future where every individual, 
              regardless of location or background, has access to personalized property recommendations that align 
              perfectly with their dreams and requirements. Through continuous innovation and user-centric design, 
              we aim to set new standards in the real estate industry.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

