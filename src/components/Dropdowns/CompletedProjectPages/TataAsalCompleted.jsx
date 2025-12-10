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

function TataAsalCompleted() {
    return (
        <motion.div
            className="tata-asal-completed-page"
            style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}
            initial="hidden"
            animate="show"
            variants={containerVariants}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <HeroSection
                videoSrc={videos.tataGotion}
                header="Tata Asal"
                subheader="1 lakh sq.ft precision manufacturing facility"
                textColor="#fff"
                leftStatValue="1L Sq.Ft."
                leftStatLabel="Built-Up"
                rightStatValue="Sanand"
                rightStatLabel="Location"
            />

            <ProjectAccordion
                items={[
                    {
                        title: 'Project Overview',
                        content: (
                            <>
                                <p className="project-accordion-body">
                                    100,000 sq.ft of pre-engineered manufacturing space in Sanand for Tata Asal, blending production bays, warehouse space, and collaborative office/lab cores. Designed for flexible line layouts with ample loading interfaces.
                                </p>
                                <img src={images.tataAsal} width="100%" height="auto" alt="Tata Asal Facility" />
                            </>
                        ),
                    },
                    {
                        title: 'Development Status',
                        content: (
                            <p className="project-accordion-body">
                                Completed, statutory-cleared, and operational with fire protection, power distribution, compressed air, process water, and STP. Ready for immediate equipment installation and go-live.
                            </p>
                        ),
                    },
                    {
                        title: 'Location & Connectivity',
                        content: (
                            <div className="project-accordion-map">
                                <p className="project-accordion-body">
                                    Strategically located in Sanand industrial area, a rapidly growing industrial hub in Gujarat. Excellent connectivity to major highways, ports, and logistics hubs. Prime location with established infrastructure, proximity to key markets, and access to skilled workforce. Well-connected to Ahmedabad and major transportation networks.
                                </p>
                                <div className="project-accordion-map-frame">
                                    <iframe
                                        title="Tata Asal Sanand Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.1234567890123!2d72.45678901234567!3d22.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8a1234567%3A0x9876543210abcdef!2sSanand%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1700000000003!5m2!1sen!2sin"
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
                        The delivered block balances shop-floor efficiency and people-first spaces. Clear spans, multiple shutters/docks, and mezzanine-enabled offices keep material and teams moving smoothly.
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        Natural light through skylights, insulated roofing, rainwater harvesting, and landscaped setbacks deliver sustainability with comfort and lower operating costs.
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
                                    src: images.tataAsal,
                                    alt: "Tata Asal completed facility",
                                },
                                {
                                    src: images.tataAsal1,
                                    alt: "Manufacturing bay and yard",
                                },
                                {
                                    src: images.tataAsal2,
                                    alt: "Office and facade detail",
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
                                    title="Tata Asal Sanand Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.1234567890123!2d72.45678901234567!3d22.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8a1234567%3A0x9876543210abcdef!2sSanand%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1700000000003!5m2!1sen!2sin"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                            <p className="mt-3 lead text-center" style={{ fontFamily: "'Barlow', sans-serif", color: '#555' }}>
                                Strategically placed off the SP Ring Road with access to ports/DFC corridor, Ahmedabad city, and a deep Sanand supplier ecosystem.
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
                                Fully completed and handed over with commissioned utilities, ready-to-use mezzanine offices, and EHS approvals for immediate start-up.
                            </p>
                            <p className="mb-4 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#666' }}>
                                Balanced people and product flows through dock positioning, covered canopies, and internal circulation optimized for inbound and outbound movement.
                            </p>
                        </motion.div>

                        <motion.div
                            className="col-md-6 order-1 order-md-2"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden shadow-sm">
                                <img
                                    src={images.tataAsal1}
                                    alt="Tata Asal facility overview"
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
                                title: "Strategic Sanand hub",
                                desc: "Plugged into Gujarat's manufacturing belt with ports and highways close by."
                            },
                            {
                                title: "Ready utilities",
                                desc: "Commissioned power, water, air, fire, and waste systems for immediate ramp-up."
                            },
                            {
                                title: "Efficient movement",
                                desc: "Multiple shutters/docks, wide yards, and mezzanine offices for smooth operations."
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
                            { value: "Sanand", label: "Industrial cluster" },
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

export default TataAsalCompleted;

