import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Tata Gotion",
    location: "Chakan & Sanand",
    size: "1.3 Million Sq.ft.",
    description:
      "Ensuring smooth operations in industrial parks is vital. With us, you gain peace of mind as we handle all common area maintenance operations, creating a conducive environment for your business to thrive.",
    video: "/hero.mp4",
  },
  {
    name: "Sany",
    location: "Chakan",
    size: "3.25 Lac Sq.ft.",
    description:
      "Ensuring smooth operations in industrial parks is vital. With us, you gain peace of mind as we handle all common area maintenance operations, creating a conducive environment for your business to thrive.",
    video: "/hero.mp4",
  },
  {
    name: "Tata Asal",
    location: "Sanand",
    size: "1 Lac Sq.ft.",
    description:
      "Ensuring smooth operations in industrial parks is vital. With us, you gain peace of mind as we handle all common area maintenance operations, creating a conducive environment for your business to thrive.",
    video: "/hero.mp4",
  },
  {
    name: "Mahindra",
    location: "Chakan",
    size: "92,000 Sq.ft.",
    description:
      "Ensuring smooth operations in industrial parks is vital. With us, you gain peace of mind as we handle all common area maintenance operations, creating a conducive environment for your business to thrive.",
    video: "/hero.mp4",
  },
];

const Projects = () => {
  const videoRefs = useRef([]);
  const [visibleIndices, setVisibleIndices] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updates = {};
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            updates[idx] = true;
          }
        });
        setVisibleIndices((prev) => ({ ...prev, ...updates }));
      },
      { threshold: 0.3 }
    );

    videoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-light py-5 px-3 border border-3">
      <div className="container">
        <motion.h2
          className="text-center text-warning mb-5 fw-bold display-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Delivered Projects
        </motion.h2>

        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          const isVisible = visibleIndices[idx];

          return (
            <motion.div
              key={idx}
              className="row align-items-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`col-md-6 ${isEven ? "" : "order-md-2"}`}>
                <div
                  className="position-relative overflow-hidden rounded shadow"
                  ref={(el) => (videoRefs.current[idx] = el)}
                  data-index={idx}
                  style={{ position: "relative" }}
                >
                  <div
                    className={`diagonal-overlay ${
                      isVisible ? "slide-away" : ""
                    }`}
                  ></div>

                  <video
                    src={proj.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="img-fluid"
                    style={{ display: "block", width: "100%" }}
                  />
                </div>
              </div>

              <div className={`col-md-6 ${isEven ? "" : "order-md-1"}`}>
                <h3 className="text-warning fw-semibold fs-3">{proj.name}</h3>
                <p className="mb-1 text-dark fs-5">{proj.location}</p>
                <p className="text-muted fs-5">{proj.size}</p>
                <p className="text-muted fs-5">{proj.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
