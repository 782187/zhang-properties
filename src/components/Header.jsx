import React, { useState, useRef } from 'react';
import '../styles/Header.css';
import PortfolioDropdown from './Dropdowns/PortfolioDropdown';
import WhatWeDoDropdown from './Dropdowns/WhatWeDoDropdown';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { images } from '@assets/media';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef();

  const handleDropdownClose = () => setActiveDropdown(null);

  const DROPDOWN_COMPONENTS = {
    'Portfolio': <PortfolioDropdown closeDropdown={handleDropdownClose} />,
    'What We Do': <WhatWeDoDropdown closeDropdown={handleDropdownClose} />,
  };

  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Function to close the mobile navbar
  const closeMobileNavbar = () => {
    if (navbarRef.current && window.innerWidth < 992) {
      const navbarToggler = navbarRef.current.querySelector('.navbar-toggler');
      if (navbarToggler && getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click(); // This will collapse the navbar
      }
    }
  };

  return (
    <div className="header-wrapper" onMouseLeave={handleMouseLeave}>
      {/* Desktop Header */}
      <div className="desktop-header d-none d-lg-block">
        <div className="header-container">
          <Link to="/" className="header-logo">
            <img 
              src={images.zhangLogo} 
              alt="Zhang Properties Logo" 
              className="header-logo-img"
            />
            <div className="header-logo-text">
              <span className="Zhang">Zhang</span>
              <span className="Properties">Properties</span>
            </div>
          </Link>

          <div className="header-nav">
            <Link to="/" className="header-button">Home</Link>
            <div
              className="header-button"
              onMouseEnter={() => handleMouseEnter('Portfolio')}
            >
              Portfolio <span className="dropdown-icon">▼</span>
            </div>
            <div
              className="header-button"
              onMouseEnter={() => handleMouseEnter('What We Do')}
            >
              What We Do <span className="dropdown-icon">▼</span>
            </div>
            <Link to="/we_can_deliver_in" className="header-button">We Can Deliver In</Link>
            <Link to="/organisation" className="header-button">Organisation</Link>
          </div>

          <Link to="/contact_us" className="header-contact">
            Contact <span className="arrow">→</span>
          </Link>
        </div>

        {activeDropdown && DROPDOWN_COMPONENTS[activeDropdown] && (
          <div className="header-dropdown">
            {DROPDOWN_COMPONENTS[activeDropdown]}
          </div>
        )}
      </div>

      {/* Mobile Header */}
      <Navbar 
        expand="lg" 
        className="mobile-header d-lg-none"
        ref={navbarRef}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="header-logo-mobile">
            <img 
              src={images.zhangLogo} 
              alt="Zhang Properties Logo" 
              className="header-logo-img-mobile"
            />
            <div className="header-logo-text-mobile">
              <span className="Zhang">Zhang</span>
              <span className="Properties">Properties</span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="mobile-navbar" className="custom-toggler" />

          <Navbar.Collapse id="mobile-navbar">
            <Nav className="w-100 mobile-nav">
              <Nav.Link 
                as={Link} 
                to="/" 
                className="mobile-nav-link"
                onClick={closeMobileNavbar}
              >
                Home
              </Nav.Link>

              <NavDropdown
                title="Portfolio"
                id="portfolio-dropdown"
                className="mobile-dropdown"
              >
                <PortfolioDropdown mobile={true} closeDropdown={handleDropdownClose} closeMobileNavbar={closeMobileNavbar} />
              </NavDropdown>

              <NavDropdown
                title="What We Do"
                id="what-we-do-dropdown"
                className="mobile-dropdown"
              >
                <WhatWeDoDropdown mobile={true} closeDropdown={handleDropdownClose} closeMobileNavbar={closeMobileNavbar} />
              </NavDropdown>

              <Nav.Link 
                as={Link} 
                to="/we_can_deliver_in" 
                className="mobile-nav-link"
                onClick={closeMobileNavbar}
              >
                We Can Deliver In
              </Nav.Link>

              <Nav.Link 
                as={Link} 
                to="/organisation" 
                className="mobile-nav-link"
                onClick={closeMobileNavbar}
              >
                Organisation
              </Nav.Link>

              <Nav.Link 
                as={Link} 
                to="/contact_us" 
                className="header-contact-mobile"
                onClick={closeMobileNavbar}
              >
                Contact <span className="arrow">→</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;