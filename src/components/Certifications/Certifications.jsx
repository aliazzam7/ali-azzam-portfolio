import React, { useState } from 'react';
import './Certifications.css';
import { certifications } from '../../data/portfolioData';

const Certifications = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openCertModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <div className="section-header">
          <span className="section-subtitle">Continuous Learning</span>
          <h2 className="section-title">Certifications & Training</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className={`cert-card ${cert.featured ? 'featured' : ''} ${expandedId === cert.id ? 'expanded' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* صورة الشهادة بدل الـ Icon */}
              <div 
                className="cert-image-container"
                onClick={() => openCertModal(cert)}
              >
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="cert-image"
                  />
                ) : (
                  <div className="cert-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L3 7v4c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V7.3l7-3.89v8.58z"/>
                    </svg>
                  </div>
                )}
                <div className="cert-image-overlay">
                  <span>View Certificate</span>
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-institution">{cert.institution}</p>
                <span className="cert-period">{cert.period}</span>

                <div className={`cert-description ${expandedId === cert.id ? 'show' : ''}`}>
                  <ul>
                    {cert.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="cert-expand-btn"
                  onClick={() => toggleExpand(cert.id)}
                >
                  {expandedId === cert.id ? 'Show Less' : 'Show Details'}
                  <svg 
                    className={`arrow ${expandedId === cert.id ? 'rotated' : ''}`}
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

              {cert.featured && (
                <div className="cert-ribbon">Featured</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal لعرض الشهادة بحجم كبير */}
      {selectedCert && selectedCert.image && (
        <div className="cert-modal" onClick={closeCertModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeCertModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            <div className="cert-modal-header">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.institution} • {selectedCert.period}</p>
            </div>

            <div className="cert-modal-image">
              <img src={selectedCert.image} alt={selectedCert.title} />
            </div>

            <div className="cert-modal-description">
              <h4>Details:</h4>
              <ul>
                {selectedCert.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
// import React, { useState } from 'react';
// import './Certifications.css';
// import { certifications } from '../../data/portfolioData';

// const Certifications = () => {
//   const [expandedId, setExpandedId] = useState(null);

//   const toggleExpand = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   return (
//     <section className="certifications" id="certifications">
//       <div className="certifications-container">
//         <div className="section-header">
//           <span className="section-subtitle">Continuous Learning</span>
//           <h2 className="section-title">Certifications & Training</h2>
//         </div>

//         <div className="certifications-grid">
//           {certifications.map((cert, index) => (
//             <div 
//               key={cert.id} 
//               className={`cert-card ${cert.featured ? 'featured' : ''} ${expandedId === cert.id ? 'expanded' : ''}`}
//               style={{ animationDelay: `${index * 0.15}s` }}
//             >
//               <div className="cert-icon">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2L3 7v4c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V7.3l7-3.89v8.58z"/>
//                 </svg>
//               </div>

//               <div className="cert-content">
//                 <h3 className="cert-title">{cert.title}</h3>
//                 <p className="cert-institution">{cert.institution}</p>
//                 <span className="cert-period">{cert.period}</span>

//                 <div className={`cert-description ${expandedId === cert.id ? 'show' : ''}`}>
//                   <ul>
//                     {cert.description.map((item, idx) => (
//                       <li key={idx}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <button 
//                   className="cert-expand-btn"
//                   onClick={() => toggleExpand(cert.id)}
//                 >
//                   {expandedId === cert.id ? 'Show Less' : 'Show Details'}
//                   <svg 
//                     className={`arrow ${expandedId === cert.id ? 'rotated' : ''}`}
//                     xmlns="http://www.w3.org/2000/svg" 
//                     width="16" 
//                     height="16" 
//                     viewBox="0 0 24 24" 
//                     fill="currentColor"
//                   >
//                     <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
//                   </svg>
//                 </button>
//               </div>

//               {cert.featured && (
//                 <div className="cert-ribbon">Featured</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;