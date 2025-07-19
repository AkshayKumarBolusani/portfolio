// Certificate Management Utility
// This utility helps you easily add, delete, and manage certificates

import { portfolioData } from '../data/portfolioData';

// Get all certificates
export const getAllCertificates = () => {
  return portfolioData.certificates;
};

// Add a new certificate
export const addCertificate = (newCertificate) => {
  // Validate required fields
  const requiredFields = ['name', 'issuer', 'date', 'description', 'image'];
  const missingFields = requiredFields.filter(field => !newCertificate[field]);
  
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }

  // Generate new ID (max existing ID + 1)
  const maxId = Math.max(...portfolioData.certificates.map(cert => cert.id), 0);
  const certificateWithId = {
    id: maxId + 1,
    ...newCertificate,
    // Set default values for optional fields
    skillsLearned: newCertificate.skillsLearned || [],
    tasksCompleted: newCertificate.tasksCompleted || [],
    certificateUrl: newCertificate.certificateUrl || '#'
  };

  // Add to data (in a real app, this would update the actual data file)
  portfolioData.certificates.push(certificateWithId);
  
  // Update stats count
  updateCertificateStats();
  
  return certificateWithId;
};

// Delete a certificate by ID
export const deleteCertificate = (certificateId) => {
  const index = portfolioData.certificates.findIndex(cert => cert.id === certificateId);
  
  if (index === -1) {
    throw new Error(`Certificate with ID ${certificateId} not found`);
  }
  
  // Remove from data
  portfolioData.certificates.splice(index, 1);
  
  // Update stats count
  updateCertificateStats();
  
  return true;
};

// Update a certificate
export const updateCertificate = (certificateId, updates) => {
  const certificate = portfolioData.certificates.find(cert => cert.id === certificateId);
  
  if (!certificate) {
    throw new Error(`Certificate with ID ${certificateId} not found`);
  }
  
  // Update certificate with new data
  Object.assign(certificate, updates);
  
  return certificate;
};

// Get certificate by ID
export const getCertificateById = (certificateId) => {
  return portfolioData.certificates.find(cert => cert.id === certificateId);
};

// Update certificate count in stats
const updateCertificateStats = () => {
  const certificateStat = portfolioData.stats.find(stat => stat.label === 'Certificates');
  if (certificateStat) {
    certificateStat.value = portfolioData.certificates.length;
  }
};

// Certificate template for easy creation
export const createCertificateTemplate = () => {
  return {
    name: "Certificate Name",
    issuer: "Issuing Organization",
    date: "2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    description: "Brief description of the certificate and what it covers.",
    skillsLearned: [
      "Skill 1",
      "Skill 2",
      "Skill 3"
    ],
    tasksCompleted: [
      "Completed task 1",
      "Completed task 2",
      "Completed task 3"
    ],
    certificateUrl: "https://example.com/certificate.pdf"
  };
};

// Example usage functions
export const addExampleCertificate = () => {
  const exampleCertificate = {
    name: "Advanced JavaScript Certification",
    issuer: "JavaScript Institute",
    date: "2024",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    description: "Advanced JavaScript programming certification covering modern ES6+ features and best practices.",
    skillsLearned: [
      "ES6+ Features",
      "Async/Await",
      "Promises",
      "Modules",
      "Advanced Patterns"
    ],
    tasksCompleted: [
      "Built 3 complex JavaScript applications",
      "Implemented advanced async patterns",
      "Created modular code architecture",
      "Optimized performance by 50%"
    ],
    certificateUrl: "https://example.com/javascript-cert.pdf"
  };
  
  return addCertificate(exampleCertificate);
};

// Export current certificate count
export const getCertificateCount = () => {
  return portfolioData.certificates.length;
};

// Get certificates by year
export const getCertificatesByYear = (year) => {
  return portfolioData.certificates.filter(cert => cert.date === year.toString());
};

// Get certificates by issuer
export const getCertificatesByIssuer = (issuer) => {
  return portfolioData.certificates.filter(cert => 
    cert.issuer.toLowerCase().includes(issuer.toLowerCase())
  );
}; 