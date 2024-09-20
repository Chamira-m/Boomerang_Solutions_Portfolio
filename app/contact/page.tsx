// import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact SeynarLabs - Get in Touch for Custom Software and IT Solutions",
  description:
    "Contact SeynarLabs to discuss your project requirements. Whether you need software development, IT solutions, or mobile app development, our team is ready to help. Reach out for a consultation today!",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}

      <Contact />
    </>
  );
};

export default ContactPage;
