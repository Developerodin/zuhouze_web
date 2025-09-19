"use client";

import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  onClick?: () => void;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.5px",
  borderRadius = "100px",
  shimmerDuration = "3s",
  background = "rgba(0, 0, 0, 1)",
  onClick,
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-slate-400/10 bg-slate-900 px-6 py-3 text-white [background:linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] [background-size:250%_250%,100%_100%] [background-position:100%_100%,0%_0%] transition-all duration-300 hover:border-slate-400/20 hover:[background-position:0%_0%,0%_0%]",
        className,
      )}
      style={{
        borderRadius,
        background,
      }}
      onClick={onClick}
    >
      <span className="relative z-10 font-medium">{children}</span>
      <div
        className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${shimmerColor} 50%, transparent 70%)`,
          backgroundSize: `${shimmerSize} ${shimmerSize}`,
          animation: `shimmer ${shimmerDuration} ease-in-out infinite`,
        }}
      />
    </button>
  );
}
