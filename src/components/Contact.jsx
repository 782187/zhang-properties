import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import EnquiryForm from "./EnquiryForm";
import { images } from "@assets/media";

const Contact = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="position-relative" style={{ minHeight: '100vh', padding: '100px 0', overflow: 'hidden' }}>
      {/* Left side - Full height background image */}
      <div 
        className="position-absolute h-100" 
        style={{
          width: 'calc(50% + 150px)',
          left: 0,
          top: 0,
          backgroundImage: `url(${images.contact})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      ></div>

      {/* Right side - Light gray background with pattern */}
      <div 
        className="position-absolute h-100" 
        style={{
          width: 'calc(50% + 200px)',
          right: 0,
          top: 0,
          backgroundColor: '#f8f9fa',
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #e9ecef,
            #e9ecef 1px,
            transparent 1px,
            transparent 8px
          )`,
          zIndex: 1
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-5 col-md-7">
            {/* Form Container - Overlapping both sides */}
            <div 
              className="position-relative"
              style={{
                background: 'white',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginLeft: '0',
                marginRight: '0',
                width: 'calc(100% + 80px)'
              }}
            >
              <div style={{ padding: '40px 0' }}>
                <EnquiryForm />
              </div>
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1 col-md-8 offset-md-2 mt-5 mt-lg-0 ps-lg-5">
            <div className="d-flex flex-column h-100 justify-content-center ps-lg-4" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
              <div className="d-flex align-items-center mb-4">
                <div style={{ width: '4px', height: '24px', backgroundColor: '#b11226' }}></div>
                <span className="text-uppercase fw-bold ms-2 me-2" style={{ 
                  letterSpacing: '2px', 
                  color: '#b11226', 
                  fontSize: '12px',
                  lineHeight: '1.2'
                }}>
                  INQUIRY
                </span>
                <div style={{ width: '4px', height: '24px', backgroundColor: '#b11226' }}></div>
              </div>

              <h2 className="fw-bold mb-4" style={{ 
                fontSize: '2.2rem', 
                lineHeight: '1.2',
                color: '#2d3748',
                marginBottom: '30px !important'
              }}>
                Start A Conversation <br /> With Us
              </h2>

              <button
                className="btn text-uppercase align-self-start"
                onClick={() => navigate('/contact_us')}
                style={{
                  letterSpacing: '1px',
                  fontWeight: '600',
                  fontSize: '12px',
                  borderRadius: '0',
                  backgroundColor: '#b11226',
                  color: 'white',
                  border: 'none',
                  padding: '12px 40px 12px 30px',
                  position: 'relative',
                  transition: 'all 0.3s',
                  marginTop: '10px',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#900e1f';
                  e.currentTarget.style.paddingRight = '50px';
                  e.currentTarget.querySelector('i').style.right = '15px';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#b11226';
                  e.currentTarget.style.paddingRight = '40px';
                  e.currentTarget.querySelector('i').style.right = '20px';
                }}
              >
                CONTACT US
                <i 
                  className="fas fa-arrow-right" 
                  style={{ 
                    position: 'absolute', 
                    right: '20px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    fontSize: '12px',
                    transition: 'all 0.3s'
                  }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;