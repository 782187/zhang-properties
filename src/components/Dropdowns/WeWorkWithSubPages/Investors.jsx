import React, { useState, useEffect } from 'react';
import HeroSection from '../PortfolioDropdownSubPages/HeroSection';
import Contact from '../../Contact';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionSeparator = () => (
  <div
    style={{
      top: 0,
      left: 0,
      width: '100%',
      height: '50px',
      background: `
        repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.3) 0px,
          rgba(0, 0, 0, 0.17) 1.5px,
          transparent 1.5px,
          transparent 6px
        )
      `,
      backgroundColor: '#ffffff',
      zIndex: 2,
    }}
  ></div>
);

function Investors() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.1, 0.25, 0.3, 1],
        damping: 25 
      }
    }
  };

  const textSlideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.1, 0.25, 0.3, 1] 
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-light overflow-hidden">
      <HeroSection
        videoSrc="/tata-gotion.mp4"
        header="Investors"
        subheader="Explore a world of possibilities with our premium services"
        textColor="#fff"
        leftStatValue="63 Acres"
        leftStatLabel="Project Area"
        rightStatValue="15,44,000 Sq.Ft."
        rightStatLabel="Built-up Potential"
      />
      <SectionSeparator />

      <div className="container py-5">
        <div className="text-center mb-5">
          <motion.div 
            className="badge bg-danger text-white fs-6 px-4 py-2 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            OFFER
          </motion.div>
          <motion.h2 
            className="display-4 fw-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '3rem', letterSpacing: '0.01em', color: '#111827' }}
          >
            Opportunity Awaits: Unlocking Potential with Zhang Properties
          </motion.h2>
          <motion.p
            className="text-muted mx-auto"
            style={{ maxWidth: '720px', fontFamily: "'Barlow', sans-serif", fontSize: '1.05rem' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            A curated industrial real estate opportunity designed for stable, long-term returns and institutional-grade tenants.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto bg-danger" 
            style={{ height: "3px", borderRadius: "999px" }}
          />
        </div>

        <motion.div
          className="row g-4 align-items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <motion.div className="col-lg-8" variants={itemVariants}>
            <div
              className="h-100 rounded-4 shadow-lg p-4 p-md-5 border border-2 border-danger position-relative"
              style={{ backgroundColor: '#fdf9f7' }}
            >
              <span
                className="text-uppercase text-danger fw-semibold mb-2 d-inline-block"
                style={{ letterSpacing: '0.18em', fontSize: '0.7rem' }}
              >
                INVESTMENT BRIEF
              </span>
              <h3
                className="fw-bold mb-4"
                style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.7rem', letterSpacing: '0.04em' }}
              >
                A steady, asset-backed story for long-term partners
              </h3>

              <div className="row g-4">
                <div className="col-md-4">
                  <div className="h-100 border-end border-danger-subtle pe-md-3">
                    <div className="d-flex align-items-center mb-3">
                      <span
                        className="me-2 rounded-circle d-inline-flex align-items-center justify-content-center bg-danger text-white"
                        style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}
                      >
                        01
                      </span>
                      <span
                        className="fw-semibold text-uppercase"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.16em' }}
                      >
                        Challenges
                      </span>
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      Investors often face the challenge of finding a stable asset class with promising
                      growth prospects, offering returns that outpace the market. While some may have
                      invested in real estate, their exposure typically lies in commercial or residential
                      spaces, overlooking the potential of industrial real estate.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="h-100 border-end border-danger-subtle px-md-3">
                    <div className="d-flex align-items-center mb-3">
                      <span
                        className="me-2 rounded-circle d-inline-flex align-items-center justify-content-center bg-danger text-white"
                        style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}
                      >
                        02
                      </span>
                      <span
                        className="fw-semibold text-uppercase"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.16em' }}
                      >
                        Our Approach
                      </span>
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      At Zhang Properties, we offer a compelling solution by providing investment
                      opportunities in industrial real estate projects, both at the project level and
                      at a fund level. With our proven track record and expertise, investors can tap
                      into this asset class poised for sustainable growth.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="h-100 ps-md-3">
                    <div className="d-flex align-items-center mb-3">
                      <span
                        className="me-2 rounded-circle d-inline-flex align-items-center justify-content-center bg-danger text-white"
                        style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}
                      >
                        03
                      </span>
                      <span
                        className="fw-semibold text-uppercase"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.16em' }}
                      >
                        Outcomes
                      </span>
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      Investors benefit from hassle-free ownership as we handle property maintenance
                      through dedicated on-site teams and a stable tenant base. Strategic locations
                      and high-quality infrastructure help preserve intrinsic value and enable
                      structured exit strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-lg-4" variants={itemVariants}>
            <div className="h-100 d-flex flex-column">
              <div className="rounded-4 overflow-hidden shadow-lg mb-3">
                <motion.img
                  src="/tata_gotion1.png"
                  alt="Industrial Facility"
                  className="img-fluid w-100"
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  whileHover={{ scale: 1.03 }}
                />
              </div>
              <div
                className="small text-muted mt-auto pt-2 border-top"
                style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.8rem', letterSpacing: '0.08em' }}
              >
                INDUSTRIAL INVESTMENT NOTE · CURATED BY ZHANG PROPERTIES
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <SectionSeparator />

      <div className="bg-danger bg-opacity-10 py-6">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="display-5 fw-bold mb-3"
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: '2.6rem', letterSpacing: '0.01em', color: '#111827' }}
            >
              Development Modalities
            </h2>
            <p
              className="lead text-muted"
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.2rem' }}
            >
              Tailored solutions for every industrial need
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto bg-danger" 
              style={{ height: "4px", borderRadius: "2px" }}
            />
          </motion.div>
          
          <div className="row g-4">
            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div 
                className={`card h-100 border-0 rounded-4 shadow-sm transition-all ${hoveredCard === 1 ? 'bg-danger bg-opacity-25' : 'bg-white'}`}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-danger rounded-circle p-2 me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM7 11.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H7zm2 0a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H9z"/>
                      </svg>
                    </div>
                    <h5
                      className="card-title mb-0"
                      style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.2rem' }}
                    >
                      Speculative developments
                    </h5>
                  </div>
                  <p
                    className="card-text text-muted"
                    style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', lineHeight: 1.7 }}
                  >
                    Ready to move in industrial facilities optimised towards efficiency, and as a result decreasing your go-to-market timeline. Experience our standard specifications building developed for your swift expansion.
                  </p>
                  <div className="mt-auto pt-3">
                    <span className="badge bg-danger text-white">Plug N' Play facilities</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div 
                className={`card h-100 border-0 rounded-4 shadow-sm transition-all ${hoveredCard === 2 ? 'bg-danger bg-opacity-25' : 'bg-white'}`}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-danger rounded-circle p-2 me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.5 11.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-1z"/>
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                      </svg>
                    </div>
                    <h5
                      className="card-title mb-0"
                      style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.2rem' }}
                    >
                      Custom Developments
                    </h5>
                  </div>
                  <p
                    className="card-text text-muted"
                    style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', lineHeight: 1.7 }}
                  >
                    Ready to move in industrial facilities optimised towards efficiency, and as a result decreasing your go-to-market timeline. Experience our standard specifications building developed for your swift expansion.
                  </p>
                  <div className="mt-auto pt-3">
                    <span className="badge bg-danger text-white">Built to suit</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div 
                className={`card h-100 border-0 rounded-4 shadow-sm transition-all ${hoveredCard === 3 ? 'bg-danger bg-opacity-25' : 'bg-white'}`}
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-danger rounded-circle p-2 me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                      </svg>
                    </div>
                    <h5
                      className="card-title mb-0"
                      style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.2rem' }}
                    >
                      Turnkey Developments
                    </h5>
                  </div>
                  <p
                    className="card-text text-muted"
                    style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1rem', lineHeight: 1.7 }}
                  >
                    We deliver full stack industrial development from engineering to procurement, construction, and commissioning - a single point solution for your industrial infrastructure needs.
                  </p>
                  <div className="mt-auto pt-3">
                    <span className="badge bg-danger text-white">EPC contracts</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <SectionSeparator />

      <div className="container py-6">
        <div className="row align-items-center">
          <motion.div 
            className="col-lg-5 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="position-relative">
              <div className="position-relative z-1">
                <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
                  <img src="/sany_chakan.jpg" alt="Green Park" className="img-fluid object-cover" />
                </div>
                <div className="position-absolute bottom-0 start-0 bg-danger text-white p-3 rounded-tr-4">
                  <h5
                    className="mb-0"
                    style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.2rem' }}
                  >
                    Eco-Friendly Design
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="ps-lg-5">
              <h2
                className="display-5 fw-bold mb-4"
                style={{ fontFamily: "'Barlow', sans-serif", fontSize: '2.6rem', letterSpacing: '0.01em', color: '#111827' }}
              >
                Green is our blood
              </h2>
              <motion.p 
                className="lead text-muted mb-4"
                variants={textSlideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p
                  className="lead text-muted mb-4"
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.2rem' }}
                >
                  We as an organization have a pro-green philosophy, which is why we have also taken up extensive green initiatives by introducing the Miyawaki plantation in our parks which accounts for 5% of our park area.
                </p>
              </motion.p>
              <motion.p 
                className="lead text-muted"
                variants={textSlideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p
                  className="lead text-muted"
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.2rem' }}
                >
                  This leads to the integration of indigenous trees in our parks that encourage the native population of flora and fauna to organically create spaces that make our parks more than just industrial spaces.
                </p>
              </motion.p>
              <motion.div 
                className="d-flex flex-wrap gap-2 mt-5"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span
                  className="badge bg-danger bg-opacity-10 text-danger fs-6 py-2 px-3"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  Sustainable Development
                </span>
                <span
                  className="badge bg-danger bg-opacity-10 text-danger fs-6 py-2 px-3"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  Miyawaki Forests
                </span>
                <span
                  className="badge bg-danger bg-opacity-10 text-danger fs-6 py-2 px-3"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  Eco-friendly Infrastructure
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <SectionSeparator />

      <div className="bg-light py-6">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="display-5 fw-bold mb-3"
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: '2.6rem', letterSpacing: '0.01em', color: '#111827' }}
            >
              Other Solutions
            </h2>
            <p
              className="lead text-muted"
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.2rem' }}
            >
              Explore our comprehensive industrial solutions
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto bg-danger" 
              style={{ height: "4px", borderRadius: "2px" }}
            />
          </motion.div>
          
          <div className="row g-5">
            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-white rounded-4 shadow-lg overflow-hidden h-100 hover-shadow-lg">
                <div className="row g-0">
                  <div className="col-md-5">
                    <div className="ratio ratio-1x1 h-100">
                      <img src="/tata_asal.jpg" alt="Lease Solution" className="img-fluid object-cover" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="p-4 p-xl-5 h-100 d-flex flex-column">
                      <h3
                        className="fw-bold mb-3"
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.6rem' }}
                      >
                        We Lease
                      </h3>
                      <p
                        className="text-muted mb-4"
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.1rem', lineHeight: 1.7 }}
                      >
                        Empowering your operations with flexible and strategic industrial leasing solutions tailored to your business needs.
                      </p>
                      <div className="mt-auto">
                        <Link to="/dropdown/welease" className="btn btn-danger px-4 py-3 fw-bold d-inline-flex align-items-center">
                          Explore Solutions 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ms-2">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-white rounded-4 shadow-lg overflow-hidden h-100 hover-shadow-lg">
                <div className="row g-0">
                  <div className="col-md-5">
                    <div className="ratio ratio-1x1 h-100">
                      <img src="/tata_gotion3.jpg" alt="Maintain Solution" className="img-fluid object-cover" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="p-4 p-xl-5 h-100 d-flex flex-column">
                      <h3
                        className="fw-bold mb-3"
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.6rem' }}
                      >
                        We Maintain
                      </h3>
                      <p
                        className="text-muted mb-4"
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.1rem', lineHeight: 1.7 }}
                      >
                        Dedicated park level maintenance and management ensuring your operations never miss a beat and you harness uninterrupted growth.
                      </p>
                      <div className="mt-auto">
                        <Link to="/dropdown/wemaintain" className="btn btn-danger px-4 py-3 fw-bold d-inline-flex align-items-center">
                          Explore Solutions 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ms-2">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  )
}

export default Investors;