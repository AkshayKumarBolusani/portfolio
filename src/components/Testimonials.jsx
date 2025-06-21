import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Testimonials.scss';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
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
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Hear what clients and colleagues say about working with me
          </p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="card-header">
                <div className="quote-icon">
                  <Quote size={20} />
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < testimonial.rating ? "#fbbf24" : "none"}
                      color={i < testimonial.rating ? "#fbbf24" : "#d1d5db"}
                    />
                  ))}
                </div>
              </div>

              <div className="card-content">
                <p className="testimonial-text">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="card-footer">
                <div className="author-info">
                  <div className="author-avatar">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="author-details">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
                
                {testimonial.link && (
                  <a 
                    href={testimonial.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="testimonial-link"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <div className="card-decoration">
                <div className="decoration-line"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="testimonials-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="cta-text">
            Ready to work together? Let's create something amazing!
          </p>
          <a href="#contact" className="cta-button">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 