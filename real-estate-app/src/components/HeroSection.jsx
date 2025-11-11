import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import heroBg from '../assets/images/hero-bg.jpg';
import property1 from '../assets/images/property1.jpg';
import property2 from '../assets/images/property2.jpg';
import teamImg from '../assets/images/team.jpg';

const HeroSection = () => {
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-title"
                >
                    Discover Your Dream Home
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-subtitle"
                >
                    We help you find the perfect property with ease.
                </motion.p>
                <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore Properties
                </motion.button>
            </div>
            <div className="video-container">
                <motion.video
                    src="/videos/property-tour.mp4"
                    autoPlay
                    loop
                    muted
                    className="property-video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
            <div className="property-gallery">
                <motion.img
                    src={property1}
                    alt="Property 1"
                    className="property-image"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.img
                    src={property2}
                    alt="Property 2"
                    className="property-image"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.img
                    src={teamImg}
                    alt="Our Team"
                    className="property-image"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                />
            </div>
        </section>
    );
};

export default HeroSection;