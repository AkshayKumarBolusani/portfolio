import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Award, ChevronLeft, ChevronRight, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Testimonials.scss';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = portfolioData.testimonials;

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    if (newDirection > 0) {
      nextTestimonial();
    } else {
      prevTestimonial();
    }
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
          <div className="header-icon">
            <Award size={40} />
          </div>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Testimonials from clients, colleagues, and collaborators
          </p>
        </motion.div>

        <motion.div
          className="testimonials-carousel"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="carousel-container">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="testimonial-slide"
              >
                <div className="testimonial-card">
                  <div className="card-background">
                    <div className="bg-pattern"></div>
                    <div className="bg-gradient"></div>
                  </div>

                  <div className="card-content">
                    <div className="quote-section">
                      <div className="quote-icon">
                        <Quote size={32} />
                      </div>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            fill={i < testimonials[currentIndex].rating ? "#fbbf24" : "none"}
                            color={i < testimonials[currentIndex].rating ? "#fbbf24" : "#d1d5db"}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="testimonial-text">
                      <p>"{testimonials[currentIndex].content}"</p>
                    </div>

                    <div className="testimonial-meta">
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>2024</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>Remote</span>
                      </div>
                    </div>

                    <div className="author-section">
                      <div className="author-avatar">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          loading="lazy"
                        />
                        <div className="avatar-ring"></div>
                      </div>
                      
                      <div className="author-info">
                        <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                        <p className="author-position">{testimonials[currentIndex].position}</p>
                        <p className="author-company">{testimonials[currentIndex].company}</p>
                      </div>

                      {testimonials[currentIndex].link && (
                        <a 
                          href={testimonials[currentIndex].link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="testimonial-link"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="carousel-controls">
              <button 
                className="control-btn prev-btn"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="carousel-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                className="control-btn next-btn"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="testimonials-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3 className="cta-title">Ready to work together?</h3>
            <p className="cta-text">
              Let's create something amazing and bring your ideas to life
            </p>
            <a href="#contact" className="cta-button">
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 