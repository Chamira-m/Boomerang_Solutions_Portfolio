"use client"; // For using Framer Motion with Next.js

import { motion } from "framer-motion";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

// Utility function for randomizing position
const getRandomPosition = () => ({
  x: Math.random() * 100 - 50 + "vw",
  y: Math.random() * 100 - 50 + "vh",
});

// Array of colors and shapes
const shapes = [
  "rounded-full", // Circle
  "rounded-lg", // Rounded Rectangle
  "rounded-md", // Slightly Rounded Rectangle
  "rounded-none", // Square
  "aspect-w-1 aspect-h-1", // Square Aspect Ratio
  "rounded-t-full", // Top Rounded Corners
  "rounded-b-full", // Bottom Rounded Corners
  "rounded-tr-full", // Top-Right Corner Rounded
  "rounded-bl-full", // Bottom-Left Corner Rounded
];

const colors = [
  "bg-[#1abc9c]", // Turquoise Blue
  "bg-[#e74c3c]", // Alizarin
  "bg-[#f1c40f]", // Sun Flower
  "bg-[#e67e22]", // Carrot
  "bg-[#95a5a6]", // Concrete
  "bg-[#ecf0f1]", // Clouds
  "bg-[#3498db]", // Peter River
  "bg-[#9b59b6]", // Amethyst
];

const Hero = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#3498db] via-[#9b59b6] to-[#e84393] text-white">
      {/* Background circles animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15), transparent)",
        }}
      />

      {/* Animated Elements */}
      {Array.from({ length: 20 }).map((_, index) => {
        const shape = shapes[index % shapes.length];
        const color = colors[index % colors.length];
        const size = Math.random() * 80 + 40 + "px"; // Random size between 40px and 120px
        return (
          <motion.div
            key={index}
            className={`absolute ${shape} ${color} opacity-30`}
            style={{
              width: size,
              height: size,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5],
              x: [0, getRandomPosition().x],
              y: [0, getRandomPosition().y],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          />
        );
      })}

      {/* Animated Heading */}
      <motion.h1
        className="z-10 text-center text-4xl font-bold md:text-6xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Welcome to SeynarLabs
      </motion.h1>

      {/* Subtitle with animation */}
      <motion.p
        className="z-10 mt-4 text-center text-lg md:text-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Your ultimate partner in IT, Web, and App Development
      </motion.p>

      {/* Animated Buttons */}
      <div className="z-10 mt-8 flex flex-col md:flex-row">
        <motion.a
          href="/pricing"
          className="mb-4 w-48 rounded-full bg-[#3498db] px-6 py-3 text-center font-semibold text-white hover:bg-[#2980b9] md:mb-0 md:mr-4"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
        >
          Explore Services
        </motion.a>
        <motion.a
          href="/contact"
          className="w-48 rounded-full bg-[#1abc9c] px-6 py-3 text-center font-semibold text-white hover:bg-[#16a085]"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
        >
          Contact Us
        </motion.a>
      </div>
      <div className="absolute bottom-4 z-10 flex flex-col items-center justify-center md:bottom-10 md:right-10 md:flex-row md:justify-end lg:bottom-4 lg:right-10">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Hero;
