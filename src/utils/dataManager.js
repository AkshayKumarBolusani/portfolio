// Portfolio Data Management Utilities
// Easy functions to add, remove, and update portfolio items

import { portfolioData } from '../data/portfolioData';

// Helper function to generate unique IDs
const generateId = (items) => {
  if (!items || items.length === 0) return 1;
  const maxId = Math.max(...items.map(item => item.id || 0));
  return maxId + 1;
};

// Helper function to validate data
const validateItem = (item, requiredFields) => {
  const missingFields = requiredFields.filter(field => !item[field]);
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }
  return true;
};

// Personal Information Management
export const personalInfoManager = {
  // Update personal information
  updatePersonal: (updates) => {
    const updatedData = { ...portfolioData.personal, ...updates };
    return updatedData;
  },

  // Update social links
  updateSocial: (socialUpdates) => {
    const updatedSocial = { ...portfolioData.personal.social, ...socialUpdates };
    return { ...portfolioData.personal, social: updatedSocial };
  },

  // Add new social link
  addSocial: (platform, url) => {
    const updatedSocial = { ...portfolioData.personal.social, [platform]: url };
    return { ...portfolioData.personal, social: updatedSocial };
  },

  // Remove social link
  removeSocial: (platform) => {
    const { [platform]: removed, ...updatedSocial } = portfolioData.personal.social;
    return { ...portfolioData.personal, social: updatedSocial };
  }
};

// Statistics Management
export const statsManager = {
  // Add new statistic
  addStat: (stat) => {
    validateItem(stat, ['label', 'value']);
    const newStat = { id: generateId(portfolioData.stats), ...stat };
    return [...portfolioData.stats, newStat];
  },

  // Remove statistic by ID
  removeStat: (id) => {
    return portfolioData.stats.filter(stat => stat.id !== id);
  },

  // Update statistic
  updateStat: (id, updates) => {
    return portfolioData.stats.map(stat => 
      stat.id === id ? { ...stat, ...updates } : stat
    );
  },

  // Get stat by ID
  getStat: (id) => {
    return portfolioData.stats.find(stat => stat.id === id);
  }
};

// Skills Management
export const skillsManager = {
  // Add new skill to category
  addSkill: (category, skill) => {
    validateItem(skill, ['name', 'level']);
    const newSkill = { id: generateId(portfolioData.skills[category]), ...skill };
    const updatedCategory = [...portfolioData.skills[category], newSkill];
    return { ...portfolioData.skills, [category]: updatedCategory };
  },

  // Remove skill by ID from category
  removeSkill: (category, id) => {
    const updatedCategory = portfolioData.skills[category].filter(skill => skill.id !== id);
    return { ...portfolioData.skills, [category]: updatedCategory };
  },

  // Update skill
  updateSkill: (category, id, updates) => {
    const updatedCategory = portfolioData.skills[category].map(skill =>
      skill.id === id ? { ...skill, ...updates } : skill
    );
    return { ...portfolioData.skills, [category]: updatedCategory };
  },

  // Add new skill category
  addCategory: (categoryName, skills = []) => {
    return { ...portfolioData.skills, [categoryName]: skills };
  },

  // Remove skill category
  removeCategory: (categoryName) => {
    const { [categoryName]: removed, ...updatedSkills } = portfolioData.skills;
    return updatedSkills;
  },

  // Get skill by ID
  getSkill: (category, id) => {
    return portfolioData.skills[category]?.find(skill => skill.id === id);
  },

  // Get all skills from all categories
  getAllSkills: () => {
    return Object.values(portfolioData.skills).flat();
  }
};

// Projects Management
export const projectsManager = {
  // Add new project
  addProject: (project) => {
    validateItem(project, ['title', 'description']);
    const newProject = { 
      id: generateId(portfolioData.projects), 
      featured: false,
      tags: [],
      ...project 
    };
    return [...portfolioData.projects, newProject];
  },

  // Remove project by ID
  removeProject: (id) => {
    return portfolioData.projects.filter(project => project.id !== id);
  },

  // Update project
  updateProject: (id, updates) => {
    return portfolioData.projects.map(project =>
      project.id === id ? { ...project, ...updates } : project
    );
  },

  // Toggle project featured status
  toggleFeatured: (id) => {
    return portfolioData.projects.map(project =>
      project.id === id ? { ...project, featured: !project.featured } : project
    );
  },

  // Get project by ID
  getProject: (id) => {
    return portfolioData.projects.find(project => project.id === id);
  },

  // Get featured projects
  getFeaturedProjects: () => {
    return portfolioData.projects.filter(project => project.featured);
  },

  // Get projects by tag
  getProjectsByTag: (tag) => {
    return portfolioData.projects.filter(project => 
      project.tags.includes(tag)
    );
  }
};

// Experience Management
export const experienceManager = {
  // Add new experience
  addExperience: (experience) => {
    validateItem(experience, ['company', 'position', 'period']);
    const newExperience = { 
      id: generateId(portfolioData.experience), 
      achievements: [],
      ...experience 
    };
    return [...portfolioData.experience, newExperience];
  },

  // Remove experience by ID
  removeExperience: (id) => {
    return portfolioData.experience.filter(exp => exp.id !== id);
  },

  // Update experience
  updateExperience: (id, updates) => {
    return portfolioData.experience.map(exp =>
      exp.id === id ? { ...exp, ...updates } : exp
    );
  },

  // Add achievement to experience
  addAchievement: (id, achievement) => {
    return portfolioData.experience.map(exp =>
      exp.id === id 
        ? { ...exp, achievements: [...exp.achievements, achievement] }
        : exp
    );
  },

  // Remove achievement from experience
  removeAchievement: (id, achievementIndex) => {
    return portfolioData.experience.map(exp =>
      exp.id === id 
        ? { 
            ...exp, 
            achievements: exp.achievements.filter((_, index) => index !== achievementIndex)
          }
        : exp
    );
  },

  // Get experience by ID
  getExperience: (id) => {
    return portfolioData.experience.find(exp => exp.id === id);
  }
};

// Education Management
export const educationManager = {
  // Add new education
  addEducation: (education) => {
    validateItem(education, ['degree', 'institution', 'period']);
    const newEducation = { 
      id: generateId(portfolioData.education), 
      ...education 
    };
    return [...portfolioData.education, newEducation];
  },

  // Remove education by ID
  removeEducation: (id) => {
    return portfolioData.education.filter(edu => edu.id !== id);
  },

  // Update education
  updateEducation: (id, updates) => {
    return portfolioData.education.map(edu =>
      edu.id === id ? { ...edu, ...updates } : edu
    );
  },

  // Get education by ID
  getEducation: (id) => {
    return portfolioData.education.find(edu => edu.id === id);
  }
};

// Certificates Management
export const certificatesManager = {
  // Add new certificate
  addCertificate: (certificate) => {
    validateItem(certificate, ['name', 'issuer', 'date']);
    const newCertificate = { 
      id: generateId(portfolioData.certificates), 
      ...certificate 
    };
    return [...portfolioData.certificates, newCertificate];
  },

  // Remove certificate by ID
  removeCertificate: (id) => {
    return portfolioData.certificates.filter(cert => cert.id !== id);
  },

  // Update certificate
  updateCertificate: (id, updates) => {
    return portfolioData.certificates.map(cert =>
      cert.id === id ? { ...cert, ...updates } : cert
    );
  },

  // Get certificate by ID
  getCertificate: (id) => {
    return portfolioData.certificates.find(cert => cert.id === id);
  }
};

// Languages Management
export const languagesManager = {
  // Add new language
  addLanguage: (language) => {
    validateItem(language, ['name', 'proficiency']);
    const newLanguage = { id: generateId(portfolioData.languages), ...language };
    return [...portfolioData.languages, newLanguage];
  },

  // Remove language by ID
  removeLanguage: (id) => {
    return portfolioData.languages.filter(lang => lang.id !== id);
  },

  // Update language
  updateLanguage: (id, updates) => {
    return portfolioData.languages.map(lang =>
      lang.id === id ? { ...lang, ...updates } : lang
    );
  },

  // Get language by ID
  getLanguage: (id) => {
    return portfolioData.languages.find(lang => lang.id === id);
  }
};

// Interests Management
export const interestsManager = {
  // Add new interest
  addInterest: (interest) => {
    if (typeof interest !== 'string') {
      throw new Error('Interest must be a string');
    }
    return [...portfolioData.interests, interest];
  },

  // Remove interest by value
  removeInterest: (interest) => {
    return portfolioData.interests.filter(int => int !== interest);
  },

  // Update interest
  updateInterest: (oldInterest, newInterest) => {
    return portfolioData.interests.map(int =>
      int === oldInterest ? newInterest : int
    );
  },

  // Check if interest exists
  hasInterest: (interest) => {
    return portfolioData.interests.includes(interest);
  }
};

// Testimonials Management
export const testimonialsManager = {
  // Add new testimonial
  addTestimonial: (testimonial) => {
    validateItem(testimonial, ['name', 'content']);
    const newTestimonial = { 
      id: generateId(portfolioData.testimonials), 
      rating: 5,
      ...testimonial 
    };
    return [...portfolioData.testimonials, newTestimonial];
  },

  // Remove testimonial by ID
  removeTestimonial: (id) => {
    return portfolioData.testimonials.filter(test => test.id !== id);
  },

  // Update testimonial
  updateTestimonial: (id, updates) => {
    return portfolioData.testimonials.map(test =>
      test.id === id ? { ...test, ...updates } : test
    );
  },

  // Get testimonial by ID
  getTestimonial: (id) => {
    return portfolioData.testimonials.find(test => test.id === id);
  },

  // Get testimonials by rating
  getTestimonialsByRating: (rating) => {
    return portfolioData.testimonials.filter(test => test.rating === rating);
  }
};

// Data Export/Import Utilities
export const dataUtils = {
  // Export current data
  exportData: () => {
    return JSON.stringify(portfolioData, null, 2);
  },

  // Import data (with validation)
  importData: (dataString) => {
    try {
      const data = JSON.parse(dataString);
      // Add validation here if needed
      return data;
    } catch (error) {
      throw new Error('Invalid JSON data');
    }
  },

  // Backup data to localStorage
  backupData: () => {
    localStorage.setItem('portfolioBackup', JSON.stringify(portfolioData));
  },

  // Restore data from localStorage
  restoreData: () => {
    const backup = localStorage.getItem('portfolioBackup');
    return backup ? JSON.parse(backup) : null;
  },

  // Clear backup
  clearBackup: () => {
    localStorage.removeItem('portfolioBackup');
  }
};

// Validation Utilities
export const validationUtils = {
  // Validate email format
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate URL format
  isValidUrl: (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  // Validate phone number
  isValidPhone: (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  // Validate skill level (0-100)
  isValidSkillLevel: (level) => {
    return typeof level === 'number' && level >= 0 && level <= 100;
  },

  // Validate rating (1-5)
  isValidRating: (rating) => {
    return typeof rating === 'number' && rating >= 1 && rating <= 5;
  }
};

// Search and Filter Utilities
export const searchUtils = {
  // Search projects by title or description
  searchProjects: (query) => {
    const lowercaseQuery = query.toLowerCase();
    return portfolioData.projects.filter(project =>
      project.title.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery) ||
      project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  },

  // Search skills by name
  searchSkills: (query) => {
    const lowercaseQuery = query.toLowerCase();
    const allSkills = skillsManager.getAllSkills();
    return allSkills.filter(skill =>
      skill.name.toLowerCase().includes(lowercaseQuery)
    );
  },

  // Filter projects by tags
  filterProjectsByTags: (tags) => {
    return portfolioData.projects.filter(project =>
      tags.some(tag => project.tags.includes(tag))
    );
  },

  // Get all unique tags
  getAllTags: () => {
    const allTags = portfolioData.projects.flatMap(project => project.tags);
    return [...new Set(allTags)];
  }
};

// Usage Examples:
/*
// Add a new project
const newProject = {
  title: "My New Project",
  description: "A fantastic new project",
  image: "https://example.com/image.jpg",
  tags: ["React", "Node.js"],
  demo: "https://demo.example.com",
  code: "https://github.com/example/project"
};
const updatedProjects = projectsManager.addProject(newProject);

// Add a new skill
const newSkill = {
  name: "TypeScript",
  level: 85,
  icon: "📘"
};
const updatedSkills = skillsManager.addSkill('frontend', newSkill);

// Update personal information
const updatedPersonal = personalInfoManager.updatePersonal({
  title: "Senior Developer",
  location: "New York, USA"
});

// Add a new experience
const newExperience = {
  company: "Tech Corp",
  position: "Senior Developer",
  period: "01/2024 - Present",
  location: "San Francisco, CA",
  description: "Leading development team",
  achievements: ["Improved performance by 50%", "Led team of 5 developers"]
};
const updatedExperience = experienceManager.addExperience(newExperience);
*/ 