import React from 'react';
import { motion } from 'framer-motion';
import property1 from '../assets/images/property1.jpg';
import property2 from '../assets/images/property2.jpg';
import teamImg from '../assets/images/team.jpg';
import propertyTourVideo from '../assets/videos/property-tour.mp4';
import '../styles/PropertyGallery.css';

const PropertyGallery = () => {
    const properties = [
        {
            id: 1,
            image: property1,
            title: 'Luxury Villa in the City',
            description: 'A beautiful villa with modern amenities and a stunning view.',
        },
        {
            id: 2,
            image: property2,
            title: 'Cozy Apartment Near the Park',
            description: 'A cozy apartment perfect for families, located near the park.',
        },
        {
            id: 3,
            image: teamImg,
            title: 'Meet Our Team',
            description: 'Dedicated professionals ready to assist you with your real estate needs.',
        },
    ];

    return (
        <div className="property-gallery">
            <motion.h2
                className="gallery-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Explore Our Properties
            </motion.h2>

            <motion.video
                className="property-video"
                controls
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <source src={propertyTourVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>

            <div className="properties-container">
                {properties.map((property) => (
                    <motion.div
                        key={property.id}
                        className="property-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={property.image} alt={property.title} className="property-image" />
                        <div className="property-info">
                            <h3 className="property-title">{property.title}</h3>
                            <p className="property-description">{property.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PropertyGallery;