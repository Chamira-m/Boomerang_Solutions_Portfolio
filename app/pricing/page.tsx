import React from "react";
import Pricing from "@/components/Pricing";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Service Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Pricing />
    </>
  );
};

export default PricingPage;
