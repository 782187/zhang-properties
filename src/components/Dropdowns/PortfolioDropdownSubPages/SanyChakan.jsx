import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import Contact from '../../Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

// Animation variants
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
            />

            {/* Project Overview Section */}
            <motion.section
                className="py-5 bg-light"
                variants={fadeIn}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container text-center">
                    <motion.h2 className="mb-4 text-warning fw-bold" variants={itemVariants}>
                        Project Overview
                    </motion.h2>
                    <motion.p className="lead" variants={itemVariants}>
                        Sany Chakan is a landmark industrial development designed to meet the future of manufacturing and smart logistics. Spanning over 1.3 million sq.ft, it integrates advanced architecture, digital infrastructure, and green technologies to support cutting-edge industries.
                    </motion.p>
                </div>
            </motion.section>

            {/* Large Text Content */}
            <motion.section
                className="py-5"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container">
                    <motion.h2 className="text-center mb-4" variants={itemVariants}>
                        A Vision Beyond Steel and Concrete
                    </motion.h2>
                    <motion.p className="fs-5" variants={itemVariants}>
                        More than just a structure, Sany Chakan is an ecosystem built to nurture businesses. It combines space, technology, and sustainability into a seamless experience for industries ranging from electric vehicles to high-tech logistics.
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants}>
                        Every inch of the facility is crafted with intent — wide internal roads for truck movement, multi-tier safety protocols, 24/7 operations control room, energy-efficient lighting, and rooftop solar panels. The project has received accolades for its green building certification, helping industries reduce their operational carbon footprint.
                    </motion.p>
                    <motion.p className="fs-5 mt-3" variants={itemVariants}>
                        Whether you're looking to establish a manufacturing base or a strategic distribution hub, Tata Gotion offers scalability, security, and a support ecosystem that stands class apart.
                    </motion.p>
                </div>
            </motion.section>

            {/* Image Gallery Section */}
            <motion.section
                className="py-5 bg-light"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container">
                    <motion.h2 className="text-center mb-5" variants={itemVariants}>
                        Gallery: Inside Tata Sany Chakan
                    </motion.h2>
                    <div className="row g-4">
                        {[
                            {
                                src: "https://www.grassik.com/wp-content/uploads/2019/11/industrial-infrastructure.jpg",
                                title: "Advanced Industrial Infrastructure"
                            },
                            {
                                src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                                title: "Smart Factory Integration"
                            },
                            {
                                src: "https://www.researchgate.net/publication/338433917/figure/fig2/AS:844760898105344@1578418101265/sualization-of-the-logistics-center.jpg",
                                title: "Seamless Logistics & Maintenance"
                            },
                            {
                                src: "https://www.grassik.com/wp-content/uploads/2019/11/industrial-infrastructure.jpg",
                                title: "Advanced Industrial Infrastructure"
                            },
                            {
                                src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                                title: "Smart Factory Integration"
                            }, 
                            {
                                src: "https://www.researchgate.net/publication/338433917/figure/fig2/AS:844760898105344@1578418101265/sualization-of-the-logistics-center.jpg",
                                title: "Seamless Logistics & Maintenance"
                            }
                        ].map((item, index) => (
                            <motion.div
                                className="col-12 col-md-6"
                                key={index}
                                variants={itemVariants}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden rounded shadow"
                                >
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="img-fluid w-100"
                                        style={{ height: "350px", objectFit: "cover" }}
                                    />
                                </motion.div>
                                <p className="mt-3 fw-medium text-center">{item.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* What Makes This Building Class Apart */}
            <motion.section
                className="py-5"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container text-center">
                    <motion.h2 className="mb-4" variants={itemVariants}>
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
                                    <h4 className="text-primary">{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Key Milestones */}
            <motion.section
                className="py-5 bg-light"
                variants={staggerContainer}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show"
            >
                <div className="container text-center">
                    <motion.h2 className="mb-4" variants={itemVariants}>
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
                                        className="text-primary"
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
                                    <p className="mb-0">{milestone.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Contact Section */}
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