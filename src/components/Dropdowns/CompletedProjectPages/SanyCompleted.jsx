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

function SanyCompleted() {
    const location = useLocation();
    const currentProjectLink = location.pathname;
    
    // Filter out the current project from the list
    const filteredCompletedProjects = completedProjects.filter(
        project => project.link !== currentProjectLink
    );
    
    return (
        <motion.div
            className="sany-completed-page"
            style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}
            initial="hidden"
            animate="show"
            variants={containerVariants}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <HeroSection
                videoSrc={videos.tataGotion}
                header="Sany"
                subheader="350K sq.ft completed heavy equipment campus"
                textColor="#fff"
                leftStatValue="350K Sq.Ft."
                leftStatLabel="Built-Up"
                rightStatValue="Chakan"
                rightStatLabel="Location"
            />

            <ProjectAccordion
                items={[
                    {
                        title: 'Project Overview',
                        content: (
                            <>
                                <p className="project-accordion-body">
                                    350,000 sq.ft of pre-engineered sheds and office cores for Sany’s heavy-equipment program, delivered in the heart of Chakan MIDC. Wide bays, crane-ready grids, and deep yards support assembly, testing, and outbound logistics.
                                </p>
                                <img src={images.sanyChakan} width="100%" height="auto" alt="Sany Chakan facility" />
                            </>
                        ),
                    },
                    {
                        title: 'Development Status',
                        content: (
                            <p className="project-accordion-body">
                                Delivered, approved, and operational with fire & life safety, dual electrical feeds, compressed air reticulation, water & sewage treatment, and dock infrastructure for continuous operations.
                            </p>
                        ),
                    },
                    {
                        title: 'Location & Connectivity',
                        content: (
                            <div className="project-accordion-map">
                                <p className="project-accordion-body">
                                    Situated inside Chakan’s industrial belt with quick access to the Mumbai–Pune Expressway, container terminals, and Pune Airport. Surrounded by automotive OEMs and suppliers, ensuring reliable vendor and workforce access.
                                </p>
                                <div className="project-accordion-map-frame">
                                    <iframe
                                        title="Sany Chakan Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.662147526977!2d73.843606!3d18.7337164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9df65702679%3A0x57e3ba90a74a6b6e!2sSANY%20Heavy%20Industry%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000"
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
                        The delivered campus brings together high-bay assembly, test bays, parts storage, and front-office interfaces. Dock-rich planning and wide circulation support synchronized in-plant and outbound flows.
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        Integrated daylighting, insulated roofs, rainwater harvesting, and efficient MEP distribution help control operating costs while maintaining shop-floor comfort and safety.
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
                                    src: images.sanyChakan,
                                    alt: "Sany Chakan campus frontage",
                                },
                                {
                                    src: images.sanyChakan1,
                                    alt: "Assembly and warehouse bay",
                                },
                                {
                                    src: images.sanyChakan2,
                                    alt: "Internal road and dock planning",
                                },
                                {
                                    src: images.sanyChakan0,
                                    alt: "Internal road and dock planning",
                                }
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
                                    title="Sany Chakan Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.662147526977!2d73.843606!3d18.7337164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9df65702679%3A0x57e3ba90a74a6b6e!2sSANY%20Heavy%20Industry%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                            <p className="mt-3 lead text-center" style={{ fontFamily: "'Barlow', sans-serif", color: '#555' }}>
                                5 minutes from Chakan MIDC spine road; fast connectivity to Pune–Mumbai Expressway, Talegaon rail siding, and Pune Airport.
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
                                Completed campus with verified utilities, EHS compliances, and ready-to-run assembly/test bays for heavy equipment lines.
                            </p>
                            <p className="mb-4 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#666' }}>
                                Worker amenities, offices, QC labs, and canopies are integrated to keep people, parts, and finished goods flowing seamlessly across the plot.
                            </p>
                        </motion.div>

                        <motion.div
                            className="col-md-6 order-1 order-md-2"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden shadow-sm">
                                <img
                                    src={images.sanyChakan1}
                                    alt="Sany facility overview"
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
                                title: "Prime Chakan address",
                                desc: "Inside the established auto hub with vendors, logistics, and workforce on tap."
                            },
                            {
                                title: "Production-ready utilities",
                                desc: "Dual power, compressed air, fire & life safety, and water systems commissioned."
                            },
                            {
                                title: "Movement efficiency",
                                desc: "Wide yards, multiple docks, and crane-compatible grids for heavy equipment flows."
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

export default SanyCompleted;

