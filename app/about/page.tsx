import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SeynarLabs - Leaders in Software Engineering and IT Solutions",

  description:
    "Learn more about SeynarLabs and our mission to provide cutting-edge software development, IT solutions, and digital services. We are dedicated to helping businesses succeed with technology-driven innovation.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
