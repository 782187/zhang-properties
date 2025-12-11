import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { images } from "@assets/media";

const PRIMARY_RED = "#d61f26";
const DARK_TEXT = "#515050ff";
const GREY_TEXT = "#6c757d";

const projects = [
  {
    name: "Tata Gotion",
    location: "Chakan + Sanand",
    size: "1.2M Sq.Ft.",
    description: "Tata Gotion delivers 1.2 million sq.ft of fully commissioned battery manufacturing and assembly infrastructure across twin campuses in Chakan (Pune) and Sanand (Gujarat). Both parks combine high-bay production halls, battery module lines, warehousing blocks, and collaborative offices with robust utilities sized for 24x7 manufacturing.",
    image: images.tataGotion,
    link: "/completed/tata-gotion",
  },
  {
    name: "Sany",
    location: "Chakan",
    size: "350K Sq.Ft.",
    description: "350,000 sq.ft of pre-engineered sheds and office cores for Sany's heavy-equipment program, delivered in the heart of Chakan MIDC. Wide bays, crane-ready grids, and deep yards support assembly, testing, and outbound logistics.",
    image: images.sanyChakan,
    link: "/completed/sany",
  },
  {
    name: "Tata Asal",
    location: "Sanand",
    size: "1L Sq.Ft.",
    description: "100,000 sq.ft of pre-engineered manufacturing space in Sanand for Tata Asal, blending production bays, warehouse space, and collaborative office/lab cores. Designed for flexible line layouts with ample loading interfaces.",
    image: images.tataAsal,
    link: "/completed/tata-asal",
  },
  {
    name: "Tata Toyo Radiator",
    location: "Hinjewadi",
    size: "3L Sq.Ft.",
    description: "Delivered industrial facility in Hinjewadi industrial/IT corridor. Strategically located with excellent connectivity to major highways and logistics hubs. Features modern infrastructure designed for efficient operations and scalability.",
    image: images.projectStructure,
    link: "/completed/tata-toyo-radiator",
  },
  {
    name: "Tata Ficosa",
    location: "Chakan",
    size: "1L Sq.Ft.",
    description: "Completed manufacturing facility in Chakan industrial belt. Designed for precision manufacturing with modern infrastructure, efficient layouts, and comprehensive utilities. Ready for immediate operations with full statutory compliance.",
    image: images.esrTalegaon2,
    link: "/completed/tata-ficosa",
  },
];

const Projects = () => {
  const imageRefs = useRef([]);

  return (
    <section
      className="py-5 px-3"
      style={{
        fontFamily: "'Barlow', sans-serif",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container-lg">
        <motion.h2
          className="text-center mb-5"
          style={{
            color: DARK_TEXT,
            fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
            fontWeight: 500,
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Delivered Projects
        </motion.h2>

        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          const controls = useAnimation();

          useEffect(() => {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    controls.start("visible");
                  }
                });
              },
              { threshold: 0.3 }
            );
            const element = imageRefs.current[idx];
            if (element) observer.observe(element);
            return () => observer.disconnect();
          }, [controls, idx]);

          return (
            <motion.div
              key={idx}
              className="row align-items-start mb-5 g-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`col-12 col-md-6 ${isEven ? "" : "order-md-2"} mb-4 mb-md-0`}
              >
                <Link to={proj.link} className="text-decoration-none">
                  <div
                    className="position-relative overflow-hidden shadow-sm"
                    ref={(el) => (imageRefs.current[idx] = el)}
                    style={{
                      overflow: "visible",
                      position: "relative",
                      maxWidth: "520px",
                      margin: "0 auto",
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <motion.div
                      variants={{
                        hidden: {
                          x: "0%",
                          y: "0%",
                          rotate: 45,
                          scale: 1.5,
                        },
                        visible: {
                          x: "250%",
                          y: "-250%",
                          rotate: 45,
                          scale: 1.5,
                          transition: {
                            duration: 3
                          },
                        },
                      }}
                      initial="hidden"
                      animate={controls}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "300%",
                        height: "300%",
                        backgroundColor: PRIMARY_RED,
                        zIndex: 3,
                        transformOrigin: "center center",
                        pointerEvents: "none",
                      }}
                    />
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-100 h-auto"
                      style={{
                        display: "block",
                        objectFit: "contain",
                        width: "100%",
                        height: "auto",
                        minHeight: "400px",
                        maxHeight: "600px",
                        zIndex: 2,
                        position: "relative",
                        backgroundColor: "#f8f9fa",
                      }}
                    />
                  </div>
                </Link>
              </div>

              <div className={`col-12 col-md-6 ${isEven ? "" : "order-md-1"}`}>
                <Link to={proj.link} className="text-decoration-none">
                  <h3
                    style={{
                      color: DARK_TEXT,
                      fontSize: "clamp(2rem, 5vw, 3.2rem)",
                      fontWeight: 500,
                      transition: "color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = PRIMARY_RED;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = DARK_TEXT;
                    }}
                  >
                    {proj.name}
                  </h3>
                </Link>
                <p
                  style={{
                    color: DARK_TEXT,
                    fontSize: "clamp(1.15rem, 3.2vw, 1.6rem)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {proj.location}
                </p>
                <p
                  style={{
                    color: GREY_TEXT,
                    fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {proj.size}
                </p>
                <p
                  style={{
                    color: GREY_TEXT,
                    fontSize: "clamp(1.05rem, 2.6vw, 1.25rem)",
                    lineHeight: "1.7",
                  }}
                >
                  {proj.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
