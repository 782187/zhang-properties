import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = ({
  videoSrc,
  header,
  subheader,
  textColor,
  leftStatValue,
  leftStatLabel,
  rightStatValue,
  rightStatLabel,
}) => {

  const videoWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoWrapperRef,
    offset: ['start start', 'end start'],
  });

  return (
    <>
      <div
        className="position-relative overflow-hidden"
        ref={videoWrapperRef}
        style={{ height: '70vh', width: '100%' }}
      >
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
          className="position-absolute top-50 start-0 w-100 h-50"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                125deg,
                rgba(106, 104, 104, 0.5) 0px,
                rgba(86, 82, 82, 0.5) 1px,
                transparent 3px,
                transparent 8px
              )

            `,
            zIndex: 2,
            pointerEvents: 'none',
            borderTop: '2px solid rgba(106, 104, 104, 0.5)',
          }}
        />

        <div
          className="position-relative h-100 w-100 d-flex align-items-center px-4 px-md-5"
          style={{
            color: textColor || '#fff',
            zIndex: 3,
          }}
        >
          <div className="d-none d-sm-flex flex-column" style={{ maxWidth: '280px' }}>
            <div
              className="d-flex flex-column justify-content-center align-items-start"
              style={{
                backgroundColor: '#d61f26',
                padding: '1.75rem 2rem',
                boxShadow: '0 18px 40px rgba(0,0,0,0.45)',
              }}
            >
              <span className="fw-bold text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '0.12em' }}>
                Project
              </span>
              <span className="fw-semibold" style={{ fontSize: '0.75rem', letterSpacing: '0.3em' }}>
                BY Zang Properties
              </span>
            </div>
            <div
              className="w-100 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '0.75rem 1rem',
                marginTop: '0.25rem',
                fontSize: '0.85rem',
              }}
            >
              <span>Development</span>
            </div>
          </div>

          <div className="w-100 text-center">
            <motion.h1
              className="display-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400, fontSize: '3.2rem' }}
            >
              {header}
            </motion.h1>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400, fontSize: '1.25rem' }}
            >
              {subheader}
            </motion.p>
          </div>
        </div>
      </div>

      {(leftStatValue || rightStatValue) && (
        <div className="hero-stats-wrapper">
          <div className="hero-stats-box">
            <div className="hero-stat hero-stat-left">
              <div className="hero-stat-value">{leftStatValue}</div>
              <div className="hero-stat-label">{leftStatLabel}</div>
            </div>
            <div className="hero-stat hero-stat-right">
              <div className="hero-stat-value">{rightStatValue}</div>
              <div className="hero-stat-label">{rightStatLabel}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;