"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: TextRevealProps) {
  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
