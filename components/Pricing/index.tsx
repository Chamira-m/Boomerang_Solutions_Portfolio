"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section
      id="pricing"
      className="relative z-10 bg-gradient-to-r from-[#87c3b6] via-[#a3e4d7] to-[#eecc99] py-3 md:py-5 lg:py-10"
    >
      <div className="container mt-24">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-full text-center"
          style={{ maxWidth: "665px", marginBottom: "100px" }}
        >
          <motion.h2
            className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-base !leading-relaxed text-body-color md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Explore our diverse range of services designed to meet your business
            needs. From web and app development to branding and social media
            management, we offer tailored solutions to help your business
            thrive.
          </motion.p>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
        >
          <PricingBox
            packageName="Web & E-commerce Development"
            subtitle="Comprehensive web and e-commerce solutions to build your online presence."
            startingPrice="$300"
          >
            <OfferList text="Custom Website Design" status="active" />
            <OfferList text="E-commerce Integration" status="active" />
            <OfferList text="Responsive Layout" status="active" />
            <OfferList text="SEO Optimization" status="active" />
            <OfferList text="Ongoing Support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="App Development"
            subtitle="Develop high-quality mobile apps tailored to your business needs."
            startingPrice="$400"
          >
            <OfferList text="Native or Hybrid Apps" status="active" />
            <OfferList text="UI/UX Design" status="active" />
            <OfferList text="App Store Submission" status="active" />
            <OfferList text="Ongoing Maintenance" status="active" />
            <OfferList text="Performance Optimization" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Logo Design"
            subtitle="Unique and professional logo designs to enhance your brand identity."
            startingPrice="$100"
          >
            <OfferList text="Custom Logo Design" status="active" />
            <OfferList text="Brand Identity Package" status="active" />
            <OfferList text="High-Resolution Files" status="active" />
            <OfferList text="Multiple Revisions" status="active" />
            <OfferList text="Trademark Ready" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Social Media Handling"
            subtitle="Manage and grow your social media presence with our expert handling."
            startingPrice="$200"
          >
            <OfferList text="Social Media Strategy" status="active" />
            <OfferList text="Content Creation" status="active" />
            <OfferList text="Account Management" status="active" />
            <OfferList text="Performance Analytics" status="active" />
            <OfferList text="Engagement Boosting" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Website Development + Logo Design"
            subtitle="Bundle package for a complete online presence including a website and logo design."
            startingPrice="$350"
          >
            <OfferList text="Custom Website Design" status="active" />
            <OfferList text="Logo Design" status="active" />
            <OfferList text="Responsive Layout" status="active" />
            <OfferList text="SEO Optimization" status="active" />
            <OfferList text="Brand Identity Package" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Logo Design + Social Media Handling"
            subtitle="Perfect for businesses looking to enhance their brand identity and social media presence."
            startingPrice="$250"
          >
            <OfferList text="Logo Design" status="active" />
            <OfferList text="Social Media Strategy" status="active" />
            <OfferList text="Content Creation" status="active" />
            <OfferList text="Brand Identity Package" status="active" />
            <OfferList text="Performance Analytics" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Web + Logo + Social Media"
            subtitle="Complete solution including a website, logo design, and social media handling."
            startingPrice="$500"
          >
            <OfferList text="Custom Website Design" status="active" />
            <OfferList text="Logo Design" status="active" />
            <OfferList text="Social Media Strategy" status="active" />
            <OfferList text="Content Creation" status="active" />
            <OfferList text="Responsive Layout" status="active" />
            <OfferList text="Brand Identity Package" status="active" />
            <OfferList text="Performance Analytics" status="active" />
          </PricingBox>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 z-[-1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
};

export default Pricing;
