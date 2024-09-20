import React from "react";
import Features from "@/components/Features";
import { Metadata } from "next";

// import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Services SeynarLabs - Comprehensive Software and IT Services for Business Growth",

  description:
    "Explore SeynarLabs' flexible pricing plans for custom software development, mobile apps, logo design, and IT solutions. We offer transparent and competitive pricing to suit businesses of all sizes.", // other metadata
};
const Sevices = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Service Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}
      <Features />
    </>
  );
};

export default Sevices;
