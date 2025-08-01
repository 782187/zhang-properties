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
                y: -100,
                transition: { duration: 0.8, ease: "easeInOut" },
            }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center h-screen bg-white relative z-50"
        >
            {/* Animated Vertical Line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "70px" }}
                transition={{ duration: 1 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-[var(--accent-color)]"
            />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-4 w-full max-w-4xl px-4"
            >
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <div className="flex-1 flex justify-end pr-6">
                        <motion.h1
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="text-3xl font-bold tracking-tight flex gap-1"
                        >
                            <span className="text-[var(--text-color)]">Zhang</span>
                            <span className="text-[var(--accent-color)]">Properties</span>
                        </motion.h1>
                    </div>

                    <div className="w-[50px]" />

                    {/* Slogan */}
                    <div className="flex-1 flex justify-start pl-6 text-left text-gray-600 text-xxl font-light leading-snug">
                        Building trust,<br />
                        one property at a time.<br />
                        Turning spaces into homes.
                    </div>
                </div>
            </motion.div>

            {/* Loading Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 text-sm text-gray-400 tracking-[0.5em]" // <--- more spacing
            >
                LOADING . . .
            </motion.p>

        </motion.div>
    );
}
