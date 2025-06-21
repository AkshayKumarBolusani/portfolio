import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';
import './Skills.scss';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
    { id: 'soft', name: 'Soft Skills', icon: '💡' },
  ];

  const getSkillLevel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillColor = (level) => {
    if (level >= 90) return '#10b981'; // Green
    if (level >= 80) return '#3b82f6'; // Blue
    if (level >= 70) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
  };

  return (
    <section ref={ref} className="skills section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            My technical skills and expertise across various technologies and domains.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="category-tabs">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills-content"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="skills-grid">
            {portfolioData.skills[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <div className="skill-level" style={{ color: getSkillColor(skill.level) }}>
                      {getSkillLevel(skill.level)}
                    </div>
                  </div>
                </div>

                <div className="skill-progress">
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      style={{ backgroundColor: getSkillColor(skill.level) }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="progress-percentage">{skill.level}%</span>
                </div>

                {/* Tooltip */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    className="skill-tooltip"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <div className="tooltip-content">
                      <strong>{skill.name}</strong>
                      <br />
                      Proficiency: {skill.level}%
                      <br />
                      Level: {getSkillLevel(skill.level)}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="summary-card glass-card">
            <h3>Skills Overview</h3>
            <div className="summary-stats">
              <div className="summary-stat">
                <div className="stat-number">4</div>
                <div className="stat-label">Categories</div>
              </div>
              <div className="summary-stat">
                <div className="stat-number">24</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="summary-stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Average Proficiency</div>
              </div>
            </div>
            <p className="summary-text">
              Continuously learning and expanding my skill set to stay current with the latest technologies and best practices in web development.
            </p>
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          className="certificates-section"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="section-header">
            <h3 className="section-title">Certificates & Achievements</h3>
            <p className="section-subtitle">
              Professional certifications and achievements that validate my expertise.
            </p>
          </div>
          
          <div className="certificates-grid">
            {portfolioData.certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="certificate-card glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                }}
              >
                <div className="certificate-image">
                  <img src={cert.image} alt={cert.name} />
                </div>
                <div className="certificate-content">
                  <h4 className="certificate-name">{cert.name}</h4>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <p className="certificate-date">{cert.date}</p>
                  <p className="certificate-description">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 