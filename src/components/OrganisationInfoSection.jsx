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
            <source
              src="https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e6cb/67434bc3f8cab15f2f07ebba_Company-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="row-content">
          <div className="info-box">
            <div className="info-header">
              <h3>Pan‑India Industrial Parks</h3>
            </div>
            <p>
              Developer and owner of industrial parks, sheds and warehousing space across major
              manufacturing corridors in India.
            </p>
            <div className="extra-content">
              <p>
                Parks are designed for plug‑and‑play operations with clear titles, utilities and
                compliant infrastructure so companies can scale quickly.
              </p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-header">
              <h3>Built‑to‑Suit Expertise</h3>
            </div>
            <p>
              Customised facilities delivered for manufacturers, logistics players and other
              occupiers with specific process and layout needs.
            </p>
            <div className="extra-content">
              <p>
                Projects range from ready industrial sheds to large land parcels tailored for
                future expansion and specialised requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="second-row">
        <div className="second-content">
          <div className="info-box">
            <div className="info-header">
              <h3>End‑to‑End Support</h3>
            </div>
            <p>
              Assistance with government interfaces, approvals and project coordination so clients
              can focus on core operations.
            </p>
          </div>

          <div className="info-box">
            <div className="info-header">
              <h3>Strategic Presence</h3>
            </div>
            <p>
              Locations chosen along key industrial belts and near major cities to optimise access
              to supply chains and talent.
            </p>
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
