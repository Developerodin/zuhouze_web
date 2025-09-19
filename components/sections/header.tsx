"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
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
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Properties
            </a>
            <a
              href="#community"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Community
            </a>
          </nav>

          {/* Search Button */}
          <div className="flex items-center">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
              <Search className="h-4 w-4 text-gray-600" />
              <span className="text-gray-600 font-medium">Search Properties</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}




