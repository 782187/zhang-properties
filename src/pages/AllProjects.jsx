import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Contact from '../components/Contact';
import { images } from '@assets/media';
import 'bootstrap/dist/css/bootstrap.min.css';

const completedProjects = [
  {
    title: 'Tata Gotion',
    image: images.esrTalegaon2,
    link: '/completed/tata-gotion',
    area: '1.2M Sq.Ft.',
    location: 'Chakan + Sanand',
  },
  {
    title: 'Sany',
    image: images.jadhavwadiOverview,
    link: '/completed/sany',
    area: '350K Sq.Ft.',
    location: 'Chakan',
  },
  {
    title: 'Tata Asal',
    image: images.tataAsal,
    link: '/completed/tata-asal',
    area: '1L Sq.Ft.',
    location: 'Sanand',
  },
  {
    title: 'Tata Toyo Radiator',
    image: images.esrTalegaon2,
    link: '/completed/tata-toyo-radiator',
    area: '3L Sq.Ft.',
    location: 'Hinjewadi',
  },
  {
    title: 'Tata Ficosa',
    image: images.esrTalegaon2,
    link: '/completed/tata-ficosa',
    area: '1L Sq.Ft.',
    location: 'Chakan',
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

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const ProjectCard = ({ project, index }) => (
    <motion.div
        className="col-12 col-sm-6 col-lg-3"
        key={index}
        variants={itemVariants}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
    >
        <Link to={project.link} className="text-decoration-none">
            <div
                className="position-relative w-100 d-flex flex-column"
                style={{
                    overflow: 'hidden',
                    aspectRatio: '3 / 4',
                    borderRadius: '6px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                    backgroundColor: '#b31224',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
            >
                <div
                    className="flex-grow-1 d-flex align-items-center justify-content-center"
                    style={{
                        backgroundColor: '#b31224',
                        color: '#ffffff',
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 700,
                        letterSpacing: '0.4px',
                        fontSize: '1.1rem',
                        textTransform: 'uppercase'
                    }}
                >
                    Zhang Properties
                </div>
                <div
                    style={{
                        backgroundColor: '#2f2f2f',
                        padding: '12px 10px'
                    }}
                >
                    <div
                        className="d-flex flex-column align-items-center text-center"
                        style={{ fontFamily: "'Barlow', sans-serif" }}
                    >
                        <span
                            style={{
                                color: '#fff',
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                letterSpacing: '0.2px'
                            }}
                        >
                            {project.title}
                        </span>
                        {project.location && (
                            <span
                                style={{
                                    color: '#f8f8f8',
                                    fontSize: '0.95rem',
                                    marginTop: '4px'
                                }}
                            >
                                {project.location}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    </motion.div>
);

function AllProjects() {
    return (
        <motion.div
            className="all-projects-page"
            style={{ 
                fontFamily: "'Barlow', sans-serif", 
                color: '#333',
                minHeight: '100vh',
                backgroundColor: '#f8f9fa'
            }}
            initial="hidden"
            animate="show"
            variants={containerVariants}
        >
            {/* Hero Section */}
            <motion.section
                className="py-5"
                style={{
                    background: 'linear-gradient(135deg, #0b0b0c 0%, #111214 100%)',
                    color: '#fff',
                    marginBottom: '3rem'
                }}
                variants={itemVariants}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-8">
                            <motion.h1
                                className="display-4 mb-3"
                                style={{
                                    fontFamily: "'Barlow', sans-serif",
                                    fontWeight: 600,
                                    color: '#fff'
                                }}
                                variants={itemVariants}
                            >
                                Our Industrial Parks
                            </motion.h1>
                            <motion.p
                                className="lead mb-0"
                                style={{
                                    fontFamily: "'Barlow', sans-serif",
                                    color: 'rgba(255,255,255,0.9)',
                                    fontSize: '1.25rem'
                                }}
                                variants={itemVariants}
                            >
                                Empowering precision in processes and people for the perfect product,
                                resulting in an impeccable portfolio.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <div className="container py-5">
                {/* Completed Projects Section */}
                <motion.section
                    className="mb-5"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    whileInView="show"
                >
                    <motion.div
                        className="mb-4"
                        variants={itemVariants}
                    >
                        <h2
                            className="mb-2"
                            style={{
                                fontFamily: "'Barlow', sans-serif",
                                fontWeight: 600,
                                color: '#333',
                                fontSize: '2rem'
                            }}
                        >
                            Completed Projects
                        </h2>
                        <div
                            style={{
                                width: '60px',
                                height: '4px',
                                backgroundColor: '#d61f26',
                                borderRadius: '2px'
                            }}
                        />
                    </motion.div>
                    <div className="row g-4">
                        {completedProjects.map((project, index) => (
                            <ProjectCard 
                                project={project} 
                                index={index} 
                                key={index}
                            />
                        ))}
                    </div>
                </motion.section>

                {/* Available Projects Section */}
                <motion.section
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    whileInView="show"
                >
                    <motion.div
                        className="mb-4"
                        variants={itemVariants}
                    >
                        <h2
                            className="mb-2"
                            style={{
                                fontFamily: "'Barlow', sans-serif",
                                fontWeight: 600,
                                color: '#333',
                                fontSize: '2rem'
                            }}
                        >
                            Available Projects
                        </h2>
                        <div
                            style={{
                                width: '60px',
                                height: '4px',
                                backgroundColor: '#d61f26',
                                borderRadius: '2px'
                            }}
                        />
                    </motion.div>
                    <div className="row g-4">
                        {availableProjects.map((project, index) => (
                            <ProjectCard 
                                project={project} 
                                index={index} 
                                key={index}
                            />
                        ))}
                    </div>
                </motion.section>
            </div>

            <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
            >
                <Contact />
            </motion.div>
        </motion.div>
    );
}

export default AllProjects;

