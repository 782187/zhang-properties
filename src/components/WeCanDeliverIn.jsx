import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import Contact from './Contact';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const locations = [
  { id: 1, name: "Chakan", position: [18.7603, 73.8530], category: "Maharashtra" },
  { id: 2, name: "Talegaon", position: [18.7190, 73.6756], category: "Maharashtra" },
  { id: 3, name: "Wagholi", position: [18.5802, 73.9866], category: "Maharashtra" },
  { id: 4, name: "Fulgaon", position: [18.6700, 74.1300], category: "Maharashtra" },
  { id: 5, name: "Ranjangaon", position: [18.65, 74.26], category: "Maharashtra" },
  { id: 6, name: "Sanand", position: [22.991, 72.381], category: "Gujarat" },
  { id: 7, name: "Surat", position: [21.1702, 72.8311], category: "Gujarat" },
  { id: 8, name: "Gujarat", position: [22.3094, 72.1362], category: "Gujarat" },
  { id: 9, name: "Oragadam", position: [12.9119, 79.9244], category: "Tamil Nadu" },
  { id: 10, name: "Sriperumbudur", position: [12.963, 79.948], category: "Tamil Nadu" },
  { id: 11, name: "Chennai", position: [13.0827, 80.2707], category: "Tamil Nadu" },
  { id: 12, name: "Bangalore", position: [12.9716, 77.5946], category: "Karnataka" },
  { id: 13, name: "Karnataka", position: [13.0072, 76.0967], category: "Karnataka" },
  { id: 14, name: "Noida", position: [28.5355, 77.3910], category: "Delhi NCR" },
  { id: 15, name: "Gurugram", position: [28.4595, 77.0266], category: "Delhi NCR" },
  { id: 16, name: "Jamshedpur", position: [22.8046, 86.2029], category: "Jharkhand" },
  { id: 17, name: "Pan India", position: [20.5937, 78.9629], category: "National" }
];

const categoryColors = {
  "Maharashtra": "#d61f26",
  "Gujarat": "#d61f26",
  "Tamil Nadu": "#d61f26",
  "Karnataka": "#d61f26",
  "Delhi NCR": "#d61f26",
  "Jharkhand": "#d61f26",
  "National": "#d61f26"
};

const WeCanDeliverIn = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const mapRef = useRef(null);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLocationClick = (location) => {
    setActiveLocation(location);
    if (mapRef.current && location.position) {
      mapRef.current.flyTo(location.position, 12, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }
  };

  const getMarkerIcon = (isActive, category) => {
    const color = categoryColors[category] || '#d61f26';
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${isActive ? '#d61f26' : color}; width: ${isMobile ? '24px' : '28px'}; height: ${isMobile ? '24px' : '28px'}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 0 0 ${isActive ? '4px' : '3px'} ${isActive ? 'rgba(214,31,38,0.3)' : color + '80'}, 0 2px 8px rgba(0,0,0,0.2); border: 2px solid white; transition: all 0.3s ease; transform: ${isActive ? 'scale(1.2)' : 'scale(1)'};"></div>`,
      iconSize: isMobile ? [24, 24] : [28, 28],
      iconAnchor: isMobile ? [12, 12] : [14, 14],
      popupAnchor: [0, -14]
    });
  };

  const filteredLocations = selectedCategory === "All"
    ? locations
    : locations.filter(loc => loc.category === selectedCategory);

  const categories = ["All", ...new Set(locations.map(loc => loc.category))];

  return (
    <div className="min-vh-100 overflow-hidden" style={{ fontFamily: "'Barlow', sans-serif", color: '#ffffff' }}>
      <section className="position-relative min-vh-100 d-flex align-items-center overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-100 h-100"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'brightness(0.8) contrast(1.2) saturate(1.1)',
              minWidth: '100%',
              minHeight: '100%'
            }}
          >
            <source src="https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e6cb/67434bc3f8cab15f2f07eb5b_Home_About%20(1)-transcode.mp4" type="video/mp4" />
          </video>
          <div className="position-absolute w-100 h-100" style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 100%)",
            zIndex: 1
          }} />
        </div>

        <div className="container position-relative" style={{ zIndex: 2, paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10">
              <motion.span
                style={{
                  color: "#ffffffb3",
                  fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  borderTop: "2px solid #d61f26",
                  borderBottom: "2px solid #d61f26",
                  padding: "8px 20px",
                  marginBottom: "1.5rem",
                  display: "inline-block",
                  fontWeight: "400"
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Our Network
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h1
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.8rem)",
                    lineHeight: "1.3",
                    color: "#ffffff",
                    fontWeight: "400",
                    marginBottom: "1.5rem",
                    textShadow: '0 3px 10px rgba(0,0,0,0.4)'
                  }}
                >
                  Strategic Industrial Presence
                  <span className="d-block mt-2" style={{ color: '#d61f26', fontWeight: '400' }}>Across India's Key Growth Corridors</span>
                </h1>
                <p style={{
                  color: '#ffffffb3',
                  maxWidth: '700px',
                  margin: '0 auto 2.5rem',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: '1.6'
                }}>
                  Strategically located facilities across major industrial hubs, delivering end-to-end real estate solutions.
                </p>
              </motion.div>

              <motion.div
                className="d-flex flex-wrap justify-content-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="btn px-4 py-2"
                    style={{
                      backgroundColor: selectedCategory === category ? '#d61f26' : 'rgba(255,255,255,0.1)',
                      color: selectedCategory === category ? 'white' : '#ffffffb3',
                      border: `2px solid ${selectedCategory === category ? '#d61f26' : 'rgba(255,255,255,0.3)'}`,
                      borderRadius: '30px',
                      fontWeight: '400',
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: "#f8f9fa" }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50px",
          background: `
            repeating-linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.3) 0px,
              rgba(0, 0, 0, 0.17) 1.5px,
              transparent 1.5px,
              transparent 6px
            )
          `,
          backgroundColor: "#ffffff",
          zIndex: 2,
        }}></div>

        <div className="container position-relative" style={{ zIndex: 3, marginTop: '30px' }}>
          <div className="row g-4">
            <div className={`col-12 ${isTablet ? 'order-2' : 'order-1'}`}>
              <div className="map-container rounded-4 overflow-hidden shadow-lg" style={{
                height: isMobile ? '400px' : isTablet ? '450px' : '550px',
                width: '100%'
              }}>
                <MapContainer
                  center={[20.5937, 78.9629]}
                  zoom={5}
                  style={{ height: '100%', width: '100%' }}
                  whenCreated={mapInstance => { mapRef.current = mapInstance; }}
                  scrollWheelZoom={false}
                  wheelDebounceTime={100}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; OpenStreetMap contributors'
                  />
                  {filteredLocations.map((location) => (
                    <Marker
                      key={location.id}
                      position={location.position}
                      icon={getMarkerIcon(activeLocation?.id === location.id, location.category)}
                      eventHandlers={{
                        click: () => handleLocationClick(location)
                      }}
                    >
                      <Popup>
                        <div style={{ fontFamily: "'Barlow', sans-serif", minWidth: '140px', color: '#1a1a1a' }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '6px'
                          }}>
                            <div style={{
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              backgroundColor: '#d61f26'
                            }}></div>
                            <h6 style={{
                              color: '#d61f26',
                              fontWeight: '400',
                              margin: 0,
                              fontSize: '0.95rem'
                            }}>
                              {location.name}
                            </h6>
                          </div>
                          <p style={{
                            color: '#666',
                            fontSize: '0.85rem',
                            margin: '4px 0 0 0',
                            fontWeight: '400'
                          }}>
                            {location.category}
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
            <div className={`col-12 ${isTablet ? 'order-1 mb-4' : 'order-2'}`}>
              <div className="h-100">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="m-0" style={{
                    color: '#1a1a1a',
                    fontWeight: '400',
                    fontSize: isMobile ? '1.5rem' : '1.75rem'
                  }}>
                    Our Locations
                  </h2>
                  <span style={{
                    color: '#d61f26',
                    fontWeight: '400',
                    fontSize: '0.9rem',
                    backgroundColor: 'rgba(214,31,38,0.1)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(214,31,38,0.2)'
                  }}>
                    {filteredLocations.length} locations
                  </span>
                </div>

                <div className="row g-3">
                  {filteredLocations.map((location) => (
                    <div key={location.id} className="col-6 col-md-4 col-lg-6">
                      <motion.div
                        className="h-100 p-3 rounded-3 location-card"
                        style={{
                          backgroundColor: activeLocation?.id === location.id ? 'rgba(214,31,38,0.08)' : '#ffffff',
                          border: `1px solid ${activeLocation?.id === location.id ? '#d61f26' : '#e9ecef'}`,
                          cursor: 'pointer',
                          height: '85px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                        onClick={() => handleLocationClick(location)}
                        whileHover={{
                          y: -4,
                          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                          backgroundColor: activeLocation?.id === location.id ? 'rgba(214,31,38,0.12)' : '#f8f9fa'
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '3px',
                          backgroundColor: '#d61f26'
                        }}></div>

                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="m-0 mb-1" style={{
                              fontSize: isMobile ? '0.9rem' : '1rem',
                              fontWeight: '400',
                              color: activeLocation?.id === location.id ? '#d61f26' : '#1a1a1a',
                              lineHeight: '1.2'
                            }}>
                              {location.name}
                            </h6>
                            <span style={{
                              fontSize: '0.75rem',
                              color: '#666',
                              fontWeight: '400'
                            }}>
                              {location.category}
                            </span>
                          </div>

                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(214,31,38,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#d61f26',
                            fontWeight: '400',
                            fontSize: '0.8rem',
                            border: '1px solid rgba(214,31,38,0.2)'
                          }}>
                            {location.id}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />

      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <motion.span
              style={{
                color: "#d61f26",
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontWeight: "400",
                display: "inline-block",
                marginBottom: "1rem"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Our Solutions
            </motion.span>
            <h2 className="mb-3" style={{
              color: '#1a1a1a',
              fontWeight: '400',
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              lineHeight: '1.3'
            }}>
              Comprehensive Industrial Solutions
            </h2>
            <p style={{
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
              lineHeight: '1.6'
            }}>
              Tailored industrial real estate services designed for growth and efficiency
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                title: 'Lease',
                description: 'Flexible industrial space leasing with customized terms'
              },
              {
                title: 'Build To Suit',
                description: 'Custom-built facilities designed for your operations'
              },
              {
                title: 'Build Operate',
                description: 'Complete construction to operations management'
              },
              {
                title: 'Transform',
                description: 'Modernization and revitalization of existing spaces'
              }
            ].map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-3">
                <motion.div
                  className="h-100 p-4 text-center bg-white rounded-3 shadow-sm"
                  whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{
                    height: '220px',
                    border: '1px solid #e9ecef'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(214,31,38,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: '#d61f26',
                    fontSize: '1.5rem',
                    fontWeight: '400',
                    border: '1px solid rgba(214,31,38,0.2)'
                  }}>
                    {index + 1}
                  </div>
                  <h4 style={{
                    color: '#1a1a1a',
                    fontWeight: '400',
                    fontSize: '1.25rem',
                    marginBottom: '0.75rem'
                  }}>
                    {service.title}
                  </h4>
                  <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    marginBottom: 0
                  }}>
                    {service.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .leaflet-container {
          font-family: 'Barlow', sans-serif !important;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 8px !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .leaflet-popup-content {
          margin: 12px 16px !important;
          font-size: 0.9rem;
        }
        .leaflet-popup-tip {
          box-shadow: none !important;
        }
        .map-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .leaflet-touch .leaflet-control-layers, 
        .leaflet-touch .leaflet-bar {
          border: 1px solid rgba(0,0,0,0.1) !important;
        }
        .location-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        @media (max-width: 767.98px) {
          .map-container {
            height: 400px !important;
            border-radius: 12px !important;
          }
          .location-card {
            height: 75px !important;
          }
          h1 {
            font-size: 2rem !important;
          }
          section {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
        }
        @media (min-width: 768px) and (max-width: 991.98px) {
          .map-container {
            height: 450px !important;
          }
          .location-card {
            height: 80px !important;
          }
        }
        @media (min-width: 992px) {
          .map-container {
            height: 550px !important;
          }
          .location-card {
            height: 85px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WeCanDeliverIn;