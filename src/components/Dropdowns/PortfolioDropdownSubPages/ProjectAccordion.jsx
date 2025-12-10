import React, { useState } from 'react';

const ProjectAccordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [previewSrc, setPreviewSrc] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleImageClick = (event) => {
    const target = event.target;
    if (target && target.tagName === 'IMG' && target.src) {
      setPreviewSrc(target.src);
    }
  };

  const closePreview = () => setPreviewSrc(null);

  return (
    <div className="project-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title || index}
            className={`project-accordion-item${isOpen ? ' open' : ''}`}
          >
            <button
              type="button"
              className="project-accordion-header"
              onClick={() => handleToggle(index)}
            >
              <span className={`project-accordion-icon${isOpen ? ' rotated' : ''}`} />
              <span className="project-accordion-title">{item.title}</span>
            </button>
            {item.content && isOpen && (
              <div className="project-accordion-content" onClick={handleImageClick}>
                {item.content}
                <div
                  className={`project-accordion-decor ${
                    index % 2 === 0
                      ? 'project-accordion-decor-left'
                      : 'project-accordion-decor-right'
                  }`}
                >
                  <div className="decor-box decor-box-primary" />
                  <div className="decor-box decor-box-muted" />
                  <div className="decor-box decor-box-deep" />
                </div>
                <div
                  className={`project-accordion-decor ${
                    index % 3 === 0
                      ? 'project-accordion-decor-left'
                      : 'project-accordion-decor-right'
                  }`}
                >
                  <div className="decor-box decor-box-muted" />
                  <div className="decor-box decor-box-deep" />
                  <div className="decor-box decor-box-primary" />
                </div>
              </div>
            )}
          </div>
        );
      })}
      {previewSrc && (
        <div className="project-image-preview-backdrop" onClick={closePreview} role="button" tabIndex={0} onKeyDown={closePreview}>
          <div className="project-image-preview-dialog">
            <img src={previewSrc} alt="Project preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectAccordion;
