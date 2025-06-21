# 🚀 Akshay Kumar Bolusani - Portfolio Website

A modern, responsive portfolio website built with React, featuring a beautiful glassmorphism design inspired by Apple's iOS 26 liquid glass UI. This portfolio showcases professional experience, projects, certificates, and achievements with smooth animations and excellent user experience.

## ✨ Features

### 🎨 Design & UI
- **Glassmorphism Design** - Modern glass-like effects with backdrop blur
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Responsive Design** - Perfect on all devices (desktop, tablet, mobile)
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Floating Elements** - Dynamic background elements for visual appeal

### 📱 Sections
- **Hero Section** - Animated introduction with floating shapes and stats
- **About Me** - Personal information with highlighted name
- **Education** - Academic background and achievements
- **Skills** - Technical skills with progress bars
- **Projects** - Portfolio projects with filtering and modals
- **Experience** - Work experience timeline
- **Certificates & Achievements** - Infinite scrolling carousel with detailed modals
- **Interests** - Personal interests and hobbies
- **Testimonials** - Client and colleague recommendations
- **Blogs** - Technical blog posts with image galleries
- **Contact** - Contact form with EmailJS integration
- **Footer** - Quick links and social media

### 🔧 Technical Features
- **React 18** - Latest React features and hooks
- **SCSS/Sass** - Advanced styling with variables and mixins
- **Framer Motion** - Smooth animations and transitions
- **EmailJS** - Contact form functionality
- **Responsive Grid** - CSS Grid and Flexbox layouts
- **Performance Optimized** - Lazy loading and efficient rendering

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Environment Setup
1. Create a `.env` file in the root directory
2. Add your EmailJS configuration:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Blogs.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Interests.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Testimonials.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── utils/
│   │   ├── blogManager.js
│   │   ├── certificateManager.js
│   │   └── dataManager.js
│   ├── styles/
│   │   └── responsive.scss
│   ├── App.js
│   ├── App.scss
│   └── index.js
├── package.json
└── README.md
```

## 📝 Content Management

### 🏆 Adding New Certificates

#### Method 1: Direct Data Edit (Recommended)
1. Open `src/data/portfolioData.js`
2. Find the `certificates` array
3. Add a new certificate object:

```javascript
{
  id: 7, // Next available ID
  name: "Your Certificate Name",
  issuer: "Issuing Organization",
  date: "2024",
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
  description: "Brief description of what you learned and achieved.",
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
  certificateUrl: "https://example.com/your-certificate.pdf"
}
```

#### Method 2: Using the Utility Function
1. Open browser console on your portfolio
2. Import and use the utility:

```javascript
// In browser console
import('./utils/certificateManager.js').then(module => {
  const { addCertificate } = module;
  
  const newCert = {
    name: "Your Certificate",
    issuer: "Organization",
    date: "2024",
    image: "image-url",
    description: "Description",
    skillsLearned: ["Skill1", "Skill2"],
    tasksCompleted: ["Task1", "Task2"],
    certificateUrl: "cert-url"
  };
  
  addCertificate(newCert);
});
```

### 🗑️ Deleting Certificates

#### Method 1: Direct Data Edit
1. Open `src/data/portfolioData.js`
2. Find the certificate in the `certificates` array
3. Remove the entire object
4. Update the stats count manually if needed

#### Method 2: Using Utility Function
```javascript
import('./utils/certificateManager.js').then(module => {
  const { deleteCertificate } = module;
  deleteCertificate(3); // Delete certificate with ID 3
});
```

### 📝 Updating Certificates
```javascript
import('./utils/certificateManager.js').then(module => {
  const { updateCertificate } = module;
  
  const updates = {
    name: "Updated Certificate Name",
    description: "Updated description"
  };
  
  updateCertificate(3, updates); // Update certificate with ID 3
});
```

### 🏆 Certificate Template
Use this template for new certificates:

```javascript
{
  id: [NEXT_ID],
  name: "Certificate Name",
  issuer: "Issuing Organization", 
  date: "2024",
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
  description: "What you learned and achieved with this certification.",
  skillsLearned: [
    "Primary Skill 1",
    "Primary Skill 2",
    "Secondary Skill 1"
  ],
  tasksCompleted: [
    "Specific project or task completed",
    "Another achievement or milestone",
    "Real-world application of skills"
  ],
  certificateUrl: "https://example.com/certificate-link"
}
```

### 🏆 Certificate Features
- **Infinite Carousel**: Certificates scroll infinitely with smooth animation
- **Click to View**: Click any certificate to see full details
- **Modal Display**: Shows certificate image, title, and complete information
- **Skills & Tasks**: Displays skills learned and tasks completed
- **Direct Links**: Links to view the actual certificate
- **Responsive Design**: Works perfectly on all devices

### 📝 Adding New Blogs
1. Open `src/data/portfolioData.js`
2. Find the `blogs` array
3. Add a new blog object:

```javascript
{
  id: 7, // Next available ID
  title: "Your Blog Title",
  description: "Brief description of the blog post",
  featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  category: "Development", // or "Design", "Technology"
  date: "2024-01-20", // YYYY-MM-DD format
  readTime: 8, // Estimated reading time in minutes
  gallery: [
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop"
  ],
  content: `
    <h2>Your Blog Content</h2>
    <p>Write your blog content in HTML format.</p>
  `
}
```

### 🚀 Adding New Projects
1. Open `src/data/portfolioData.js`
2. Find the `projects` array
3. Add a new project object:

```javascript
{
  id: 7, // Next available ID
  title: "Project Title",
  description: "Project description",
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  tags: ["React", "Node.js", "MongoDB"],
  demo: "https://demo.example.com",
  code: "https://github.com/username/project",
  featured: true // or false
}
```

## 🎨 Customization

### Colors & Themes
The portfolio uses CSS custom properties for easy theming. Edit `src/App.scss` to customize:

```scss
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
}
```

### Fonts
Update the font family in `src/App.scss`:
```scss
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Animations
Customize animations in individual component SCSS files or modify Framer Motion configurations in the JSX files.

## 📱 Mobile Responsiveness

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Mobile Optimizations
- Touch-friendly interactions
- Optimized animations for mobile performance
- Responsive typography and spacing
- Mobile-first navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build your project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
3. Deploy: `npm run deploy`

## 🔧 Utilities

### Certificate Manager
Use the certificate management utility for programmatic operations:

```javascript
import { addCertificate, deleteCertificate, updateCertificate } from './utils/certificateManager';

// Add a new certificate
addCertificate(newCertificate);

// Delete a certificate
deleteCertificate(certificateId);

// Update a certificate
updateCertificate(certificateId, updates);

// Get certificate count
getCertificateCount();

// Get certificates by year
getCertificatesByYear(2024);

// Get certificates by issuer
getCertificatesByIssuer('Google');
```

### Blog Manager
Manage blog posts programmatically:

```javascript
import { addBlog, deleteBlog, updateBlog } from './utils/blogManager';

// Add a new blog
addBlog(newBlog);

// Delete a blog
deleteBlog(blogId);

// Update a blog
updateBlog(blogId, updates);
```

## 📊 Performance

### Optimization Features
- **Lazy Loading** - Components load on demand
- **Image Optimization** - Responsive images with proper sizing
- **Code Splitting** - Automatic bundle splitting
- **Caching** - Efficient caching strategies
- **Minification** - Optimized production builds

### Performance Metrics
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** - For smooth animations
- **Lucide React** - For beautiful icons
- **Unsplash** - For high-quality images
- **EmailJS** - For contact form functionality

## 📞 Contact

- **Email**: akshaykumarbolusani@gmail.com
- **Phone**: +91 7396991624
- **LinkedIn**: [Akshay Kumar Bolusani](https://linkedin.com/in/akshaykumarbolusani)
- **GitHub**: [AkshayKumarBolusani](https://github.com/AkshayKumarBolusani)

---

⭐ **Star this repository if you found it helpful!**

## 📧 EmailJS Setup

The contact form uses EmailJS to send emails. Follow these steps to set it up:

### Quick Setup
1. Create an account at [EmailJS.com](https://www.emailjs.com/)
2. Add an email service (Gmail recommended)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Create a `.env` file with your credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Detailed Setup
For complete setup instructions, see [EMAILJS_SETUP.md](EMAILJS_SETUP.md)
