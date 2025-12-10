import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { images } from "@assets/media";

const AboutUs = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section
      style={{
        fontFamily: "'Barlow', sans-serif",
        backgroundColor: "#fff",
        padding: "60px 5%",
      }}
    >
      {/* Header */}
      <div className="text-center mb-4">
        <span
          style={{
            color: "#d61f26",
            fontWeight: "600",
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          About Us
        </span>
        <div
          style={{
            height: "3px",
            width: "30px",
            backgroundColor: "#d61f26",
            margin: "10px auto",
          }}
        ></div>

        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#4b4b4b",
            marginBottom: "40px",
          }}
        >
          What Defines Us
        </h2>
      </div>

      {/* Text Section */}
      <div
        style={{
          color: "#444",
          lineHeight: "1.8",
          fontSize: "1.05rem",
          margin: "0 auto 60px auto",
          maxWidth: "1200px",
          textAlign: "justify",
        }}
      >
        <p>
          <strong>Curiosity. Care. Craftsmanship.</strong> That’s the DNA of
          every person at Zhang Industrial Property Consultants. We’re not just
          shaping spaces — we’re reimagining how they come to life with passion
          and precision that inspires excellence in every project we undertake.
        </p>

        <p>
          <strong>Our People:</strong> We’re a diverse family of thinkers,
          makers, and innovators. From consultants to developers, every member
          of our team shares an unwavering dedication to crafting meaningful
          spaces that bring visions to life. Collaboration and creativity drive
          our success.
        </p>

        <p>
          <strong>Innovation:</strong> Every project we deliver becomes a
          playground for ideas. We combine cutting-edge technology, bold design,
          and smart planning to redefine the industrial and commercial
          real-estate experience — pushing boundaries while staying grounded in
          functionality.
        </p>

        <p>
          <strong>Sustainability:</strong> Sustainability is at the heart of our
          work. We design with the planet in mind, integrating eco-conscious
          practices and materials into every phase of development. Our projects
          aim to make a lasting, positive impact on both people and the planet.
        </p>

        <p>
          <strong>Efficiency:</strong> We believe efficiency is elegance.
          Through streamlined processes, teamwork, and expertise, we ensure
          every milestone is achieved on time and beyond expectations — setting
          new benchmarks for reliability and performance.
        </p>

        <p>
          <strong>Our Vision:</strong> To empower industries and businesses with
          smart, sustainable, and future-ready infrastructure, redefining
          industrial real estate with integrity, innovation, and impact.
        </p>
      </div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="position-relative mx-auto"
        style={{
          maxWidth: "1250px",
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 4px 25px rgba(0,0,0,0.1)",
          marginBottom: "60px", // Added margin below video section
        }}
      >
        {!playVideo ? (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "0",
              paddingBottom: "56.25%", // 16:9 aspect ratio
              cursor: "pointer",
            }}
            onClick={() => setPlayVideo(true)}
          >
            <img
              src={images.aboutUsThumbnail}
              alt="About Us Thumbnail"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <button
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#d61f26",
                border: "none",
                color: "#fff",
                fontSize: "2rem",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                cursor: "pointer",
                boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
              }}
            >
              ▶
            </button>
          </div>
        ) : (
          <div className="ratio ratio-16x9" style={{ width: "100%", height: "100%" }}>
            <iframe
              src="https://www.youtube.com/embed/vvh-fT5BfwQ?autoplay=1"
              title="Discover Zhang"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        )}
      </motion.div>

      {/* Culture Button Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          maxWidth: "1320px",
          marginTop: "5px",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-block",
            background: "repeating-linear-gradient(45deg, #fff, #fff 5px, #d1d1d1 5px, #d1d1d1 6px)",
            padding: "15px",
            border: "1px solid #d1d1d1",
            boxSizing: "content-box",
          }}
        >
          <Link
            to="/organisation"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#b42023",
              color: "#fff",
              border: "none",
              padding: "15px 30px",
              fontSize: "1rem",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
              textDecoration: "none"
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d61f26")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#b42023")}
          >
            DIVE INTO OUR CULTURE
            <span style={{ marginLeft: "10px", fontSize: "1.2rem" }}>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;