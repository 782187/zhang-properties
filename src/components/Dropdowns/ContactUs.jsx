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
    const heroCanvasRef = useRef(null);
    const leftScrollRef = useRef(null);
    const contactSectionRef = useRef(null);
    const stickyFormRef = useRef(null);
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

            // Light background like the reference strip
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);

            const stripeSpacing = 8 * dpr; // distance between diagonal lines
            const speed = 0.35;
            const time = Date.now() * 0.001;
            const offset = (time * speed * stripeSpacing) % stripeSpacing;

            ctx.save();
            ctx.strokeStyle = '#c7c7c7';
            ctx.lineWidth = 1 * dpr;

            // Draw diagonal lines directly across the full rectangle
            for (let x = -height * 2; x < width + height * 2; x += stripeSpacing) {
                ctx.beginPath();
                ctx.moveTo(x - offset, height * 1.5);
                ctx.lineTo(x + height - offset, -height * 0.5);
                ctx.stroke();
            }

            ctx.restore();

            // Solid top border like second image
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

    useEffect(() => {
        const leftEl = leftScrollRef.current;
        const sectionEl = contactSectionRef.current;
        const formEl = stickyFormRef.current;

        if (!leftEl || !sectionEl || !formEl) return;

        const isFormFullyVisible = () => {
            const rect = formEl.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        };

        const isLeftAtTop = () => leftEl.scrollTop <= 0;
        const isLeftAtBottom = () => leftEl.scrollTop + leftEl.clientHeight >= leftEl.scrollHeight;

        const handleWheel = (event) => {
            const sectionRect = sectionEl.getBoundingClientRect();

            const isSectionInView = sectionRect.bottom > 0 && sectionRect.top < window.innerHeight;
            if (!isSectionInView) return;

            if (!isFormFullyVisible()) return;

            const deltaY = event.deltaY;

            if (deltaY < 0 && isLeftAtTop()) return;
            if (deltaY > 0 && isLeftAtBottom()) return;

            event.preventDefault();
            leftEl.scrollTop += deltaY;
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="contact-page">
            <section className="hero-section position-relative overflow-hidden">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: 0.45, zIndex: 0 }}></div>

                <div className="container position-relative z-2 d-flex align-items-center min-vh-80">
                    <div className="w-100 text-center text-lg-start">
                        <motion.h1
                            className="fw-bold mb-4 text-white"
                            style={{
                                fontFamily: "'Barlow', sans-serif",
                                fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                                letterSpacing: '0.04em'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                        >
                            We Are Ready To Help You
                        </motion.h1>

                        <motion.p
                            className="text-light mb-4 mx-auto"
                            style={{
                                maxWidth: '640px',
                                fontFamily: "'Barlow', sans-serif",
                                fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.15 }}
                        >
                            Tell us about your requirements and our team will get back to you with tailored solutions for your industrial, commercial or residential needs.
                        </motion.p>

                        <motion.button
                            className="btn btn-lg px-5 py-3 fw-bold"
                            style={{
                                fontFamily: "'Barlow', sans-serif",
                                fontSize: '1.05rem',
                                backgroundColor: '#d61f26',
                                borderColor: '#d61f26',
                                color: '#1a1a1a'
                            }}
                            whileHover={{
                                scale: 1.06,
                                boxShadow: "0px 8px 24px rgba(0,0,0,0.45)"
                            }}
                            whileTap={{ scale: 0.96 }}
                            onClick={scrollToForm}
                        >
                            Get in Touch
                        </motion.button>
                    </div>
                </div>

                <canvas
                    ref={heroCanvasRef}
                    className="position-absolute bottom-0 start-0 w-100"
                    style={{ height: '110px', zIndex: 1, pointerEvents: 'none' }}
                ></canvas>
            </section>

            <section className="contact-architecture-bg py-5" id="contact-form" ref={(el) => { formRef.current = el; contactSectionRef.current = el; }}>
                <div className="w-100">
                    <div className="row justify-content-center g-4 align-items-stretch">
                        <div className="col-12 rounded-4 shadow-lg overflow-hidden">

                            <div className="row flex-lg-nowrap" style={{ backgroundColor: 'transparent' }}>
                                <div ref={leftScrollRef} className="col-lg-6 glass-box p-4 d-flex flex-column gap-4 contact-cards-container">
                                    <h1
                                        className='text-center display-3'
                                        style={{ color: '#d61f26' }}
                                    >
                                        Contact Us
                                    </h1>

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
                                            <h5 className="fw-bold" style={{ color: '#d61f26' }}>Our Office</h5>

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
                                            <h5 className="fw-bold" style={{ color: '#d61f26' }}>Contact Info</h5>

                                            <p>
                                                <strong>Address:</strong><br />
                                                11 Raja Ram Apts.,<br />
                                                103, South Main Road,<br />
                                                Koregaon Park, Pune-411001
                                            </p>
                                            <p><strong>Phone:</strong> +91 9225520888 / 020-61095378</p>
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
                                            <h5 className="fw-bold" style={{ color: '#d61f26' }}>Visit Us</h5>

                                            <p>Schedule a visit to our office to discuss your project in person.</p>
                                            <p><strong>Appointments:</strong> Available Mon-Fri, 10 AM - 4 PM</p>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="col-lg-6 p-3 d-flex flex-column justify-content-center contact-form-container">
                                    <div ref={stickyFormRef} className="sticky-form">
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