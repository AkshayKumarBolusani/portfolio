import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.scss';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="logo-circle">
            <div className="logo-inner"></div>
          </div>
        </motion.div>

        <motion.h1
          className="loading-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Akshay Kumar
        </motion.h1>

        <motion.p
          className="loading-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Portfolio Loading...
        </motion.p>

        <motion.div
          className="loading-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="loading-progress"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          Preparing your experience...
        </motion.p>
      </div>

      {/* Floating particles */}
      <div className="loading-particle"></div>
      <div className="loading-particle"></div>
      <div className="loading-particle"></div>
      <div className="loading-particle"></div>
      <div className="loading-particle"></div>
      <div className="loading-particle"></div>
    </motion.div>
  );
};

export default LoadingScreen; 