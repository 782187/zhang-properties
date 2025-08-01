import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-blue-400 mb-4"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Zhang Industrial Property Consultants
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        28+ years of Industrial Real Estate Expertise: Warehousing, Logistics, Industrial Parks, and Land – PAN India & Dubai.
      </motion.p>
    </div>
  );
};

export default Hero;
