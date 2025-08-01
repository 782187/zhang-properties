import { motion } from "framer-motion";

const projects = [
  { name: "Tata Gotion", location: "Chakan & Sanand", size: "1.3 Million Sq.ft." },
  { name: "Sany", location: "Chakan", size: "3.25 Lac Sq.ft." },
  { name: "Tata Asal", location: "Sanand", size: "1 Lac Sq.ft." },
  { name: "Mahindra", location: "Chakan", size: "92,000 Sq.ft." },
];

const Projects = () => (
  <section className="bg-gray-100 py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Delivered Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-600">{proj.name}</h3>
            <p>{proj.location}</p>
            <p>{proj.size}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
