import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Tata-Gotion - Chakan',
    image: '/contact.jpg',
    link: '/dropdown/tata-gotion',
  },
  {
    title: 'Sany - Chakan',
    image: '/contact.jpg',
    link: '/dropdown/sany-chakan',
  },
  {
    title: 'Tata Asal - Sanand',
    image: '/contact.jpg',
    link: '/dropdown/tata-asal',
  },
];

const PortfolioDropdown = ({ closeDropdown }) => {
  return (
    <div
      className="bg-white shadow p-4 p-md-5 mt-3"
      style={{ zIndex: 999, position: 'relative', width: '100%' }}
    >
      <div className="row">
        {/* Left content section */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h4 className="mb-3">Our industrial parks</h4>
          <p className="text-muted">
            Empowering precision in processes and people for the perfect product,
            resulting in an impeccable portfolio.
          </p>
          <button className="btn btn-danger d-inline-flex align-items-center mt-3">
            EXPLORE OUR PROJECTS <FaArrowRight className="ms-2" />
          </button>
        </div>

        {/* Right card grid */}
        <div className="col-12 col-md-8">
          <div className="row">
            {projects.map((project, index) => (
              <Link onClick={closeDropdown} to={project.link} className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
                <div className="card border-0 position-relative h-100">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    style={{
                      height: '180px',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                  <div
                    className="card-body bg-white position-absolute bottom-0 start-0 w-100 d-flex justify-content-between align-items-center"
                    style={{
                      padding: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <span className="fw-medium text-truncate" style={{ maxWidth: '80%' }}>
                      {project.title}
                    </span>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDropdown;
