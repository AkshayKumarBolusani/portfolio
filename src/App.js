import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';
import FloatingParticles from './components/FloatingParticles';
import './App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Reduced loading time for better performance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Reduced from 2000ms to 1500ms

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <FloatingParticles />
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="main-content">
        <Hero />
        <About />
        <Education />
        <Interests />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
