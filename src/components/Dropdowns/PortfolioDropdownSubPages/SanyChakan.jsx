import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import ProjectAccordion from './ProjectAccordion';
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

function TataAsal() {
    return (
        <motion.div
            className="tata-asal-page"
            style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}
            initial="hidden"
            animate="show"
            variants={containerVariants}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <HeroSection
        videoSrc={videos.tataGotion}
                header="Jadhavwadi Facility"
                subheader="Pre-Engineered Manufacturing for TATA Autocomps"
                textColor="#fff"
                leftStatValue="23,400 Sqm"
                leftStatLabel="Plot Area"
                rightStatValue="12,494 Sqm"
                rightStatLabel="Shed Area"
            />

            <ProjectAccordion
                items={[
                    {
                        title: 'Project Overview',
                        content: (
                            <>
                                <p className="project-accordion-body">
                                    Sovereign Infra Steels presents state-of-the-art pre-engineered manufacturing facility at Gat No. 55-60, Jadhavwadi, Talegaon MIDC for TATA Autocomps Systems Limited. Features 213.34m x 49.04m industrial shed with 11m clear height, 4 x 10MT EOT cranes, 24m wide access road, and comprehensive infrastructure including fire safety, water systems, and STP. Located 0.8km from Chakan-Talegaon highway with excellent regional connectivity.[file:1]
                                </p>
                            <img src={images.projectStructure} width="100%" height="auto" alt="Image Not Supported" />
                            </>
                        ),
                    },
                    {
                        title: 'Development Status',
                        content: (
                            <p className="project-accordion-body">
                                Project includes 12,494 sqm shed, 2,023 sqm mezzanine, 777 sqm canopy, 4,500 sqm open area. Equipped with 0.5mm standing seam roofing, K-115 sprinkler system, 220,000L fire tank, 58,000L domestic tank, 10KLD STP. Handover 6 months from LOI with lease commencement April 1, 2026.[file:1]
                            </p>
                        ),
                    },
                    {
                        title: 'Location & Connectivity',
                        content: (
                            <div className="project-accordion-map">
                                <p className="project-accordion-body">
                                    Prime Talegaon MIDC location with 24m wide approach road, fully developed infrastructure. 41km from Pune Airport, surrounded by Magna Automotive, Marquardt India, Dextra India. Centrally located in established industrial belt.[file:1]
                                </p>
                                <div className="project-accordion-map-frame">
                                    <iframe
                                        title="Jadhavwadi Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.7679288923534!2d73.85625527518693!3d18.493913882585592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10b9c4d4a2d%3A0x6e5a2a0de93e5c5f!2sPune%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
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
                        Precision Engineering
                    </motion.h2>
                    <motion.p className="fs-5" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        14.5m ridge height, 1:15 pitch, ridge ventilation, 5% skylights, 8 rolling shutters, 12 docks, 2.8m brick walls, 5m canopy. Office with ACP fascia, ceramic flooring, separate entry, dedicated toilets.[file:1]
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        Complete fire safety, 2000KW power supply, 200 lux lighting, compound wall, 10m gate, security cabin. 7.5MT/sqm flooring capacity with heavy crane provisions.[file:1]
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        Designed for operational excellence with strategic infrastructure positioning businesses for long-term success in Talegaon MIDC.[file:1]
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
                                    src: images.jadhavwadi1,
                                    alt: "Jadhavwadi industrial shed layout",
                                },
                                {
                                    src: images.jadhavwadi2,
                                    alt: "Pre-engineered manufacturing facility",
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
                                Commercial Structure
                            </h2>
                            <p className="mb-3 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#666' }}>
                                Monthly rent ₹64.76 lakhs with 7% annual escalation, 12 months security deposit. 9 years 11 months agreement, 7 years 6 months lock-in period.[file:1]
                            </p>
                            <p className="mb-4 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#666' }}>
                                Handover 6 months from LOI, rent commencement April 2026. 2000KW power included with express feeder, CAM in client scope.[file:1]
                            </p>
                            <a href="#contact" className="text-decoration-none">
                                <span className="me-2" style={{ fontFamily: "'Barlow', sans-serif", color: '#dc3545' }}>View Full Terms</span>
                                <span style={{ fontFamily: "'Barlow', sans-serif", color: '#dc3545' }}>→</span>
                            </a>
                        </motion.div>

                        <motion.div
                            className="col-md-6 order-1 order-md-2"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden shadow-sm">
                                <img
                                    src={images.jadhavwadiOverview}
                                    alt="Jadhavwadi facility masterplan"
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
                        Technical Superiority
                    </motion.h2>
                    <div className="row g-4">
                        {[
                            {
                                title: "Heavy Duty Infrastructure",
                                desc: "11m clear height, 4x10MT cranes, 7.5MT/sqm flooring, 14.5m ridge height."
                            },
                            {
                                title: "Advanced Fire Safety",
                                desc: "K-115 sprinklers, hydrants, 220KL fire tank, PMRDA/NBC compliant systems."
                            },
                            {
                                title: "Strategic Connectivity",
                                desc: "24m access road, 0.8km from highway, 41km from Pune Airport."
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
                            { value: "23,400", label: "Sqm Plot Area" },
                            { value: "12,494", label: "Sqm Shed Area" },
                            { value: "11m", label: "Clear Height" }
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

export default TataAsal;
