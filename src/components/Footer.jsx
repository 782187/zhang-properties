import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#1a1a1a',
            color: 'white',
            padding: '3rem 0 1rem 0',
            position: 'relative',
            fontFamily: "'Barlow', sans-serif",
            borderTop: '1px solid #2f2f2f'
        }}>
            <Container>
                <Row className="text-start gy-4">
                    <Col md={4} className="position-relative px-3 ps-5 px-md-4 mb-3 mb-md-0">
                        <div>
                            <div style={{
                                fontSize: '1.8rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem'
                            }}>
                                <span style={{ color: '#fff' }}>Zhang</span>{' '}
                                <span style={{ color: '#e74c3c' }}>Properties</span>
                            </div>
                            <p style={{
                                color: '#9ca3af',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: 400,
                                fontSize: 'clamp(1.25rem, 3.2vw, 34px)'
                            }}>
                                Building excellence, one property at a time.
                            </p>
                        </div>
                        <div className="d-none d-md-block" style={{
                            position: 'absolute',
                            right: 0,
                            top: '10%',
                            height: '100%',
                            width: '8px',
                            padding: '10px',
                            background: `
                                repeating-linear-gradient(
                                    45deg,
                                    rgba(64, 64, 64, 0.6),
                                    rgba(104, 101, 101, 0.3) 14%,
                                    transparent 14%,
                                    transparent 50%
                                )
                            `,
                            backgroundSize: '8px 8px',
                            borderRadius: '4px',
                            boxShadow: '0 0 15px rgba(0,0,0,0.2)'
                        }}></div>
                        <div className="d-md-none" style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            width: '15px',
                            border: '1px solid #eedcdc63',
                            background: `
                                repeating-linear-gradient(
                                    45deg,
                                    rgba(64, 64, 64, 0.6),
                                    rgba(104, 101, 101, 0.3) 14%,
                                    transparent 14%,
                                    transparent 50%
                                )
                            `,
                            backgroundSize: '8px 8px',
                            borderRadius: '4px'
                        }}></div>
                    </Col>

                    <Col md={4} className="position-relative px-3 ps-5 px-md-4 mb-3 mb-md-0">
                        <div>
                            <h6 style={{
                                color: '#d61f26',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase'
                            }}>
                                Quick Links
                            </h6>
                            <div>
                                {[
                                    { to: "/dropdown/tata-gotion", label: "Portfolio" },
                                    { to: "/dropdown/webuild", label: "What We Do" },
                                    { to: "/dropdown/ouroccupiers", label: "We Work With" },
                                    { to: "/organisation", label: "Organisation" },
                                ].map((link, i) => (
                                    <Link
                                        key={i}
                                        to={link.to}
                                        style={{
                                            color: '#9ca3af',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            fontWeight: 400,
                                            fontSize: 'clamp(1.25rem, 3.2vw, 34px)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#d1d5db';
                                            e.target.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#9ca3af';
                                            e.target.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="d-none d-md-block" style={{
                            position: 'absolute',
                            right: 0,
                            top: '10%',
                            height: '100%',
                            width: '8px',
                            padding: '10px',
                            background: `
                                repeating-linear-gradient(
                                    45deg,
                                    rgba(64, 64, 64, 0.6),
                                    rgba(87, 85, 85, 0.3) 14%,
                                    transparent 14%,
                                    transparent 50%
                                )
                            `,
                            backgroundSize: '8px 8px',
                            borderRadius: '4px',
                            boxShadow: '0 0 15px rgba(0,0,0,0.2)'
                        }}></div>
                        <div className="d-md-none" style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            width: '15px',
                            border: '1px solid #cccccc6f',
                            background: `
                                repeating-linear-gradient(
                                    45deg,
                                    rgba(64, 64, 64, 0.6),
                                    rgba(87, 85, 85, 0.3) 14%,
                                    transparent 14%,
                                    transparent 50%
                                )
                            `,
                            backgroundSize: '8px 8px',
                            borderRadius: '4px'
                        }}></div>
                    </Col>

                    <Col md={4} className="position-relative px-3 ps-5 px-md-4">
                        <div>
                            <h6 style={{
                                color: '#d61f26',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase'
                            }}>
                                Contact
                            </h6>
                            <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>Email: ***@gmail.com</p>
                            <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>Phone: +91 9225520888 / 020-61095378</p>
                            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Address: Pune, Maharashtra, India</p>
                            <Link
                                to="/contact_us"
                                style={{
                                    backgroundColor: '#d61f26',
                                    border: 'none',
                                    color: '#1a1a1a',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    marginTop: '0.5rem',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#d61f26';
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#d61f26';
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                Contact Us
                            </Link>
                            <div
                                className="mt-4 mt-md-3"
                                style={{
                                    border: '2px solid #4b5563',
                                    borderRadius: '6px',
                                    padding: '6px',
                                    transition: 'all 0.25s ease',
                                    width: '100%',
                                    maxWidth: '420px',
                                    textAlign: 'left'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#d61f26';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#4b5563';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div
                                    style={{
                                        border: '1px solid #6b7280',
                                        borderRadius: '4px',
                                        padding: '1rem 1.25rem',
                                        background: `repeating-linear-gradient(45deg, rgba(38,38,38,0.7), rgba(38,38,38,0.7) 14%, rgba(20,20,20,0.35) 14%, rgba(20,20,20,0.35) 50%)`,
                                        backgroundSize: '8px 8px',
                                        fontFamily: "'Barlow', sans-serif",
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start'
                                    }}
                                >
                                    <div style={{
                                        color: '#ffffff',
                                        opacity: 0.9,
                                        fontSize: 'clamp(0.7rem, 1.6vw, 0.85rem)',
                                        letterSpacing: '0.22rem',
                                        textTransform: 'uppercase',
                                        marginBottom: '0.75rem'
                                    }}>
                                        OFFICE
                                    </div>
                                    <div style={{ color: '#e6e6e6', lineHeight: 1.8, fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)', fontWeight: 400 }}>
                                        <div>11 Raja Ram Apts.,</div>
                                        <div>103, South Main Road,</div>
                                        <div>Koregaon Park, Pune-411001,</div>
                                        <div>Tel : <a href="tel:02061095378" style={{ color: '#fff', textDecoration: 'none' }}>020-61095378</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-md-none" style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            width: '15px',
                            border: '1px solid #e8dbdb61',
                            background: `
                                repeating-linear-gradient(
                                    45deg,
                                    rgba(64, 64, 64, 0.6),
                                    rgba(95, 95, 95, 0.3) 14%,
                                    transparent 14%,
                                    transparent 50%
                                )
                            `,
                            backgroundSize: '8px 8px',
                            borderRadius: '4px'
                        }}></div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div style={{
                            borderTop: '1px solid #333',
                            paddingTop: '1.5rem',
                            marginTop: '2rem',
                            color: '#ccc'
                        }} className="text-center">
                            <p style={{ margin: 0 }}>
                                &copy; {new Date().getFullYear()} Zhang Properties. All rights reserved.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div style={{
                marginTop: '3rem',
                height: '12px',
                background: `
                    repeating-linear-gradient(
                        45deg,
                        rgba(64, 64, 64, 0.6),
                        rgba(95, 95, 95, 0.3) 14%,
                        transparent 14%,
                        transparent 50%
                    )
                `,
                backgroundSize: '8px 8px',
                padding: '10px 10px',
                boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.3)'
            }}></div>
        </footer>
    );
};

export default Footer;
