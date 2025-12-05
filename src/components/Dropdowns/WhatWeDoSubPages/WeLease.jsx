import React, { useState } from 'react';
import HeroSection from '../PortfolioDropdownSubPages/HeroSection';
import Contact from '../../Contact';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function WeLease() {
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
      className='img-fluid rounded-lg shadow-lg w-100'
      initial={imageAnimation.initial}
      animate={imageAnimation.animate}
      transition={imageAnimation.transition}
      whileHover={{ scale: 1.03 }}
    />
  );

  return (
    <div className="bg-light" style={{ fontFamily: "'Barlow', sans-serif" }}>
      <HeroSection
        videoSrc="/tata-gotion.mp4"
        header="We Lease"
        subheader="Explore a world of possibilities with our premium services"
        textColor="#fff"
        leftStatValue="63 Acres"
        leftStatLabel="Project Area"
        rightStatValue="15,44,000 Sq.Ft."
        rightStatLabel="Built-up Potential"
      />
      
      <div className="container-xl mb-4">
        <motion.h2
          className="fw-bold text-md-start text-center mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ fontSize: '3rem', color: '#44444481', letterSpacing: '0.02em' }}
        >
          Leasing with Zhang Properties
        </motion.h2>
      </div>

      <motion.section
        className="py-5 whatwedo-feature-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-xl">
          <div className="whatwedo-feature-frame">
            <div className="whatwedo-feature-inner">
              <div className="row g-0 align-items-stretch">
                <motion.div
                  className="col-lg-6 d-flex align-items-center"
                  variants={itemVariants}
                >
                  <div className="whatwedo-feature-text-block w-100">
                    <div
                      className="text-white text-uppercase whatwedo-feature-heading mb-3"
                      style={{ fontSize: '1.4rem' }}
                    >
                      Premium ready spaces without owning the park
                    </div>
                    <p
                      className="mb-0 text-white-50"
                      style={{ fontSize: '1.2rem', lineHeight: 1.7 }}
                    >
                      Zhang Properties offers high-spec industrial and warehousing spaces on lease so
                      businesses can scale quickly without locking capital into land and construction.
                      Our parks are master planned for circulation, safety and compliance, with utilities
                      and services already integrated. You step into an operational ecosystem where
                      loading bays, security, infrastructure and maintenance are pre-orchestrated,
                      allowing your teams to focus on production, fulfilment and innovation instead
                      of managing real estate complexity day to day.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="col-lg-6"
                  variants={itemVariants}
                >
                  <div className="whatwedo-feature-image-wrapper">
                    <img src="/tata_gotion2.png" alt="Zhang lease discussion in boardroom" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="container-xl mb-4 mt-5">
        <motion.h2
          className="fw-bold text-md-start text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ fontSize: '3rem', color: '#444444d9', letterSpacing: '0.02em' }}
        >
          Flexible Leasing Structures
        </motion.h2>
      </div>

      <motion.section
        className="whatwedo-light-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="whatwedo-light-grid">
          <div className="whatwedo-light-card">
            <div className="row g-4 align-items-center">
              <motion.div
                className="col-lg-6 d-flex align-items-center"
                variants={itemVariants}
              >
                <div className="whatwedo-feature-text-block w-100">
                  <div className="whatwedo-light-card-title" style={{ fontSize: '1.8rem' }}>
                    Ready industrial parks without owning the park
                  </div>
                  <p style={{ fontSize: '1.3rem', lineHeight: 1.7 }}>
                    With Zhang Properties, you plug into operational industrial parks
                    that are already master planned and fully serviced. Our leasing
                    structures are designed to match your growth curve, allowing you
                    to expand, consolidate, or right-size without the burden of
                    owning land and buildings. Centralised park management, security
                    and well-maintained infrastructure give your teams a campus that
                    works like an extension of your own facility network.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="col-lg-6"
                variants={itemVariants}
              >
                <div className="whatwedo-feature-image-wrapper">
                  <img
                    src="/tata_asal1.jpg"
                    alt="Zhang leasing solutions"
                    className="whatwedo-light-image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

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

      <div className="container py-6">
        <div className="row align-items-center">
          <motion.div 
            className="col-lg-5 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="position-relative">
              <div className="position-relative z-1">
                <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
                  <img src="/greenpark.jpg" alt="Green Park" className="img-fluid object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="ps-lg-5">
              <h2 className="display-5 fw-bold mb-4" style={{ fontSize: '3rem', color: "rgba(0, 0, 0, 0.48)" }}>Green is our blood</h2>
              <p className="lead text-muted mb-4" style={{ fontSize: '1.4rem', lineHeight: 1.7 }}>
                We as an organization have a pro-green philosophy, which is why we have also taken up extensive green initiatives by introducing the Miyawaki plantation in our parks which accounts for 5% of our park area.
              </p>
              <p className="lead text-muted" style={{ fontSize: '1.4rem', lineHeight: 1.7 }}>
                This leads to the integration of indigenous trees in our parks that encourage the native population of flora and fauna to organically create spaces that make our parks more than just industrial spaces.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-5">
                <span className="badge bg-success bg-opacity-10 text-success fs-4 py-3 px-4">Sustainable Development</span>
                <span className="badge bg-success bg-opacity-10 text-success fs-4 py-3 px-4">Miyawaki Forests</span>
                <span className="badge bg-success bg-opacity-10 text-success fs-4 py-3 px-4">Eco-friendly Infrastructure</span>
              </div>
            </div>
          </motion.div>
        </div>
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

      <div className="bg-light py-5">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="display-5 fw-bold mb-3" style={{ fontSize: '3rem', color: "rgba(0, 0, 0, 0.48)" }}>Other Solutions</h2>
            <p className="lead text-muted" style={{ fontSize: '1.4rem' }}>Explore our comprehensive industrial solutions</p>
          </motion.div>
          
          <div className="row g-5">
            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="whatwedo-other-card h-100">

                <div className="row g-0">
                  <div className="col-md-5">
                    <div className="ratio ratio-1x1 h-100">
                      <img src="/tata_asal.jpg" alt="Lease Solution" className="img-fluid object-cover" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="p-4 p-xl-5 h-100 d-flex flex-column">
                      <h3 className="fw-bold mb-3" style={{ fontSize: '1.8rem' }}>We Build</h3>
                      <p className="text-muted mb-4" style={{ fontSize: '1.3rem', lineHeight: 1.6 }}>Developing industrial parks with premium spaces tailored for your ambitions.</p>
                      <div className="mt-auto">
                        <Link to="/dropdown/webuild" className="btn btn-warning px-4 py-3 fw-bold" style={{ fontSize: '1.2rem' }}>Explore Solutions</Link>
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

                <div className="row g-0">
                  <div className="col-md-5">
                    <div className="ratio ratio-1x1 h-100">
                      <img src="/sany_chakan2.jpg" alt="Maintain Solution" className="img-fluid object-cover" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="p-4 p-xl-5 h-100 d-flex flex-column">
                      <h3 className="fw-bold mb-3" style={{ fontSize: '1.8rem' }}>We Maintain</h3>
                      <p className="text-muted mb-4" style={{ fontSize: '1.3rem', lineHeight: 1.6 }}>Dedicated park level maintenance and management ensuring your operations never miss a beat and you harness uninterrupted growth.</p>
                      <div className="mt-auto">
                        <Link to="/dropdown/wemaintain" className="btn btn-warning px-4 py-3 fw-bold" style={{ fontSize: '1.2rem' }}>Explore Solutions</Link>
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

      <Contact />
    </div>
  )
}

export default WeLease;