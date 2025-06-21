import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.scss';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="logo-circle">
            <motion.div
              className="logo-inner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
        
        <motion.h1
          className="loading-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Akshay Kumar Bolusani
        </motion.h1>
        
        <motion.p
          className="loading-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Student Intern & Developer
        </motion.p>
        
        <motion.div
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="loading-progress"
            animate={{ x: ["0%", "100%"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.div
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Loading portfolio...
        </motion.div>
      </div>
      
      {/* Reduced floating particles for better performance */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="loading-particle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 150 - 75],
            y: [0, Math.random() * 150 - 75]
          }}
          transition={{ 
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default LoadingScreen; 