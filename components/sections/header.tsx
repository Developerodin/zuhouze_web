"use client";

import { cn } from "@/lib/utils";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="backdrop-blur-md">
        <div className="flex items-center justify-between py-3 sm:py-5 px-4 sm:px-8 lg:px-12">
          {/* Logo Section */}
          <div className="flex items-center" style={{ width: "500px" }}>
            <button
              onClick={scrollToTop}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/assets/Logo.png"
                alt="Zuhouze Logo"
                width={197}
                height={48}
                className="h-8 sm:h-10 w-auto ml-2"
                priority
              />
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-12" style={{ flex: 1, justifyContent: "center" }}>
            <a
              href="#about"
              className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-white/20"
              style={{
                fontFamily: "var(--font-poppins)",
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
                fontFamily: "var(--font-poppins)",
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
                fontFamily: "var(--font-poppins)",
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
                fontFamily: "var(--font-poppins)",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "normal"
              }}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Buttons Section */}
          <div className="hidden lg:flex items-center space-x-4" style={{ width: "500px", justifyContent: "flex-end" }}>
            <button 
              className="px-6 py-3 border transition-all duration-200"
              style={{
                borderColor: "rgba(211, 211, 211, 0.31)",
                fontFamily: "var(--font-poppins)",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "normal",
                color: "#000",
                borderRadius: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.00)"
              }}
            >
              Builder Login
            </button>
            <button 
              className="px-6 py-3 transition-all duration-200"
              style={{
                fontFamily: "var(--font-poppins)",
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-3">
                <a
                  href="#about"
                  className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-4 py-3 rounded-lg hover:bg-gray-100"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "normal"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#properties"
                  className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-4 py-3 rounded-lg hover:bg-gray-100"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "normal"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Properties
                </a>
                <a
                  href="#faq"
                  className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-4 py-3 rounded-lg hover:bg-gray-100"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "normal"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ's
                </a>
                <a
                  href="#contact"
                  className="text-black hover:text-gray-700 transition-colors duration-200 font-medium px-4 py-3 rounded-lg hover:bg-gray-100"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "normal"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <button 
                  className="w-full px-6 py-3 border transition-all duration-200 rounded-lg"
                  style={{
                    borderColor: "rgba(211, 211, 211, 0.31)",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "normal",
                    color: "#000",
                    backgroundColor: "rgba(0, 0, 0, 0.00)"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Builder Login
                </button>
                <button 
                  className="w-full px-6 py-3 transition-all duration-200 rounded-lg"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "normal",
                    color: "white",
                    backgroundColor: "#000"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}




