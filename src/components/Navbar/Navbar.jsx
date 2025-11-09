import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <button 
            className="navbar-logo" 
            onClick={() => scrollToSection('home')}
            aria-label="Go to home"
          >
            <span className="logo-text">ALI</span>
            <span className="logo-accent">AZZAM</span>
          </button>

          <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
              <button
                key={item}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
                aria-label={`Navigate to ${item}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Floating Navigation Dots */}
      <div className="nav-dots">
        {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
          <button
            key={item}
            className={`nav-dot ${activeSection === item ? 'active' : ''}`}
            onClick={() => scrollToSection(item)}
            title={item.charAt(0).toUpperCase() + item.slice(1)}
            aria-label={`Navigate to ${item}`}
          />
        ))}
      </div>
    </>
  );
};

export default Navbar;
// import React, { useState, useEffect } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       // Update active section based on scroll position
//       const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
//       const current = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setMobileMenuOpen(false);
//     }
//   };

//   return (
//     <>
//       <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//         <div className="navbar-container">
//           <div className="navbar-logo" onClick={() => scrollToSection('home')}>
//             <span className="logo-text">ALI</span>
//             <span className="logo-accent">AZZAM</span>
//           </div>

//           <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
//             {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
//               <a
//                 key={item}
//                 className={`nav-link ${activeSection === item ? 'active' : ''}`}
//                 onClick={() => scrollToSection(item)}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </a>
//             ))}
//           </div>

//           <button 
//             className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//       </nav>

//       {/* Floating Navigation Dots */}
//       <div className="nav-dots">
//         {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'].map((item) => (
//           <div
//             key={item}
//             className={`nav-dot ${activeSection === item ? 'active' : ''}`}
//             onClick={() => scrollToSection(item)}
//             title={item.charAt(0).toUpperCase() + item.slice(1)}
//           ></div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Navbar;