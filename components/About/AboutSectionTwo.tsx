"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutSectionTwo = () => {
  return (
    <section className="bg-[#5970b6] py-16 text-white md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <motion.div
            className="w-full px-4 lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full px-4 lg:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Cutting-Edge Technology
                </h3>
                <p className="text-base font-medium leading-relaxed text-white sm:text-lg sm:leading-relaxed">
                  We leverage the latest technologies to deliver solutions that
                  are both innovative and effective, ensuring your business
                  stays ahead in the digital landscape.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Dedicated Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-white sm:text-lg sm:leading-relaxed">
                  Our team provides comprehensive support to ensure your
                  solutions are running smoothly and any issues are resolved
                  promptly.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Proven Expertise
                </h3>
                <p className="text-base font-medium leading-relaxed text-white sm:text-lg sm:leading-relaxed">
                  With extensive experience in web and mobile development, we
                  bring valuable insights and proven strategies to every
                  project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
