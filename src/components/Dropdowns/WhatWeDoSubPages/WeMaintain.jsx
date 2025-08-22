import React, { useState } from 'react';
import HeroSection from '../PortfolioDropdownSubPages/HeroSection';
import Contact from '../../Contact';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function WeMaintain() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants
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
    <div className="bg-light">
      <HeroSection
        videoSrc="/tata-gotion.mp4"
        header="We maintain"
        subheader="Explore a world of possibilities with our premium services"
        textColor="#fff"
      />
      
      <div className="container py-5">
        <div className="text-center mb-5">
          <motion.div 
            className="badge bg-warning text-dark fs-6 px-4 py-2 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            PROACTIVE FACILITY MANAGEMENT
          </motion.div>
          <motion.h2 
            className="display-4 fw-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Enhancing Your Operational Efficiency
          </motion.h2>
        </div>

        <motion.div 
          className="row g-5 mb-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="col-lg-6" variants={itemVariants}>
            <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 h-100">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning rounded-circle p-2 me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM7 11.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H7zm2 0a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H9z"/>
                  </svg>
                </div>
                <h3 className="mb-0">ADDRESSING MAINTENANCE CHALLENGES</h3>
              </div>
              <p className="text-muted fs-5">For our occupiers, ensuring the regular upkeep and maintenance of common areas within industrial parks can pose a challenge. Without dedicated support, managing essential tasks like maintaining infrastructure such as sewage treatment plants (STPs), fire prevention systems, and landscaping can become overwhelming. This lack of support may lead to disruptions and safety hazards, impacting the smooth functioning of their operations.</p>
            </div>
          </motion.div>
          
          <motion.div className="col-lg-6" variants={itemVariants}>
            <AnimatedImage src="/build.jpeg" alt="Industrial Facility" />
          </motion.div>
          
          <motion.div className="col-lg-6 order-lg-2" variants={itemVariants}>
            <div className="bg-warning rounded-4 shadow-lg p-4 p-md-5 h-100">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-dark rounded-circle p-2 me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                    <path d="M8.5 11.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-1z"/>
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                  </svg>
                </div>
                <h3 className="mb-0">COMPREHENSIVE FACILITY MANAGEMENT SOLUTIONS</h3>
              </div>
              <p className="fs-5">At Zhang Properties, we alleviate the concerns of our occupiers by taking on the responsibility of common area maintenance. Our comprehensive facility management services cover a wide range of tasks, from overseeing general administration to performing routine maintenance activities like housekeeping, pest control, and landscaping. We also manage critical infrastructure maintenance, including electrical systems, plumbing, and fire-fighting equipment, ensuring that all facilities are well-maintained and safe.</p>
            </div>
          </motion.div>
          
          <motion.div className="col-lg-6 order-lg-1" variants={itemVariants}>
            <AnimatedImage src="/build.jpeg" alt="Industrial Facility" />
          </motion.div>
          
          <motion.div className="col-lg-6" variants={itemVariants}>
            <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 h-100">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning rounded-circle p-2 me-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  </svg>
                </div>
                <h3 className="mb-0">UNLOCKING OPERATIONAL FREEDOM WITH PROACTIVE SUPPORT</h3>
              </div>
              <p className="text-muted fs-5">By onboarding on our platform, our occupiers can focus on their core business operations without the hassle of managing park upkeep. Occupiers benefit from a better ecosystem of support infrastructure, contributing to improved productivity and employee satisfaction. Ultimately, choosing Godwitt means access to a reliable partner for facility management, leading to enhanced operational efficiency and peace of mind for our occupiers.</p>
            </div>
          </motion.div>
          
          <motion.div className="col-lg-6" variants={itemVariants}>
            <AnimatedImage src="/build.jpeg" alt="Industrial Facility" />
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-warning bg-opacity-10 py-6">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="display-5 fw-bold mb-3">Development Modalities</h2>
            <p className="lead text-muted">Tailored solutions for every industrial need</p>
          </motion.div>
          
          <div className="row g-4">
            <motion.div 
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div 
                className={`card h-100 border-0 rounded-4 shadow-sm transition-all ${hoveredCard === 1 ? 'bg-warning bg-opacity-25' : 'bg-white'}`}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning rounded-circle p-2 me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM7 11.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H7zm2 0a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H9z"/>
                      </svg>
                    </div>
                    <h5 className="card-title mb-0">Speculative developments</h5>
                  </div>
                  <p className="card-text text-muted">Ready to move in industrial facilities optimised towards efficiency, and as a result decreasing your go-to-market timeline. Experience our standard specifications building developed for your swift expansion.</p>
                  <div className="mt-auto pt-3">
                    <span className="badge bg-warning text-dark">Plug N' Play facilities</span>
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
                className={`card h-100 border-0 rounded-4 shadow-sm transition-all ${hoveredCard === 2 ? 'bg-warning bg-opacity-25' : 'bg-white'}`}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning rounded-circle p-2 me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.5 11.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-1z"/>
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                      </svg>
                    </div>
                    <h5 className="card-title mb-0">Custom Developments</h5>
                  </div>
                  <p className="card-text text-muted">Ready to move in industrial facilities optimised towards efficiency, and as a result decreasing your go-to-market timeline. Experience our standard specifications building developed for your swift expansion.</p>
                  <div className="mt-auto pt-3">
                    <span className="badge bg-warning text-dark">Built to suit</span>
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
                className={`card h-100 border-0 rounded-4 shadow-sm transition-all ${hoveredCard === 3 ? 'bg-warning bg-opacity-25' : 'bg-white'}`}
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning rounded-circle p-2 me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                      </svg>
                    </div>
                    <h5 className="card-title mb-0">Turnkey Developments</h5>
                  </div>
                  <p className="card-text text-muted">We deliver full stack industrial development from engineering to procurement, construction, and commissioning - a single point solution for your industrial infrastructure needs.</p>
                  <div className="mt-auto pt-3">
                    <span className="badge bg-warning text-dark">EPC contracts</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

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
                <span className="badge bg-success bg-opacity-10 text-success fs-6 py-2 px-3">Sustainable Development</span>
                <span className="badge bg-success bg-opacity-10 text-success fs-6 py-2 px-3">Miyawaki Forests</span>
                <span className="badge bg-success bg-opacity-10 text-success fs-6 py-2 px-3">Eco-friendly Infrastructure</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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
                        <Link to="/dropdown/welease" className="btn btn-warning px-4 py-3 fw-bold">Explore Solutions</Link>
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
                        <Link to="/dropdown/wemaintain" className="btn btn-warning px-4 py-3 fw-bold">Explore Solutions</Link>
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

export default WeMaintain;