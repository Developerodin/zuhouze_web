"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg">
        <div className="flex items-center justify-between py-3 px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            {/* Logo Icon */}
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">Z</span>
                </div>
              </div>
            </div>
            
            {/* Logo Text */}
            <span className="text-2xl font-bold text-gray-900">
              Zuhouze
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#properties"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium px-3 py-1 rounded-full hover:bg-white/20"
            >
              Properties
            </a>
            <a
              href="#community"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium px-3 py-1 rounded-full hover:bg-white/20"
            >
              Community
            </a>
          </nav>

          {/* Search Button */}
          <div className="flex items-center">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white/30 hover:bg-white/40 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20">
              <Search className="h-4 w-4 text-gray-700" />
              <span className="text-gray-700 font-medium">Search Properties</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}




