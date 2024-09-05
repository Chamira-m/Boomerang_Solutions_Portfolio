"use client"; // For using Framer Motion with Next.js

import Link from "next/link";
import { motion } from "framer-motion";
const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const buttonVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: { opacity: 1, x: 0 },
};

const buttonVariantsRight = {
  hidden: { opacity: 0, x: "100vw" },
  visible: { opacity: 1, x: 0 },
};

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[900px] text-center"
                data-wow-delay=".2s"
              >
                <motion.h1
                  className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  initial="hidden"
                  animate="visible"
                  variants={textAnimation}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Driving Innovation and Growth in the Digital World
                </motion.h1>
                <motion.p
                  className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl"
                  initial="hidden"
                  animate="visible"
                  variants={textAnimation}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  At Boomerang Solutions, we specialize in creating dynamic
                  websites, developing custom mobile apps, and delivering
                  comprehensive IT solutions. Our expertise also extends to
                  professional logo design and strategic social media
                  management, all aimed at enhancing your brans online presence
                  and driving business growth.
                </motion.p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={buttonVariants}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 50,
                    }}
                  >
                    <Link
                      href="/pricing"
                      className="block w-48 rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                      Explore More
                    </Link>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={buttonVariantsRight}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 50,
                    }}
                  >
                    <Link
                      href="/contact"
                      className="inline-block w-48 rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
              animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="140"
              cy="430"
              r="60"
              fill="url(#paint7_radial_25:217)"
              animate={{ scale: [1, 0.9, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="80"
              cy="370"
              r="45"
              fill="url(#paint8_radial_25:217)"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="192.006"
                y1="233.131"
                x2="192.006"
                y2="371.549"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint7_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(140 430) rotate(90) scale(60)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint8_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(80 370) rotate(90) scale(45)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 z-[-1] opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <svg
            width="380"
            height="440"
            viewBox="0 0 380 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="180"
              cy="370"
              r="120"
              fill="url(#paint0_linear_25:217)"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="220"
              cy="200"
              r="80"
              fill="url(#paint1_radial_25:217)"
              animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="100"
              cy="150"
              r="50"
              fill="url(#paint2_radial_25:217)"
              animate={{ scale: [1, 0.9, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="180"
                y1="250"
                x2="180"
                y2="490"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 200) rotate(90) scale(80)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(100 150) rotate(90) scale(50)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
