import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page for MAJOR PROJECT BY GROUP M4",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description={`Welcome to the major project "Classification of Lung Diseases from CXR Images Using Transfer Learning," led by Group M4 and guided by Dr. Rakhi D Wajgi at YCCE, Nagpur College. Join us on this innovative journey in advancing healthcare through AI technology.`}
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
