import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Dribbble, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Contact.scss';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  const socialLinks = [
    { icon: Github, url: portfolioData.personal.social.github, label: 'GitHub' },
    { icon: Linkedin, url: portfolioData.personal.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: portfolioData.personal.social.twitter, label: 'Twitter' },
    { icon: Dribbble, url: portfolioData.personal.social.dribbble, label: 'Dribbble' },
    { icon: Palette, url: portfolioData.personal.social.behance, label: 'Behance' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: portfolioData.personal.email,
      url: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: portfolioData.personal.phone,
      url: `tel:${portfolioData.personal.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: portfolioData.personal.location,
      url: null,
    },
  ];

  return (
    <section ref={ref} className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together! Feel free to reach out for collaborations or just to say hello.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-form glass-card">
              <h3>Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="contact-info glass-card">
              <h3>Contact Information</h3>
              
              <div className="info-items">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="info-icon">
                      <info.icon size={24} />
                    </div>
                    <div className="info-content">
                      <h4>{info.label}</h4>
                      {info.url ? (
                        <a href={info.url} target={info.label === 'Email' ? '_self' : '_blank'} rel="noopener noreferrer">
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 