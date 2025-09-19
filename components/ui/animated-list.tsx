"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedList({
  children,
  className,
  delay = 0.1,
}: AnimatedListProps) {
  return (
    <motion.div
      className={cn("space-y-4", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedListItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedListItem({
  children,
  className,
  delay = 0,
}: AnimatedListItemProps) {
  return (
    <motion.div
      className={cn("", className)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}




