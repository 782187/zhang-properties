import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const solutions = [
  {
    title: 'WE BUILD',
    image: '/build.jpeg',
    link: '/dropdown/webuild',
  },
  {
    title: 'WE LEASE',
    image: '/lease.jpeg',
    link: '/dropdown/welease',
  },
  {
    title: 'WE MAINTAIN',
    image: '/maintain.jpeg',
    link: '/dropdown/wemaintain',
  },
];

const WhatWeDoDropdown = ({ closeDropdown }) => {
  return (
    <div
     className="bg-white shadow p-5 mt-3" style={{ zIndex: 999, position: 'relative', width: '100%' }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Solutions</h3>
        <a href="#" className="text-danger fw-semibold d-flex align-items-center text-decoration-none">
          More about solutions <FaArrowRight className="ms-2" />
        </a>
      </div>
      <hr />
      <div className="row g-3">
        {solutions.map((item, index) => (
          <Link to={item.link} onClick={closeDropdown} className="col-md-4 text-decoration-none" key={index}>
            <div className="position-relative d-flex">
              {/* Red Left Section */}
              <div
                className="bg-danger d-flex align-items-center justify-content-center text-white fw-bold text-center"
                style={{ width: '50%', minHeight: '150px' }}
              >
                {item.title}
              </div>
              <div style={{ width: '50%' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                  style={{ height: '100%', objectFit: 'cover' }}
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
