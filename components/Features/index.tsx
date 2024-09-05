"use client"; // For using Framer Motion with Next.js

import { motion } from "framer-motion";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <motion.div
          className="mb-16 text-center md:mb-20 lg:mb-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Main Features
          </motion.h2>
          <motion.p
            className="text-base !leading-relaxed text-body-color md:text-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
