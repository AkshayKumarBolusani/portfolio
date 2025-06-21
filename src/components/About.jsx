import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './About.scss';

const About = () => {
  const [counters, setCounters] = useState({
    websites: 0,
    projects: 0,
    technologies: 0,
    certificates: 0,
  });

  useEffect(() => {
    // Start animation immediately
    const targetValues = {
      websites: portfolioData.stats[0].value,
      projects: portfolioData.stats[1].value,
      technologies: portfolioData.stats[2].value,
      certificates: portfolioData.stats[3].value,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        websites: Math.floor(targetValues.websites * progress),
        projects: Math.floor(targetValues.projects * progress),
        technologies: Math.floor(targetValues.technologies * progress),
        certificates: Math.floor(targetValues.certificates * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    "React and modern web development",
    "Android Studio and mobile app development",
    "WordPress and CMS development",
    "UI/UX design and graphic design",
    "Data analytics and problem solving",
    "Continuous learning and emerging technologies"
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better and discover what drives my passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="about-content">
          {/* Left Column - Image and Bio */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-image-container">
              <div className="about-image glass">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="about-avatar"
                />
                <div className="image-overlay" />
              </div>
              <div className="floating-elements">
                <motion.div
                  className="floating-element"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="floating-element"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>

            <div className="about-bio glass-card">
              <h3>Who I Am</h3>
              <p>{portfolioData.personal.bio}</p>
              
              <div className="about-highlights">
                <h4>Key Highlights</h4>
                <ul>
                  {highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats and Info */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Animated Counters */}
            <div className="about-stats glass-card">
              <h3>My Journey in Numbers</h3>
              <div className="stats-grid">
                {Object.entries(counters).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="stat-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="stat-number">
                      {value}
                      {portfolioData.stats[index]?.suffix}
                    </div>
                    <div className="stat-label">
                      {portfolioData.stats[index]?.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="about-info glass-card">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">{portfolioData.personal.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Title:</span>
                  <span className="info-value">{portfolioData.personal.title}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">{portfolioData.personal.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <a className="info-value info-link" href={`mailto:${portfolioData.personal.email}`}>{portfolioData.personal.email}</a>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone:</span>
                  <a className="info-value info-link" href={`tel:${portfolioData.personal.phone}`}>{portfolioData.personal.phone}</a>
                </div>
                <div className="info-item">
                  <span className="info-label">Websites:</span>
                  <span className="info-value">{portfolioData.stats[0].value}+ Developed</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="about-languages glass-card">
              <h3>Languages</h3>
              <div className="languages-list">
                {portfolioData.languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    className="language-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <span className="language-name">{lang.name}</span>
                    <span className="language-proficiency">{lang.proficiency}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <motion.div
              className="about-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Add CV download functionality here
                  alert('CV download functionality can be added here');
                }}
              >
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 