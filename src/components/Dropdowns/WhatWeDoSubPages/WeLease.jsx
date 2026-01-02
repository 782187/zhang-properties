import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../PortfolioDropdownSubPages/HeroSection";
import Contact from "../../Contact";
import { motion, AnimatePresence } from "framer-motion";
import { videos } from "@assets/media";
import areaMapPdf from "/25091_INDURI_ GOOGLE MAP.pdf";
import mapPreview from "/welease.png"; 
import { FaMapMarkerAlt, FaIndustry, FaWarehouse, FaRoad, FaTruck, FaBuilding, FaFilePdf, FaExpand, FaCheckCircle, FaDownload } from "react-icons/fa";

const PRIMARY_RED = '#d61f26';
const PRIMARY_ACCENT = '#d61f26';
const DARK_SECTION_BG = '#242323ff';
const WHITE_TEXT = '#ffffff';
const HATCHING_COLOR = 'rgba(214, 31, 38, 0.15)';
const HATCHING_BG = 'rgba(214, 31, 38, 0.05)';

function WeLease() {
  const [openMap, setOpenMap] = useState(false);
  const sectionRefs = useRef([]);
  const [inViewSections, setInViewSections] = useState({});

  useEffect(() => {
    const observers = [];
    
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInViewSections(prev => ({ ...prev, [index]: true }));
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        }
      );
      
      observer.observe(section);
      observers.push(observer);
    });
    
    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const features = [
    { icon: <FaMapMarkerAlt />, title: "Prime Location", desc: "Strategically positioned in Chakan Industrial Belt" },
    { icon: <FaIndustry />, title: "Manufacturing Ready", desc: "Ideal for industrial and manufacturing units" },
    { icon: <FaWarehouse />, title: "Logistics Hub", desc: "Perfect for warehousing and distribution centers" },
    { icon: <FaRoad />, title: "Excellent Connectivity", desc: "Connected to major highways and transport routes" },
    { icon: <FaTruck />, title: "Supply Chain Advantage", desc: "Proximity to suppliers and markets" },
    { icon: <FaBuilding />, title: "Custom Build", desc: "Build-to-suit flexibility for your requirements" }
  ];

  const specifications = [
    { label: "Total Area", value: "65 Acres", detail: "Industrial Land Parcel" },
    { label: "Location", value: "Induri, Pune", detail: "Chakan Industrial Region" },
    { label: "Suitable For", value: "Build To Suit", detail: "Manufacturing & Logistics" },
  ];

  const industrialApplications = [
    'Manufacturing Units & Assembly Plants',
    'Logistics & Distribution Centers',
    'Warehousing & Cold Storage Facilities',
    'Engineering & Fabrication Units',
    'Automobile Components Manufacturing',
    'Heavy Machinery & Equipment Units',
    'Research & Development Centers',
    'Industrial Parks & Clusters'
  ];

  const locationAdvantages = [
    'Strategic position in Pune\'s fastest-growing industrial corridor',
    'Proximity to major automotive and manufacturing companies',
    'Excellent road connectivity to Mumbai, Pune, and Nashik',
    'Availability of skilled workforce in the region',
    'Established industrial ecosystem with support services',
    'Flexible build-to-suit options for customized requirements'
  ];

  const HatchingPattern = ({ position = "top", color = HATCHING_COLOR }) => (
    <div
      style={{
        position: "absolute",
        [position]: 0,
        left: 0,
        width: "100%",
        height: "50px",
        background: `
          repeating-linear-gradient(
            45deg,
            ${color} 0px,
            ${color} 1.5px,
            transparent 1.5px,
            transparent 6px
          )
        `,
        backgroundColor: "transparent",
        zIndex: 1,
      }}
    />
  );

  const TexturedButton = ({ children, onClick, className = "", variant = "primary" }) => {
    const baseStyles = {
      position: "relative",
      overflow: "hidden",
      border: "none",
      fontWeight: "600",
      letterSpacing: "0.5px",
      transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      boxShadow: "0 4px 20px rgba(214, 31, 38, 0.25)",
      background: variant === "primary"
        ? `linear-gradient(135deg, ${PRIMARY_RED} 0%, #e53935 100%)`
        : "transparent",
      color: variant === "primary" ? WHITE_TEXT : PRIMARY_RED,
      border: variant === "outline" ? `2px solid ${PRIMARY_RED}` : "none",
    };

    const textureStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        repeating-linear-gradient(
          45deg,
          transparent 0px,
          transparent 1px,
          rgba(255, 255, 255, ${variant === "primary" ? "0.12" : "0.05"}) 1px,
          rgba(255, 255, 255, ${variant === "primary" ? "0.12" : "0.05"}) 2px
        )
      `,
      pointerEvents: "none",
    };

    return (
      <button
        onClick={onClick}
        className={`btn btn-lg px-5 py-3 rounded-pill fw-bold position-relative ${className}`}
        style={baseStyles}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(214, 31, 38, 0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(214, 31, 38, 0.25)";
        }}
      >
        <div style={textureStyle} />
        <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      </button>
    );
  };

  return (
    <div className="bg-light" style={{ fontFamily: "'Barlow', sans-serif", color: "#333", overflow: "hidden" }}>
      <HeroSection
        videoSrc={videos.tataGotion}
        header="Built To Suit Industrial Land – Induri"
        subheader="Prime Industrial Land in Pune's Manufacturing Hub"
        textColor="#fff"
        leftStatValue="65 Acres"
        leftStatLabel="Industrial Land Parcel"
        rightStatValue="Induri, Pune"
        rightStatLabel="Premium Industrial Location"
      />

      <motion.section
        className="py-5 position-relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ backgroundColor: "#f8f9fa" }}
        ref={el => sectionRefs.current[0] = el}
      >
        <HatchingPattern position="top" />
        <div className="container-xl py-lg-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <motion.div
              className="col-lg-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inViewSections[0] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="fw-bold display-4 mb-4 gradient-text">
                Premium Industrial Land in Pune's Manufacturing Hub
              </h1>

              <p className="fs-5 mb-4">
                WeLease presents an exceptional 65-acre industrial land parcel strategically located at Induri, Pune. This premium property lies within the thriving Chakan industrial belt, offering unmatched connectivity and infrastructure for manufacturing, logistics, and industrial operations.
              </p>

              <p className="fs-5 mb-4">
                Positioned along established industrial corridors, the site benefits from proximity to operational manufacturing zones, arterial road networks, and existing industrial developments. This makes it an ideal choice for companies seeking build-to-suit industrial facilities with excellent logistical advantages.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <motion.span
                  className="badge bg-danger bg-opacity-10 text-danger fs-6 fw-medium py-2 px-4 rounded-pill"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaIndustry className="me-2" /> Manufacturing
                </motion.span>
                <motion.span
                  className="badge bg-danger bg-opacity-10 text-danger fs-6 fw-medium py-2 px-4 rounded-pill"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaWarehouse className="me-2" /> Warehousing
                </motion.span>
                <motion.span
                  className="badge bg-danger bg-opacity-10 text-danger fs-6 fw-medium py-2 px-4 rounded-pill"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaTruck className="me-2" /> Logistics
                </motion.span>
                <motion.span
                  className="badge bg-danger bg-opacity-10 text-danger fs-6 fw-medium py-2 px-4 rounded-pill"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaBuilding className="me-2" /> Built-to-Suit
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-4 mt-5 mt-lg-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inViewSections[0] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden position-relative hover-lift">
                <HatchingPattern position="top" color="rgba(214, 31, 38, 0.08)" />
                <div className="card-header bg-dark text-white py-3">
                  <h4 className="mb-0 fw-bold"><FaFilePdf className="me-2" /> Property Specifications</h4>
                </div>
                <div className="card-body p-4">
                  {specifications.map((spec, index) => (
                    <motion.div
                      key={index}
                      className="d-flex justify-content-between align-items-center py-3 border-bottom"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inViewSections[0] ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div>
                        <h6 className="text-muted mb-1">{spec.label}</h6>
                        <small className="text-muted">{spec.detail}</small>
                      </div>
                      <h5 className="fw-bold text-danger mb-0">{spec.value}</h5>
                    </motion.div>
                  ))}
                  <div className="text-center mt-4">
                    <TexturedButton
                      onClick={() => window.open(areaMapPdf, '_blank')}
                      variant="outline"
                      className="w-100"
                    >
                      <FaDownload className="me-2" />
                      Download PDF Brochure
                    </TexturedButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section
        className="py-5 bg-white position-relative"
        ref={el => sectionRefs.current[1] = el}
      >
        <HatchingPattern position="top" />
        <div className="container-xl position-relative" style={{ zIndex: 2 }}>
          <motion.h2
            className="fw-bold text-center mb-5 display-5"
            initial={{ opacity: 0, y: 30 }}
            animate={inViewSections[1] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Strategic Advantages
          </motion.h2>

          <div className="row g-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 50 }}
                animate={inViewSections[1] ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="card border-0 shadow-sm h-100 hover-lift transition-all rounded-4 position-relative overflow-hidden">
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: `
                        repeating-linear-gradient(
                          45deg,
                          ${HATCHING_BG} 0px,
                          ${HATCHING_BG} 1px,
                          transparent 1px,
                          transparent 8px
                        )
                      `
                    }}
                  />
                  <div className="card-body p-4 text-center position-relative" style={{ zIndex: 1 }}>
                    <motion.div
                      className="icon-wrapper rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: '70px',
                        height: '70px',
                        background: `linear-gradient(135deg, ${PRIMARY_RED}15 0%, ${PRIMARY_RED}05 100%)`,
                        border: `2px solid ${PRIMARY_RED}30`
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="fs-2" style={{ color: PRIMARY_RED }}>{feature.icon}</span>
                    </motion.div>
                    <h4 className="fw-bold mb-3" style={{ color: PRIMARY_RED }}>{feature.title}</h4>
                    <p className="text-muted mb-0">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-5 bg-light position-relative"
        ref={el => sectionRefs.current[2] = el}
      >
        <HatchingPattern position="top" />
        <div className="container-xl position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <motion.div
                className="text-center mb-5"
                initial={{ opacity: 0, y: 30 }}
                animate={inViewSections[2] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="fw-bold display-5 mb-3">
                  <FaMapMarkerAlt className="me-3" style={{ color: PRIMARY_RED }} />
                  Location Map - Induri Industrial Area
                </h2>
                <p className="fs-5 mx-auto" style={{ maxWidth: '800px' }}>
                  The map below outlines the exact location of the land parcel at Induri, highlighting surrounding industrial clusters, road connectivity, and access routes within the Chakan industrial region.
                </p>
              </motion.div>

              <motion.div
                className="position-relative rounded-4 shadow-lg overflow-hidden border border-3 border-white"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inViewSections[2] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '500px', cursor: 'pointer' }}
                onClick={() => setOpenMap(true)}
              >
                <div className="w-100 h-100 position-relative">
                  <img
                    src={mapPreview}
                    alt="Induri Industrial Area Map Preview"
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      background: "rgba(0, 0, 0, 0.3)",
                      opacity: 0,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <div className="text-white text-center p-4">
                      <FaExpand className="fs-1 mb-2" />
                      <h5 className="fw-bold mb-1">Click to View Full Map</h5>
                      <small>Open Interactive PDF</small>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inViewSections[2] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <TexturedButton onClick={() => setOpenMap(true)} variant="primary">
                  <FaExpand className="me-2" />
                  View Full Interactive Map
                </TexturedButton>
                <TexturedButton
                  onClick={() => window.open(areaMapPdf, '_blank')}
                  variant="outline"
                  className="ms-3"
                >
                  <FaDownload className="me-2" />
                  Download PDF
                </TexturedButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-5 bg-white position-relative"
        ref={el => sectionRefs.current[3] = el}
      >
        <HatchingPattern position="top" />
        <div className="container-xl position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inViewSections[3] ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="fw-bold display-6 mb-4">
                Suitable Industrial Applications
              </h2>

              <p className="fs-5 mb-4">
                This premium land parcel is ideally suited for Build To Suit industrial development including:
              </p>

              <ul className="list-unstyled">
                {industrialApplications.map((item, index) => (
                  <motion.li
                    key={index}
                    className="mb-3 d-flex align-items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inViewSections[3] ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FaCheckCircle className="me-3 mt-1" style={{ color: PRIMARY_RED, minWidth: '20px' }} />
                    </motion.div>
                    <span className="fs-5">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inViewSections[3] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden position-relative hover-lift">
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: `
                      repeating-linear-gradient(
                        45deg,
                        rgba(255, 255, 255, 0.05) 0px,
                        rgba(255, 255, 255, 0.05) 1px,
                        transparent 1px,
                        transparent 8px
                      )
                    `
                  }}
                />
                <div className="card-body p-5 text-white rounded-4 position-relative" style={{ zIndex: 1 }}>
                  <div className="position-relative">
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                      style={{
                        background: `linear-gradient(135deg, ${PRIMARY_RED} 0%, #e53935 100%)`,
                        opacity: 0.95
                      }}
                    />
                    <div className="position-relative" style={{ zIndex: 2 }}>
                      <h3 className="fw-bold mb-4">Why Choose This Location?</h3>
                      <ul className="list-unstyled">
                        {locationAdvantages.map((item, index) => (
                          <motion.li
                            key={index}
                            className="mb-3 fs-5 d-flex align-items-start"
                            initial={{ opacity: 0, x: 10 }}
                            animate={inViewSections[3] ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <FaCheckCircle className="me-3 mt-1" style={{ minWidth: '20px' }} />
                            </motion.div>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />

      <AnimatePresence>
        {openMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-98 d-flex align-items-center justify-content-center p-3"
            style={{ zIndex: 1050 }}
            onClick={() => setOpenMap(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="position-relative w-100 h-100 rounded-4 overflow-hidden shadow-xxl"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '95vw',
                maxHeight: '95vh'
              }}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <TexturedButton
                  onClick={() => setOpenMap(false)}
                  className="position-absolute top-0 end-0 m-3"
                  variant="primary"
                  style={{ zIndex: 1060 }}
                >
                  Close
                </TexturedButton>
              </motion.div>
              <iframe
                src={areaMapPdf}
                title="Induri Area Map Full View"
                className="w-100 h-100 border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #d61f26 0%, #f45d62 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 1.5rem 4rem rgba(214, 31, 38, 0.2) !important;
        }
        
        .shadow-xxl {
          box-shadow: 0 2.5rem 6rem rgba(0, 0, 0, 0.7) !important;
        }
        
        .icon-wrapper {
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        @media (max-width: 768px) {
          .display-4, .display-5, .display-6 {
            font-size: 2.5rem !important;
          }
          .fs-5 {
            font-size: 1.1rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .display-4, .display-5, .display-6 {
            font-size: 2rem !important;
          }
          .btn {
            width: 100%;
            margin-bottom: 0.5rem;
          }
          .ms-3 {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default WeLease;
