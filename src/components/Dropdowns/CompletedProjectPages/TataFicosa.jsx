import React from 'react';
import { motion } from 'framer-motion';
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

function TataFicosa() {
    return (
        <motion.div
            className="tata-ficosa-page"
            style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}
            initial="hidden"
            animate="show"
            variants={containerVariants}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <HeroSection
                videoSrc={videos.tataGotion}
                header="Tata Ficosa"
                subheader="1 lakh sq.ft automotive components facility"
                textColor="#fff"
                leftStatValue="1L Sq.Ft."
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
                                    100,000 sq.ft of production, storage, and office space delivered for automotive components manufacturing in Chakan. Clear spans, crane-ready bays, and dock canopies enable efficient assembly and shipping.
                                </p>
                                <img src={images.projectStructure} width="100%" height="auto" alt="Tata Ficosa Facility" />
                            </>
                        ),
                    },
                    {
                        title: 'Development Status',
                        content: (
                            <p className="project-accordion-body">
                                Project successfully completed and operational. The facility includes comprehensive infrastructure with advanced fire safety systems, efficient power distribution, modern water management systems, and complete logistics support. All statutory approvals obtained and facility fully operational.
                            </p>
                        ),
                    },
                    {
                        title: 'Location & Connectivity',
                        content: (
                            <div className="project-accordion-map">
                                <p className="project-accordion-body">
                                    Strategically located in a prime industrial area with excellent connectivity to major highways, ports, and logistics hubs. Prime location with established infrastructure, proximity to key markets, and access to skilled workforce. Well-connected to major transportation networks.
                                </p>
                                <div className="project-accordion-map-frame">
                                    <iframe
                                        title="Tata Ficosa Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5882348736006!2d73.79243207518711!3d18.50254018258066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbfd1b8af2d%3A0x5b1ce9f44c3a1f5a!2sIndustrial%20Park!5e0!3m2!1sen!2sin!4v1700000000002!5m2!1sen!2sin"
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
                        Planned for lean flows with multiple shutters/docks, wide circulation, and segregated pedestrian movement to keep production, storage, and offices connected yet safe.
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        Efficient envelope with skylights and insulated roofing, rainwater harvesting, and landscaping combine with modern MEP systems to reduce operating costs.
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
                                    alt: "Tata Ficosa completed facility",
                                },
                                {
                                    src: images.esrTalegaon2,
                                    alt: "Industrial facility overview",
                                },
                                {
                                    src: images.projectStructure,
                                    alt: "Shop-floor planning",
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
                                    title="Tata Ficosa Chakan Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.904104583058!2d73.76845481511583!3d18.7000488692883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cfe45be93f1b%3A0x50b08ac13e8a5f17!2sChakan%20MIDC!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                            <p className="mt-3 lead text-center" style={{ fontFamily: "'Barlow', sans-serif", color: '#555' }}>
                                Located inside Chakan MIDC with quick connectivity to the Pune–Mumbai Expressway, nearby rail sidings, and Pune Airport.
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
                                Fully commissioned with tested utilities, EHS compliance, and dock/canopy infrastructure ready for steady production and dispatch.
                            </p>
                            <p className="mb-4 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#666' }}>
                                Offices, QC labs, and amenities are integrated into the plan to keep teams close to production while maintaining safe, efficient movement of materials and people.
                            </p>
                        </motion.div>

                        <motion.div
                            className="col-md-6 order-1 order-md-2"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden shadow-sm">
                                <img
                                    src={images.esrTalegaon2}
                                    alt="Tata Ficosa facility overview"
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
                    background: "#fff"
                }}
            >
                <div className="container-xl">
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
                                hemant@example.com
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
                                title: "Chakan advantage",
                                desc: "In the auto belt with rapid connectivity to expressway, port corridors, and suppliers."
                            },
                            {
                                title: "Utilities commissioned",
                                desc: "Power, air, water, fire, and waste systems fully delivered for immediate use."
                            },
                            {
                                title: "Flow-focused layout",
                                desc: "Multiple docks, canopies, and wide yards for smooth inbound and outbound movement."
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

            <motion.section
                className="py-5 bg-light"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container text-center">
                    <motion.h2 className="mb-4" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#3333338e' }}>
                        Key Specifications
                    </motion.h2>
                    <div className="row g-4 justify-content-center">
                        {[
                            { value: "1L", label: "Sq.Ft. delivered" },
                            { value: "Chakan", label: "Location" },
                            { value: "100%", label: "Operational" }
                        ].map((milestone, index) => (
                            <motion.div
                                className="col-6 col-md-3"
                                key={index}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                <div className="p-4 bg-white shadow rounded">
                                    <motion.h3
                                        style={{ fontFamily: "'Barlow', sans-serif", color: '#007bff' }}
                                        initial={{ scale: 0.8 }}
                                        whileInView={{
                                            scale: 1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300
                                            }
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        {milestone.value}
                                    </motion.h3>
                                    <p className="mb-0 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>{milestone.label}</p>
                                </div>
                            </motion.div>
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

export default TataFicosa;

