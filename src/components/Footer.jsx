import React from 'react';
import '../styles/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white pt-5 pb-4">
            <Container>
                <Row className="footer-top mb-4 text-center text-md-start">
                    <Col md={4} className="mb-4 mb-md-0 animate-fade">
                        <h5 className="footer-logo">
                            <Link to="/" className="text-decoration-none text-white">
                                <span className="Zhang">Zhang</span> <span className="Properties">Properties</span>
                            </Link>
                        </h5>
                        <p className="text-muted">Building excellence, one property at a time.</p>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0 animate-slide-up">
                        <h6 className="text-uppercase fw-bold mb-3 text-warning">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/dropdown/tata-gotion" className="footer-link text-decoration-none">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="/dropdown/webuild" className="footer-link text-decoration-none">
                                    What We Do
                                </Link>
                            </li>
                            <li>
                                <Link to="/dropdown/ouroccupiers" className="footer-link text-decoration-none">
                                    We Work With
                                </Link>
                            </li>
                            <li>
                                <Link to="/organisation" className="footer-link text-decoration-none">
                                    Organisation
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} className="animate-fade-in-right">
                        <h6 className="text-uppercase fw-bold mb-3 text-warning">Contact</h6>
                        <p className="mb-1">Email: ***@gmail.com</p>
                        <p className="mb-1">Phone: +91 **********</p>
                        <p>Address: Pune, Maharashtra, India</p>
                        <Link to="/contact_us" className="btn btn-warning btn-sm mt-2">
                            Contact Us
                        </Link>
                    </Col>
                </Row>
                <hr className="border-top border-secondary" />
                <Row className="text-center mt-3">
                    <Col>
                        <p className="mb-0 text-white">&copy; {new Date().getFullYear()} Zhang Properties. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;