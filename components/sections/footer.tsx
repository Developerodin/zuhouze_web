"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ShimmerButton } from "../ui/shimmer-button";

export function Footer() {
  return (
    <>   
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <NeonGradientCard borderSize={1} neonColors={{ firstColor: "#59C79A", secondColor: "#1B72FF" }}>
  
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="flex-1 text-center md:text-left">
      <h2 className="heading">Subscribe to our newsletter</h2>
      <p className="description">Stay updated with the latest news and updates in global real estate</p>
     </div>
     <div className="flex-1 flex items-center justify-center md:justify-end gap-3 w-full">
      <Input type="email" placeholder="Enter your email" className="input" />
      <ShimmerButton
                  className="px-12 py-3 w-48 text-base font-semibold bg-black text-white hover:bg-black/90 hover:text-black"
                  borderRadius="10px"
                >
                  Subscribe
                </ShimmerButton>
     </div>
    </div>
  
      </NeonGradientCard>
   
    </div>
    <br />
    <footer className="bg-white pb-6 pt-3">
     
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Section */}
        <motion.div
          className="flex justify-center items-start pt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-600 text-sm text-center md:text-left">
            <span>Copyright © 2025 Zuhouze. All rights reserved.</span>
            <span className="text-gray-400 hidden md:inline">|</span>
            <a
              href="privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400 hidden md:inline">|</span>
            <a
              href="terms-and-conditions"
              className="hover:text-gray-900 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
    </>
  );
}




