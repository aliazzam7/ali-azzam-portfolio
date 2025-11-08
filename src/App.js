import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-text">ALI AZZAM</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div 
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      ></div>
      
      <div className="background-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      
      <footer className="footer">
        <p>&copy; 2025 Ali Azzam. All rights reserved.</p>
        <p>Crafted with passion 🚀</p>
      </footer>
    </div>
  );
}

export default App;