"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg">
        <div className="flex items-center justify-between py-3 px-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/assets/Logo.png"
              alt="Zuhouze Logo"
              width={197}
              height={48}
              className="h-10 w-auto ml-2"
              priority
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#properties"
              className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-3 py-1 rounded-full hover:bg-white/20"
              style={{
                fontFamily: "Poppins Medium",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "normal"
              }}
            >
              Properties
            </a>
            <a
              href="#community"
              className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-3 py-1 rounded-full hover:bg-white/20"
              style={{
                fontFamily: "Poppins Medium",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "normal"
              }}
            >
              Community
            </a>
          </nav>

          {/* Search Button */}
          <div className="flex items-center">
            <button 
              className="px-6 py-3 border transition-all duration-200"
              style={{
                borderColor: "#E5E5E5",
                fontFamily: "Poppins Medium",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "normal",
                color: "#000",
                borderRadius: "10px",
              }}
            >
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}




