"use client"; // For using Framer Motion with Next.js

import SectionTitle from "../Common/SectionTitle";
import SinglePortfolio from "./SinglePortfolio";
import portfolioData from "./portfolioData";
import { motion } from "framer-motion";
import Slider from "react-slick";

const Portfolio = () => {
  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      id="blog"
      className="min-h-screen overflow-hidden bg-gradient-to-r from-[#87c3b6] via-[#a3e4d7] to-[#eecc99] py-24 lg:py-40 xl:py-24 2xl:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        {/* Uncomment if needed */}
        {/* <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        /> */}

        <Slider {...sliderSettings}>
          {portfolioData.map((blog) => (
            <div key={blog.id} className="w-full px-4">
              <SinglePortfolio blog={blog} />
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default Portfolio;
