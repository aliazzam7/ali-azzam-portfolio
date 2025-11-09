import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import { stats, education } from '../../data/portfolioData'; // ← احذف personalInfo

const About = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // ← احفظ الـ ref في متغير

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
     {
    threshold: 0.1, // ↓ خفّضها من 0.3 لـ 0.1
    rootMargin: '0px 0px -10% 0px' // ↓ خليه يشتغل حتى لو ظاهر شوي
    }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // ← استخدم المتغير
      }
    };
  }, [isVisible]); // ← أضف isVisible للـ dependencies

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const target = parseInt(stat.value);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, duration / steps);
    });
  };

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-info">
            <div className="about-text">
              <p>
                I'm a passionate Full-Stack Developer and Cybersecurity Ambassador pursuing my Master's degree 
                in Information System Engineering at Lebanese University. With expertise spanning React.js, 
                Flutter, Firebase, and Laravel, I specialize in building scalable, secure, and innovative digital solutions.
              </p>
              <p>
                My journey combines full lifecycle development proficiency with cybersecurity best practices. 
                As an Ambassador for Semicolon Security, I actively promote security awareness through workshops, 
                CTF competitions, and community engagement.
              </p>
              <p>
                I've successfully delivered production-ready applications featuring AI integration, OCR technology, 
                real-time systems, and cloud services. My approach focuses on creating user-centric solutions that 
                drive measurable business impact while maintaining the highest security standards.
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-value">
                    {counters[index]}{stat.value.includes('+') ? '+' : ''}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3 className="education-title">Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className={`education-card ${edu.current ? 'current' : ''}`}>
                <div className="education-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"/>
                    <path d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"/>
                  </svg>
                </div>
                <div className="education-content">
                  <h4>{edu.degree}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-location">{edu.location}</p>
                  <span className="education-period">{edu.period}</span>
                  {edu.current && <span className="current-badge">Current</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// import React, { useState, useEffect, useRef } from 'react';
// import './About.css';
// import { personalInfo, stats, education } from '../../data/portfolioData';

// const About = () => {
//   const [counters, setCounters] = useState(stats.map(() => 0));
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);
//           animateCounters();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, [isVisible]);

//   const animateCounters = () => {
//     stats.forEach((stat, index) => {
//       const target = parseInt(stat.value);
//       const duration = 2000;
//       const steps = 60;
//       const increment = target / steps;
//       let current = 0;

//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//           current = target;
//           clearInterval(timer);
//         }
//         setCounters(prev => {
//           const newCounters = [...prev];
//           newCounters[index] = Math.floor(current);
//           return newCounters;
//         });
//       }, duration / steps);
//     });
//   };

//   return (
//     <section className="about" id="about" ref={sectionRef}>
//       <div className="about-container">
//         <div className="section-header">
//           <span className="section-subtitle">Get To Know</span>
//           <h2 className="section-title">About Me</h2>
//         </div>

//         <div className="about-content">
//           <div className="about-info">
//             <div className="about-text">
//               <p>
//                 I'm a passionate Full-Stack Developer and Cybersecurity Ambassador pursuing my Master's degree 
//                 in Information System Engineering at Lebanese University. With expertise spanning React.js, 
//                 Flutter, Firebase, and Laravel, I specialize in building scalable, secure, and innovative digital solutions.
//               </p>
//               <p>
//                 My journey combines full lifecycle development proficiency with cybersecurity best practices. 
//                 As an Ambassador for Semicolon Security, I actively promote security awareness through workshops, 
//                 CTF competitions, and community engagement.
//               </p>
//               <p>
//                 I've successfully delivered production-ready applications featuring AI integration, OCR technology, 
//                 real-time systems, and cloud services. My approach focuses on creating user-centric solutions that 
//                 drive measurable business impact while maintaining the highest security standards.
//               </p>
//             </div>

//             <div className="stats-grid">
//               {stats.map((stat, index) => (
//                 <div key={index} className="stat-card">
//                   <div className="stat-value">
//                     {counters[index]}{stat.value.includes('+') ? '+' : ''}
//                   </div>
//                   <div className="stat-label">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="education-section">
//             <h3 className="education-title">Education</h3>
//             {education.map((edu) => (
//               <div key={edu.id} className={`education-card ${edu.current ? 'current' : ''}`}>
//                 <div className="education-icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"/>
//                     <path d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"/>
//                   </svg>
//                 </div>
//                 <div className="education-content">
//                   <h4>{edu.degree}</h4>
//                   <p className="education-institution">{edu.institution}</p>
//                   <p className="education-location">{edu.location}</p>
//                   <span className="education-period">{edu.period}</span>
//                   {edu.current && <span className="current-badge">Current</span>}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;