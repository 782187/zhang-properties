import React, { useState } from 'react';
import '../styles/Header.css';
import PortfolioDropdown from './Dropdowns/PortfolioDropdown';
import WhatWeDoDropdown from './Dropdowns/WhatWeDoDropdown';
import WeWorkWithDropdown from './Dropdowns/WeWorkWithDropdown';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClose = () => setActiveDropdown(null);

  const DROPDOWN_COMPONENTS = {
    'Portfolio': <PortfolioDropdown closeDropdown={handleDropdownClose} />,
    'What We Do': <WhatWeDoDropdown closeDropdown={handleDropdownClose} />,
    'We Work With': <WeWorkWithDropdown closeDropdown={handleDropdownClose} />,
  };

  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="header-wrapper" onMouseLeave={handleMouseLeave}>
      {/* Desktop Header */}
      <div className="desktop-header d-none d-lg-block">
        <div className="header-container">
          <div className="header-logo">
            <span className="Zhang">Zhang</span>
            <span className="Properties">Properties</span>
          </div>

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
            <div
              className="header-button"
              onMouseEnter={() => handleMouseEnter('We Work With')}
            >
              We Work With <span className="dropdown-icon">▼</span>
            </div>
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
      <Navbar expand="lg" className="mobile-header d-lg-none">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="header-logo-mobile">
            <span className="Zhang">Zhang</span>
            <span className="Properties">Properties</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="mobile-navbar" className="custom-toggler" />

          <Navbar.Collapse id="mobile-navbar">
            <Nav className="w-100 mobile-nav">
              <Nav.Link as={Link} to="/" className="mobile-nav-link">Home</Nav.Link>

              <NavDropdown
                title="Portfolio"
                id="portfolio-dropdown"
                className="mobile-dropdown"
                renderMenuOnMount={true}
              >
                <PortfolioDropdown mobile={true} />
              </NavDropdown>

              <NavDropdown
                title="What We Do"
                id="what-we-do-dropdown"
                className="mobile-dropdown"
                renderMenuOnMount={true}
              >
                <WhatWeDoDropdown mobile={true} />
              </NavDropdown>

              <NavDropdown
                title="We Work With"
                id="work-with-dropdown"
                className="mobile-dropdown"
                renderMenuOnMount={true}
              >
                <WeWorkWithDropdown mobile={true} />
              </NavDropdown>

              <Nav.Link as={Link} to="/organisation" className="mobile-nav-link">Organisation</Nav.Link>

              <Nav.Link as={Link} to="/contact_us" className="header-contact-mobile">
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