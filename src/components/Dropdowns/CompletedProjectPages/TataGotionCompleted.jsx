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

function TataGotionCompleted() {
    return (
        <motion.div
            className="tata-gotion-completed-page"
            style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}
            initial="hidden"
            animate="show"
            variants={containerVariants}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <HeroSection
                videoSrc={videos.tataGotion}
                header="Tata Gotion"
                subheader="Completed EV gigafactory campuses across two growth corridors"
                textColor="#fff"
                leftStatValue="1.2M Sq.Ft."
                leftStatLabel="Industrial Footprint"
                rightStatValue="Chakan + Sanand"
                rightStatLabel="Locations"
            />

            <ProjectAccordion
                items={[
                    {
                        title: 'Project Overview',
                        content: (
                            <>
                                <p className="project-accordion-body">
                                    Tata Gotion delivers 1.2 million sq.ft of fully commissioned battery manufacturing and assembly infrastructure across twin campuses in Chakan (Pune) and Sanand (Gujarat). Both parks combine high-bay production halls, battery module lines, warehousing blocks, and collaborative offices with robust utilities sized for 24x7 manufacturing.
                                </p>
                                <img src={images.tataGotion} width="100%" height="auto" alt="Tata Gotion campus" />
                            </>
                        ),
                    },
                    {
                        title: 'Development Status',
                        content: (
                            <p className="project-accordion-body">
                                Both campuses are delivered and production-ready with integrated fire & life safety (sprinklers, hydrants, addressable detection), dual-feeder power distribution, high-capacity HVAC, treated water networks, and STP. Compliance and statutory approvals are closed, and line handover is complete for customer commissioning.
                            </p>
                        ),
                    },
                    {
                        title: 'Location & Connectivity',
                        content: (
                            <div className="project-accordion-map">
                                <p className="project-accordion-body">
                                    Chakan campus sits inside the auto & EV ecosystem with proximity to the Mumbai–Pune Expressway, rail sidings, and Pune airport. The Sanand campus plugs into Ahmedabad ring road, the DFC/ports corridor, and an established supplier base—giving the program bi-regional resilience and rapid distribution reach.
                                </p>
                                <div className="project-accordion-map-frame">
                                    <iframe
                                        title="Tata Gotion Chakan Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.904104583058!2d73.76845481511583!3d18.7000488692883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cfe45be93f1b%3A0x50b08ac13e8a5f17!2sChakan%20MIDC!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
                        Two synchronized parks deliver flexible assembly lines, automated storage, and heavy-duty utilities for energy storage manufacturing. High-bay spans, multiple crane bays, and dock planning enable parallel production and outbound logistics without cross-overs.
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        The campuses pair solar-ready roofing, skylight-driven daylighting, and water-positive infrastructure with smart security and BMS. Designed for low energy intensity and long-term operational resilience.
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
                                    src: images.tataGotion1,
                                    alt: "Assembly hall – Chakan campus",
                                },
                                {
                                    src: images.tataGotion2,
                                    alt: "Production bay and utilities",
                                },
                                {
                                    src: images.tataGotion3,
                                    alt: "Sanand campus exterior",
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
                        Location Maps
                    </motion.h2>
                    <div className="row g-4">
                        <motion.div className="col-md-6" variants={itemVariants}>
                            <div className="ratio ratio-16x9 shadow-sm">
                                <iframe
                                    title="Chakan Campus Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.904104583058!2d73.76845481511583!3d18.7000488692883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cfe45be93f1b%3A0x50b08ac13e8a5f17!2sChakan%20MIDC!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                            <p className="mt-3 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#555' }}>
                                Chakan campus fronts the auto belt with four-lane access to the expressway, 40 km to Pune Airport, and established EV supply partners nearby.
                            </p>
                        </motion.div>
                        <motion.div className="col-md-6" variants={itemVariants}>
                            <div className="ratio ratio-16x9 shadow-sm">
                                <iframe
                                    title="Sanand Campus Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.1234567890123!2d72.45678901234567!3d22.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8a1234567%3A0x9876543210abcdef!2sSanand%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1700000000003!5m2!1sen!2sin"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                            <p className="mt-3 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#555' }}>
                                Sanand campus connects to Ahmedabad ring road, ports/DFC corridor, and a large skilled workforce, giving dual-region resilience for production.
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
                                Commissioned facilities with crane-ready bays, EHS clearances, and validated utilities allow immediate line installation for EV battery systems. Robust yard planning supports simultaneous truck turns and container handling.
                            </p>
                            <p className="mb-4 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#666' }}>
                                Dedicated office blocks, QC labs, and worker amenities are integrated within the campuses, enabling smooth scale-up while maintaining product traceability and safety compliance.
                            </p>
                        </motion.div>

                        <motion.div
                            className="col-md-6 order-1 order-md-2"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden shadow-sm">
                                <img
                                    src={images.tataGotion2}
                                    alt="Tata Gotion facility overview"
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
                                title: "Dual-location resilience",
                                desc: "Redundant production across Chakan and Sanand to de-risk supply and logistics."
                            },
                            {
                                title: "Production-ready utilities",
                                desc: "High-capacity power, HVAC, fire safety, water & waste systems aligned to EV manufacturing loads."
                            },
                            {
                                title: "Heavy-duty movement",
                                desc: "Multiple dock positions, wide yards, and crane-enabled bays for fast material flow."
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
                            { value: "1.2M", label: "Sq.Ft. across two campuses" },
                            { value: "24/7", label: "Utility-ready operations" },
                            { value: "100%", label: "Commissioned & handed over" }
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

export default TataGotionCompleted;

