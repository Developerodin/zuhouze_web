"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export function GlobeSection() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: '#FCFCFC',marginLeft:"40px",marginRight:"40px",borderRadius:"26px" }}>
      <div >
        <div 
          className="absolute bottom-[-140px] left-0 w-1/2 h-1/2 z-10"
          style={{
            background: 'linear-gradient(135deg, #974FDF 0%, #1C72FF 50%, #10B981 100%)',
            opacity: 0.3,
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        
        
        <motion.div
          className="absolute top-20 left-8 md:left-16 z-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <h1 className="mb-4" style={{ fontFamily: 'var(--font-fredoka)', lineHeight: '0.9' }}>
            <div
              style={{
                background: 'linear-gradient(230deg, #EC4899 6.18%, #974FDF 41.1%, #1C72FF 56.62%, #10B981 76.41%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '132px',
                display: 'block'
              }}
            >
              Homes Across
            </div>
            <div
              style={{
                background: 'linear-gradient(230deg, #EC4899 6.18%, #974FDF 41.1%, #1C72FF 56.62%, #10B981 76.41%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '132px',
                display: 'block'
              }}
            >
              the Globe.
            </div>
          </h1>
          
          
          <motion.p
            className="text-lg md:text-xl text-black mb-4"
            style={{ fontFamily: 'var(--font-fredoka)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Spin and explore →
          </motion.p>
        </motion.div>

        {/* Globe Section - Bottom Right */}
        <motion.div
          className="absolute bottom-0 right-0 z-30 "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Globe Container - Show only upper half */}
          <div className="relative h-[562px] mt-0" >
            <div className="absolute -top-[200px] -right-[10px] w-[800px] h-[800px] " >
              <Globe className="h-full w-full top-40" />
            </div>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
}
