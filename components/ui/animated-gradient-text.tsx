"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientVia?: string;
  animationDuration?: string;
}

export function AnimatedGradientText({
  children,
  className,
  gradientFrom = "from-purple-500",
  gradientTo = "from-green-500",
  gradientVia = "via-blue-500",
  animationDuration = "3s",
}: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8cfcf1] transition-shadow duration-500 hover:shadow-[inset_0_-8px_10px_#8cfcf1] dark:bg-black/40 dark:shadow-[inset_0_-1px_0px_#8cfcf1] dark:hover:shadow-[inset_0_-1px_0px_#8cfcf1]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] bg-gradient-to-r",
          gradientFrom,
          gradientVia,
          gradientTo,
          "opacity-75 blur-sm transition-opacity duration-500 group-hover:opacity-100",
        )}
        style={{
          animation: `shimmer ${animationDuration} ease-in-out infinite`,
        }}
      />
      <span className="relative z-10 text-black dark:text-white">{children}</span>
    </div>
  );
}




