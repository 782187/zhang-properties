import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import HeroSection from '../PortfolioDropdownSubPages/HeroSection';
import ProjectAccordion from '../PortfolioDropdownSubPages/ProjectAccordion';
import Contact from '../../Contact';
import { images, videos } from '@assets/media';
import 'bootstrap/dist/css/bootstrap.min.css';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.8 }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const completedProjects = [
    {
        title: 'Tata Gotion',
        image: images.esrTalegaon2,
        link: '/completed/tata-gotion',
        area: '1.2M Sq.Ft.',
        location: 'Chakan + Sanand',
    },
    {
        title: 'Sany',
        image: images.jadhavwadiOverview,
        link: '/completed/sany',
        area: '350K Sq.Ft.',
        location: 'Chakan',
    },
    {
        title: 'Tata Asal',
        image: images.tataAsal,
        link: '/completed/tata-asal',
        area: '1L Sq.Ft.',
        location: 'Sanand',
    },
    {
        title: 'Tata Toyo Radiator',
        image: images.esrTalegaon2,
        link: '/completed/tata-toyo-radiator',
        area: '3L Sq.Ft.',
        location: 'Hinjewadi',
    },
    {
        title: 'Tata Ficosa',
        image: images.esrTalegaon2,
        link: '/completed/tata-ficosa',
        area: '1L Sq.Ft.',
        location: 'Chakan',
    },
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        className="col-12 col-sm-6 col-lg-3"
        key={index}
        variants={itemVariants}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.25 }}
    >
        <Link to={project.link} className="text-decoration-none">
            <div
                className="position-relative w-100 d-flex flex-column"
                style={{
                    overflow: 'hidden',
                    borderRadius: '0',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                }}
            >
                {/* Red Square Section */}
                <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                        backgroundColor: '#d61f26',
                        color: '#ffffff',
                        padding: '3rem 2rem',
                        minHeight: '280px',
                        aspectRatio: '1 / 1'
                    }}
                >
                    {/* Large Project Name */}
                    <div
                        style={{
                            fontFamily: "'Barlow', sans-serif",
                            fontWeight: 700,
                            fontSize: '2.5rem',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            lineHeight: '1.1',
                            marginBottom: '1rem'
                        }}
                    >
                        {project.title}
                    </div>
                    
                    {/* Thin White Line */}
                    <div
                        style={{
                            width: '60px',
                            height: '2px',
                            backgroundColor: '#ffffff',
                            margin: '0.75rem 0'
                        }}
                    />
                    
                    {/* BY Zhang Properties */}
                    <div
                        style={{
                            fontFamily: "'Barlow', sans-serif",
                            fontWeight: 400,
                            fontSize: '0.85rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            marginTop: '0.5rem',
                            opacity: 0.95
                        }}
                    >
                        BY ZHANG PROPERTIES
                    </div>
                </div>
                
                {/* Dark Grey Bar */}
                <div
                    style={{
                        backgroundColor: '#2f2f2f',
                        padding: '1.25rem 1.5rem',
                        minHeight: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div
                        style={{
                            fontFamily: "'Dancing Script', 'Brush Script MT', 'Lucida Handwriting', cursive",
                            color: '#ffffff',
                            fontSize: '1.5rem',
                            fontWeight: 400,
                            textAlign: 'center',
                            letterSpacing: '0.05em',
                            lineHeight: '1.2'
                        }}
                    >
                        {project.title}
                    </div>
                </div>
            </div>
        </Link>
    </motion.div>
);

function TataToyoRadiator() {
    const location = useLocation();
    const currentProjectLink = location.pathname;
    
    // Filter out the current project from the list
    const filteredCompletedProjects = completedProjects.filter(
        project => project.link !== currentProjectLink
    );
    
    return (
        <motion.div
            className="tata-toyo-radiator-page"
            style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}
            initial="hidden"
            animate="show"
            variants={containerVariants}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <HeroSection
                videoSrc={videos.tataGotion}
                header="Tata Toyo Radiator"
                subheader="3 lakh sq.ft radiator manufacturing campus"
                textColor="#fff"
                leftStatValue="3L Sq.Ft."
                leftStatLabel="Built-Up"
                rightStatValue="Hinjewadi"
                rightStatLabel="Location"
            />

            <ProjectAccordion
                items={[
                    {
                        title: 'Project Overview',
                        content: (
                            <>
                                <p className="project-accordion-body">
                                    300,000 sq.ft delivered for radiator manufacturing with large spans, multiple production bays, dock canopies, and office/lab inserts to support precision fabrication and assembly.
                                </p>
                                <img src={images.projectStructure} width="100%" height="auto" alt="Tata Toyo Radiator Facility" />
                            </>
                        ),
                    },
                    {
                        title: 'Development Status',
                        content: (
                            <p className="project-accordion-body">
                                Completed and operational with certified fire & life safety, power distribution, compressed air, process water, and waste treatment systems. Dock and yard planning is optimized for continuous shipments.
                            </p>
                        ),
                    },
                    {
                        title: 'Location & Connectivity',
                        content: (
                            <div className="project-accordion-map">
                                <p className="project-accordion-body">
                                    Strategically located in Hinjewadi, one of Pune's premier industrial and IT corridors. Excellent connectivity to Mumbai-Pune Expressway, major highways, and logistics hubs. Prime location with established infrastructure, proximity to key markets, and access to skilled workforce. Well-connected to Pune city and major transportation networks.
                                </p>
                                <div className="project-accordion-map-frame">
                                    <iframe
                                        title="Tata Toyo Radiator Hinjewadi Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.010876898728!2d73.7279449!3d18.5927898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc1252bc1d9%3A0xdde29c29fbf6b8ff!2sTata%20Toyo%20Radiator%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        ),
                    },
                ]}
            />

            <motion.section
                className="py-5"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container">
                    <motion.h2 className="text-center mb-4" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#33333393' }}>
                        Completed Excellence
                    </motion.h2>
                    <motion.p className="fs-5" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        Spacious production halls with crane-compatible grids and high clear heights enable flexible line layouts for fabrication, painting, and assembly.
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        Sustainable envelope with skylights, insulated roofing, and rainwater harvesting pairs with people-first amenities to maintain comfort and productivity.
                    </motion.p>
                </div>
            </motion.section>

            <motion.section
                className="py-5"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container-xl">
                    <motion.h2 className="text-center mb-5 gallery-heading" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#33333396' }}>
                        Gallery
                    </motion.h2>

                    <div className="portfolio-gallery-frame">
                        <span className="gallery-corner gallery-corner-top-left" />
                        <span className="gallery-corner gallery-corner-top-right" />
                        <span className="gallery-corner gallery-corner-bottom-left" />
                        <span className="gallery-corner gallery-corner-bottom-right" />

                        <div className="portfolio-gallery-grid">
                            {[
                                {
                                    src: images.esrTalegaon1,
                                    alt: "Tata Toyo Radiator completed facility",
                                },
                                {
                                    src: images.esrTalegaon2,
                                    alt: "Industrial facility overview",
                                },
                                {
                                    src: images.projectStructure,
                                    alt: "Production bay and docks",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="portfolio-gallery-item"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                >
                                    <motion.img
                                        src={item.src}
                                        alt={item.alt}
                                        width="auto"
                                        className="portfolio-gallery-image"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="py-5 bg-light"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container">
                    <motion.h2 className="text-center mb-4" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#33333393' }}>
                        Location Map
                    </motion.h2>
                    <div className="row g-4">
                        <motion.div className="col-md-8 offset-md-2" variants={itemVariants}>
                            <div className="ratio ratio-16x9 shadow-sm">
                                <iframe
                                    title="Tata Toyo Radiator Hinjewadi Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.010876898728!2d73.7279449!3d18.5927898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc1252bc1d9%3A0xdde29c29fbf6b8ff!2sTata%20Toyo%20Radiator%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                            <p className="mt-3 lead text-center" style={{ fontFamily: "'Barlow', sans-serif", color: '#555' }}>
                                Hinjewadi address with swift access to Mumbai–Pune Expressway, Pune city, and a deep automotive & tech talent pool.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="py-5"
                style={{ backgroundColor: 'aliceblue', minHeight: '60vh' }}
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container-xl">
                    <div className="row align-items-center g-4">
                        <motion.div
                            className="col-md-6 order-2 order-md-1 py-5"
                            variants={itemVariants}
                        >
                            <h2 className="mb-3 text-center text-md-start" style={{ fontFamily: "'Barlow', sans-serif", color: '#3333338b' }}>
                                Project Completion
                            </h2>
                            <p className="mb-3 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#666' }}>
                                Fully commissioned site with validated utilities, EHS compliances, and docks/canopies set for continuous production and dispatch cycles.
                            </p>
                            <p className="mb-4 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#666' }}>
                                Integrated offices, labs, and amenity spaces make the campus work-ready for teams while maintaining smooth separation of people and material movement.
                            </p>
                        </motion.div>

                        <motion.div
                            className="col-md-6 order-1 order-md-2"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden shadow-sm">
                                <img
                                    src={images.esrTalegaon2}
                                    alt="Tata Toyo Radiator facility overview"
                                    className="img-fluid w-100"
                                    style={{ height: "60vh" }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="py-5"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
                style={{
                    borderTop: "1px solid #e5e5e5",
                    borderBottom: "1px solid #e5e5e5",
                    background: "#fff",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <svg
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                        pointerEvents: "none",
                        opacity: 0.15
                    }}
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 400"
                >
                    <path
                        d="M 0 400 Q 200 300 400 200 T 600 100 T 800 150 T 1000 200 T 1200 250 L 1200 400 L 0 400 Z"
                        fill="none"
                        stroke="#d61f26"
                        strokeWidth="2"
                    />
                    <path
                        d="M 1200 400 Q 1000 300 800 200 T 600 100 T 400 150 T 200 200 T 0 250 L 0 400 L 1200 400 Z"
                        fill="none"
                        stroke="#d61f26"
                        strokeWidth="2"
                    />
                    <path
                        d="M 0 400 Q 150 320 300 240 T 600 120 T 900 180 T 1200 220 L 1200 400 L 0 400 Z"
                        fill="none"
                        stroke="#d61f26"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M 1200 400 Q 1050 320 900 240 T 600 120 T 300 180 T 0 220 L 0 400 L 1200 400 Z"
                        fill="none"
                        stroke="#d61f26"
                        strokeWidth="1.5"
                    />
                </svg>
                <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
                    <div className="row align-items-center g-5">
                        <motion.div
                            className="col-md-6 text-md-start text-center"
                            variants={itemVariants}
                        >
                            <h2
                                className="fw-semibold mb-3"
                                style={{
                                    fontFamily: "'Barlow', sans-serif",
                                    fontSize: "2.2rem",
                                    color: "#444",
                                    lineHeight: "1.3"
                                }}
                            >
                                Get in touch with us
                            </h2>

                            <p
                                className="mb-1"
                                style={{
                                    fontFamily: "'Barlow', sans-serif",
                                    fontSize: "1.4rem",
                                    fontWeight: "500",
                                    color: "#333"
                                }}
                            >
                                Hemant Khatri
                            </p>

                            <p
                                className="mb-1"
                                style={{
                                    fontFamily: "'Barlow', sans-serif",
                                    fontSize: "1.1rem",
                                    color: "#666"
                                }}
                            >
                                Zhang Properties
                            </p>

                            <p
                                className="mb-0"
                                style={{
                                    fontFamily: "'Barlow', sans-serif",
                                    fontSize: "1.1rem",
                                    color: "#555"
                                }}
                            >
                                zhangproperties@gmail.com
                            </p>
                        </motion.div>

                        <motion.div
                            className="col-md-6 d-flex justify-content-md-end justify-content-center"
                            variants={itemVariants}
                        >
                            <div
                                style={{
                                    overflow: "hidden",
                                    maxWidth: "300px",
                                    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                                    borderRadius: "0px"
                                }}
                            >
                                <img
                                    src={images.hemantKhatri}
                                    alt="Hemant Khatri - Zhang Properties"
                                    className="img-fluid w-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="py-5"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container text-center">
                    <motion.h2 className="mb-4" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#33333398' }}>
                        Key Features
                    </motion.h2>
                    <div className="row g-4">
                        {[
                            {
                                title: "Prime Hinjewadi location",
                                desc: "Access to expressway, city, and supplier base for rapid inbound and outbound movement."
                            },
                            {
                                title: "Utilities in place",
                                desc: "Power, air, water, fire systems, and waste treatment commissioned for production loads."
                            },
                            {
                                title: "Heavy movement ready",
                                desc: "Multiple docks, broad yards, and crane-friendly bays for heavy equipment and finished goods."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                className="col-md-4"
                                key={index}
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="p-4 bg-white shadow rounded h-100"
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h4 style={{ fontFamily: "'Barlow', sans-serif", color: '#ff0000cb' }}>{feature.title}</h4>
                                    <p className='lead' style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>{feature.desc}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Completed Projects Section */}
            <motion.section
                className="py-5 bg-light"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container">
                    <motion.div
                        className="mb-4"
                        variants={itemVariants}
                    >
                        <h2
                            className="mb-2"
                            style={{
                                fontFamily: "'Barlow', sans-serif",
                                fontWeight: 600,
                                color: '#333',
                                fontSize: '2rem'
                            }}
                        >
                            Completed Projects
                        </h2>
                        <div
                            style={{
                                width: '60px',
                                height: '4px',
                                backgroundColor: '#d61f26',
                                borderRadius: '2px'
                            }}
                        />
                    </motion.div>
                    <div className="row g-4">
                        {filteredCompletedProjects.map((project, index) => (
                            <ProjectCard 
                                project={project} 
                                index={index} 
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.div
                variants={fadeIn}
                viewport={{ once: true, amount: 0.1 }}
                whileInView="show"
            >
                <Contact />
            </motion.div>
        </motion.div>
    );
}

export default TataToyoRadiator;

