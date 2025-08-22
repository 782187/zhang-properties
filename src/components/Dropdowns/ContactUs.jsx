import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EnquiryForm from '../EnquiryForm';
import contactImg from '/about_us_thumbnail.jpg';
import teamImg from '/Zhang_Logo.png';
import '../../styles/ContactUs.css';

const ContactUs = () => {
    const formRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const handleScroll = () => {
            if (window.scrollY > 100) {
                controls.start("visible");
            } else {
                controls.start("hidden");
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const revealVariants = {
        hidden: {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transition: { duration: 0.5 }
        },
        visible: {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    return (
        <div className="contact-page">
            <section className="hero-section position-relative overflow-hidden">
                <div className="container position-relative z-2">
                    <div className="row align-items-center min-vh-80 py-5">
                        <div className="col-lg-7 py-5 text-center text-lg-start">
                            <motion.h1
                                className="display-3 fw-bold mb-4 text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Let's Build Something <span className="text-warning">Amazing</span> Together
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <p className="lead text-light mb-4">
                                    We're here to answer your questions and discuss how we can help your business grow.
                                </p>
                                <motion.button
                                    className="btn btn-warning btn-lg px-4 py-3 fw-bold"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0px 5px 15px rgba(0,0,0,0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={scrollToForm}
                                >
                                    Get in Touch
                                </motion.button>
                            </motion.div>
                        </div>

                        <div className="col-lg-5 d-none d-lg-block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.4,
                                    type: "spring",
                                    stiffness: 100
                                }}
                            >
                                <div className="hero-graphic position-relative">
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-warning rounded-3" style={{
                                        transform: 'rotate(8deg)',
                                        zIndex: -1
                                    }}></div>
                                    <div className="position-relative bg-white p-3 rounded-3 shadow-lg">
                                        <div className="d-flex gap-3 mb-3">
                                            <div className="bg-light rounded-2" style={{ width: '30%', height: '80px' }}></div>
                                            <div className="bg-light rounded-2" style={{ width: '30%', height: '80px' }}></div>
                                            <div className="bg-light rounded-2" style={{ width: '30%', height: '80px' }}></div>
                                        </div>
                                        <div className="bg-light rounded-2 mb-3" style={{ height: '20px', width: '80%' }}></div>
                                        <div className="bg-light rounded-2 mb-3" style={{ height: '20px', width: '60%' }}></div>
                                        <div className="bg-warning rounded-pill py-2 px-4 d-inline-block">
                                            <span className="text-white fw-bold">Contact Us</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="position-absolute top-0 start-0 w-100 h-100 z-1">
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="position-absolute rounded-circle bg-warning opacity-10"
                            style={{
                                width: `${Math.random() * 100 + 50}px`,
                                height: `${Math.random() * 100 + 50}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 15, 0],
                            }}
                            transition={{
                                duration: 5 + Math.random() * 10,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>
            </section>

            <section className="contact-architecture-bg py-5" id="contact-form" ref={formRef}>
                <div className="w-100">
                    <div className="row justify-content-center g-4 align-items-stretch">
                        <div className="col-lg-10 rounded-4 shadow-lg overflow-hidden">
                            <div className="row flex-lg-nowrap" style={{backgroundColor: 'transparent'}}>
                                <div className="col-lg-6 glass-box p-4 d-flex flex-column gap-4 contact-cards-container">
                                    <h1 className='text-center display-3 text-warning'>Contact Us</h1>
                                    <motion.div
                                        className="card contact-card w-100 shadow"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            src={contactImg}
                                            alt="Office"
                                            className="img-fluid rounded-top"
                                            style={{ height: '250px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body">
                                            <h5 className="fw-bold text-warning">Our Office</h5>
                                            <p className="mb-0">Modern workspace in Pune, designed for collaboration and innovation.</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="card contact-card w-100 shadow"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            src={teamImg}
                                            alt="Team"
                                            className="img-fluid rounded-top"
                                            style={{ height: '250px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body">
                                            <h5 className="fw-bold text-warning">Contact Info</h5>
                                            <p><strong>Address:</strong> Plot No. *, Pune, Maharashtra</p>
                                            <p><strong>Phone:</strong> +91 **********</p>
                                            <p><strong>Email:</strong> ...@gmail.com</p>
                                            <p><strong>Hours:</strong> Mon - Fri, 9 AM - 6 PM</p>
                                        </div>
                                    </motion.div>
                                    
                                    <motion.div
                                        className="card contact-card w-100 shadow"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="card-body">
                                            <h5 className="fw-bold text-warning">Visit Us</h5>
                                            <p>Schedule a visit to our office to discuss your project in person.</p>
                                            <p><strong>Appointments:</strong> Available Mon-Fri, 10 AM - 4 PM</p>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="col-lg-6 p-4 d-flex flex-column justify-content-center contact-form-container">
                                    <div className="sticky-form">
                                        <EnquiryForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;