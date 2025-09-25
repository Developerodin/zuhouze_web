"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pb-30 pt-6">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Section */}
        <motion.div
          className="flex justify-center items-start pt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 text-gray-600 text-sm">
            <span>Copyright © 2025 Zuhouze. All rights reserved.</span>
            <span className="text-gray-400">|</span>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}




