import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Calendar, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Certificates.scss';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const certificateRefs = useRef({});
  const scrollContainerRef = useRef(null);

  const certificates = portfolioData.certificates;
  const duplicatedCertificates = [...certificates, ...certificates];

  // Auto-scrolling effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollStep = 2;
    const scrollDelay = 12;

    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
    }, scrollDelay);

    return () => clearInterval(interval);
  }, []);



  const openModal = (certificate, index) => {
    const certificateElement = certificateRefs.current[`${certificate.id}-${index}`];
    if (certificateElement) {
      const rect = certificateElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      const centerX = rect.left + rect.width / 2 + scrollLeft;
      const centerY = rect.top + rect.height / 2 + scrollTop;

      setModalPosition({ x: centerX, y: centerY });
    }

    setSelectedCertificate(certificate);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Certificates & Achievements</h2>
          <p>Professional certifications and achievements that showcase my expertise</p>
        </motion.div>

        <div className="certificates-container">

          <div className="certificates-scroll" ref={scrollContainerRef}>
            {duplicatedCertificates.map((certificate, index) => (
              <motion.div
                key={`${certificate.id}-${index}`}
                className="certificate-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
                onClick={() => openModal(certificate, index)}
                ref={(el) => (certificateRefs.current[`${certificate.id}-${index}`] = el)}
              >
                <div className="certificate-image">
                  <img src={certificate.image} alt={certificate.name} />
                  <div className="certificate-overlay">
                    <Award size={24} />
                    <span>View Details</span>
                  </div>
                </div>

                <div className="certificate-content">
                  <h3>{certificate.name}</h3>
                  <div className="certificate-meta">
                    <div className="meta-item">
                      <Building size={16} />
                      <span>{certificate.issuer}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{certificate.date}</span>
                    </div>
                  </div>
                  <p>{certificate.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCertificate && (
          <motion.div
            className="certificate-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="certificate-modal"
              initial={{
                opacity: 0,
                scale: 0.8,
                x: modalPosition.x - window.innerWidth / 2,
                y: modalPosition.y - window.innerHeight / 2,
              }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: modalPosition.x - window.innerWidth / 2,
                y: modalPosition.y - window.innerHeight / 2,
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>

              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedCertificate.image} alt={selectedCertificate.name} />
                </div>

                <div className="modal-details">
                  <h2>{selectedCertificate.name}</h2>

                  <div className="modal-meta">
                    <div className="meta-item">
                      <Building size={20} />
                      <span>
                        <strong>Issuer:</strong> {selectedCertificate.issuer}
                      </span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={20} />
                      <span>
                        <strong>Date:</strong> {selectedCertificate.date}
                      </span>
                    </div>
                  </div>

                  <div className="modal-description">
                    <h3>Description</h3>
                    <p>{selectedCertificate.description}</p>
                  </div>

                  <div className="modal-skills">
                    <h3>Skills Learned</h3>
                    <div className="skills-grid">
                      {selectedCertificate.skillsLearned.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-tasks">
                    <h3>Tasks Completed</h3>
                    <ul>
                      {selectedCertificate.tasksCompleted.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-actions">
                    <a
                      href={selectedCertificate.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={20} />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
