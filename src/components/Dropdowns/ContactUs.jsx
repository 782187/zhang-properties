import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EnquiryForm from '../ProjectDetailsForm';
import '../../styles/ContactUs.css';
import { images } from '@assets/media';
import { siteContent } from '../../data/siteContent';

const contactImg = images.aboutUsThumbnail;
const teamImg = images.zhangLogo;
const palette = siteContent.theme;
const FONT_FAMILY = "'Barlow', sans-serif";

const ContactUs = () => {
    const formRef = useRef(null);
    const heroCanvasRef = useRef(null);
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

        const canvas = heroCanvasRef.current;
        const ctx = canvas ? canvas.getContext('2d') : null;

        let animationFrameId;

        const drawPattern = () => {
            if (!canvas || !ctx) return;

            const dpr = window.devicePixelRatio || 1;
            const width = canvas.clientWidth * dpr;
            const height = canvas.clientHeight * dpr;

            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }

            ctx.clearRect(0, 0, width, height);

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);

            const stripeSpacing = 8 * dpr;
            const speed = 0.35;
            const time = Date.now() * 0.001;
            const offset = (time * speed * stripeSpacing) % stripeSpacing;

            ctx.save();
            ctx.strokeStyle = '#c7c7c7';
            ctx.lineWidth = 1 * dpr;

            for (let x = -height * 2; x < width + height * 2; x += stripeSpacing) {
                ctx.beginPath();
                ctx.moveTo(x - offset, height * 1.5);
                ctx.lineTo(x + height - offset, -height * 0.5);
                ctx.stroke();
            }

            ctx.restore();

            ctx.save();
            ctx.strokeStyle = '#9b9b9b';
            ctx.lineWidth = 2 * dpr;
            ctx.beginPath();
            ctx.moveTo(0, 0.5 * dpr);
            ctx.lineTo(width, 0.5 * dpr);
            ctx.stroke();
            ctx.restore();

            animationFrameId = requestAnimationFrame(drawPattern);
        };

        const handleResize = () => {
            if (!canvas) return;
            drawPattern();
        };

        if (canvas && ctx) {
            drawPattern();
            window.addEventListener('resize', handleResize);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (canvas) {
                window.removeEventListener('resize', handleResize);
            }
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [controls]);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="contact-page" style={{ fontFamily: FONT_FAMILY, backgroundColor: palette.surface, color: palette.text }}>
            <section
                className="hero-section position-relative overflow-hidden"
                style={{
                    backgroundColor: palette.surface,
                    minHeight: '85vh',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.55))",
                        zIndex: 0
                    }}
                ></div>

                <div className="container position-relative z-2 py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 text-center text-lg-start">
                            <motion.span
                                style={{
                                    color: '#ffffffb3',
                                    fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
                                    letterSpacing: '4px',
                                    textTransform: 'uppercase',
                                    borderTop: `2px solid ${palette.accent}`,
                                    borderBottom: `2px solid ${palette.accent}`,
                                    padding: '8px 16px',
                                    marginBottom: '1.5rem',
                                    display: 'inline-block'
                                }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Get in Touch
                            </motion.span>

                            <motion.h1
                                className="mb-4 text-white"
                                style={{
                                    fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                                    lineHeight: '1.2',
                                    marginBottom: '1.5rem',
                                    fontWeight: '500'
                                }}
                                initial={{ opacity: 0, y: -60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                Your Vision, <span style={{ color: '#d61f26', fontWeight: '500' }}>Our Expertise</span>
                            </motion.h1>

                            <motion.p
                                className="text-light mb-4"
                                style={{
                                    fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                                    color: '#ffffffb3',
                                    lineHeight: '1.7',
                                    maxWidth: '600px'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.9 }}
                            >
                                Transform your industrial real estate vision into reality. From build-to-suit facilities to strategic leasing solutions, we deliver excellence that drives your business forward. Let's build something extraordinary together.
                            </motion.p>

                            <motion.div
                                className="d-flex flex-wrap gap-3 mt-5"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                            >
                                <motion.button
                                    className="btn btn-lg px-5 py-3 fw-bold"
                                    style={{
                                        fontSize: '1.1rem',
                                        backgroundColor: palette.accent,
                                        borderColor: palette.accent,
                                        color: palette.text,
                                        letterSpacing: '1px'
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0px 8px 24px rgba(214,31,38,0.45)"
                                    }}
                                    whileTap={{ scale: 0.96 }}
                                    onClick={scrollToForm}
                                >
                                    Start Your Project
                                </motion.button>

                                <motion.button
                                    className="btn btn-lg px-5 py-3 fw-bold"
                                    style={{
                                        fontSize: '1.1rem',
                                        backgroundColor: 'transparent',
                                        border: `2px solid ${palette.text}`,
                                        color: palette.text,
                                        letterSpacing: '1px'
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: 'rgba(255,255,255,0.1)'
                                    }}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    View Our Portfolio
                                </motion.button>
                            </motion.div>
                        </div>

                        <div className="col-lg-5 mt-5 mt-lg-0">
                            <motion.div
                                className="position-relative"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                            >
                                <div className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{
                                        backgroundColor: palette.accent,
                                        borderRadius: '20px',
                                        transform: 'rotate(3deg)',
                                        opacity: 0.1
                                    }}></div>
                                <div className="position-relative p-4 p-lg-5 bg-white rounded-4 shadow-lg">
                                    <h4 className="fw-bold mb-3" style={{ color: palette.surface, fontSize: '1.5rem' }}>
                                        Let's Start a Conversation
                                    </h4>
                                    <p className="mb-4" style={{ color: '#666', fontSize: '0.95rem' }}>
                                        Reach out to us directly. Our team is ready to discuss your project needs and answer any questions you may have.
                                    </p>
                                    <div className="mb-4">
                                        <p className="mb-3">
                                            <i className="fas fa-phone-alt me-3" style={{ color: palette.accent, fontSize: '1.1rem' }}></i>
                                            <a href="tel:+919225520888" className="text-decoration-none fw-semibold" style={{ color: '#333', fontSize: '1.05rem' }}>
                                                +91 9225520888
                                            </a>
                                            <br />
                                            <span className="ms-4" style={{ color: '#999', fontSize: '0.85rem' }}>Call us anytime</span>
                                        </p>
                                        <p className="mb-3">
                                            <i className="fas fa-envelope me-3" style={{ color: palette.accent, fontSize: '1.1rem' }}></i>
                                            <a href="mailto:zhangproperties@gmail.com" className="text-decoration-none fw-semibold" style={{ color: '#333', fontSize: '1.05rem' }}>
                                                zhangproperties@gmail.com
                                            </a>
                                            <br />
                                            <span className="ms-4" style={{ color: '#999', fontSize: '0.85rem' }}>We respond within 24 hours</span>
                                        </p>
                                        <p className="mb-0">
                                            <i className="fas fa-map-marker-alt me-3" style={{ color: palette.accent, fontSize: '1.1rem' }}></i>
                                            <span className="fw-semibold" style={{ color: '#333', fontSize: '1.05rem' }}>Pune, India</span>
                                            <br />
                                            <span className="ms-4" style={{ color: '#999', fontSize: '0.85rem' }}>Serving nationwide</span>
                                        </p>
                                    </div>
                                    <button
                                        className="btn w-100 py-3 fw-bold"
                                        style={{
                                            backgroundColor: palette.surface,
                                            color: palette.text,
                                            fontSize: '1rem',
                                            letterSpacing: '0.5px'
                                        }}
                                        onClick={scrollToForm}
                                    >
                                        Get Detailed Quote
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="py-5"
                id="contact-form"
                ref={formRef}
                style={{ backgroundColor: '#f8f9fa' }}
            >
                <div className="container-fluid px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-5 px-3 px-md-4 px-lg-5">
                            <span style={{
                                color: palette.accent,
                                fontSize: '1rem',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                fontWeight: '600'
                            }}>
                                START YOUR PROJECT
                            </span>
                            <h2 className="mt-3 mb-3" style={{ color: palette.surface, fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '600' }}>
                                Share Your Vision, We'll Make It Happen
                            </h2>
                            <p className="mb-2" style={{ color: '#666', maxWidth: '700px', margin: '0 auto', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: '1.7' }}>
                                Every great project starts with a conversation. Tell us about your industrial real estate needs, and our expert team will craft a tailored solution that exceeds your expectations.
                            </p>
                            <p className="mb-0" style={{ color: '#999', maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.9rem, 1.3vw, 1rem)' }}>
                                <i className="fas fa-check-circle me-2" style={{ color: palette.accent }}></i>
                                Response within 24 hours • Free consultation • No obligation
                            </p>
                        </div>

                        {/* Full Width Form Container with Pattern Border */}
                        <div className="form-container-wrapper" style={{
                            position: 'relative',
                            padding: '3px', // This creates space for the pattern border
                            width: '100%',
                            margin: 0,
                            background: `
                    repeating-linear-gradient(
                        45deg,
                        rgba(214, 31, 38, 0.15) 0px,
                        rgba(214, 31, 38, 0.1) 1.5px,
                        transparent 1.5px,
                        transparent 6px
                    )
                `,
                        }}>
                            {/* Top Pattern */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "3px",
                                    background: `
                            repeating-linear-gradient(
                                45deg,
                                rgba(214, 31, 38, 0.15) 0px,
                                rgba(214, 31, 38, 0.1) 1.5px,
                                transparent 1.5px,
                                transparent 6px
                            )
                        `,
                                    zIndex: 2,
                                }}
                            ></div>

                            {/* Bottom Pattern */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "3px",
                                    background: `
                            repeating-linear-gradient(
                                -45deg,
                                rgba(214, 31, 38, 0.15) 0px,
                                rgba(214, 31, 38, 0.1) 1.5px,
                                transparent 1.5px,
                                transparent 6px
                            )
                        `,
                                    zIndex: 2,
                                }}
                            ></div>

                            {/* Left Pattern */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "3px",
                                    height: "100%",
                                    background: `
                            repeating-linear-gradient(
                                135deg,
                                rgba(214, 31, 38, 0.15) 0px,
                                rgba(214, 31, 38, 0.1) 1.5px,
                                transparent 1.5px,
                                transparent 6px
                            )
                        `,
                                    zIndex: 2,
                                }}
                            ></div>

                            {/* Right Pattern */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: "3px",
                                    height: "100%",
                                    background: `
                            repeating-linear-gradient(
                                -135deg,
                                rgba(214, 31, 38, 0.15) 0px,
                                rgba(214, 31, 38, 0.1) 1.5px,
                                transparent 1.5px,
                                transparent 6px
                            )
                        `,
                                    zIndex: 2,
                                }}
                            ></div>

                            {/* Form Content */}
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 3rem)',
                                width: '100%',
                                minHeight: '600px'
                            }}>
                                <EnquiryForm />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-2" style={{ backgroundColor: '#ffffff' }}>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <span style={{
                            color: palette.accent,
                            fontSize: '1rem',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            fontWeight: '600'
                        }}>
                            WHERE TO FIND US
                        </span>
                        <h2 className="mt-3 mb-3" style={{ color: palette.surface, fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '600' }}>
                            Visit Us or Reach Out Anytime
                        </h2>
                        <p className="mb-0" style={{ color: '#666', maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(1rem, 1.5vw, 1.1rem)' }}>
                            We're here to help you every step of the way. Drop by our office, give us a call, or connect with us online.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <motion.div
                                className="h-100"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <img
                                            src={contactImg}
                                            alt="Our Office"
                                            className="img-fluid w-100 h-100"
                                            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        />
                                    </div>
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3" style={{ color: palette.surface, fontSize: '1.3rem' }}>
                                            <i className="fas fa-building me-2" style={{ color: palette.accent }}></i>
                                            Visit Our Office
                                        </h5>
                                        <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '1rem' }}>
                                            Stop by our headquarters to discuss your project in person. We're located in the heart of Pune's business district.
                                        </p>
                                        <p className="mb-3 fw-semibold" style={{ color: '#333', fontSize: '0.95rem' }}>
                                            11 Raja Ram Apts., 103, South Main Road,<br />
                                            Koregaon Park, Pune-411001
                                        </p>
                                        <div className="mt-4">
                                            <a
                                                href="https://maps.google.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-danger px-4 fw-semibold"
                                            >
                                                <i className="fas fa-map-marked-alt me-2"></i>
                                                Get Directions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <motion.div
                                className="h-100"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="card h-100 border-0 shadow-sm rounded-4">
                                    <div className="card-body p-4 d-flex flex-column">
                                        <div className="mb-4">
                                            <img
                                                src={teamImg}
                                                alt="Zhang Properties"
                                                className="img-fluid mb-4"
                                                style={{ maxHeight: '60px' }}
                                            />
                                            <h5 className="fw-bold mb-4" style={{ color: palette.surface, fontSize: '1.3rem' }}>
                                                <i className="fas fa-address-card me-2" style={{ color: palette.accent }}></i>
                                                Get In Touch
                                            </h5>
                                        </div>

                                        <div className="mb-4">
                                            <p className="mb-3">
                                                <i className="fas fa-phone-alt me-3" style={{ color: palette.accent, fontSize: '1.1rem' }}></i>
                                                <a href="tel:+919225520888" className="text-decoration-none fw-semibold" style={{ color: '#333', fontSize: '1.05rem' }}>
                                                    +91 9225520888
                                                </a>
                                                <br />
                                                <span className="ms-4" style={{ color: '#999', fontSize: '0.85rem' }}>Available 24/7 for urgent inquiries</span>
                                            </p>
                                            <p className="mb-3">
                                                <i className="fas fa-phone me-3" style={{ color: palette.accent, fontSize: '1.1rem' }}></i>
                                                <a href="tel:02061095378" className="text-decoration-none fw-semibold" style={{ color: '#333', fontSize: '1.05rem' }}>
                                                    020-61095378
                                                </a>
                                                <br />
                                                <span className="ms-4" style={{ color: '#999', fontSize: '0.85rem' }}>Office line during business hours</span>
                                            </p>
                                            <p className="mb-3">
                                                <i className="fas fa-envelope me-3" style={{ color: palette.accent, fontSize: '1.1rem' }}></i>
                                                <a href="mailto:zhangproperties@gmail.com" className="text-decoration-none fw-semibold" style={{ color: '#333', fontSize: '1.05rem' }}>
                                                    zhangproperties@gmail.com
                                                </a>
                                                <br />
                                                <span className="ms-4" style={{ color: '#999', fontSize: '0.85rem' }}>We'll respond within 24 hours</span>
                                            </p>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="d-flex gap-2">
                                                <a href="#" className="btn btn-outline-secondary px-3">
                                                    <i className="fab fa-whatsapp"></i>
                                                </a>
                                                <a href="#" className="btn btn-outline-secondary px-3">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                                <a href="#" className="btn btn-outline-secondary px-3">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <motion.div
                                className="h-100"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="card h-100 border-0 shadow-sm rounded-4">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-4" style={{ color: palette.surface, fontSize: '1.3rem' }}>
                                            <i className="fas fa-clock me-2" style={{ color: palette.accent }}></i>
                                            When We're Available
                                        </h5>

                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
                                                <div>
                                                    <span className="fw-semibold" style={{ color: '#333', fontSize: '1rem' }}>Monday - Friday</span>
                                                    <br />
                                                    <span style={{ color: '#999', fontSize: '0.85rem' }}>Full service available</span>
                                                </div>
                                                <span className="fw-bold" style={{ color: palette.accent, fontSize: '1rem' }}>9:00 AM - 6:00 PM</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
                                                <div>
                                                    <span className="fw-semibold" style={{ color: '#333', fontSize: '1rem' }}>Saturday</span>
                                                    <br />
                                                    <span style={{ color: '#999', fontSize: '0.85rem' }}>Limited hours</span>
                                                </div>
                                                <span className="fw-bold" style={{ color: palette.accent, fontSize: '1rem' }}>10:00 AM - 2:00 PM</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center py-3">
                                                <div>
                                                    <span className="fw-semibold" style={{ color: '#333', fontSize: '1rem' }}>Sunday</span>
                                                    <br />
                                                    <span style={{ color: '#999', fontSize: '0.85rem' }}>Emergency support only</span>
                                                </div>
                                                <span style={{ color: '#999', fontSize: '0.9rem' }}>Closed</span>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h6 className="fw-bold mb-3" style={{ color: palette.surface, fontSize: '1.1rem' }}>
                                                <i className="fas fa-calendar-check me-2" style={{ color: palette.accent }}></i>
                                                Schedule a Meeting
                                            </h6>
                                            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                Prefer a face-to-face discussion? Book a consultation at your convenience. We're flexible and can accommodate your schedule.
                                            </p>
                                            <button
                                                className="btn w-100 py-3 fw-bold mt-3"
                                                style={{ 
                                                    backgroundColor: palette.accent, 
                                                    borderColor: palette.accent, 
                                                    color: palette.text,
                                                    fontSize: '1rem',
                                                    letterSpacing: '0.5px'
                                                }}
                                                onClick={scrollToForm}
                                            >
                                                <i className="fas fa-calendar-alt me-2"></i>
                                                Request Consultation
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5" style={{ backgroundColor: palette.surface, color: palette.text }}>
                <div className="container py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h3 className="mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '600', lineHeight: '1.3' }}>
                                Ready to Build Your Next Success Story?
                            </h3>
                            <p className="mb-2" style={{ color: '#ffffffb3', fontSize: '1.15rem', lineHeight: '1.7' }}>
                                Join hundreds of satisfied clients who've transformed their industrial real estate vision into thriving operations. Your journey starts with a single conversation.
                            </p>
                            <p className="mb-0" style={{ color: '#ffffff99', fontSize: '1rem' }}>
                                <i className="fas fa-check-circle me-2" style={{ color: palette.accent }}></i>
                                Free consultation • Expert guidance • Proven track record
                            </p>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                            <motion.button
                                className="btn btn-lg px-5 py-3 fw-bold"
                                style={{
                                    backgroundColor: palette.accent,
                                    borderColor: palette.accent,
                                    color: palette.text,
                                    fontSize: '1.1rem',
                                    letterSpacing: '0.5px'
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 8px 24px rgba(214,31,38,0.45)"
                                }}
                                whileTap={{ scale: 0.96 }}
                                onClick={scrollToForm}
                            >
                                Start Your Project
                                <i className="fas fa-arrow-right ms-2"></i>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;