import React, { useState } from 'react';

const ProjectAccordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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
              <span className={`project-accordion-icon${isOpen ? ' rotated' : ''}`}>
                
              </span>
              <span className="project-accordion-title">{item.title}</span>
            </button>
            {item.content && isOpen && (
              <div className="project-accordion-content">
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
    </div>
  );
};

export default ProjectAccordion;
