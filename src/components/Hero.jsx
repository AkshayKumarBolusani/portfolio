import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Hero.scss';

const Hero = () => {
  const heroRef = useRef(null);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reduced floating shapes for better performance
  const floatingShapes = [
    { id: 1, size: 50, x: 10, y: 20, delay: 0 },
    { id: 2, size: 30, x: 80, y: 60, delay: 1 },
    { id: 3, size: 60, x: 20, y: 80, delay: 2 },
  ];

  return (
    <section ref={heroRef} className="hero" id="hero">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="floating-shape"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Background */}
      <div className="hero-background">
        <div className="gradient-overlay" />
      </div>

      {/* Main Content */}
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glass Card */}
          <div className="hero-glass-card">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h1
                className="hero-name"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {portfolioData.personal.name}
              </motion.h1>
              
              <motion.p
                className="hero-tagline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {portfolioData.personal.tagline}
              </motion.p>
              
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Crafting digital experiences with modern technologies and creative design.
                Let's build something amazing together.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToAbout}
                >
                  View My Work
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('#contact', '_self')}
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="stats-grid">
                {portfolioData.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="stat-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                  >
                    <div className="stat-value">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToAbout}
        >
          <ChevronDown size={24} />
        </motion.div>
        <span className="scroll-text">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero; 