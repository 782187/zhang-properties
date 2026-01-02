import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { images } from '@assets/media';

const solutions = [
  {
    title: 'BUILT TO SUIT',
    image: images.tataGotion,
    link: '/dropdown/webuild',
  },
  {
    title: 'WE LEASE',
    image: images.tataAsal,
    link: '/dropdown/welease',
  },
  {
    title: 'BUILT OPERATE TRANSFER',
    image: images.sanyChakan2,
    link: '/dropdown/wemaintain',
  },
];

const WhatWeDoDropdown = ({ closeDropdown, mobile, closeMobileNavbar }) => {
  const handleLinkClick = () => {
    // Close desktop dropdown if it exists
    if (closeDropdown) {
      closeDropdown();
    }
    
    // Close mobile navbar if it exists and we're on mobile
    if (mobile && closeMobileNavbar) {
      closeMobileNavbar();
    }
  };

  return (
    <div
      className="bg-white shadow py-3 px-3 mt-3"
      style={{ zIndex: 999, position: 'relative', width: '100%' }}
    >
      {/* Top bar */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0" style={{ fontWeight: 600 }}>Solutions</h5>
        <Link
          to="#"
          className="text-danger fw-semibold d-flex align-items-center text-decoration-none"
          onClick={handleLinkClick}
          style={{ whiteSpace: 'nowrap' }}
        >
          More about solutions <FaArrowRight className="ms-2" />
        </Link>
      </div>
      <hr className="mt-2 mb-3" />

      {/* Tiles */}
      <div className="row g-3 align-items-stretch">
        {solutions.map((item, index) => (
          <Link
            to={item.link}
            onClick={handleLinkClick}
            className="col-12 col-md-4 text-decoration-none"
            key={index}
          >
            <div
              className="d-flex w-100"
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                overflow: 'hidden',
                height: 'clamp(130px, 18vw, 170px)'
              }}
            >
              {/* Left red panel */}
              <div
                className="bg-danger d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  width: '40%',
                  padding: '0 8px',
                  letterSpacing: '1.2px',
                  fontWeight: 700,
                  fontSize: 'clamp(0.85rem, 1.6vw, 1rem)'
                }}
              >
                {item.title}
              </div>

              {/* Right image panel */}
              <div style={{ width: '60%', position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoDropdown;