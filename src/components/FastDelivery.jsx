import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const FastDelivery = () => {
    return (
        <section className="bg-light py-5 overflow-hidden border border-5">
            <div className="container">
                <div className="row justify-content-center">
                    <motion.div
                        className="col-lg-10 col-xl-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-5">
                            <motion.span
                                className="badge bg-warning text-dark fs-5 mb-3"
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
                            >
                                Your Tomorrow Arrives <span className="text-warning">Faster</span> With Us
                            </motion.h1>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100px' }}
                                transition={{ delay: 0.4 }}
                                className="mx-auto bg-warning"
                                style={{ height: '4px' }}
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
                                "Setting industry benchmarks, not just meeting them."
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="col-md-6"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <div className="p-4 bg-white rounded shadow-sm h-100">
                                        <p className="lead mb-0">{item}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="mt-5 py-5 bg-dark"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <motion.h2
                                className="text-white mb-4"
                                initial={{ y: -20 }}
                                whileInView={{ y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                See Our Process in Action
                            </motion.h2>
                            <motion.div
                                className="ratio ratio-16x9"
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", damping: 15 }}
                            >
                                <video
                                    src="./fasterdelivery.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="rounded shadow-lg w-100 h-100 object-fit-cover"
                                />
                            </motion.div>
                            <motion.div
                                className="mt-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <button className="btn btn-warning btn-lg px-4 py-2 fw-bold text-white">
                                    Start Your Project Now
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FastDelivery;