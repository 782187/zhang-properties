import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { associations } from "../data/associations";

const Clients = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
      drawLandTexture();
    };

    const drawLandTexture = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f8f9fa";
      ctx.fillRect(0, 0, width, height);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      {/* Top pattern border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50px",
          background: `
            repeating-linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.3) 0px,
              rgba(0, 0, 0, 0.17) 1.5px,
              transparent 1.5px,
              transparent 6px
            )
          `,
          backgroundColor: "#ffffff",
          zIndex: 2,
        }}
      ></div>
      
      <canvas
        ref={canvasRef}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container position-relative z-3">
        <div className="text-center mb-5">
          <motion.h2
            className="display-5 fw-bold mb-3"
            style={{ color: "#ba0b0bff" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Esteemed Associations
          </motion.h2>
          <motion.div
            className="mx-auto mb-4"
            style={{
              height: "4px",
              width: "100px",
              background: "linear-gradient(90deg, #8b1313ff, #8b3422ff)",
              borderRadius: "2px",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="lead mx-auto text-secondary"
            style={{ maxWidth: "700px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are proud to collaborate with leading real estate organizations and industrial partners,
            building long-lasting relationships based on trust and performance.
          </motion.p>
        </div>

        <div className="row g-4 justify-content-center">
          {associations.map((association, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="card h-100 border-0 rounded-4 overflow-hidden position-relative"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#222",
                  boxShadow: "0 8px 20px rgba(139, 69, 19, 0.12)",
                  border: "1px solid rgba(139, 69, 19, 0.1)",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 15px 25px rgba(34, 139, 34, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <motion.div
                      className="p-3 rounded-circle me-4"
                      style={{
                        background: "rgba(139, 69, 19, 0.1)",
                        border: "2px solid rgba(34, 139, 34, 0.3)",
                      }}
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i
                          className="bi bi-building fs-3"
                          style={{ color: "#c82a2aff" }}
                        ></i>
                      </div>
                    </motion.div>
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: "#111" }}>
                        {association.split(" - ")[0]}
                      </h5>
                      <p className="text-muted mb-0">
                        {association.split(" - ")[1]}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;