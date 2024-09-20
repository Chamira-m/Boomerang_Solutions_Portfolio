import React from "react";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

// import Breadcrumb from "@/components/Common/Breadcrumb";
export const metadata: Metadata = {
  title:
    "Pricing SeynarLabs - Transparent Pricing for Software Development and IT Solutions",

  description:
    "Explore SeynarLabs' flexible pricing plans for custom software development, mobile apps, logo design, and IT solutions. We offer transparent and competitive pricing to suit businesses of all sizes.", // other metadata
};
const PricingPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Service Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}
      <Pricing />
    </>
  );
};

export default PricingPage;
