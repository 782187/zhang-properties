import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const weworkswith = [
  { title: 'OUR OCCUPIERS', link: "/dropdown/ouroccupiers" },
  { title: 'INVESTORS', link: "/dropdown/investors" },
  { title: 'LAND OWNERS', link: "/dropdown/landowners" },
  { title: 'VENDOR PARTNERS', link: "/dropdown/vendorpartners" },
];

const WeWorkWithDropdown = ({ closeDropdown, mobile, closeMobileNavbar }) => {
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
      className="bg-white shadow p-4 p-md-5 mt-3"
      style={{ zIndex: 999, position: 'relative', width: '100%' }}
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
        <h4 className="mb-2 mb-md-0">Partners</h4>
        <Link
          to="#"
          className="text-danger fw-semibold d-flex align-items-center text-decoration-none"
          onClick={handleLinkClick}
        >
          More about partnerships <FaArrowRight className="ms-2" />
        </Link>
      </div>

      <hr className="mb-4" />

      <div className="row">
        {weworkswith.map((item, index) => (
          <Link 
            to={item.link} 
            className="col-12 col-md-6 mb-3 text-decoration-none" 
            onClick={handleLinkClick} 
            key={index}
          >
            <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
              <span className="text-danger text-uppercase fw-semibold text-truncate" style={{ maxWidth: '85%' }}>
                {item.title}
              </span>
              <FaArrowRight className="text-dark flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WeWorkWithDropdown;