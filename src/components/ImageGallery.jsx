import React, { useState } from 'react';
import '../styles/ImageGallery.css';
import { gallery } from '@assets/media';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const commonAlt = 'Life at Zhang Properties';

  const galleryImages = [
    { id: 1, src: gallery.life1, size: 'large' },
    { id: 2, src: gallery.tataAsal, size: 'small' },
    { id: 3, src: gallery.officeMeeting, size: 'small' },
    { id: 4, src: gallery.tataBuilding, size: 'medium' },
    { id: 5, src: gallery.sokoBuilding, size: 'large' },
    { id: 6, src: gallery.womenTeam, size: 'small' },
    { id: 7, src: gallery.factoryFloor, size: 'wide' },
    { id: 8, src: gallery.boardMeeting, size: 'medium' },
    { id: 9, src: gallery.techTeam, size: 'small' },
    { id: 10, src: gallery.warehouse, size: 'wide' },
    { id: 11, src: gallery.teamLunch, size: 'medium' },
    { id: 12, src: gallery.construction, size: 'large' },
    { id: 13, src: gallery.celebration, size: 'small' }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="image-gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title" style={{color: "gray"}}>Life At Zhang Properties</h2>
          <p className="gallery-subtitle">Experience our vibrant work culture and dynamic environment</p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className={`gallery-item ${image.size}`}
              onClick={() => openLightbox(image)}
            >
              <div className="image-wrapper">
                <img 
                  src={image.src} 
                  alt={commonAlt}
                  loading="lazy"
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3 className="image-title">{commonAlt}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img 
              src={selectedImage.src} 
              alt={commonAlt}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <h3>{commonAlt}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
