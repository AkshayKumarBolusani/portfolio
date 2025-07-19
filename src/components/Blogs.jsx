import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, Search, Filter, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Blogs.scss';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get unique categories
  const categories = ['All', ...new Set(portfolioData.blogs.map(blog => blog.category))];

  // Filter blogs based on category and search
  const filteredBlogs = portfolioData.blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedBlog && selectedBlog.gallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedBlog.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedBlog && selectedBlog.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedBlog.gallery.length - 1 : prev - 1
      );
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeBlogModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">
            Sharing insights, tutorials, and thoughts on technology, design, and development.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="blogs-controls"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="clear-search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="category-filter">
            <Filter size={20} className="filter-icon" />
            <div className="category-buttons">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blogs Grid */}
        <motion.div
          className="blogs-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => openBlogModal(blog)}
                >
                  <div className="blog-image">
                    <img 
                      src={blog.featuredImage} 
                      alt={blog.title}
                      loading="lazy"
                    />
                    <div className="blog-overlay">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                  
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-category">
                        <Tag size={14} />
                        {blog.category}
                      </span>
                      <span className="blog-date">
                        <Calendar size={14} />
                        {blog.date}
                      </span>
                    </div>
                    
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-description">{blog.description}</p>
                    
                    <div className="blog-footer">
                      <span className="read-time">
                        <Clock size={14} />
                        {blog.readTime} min read
                      </span>
                      <button className="read-more">
                        Read More
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div
                className="no-blogs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>No blogs found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchTerm('');
                  }}
                  className="btn btn-primary"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Blog Modal */}
        <AnimatePresence>
          {selectedBlog && (
            <motion.div
              className="blog-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBlogModal}
            >
              <motion.div
                className="blog-modal"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeBlogModal}>
                  <X size={24} />
                </button>

                <div className="modal-content">
                  {/* Image Gallery */}
                  <div className="modal-gallery">
                    <div className="gallery-main">
                      <img
                        src={selectedBlog.gallery[currentImageIndex]}
                        alt={`${selectedBlog.title} - ${currentImageIndex + 1}`}
                      />
                      {selectedBlog.gallery.length > 1 && (
                        <>
                          <button className="gallery-nav prev" onClick={prevImage}>
                            <ArrowRight size={24} />
                          </button>
                          <button className="gallery-nav next" onClick={nextImage}>
                            <ArrowRight size={24} />
                          </button>
                        </>
                      )}
                    </div>
                    
                    {selectedBlog.gallery.length > 1 && (
                      <div className="gallery-thumbnails">
                        {selectedBlog.gallery.map((image, index) => (
                          <button
                            key={index}
                            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                          >
                            <img src={image} alt={`Thumbnail ${index + 1}`} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Blog Content */}
                  <div className="modal-blog-content">
                    <div className="modal-meta">
                      <span className="modal-category">
                        <Tag size={16} />
                        {selectedBlog.category}
                      </span>
                      <span className="modal-date">
                        <Calendar size={16} />
                        {selectedBlog.date}
                      </span>
                      <span className="modal-read-time">
                        <Clock size={16} />
                        {selectedBlog.readTime} min read
                      </span>
                    </div>

                    <h2 className="modal-title">{selectedBlog.title}</h2>
                    <p className="modal-description">{selectedBlog.description}</p>
                    
                    {selectedBlog.content && (
                      <div 
                        className="modal-full-content"
                        dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Blogs; 