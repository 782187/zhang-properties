import React from 'react';
import '../styles/OrganisationInfoSection.css';
import AboutUsSection from './AboutUsSection';
import { images } from '@assets/media';

const OrganisationInfoSection = () => {
  return (
    <div className="organisation-section">
      <div className="first-row">
        <div className="small-video">
          <video autoPlay muted loop playsInline>
            <source src="https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e6cb/67434bc3f8cab15f2f07ebba_Company-transcode.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="row-content">
          <div className="info-box">
            <div className="info-header">
              <h3>Founded in 2017</h3>
            </div>
            <p>Ahmedabad headquartered industrial real estate firm dedicated towards developing modern industrial parks.</p>
            <div className="extra-content">
              <p>We create sustainable industrial ecosystems with an emphasis on productivity and employee wellbeing.</p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-header">
              <h3>25 Leading Occupiers</h3>
            </div>
            <p>Asset management across diverse sectors including manufacturing, logistics, engineering and technology.</p>
            <div className="extra-content">
              <p>Fortune 500 companies and fast-growing brands form part of our core occupier portfolio.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="second-row">
        <div className="second-content">
          <div className="info-box">
            <div className="info-header">
              <h3>Strategic Locations</h3>
            </div>
            <p>Industrial parks located near transportation hubs to ensure seamless connectivity and reduce operational costs.</p>
          </div>

          <div className="info-box">
            <div className="info-header">
              <h3>Sustainable Practices</h3>
            </div>
            <p>Energy-efficient systems and green construction standards integrated across all developments.</p>
          </div>
        </div>

        <div className="large-image">
          <img 
            src={images.orgInfo} 
            alt="Industrial park with modern architecture" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganisationInfoSection;

export { AboutUsSection };