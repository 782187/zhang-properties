import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import OrganisationHero from "../components/OrganisationHero";
import OrganisationInfoSection from "../components/OrganisationInfoSection";
import AboutUsSection from "../components/AboutUsSection";

const ImageGallery = lazy(() => import("../components/ImageGallery"));
const TeamHero = lazy(() => import("../components/TeamHero"));
const Contact = lazy(() => import("../components/Contact"));

// Shared hook to mount heavy sections only when scrolled into view
const useVisible = (rootMargin = "200px") => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isVisible) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return [ref, isVisible];
};

const SectionSkeleton = ({ height = 400 }) => (
  <div
    style={{
      height,
      background:
        "linear-gradient(90deg, #f4f4f4 25%, #e9e9e9 37%, #f4f4f4 63%)",
      backgroundSize: "400% 100%",
      animation: "org-pulse 1.2s ease-in-out infinite",
      borderRadius: "8px",
      margin: "32px auto",
      maxWidth: "1200px",
    }}
  />
);

const Organisation = () => {
  const [galleryRef, galleryVisible] = useVisible();
  const [teamRef, teamVisible] = useVisible();
  const [contactRef, contactVisible] = useVisible("300px");

  return (
    <>
      <OrganisationHero />
      <OrganisationInfoSection />
      <AboutUsSection />
      <div ref={galleryRef}>
        {galleryVisible ? (
          <Suspense fallback={<SectionSkeleton height={500} />}>
            <ImageGallery />
          </Suspense>
        ) : (
          <SectionSkeleton height={500} />
        )}
      </div>
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
      <div ref={teamRef}>
        {teamVisible ? (
          <Suspense fallback={<SectionSkeleton height={360} />}>
            <TeamHero />
          </Suspense>
        ) : (
          <SectionSkeleton height={360} />
        )}
      </div>
      <div ref={contactRef}>
        {contactVisible ? (
          <Suspense fallback={<SectionSkeleton height={520} />}>
            <Contact />
          </Suspense>
        ) : (
          <SectionSkeleton height={520} />
        )}
      </div>
    </>
  );
};

export default Organisation;
