import React, { useState } from 'react';
import HeroSection from '../PortfolioDropdownSubPages/HeroSection';
import Contact from '../../Contact';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

function OurOccupiers() {
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
      style={{ maxHeight: '260px', objectFit: 'cover' }}
      initial={imageAnimation.initial}
      animate={imageAnimation.animate}
      transition={imageAnimation.transition}
      whileHover={{ scale: 1.03 }}
    />
  );

  return (
    <div className="bg-light">
      <HeroSection
        videoSrc="/tata-gotion.mp4"
        header="Our Occupiers"
        subheader="Explore a world of possibilities with our premium services"
        textColor="#fff"
        leftStatValue="63 Acres"
        leftStatLabel="Project Area"
        rightStatValue="15,44,000 Sq.Ft."
        rightStatLabel="Built-up Potential"
      />
      <SectionSeparator />

      <div
        className="container py-5"
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
          backgroundSize: '10px 10px',
        }}
      >

        <div className="text-center mb-5">
          <motion.div 
            className="badge bg-danger text-white fs-6 px-4 py-2 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            OCCUPIER EXPERIENCE
          </motion.div>
          <motion.h2 
            className="display-5 fw-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '2.7rem', letterSpacing: '0.05em', color: '#111827' }}
          >
            Simplifying your facility journey
          </motion.h2>
          <motion.p
            className="text-muted mx-auto"
            style={{ maxWidth: '740px', fontFamily: "'Barlow', sans-serif", fontSize: '1.02rem' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            From first site visit to day-to-day operations, we design our parks so that occupiers can move fast,
            stay compliant and keep their focus on what matters most – their core business.
          </motion.p>
        </div>

        <motion.div
          className="position-absolute top-50 start-0 translate-middle-y"
          style={{ height: '2px', width: '100%', pointerEvents: 'none' }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div
            style={{
              width: '120%',
              height: '100%',
              marginLeft: '-10%',
              background:
                'repeating-linear-gradient(90deg, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0.22) 6px, transparent 6px, transparent 12px)',
              opacity: 0.4,
            }}
          />
        </motion.div>

        <motion.div 
          className="row g-4 align-items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="col-lg-8" variants={itemVariants}>
            <div
              className="h-100 rounded-4 shadow-lg p-4 p-md-5 border border-2 border-danger"
              style={{ backgroundColor: '#fdf9f7' }}
            >
              <div className="row g-4">
                <div className="col-md-12">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-danger rounded-circle p-2 me-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM7 11.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H7zm2 0a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H9z"/>
                      </svg>
                    </div>
                    <div>
                      <div
                        className="text-uppercase text-muted"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.16em' }}
                      >
                        01 · Challenges
                      </div>
                      <h3
                        className="mb-2"
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.3rem', letterSpacing: '0.01em' }}
                      >
                        Challenges in asset utilisation
                      </h3>
                      <p className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                        In today's business landscape, accessing industrial facilities swiftly is crucial for
                        manufacturing and warehousing companies to remain competitive. However, challenges such
                        as limited construction expertise, high CAPEX commitments, compliance complexities, and
                        locating prime locations can impede progress. Delays in facility development hinder
                        scalability, market responsiveness, and incur additional costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 border-top border-danger-subtle pt-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-dark rounded-circle p-2 me-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 16 16">
                        <path d="M8.5 11.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-1z"/>
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                      </svg>
                    </div>
                    <div>
                      <div
                        className="text-uppercase text-muted"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.16em' }}
                      >
                        02 · Support
                      </div>
                      <h3
                        className="mb-2"
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.3rem', letterSpacing: '0.01em' }}
                      >
                        How we maximise your asset's potential
                      </h3>
                      <p className="mb-0" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                        At Zhang Properties Construction, we alleviate the concerns of our occupiers by taking
                        on the responsibility of common area maintenance. Our comprehensive facility management
                        services cover a wide range of tasks, from overseeing general administration to performing
                        routine maintenance activities like housekeeping, pest control, and landscaping. We also
                        manage critical infrastructure maintenance, including electrical systems, plumbing, and
                        fire-fighting equipment, ensuring that all facilities are well-maintained and safe.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 border-top border-danger-subtle pt-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-danger rounded-circle p-2 me-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                      </svg>
                    </div>
                    <div>
                      <div
                        className="text-uppercase text-muted"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.16em' }}
                      >
                        03 · Outcome
                      </div>
                      <h3
                        className="mb-2"
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: '1.3rem', letterSpacing: '0.01em' }}
                      >
                        Unlocking operational freedom with proactive support
                      </h3>
                      <p className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                        By onboarding on our platform, our occupiers can focus on their core business operations
                        without the hassle of managing park upkeep. Occupiers benefit from a better ecosystem of
                        support infrastructure, contributing to improved productivity and employee satisfaction.
                        Ultimately, choosing Godwitt means access to a reliable partner for facility management,
                        leading to enhanced operational efficiency and peace of mind for our occupiers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-lg-4" variants={itemVariants}>
            <div className="h-100 d-flex flex-column">
              <div className="rounded-4 overflow-hidden shadow-lg mb-3">
                <AnimatedImage src="/tata_gotion1.png" alt="Industrial Facility" />
              </div>
              <div className="rounded-4 overflow-hidden shadow-lg mb-3">
                <AnimatedImage src="/tata_asal1.jpg" alt="Industrial Facility" />
              </div>
              <div className="rounded-4 overflow-hidden shadow-lg mb-3">
                <AnimatedImage src="/build.jpeg" alt="Industrial Facility" />
              </div>
              <div
                className="small text-muted mt-auto pt-2 border-top"
                style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.8rem', letterSpacing: '0.08em' }}
              >
                OCCUPIER NOTE · LIVE-WORK ECOSYSTEMS AT ZHANG PROPERTIES
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
          </motion.div>
          
          <div className="row g-4">
            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
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
                  <p className="card-text text-muted">Ready to move in industrial facilities optimised towards efficiency, and as a result decreasing your go-to-market timeline. Experience our standard specifications building developed for your swift expansion.</p>
                  <div className="mt-auto pt-3">
                    <span className="badge bg-danger text-white">Built to suit</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
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
              <h2 className="display-5 fw-bold mb-4">Green is our blood</h2>
              <p className="lead text-muted mb-4">
                We as an organization have a pro-green philosophy, which is why we have also taken up extensive green initiatives by introducing the Miyawaki plantation in our parks which accounts for 5% of our park area.
              </p>
              <p className="lead text-muted">
                This leads to the integration of indigenous trees in our parks that encourage the native population of flora and fauna to organically create spaces that make our parks more than just industrial spaces.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-5">
                <span className="badge bg-danger bg-opacity-10 text-danger fs-6 py-2 px-3">Sustainable Development</span>
                <span className="badge bg-danger bg-opacity-10 text-danger fs-6 py-2 px-3">Miyawaki Forests</span>
                <span className="badge bg-danger bg-opacity-10 text-danger fs-6 py-2 px-3">Eco-friendly Infrastructure</span>
              </div>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="display-5 fw-bold mb-3">Other Solutions</h2>
            <p className="lead text-muted">Explore our comprehensive industrial solutions</p>
          </motion.div>
          
          <div className="row g-5">
            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-4 shadow-lg overflow-hidden h-100">
                <div className="row g-0">
                  <div className="col-md-5">
                    <div className="ratio ratio-1x1 h-100">
                      <img src="/lease.jpeg" alt="Lease Solution" className="img-fluid object-cover" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="p-4 p-xl-5 h-100 d-flex flex-column">
                      <h3 className="fw-bold mb-3">We Lease</h3>
                      <p className="text-muted mb-4">Empowering your operations with flexible and strategic industrial leasing solutions tailored to your business needs.</p>
                      <div className="mt-auto">
                        <Link to="/dropdown/welease" className="btn btn-danger px-4 py-3 fw-bold">Explore Solutions</Link>
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
              <div className="bg-white rounded-4 shadow-lg overflow-hidden h-100">
                <div className="row g-0">
                  <div className="col-md-5">
                    <div className="ratio ratio-1x1 h-100">
                      <img src="/maintain.jpeg" alt="Maintain Solution" className="img-fluid object-cover" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="p-4 p-xl-5 h-100 d-flex flex-column">
                      <h3 className="fw-bold mb-3">We Maintain</h3>
                      <p className="text-muted mb-4">Dedicated park level maintenance and management ensuring your operations never miss a beat and you harness uninterrupted growth.</p>
                      <div className="mt-auto">
                        <Link to="/dropdown/wemaintain" className="btn btn-danger px-4 py-3 fw-bold">Explore Solutions</Link>
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

export default OurOccupiers;