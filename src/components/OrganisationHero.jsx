import React, { useState, useEffect, useRef } from 'react';
import "../styles/OrganisationHero.css";

const OrganisationHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  const calculateBackgroundPosition = () => {
    const moveX = 50 + (mousePosition.x - 0.5) * 10;
    const moveY = 50 + (mousePosition.y - 0.5) * 10;
    return `${moveX}% ${moveY}%`;
  };

  return (
    <section 
      className="organisation-hero" 
      ref={heroRef}
      style={{ backgroundPosition: calculateBackgroundPosition() }}
    >
      <div className="organisation-hero__overlay" />
      <div className="organisation-hero__content container">
        <div className="organisation-hero__accent" />
        <h1 className="organisation-hero__title">
          Driving Your Growth At Lightning Speed,
          <br />
          Where Time Is On Your Side
        </h1>
      </div>
    </section>
  );
};

export default OrganisationHero;
