import { motion } from "framer-motion";
import { associations } from "../data/associations";

const Clients = () => (
  <section className="bg-white py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Associations</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {associations.map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-4 rounded-lg shadow hover:bg-blue-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
