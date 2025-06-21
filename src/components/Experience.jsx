import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';
import './Experience.scss';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="experience section" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and work experience over the years.
          </p>
        </motion.div>

        <div className="timeline">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div className="company-logo">
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="position">{exp.position}</h4>
                    <div className="period-location">
                      <span className="period">{exp.period}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="description">{exp.description}</p>

                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + achievementIndex * 0.1 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 