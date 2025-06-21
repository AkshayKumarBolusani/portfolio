import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Education.scss';

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and educational achievements that have shaped my professional path.
          </p>
        </motion.div>

        <div className="education-timeline">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="education-card glass-card">
                <div className="education-icon">
                  <GraduationCap size={32} />
                </div>
                
                <div className="education-content">
                  <div className="education-header">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <div className="education-meta">
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="meta-item">
                        <Award size={16} />
                        <span>{edu.aggregate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="education-details">
                    <h4 className="education-institution">{edu.institution}</h4>
                    <p className="education-description">
                      Completed my {edu.degree.toLowerCase()} with a focus on practical applications 
                      and real-world problem solving. Achieved an aggregate of {edu.aggregate} 
                      demonstrating strong academic performance and dedication to learning.
                    </p>
                  </div>
                  
                  <div className="education-progress">
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${parseInt(edu.aggregate)}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                      />
                    </div>
                    <span className="progress-text">Performance: {edu.aggregate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="education-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="summary-card glass-card">
            <h3>Academic Excellence</h3>
            <p>
              My educational background has provided me with a strong foundation in both theoretical 
              knowledge and practical skills. I've consistently maintained high academic standards 
              while actively participating in various projects and extracurricular activities.
            </p>
            <div className="achievement-stats">
              <div className="achievement-item">
                <span className="achievement-number">{portfolioData.education.length}</span>
                <span className="achievement-label">Degrees</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">100%</span>
                <span className="achievement-label">Completion</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">A+</span>
                <span className="achievement-label">Performance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 