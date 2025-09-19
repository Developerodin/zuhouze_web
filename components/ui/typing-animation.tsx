"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function TypingAnimation({
  text,
  className,
  speed = 100,
  delay = 0,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
