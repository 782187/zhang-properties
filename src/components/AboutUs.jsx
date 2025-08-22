import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  const videoWrapperRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          setHasRevealed(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    const target = videoWrapperRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [hasRevealed]);

  return (
    <section className="bg-light py-5 px-3 text-center">
      <h2 className="display-5 fw-bold text-warning mb-4">About Us</h2>
      <p className="lead mb-5">
        Zhang Industrial Property Consultants (ZIPC) is a leading real estate consultancy firm
        specializing in industrial, logistics, and commercial properties. Managed by Zhang Yan Qun
        & Hemant Khatri, ZIPC provides leasing/sale services across India and Dubai, with
        properties ranging from 5,000 to 50,000 sq.m.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container"
      >
        <div
          ref={videoWrapperRef}
          className="position-relative mx-auto overflow-hidden rounded shadow"
          style={{
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          {!playVideo ? (
            <>
              <div
                className="thumbnail-wrapper"
                style={{
                  backgroundImage: "url('./about_us_thumbnail.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  aspectRatio: "16/9",
                }}
              >
                <button
                  className="btn btn-warning play-button"
                  onClick={() => setPlayVideo(true)}
                >
                  ▶
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Actual Video */}
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                  title="Discover Zhang"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-100 h-100 border-0"
                />
              </div>
            </>
          )}

          <div className={`diagonal-overlay ${hasRevealed ? "slide-away" : ""}`} />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
