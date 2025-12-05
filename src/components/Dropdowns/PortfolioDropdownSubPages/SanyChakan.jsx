import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import ProjectAccordion from './ProjectAccordion';
import Contact from '../../Contact';
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

function SanyChakan() {
    return (
        <motion.div
            className="sany-chakan-page"
            style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}
            initial="hidden"
            animate="show"
            variants={containerVariants}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <HeroSection
                videoSrc="/tata-gotion.mp4"
                header="Sany-Chakan"
                subheader="Explore a world of possibilities with our premium services"
                textColor="#fff"
                leftStatValue="63 Acres"
                leftStatLabel="Project Area"
                rightStatValue="15,44,000 Sq.Ft."
                rightStatLabel="Built-up Potential"
            />

            <ProjectAccordion
                items={[
                    {
                        title: 'Project Overview',
                        content: (
                            <p className="project-accordion-body">
                                Sany Chakan is envisioned as a future-ready industrial destination that blends high-spec infrastructure,
                                intelligent planning, and sustainable design. Thoughtfully planned boulevards, efficient loading bays, and
                                flexible floor plates create a premium environment for modern manufacturing and logistics operations.
                                Premium arrival courts, signature landscape pockets, and curated amenity zones ensure that the campus
                                feels considered at every step. The overall experience is designed to be calm, efficient, and visually
                                elevated for both occupants and visitors.
                            </p>
                        ),
                    },
                    {
                        title: 'Development Status',
                        content: (
                            <p className="project-accordion-body">
                                The development is progressing in carefully curated phases with a clear focus on timely delivery and
                                operational readiness. Core civil works, utilities, and digital infrastructure are planned to align with
                                global standards so that occupiers experience a seamless handover and a premium operating ecosystem.
                                Progressive milestones are tracked through robust project management, ensuring clarity at every stage.
                                This phased approach keeps construction activity organised while allowing early occupiers to come on
                                board with confidence.
                            </p>
                        ),
                    },
                    {
                        title: 'Location & Connectivity',
                        content: (
                            <div className="project-accordion-map">
                                <p className="project-accordion-body">
                                    Strategically located with convenient access to major highways and city touchpoints, Sany Chakan offers
                                    robust last-mile connectivity for people, goods, and services. Its position within the wider industrial
                                    corridor makes it an ideal hub for both national and regional distribution.
                                </p>
                                <div className="project-accordion-map-frame">
                                    <iframe
                                        title="Sany Chakan Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.347381762783!2d73.78038017518733!3d18.51320738257578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1e2f3f7f1f%3A0x9a9e8e0d7c7b3cf5!2sChakan%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
                        A Vision Beyond Steel and Concrete
                    </motion.h2>
                    <motion.p className="fs-5" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        More than just a structure, Sany Chakan is an ecosystem built to nurture businesses. It combines space, technology, and sustainability into a seamless experience for industries ranging from electric vehicles to high-tech logistics.
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        Every inch of the facility is crafted with intent — wide internal roads for truck movement, multi-tier safety protocols, 24/7 operations control room, energy-efficient lighting, and rooftop solar panels. The project has received accolades for its green building certification, helping industries reduce their operational carbon footprint.
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants} style={{ fontFamily: "'Barlow', sans-serif", color: '#333' }}>
                        Whether you're looking to establish a manufacturing base or a strategic distribution hub, Sany Chakan offers scalability, security, and a support ecosystem that stands class apart.
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
                                    src: "/sany_chakan1.jpg",
                                    alt: "Modern warehouse exterior",
                                },
                                {
                                    src: "/sany_chakan2.jpg",
                                    alt: "Industrial interior equipment",
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
                                Resources
                            </h2>
                            <p className="mb-3 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#666' }}>
                                Welcome to the resources hub of Zhang Properties. Explore detailed insights, project
                                stories, and updates that showcase how we are shaping future-ready industrial and
                                logistics destinations across key growth corridors.
                            </p>
                            <p className="mb-4 lead" style={{ fontFamily: "'Barlow', sans-serif", color: '#666' }}>
                                From master planning to on-ground delivery, our team brings together design,
                                engineering, and execution expertise to create spaces that perform for businesses and
                                people alike.
                            </p>
                            <a href="#contact" className="text-decoration-none">
                                <span className="me-2" style={{ fontFamily: "'Barlow', sans-serif", color: '#dc3545' }}>Our Resources</span>
                                <span style={{ fontFamily: "'Barlow', sans-serif", color: '#dc3545' }}>→</span>
                            </a>
                        </motion.div>

                        <motion.div
                            className="col-md-6 order-1 order-md-2"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden shadow-sm">
                                <img
                                    src="/sany_chakan1.jpg"
                                    alt="Zhang Properties industrial development"
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

                        {/* LEFT CONTENT */}
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

                        {/* RIGHT IMAGE */}
                        <motion.div
                            className="col-md-6 d-flex justify-content-md-end justify-content-center"
                            variants={itemVariants}
                        >
                            <div
                                style={{
                                    overflow: "hidden",
                                    maxWidth: "300px",
                                    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                                    borderRadius: "0px" // removed border-radius
                                }}
                            >
                                <img
                                    src="/hemant_khatri.png"
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
                        What Makes This Building Class Apart
                    </motion.h2>
                    <div className="row g-4">
                        {[
                            {
                                title: "Green Certified Infrastructure",
                                desc: "Solar energy, rainwater harvesting, and environmentally conscious design for future-proof operations."
                            },
                            {
                                title: "Smart Automation",
                                desc: "IoT-enabled control systems ensure peak efficiency and remote management across the facility."
                            },
                            {
                                title: "Strategic Location",
                                desc: "Located close to major highways and logistics hubs, ensuring fast and affordable connectivity."
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
                        Key Milestones
                    </motion.h2>
                    <div className="row g-4 justify-content-center">
                        {[
                            { value: "1.3M+", label: "Sq.ft Area" },
                            { value: "2", label: "Industrial Parks" },
                            { value: "24/7", label: "On-site Maintenance" }
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

export default SanyChakan;