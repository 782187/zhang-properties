import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ videoSrc, header, subheader, textColor }) => {
  const videoWrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (videoWrapperRef.current) {
      observer.observe(videoWrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="position-relative overflow-hidden"
      ref={videoWrapperRef}
      style={{ height: '70vh', width: '100%' }}
    >
      {/* Diagonal Overlay */}
      <div className={`diagonal-overlay ${isVisible ? 'slide-away' : ''}`}></div>

      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ zIndex: 1 }}
      />

      <div
        className="position-relative d-flex flex-column justify-content-center align-items-center text-center h-100 px-3"
        style={{
          color: textColor || '#fff',
          zIndex: 3,
        }}
      >
        <motion.h1
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {header}
        </motion.h1>
        <motion.p
          className="lead fw-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {subheader}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
