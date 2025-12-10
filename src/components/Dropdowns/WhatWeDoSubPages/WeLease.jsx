import React from "react";
import HeroSection from "../PortfolioDropdownSubPages/HeroSection";
import Contact from "../../Contact";
import { motion } from "framer-motion";
import { images, videos } from "@assets/media";

function WeLease() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-light" style={{ fontFamily: "'Barlow', sans-serif", color: "#44444481" }}>
      <HeroSection
        videoSrc={videos.tataGotion}
        header="Build To Suit – Chakan"
        subheader="65 Acres of Premium Industrial Land for Custom Development"
        textColor="#fff"
        leftStatValue="65 Acres"
        leftStatLabel="Total Land Area"
        rightStatValue="Chakan, Pune"
        rightStatLabel="Prime Location"
      />

      <div className="container-xl mt-5 mb-5">
        <motion.h2
          className="fw-bold text-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "3rem" }}
        >
          65 Acres Build To Suit Industrial Land – Chakan, Pune
        </motion.h2>

        <motion.p
          className="text-center mx-auto"
          style={{ fontSize: "1.4rem", maxWidth: "900px", lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Zhang Properties presents a premium 65-acre Build To Suit industrial land parcel
          in Chakan, Pune — one of India’s fastest growing manufacturing and logistics hubs.
          This large contiguous land parcel is strategically positioned with excellent
          connectivity to Mumbai–Pune Expressway, major MIDC zones, and key industrial corridors,
          making it ideal for large scale factories, warehouses, data centers, and export-oriented units.
        </motion.p>
      </div>

      <motion.section
        className="py-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-xl">
          <div className="row g-5 align-items-center">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <h3 className="fw-bold mb-4" style={{ fontSize: "2.2rem" }}>
                Strategic Location Advantage – Chakan, Pune
              </h3>
              <p style={{ fontSize: "1.3rem", lineHeight: 1.7 }}>
                Chakan is a proven industrial powerhouse with direct access to NH-48,
                Pune city, Talegaon MIDC, and international logistics routes. The 65 acres
                land is located in a high-demand manufacturing belt surrounded by leading
                automotive, electronics, engineering, and logistics companies.
                This location ensures faster supply chain movement, easy availability
                of skilled manpower, and long-term value appreciation.
              </p>
            </motion.div>

            <motion.div className="col-lg-6" variants={itemVariants}>
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
                <img src={images.tataGotion2} alt="Chakan Industrial Land" className="img-fluid object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-5 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-xl">
          <div className="row g-5 align-items-center">
            <motion.div className="col-lg-6 order-lg-2" variants={itemVariants}>
              <h3 className="fw-bold mb-4" style={{ fontSize: "2.2rem" }}>
                Build To Suit Development
              </h3>
              <p style={{ fontSize: "1.3rem", lineHeight: 1.7 }}>
                The entire 65-acre land is planned exclusively for Build To Suit development.
                This allows clients to design and construct infrastructure exactly as per
                operational needs including factory sheds, warehouses, R&D centers,
                logistics parks, cold storage, or specialized manufacturing units.
                Zhang Properties undertakes end-to-end development including approvals,
                infrastructure, utilities, and project execution support.
              </p>
            </motion.div>

            <motion.div className="col-lg-6 order-lg-1" variants={itemVariants}>
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
                <img src={images.tataAsal1} alt="Build To Suit Development" className="img-fluid object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-xl">
          <div className="row g-5 align-items-center">
            <motion.div className="col-lg-6" variants={itemVariants}>
              <h3 className="fw-bold mb-4" style={{ fontSize: "2.2rem" }}>
                Infrastructure & Connectivity
              </h3>
              <p style={{ fontSize: "1.3rem", lineHeight: 1.7 }}>
                The land parcel enjoys robust infrastructure with wide internal roads,
                high-capacity power availability, water supply, drainage, and storm-water
                management systems. The site offers seamless connectivity to Pune city,
                Pimpri-Chinchwad, Mumbai ports, and major highway networks, ensuring
                uninterrupted movement of raw materials and finished goods.
              </p>
            </motion.div>

            <motion.div className="col-lg-6" variants={itemVariants}>
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
                <img src={images.sanyChakan2} alt="Chakan Infrastructure" className="img-fluid object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-5 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-xl text-center">
          <motion.h2
            className="fw-bold mb-4"
            variants={itemVariants}
            style={{ fontSize: "3rem" }}
          >
            Ideal For Large-Scale Industrial & Logistics Users
          </motion.h2>

          <motion.p
            className="mx-auto"
            variants={itemVariants}
            style={{ fontSize: "1.4rem", maxWidth: "900px", lineHeight: 1.7 }}
          >
            This 65-acre Build To Suit land at Chakan is perfectly suited for automotive
            manufacturing, electronics production, heavy engineering, EV manufacturing,
            logistics parks, warehousing, and export-oriented industries. The scale,
            strategic location, and custom development flexibility make it a rare
            industrial opportunity in the Pune region.
          </motion.p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
            <span className="badge bg-warning bg-opacity-10 text-warning fs-5 py-3 px-4">65 Acres Land</span>
            <span className="badge bg-warning bg-opacity-10 text-warning fs-5 py-3 px-4">Build To Suit</span>
            <span className="badge bg-warning bg-opacity-10 text-warning fs-5 py-3 px-4">Prime Chakan Location</span>
            <span className="badge bg-warning bg-opacity-10 text-warning fs-5 py-3 px-4">Industrial Zoning</span>
          </div>
        </div>
      </motion.section>

      <Contact />
    </div>
  );
}

export default WeLease;
