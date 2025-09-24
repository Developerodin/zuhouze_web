"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full">
      <div className="mx-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg">
        <div className="flex items-center justify-between py-3 px-10">
          {/* Logo Section */}
          <div className="flex items-center" style={{ width: "500px" }}>
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
          <nav className="hidden md:flex items-center space-x-12" style={{ flex: 1, justifyContent: "center" }}>
            <a
              href="#about"
              className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-white/20"
              style={{
                fontFamily: "Poppins Medium",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "normal"
              }}
            >
              About
            </a>
            <a
              href="#properties"
              className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-white/20"
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
              href="#faq"
              className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-white/20"
              style={{
                fontFamily: "Poppins Medium",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "normal"
              }}
            >
              FAQ's
            </a>
            <a
              href="#contact"
              className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-white/20"
              style={{
                fontFamily: "Poppins Medium",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "normal"
              }}
            >
              Contact
            </a>
          </nav>

          {/* Buttons Section */}
          <div className="flex items-center space-x-4" style={{ width: "500px", justifyContent: "flex-end" }}>
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
                backgroundColor: "white"
              }}
            >
              Builder Login
            </button>
            <button 
              className="px-6 py-3 transition-all duration-200"
              style={{
                fontFamily: "Poppins Medium",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "normal",
                color: "white",
                borderRadius: "10px",
                backgroundColor: "#000"
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}




