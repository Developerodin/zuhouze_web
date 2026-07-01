"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

const Globe = dynamic(
  () => import("@/components/ui/globe").then((mod) => mod.Globe),
  {
    ssr: false,
    loading: () => <div className="h-full w-full" aria-hidden="true" />,
  }
);

export function GlobeSection() {
  return (
    <section className="relative h-[450px] md:h-[600px] overflow-hidden py-6 md:py-20" style={{ background: '#FCFCFC', borderRadius:"26px",marginRight:"30px",marginLeft:"30px" ,marginTop:"10px" ,marginBottom:"20px"}}>
      <div >
        {/* Gradient Background - Desktop only */}
        <div 
          className="absolute bottom-[-140px] left-0 w-1/2 h-1/2 z-10 hidden md:block"
          style={{
            background: 'linear-gradient(135deg, #974FDF 0%, #1C72FF 50%, #10B981 100%)',
            opacity: 0.3,
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Desktop Layout - Unchanged */}
        <motion.div
          className="absolute top-20 left-8 md:left-16 z-20 hidden md:block"
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
                fontSize: '100px',
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
                fontSize: '100px',
                display: 'block'
              }}
            >
              the Globe.
            </div>
          </h1>
          
          
          
          <motion.p
            className="text-lg md:text-lg text-black mb-4"
            style={{ fontFamily: 'var(--font-fredoka)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="w-xl"> 
            Zuhouze makes global property discovery simple, seamless, and just a tap away.
Explore dream homes and investments across the world with ease.
Your next property is waiting — just tap and explore with Zuhouze.
            </p>
          </motion.p>
<Link href="/properties">
          <motion.p
            className="text-lg md:text-xl text-black mb-1 cursor-pointer hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'var(--font-fredoka)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Spin and explore →
          </motion.p>
          </Link>

        </motion.div>

        {/* Mobile Layout - Centered */}
        <motion.div
          className="absolute top-12 left-0 right-0 text-center z-20 block md:hidden px-4"
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
                fontSize: 'clamp(32px, 8vw, 48px)',
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
                fontSize: 'clamp(32px, 8vw, 48px)',
                display: 'block',
                paddingTop: '10px'
              }}
            >
              the Globe.
            </div>
          </h1>
          
          
          <Link href="/properties">
          <motion.p
            className="text-lg text-black mb-4 cursor-pointer hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'var(--font-fredoka)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Spin and explore →
          </motion.p>
          </Link>
        </motion.div>

        {/* Globe — always visible wrapper with explicit size (no opacity animation) */}
        <div className="absolute z-30 top-[180px] left-0 right-0 flex justify-center md:top-auto md:bottom-0 md:left-auto md:right-0 md:block md:h-[562px] md:w-[800px]">
          <div className="relative h-[250px] w-[250px] md:absolute md:top-[100px] md:-right-[10px] md:h-[800px] md:w-[800px]">
            <Globe className="h-full w-full" />
          </div>
        </div>
      </div>

      
    </section>
  );
}
