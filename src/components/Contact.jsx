import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import EnquiryForm from "./EnquiryForm";
import AOS from 'aos';

const Contact = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = 400);

    // Light texture (white base + soft gray noise)
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 3000; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const alpha = Math.random() * 0.08;
      ctx.fillStyle = `rgba(0,0,0,${alpha * 0.1})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }, []);

  return (
    <section className="position-relative py-5">
      <canvas
        ref={canvasRef}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0 }}
      ></canvas>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-stretch g-4">
          <div
            className="col-md-6 d-block"
            data-aos="fade-right"
            style={{
              backgroundImage: "url('/contact.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px',
              minHeight: '400px',
            }}
          ></div>

          <div className="col-md-6 px-4 py-4" data-aos="fade-left">
            <h2 className="mb-4 fw-bold text-danger">Get in Touch</h2>
            <p className="text-muted mb-4 fs-5">
              Whether you're looking for industrial, commercial, or residential spaces —
              our expert team will guide you every step of the way.
            </p>
            <EnquiryForm />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
