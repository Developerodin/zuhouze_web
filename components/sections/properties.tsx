"use client";

import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const locations = ["Mumbai", "Delhi", "Dubai", "Singapore"];

const properties = [
  {
    id: 1,
    title: "Luxury Penthouse",
    price: "₹2.5 Cr",
    location: "Mumbai",
    image: "/assets/property-card-1-54c81e.png",
    verified: true,
    new: true,
  },
  {
    id: 2,
    title: "Modern Apartment",
    price: "₹1.8 Cr",
    location: "Mumbai",
    image: "/assets/property-card-2-54c81e.png",
    verified: true,
    new: false,
  },
  {
    id: 3,
    title: "Villa with Garden",
    price: "₹3.2 Cr",
    location: "Mumbai",
    image: "/assets/property-card-3-54c81e.png",
    verified: true,
    new: true,
  },
  {
    id: 4,
    title: "Studio Apartment",
    price: "₹95 L",
    location: "Mumbai",
    image: "/assets/property-card-4-54c81e.png",
    verified: true,
    new: false,
  },
  {
    id: 5,
    title: "Duplex House",
    price: "₹2.1 Cr",
    location: "Mumbai",
    image: "/assets/property-card-5-54c81e.png",
    verified: true,
    new: false,
  },
];

export function Properties() {
  const [activeLocation, setActiveLocation] = useState("Mumbai");

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4">
            Spaces
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Properties
          </h2>
        </motion.div>

        {/* Location Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => setActiveLocation(location)}
                className={cn(
                  "px-6 py-2 rounded-md text-sm font-medium transition-colors",
                  activeLocation === location
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {location}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Property Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative group-hover:scale-105">
                <div className="relative">
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {property.verified && (
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                        Verified
                      </span>
                    )}
                    {property.new && (
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                        New this week
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{property.price}</p>
                  <p className="text-gray-600">{property.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ShimmerButton
            className="px-8 py-4 text-lg font-semibold"
            onClick={() => {}}
          >
            Explore All Properties
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
