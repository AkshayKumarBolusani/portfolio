import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './About.scss';
import { Mail, Phone } from 'lucide-react';

const About = () => {
  const highlights = [
    "React and modern web development",
    "Android Studio and mobile app development",
    "WordPress and CMS development",
    "UI/UX design and graphic design",
    "Data analytics and problem solving",
    "Continuous learning and emerging technologies"
  ];

  return (
    <>
      <section className="about section" id="about">
        <meta name="description" content="Learn more about Akshay Kumar Bolusani (Bolusani Akshay Kumar, Bolusani Akshay, Akshay Bolusani), his background, skills, and achievements." />
        <meta name="keywords" content="Akshay Kumar Bolusani, Bolusani Akshay Kumar, Bolusani Akshay, Akshay Bolusani, about, biography, developer, web developer, software engineer" />
        <link rel="canonical" href="https://akshaybolusani-portfolio.vercel.app/#about" />
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
            Get to know me better and discover what drives my passion for creating exceptional digital experiences.</p>
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
                    alt="Akshay Kumar Bolusani - Profile"
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
              {/* Personal Information */}
              <div className="personal-info">
                <div className="info-header">
                  <h3>Personal Information</h3>
                </div>
                
                <div className="info-grid">
                  <div className="info-item name-highlight">
                    <span className="info-label">Name:</span>
                    <span className="info-value highlighted-name">{portfolioData.personal.name}</span>
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
                    <a href={`mailto:${portfolioData.personal.email}`} className="contact-link">
                      {portfolioData.personal.email}
                    </a>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone:</span>
                    <a href={`tel:${portfolioData.personal.phone}`} className="contact-link">
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div> {/* close info-grid */}
              </div> {/* close personal-info */}

              {/* Languages Section */}
              <div className="about-languages glass-card">
                <h3>Languages</h3>
                <div className="languages-list">
                  {portfolioData.languages.map((lang, index) => (
                    <div className="language-item" key={lang.name}>
                      <span className="language-name">{lang.name}</span>
                      <span className="language-proficiency">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div> {/* close about-right */}
          </div> {/* close about-content */}
        </div> {/* close container */}
      </section>
    </>
  );
};

export default About;