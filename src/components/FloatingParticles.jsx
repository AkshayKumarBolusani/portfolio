import React from 'react';
import { motion } from 'framer-motion';
import './FloatingParticles.scss';

const FloatingParticles = () => {
  // Reduced number of particles for better performance
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 8,
    delay: Math.random() * 3,
  }));

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles; 