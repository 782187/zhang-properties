import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import FastDelivery from "./FastDelivery";
import Clients from "./Clients";
import Contact from "./Contact";
import { siteContent } from "../data/siteContent";
import Capabilities from "./Capabilities";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        videoRef.current.muted = true;
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <>
      <div
        className="position-relative vh-100 overflow-hidden"
        style={{
          backgroundColor: siteContent.theme.surface,
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute w-100 h-100"
          style={{
            objectFit: "cover",
            zIndex: 0,
            filter: "brightness(85%) contrast(108%) saturate(105%)",
          }}
        >
          <source
            src="https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e6cb/67434bc3f8cab15f2f07eb5b_Home_About%20(1)-transcode.mp4"
            type="video/mp4"
          />
        </video>

        <div
          className="position-absolute w-100 h-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.55))",
            zIndex: 1,
          }}
        />

        <div
          className="position-relative d-flex flex-column align-items-center text-center text-white w-100 px-3 px-md-5"
          style={{
            zIndex: 2,
            fontFamily: "'Barlow', sans-serif",
            paddingTop: "12vh",
          }}
        >
          <motion.span
            style={{
              color: "#ffffffb3",
              fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
              letterSpacing: "4px",
              textTransform: "uppercase",
              borderTop: "2px solid #d61f26",
              borderBottom: "2px solid #d61f26",
              padding: "6px 14px",
              marginBottom: "1.4rem",
              display: "inline-block",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            For Those Who Build
          </motion.span>

          <motion.h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              maxWidth: "850px",
              lineHeight: "1.3",
              color: "#ffffff",
              textShadow: "0 3px 10px rgba(0,0,0,0.4)",
              fontWeight: "400",
              marginBottom: "0",
              padding: "0 1rem",
            }}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            We Are Realising The Promise Of{" "}
            Industrial Real Estate{" "}
            In The Country
          </motion.h1>
        </div>
      </div>

      <AboutUs />
      <Capabilities />
      <Projects />
      <FastDelivery />
      <Clients />
      <Contact />
    </>
  );
};

export default Hero;
