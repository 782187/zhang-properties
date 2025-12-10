import React from 'react';
import '../styles/AboutUsSection.css';
import { images } from '@assets/media';

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="background-overlay"></div>
      <div className="content-container">
        <div className="text-content">
          <h2 className="section-title" style={{color: "white"}}>DREAM IT. DESIGN IT. DEVELOP IT.</h2>
          <div className="description-text">
            <p>
              At Zhang Properties, we transform visions into reality. Our comprehensive approach to industrial real estate development ensures that every project meets the highest standards of quality, functionality, and sustainability.
            </p>
            <p>
              With years of expertise in the industry, we understand the unique needs of modern businesses and create spaces that foster growth, innovation, and success. Our industrial parks are designed to provide the perfect balance between operational efficiency and employee wellbeing.
            </p>
            <p>
              From strategic location selection to cutting-edge design and sustainable construction practices, we handle every aspect of the development process. Our commitment to excellence has made us a trusted partner for leading companies across various sectors.
            </p>
          </div>
        </div>
        
        <div className="video-container">
          <div className="video-wrapper">
            <video 
              controls
              poster={images.aboutUsThumbnail}
              className="about-video"
            >
              <source src="https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e6cb/67434bc3f8cab15f2f07ebba_Company-transcode.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
