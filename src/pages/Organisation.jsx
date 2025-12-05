import React from "react";
import OrganisationHero from "../components/OrganisationHero";
import OrganisationInfoSection from "../components/OrganisationInfoSection";
import AboutUsSection from "../components/AboutUsSection";
import ImageGallery from "../components/ImageGallery";
import TeamHero from "../components/TeamHero";
import Contact from "../components/Contact";

const Organisation = () => {
  return (
    <>
      <OrganisationHero />
      <OrganisationInfoSection />
      <AboutUsSection />
      <ImageGallery />
      <div
        style={{
          marginTop: "50px",
          top: 0,
          left: 0,
          width: "100%",
          height: "50px",
          background: `
            repeating-linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.3) 0px,
              rgba(0, 0, 0, 0.17) 1.5px,
              transparent 1.5px,
              transparent 6px
            )
          `,
          backgroundColor: "#ffffff",
          zIndex: 2,
        }}
      ></div>
      <TeamHero />
      <Contact />
    </>
  );
};

export default Organisation;
