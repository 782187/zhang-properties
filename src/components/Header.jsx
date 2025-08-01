import React, { useState } from 'react';
import '../styles/Header.css';

import PortfolioDropdown from './Dropdowns/PortfolioDropdown';
import WhatWeDoDropdown from './Dropdowns/WhatWeDoDropdown';
import WeWorkWithDropdown from './Dropdowns/WeWorkWithDropdown';

const HeaderButton = ({ label, onHover, hasDropdown = false }) => (
    <div className="header-button" onMouseEnter={() => onHover(label)}>
        <span className="header-button-label">
            {label} {hasDropdown && <span className="dropdown-icon">▼</span>}
        </span>
    </div>
);


const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const DROPDOWN_COMPONENTS = {
        'Portfolio': <PortfolioDropdown />,
        'What We Do': <WhatWeDoDropdown />,
        'We Work With': <WeWorkWithDropdown />,
    };

    const handleMouseEnter = (label) => {
        setActiveDropdown(label);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <div className="header-wrapper" onMouseLeave={handleMouseLeave}>
            <div className="header-container">
                {/* Logo */}
                <div className="header-logo">
                    <span className="Zhang">Zhang</span>
                    <span className="Properties">Properties</span>
                </div>

                {/* Navigation */}
                <div className="header-nav">
                    <HeaderButton label="Portfolio" hasDropdown onHover={handleMouseEnter} />
                    <HeaderButton label="What We Do" hasDropdown onHover={handleMouseEnter} />
                    <HeaderButton label="We Work With" hasDropdown onHover={handleMouseEnter} />
                    <HeaderButton label="Organisation" onHover={handleMouseEnter} />
                </div>


                {/* Contact */}
                <div className="header-contact">
                    Contact <span className="arrow">→</span>
                </div>
            </div>

            {/* Dropdown Panel */}
            {activeDropdown && DROPDOWN_COMPONENTS[activeDropdown] && (
                <div className="header-dropdown">
                    {DROPDOWN_COMPONENTS[activeDropdown]}
                </div>
            )}
        </div>
    );
};

export default Header;
