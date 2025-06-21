import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "OV-5cACEMR6SyraY0");
  }, []);

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
    setAlert(null);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: portfolioData.personal.name,
        reply_to: formData.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_q2o9nml",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_9h6k6hs",
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "OV-5cACEMR6SyraY0"
      );

      if (result.status === 200) {
        setAlert({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setAlert({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly at ',
        email: portfolioData.personal.email
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: portfolioData.personal.email,
      link: `mailto:${portfolioData.personal.email}`
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: portfolioData.personal.phone,
      link: `tel:${portfolioData.personal.phone}`
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: portfolioData.personal.location,
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: portfolioData.personal.social.github
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: portfolioData.personal.social.linkedin
    },
    {
      icon: <Twitter size={24} />,
      label: 'Twitter',
      url: portfolioData.personal.social.twitter
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      url: portfolioData.personal.social.instagram
    }
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Let's get in touch and discuss how we can work together</p>
        </motion.div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form glass-card">
              <h3>Get In Touch</h3>
              
              {alert && (
                <div className={`alert alert-${alert.type}`}>
                  {alert.message}
                  {alert.email && (
                    <a href={`mailto:${alert.email}`} className="contact-link">
                      {alert.email}
                    </a>
                  )}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </motion.button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info-container">
            <div className="contact-info glass-card">
              <h3>Contact Information</h3>
              
              <div className="info-items">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="info-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="info-icon">
                      {item.icon}
                    </div>
                    <div className="info-content">
                      <h4>{item.label}</h4>
                      {item.link ? (
                        <a href={item.link} className="contact-link">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
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
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="social-content">
                        <div className="social-icon-svg">
                          {social.icon}
                        </div>
                        <span className="social-label">{social.label}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 