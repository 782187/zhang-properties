import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import EnquiryForm from "./EnquiryForm";
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 px-3 border border-3" style={{ background: 'linear-gradient(to right, rgba(240,248,255,0.9) 50%, aliceblue 50%)' }}>
      <div className="container">
        <div className="row align-items-stretch position-relative">
          <div className="col-md-6 position-absolute h-100 start-0 d-none d-md-block"
            style={{
              backgroundImage: `url('./contact.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.9
            }}>
          </div>

          <div className="col-md-6 mb-4 mb-md-0 position-relative" data-aos="fade-right">
            <div className="p-4 p-lg-5" style={{ backdropFilter: 'blur(1px)' }}>
              <h2 className="mb-4 text-warning">Get in Touch</h2>
              <EnquiryForm />
            </div>
          </div>

          <div className="col-md-6 text-center text-md-start ps-md-5" data-aos="fade-left">
            <div className="h-100 d-flex flex-column justify-content-center">
              <h2 className="text-dark mb-3 display-5 fw-bold">Start a Conversation With Us</h2>
              <p className="text-muted mb-4 fs-5">
                Whether you're looking for your dream home, office space, or an investment opportunity,
                our expert team is here to help guide you every step of the way.
              </p>
              <div className="mt-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-warning p-2 rounded-circle me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <span className="fs-5">...@gmail.com</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-warning p-2 rounded-circle me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                    </svg>
                  </div>
                  <span className="fs-5">+91 **********</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;