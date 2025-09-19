"use client";

import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John",
    avatar: "/assets/user-avatar-1.png",
    quote: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    id: 2,
    name: "Jack",
    avatar: "/assets/user-avatar-2.png",
    quote: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    id: 3,
    name: "Jill",
    avatar: "/assets/user-avatar-3.png",
    quote: "This platform changed how I search for properties. Absolutely fantastic!",
  },
  {
    id: 4,
    name: "James",
    avatar: "/assets/user-avatar-4.png",
    quote: "The video tours are incredible. Found my dream home in just 2 days!",
  },
  {
    id: 5,
    name: "Jane",
    avatar: "/assets/user-avatar-5.png",
    quote: "Best real estate app I've ever used. Highly recommended!",
  },
];

const avatars = [
  "/assets/user-avatar-1.png",
  "/assets/user-avatar-2.png",
  "/assets/user-avatar-3.png",
  "/assets/user-avatar-4.png",
  "/assets/user-avatar-5.png",
  "/assets/user-avatar-6.png",
  "/assets/user-avatar-7.png",
  "/assets/user-avatar-8.png",
];

export function Community() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4">
            Users
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Community
          </h2>
        </motion.div>

        {/* User Avatars */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <motion.div
                key={index}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg border-2 border-white shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={avatar}
                  alt={`User ${index + 1}`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Marquee */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Marquee pauseOnHover className="[--duration:20s]">
            {testimonials.map((testimonial) => (
              <MagicCard key={testimonial.id} className="mx-4 w-80">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 h-full border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              </MagicCard>
            ))}
          </Marquee>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors font-medium">
                Join the waitlist
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
