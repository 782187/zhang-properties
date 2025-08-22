import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutUs from './AboutUs';
import Projects from './Projects';
import FastDelivery from './FastDelivery';
import Clients from './Clients';
import Contact from './Contact';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed, attempting with muted:", error);
        videoRef.current.muted = true;
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <>
      <div className="position-relative vh-100 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
        <motion.div
          className="position-absolute"
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 3,
            overflow: 'hidden'
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200%',
            height: '200%',
            background: 'white',
            transform: 'rotate(45deg) translateX(-100%)',
            transformOrigin: '0% 0%'
          }} />
        </motion.div>

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute w-100 h-100"
          style={{ objectFit: "cover", zIndex: 0 }}
        >
          <source src="./hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="position-absolute w-100 h-100"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
            zIndex: 1
          }}
        />

        <div
          className="position-relative d-flex flex-column justify-content-center align-items-center text-center text-white h-100 px-3 px-md-5"
          style={{ zIndex: 2 }}
        >
          <motion.h1
            className="fw-bold mb-3 text-warning"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)"
            }}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Zhang Industrial Property Consultants
          </motion.h1>

          <motion.p
            className="mb-4"
            style={{
              fontSize: "clamp(1rem, 4vw, 1.5rem)",
              maxWidth: "800px",
              textShadow: "0 2px 4px rgba(0,0,0,0.8)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            28+ years of Industrial Real Estate Expertise: Warehousing, Logistics, Industrial Parks, and Land - PAN India & Dubai.
          </motion.p>

          <motion.button
            className="btn btn-warning btn-lg mt-2 mt-md-3 px-4 py-3 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.0, duration: 0.5 }}
            style={{ fontWeight: 600, letterSpacing: '1px' }}
          >
            Request Consultation
          </motion.button>
        </div>
      </div>
      <AboutUs />
      <Projects />
      <FastDelivery />
      <Clients />
      <Contact />
    </>
  );
};

export default Hero;