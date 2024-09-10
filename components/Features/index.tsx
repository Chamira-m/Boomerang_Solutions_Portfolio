"use client"; // For using Framer Motion with Next.js

import { motion } from "framer-motion";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen overflow-hidden bg-gradient-to-r from-[#87c3b6] via-[#a3e4d7] to-[#eecc99] py-32 2xl:py-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div
          className="text-center md:mb-20 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <motion.h2
            className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Main Features
          </motion.h2> */}
          {/* <motion.p
            className="text-base !leading-relaxed text-body-color md:text-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Explore our diverse range of services designed to meet your business
            needs. From web and app development to branding and social media
            management, we offer tailored solutions to help your business
          </motion.p> */}
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
