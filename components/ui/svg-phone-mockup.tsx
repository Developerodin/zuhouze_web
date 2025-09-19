"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface SVGPhoneMockupProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SVGPhoneMockup({
  className,
  size = "md",
}: SVGPhoneMockupProps) {
  const sizeClasses = {
    sm: "w-48 h-[400px]",
    md: "w-56 h-[500px]", 
    lg: "w-64 h-[600px]"
  };

  return (
    <div className={cn("relative mx-auto", sizeClasses[size], className)}>
      <Image
        src="/assets/branding/phonemockup.svg"
        alt="Phone Mockup"
        fill
        className="object-contain"
      />
    </div>
  );
}
