"use client";

import { cn } from "@/lib/utils";

interface IPhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark";
}

export function IPhoneMockup({
  children,
  className,
  variant = "default",
}: IPhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto border-gray-800 bg-gray-800 p-[4px] shadow-[0_0_0_1px_rgba(255,255,255,0.1)] shadow-2xl",
        className,
      )}
      style={{
        borderRadius: "2.5rem",
        padding: "4px",
        background: variant === "dark" ? "#1a1a1a" : "#f0f0f0",
      }}
    >
      <div
        className="relative overflow-hidden rounded-[2.25rem]"
        style={{
          width: "300px",
          height: "600px",
        }}
      >
        {children}
      </div>
    </div>
  );
}




