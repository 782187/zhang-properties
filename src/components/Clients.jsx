import { motion } from "framer-motion";
import { associations } from "../data/associations";

const Clients = () => (
  <section className="py-5 bg-light" style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)' }}>
    <div className="container">
      <div className="text-center mb-5">
        <motion.h2 
          className="display-4 fw-bold mb-4 text-warning"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Esteemed Associations
        </motion.h2>
        <motion.div
          className="mx-auto bg-gradient mb-4"
          style={{ 
            height: '4px', 
            width: '100px',
            background: 'linear-gradient(90deg, #f09d0dfrgba(250, 207, 132, 1)dff)',
            borderRadius: '2px'
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
        <motion.p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: '700px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We maintain strong partnerships with leading industry organizations to deliver exceptional real estate services
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
              ease: "easeOut"
            }}
          >
            <motion.div
              className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden position-relative"
              whileHover={{ 
                y: -10,
                boxShadow: '0 12px 20px rgba(253, 125, 13, 0.55)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-body p-4">
                <div className="d-flex align-items-start">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-4">
                    <div className="bg-warning bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '60px', height: '60px' }}>
                      <i className="bi bi-building fs-3 text-warning"></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="card-title fw-bold mb-1">
                      {association.split(' - ')[0]}
                    </h5>
                    <p className="card-text text-muted mb-0">
                      {association.split(' - ')[1]}
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

export default Clients;