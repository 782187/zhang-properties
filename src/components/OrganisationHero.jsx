import React, { useState, useEffect, useRef } from 'react';
import "../styles/OrganisationHero.css";
import { images, gallery } from '@assets/media';

const OrganisationHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images - replace these with your actual image paths
  const carouselImages = [
    images.organizationHero,
    gallery.life1,
    gallery.officeMeeting
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

  const calculateBackgroundPosition = () => {
    const moveX = 50 + (mousePosition.x - 0.5) * 10;
    const moveY = 50 + (mousePosition.y - 0.5) * 10;
    return `${moveX}% ${moveY}%`;
  };

  return (
    <section 
      className="organisation-hero" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      {/* Carousel Background */}
      <div className="carousel-container">
        {carouselImages.map((image, index) => (
          <div 
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: calculateBackgroundPosition(),
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transition: 'opacity 1s ease-in-out'
            }}
          />
        ))}
      </div>
      
      <div className="organisation-hero__overlay" />
      
      <div className="organisation-hero__content container">
        <div className="organisation-hero__accent" />
        <div className="text-content">
          <h1 className="organisation-hero__title">
            Driving Your Growth At Lightning Speed,
            <br />
            Where Time Is On Your Side
          </h1>
          <p className="organisation-hero__subtitle">
            Delivering excellence in real estate development and property management
          </p>
        </div>
      </div>
      
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OrganisationHero;
