import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { personalInfo } from '../../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔥 عدّل هون - حط الـ IDs تبعك
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.email
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY        // ← Public Key من EmailJS
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: '✓ Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: '✗ Failed to send message. Please try again or email me directly at ' + personalInfo.email
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-subtitle">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-intro">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="info-content">
                <h4>Phone</h4>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="info-content">
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="social-links">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Instagram */}
                <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.773.131 4.615.355 3.678 1.292 2.74 2.23 2.516 3.387 2.457 4.667.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.059 1.28.283 2.437 1.22 3.375.938.937 2.095 1.161 3.375 1.22C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.28-.059 2.437-.283 3.375-1.22.937-.938 1.161-2.095 1.22-3.375.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.059-1.28-.283-2.437-1.22-3.375C19.385.355 18.228.131 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.595 24 1.325 24H12v-9.294H9.293v-3.622H12V8.413c0-2.688 1.642-4.154 4.038-4.154 1.147 0 2.132.085 2.419.123v2.808h-1.66c-1.303 0-1.556.62-1.556 1.529v2.006h3.111l-.406 3.622H15.24V24h7.435c.729 0 1.325-.594 1.325-1.326V1.326C24 .594 23.404 0 22.675 0z"/>
                  </svg>
                </a>
              {/* {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )} */}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input"
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import './Contact.css';
// import { personalInfo } from '../../data/portfolioData';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [status, setStatus] = useState({ type: '', message: '' });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Replace with your EmailJS credentials
//       const result = await emailjs.send(
//         'YOUR_SERVICE_ID',
//         'YOUR_TEMPLATE_ID',
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//           to_email: personalInfo.email
//         },
//         'YOUR_PUBLIC_KEY'
//       );

//       if (result.text === 'OK') {
//         setStatus({
//           type: 'success',
//           message: 'Message sent successfully! I\'ll get back to you soon.'
//         });
//         setFormData({ name: '', email: '', subject: '', message: '' });
//       }
//     } catch (error) {
//       setStatus({
//         type: 'error',
//         message: 'Failed to send message. Please try again or email me directly.'
//       });
//     } finally {
//       setLoading(false);
//       setTimeout(() => setStatus({ type: '', message: '' }), 5000);
//     }
//   };

//   return (
//     <section className="contact" id="contact">
//       <div className="contact-container">
//         <div className="section-header">
//           <span className="section-subtitle">Let's Connect</span>
//           <h2 className="section-title">Get In Touch</h2>
//           <p className="contact-intro">
//             Have a project in mind or just want to chat? Feel free to reach out!
//           </p>
//         </div>

//         <div className="contact-content">
//           <div className="contact-info">
//             <div className="info-card">
//               <div className="info-icon">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//                 </svg>
//               </div>
//               <div className="info-content">
//                 <h4>Email</h4>
//                 <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
//               </div>
//             </div>

//             <div className="info-card">
//               <div className="info-icon">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//                 </svg>
//               </div>
//               <div className="info-content">
//                 <h4>Phone</h4>
//                 <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
//               </div>
//             </div>

//             <div className="info-card">
//               <div className="info-icon">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//                 </svg>
//               </div>
//               <div className="info-content">
//                 <h4>Location</h4>
//                 <p>{personalInfo.location}</p>
//               </div>
//             </div>

//             <div className="social-links">
//               <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                 </svg>
//               </a>
//               <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="5"
//                 className="form-input"
//               ></textarea>
//             </div>

//             {status.message && (
//               <div className={`status-message ${status.type}`}>
//                 {status.message}
//               </div>
//             )}

//             <button type="submit" className="submit-btn" disabled={loading}>
//               {loading ? (
//                 <>
//                   <span className="spinner"></span>
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   Send Message
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
//                   </svg>
//                 </>
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;