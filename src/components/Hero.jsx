import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Hero.scss';

const Hero = () => {
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track full page scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/AkshayKumarBolusani/new/main/AkshayKumarBolusani_Resume.pdf';
    link.download = 'AkshayKumarBolusani_Resume.pdf'; // Custom filename for the download
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Floating shapes with proper positioning
  const floatingShapes = [
    { id: 1, size: 40, x: 10, y: 20, delay: 0 },
    { id: 2, size: 60, x: 85, y: 15, delay: 1 },
    { id: 3, size: 30, x: 20, y: 70, delay: 2 },
    { id: 4, size: 50, x: 75, y: 80, delay: 3 },
    { id: 5, size: 45, x: 50, y: 40, delay: 1.5 },
  ];

  return (
    <>
      <section ref={heroRef} className="hero" id="hero" aria-labelledby="hero-title">
        <title>Akshay Kumar Bolusani | Portfolio</title>
        <meta name="description" content="Official portfolio of Akshay Kumar Bolusani (Bolusani Akshay Kumar, Bolusani Akshay, Akshay Bolusani). Explore projects, achievements, and contact information for Akshay Bolusani." />
        <meta name="keywords" content="Akshay Kumar Bolusani, Bolusani Akshay Kumar, Bolusani Akshay, Akshay Bolusani, portfolio, developer, web developer, software engineer, projects" />
        <link rel="canonical" href="https://akshaybolusani-portfolio.vercel.app/" />
        <div className="hero-background" />
        <div className="gradient-overlay" />

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
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                delay: shape.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <motion.div
            className="hero-glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h1
                id="hero-title"
                className="hero-name"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Akshay Kumar Bolusani
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
                
                {/* Download CV Button as anchor tag for best compatibility */}
                <a
                  href="/AkshayKumarBolusani_Resume.pdf"
                  download="Akshay_Kumar_Bolusani_Resume.pdf"
                  className="btn btn-secondary download-cv-btn"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Download size={20} />
                  Download CV
                </a>
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
          </motion.div>
        </div>

        {/* Full Page Scroll Line */}
        <motion.div
          className="scroll-line-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="scroll-line-track">
            <motion.div
              className="scroll-line-progress"
              style={{
                height: `${scrollProgress}%`
              }}
              animate={{
                height: `${scrollProgress}%`
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.div
            className="scroll-line-indicator"
            animate={{
              y: [0, 10, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={scrollToAbout}
          />
          <span className="scroll-line-text">Scroll</span>
        </motion.div>
      </section>
    </>
  );
};

export default Hero; 