import React from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.scss';

const CustomCursor = ({ mousePosition }) => {
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Trailing cursor */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.1,
        }}
      />
      
      {/* Hover effect */}
      <motion.div
        className="cursor-hover"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          scale: 0,
        }}
        whileHover={{
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />
    </>
  );
};

export default CustomCursor; 