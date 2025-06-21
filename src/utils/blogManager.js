// Blog Management Utility
// This utility helps you easily add, edit, and manage blog posts

class BlogManager {
  constructor() {
    this.blogs = [];
    this.nextId = 1;
  }

  // Add a new blog post
  addBlog(blogData) {
    const newBlog = {
      id: this.nextId++,
      title: blogData.title,
      description: blogData.description,
      featuredImage: blogData.featuredImage,
      category: blogData.category,
      date: blogData.date || new Date().toISOString().split('T')[0],
      readTime: blogData.readTime || this.calculateReadTime(blogData.content),
      gallery: blogData.gallery || [blogData.featuredImage],
      content: blogData.content,
      tags: blogData.tags || [],
      author: blogData.author || 'Akshay Kumar Bolusani',
      published: blogData.published !== false, // Default to true
      ...blogData
    };

    this.blogs.push(newBlog);
    return newBlog;
  }

  // Update an existing blog post
  updateBlog(id, updates) {
    const index = this.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      this.blogs[index] = { ...this.blogs[index], ...updates };
      return this.blogs[index];
    }
    return null;
  }

  // Delete a blog post
  deleteBlog(id) {
    const index = this.blogs.findIndex(blog => blog.id === id);
    if (index !== -1) {
      return this.blogs.splice(index, 1)[0];
    }
    return null;
  }

  // Get all blogs
  getAllBlogs() {
    return this.blogs;
  }

  // Get published blogs only
  getPublishedBlogs() {
    return this.blogs.filter(blog => blog.published);
  }

  // Get blog by ID
  getBlogById(id) {
    return this.blogs.find(blog => blog.id === id);
  }

  // Get blogs by category
  getBlogsByCategory(category) {
    return this.blogs.filter(blog => blog.category === category);
  }

  // Search blogs
  searchBlogs(query) {
    const searchTerm = query.toLowerCase();
    return this.blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.description.toLowerCase().includes(searchTerm) ||
      blog.content.toLowerCase().includes(searchTerm) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Get unique categories
  getCategories() {
    return [...new Set(this.blogs.map(blog => blog.category))];
  }

  // Calculate read time based on content
  calculateReadTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }

  // Add image to gallery
  addImageToGallery(blogId, imageUrl) {
    const blog = this.getBlogById(blogId);
    if (blog) {
      blog.gallery.push(imageUrl);
      return blog;
    }
    return null;
  }

  // Remove image from gallery
  removeImageFromGallery(blogId, imageIndex) {
    const blog = this.getBlogById(blogId);
    if (blog && blog.gallery[imageIndex]) {
      blog.gallery.splice(imageIndex, 1);
      return blog;
    }
    return null;
  }

  // Export blogs to JSON
  exportToJSON() {
    return JSON.stringify(this.blogs, null, 2);
  }

  // Import blogs from JSON
  importFromJSON(jsonString) {
    try {
      const importedBlogs = JSON.parse(jsonString);
      this.blogs = importedBlogs;
      this.nextId = Math.max(...importedBlogs.map(blog => blog.id), 0) + 1;
      return true;
    } catch (error) {
      console.error('Error importing blogs:', error);
      return false;
    }
  }

  // Generate blog template
  generateTemplate() {
    return {
      title: "Your Blog Title",
      description: "A brief description of your blog post",
      featuredImage: "https://images.unsplash.com/photo-XXXXX?w=600&h=400&fit=crop",
      category: "Development", // or "Design", "Tutorial", etc.
      content: `
        <h2>Introduction</h2>
        <p>Start your blog content here...</p>
        
        <h3>Main Section</h3>
        <p>Add your main content...</p>
        
        <h3>Code Example</h3>
        <pre><code>// Your code here
console.log('Hello World');</code></pre>
        
        <h3>Conclusion</h3>
        <p>Wrap up your blog post...</p>
      `,
      tags: ["react", "javascript", "web-development"],
      readTime: 5,
      gallery: [
        "https://images.unsplash.com/photo-XXXXX?w=800&h=500&fit=crop"
      ]
    };
  }

  // Validate blog data
  validateBlog(blogData) {
    const errors = [];

    if (!blogData.title || blogData.title.trim().length < 5) {
      errors.push('Title must be at least 5 characters long');
    }

    if (!blogData.description || blogData.description.trim().length < 20) {
      errors.push('Description must be at least 20 characters long');
    }

    if (!blogData.featuredImage) {
      errors.push('Featured image is required');
    }

    if (!blogData.category) {
      errors.push('Category is required');
    }

    if (!blogData.content || blogData.content.trim().length < 100) {
      errors.push('Content must be at least 100 characters long');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Image handling utilities
export const ImageUtils = {
  // Generate Unsplash URL with parameters
  getUnsplashUrl(photoId, width = 600, height = 400, fit = 'crop') {
    return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=${fit}`;
  },

  // Generate multiple sizes for responsive images
  getResponsiveImages(photoId) {
    return {
      thumbnail: this.getUnsplashUrl(photoId, 300, 200),
      featured: this.getUnsplashUrl(photoId, 600, 400),
      large: this.getUnsplashUrl(photoId, 800, 500),
      full: this.getUnsplashUrl(photoId, 1200, 800)
    };
  },

  // Validate image URL
  isValidImageUrl(url) {
    return url && (url.startsWith('http') || url.startsWith('https'));
  },

  // Generate placeholder image
  getPlaceholderImage(width = 600, height = 400) {
    return `https://via.placeholder.com/${width}x${height}/667eea/ffffff?text=Blog+Image`;
  }
};

// Example usage and helper functions
export const BlogHelpers = {
  // Format date for display
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },

  // Generate slug from title
  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  },

  // Truncate text
  truncateText(text, maxLength = 150) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  },

  // Extract text from HTML content
  extractTextFromHTML(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }
};

// Create and export a default instance
const blogManager = new BlogManager();

export default blogManager;

// Usage examples:
/*
// Adding a new blog
const newBlog = blogManager.addBlog({
  title: "My New Blog Post",
  description: "This is a description of my blog post",
  featuredImage: "https://images.unsplash.com/photo-XXXXX?w=600&h=400&fit=crop",
  category: "Development",
  content: "<h2>My Content</h2><p>Blog content here...</p>",
  tags: ["react", "javascript"]
});

// Updating a blog
blogManager.updateBlog(1, {
  title: "Updated Title",
  published: true
});

// Searching blogs
const searchResults = blogManager.searchBlogs("react");

// Getting blogs by category
const devBlogs = blogManager.getBlogsByCategory("Development");
*/ 