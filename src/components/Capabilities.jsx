import React from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '../data/siteContent'

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * i, duration: 0.5 } })
}

const iconMap = {
  build: 'bi-hammer',
  lease: 'bi-building',
  maintain: 'bi-wrench-adjustable'
}

const Capabilities = () => {
  const cards = siteContent.capabilities || []
  return (
    <section className="py-5 py-md-6 font-barlow" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.55))' }}>
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <h2 className="fw-bold display-5 font-barlow" style={{ color: 'var(--text-color)' }}>What We Do</h2>
          <p className="text-secondary fs-5" style={{ color: 'var(--muted-text)' }}>
            Solutions that accelerate your industrial growth
          </p>
        </div>
        <div className="row g-4">
          {cards.map((c, idx) => (
            <div className="col-12 col-md-4" key={c.title}>
              <motion.div
                className="card h-100 bg-dark text-white shadow-sm border-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={idx}
                variants={itemVariants}
                style={{ backgroundColor: 'var(--secondary-color)' }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`bi ${iconMap[c.icon] || 'bi-lightning-charge'} me-2`} style={{ color: 'var(--accent-color)', fontSize: 26 }} />
                    <h5 className="card-title m-0 fs-5 font-barlow" style={{ color: 'var(--text-color)' }}>{c.title}</h5>
                  </div>
                  <p className="card-text fs-5" style={{ color: 'var(--muted-text)' }}>{c.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
