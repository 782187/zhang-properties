import React from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '../data/siteContent'

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5 }
  })
}

const iconMap = {
  build: 'bi-hammer',
  lease: 'bi-building',
  maintain: 'bi-wrench-adjustable'
}

const PRIMARY_RED = '#d61f26'
const DARK_TEXT = '#2e2e2e'
const BG_COLOR_LIGHT = '#f9f9f9'
const BG_COLOR_DARK = '#f2f2f2'

const Capabilities = () => {
  const cards = siteContent.capabilities || [
    { title: "Design & Build", description: "From concept to completion, we manage the entire lifecycle of industrial property development.", icon: "build" },
    { title: "Leasing & Sales", description: "Expert consultation for acquiring, selling, or leasing industrial and commercial spaces.", icon: "lease" },
    { title: "Facilities Maintenance", description: "Comprehensive maintenance services to ensure your properties operate efficiently 24/7.", icon: "maintain" },
  ]

  return (
    <section
      className="py-5 py-md-6 font-barlow"
      style={{
        fontFamily: "'Barlow', sans-serif",
        background: `
          repeating-linear-gradient(
            45deg,
            ${BG_COLOR_LIGHT},
            ${BG_COLOR_LIGHT} 10px,
            ${BG_COLOR_DARK} 10px,
            ${BG_COLOR_DARK} 20px
          )
        `,
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2
            className="fw-bold display-6 font-barlow"
            style={{ color: DARK_TEXT }}
          >
            What We Do
          </h2>
          <div
            style={{
              height: "3px",
              width: "30px",
              backgroundColor: PRIMARY_RED,
              margin: "10px auto 20px auto",
            }}
          ></div>
          <p
            className="fs-5"
            style={{ color: '#555' }}
          >
            Solutions that accelerate your industrial growth
          </p>
        </div>

        <div className="row g-4">
          {cards.map((c, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={c.title}>
              <motion.div
                className="card h-100 border-0 shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={idx}
                variants={itemVariants}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i
                      className={`bi ${iconMap[c.icon] || 'bi-lightning-charge'} me-3`}
                      style={{
                        color: PRIMARY_RED,
                        fontSize: 28
                      }}
                    />
                    <h5
                      className="card-title m-0 fs-5 fw-semibold font-barlow"
                      style={{ color: DARK_TEXT }}
                    >
                      {c.title}
                    </h5>
                  </div>
                  <p
                    className="card-text fs-6 lh-base"
                    style={{ color: '#555' }}
                  >
                    {c.description}
                  </p>
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