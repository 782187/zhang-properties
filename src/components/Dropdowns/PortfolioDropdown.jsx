import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { images } from '@assets/media';

const completedProjects = [
  {
    title: 'Tata Gotion',
    image: images.tataGotion,
    link: '/completed/tata-gotion',
  },
  {
    title: 'Sany',
    image: images.sanyChakan,
    link: '/completed/sany',
  },
  {
    title: 'Tata Asal',
    image: images.tataAsal,
    link: '/completed/tata-asal',
  },
  {
    title: 'Tata Toyo Radiator',
    image: images.esrTalegaon2,
    link: '/completed/tata-toyo-radiator',
  },
  {
    title: 'Tata Ficosa',
    image: images.tataFicosa,
    link: '/completed/tata-ficosa',
  },
];

const availableProjects = [
  {
    title: 'ESR Talegaon B05',
    image: images.esrTalegaon2,
    link: '/dropdown/tata-gotion',
  },
  {
    title: 'SOVEREIGN INFRA STEELS PVT. LTD.',
    image: images.jadhavwadiOverview,
    link: '/dropdown/sany-chakan',
  },
  {
    title: 'Tata Asal - Sanand',
    image: images.tataAsal,
    link: '/dropdown/tata-asal',
  },
];

const PortfolioDropdown = ({ closeDropdown, mobile, closeMobileNavbar }) => {
  const handleLinkClick = () => {
    if (closeDropdown) {
      closeDropdown();
    }

    if (mobile && closeMobileNavbar) {
      closeMobileNavbar();
    }
  };

  const ProjectCard = ({ project, index }) => (
    <div className="col-12 col-sm-6 col-lg-4" key={index}>
      <Link
        onClick={handleLinkClick}
        to={project.link}
        className="text-decoration-none"
      >
        <div
          className="position-relative w-100"
          style={{
            overflow: 'hidden',
            aspectRatio: '1 / 1',
            maxHeight: '250px'
          }}
        >
          <div
            className="w-100 h-100"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)' }}
          />
          <div
            className="position-absolute bottom-0 start-0 end-0 d-flex justify-content-start p-2"
          >
            <div
              className="d-flex align-items-center shadow-sm"
              style={{
                backgroundColor: 'rgba(255,255,255,0.98)',
                borderRadius: '6px',
                padding: '8px 12px',
                maxWidth: '88%',
              }}
            >
              <span className="fw-medium text-truncate" style={{ color: '#111', maxWidth: 'calc(100% - 22px)', fontFamily: "'Barlow', sans-serif" }}>
                {project.title}
              </span>
              <FaArrowRight className="ms-2" style={{ flex: '0 0 auto' }} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div
      className="bg-white shadow p-3 p-md-4 mt-3"
      style={{ zIndex: 999, position: 'relative', width: '100%' }}
    >
      <div className="container-fluid">
        <div className="row align-items-start g-3 mb-3">
          <div className="col-12 col-lg-3">
            <h4 className="mb-2 mb-lg-0" style={{ fontWeight: 600, fontFamily: "'Barlow', sans-serif", color: '#333' }}>Our industrial parks</h4>
          </div>
          <div className="col-12 col-lg-6">
            <p className="text-muted mb-0" style={{ lineHeight: 1.6, fontFamily: "'Barlow', sans-serif" }}>
              Empowering precision in processes and people for the perfect product,
              resulting in an impeccable portfolio.
            </p>
          </div>
          <div className="col-12 col-lg-3 d-flex justify-content-lg-end">
            <div
              style={{
                position: "relative",
                display: "inline-block",
                background: "repeating-linear-gradient(45deg, #fff, #fff 5px, #d1d1d1 5px, #d1d1d1 6px)",
                padding: "12px",
                border: "1px solid #d1d1d1",
                boxSizing: "content-box",
              }}
            >
              <Link
                to="/all-projects"
                onClick={handleLinkClick}
                className="btn btn-danger d-inline-flex align-items-center"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                EXPLORE OUR PROJECTS <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Show only first 3 completed projects by default */}
        <div className="mb-4">
          <h5 className="mb-3" style={{ fontWeight: 600, color: '#333', fontFamily: "'Barlow', sans-serif" }}>Completed Projects</h5>
          <div className="row g-3">
            {completedProjects.slice(0, 3).map((project, index) => (
              <ProjectCard project={project} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDropdown;