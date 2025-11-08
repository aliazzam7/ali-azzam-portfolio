import React, { useState } from 'react';
import './Experience.css';
import { experiences } from '../../data/portfolioData';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${expandedId === exp.id ? 'expanded' : ''} ${exp.current ? 'current' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot">
                {exp.current && <div className="pulse-ring"></div>}
              </div>
              
              <div className="timeline-content" onClick={() => toggleExpand(exp.id)}>
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  {exp.current && <span className="current-badge">Current</span>}
                </div>
                
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                      <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
                    </svg>
                    {exp.period}
                  </span>
                  <span className="timeline-location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {exp.location}
                  </span>
                </div>

                <div className={`timeline-description ${expandedId === exp.id ? 'show' : ''}`}>
                  <ul>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button className="expand-btn">
                  {expandedId === exp.id ? 'Show Less' : 'Show More'}
                  <svg 
                    className={`arrow ${expandedId === exp.id ? 'rotated' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;