import React, { useState, useEffect, Suspense, lazy } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import LoadingScreen from './components/LoadingScreen';
import FloatingParticles from './components/FloatingParticles';
import ThemeToggle from './components/ThemeToggle';
import './App.scss';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Interests = lazy(() => import('./components/Interests'));
const Certificates = lazy(() => import('./components/Certificates'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Blogs = lazy(() => import('./components/Blogs'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component for better performance
const SectionLoader = () => (
  <div className="section-loader">
    <div className="loader-spinner"></div>
  </div>
);

// Performance optimized App component
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Reduced loading time for faster perceived performance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Reduced from 2000ms to 1500ms

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply theme to body
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`App ${theme}`}>
      <header>
        <FloatingParticles />
        <ThemeToggle isDarkMode={theme === 'dark'} toggleTheme={toggleTheme} />
      </header>
      <main id="main-content">
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Certificates />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Interests />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Blogs />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Analytics />
      
      <footer>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </footer>
      
      {/* Speed Insights for performance monitoring */}
      <SpeedInsights />
    </div>
  );
}

export default App;
