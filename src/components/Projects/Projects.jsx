import React, { useState } from 'react';
import './Projects.css';
import { projects } from '../../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.screenshots) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.screenshots.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openProject(project)}
            >
              <div className="project-image">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                  />
                )}
                <div className="project-overlay">
                  <button className="view-project-btn">View Details</button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-badge more">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal with Image Gallery */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            {/* Image Gallery */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <div className="image-gallery">
                <button className="gallery-btn prev" onClick={prevImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                
                <div className="gallery-image-container">
                  <img 
                    src={selectedProject.screenshots[currentImageIndex]} 
                    alt={`${selectedProject.title} - Screenshot ${currentImageIndex + 1}`}
                    className="gallery-image"
                  />
                  <div className="image-counter">
                    {currentImageIndex + 1} / {selectedProject.screenshots.length}
                  </div>
                </div>
                
                <button className="gallery-btn next" onClick={nextImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>
            )}

            {/* Thumbnails */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
              <div className="thumbnails">
                {selectedProject.screenshots.map((screenshot, idx) => (
                  <div 
                    key={idx}
                    className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <img src={screenshot} alt={`Thumbnail ${idx + 1}`} />
                  </div>
                ))}
              </div>
            )}
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <span className="modal-category">{selectedProject.category} • {selectedProject.year}</span>
            </div>
            
            <p className="modal-description">{selectedProject.description}</p>
            
            {selectedProject.features && (
              <div className="modal-features">
                <h3>Key Features</h3>
                <ul>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="modal-tech">
              <h3>Technologies Used</h3>
              <div className="tech-list">
                {selectedProject.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge-large">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
// import React, { useState } from 'react';
// import './Projects.css';
// import { projects } from '../../data/portfolioData';

// const Projects = () => {
//   const [filter, setFilter] = useState('All');
//   const [selectedProject, setSelectedProject] = useState(null);

//   const categories = ['All', ...new Set(projects.map(p => p.category))];
  
//   const filteredProjects = filter === 'All' 
//     ? projects 
//     : projects.filter(p => p.category === filter);

//   return (
//     <section className="projects" id="projects">
//       <div className="projects-container">
//         <div className="section-header">
//           <span className="section-subtitle">My Work</span>
//           <h2 className="section-title">Featured Projects</h2>
//         </div>

//         <div className="filter-buttons">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`filter-btn ${filter === category ? 'active' : ''}`}
//               onClick={() => setFilter(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="projects-grid">
//           {filteredProjects.map((project, index) => (
//             <div 
//               key={project.id} 
//               className={`project-card ${project.featured ? 'featured' : ''}`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//               onClick={() => setSelectedProject(project)}
//             >
//               <div className="project-image">
//                 <div className="project-overlay">
//                   <button className="view-project-btn">View Details</button>
//                 </div>
//               </div>
              
//               <div className="project-content">
//                 <div className="project-header">
//                   <h3 className="project-title">{project.title}</h3>
//                   {project.featured && <span className="featured-badge">Featured</span>}
//                 </div>
                
//                 <p className="project-description">{project.description}</p>
                
//                 <div className="project-tech">
//                   {project.tech.slice(0, 3).map((tech, idx) => (
//                     <span key={idx} className="tech-badge">{tech}</span>
//                   ))}
//                   {project.tech.length > 3 && (
//                     <span className="tech-badge more">+{project.tech.length - 3}</span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Project Modal */}
//       {selectedProject && (
//         <div className="project-modal" onClick={() => setSelectedProject(null)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="modal-close" onClick={() => setSelectedProject(null)}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
//               </svg>
//             </button>
            
//             <div className="modal-header">
//               <h2>{selectedProject.title}</h2>
//               <span className="modal-category">{selectedProject.category} • {selectedProject.year}</span>
//             </div>
            
//             <p className="modal-description">{selectedProject.description}</p>
            
//             {selectedProject.features && (
//               <div className="modal-features">
//                 <h3>Key Features</h3>
//                 <ul>
//                   {selectedProject.features.map((feature, idx) => (
//                     <li key={idx}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
            
//             <div className="modal-tech">
//               <h3>Technologies Used</h3>
//               <div className="tech-list">
//                 {selectedProject.tech.map((tech, idx) => (
//                   <span key={idx} className="tech-badge-large">{tech}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;