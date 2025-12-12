import React, { useState } from 'react';
import HeroSection from '../PortfolioDropdownSubPages/HeroSection';
import Contact from '../../Contact';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images, gallery, videos } from '@assets/media';

function WeMaintain() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const imageAnimation = {
    initial: { x: '-100px', y: '100px', opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 1, ease: 'easeOut' }
  };

  const AnimatedImage = ({ src, alt }) => (
    <motion.img
      src={src}
      alt={alt}
      className='img-fluid rounded-lg shadow-lg w-100 water-float'
      initial={imageAnimation.initial}
      animate={imageAnimation.animate}
      transition={imageAnimation.transition}
      whileHover={{ scale: 1.03 }}
    />
  );

  return (
    <div className="bg-light" style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(0, 0, 0, 0.48)" }}>
      <HeroSection
        videoSrc={videos.tataGotion}
        header="SAVARDHARI SHIV INDUSTRIAL PARK"
        subheader="Premium industrial development in Chakan MIDC"
        textColor="white"
        leftStatValue="400,000"
        leftStatLabel="Total Area (Sq.Ft.)"
        rightStatValue="28.5"
        rightStatLabel="Acres"
      />

      <div className="container-xl mb-4 mt-4 mt-md-5">
        <motion.h2
          className="fw-bold text-md-start text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '0.02em' }}
        >
          Savardhari Shiv Industrial Park, Chakan
        </motion.h2>
      </div>

      <motion.section
        className="py-4 py-md-5 whatwedo-feature-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-xl">
          <div className="whatwedo-feature-frame">
            <div className="whatwedo-feature-inner">
              <div className="row g-0 align-items-stretch">
                <motion.div
                  className="col-lg-6 d-flex align-items-center order-2 order-lg-1"
                  variants={itemVariants}
                >
                  <div className="whatwedo-feature-text-block w-100 p-3 p-md-4 p-lg-5">
                    <div
                      className="text-white text-uppercase whatwedo-feature-heading mb-2 mb-md-3"
                      style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)' }}
                    >
                      PREMIUM INDUSTRIAL SPACE IN CHAKAN
                    </div>
                    <p
                      className="mb-0 text-white-50"
                      style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', lineHeight: 1.7 }}
                    >
                      Located in the heart of Chakan's industrial belt, Savardhari Industrial Park offers
                      premium industrial spaces designed for modern manufacturing and warehousing needs.
                      Our dedicated maintenance team ensures seamless operations with 24/7 security,
                      power backup, and well-maintained common areas. The facility features
                      responsive support, our maintenance platform reduces hidden friction, enabling
                      your operations, teams and supply chains to run smoothly inside a dependable,
                      well-managed ecosystem.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="col-lg-6 order-1 order-lg-2"
                  variants={itemVariants}
                >
                  <div className="whatwedo-feature-image-wrapper">
                    <img src={images.sanyChakan2} alt="Zhang facility maintenance and monitoring" className="water-float w-100 h-auto" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="container-xl mb-3">
        <motion.h2
          className="fw-bold text-md-start text-center"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '0.02em', color: '#333' }}
        >
          Park-Level Facility Management
        </motion.h2>
      </div>

      <motion.section
        className="py-3 py-md-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ 
          backgroundColor: '#fdfdff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '-18% -12%',
            backgroundImage: `
              linear-gradient(#8eacf8a1 1px, transparent 1px),
              linear-gradient(90deg, #7b89ad99 1px, transparent 1px)
            `,
            backgroundSize: '180px 120px',
            opacity: 0.3,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
        <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-0 align-items-center">
            <motion.div
              className="col-lg-6 d-flex align-items-center order-2 order-lg-1"
              variants={itemVariants}
            >
              <div className="w-100 px-3 px-md-4 px-lg-5 py-4">
                <h3
                  className="fw-bold mb-2"
                  style={{ 
                    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', 
                    color: '#333',
                    fontFamily: "'Barlow', sans-serif"
                  }}
                >
                  Comprehensive operations &amp; maintenance for occupiers
                </h3>
                <p 
                  style={{ 
                    fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', 
                    lineHeight: 1.7,
                    color: '#666',
                    marginBottom: 0,
                    fontFamily: "'Barlow', sans-serif"
                  }}
                >
                  At Zhang Properties, we treat the ongoing performance of the park
                  as seriously as day-one delivery. Our teams manage common utilities,
                  fire and life safety systems, landscape, lighting, roadways and waste
                  so that every occupier experiences a safe, clean and predictable
                  environment. Structured SOPs, periodic audits and responsive support
                  ensure that small issues are addressed before they become operational
                  risks for your business.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6 order-1 order-lg-2"
              variants={itemVariants}
            >
              <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
                <img
                  src={images.sanyChakan2}
                  alt="Zhang facility management"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div
        style={{
          marginTop: "50px",
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
        }}
      ></div>

      <div className="container py-4 py-md-5">
        <div className="row align-items-start g-4 g-md-5">
          <div className="col-lg-5 col-md-12">
            <div className="bg-white">
              <h2
                className="fw-bold mb-3 text-center text-lg-start"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
              >
                Plot Layout
              </h2>

              <div className="position-relative">
                <a
                  href={gallery.sawardhari}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block overflow-hidden rounded-3 shadow"
                  style={{ border: '1px solid rgba(0,0,0,0.1)' }}
                >
                  <img
                    src={gallery.sawardhari}
                    alt="Plot Layout Plan"
                    className="img-fluid w-100"
                    style={{
                      height: 'clamp(300px, 40vw, 450px)',
                      objectFit: 'contain',
                      cursor: 'zoom-in'
                    }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 text-center p-2"
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                    }}
                  >
                    Click to view full size
                  </div>
                </a>

                <p
                  className="text-muted text-center mt-2"
                  style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)' }}
                >
                  Zoom in for detailed view of the plot layout
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="col-lg-7 col-md-12"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="ps-lg-4">
              <h2
                className="fw-bold mb-3 text-center text-lg-start"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
              >
                Savardhari Shiv Industrial Park
              </h2>

              <p className="lead text-muted mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.7 }}>
                Strategically located in Chakan MIDC, our premium industrial park spans across
                400,000 sq.ft. (28.5 acres) at Gat No. 132, Mahalunge.
              </p>

              <p className="lead text-muted" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.7 }}>
                The park features modern infrastructure with a focus on sustainability and operational efficiency.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-4 justify-content-center justify-content-lg-start">
                <span className="badge bg-success bg-opacity-10 text-success" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', padding: '0.5rem 1rem' }}>
                  400,000 Sq.Ft. Area
                </span>
                <span className="badge bg-success bg-opacity-10 text-success" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', padding: '0.5rem 1rem' }}>
                  28.5 Acres
                </span>
                <span className="badge bg-success bg-opacity-10 text-success" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', padding: '0.5rem 1rem' }}>
                  Chakan MIDC Location
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",
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
        }}
      ></div>

      <div className="bg-light py-4 py-md-5">
        <div className="container">
          <motion.div
            className="text-center mb-4 mb-md-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Other Solutions</h2>
            <p className="lead text-muted" style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}>Explore our comprehensive industrial solutions</p>
          </motion.div>

          <div className="row g-4 g-md-5">
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="whatwedo-other-card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-5">
                    <div className="ratio ratio-1x1 h-100">
                      <img src={images.tataGotion3} alt="Lease Solution" className="img-fluid object-cover water-float" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="p-3 p-md-4 p-xl-5 h-100 d-flex flex-column">
                      <h3 className="fw-bold mb-2 mb-md-3" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>We Lease</h3>
                      <p className="text-muted mb-3 mb-md-4" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.3rem)', lineHeight: 1.6 }}>Empowering your operations with flexible and strategic industrial leasing solutions tailored to your business needs.</p>
                      <div className="mt-auto">
                        <Link to="/dropdown/welease" className="btn btn-warning px-3 px-md-4 py-2 py-md-3 fw-bold" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>Explore Solutions</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="whatwedo-other-card h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-5">
                    <div className="ratio ratio-1x1 h-100">
                      <img src={images.tataGotion1} alt="Maintain Solution" className="img-fluid object-cover water-float" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="p-3 p-md-4 p-xl-5 h-100 d-flex flex-column">
                      <h3 className="fw-bold mb-2 mb-md-3" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>We Maintain</h3>
                      <p className="text-muted mb-3 mb-md-4" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.3rem)', lineHeight: 1.6 }}>Dedicated park level maintenance and management ensuring your operations never miss a beat and you harness uninterrupted growth.</p>
                      <div className="mt-auto">
                        <Link to="/dropdown/wemaintain" className="btn btn-warning px-3 px-md-4 py-2 py-md-3 fw-bold" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>Explore Solutions</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
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
        }}
      ></div>

      <Contact />
    </div>
  )
}

export default WeMaintain;