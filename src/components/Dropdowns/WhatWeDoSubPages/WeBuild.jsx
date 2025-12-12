import React, { useState } from 'react';
import HeroSection from '../PortfolioDropdownSubPages/HeroSection';
import Contact from '../../Contact';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images, videos } from '@assets/media';

function WeBuild() {
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
        videoSrc={videos.tataGotion}
        header="We Build"
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
          Build to Suit with Zhang Properties
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
                      TURNING INDUSTRIAL VISION INTO BUILD-READY REALITY
                    </div>
                    <p
                      className="mb-0 text-white-50"
                      style={{ fontSize: '1.2rem', lineHeight: 1.7 }}
                    >
                      At Zhang Properties, we partner with growth-focused manufacturers and logistics brands
                      to translate expansion plans into intelligent, build-ready industrial campuses.
                      From land aggregation and master planning to approvals, design coordination, utilities,
                      and on-ground execution, our team takes ownership of the full development journey.
                      Every park is engineered for efficient flows, scalable utilities and compliant operations
                      so that your leadership can stay focused on customers, product roadmaps, and market
                      growth while we build the physical backbone that supports it.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="col-lg-6"
                  variants={itemVariants}
                >
                  <div className="whatwedo-feature-image-wrapper">
                    <img src={images.tataGotion1} alt="Zhang industrial development meeting" />
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ fontSize: '3rem', color: '#333', letterSpacing: '0.02em' }}
        >
          Integrated Build-to-Suit Delivery
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
                  Comprehensive development for future-ready facilities
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
                  Zhang Properties acts as your development arm from concept to handover.
                  We identify the right land parcels, master-plan the park, coordinate with
                  consultants and authorities, and drive EPC partners to deliver on time.
                  Every build-to-suit facility is designed around your process flows,
                  loading patterns, sustainability objectives, and compliance norms so
                  that the finished asset feels bespoke to your operation, not just a
                  generic industrial box.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6 order-1 order-lg-2"
              variants={itemVariants}
            >
              <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
                <img
                  src={images.tataGotion1}
                  alt="Zhang build-to-suit facility"
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
                  <img src={images.greenpark} alt="Green Park" className="img-fluid object-cover" />
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

      {/* Currently we are Developing Section */}
      <motion.section
        className="py-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container-xl">
          <motion.div
            className="mb-5"
            variants={itemVariants}
          >
            <h2
              className="fw-bold text-center mb-2"
              style={{ fontSize: '3rem', color: '#444444d9', letterSpacing: '0.02em' }}
            >
              Currently we are Developing
            </h2>
            <div
              style={{
                width: '80px',
                height: '4px',
                backgroundColor: '#d61f26',
                margin: '0 auto',
                borderRadius: '2px'
              }}
            />
          </motion.div>

          <div className="row g-4">
            {[
              {
                title: 'ESR Talegaon B05',
                location: 'Talegaon',
                area: '271,205 Sq.Ft.',
                description: 'Premium industrial facility for Putzmeister with 15m building height, Grade-A construction, and IGBC Gold rated sustainable features.',
                image: images.esrTalegaon2,
                link: '/dropdown/tata-gotion'
              },
              {
                title: 'SOVEREIGN INFRA STEELS PVT. LTD.',
                location: 'Talegaon MIDC',
                area: '12,494 Sqm Shed Area',
                description: 'Pre-engineered manufacturing facility for TATA Autocomps with 11m clear height, 4x10MT EOT cranes, and comprehensive infrastructure.',
                image: images.jadhavwadiOverview,
                link: '/dropdown/sany-chakan'
              },
              {
                title: 'Tata Asal - Sanand',
                location: 'Sanand',
                area: '15,44,000 Sq.Ft. Built-up Potential',
                description: 'Contemporary industrial campus with 63 acres project area, prioritizing efficient circulation and premium arrival experience.',
                image: images.tataAsal,
                link: '/dropdown/tata-asal'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-4"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={project.link} className="text-decoration-none">
                  <div
                    className="h-100 shadow-lg"
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: '#fff',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="position-relative" style={{ height: '250px', overflow: 'hidden' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid w-100 h-100"
                        style={{
                          objectFit: 'cover',
                          transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3
                        className="fw-bold mb-2"
                        style={{
                          fontSize: '1.5rem',
                          color: '#333',
                          fontFamily: "'Barlow', sans-serif"
                        }}
                      >
                        {project.title}
                      </h3>
                      <div className="mb-2">
                        <span
                          className="badge bg-danger bg-opacity-10 text-danger me-2"
                          style={{ fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}
                        >
                          {project.location}
                        </span>
                        <span
                          className="badge bg-primary bg-opacity-10 text-primary"
                          style={{ fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}
                        >
                          {project.area}
                        </span>
                      </div>
                      <p
                        className="text-muted mb-0"
                        style={{
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          fontFamily: "'Barlow', sans-serif"
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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

      {/* Developed Projects Section */}
      <motion.section
        className="py-5 bg-light"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container-xl">
          <motion.div
            className="mb-5"
            variants={itemVariants}
          >
            <h2
              className="fw-bold text-center mb-2"
              style={{ fontSize: '3rem', color: '#444444d9', letterSpacing: '0.02em' }}
            >
              Developed Projects
            </h2>
            <div
              style={{
                width: '80px',
                height: '4px',
                backgroundColor: '#d61f26',
                margin: '0 auto',
                borderRadius: '2px'
              }}
            />
          </motion.div>

          <div className="row g-4">
            {[
              {
                title: 'Tata Gotion',
                location: 'Chakan + Sanand',
                area: '1.2M Sq.Ft.',
                description: 'Fully commissioned battery manufacturing and assembly infrastructure across twin campuses with high-bay production halls, battery module lines, and robust utilities.',
                image: images.tataGotion,
                link: '/completed/tata-gotion'
              },
              {
                title: 'Sany',
                location: 'Chakan',
                area: '350K Sq.Ft.',
                description: 'Pre-engineered sheds and office cores for heavy-equipment program with wide bays, crane-ready grids, and deep yards supporting assembly and testing.',
                image: images.sanyChakan,
                link: '/completed/sany'
              },
              {
                title: 'Tata Asal',
                location: 'Sanand',
                area: '1L Sq.Ft.',
                description: 'Pre-engineered manufacturing space blending production bays, warehouse space, and collaborative office/lab cores designed for flexible line layouts.',
                image: images.tataAsal,
                link: '/completed/tata-asal'
              },
              {
                title: 'Tata Toyo Radiator',
                location: 'Hinjewadi',
                area: '3L Sq.Ft.',
                description: 'Delivered industrial facility in Hinjewadi industrial/IT corridor with excellent connectivity to major highways and logistics hubs.',
                image: images.projectStructure,
                link: '/completed/tata-toyo-radiator'
              },
              {
                title: 'Tata Ficosa',
                location: 'Chakan',
                area: '1L Sq.Ft.',
                description: 'Completed manufacturing facility designed for precision manufacturing with modern infrastructure, efficient layouts, and comprehensive utilities.',
                image: images.esrTalegaon2,
                link: '/completed/tata-ficosa'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-4"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={project.link} className="text-decoration-none">
                  <div
                    className="h-100 shadow-lg"
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: '#fff',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredCard(`completed-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="position-relative" style={{ height: '250px', overflow: 'hidden' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid w-100 h-100"
                        style={{
                          objectFit: 'cover',
                          transform: hoveredCard === `completed-${index}` ? 'scale(1.1)' : 'scale(1)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                      <div
                        className="position-absolute top-0 end-0 m-2"
                        style={{
                          backgroundColor: '#d61f26',
                          color: '#fff',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '4px',
                          fontSize: '0.85rem',
                          fontWeight: 'bold',
                          fontFamily: "'Barlow', sans-serif"
                        }}
                      >
                        COMPLETED
                      </div>
                    </div>
                    <div className="p-4">
                      <h3
                        className="fw-bold mb-2"
                        style={{
                          fontSize: '1.5rem',
                          color: '#333',
                          fontFamily: "'Barlow', sans-serif"
                        }}
                      >
                        {project.title}
                      </h3>
                      <div className="mb-2">
                        <span
                          className="badge bg-danger bg-opacity-10 text-danger me-2"
                          style={{ fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}
                        >
                          {project.location}
                        </span>
                        <span
                          className="badge bg-primary bg-opacity-10 text-primary"
                          style={{ fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}
                        >
                          {project.area}
                        </span>
                      </div>
                      <p
                        className="text-muted mb-0"
                        style={{
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          fontFamily: "'Barlow', sans-serif"
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
                      <img src={images.tataGotion1} alt="Lease Solution" className="img-fluid object-cover" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="p-4 p-xl-5 h-100 d-flex flex-column">
                      <h3 className="fw-bold mb-3" style={{ fontSize: '1.8rem' }}>We Lease</h3>
                      <p className="text-muted mb-4" style={{ fontSize: '1.3rem', lineHeight: 1.6 }}>Empowering your operations with flexible and strategic industrial leasing solutions tailored to your business needs.</p>
                      <div className="mt-auto">
                        <Link to="/dropdown/welease" className="btn btn-warning px-4 py-3 fw-bold" style={{ fontSize: '1.2rem' }}>Explore Solutions</Link>
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
                      <img src={images.tataGotion2} alt="Maintain Solution" className="img-fluid object-cover" />
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

export default WeBuild;