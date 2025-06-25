export const portfolioData = {
  personal: {
    name: "Akshay Kumar Bolusani",
    tagline: "Passionate Computer Science Student & Developer",
    title: "Student Intern",
    location: "Hyderabad, India",
    email: "akshaykumarbolusani@gmail.com",
    phone: "7396991624",
    bio: "Passionate Computer Science student with hands-on experience in React, Android Studio, and Web Development, eager to innovate and solve real-world challenges.",
    avatar: "https://raw.githubusercontent.com/AkshayKumarBolusani/React-Tools/main/akshay.png",
    social: {
      github: "https://github.com/AkshayKumarBolusani",
      linkedin: "https://linkedin.com/in/akshaykumarbolusani",
      twitter: "https://twitter.com/akshaybolusani",
      instagram: "https://instagram.com/askforakshaykumar",
      dribbble: "https://dribbble.com/akshaykumar",
      behance: "https://behance.net/akshaykumar"
    }
  },
  
  stats: [
    { label: "Websites Developed", value: 75, suffix: "+" },
    { label: "Projects Completed", value: 15, suffix: "+" },
    { label: "Technologies", value: 12, suffix: "+" },
    { label: "Certificates", value: 6, suffix: "" }
  ],
  
  skills: {
    frontend: [
      { name: "React", level: 85, icon: "⚛️" },
      { name: "HTML", level: 90, icon: "🌐" },
      { name: "CSS", level: 88, icon: "🎨" },
      { name: "JavaScript", level: 82, icon: "📜" },
      { name: "Android Development", level: 80, icon: "📱" },
      { name: "UI/UX Design", level: 75, icon: "🎯" }
    ],
    backend: [
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "Node.js", level: 75, icon: "🟢" },
      { name: "Express.js", level: 70, icon: "🚀" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "SQL", level: 80, icon: "🗄️" }
    ],
    tools: [
      { name: "Git", level: 85, icon: "📚" },
      { name: "Android Studio", level: 80, icon: "🤖" },
      { name: "WordPress", level: 90, icon: "📝" },
      { name: "Data Analytics", level: 75, icon: "📊" },
      { name: "Graphic Design", level: 70, icon: "🎨" },
      { name: "Video Editing", level: 65, icon: "🎬" }
    ],
    soft: [
      { name: "Problem Solving", level: 90, icon: "🧩" },
      { name: "Communication", level: 85, icon: "💬" },
      { name: "Team Collaboration", level: 80, icon: "👥" },
      { name: "Time Management", level: 85, icon: "⏰" },
      { name: "Adaptability", level: 90, icon: "🔄" },
      { name: "Learning Ability", level: 95, icon: "📚" }
    ]
  },
  
  projects: [
    {
  id: 1,
  title: "Weather App",
  description: "Grabs the user's location and displays weather data using an API. The background changes based on the weather, making it visually appealing.",
  image: "https://raw.githubusercontent.com/AkshayKumarBolusani/new/project-image/s1.png",
  tags: ["Web App", "React", "API", "Weather App"],
  demo: "https://akshay-weather-project.vercel.app/",
  code: "https://github.com/AkshayKumarBolusani/weather-project",
  featured: true
    },
  {
  id: 2,
  title: "AI Blog Generator",
  description: "Instantly Generates the Blogs based on the title using the Gemini API. With neat UI it attracts the users.",
  image: "https://raw.githubusercontent.com/AkshayKumarBolusani/new/main/S2.png",
  tags: ["Gemini API", "AI Generated", "Appealing Design", "Blogs"],
  demo: "https://akshayaibloggenerator.vercel.app/",
  code: "https://github.com/AkshayKumarBolusani/AI-Blog-Generator",
  featured: true
  },
    {
      id: 3,
      title: "Modern News Website",
      description: "News Website with modern theme and has various categories of new like Popular, latest, Global, National etc,..",
      image: "https://raw.githubusercontent.com/AkshayKumarBolusani/new/main/S3.png",
      tags: ["News", "NewsAPI", "Modern", "Gradient"],
      demo: "https://akshay-modern-news.vercel.app/",
      code: "https://github.com/AkshayKumarBolusani/Modern-News",
      featured: true
    },
    {
      id: 4,
      title: "Simple React Tools",
      description: "Interactive data visualization dashboard built with Python and modern web technologies for business intelligence.",
      image: "https://raw.githubusercontent.com/AkshayKumarBolusani/new/main/S4.png",
      tags: ["React Tools", "Dashboard", "Password", "Colors"],
      demo: "https://akshay-simple-react-tools.vercel.app/",
      code: "https://github.com/AkshayKumarBolusani/Simple-React-Tools",
      featured: true
    },
    {
      id: 5,
      title: "E-Learning Platform",
      description: "Comprehensive e-learning platform with course management, user authentication, and interactive learning features.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://elearning-platform.example.com",
      code: "https://github.com/AkshayKumarBolusani/e-learning-platform",
      featured: false
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, user management, and progress tracking.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      demo: "https://task-manager.example.com",
      code: "https://github.com/AkshayKumarBolusani/task-manager",
      featured: false
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "Digital Connect",
      position: "Web Developer",
      period: "09/2022 - Present",
      location: "Hyderabad, India",
      description: "Leading web development initiatives, creating responsive websites, and managing client relationships while learning new technologies.",
      achievements: [
        "Developed 75+ WordPress websites for various clients",
        "Learned Graphic Designing and Video Editing skills",
        "Gained hands-on experience in real-time projects",
        "Improved client satisfaction and project delivery"
      ],
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      company: "InfraBIM Techno Solutions",
      position: "Intern",
      period: "02/2025 - 03/2025",
      location: "Hyderabad, India",
      description: "Focused on mobile app testing and UI/UX design, contributing to product development and quality assurance processes.",
      achievements: [
        "Conducted comprehensive mobile app testing",
        "Contributed to UI/UX design improvements",
        "Learned industry best practices",
        "Collaborated with development team"
      ],
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop"
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "BTech in Computer Science",
      institution: "Malla Reddy University",
      period: "09/2022 - Present",
      location: "Hyderabad, India",
      aggregate: "89",
      description: "Pursuing Bachelor of Technology in Computer Science with focus on software development and emerging technologies."
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      period: "08/2020 - 01/2022",
      location: "Hyderabad, India",
      aggregate: "97%",
      description: "Completed intermediate education with excellent academic performance in science stream."
    },
    {
      id: 3,
      degree: "Grade X",
      institution: "Iris EduValley World School",
      period: "08/2017 - 07/2020",
      location: "Hyderabad, India",
      aggregate: "84%",
      description: "Completed secondary education with strong foundation in core subjects."
    }
  ],
  
  certificates: [
    {
      id: 1,
      name: "Gen AI Academy by Google Cloud",
      issuer: "Google Cloud",
      date: "2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      description: "Comprehensive training in Generative AI technologies and Google Cloud platform.",
      skillsLearned: ["Generative AI", "Google Cloud Platform", "Machine Learning", "AI/ML Fundamentals"],
      tasksCompleted: [
        "Completed 12 modules on AI/ML fundamentals",
        "Built and deployed 3 AI models on Google Cloud",
        "Implemented natural language processing solutions",
        "Created automated AI workflows"
      ],
      certificateUrl: "https://example.com/certificate1.pdf"
    },
    {
      id: 2,
      name: "React Development Certification",
      issuer: "Meta",
      date: "2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      description: "Advanced React development certification covering modern React patterns and best practices.",
      skillsLearned: ["React Hooks", "Context API", "Performance Optimization", "Testing", "State Management"],
      tasksCompleted: [
        "Built 5 full-stack React applications",
        "Implemented advanced state management with Redux",
        "Created reusable component libraries",
        "Optimized application performance by 40%"
      ],
      certificateUrl: "https://example.com/certificate2.pdf"
    },
    {
      id: 3,
      name: "Android App Development",
      issuer: "Google Developers",
      date: "2023",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      description: "Comprehensive Android development certification covering modern Android development practices.",
      skillsLearned: ["Kotlin", "Android Studio", "Material Design", "Jetpack Compose", "Android Architecture"],
      tasksCompleted: [
        "Developed 3 complete Android applications",
        "Implemented modern UI with Material Design 3",
        "Integrated REST APIs and local databases",
        "Published apps on Google Play Store"
      ],
      certificateUrl: "https://example.com/certificate3.pdf"
    },
    {
      id: 4,
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      description: "Complete web development bootcamp covering frontend and backend technologies.",
      skillsLearned: ["HTML5", "CSS3", "JavaScript ES6+", "Node.js", "Express.js", "MongoDB"],
      tasksCompleted: [
        "Built 10+ responsive websites",
        "Created RESTful APIs with Node.js",
        "Implemented user authentication systems",
        "Deployed applications to cloud platforms"
      ],
      certificateUrl: "https://example.com/certificate4.pdf"
    },
    {
      id: 5,
      name: "UI/UX Design Fundamentals",
      issuer: "Coursera",
      date: "2023",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      description: "Comprehensive UI/UX design course covering design principles and user research.",
      skillsLearned: ["User Research", "Wireframing", "Prototyping", "Figma", "Design Systems", "User Testing"],
      tasksCompleted: [
        "Conducted user research for 5 projects",
        "Created wireframes and prototypes",
        "Designed complete design systems",
        "Performed usability testing sessions"
      ],
      certificateUrl: "https://example.com/certificate5.pdf"
    },
    {
      id: 6,
      name: "Python for Data Science",
      issuer: "DataCamp",
      date: "2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Advanced Python programming for data science and analytics applications.",
      skillsLearned: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis"],
      tasksCompleted: [
        "Analyzed large datasets with Python",
        "Created data visualizations and dashboards",
        "Built predictive models",
        "Automated data processing workflows"
      ],
      certificateUrl: "https://example.com/certificate6.pdf"
    }
  ],
  
  languages: [
    { name: "English", proficiency: "Full Professional Proficiency" },
    { name: "Hindi", proficiency: "Full Professional Proficiency" },
    { name: "Telugu", proficiency: "Native Proficiency" }
  ],
  
  interests: [
    "Developing and Problem Solving",
    "Gaining expertise in emerging technologies",
    "Mobile App Development",
    "Web Development",
    "Data Analytics",
    "UI/UX Design"
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Digital Connect Team",
      position: "Development Team",
      company: "Digital Connect",
      content: "Akshay has been an exceptional team member, consistently delivering high-quality websites and showing great enthusiasm for learning new technologies.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      link: "https://digitalconnect.com"
    },
    {
      id: 2,
      name: "InfraBIM Team",
      position: "Development Team",
      company: "InfraBIM Techno Solutions",
      content: "Akshay demonstrated strong technical skills during his internship, particularly in mobile app testing and UI/UX design. He's a quick learner and team player.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      link: "https://infrabim.com"
    },
    {
      id: 3,
      name: "University Faculty",
      position: "Computer Science Department",
      company: "Malla Reddy University",
      content: "Akshay is a dedicated student with excellent problem-solving skills and a passion for technology. He consistently performs well in both theoretical and practical aspects.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      link: "https://mallaeredy.edu.in"
    },
    {
      id: 4,
      name: "Project Collaborators",
      position: "Development Team",
      company: "Various Projects",
      content: "Working with Akshay on projects has been a great experience. His attention to detail and commitment to delivering quality work makes him a valuable team member.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      link: null
    }
  ],
  
  blogs: [
    {
      id: 1,
      title: "Building Modern React Applications with TypeScript",
      description: "A comprehensive guide to building scalable React applications using TypeScript, covering best practices, patterns, and advanced features.",
      featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      category: "Development",
      date: "2024-01-15",
      readTime: 8,
      gallery: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop"
      ],
      content: `
        <h2>Introduction to TypeScript in React</h2>
        <p>TypeScript has become an essential tool for building large-scale React applications. It provides static type checking, better IDE support, and helps catch errors early in development.</p>
        
        <h3>Setting Up TypeScript with React</h3>
        <p>To get started with TypeScript in your React project, you'll need to install the necessary dependencies:</p>
        <pre><code>npm install --save-dev typescript @types/react @types/react-dom</code></pre>
        
        <h3>Key Benefits</h3>
        <ul>
          <li>Static type checking</li>
          <li>Better IDE support with autocomplete</li>
          <li>Early error detection</li>
          <li>Improved code documentation</li>
        </ul>
        
        <blockquote>
          TypeScript is not just about types - it's about building better software with confidence.
        </blockquote>
      `
    },
    {
      id: 2,
      title: "The Future of Web Design: AI-Powered Interfaces",
      description: "Exploring how artificial intelligence is revolutionizing web design and user experience, from automated layouts to personalized content.",
      featuredImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      category: "Design",
      date: "2024-01-10",
      readTime: 6,
      gallery: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1673187736167-4d81fde8c3db?w=800&h=500&fit=crop"
      ],
      content: `
        <h2>AI in Modern Web Design</h2>
        <p>Artificial intelligence is transforming how we approach web design, from automated layout generation to intelligent content personalization.</p>
        
        <h3>Automated Design Systems</h3>
        <p>AI-powered tools can now generate design systems, color palettes, and layouts based on brand guidelines and user preferences.</p>
        
        <h3>Personalized User Experiences</h3>
        <p>Machine learning algorithms analyze user behavior to create personalized interfaces that adapt to individual preferences.</p>
      `
    },
    {
      id: 3,
      title: "Optimizing React Performance: A Deep Dive",
      description: "Learn advanced techniques for optimizing React application performance, including code splitting, memoization, and bundle optimization.",
      featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Development",
      date: "2024-01-05",
      readTime: 10,
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=500&fit=crop"
      ],
      content: `
        <h2>Performance Optimization Strategies</h2>
        <p>React performance optimization is crucial for delivering fast, responsive user experiences. This guide covers the most effective strategies.</p>
        
        <h3>Code Splitting</h3>
        <p>Implement dynamic imports to split your bundle and load code on demand:</p>
        <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));</code></pre>
        
        <h3>Memoization Techniques</h3>
        <p>Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders and expensive calculations.</p>
      `
    },
    {
      id: 4,
      title: "Creating Beautiful Animations with Framer Motion",
      description: "Master the art of creating smooth, engaging animations in React applications using Framer Motion library.",
      featuredImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      category: "Design",
      date: "2023-12-28",
      readTime: 7,
      gallery: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
      ],
      content: `
        <h2>Animation Fundamentals</h2>
        <p>Framer Motion provides a powerful and intuitive API for creating complex animations in React applications.</p>
        
        <h3>Basic Animations</h3>
        <p>Start with simple animations using the motion component:</p>
        <pre><code>&lt;motion.div animate={{ scale: 1.1 }}&gt;Animated Content&lt;/motion.div&gt;</code></pre>
        
        <h3>Advanced Gestures</h3>
        <p>Implement drag, hover, and tap gestures to create interactive animations.</p>
      `
    },
    {
      id: 5,
      title: "Building Scalable CSS Architecture",
      description: "Learn how to structure CSS for large-scale projects using modern methodologies like BEM, CSS Modules, and CSS-in-JS.",
      featuredImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      category: "Development",
      date: "2023-12-20",
      readTime: 9,
      gallery: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=500&fit=crop"
      ],
      content: `
        <h2>CSS Architecture Principles</h2>
        <p>A well-structured CSS architecture is essential for maintaining large codebases and ensuring consistent styling across applications.</p>
        
        <h3>BEM Methodology</h3>
        <p>Block Element Modifier (BEM) provides a clear naming convention for CSS classes:</p>
        <pre><code>.card { }
.card__title { }
.card--featured { }</code></pre>
        
        <h3>CSS Modules</h3>
        <p>CSS Modules provide local scoping for CSS classes, preventing naming conflicts in large applications.</p>
      `
    },
    {
      id: 6,
      title: "The Psychology of Color in Web Design",
      description: "Understanding how color choices impact user perception, emotions, and behavior in web design and user experience.",
      featuredImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=400&fit=crop",
      category: "Design",
      date: "2023-12-15",
      readTime: 5,
      gallery: [
        "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=800&h=500&fit=crop"
      ],
      content: `
        <h2>Color Psychology Fundamentals</h2>
        <p>Colors have a profound impact on human psychology and can significantly influence user behavior and perception.</p>
        
        <h3>Color Associations</h3>
        <ul>
          <li><strong>Blue:</strong> Trust, stability, professionalism</li>
          <li><strong>Red:</strong> Energy, urgency, passion</li>
          <li><strong>Green:</strong> Growth, nature, harmony</li>
          <li><strong>Yellow:</strong> Optimism, creativity, warmth</li>
        </ul>
        
        <h3>Cultural Considerations</h3>
        <p>Color meanings can vary significantly across different cultures, making it important to consider your target audience.</p>
      `
    }
  ]
}; 
