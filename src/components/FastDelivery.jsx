import React from 'react';
import { motion } from 'framer-motion';

const PRIMARY_RED = '#d61f26';
const PRIMARY_ACCENT = '#d61f26';
const DARK_SECTION_BG = '#242323ff';
const WHITE_TEXT = '#ffffff';
const HATCHING_COLOR = 'rgba(214, 31, 38, 0.15)';

const FastDelivery = () => {
    return (
        <section
            className="bg-light py-5 overflow-hidden border-0 position-relative"
            style={{
                backgroundColor: "#fdfdfd",
                fontFamily: "'Barlow', sans-serif",
            }}
        >
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
                            ${HATCHING_COLOR} 0px,
                            ${HATCHING_COLOR} 1.5px,
                            transparent 1.5px,
                            transparent 6px
                        )
                    `,
                    backgroundColor: "#ffffff",
                }}
            ></div>

            <div className="container-fluid px-4 mt-5 pt-4">
                <div className="row justify-content-center">
                    <motion.div
                        className="col-lg-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-5">
                            <motion.span
                                className="badge fs-5 mb-3"
                                style={{ backgroundColor: PRIMARY_ACCENT, color: WHITE_TEXT }}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                300 Days Guarantee
                            </motion.span>
                            <motion.h1
                                className="display-4 fw-bold mb-3"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{ color: '#2e2e2e' }}
                            >
                                Your Tomorrow Arrives{" "}
                                <span style={{ color: PRIMARY_ACCENT }}>Faster</span> With Us
                            </motion.h1>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100px" }}
                                transition={{ delay: 0.4 }}
                                className="mx-auto"
                                style={{ height: "4px", backgroundColor: PRIMARY_ACCENT }}
                            />
                        </div>

                        <motion.div
                            className="row g-4 justify-content-center text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6, staggerChildren: 0.2 }}
                        >
                            {[
                                "In the dynamic world of industrial real estate, time is more than money—it's opportunity.",
                                "At Zhang Industrial Property Consultants, we transform visions into reality through speed and precision.",
                                "Advanced precast technology and strategic planning deliver results faster than ever.",
                                "Setting industry benchmarks, not just meeting them.",
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="col-md-6"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <div className="p-4 bg-white rounded shadow-sm h-100">
                                        <p className="lead mb-0" style={{ color: '#555' }}>{item}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="mt-5 py-5 position-relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="mx-3 mx-sm-4 mx-md-5"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    viewport={{ once: true }}
                    style={{
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <video
                        src="./fasterdelivery.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-100"
                        style={{
                            display: "block",
                            objectFit: "cover",
                            height: "700px",
                            border: "none",
                            outline: "none",
                        }}
                    />
                </motion.div>

                <motion.div
                    className="text-center mt-4 px-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
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
                        <button
                            className="btn btn-lg px-4 py-2 fw-bold"
                            style={{
                                backgroundColor: PRIMARY_ACCENT,
                                color: WHITE_TEXT,
                                border: 'none',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#b42023')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_ACCENT)}
                        >
                            Start Your Project Now
                            <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FastDelivery;
