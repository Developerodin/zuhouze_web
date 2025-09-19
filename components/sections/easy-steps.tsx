"use client";

import { cn } from "@/lib/utils";
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list";
import { MagicCard } from "@/components/ui/magic-card";
import { motion } from "framer-motion";
import { Play, Bookmark, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: 1,
    icon: Play,
    title: "Swipe & Watch",
    description: "scroll property videos like reels.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 2,
    icon: Bookmark,
    title: "Shortlist & Share",
    description: "save or send to friends instantly.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 3,
    icon: MessageCircle,
    title: "Connect & Visit",
    description: "chat or schedule visits directly.",
    color: "from-green-500 to-emerald-500",
  },
];

export function EasySteps() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
                Journey
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Easy Steps
              </h2>
              <p className="text-xl text-gray-600">
                Discover, shortlist, and connect - a seamless path to your new space.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-gray-900">{step.number}</span>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white rounded-full hover:bg-black/90 transition-colors text-lg font-medium">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/easy-steps-image.png"
                  alt="Easy Steps"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




