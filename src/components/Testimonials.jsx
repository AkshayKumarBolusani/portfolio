import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Testimonials.scss';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioData.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioData.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? portfolioData.testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={ref} className="testimonials section" id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Testimonials from clients and colleagues I've worked with.
          </p>
        </motion.div>

        <motion.div
          className="testimonials-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="testimonials-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card glass-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">
                    {portfolioData.testimonials[currentIndex].content}
                  </p>
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img
                      src={portfolioData.testimonials[currentIndex].avatar}
                      alt={portfolioData.testimonials[currentIndex].name}
                    />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">
                      {portfolioData.testimonials[currentIndex].name}
                    </h4>
                    <p className="author-position">
                      {portfolioData.testimonials[currentIndex].position}
                    </p>
                    <p className="author-company">
                      {portfolioData.testimonials[currentIndex].company}
                    </p>
                    <div className="rating">
                      {[...Array(portfolioData.testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="carousel-controls">
              <motion.button
                className="control-btn prev-btn"
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <div className="carousel-indicators">
                {portfolioData.testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                className="control-btn next-btn"
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 