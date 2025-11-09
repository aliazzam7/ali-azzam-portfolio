import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // ← احفظ الـ ref

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // ← استخدم المتغير
      }
    };
  }, []); // ← الـ dependencies فاضية لأنها تشتغل مرة واحدة

  const renderSkillCategory = (categoryName, skillList) => (
    <div className="skill-category" key={categoryName}>
      <h3 className="category-title">{categoryName}</h3>
      <div className="skills-list">
        {skillList.map((skill, index) => (
          <div 
            key={index} 
            className="skill-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className={`skill-progress ${isVisible ? 'animate' : ''}`}
                style={{ '--skill-level': `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-container">
        <div className="section-header">
          <span className="section-subtitle">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {renderSkillCategory('Programming Languages', skills.languages)}
          {renderSkillCategory('Frameworks & Libraries', skills.frameworks)}
          {renderSkillCategory('Tools & Platforms', skills.tools)}
          {renderSkillCategory('Areas of Expertise', skills.expertise)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
// import React, { useState, useEffect, useRef } from 'react';
// import './Skills.css';
// import { skills } from '../../data/portfolioData';

// const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const renderSkillCategory = (categoryName, skillList) => (
//     <div className="skill-category">
//       <h3 className="category-title">{categoryName}</h3>
//       <div className="skills-list">
//         {skillList.map((skill, index) => (
//           <div 
//             key={index} 
//             className="skill-item"
//             style={{ animationDelay: `${index * 0.1}s` }}
//           >
//             <div className="skill-header">
//               <span className="skill-name">{skill.name}</span>
//               <span className="skill-percentage">{skill.level}%</span>
//             </div>
//             <div className="skill-bar">
//               <div 
//                 className={`skill-progress ${isVisible ? 'animate' : ''}`}
//                 style={{ '--skill-level': `${skill.level}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <section className="skills" id="skills" ref={sectionRef}>
//       <div className="skills-container">
//         <div className="section-header">
//           <span className="section-subtitle">What I Know</span>
//           <h2 className="section-title">Skills & Technologies</h2>
//         </div>

//         <div className="skills-grid">
//           {renderSkillCategory('Programming Languages', skills.languages)}
//           {renderSkillCategory('Frameworks & Libraries', skills.frameworks)}
//           {renderSkillCategory('Tools & Platforms', skills.tools)}
//           {renderSkillCategory('Areas of Expertise', skills.expertise)}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;