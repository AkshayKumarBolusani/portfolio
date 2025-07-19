import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Music, Camera, Gamepad2, BookOpen, Coffee, Plane, Code, Palette, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Interests.scss';

const Interests = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  const interestIcons = {
    'Web Development': <Code size={24} />,
    'Mobile App Development': <Code size={24} />,
    'UI/UX Design': <Palette size={24} />,
    'Photography': <Camera size={24} />,
    'Travel': <Plane size={24} />,
    'Reading': <BookOpen size={24} />,
    'Music': <Music size={24} />,
    'Gaming': <Gamepad2 size={24} />,
    'Coffee': <Coffee size={24} />,
    'Technology': <Globe size={24} />,
    'default': <Heart size={24} />
  };

  const getInterestIcon = (interest) => {
    return interestIcons[interest] || interestIcons.default;
  };

  const interestDescriptions = {
    'Web Development': 'Passionate about creating modern, responsive web applications using cutting-edge technologies.',
    'Mobile App Development': 'Love building intuitive mobile experiences that solve real-world problems.',
    'UI/UX Design': 'Focused on creating beautiful, user-centered designs that enhance user experience.',
    'Photography': 'Capturing moments and exploring the world through the lens of creativity.',
    'Travel': 'Exploring new cultures, cuisines, and landscapes to broaden my perspective.',
    'Reading': 'Constantly learning and expanding knowledge through books and articles.',
    'Music': 'Finding inspiration and relaxation through various genres of music.',
    'Gaming': 'Enjoying strategic games that challenge problem-solving skills.',
    'Coffee': 'Appreciating the art of coffee and the conversations it brings.',
    'Technology': 'Staying updated with the latest tech trends and innovations.',
    'default': 'Exploring new interests and hobbies that bring joy and growth.'
  };

  return (
    <section className="interests section" id="interests">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Interests & Hobbies</h2>
          <p className="section-subtitle">
            Beyond coding, these are the things that inspire me, keep me motivated, and help me maintain a balanced life.
          </p>
        </motion.div>

        <div className="interests-grid">
          {portfolioData.interests.map((interest, index) => (
            <motion.div
              key={interest}
              className="interest-card glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10
              }}
              onClick={() => setSelectedInterest(selectedInterest === interest ? null : interest)}
            >
              <div className="interest-icon">
                {getInterestIcon(interest)}
              </div>
              <h3 className="interest-title">{interest}</h3>
              <motion.div
                className="interest-description"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: selectedInterest === interest ? 'auto' : 0,
                  opacity: selectedInterest === interest ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{interestDescriptions[interest] || interestDescriptions.default}</p>
              </motion.div>
              <div className="interest-indicator">
                <motion.div
                  className="indicator-dot"
                  animate={{ 
                    scale: selectedInterest === interest ? 1.2 : 1,
                    backgroundColor: selectedInterest === interest ? 'var(--accent-dark)' : 'rgba(255, 255, 255, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="interests-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="summary-card glass-card">
            <div className="summary-content">
              <h3>Life Beyond Code</h3>
              <p>
                My interests and hobbies play a crucial role in my personal and professional development. 
                They help me maintain creativity, reduce stress, and bring fresh perspectives to my work. 
                Whether it's exploring new technologies, capturing moments through photography, or simply 
                enjoying a good cup of coffee, these activities keep me inspired and motivated.
              </p>
              <div className="interest-stats">
                <div className="stat-item">
                  <span className="stat-number">{portfolioData.interests.length}</span>
                  <span className="stat-label">Active Interests</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Learning Mode</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Curiosity</span>
                </div>
              </div>
            </div>
            <div className="summary-visual">
              <motion.div
                className="floating-icons"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {portfolioData.interests.slice(0, 6).map((interest, index) => (
                  <motion.div
                    key={interest}
                    className="floating-icon"
                    style={{
                      '--angle': `${(index * 60)}deg`,
                      '--radius': '80px'
                    }}
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {getInterestIcon(interest)}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests; 