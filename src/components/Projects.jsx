import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const PRIMARY_RED = "#d61f26";
const DARK_TEXT = "#515050ff";
const GREY_TEXT = "#6c757d";

const projects = [
  {
    name: "ESR Talegaon B05",
    location: "Talegaon Industrial Park",
    size: "271,205 Sq.Ft.",
    description: "State-of-the-art industrial facility designed for Putzmeister with 15m clear height, 7 ton/sq.m floor loading, and 1,500 KVA power capacity. Features IGBC Gold rated sustainable design, rooftop solar provisions, and comprehensive fire safety systems meeting NBC 2016 norms. Includes smart infrastructure with IoT energy monitoring and park-wide security platform.",
    video: "https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e6cb%2F68cd098d925ff15bf5d0fe70_we%20build-transcode.mp4",
  },
  {
    name: "Tata Autocomp Systems",
    location: "Jadhavwadi, Talegaon MIDC",
    size: "134,487 Sq.Ft.",
    description: "Pre-engineered manufacturing facility by Sovereign Infra Steels with 11m clear height, 4 x 10MT EOT cranes, and 7.5 MT/sq.m floor loading. Features 12 docks, 8 rolling shutters, K-115 sprinkler system, and 2000KW power with express feeder. Complete with 5m canopy, office block, STP-10KLD, and 24m wide access road just 0.8km from Chakan-Talegaon highway.",
    video: "https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e6cb%2F68cd184533fe6f7277984bf7_we%20lease-transcode.mp4",
  },
  {
    name: "Tata Asal",
    location: "Sanand",
    size: "1 Lac Sq.ft.",
    description: "Ensuring smooth operations in industrial parks is vital. With us, you gain peace of mind as we handle all common area maintenance operations, creating a conducive environment for your business to thrive. From site readiness to handover, we keep quality and efficiency at the core. Our team optimizes workflows to minimize downtime and costs.",
    video: "https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e6cb%2F68cd18960476ea03f59d1007_we%20maintain-transcode.mp4",
  },
  {
    name: "Mahindra",
    location: "Chakan",
    size: "92,000 Sq.ft.",
    description: "Ensuring smooth operations in industrial parks is vital. With us, you gain peace of mind as we handle all common area maintenance operations, creating a conducive environment for your business to thrive. We ensure seamless coordination and reliable post-delivery support. A dedicated helpdesk provides rapid resolution for on-ground needs.",
    video: "https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e6cb/67434bc3f8cab15f2f07eb5c_env%20sus-transcode.mp4",
  },
];

const Projects = () => {
  const videoRefs = useRef([]);

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
            const element = videoRefs.current[idx];
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
                <div
                  className="position-relative overflow-hidden shadow-sm"
                  ref={(el) => (videoRefs.current[idx] = el)}
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    maxWidth: "520px",
                    margin: "0 auto",
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
                  <video
                    src={proj.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-100 h-auto"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      aspectRatio: "1 / 1",
                      zIndex: 2,
                      position: "relative",
                    }}
                  />
                </div>
              </div>

              <div className={`col-12 col-md-6 ${isEven ? "" : "order-md-1"}`}>
                <h3
                  style={{
                    color: DARK_TEXT,
                    fontSize: "clamp(2rem, 5vw, 3.2rem)",
                    fontWeight: 500,
                  }}
                >
                  {proj.name}
                </h3>
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
