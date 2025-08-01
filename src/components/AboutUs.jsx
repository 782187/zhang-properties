import { motion } from "framer-motion";

const AboutUs = () => (
  <section className="bg-white py-20 px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-700">About Us</h2>
      <p className="text-lg leading-relaxed">
        Zhang Industrial Property Consultants (ZIPC) is a leading real estate consultancy firm
        specializing in industrial, logistics, and commercial properties. Managed by Zhang Yan Qun
        & Hemant Khatri, ZIPC provides leasing/sale services across India and Dubai, with
        properties ranging from 5,000 to 50,000 sq.m.
      </p>
    </motion.div>
  </section>
);

export default AboutUs;
