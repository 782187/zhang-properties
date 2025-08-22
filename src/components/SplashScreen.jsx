import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onComplete }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.8,
                    ease: "easeInOut"
                }
            }}
            className="vh-100 w-100 d-flex align-items-center justify-content-center bg-white position-fixed top-0 start-0 z-3"
        >
            {/* Main Content Centered */}
            <motion.div
                className="text-center px-3 px-sm-4"
                style={{ width: '100%', maxWidth: '900px' }}
            >
                {/* Mobile-only divider */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "50px" }}
                    transition={{ duration: 0.5 }}
                    className="d-md-none mx-auto my-4"
                    style={{ height: "2px", backgroundColor: "var(--accent-color)" }}
                />

                <div className="row align-items-center justify-content-center g-3">
                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="col-12 col-md-auto"
                    >
                        <motion.h1
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="fw-bold d-flex flex-column flex-md-row gap-1 justify-content-center"
                            style={{
                                fontSize: "clamp(1.5rem, 6vw, 2rem)",
                                lineHeight: 1.2
                            }}
                        >
                            <span style={{ color: "var(--text-color)" }}>Zhang</span>
                            <span style={{ color: "var(--accent-color)" }}>Properties</span>
                        </motion.h1>
                    </motion.div>

                    {/* Divider for Desktop */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "60px" }}
                        transition={{ duration: 1 }}
                        className="d-none d-md-flex mx-4"
                        style={{
                            width: "2px",
                            backgroundColor: "var(--accent-color)"
                        }}
                    />

                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="col-12 col-md-auto text-center"
                    >
                        <div
                            className="text-muted fw-light mx-auto"
                            style={{
                                maxWidth: "280px",
                                fontSize: '1.3rem',
                                lineHeight: 1.5
                            }}
                        >
                            Building trust,<br />
                            one property at a time.<br />
                            Turning spaces into homes.
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="position-absolute bottom-0 mb-1 mb-sm-1 start-50 translate-middle-x"
            >
                <div className="d-flex align-items-center justify-content-center">
                    {[...Array(3)].map((_, i) => (
                        <motion.span
                            key={i}
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.4, 1, 0.4]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                delay: i * 0.2
                            }}
                            className="mx-1"
                            style={{
                                display: 'inline-block',
                                width: 8,
                                height: 8,
                                backgroundColor: 'var(--accent-color)',
                                borderRadius: '50%'
                            }}
                        />
                    ))}
                </div>
                <div
                    className="text-secondary text-uppercase mt-1 fw-bold"
                    style={{
                        letterSpacing: "0.3em",
                        fontSize: "1rem"
                    }}
                >
                    LOADING
                </div>
            </motion.div>
        </motion.div>
    );
}
