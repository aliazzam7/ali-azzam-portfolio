import chalet from '../assets/images/chalet/chalet.jpeg';
import chalet2 from '../assets/images/chalet/chalet2.jpeg';
import chalet3 from '../assets/images/chalet/chalet3.jpeg';
import chalet4 from '../assets/images/chalet/chalet4.jpeg';

import cofeeapp from '../assets/images/coffeapp/cofeeapp.jpeg';

import ctf from '../assets/images/certifications/ctf.jpg';
import cyberday from '../assets/images/certifications/cyberday.jpg';
import devopscert from '../assets/images/certifications/devopscert.jpeg';
import EmpSkills from '../assets/images/certifications/EmpSkills.png';
import ESA from '../assets/images/certifications/ESA.png';
import ESIEE from '../assets/images/certifications/ESIEE.png';
import flutter from '../assets/images/certifications/flutter.png';
import opss from '../assets/images/certifications/opss.png';
import prompteng from '../assets/images/certifications/prompteng.png';
import timemang from '../assets/images/certifications/timemang.png';
import ml from '../assets/images/certifications/ml.png';

import gym from '../assets/images/gym/gym.jpeg';
import gym1 from '../assets/images/gym/gym1.jpeg';
import gym2 from '../assets/images/gym/gym2.jpeg';
import gym3 from '../assets/images/gym/gym3.jpeg';
import gym4 from '../assets/images/gym/gym4.jpeg';

import notiapp from '../assets/images/notificationapp/notiapp.jpeg';

import appicon from '../assets/images/drivewise/appicon.png';
import bookingformpage1 from '../assets/images/drivewise/bookingformpage1.jpeg';
import cardetails1 from '../assets/images/drivewise/cardetails1.jpeg';
import chatbot1 from '../assets/images/drivewise/chatbot1.jpeg';
import home2 from '../assets/images/drivewise/home2.png';
import icon from '../assets/images/drivewise/icon.png';
import licensetrue from '../assets/images/drivewise/licensetrue.jpeg';
import notificationat10 from '../assets/images/drivewise/notificationat10.jpeg';
import emailotp from '../assets/images/drivewise/emailotp.png';

import chrono1 from '../assets/images/chrono/chrono1.png';
import chrono2 from '../assets/images/chrono/chrono2.png';
import chrono3 from '../assets/images/chrono/chrono3.png';
import chrono4 from '../assets/images/chrono/chrono4.png';

import food1 from '../assets/images/food/food1.png';
import food2 from '../assets/images/food/food2.png';
import food3 from '../assets/images/food/food3.png';
import food4 from '../assets/images/food/food4.png';
import food5 from '../assets/images/food/food5.png';

import restapp1 from '../assets/images/restapp/restapp1.jpeg';
import restapp2 from '../assets/images/restapp/restapp2.jpeg';
import restapp3 from '../assets/images/restapp/restapp3.jpeg';
import restapp4 from '../assets/images/restapp/restapp4.jpeg';

export const personalInfo = {
  name: "ALI AZZAM",
  title: "Full-Stack Developer & CyberSecurity Ambassador",
  location: "Lebanon",
  phone: "+961 76 915 446",
  email: "aliazzzam20@gmail.com",
  linkedin: "https://www.linkedin.com/in/ali-azzam-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/aliazzam",
  portfolio: "#",
  instagram: "https://www.instagram.com/ali_azam0?igsh=NzIzc3h0cGtxYWc1",
  facebook: "https://www.facebook.com/share/1Bd5ojXUpA/",
  bio: "Results-driven Full-Stack Developer and Cybersecurity Ambassador with expertise in React.js, Flutter, Firebase, and Laravel. Skilled in delivering production-ready applications featuring AI, OCR, real-time systems, payment processing, and cloud services."
};

export const experiences = [
  {
    id: 1,
    role: "Ambassador – Semicolon Security",
    company: "CyberSecurity Community",
    period: "September 2025 – Present",
    location: "Remote",
    description: [
      "Representing Semicolon Security & Academy as a CyberSecurity Ambassador",
      "Organizing and participating in CyberSecurity events, CTF competitions, and workshops",
      "Engaging in community outreach to spread awareness about cybersecurity practices"
    ],
    current: true
  },
  {
    id: 2,
    role: "Full-Stack Developer Intern",
    company: "Violet Pro",
    period: "June 2025 – August 2025",
    location: "Tyr, Lebanon",
    description: [
      "Completed a 2-month internship while working on Master's senior project",
      "Built full-stack Car Reservation App (Drive Wise) with Admin Web Platform (React.js + Firebase)",
      "Developed Mobile App for Users (Flutter + Firebase)",
      "Implemented Email OTP, OCR for driver's license, Google Maps, Chatbot (Gemini API), real-time notifications"
    ],
    current: false
  },
  {
    id: 3,
    role: "Mobile Application Developer",
    company: "Freelance",
    period: "March 2024 – Present",
    location: "Remote",
    description: [
      "Developed mobile apps using Flutter",
      "Handled back-end services and Firebase database integration"
    ],
    current: true
  },
  {
    id: 4,
    role: "Web Developer",
    company: "Freelance",
    period: "March 2024 – Present",
    location: "Remote",
    description: [
      "Built custom websites for clients using modern stacks (React.js, Laravel, etc.)"
    ],
    current: true
  },
  {
    id: 5,
    role: "IT Intern",
    company: "Imam al-Sadr Foundation",
    period: "May 2023 – July 2024",
    location: "Tyr, Lebanon",
    description: [
      "Contributed to internal software projects using VB.Net, Java, and Python",
      "Handled database administration and hardware maintenance"
    ],
    current: false
  }
];

export const projects = [
  {
    id: 1,
    title: "Drive Wise – Car Reservation App",
    category: "Full-Stack",
    year: "2025",
    description: "Full-stack car reservation platform developed for Master's thesis with admin web panel and user mobile app",
    tech: ["React.js", "Flutter", "Firebase", "Google Cloud Vision API", "Gemini API", "EmailJS"],
    features: [
      "OTP authentication via EmailJS",
      "OCR license verification using Google Cloud Vision API",
      "Google Maps integration for geolocation",
      "AI chatbot powered by Gemini API",
      "Real-time notifications and status updates",
      "Digital contract management"
    ],
    image: home2,
    screenshots: [home2, appicon, bookingformpage1, cardetails1, chatbot1, licensetrue, notificationat10, emailotp],
    featured: true
  },
  {
    id: 2,
    title: "ChronoTrack HR Attendance System",
    category: "Frontend",
    year: "2025",
    description: "Employee attendance tracking web interface with check-in/out functionality and salary calculation",
    tech: ["React.js", "CSS3", "JavaScript"],
    features: [
      "Check-in/out functionality",
      "Automated salary calculation",
      "Employee dashboard",
      "Admin panel for management"
    ],
    image: chrono1,
    screenshots: [chrono1, chrono2, chrono3, chrono4],
    featured: true
  },
  {
    id: 3,
    title: "Restaurant Mobile App",
    category: "Mobile",
    year: "2025",
    description: "Offline-first mobile app for restaurant with menu browsing, cart, and Stripe payment integration",
    tech: ["Flutter", "Stripe API", "SQLite"],
    features: [
      "Offline-first architecture",
      "Menu browsing and cart management",
      "Stripe payment integration",
      "Order history tracking"
    ],
    image: restapp1,
    screenshots: [restapp1, restapp2, restapp3, restapp4],
    featured: true
  },
  {
    id: 4,
    title: "Food Delivery Website",
    category: "Full-Stack",
    year: "2025",
    description: "Restaurant food delivery website similar to Toters with complete ordering system",
    tech: ["React.js", "Laravel", "MySQL", "PHP"],
    features: [
      "Restaurant management system",
      "Real-time order tracking",
      "Payment gateway integration",
      "Admin and vendor dashboards"
    ],
    image: food1,
    screenshots: [food1, food2, food3, food4, food5],
    featured: false
  },
  {
    id: 5,
    title: "Coffee Shop Mobile App",
    category: "Mobile",
    year: "2024",
    description: "Mobile application for coffee shop with menu browsing and ordering system",
    tech: ["Flutter", "Firebase", "Stripe API"],
    features: [
      "Menu browsing with categories",
      "Shopping cart functionality",
      "Order placement and tracking",
      "Payment integration"
    ],
    image: cofeeapp,
    screenshots: [cofeeapp],
    featured: true
  },
  {
    id: 6,
    title: "Gym Management Website",
    category: "Full-Stack",
    year: "2024",
    description: "Full-featured gym website for trainer booking, time slots, and equipment sales",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    features: [
      "Trainer booking system",
      "Time slot management",
      "Equipment e-commerce",
      "Member dashboard"
    ],
    image: gym,
    screenshots: [gym, gym1, gym2, gym3, gym4],
    featured: false
  },
  {
    id: 7,
    title: "Chalet Reservation Website",
    category: "Full-Stack",
    year: "2024",
    description: "Booking platform with dynamic calendar and reservation system for chalet rentals",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Dynamic booking calendar",
      "Real-time availability checking",
      "Reservation management system",
      "Admin dashboard for bookings"
    ],
    image: chalet,
    screenshots: [chalet, chalet2, chalet3, chalet4],
    featured: false
  },
  {
    id: 8,
    title: "Mobile Notification App",
    category: "Mobile",
    year: "2024",
    description: "Real-time push notification mobile application for freelance client",
    tech: ["Flutter", "Firebase", "Cloud Messaging"],
    features: [
      "Real-time push notifications",
      "Notification history",
      "User preference settings",
      "Firebase Cloud Messaging integration"
    ],
    image: notiapp,
    screenshots: [notiapp],
    featured: false
  }
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "PHP", level: 85 },
    { name: "C/C++", level: 75 },
    { name: "C#", level: 70 }
  ],
  frameworks: [
    { name: "React.js", level: 95 },
    { name: "Flutter", level: 90 },
    { name: "Laravel", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "ASP.Net", level: 75 }
  ],
  tools: [
    { name: "Firebase", level: 90 },
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Figma", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "SQL Server", level: 85 },
    { name: "Kali Linux", level: 70 }
  ],
  expertise: [
    { name: "AI/ML Integration", level: 85 },
    { name: "Neural Networks", level: 80 },
    { name: "DevOps", level: 75 },
    { name: "MVC Architecture", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "Cybersecurity", level: 80 }
  ]
};

export const certifications = [
  {
    id: 1,
    title: "Flutter Certification",
    institution: "SE Factory",
    period: "2025",
    description: [
      "Flutter course covering OOP and state management",
      "Mobile app development best practices",
      "Cross-platform development techniques"
    ],
    image: flutter,
    featured: true
  },
  {
    id: 2,
    title: "Machine Learning Certification",
    institution: "SE Factory",
    period: "2025",
    description: [
      "Advanced Machine Learning techniques",
      "Neural Networks and Deep Learning",
      "Model deployment and optimization"
    ],
    image: ml,
    featured: true
  },
  {
    id: 3,
    title: "DevOps, DataOps & MLOps Certification",
    institution: "SE Factory",
    period: "2025",
    description: [
      "CI/CD pipelines implementation",
      "Container orchestration with Docker",
      "MLOps best practices"
    ],
    image: opss,
    featured: true
  },
  {
    id: 4,
    title: "Prompt Engineering & Generative AI Certification",
    institution: "SE Factory",
    period: "2025",
    description: [
      "Created custom ChatGPT applications",
      "Large Language Models (LLMs) training",
      "Advanced prompt engineering techniques",
      "AI model optimization and practical integration"
    ],
    image: prompteng, // ← استخدم null لأنه الصورة مش موجودة
    featured: true
  },
  {
    id: 5,
    title: "Time Management & Communication",
    institution: "SE Factory",
    period: "2025",
    description: [
      "Effective time management strategies",
      "Professional communication skills",
      "Team collaboration techniques"
    ],
    image: timemang,
    featured: true
  },
  {
    id: 6,
    title: "Employability Skills",
    institution: "SE Factory",
    period: "2025",
    description: [
      "Professional development",
      "Career planning and strategy",
      "Interview preparation"
    ],
    image: EmpSkills, // ← استخدم null لأنه الصورة مش موجودة
    featured: true
  },
  {
    id: 7,
    title: "CyberSecurity Course & CTF Competition 2025",
    institution: "SemiColon Academy",
    period: "1 June 2025",
    description: [
      "Topics: Cryptography, Application Security, Reverse Engineering",
      "Participated in CTF competition at Lebanese University",
      "Collaborated with Google Developer Group and SemiColon"
    ],
    image: ctf,
    featured: true
  },
  {
    id: 8,
    title: "Cyber Security Day",
    institution: "SemiColon Academy x GDG",
    period: "2025",
    description: [
      "Major cybersecurity event in Beirut with world-class hackers",
      "Awards ceremony for CTF 2025 winners",
      "Collaboration with Google Developer Group"
    ],
    image: cyberday,
    featured: true
  },
  {
    id: 9,
    title: "Full Stack Web Development Bootcamp",
    institution: "ESA Coding Lab",
    period: "May 2024 – Dec 2024",
    description: [
      "Completed intensive training program",
      "Built 3 large-scale web applications",
      "Modern full-stack development practices"
    ],
    image: ESA,
    featured: true
  },
  {
    id: 10,
    title: "Full Stack Web Development Bootcamp",
    institution: "ESIEE (France - Paris)",
    period: "May 2024 – Dec 2024",
    description: [
      "Completed intensive training in Paris",
      "Built 3 large-scale web applications",
      "Advanced frontend and backend development",
      "Full-stack project architecture"
    ],
    image: ESIEE,
    featured: false
  },
  {
    id: 11,
    title: "Operations & System Security - Automate the Future",
    institution: "RASS (Roumieh Advanced Software Society)",
    period: "2024",
    description: [
      "Successfully completed 'Automate the Future' workshop",
      "Gained hands-on knowledge in DevOps fundamentals",
      "Learned automation tools and cloud deployment techniques",
      "Organized by RASS - ULFG II"
    ],
    image: devopscert,
    featured: false
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Information System Engineering",
    institution: "Lebanese University – Faculty of Technology",
    location: "Saida, Lebanon",
    period: "Jan 2024 – Present",
    current: true
  },
  {
    id: 2,
    degree: "Bachelor of Engineering – Technology and Science of Information Systems",
    institution: "Lebanese University – Faculty of Technology",
    location: "Saida, Lebanon",
    period: "Sep 2020 – Oct 2023",
    current: false
  }
];

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Certifications", value: "11" },
  { label: "Active Tasks", value: "90+" }
];

// import chalet from '../assets/images/chalet/chalet.jpeg';
// import chalet2 from '../assets/images/chalet/chalet2.jpeg';
// import chalet3 from '../assets/images/chalet/chalet3.jpeg';
// import chalet4 from '../assets/images/chalet/chalet4.jpeg';

// import cofeeapp from '../assets/images/coffeapp/cofeeapp.jpeg';

// import ctf from '../assets/images/certifications/ctf.jpg';
// import cyberday from '../assets/images/certifications/cyberday.jpg';
// import devopscert from '../assets/images/certifications/devopscert.jpeg';
// import EmpSkills from '../assets/images/certifications/EmpSkills.jpg';
// import ESA from '../assets/images/certifications/ESA.png';
// import ESIEE from '../assets/images/certifications/ESIEE.png';
// import flutter from '../assets/images/certifications/flutter.png';
// import opss from '../assets/images/certifications/opss.png';
// import prompteng from '../assets/images/certifications/prompteng.jpeg';
// import timemang from '../assets/images/certifications/timemang.png';
// import ml from '../assets/images/certifications/ml.png';

// import gym from '../assets/images/gym/gym.jpeg';
// import gym1 from '../assets/images/gym/gym1.jpeg';
// import gym2 from '../assets/images/gym/gym2.jpeg';
// import gym3 from '../assets/images/gym/gym3.jpeg';
// import gym4 from '../assets/images/gym/gym4.jpeg';


// import notiapp from '../assets/images/notificationapp/notiapp.jpeg';

// import appicon from '../assets/images/drivewise/appicon.png';
// import bookingformpage1 from '../assets/images/drivewise/bookingformpage1.jpeg';
// import cardetails1 from '../assets/images/drivewise/cardetails1.jpeg';
// import chatbot1 from '../assets/images/drivewise/chatbot1.jpeg';
// import home2 from '../assets/images/drivewise/home2.png';
// import icon from '../assets/images/drivewise/icon.png';
// import licensetrue from '../assets/images/drivewise/licensetrue.jpeg';
// import notificationat10 from '../assets/images/drivewise/notificationat10.jpeg';
// import emailotp from '../assets/images/drivewise/emailotp.png';

// import chrono1 from '../assets/images/chrono/chrono1.png';
// import chrono2 from '../assets/images/chrono/chrono2.png';
// import chrono3 from '../assets/images/chrono/chrono3.png';
// import chrono4 from '../assets/images/chrono/chrono4.png';

// import food1 from '../assets/images/food/food1.png';
// import food2 from '../assets/images/food/food2.png';
// import food3 from '../assets/images/food/food3.png';
// import food4 from '../assets/images/food/food4.png';
// import food5 from '../assets/images/food/food5.png';

// import restapp1 from '../assets/images/restapp/restapp1.jpeg';
// import restapp2 from '../assets/images/restapp/restapp2.jpeg';
// import restapp3 from '../assets/images/restapp/restapp3.jpeg';
// import restapp4 from '../assets/images/restapp/restapp4.jpeg';



// export const personalInfo = {
//   name: "ALI AZZAM",
//   title: "Full-Stack Developer & CyberSecurity Ambassador",
//   location: "Lebanon",
//   phone: "+961 76 915 446",
//   email: "aliazzzam20@gmail.com",
//   linkedin: "https://www.linkedin.com/in/ali-azzam-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   // github: "https://github.com/aliazzam",
//   portfolio: "#",
//   bio: "Results-driven Full-Stack Developer and Cybersecurity Ambassador with expertise in React.js, Flutter, Firebase, and Laravel. Skilled in delivering production-ready applications featuring AI, OCR, real-time systems, payment processing, and cloud services."
// };

// export const experiences = [
//   {
//     id: 1,
//     role: "Ambassador – Semicolon Security",
//     company: "CyberSecurity Community",
//     period: "September 2025 – Present",
//     location: "Remote",
//     description: [
//       "Representing Semicolon Security & Academy as a CyberSecurity Ambassador",
//       "Organizing and participating in CyberSecurity events, CTF competitions, and workshops",
//       "Engaging in community outreach to spread awareness about cybersecurity practices"
//     ],
//     current: true
//   },
//   {
//     id: 2,
//     role: "Full-Stack Developer Intern",
//     company: "Violet Pro",
//     period: "June 2025 – August 2025",
//     location: "Tyr, Lebanon",
//     description: [
//       "Completed a 2-month internship while working on Master's senior project",
//       "Built full-stack Car Reservation App (Drive Wise) with Admin Web Platform (React.js + Firebase)",
//       "Developed Mobile App for Users (Flutter + Firebase)",
//       "Implemented Email OTP, OCR for driver's license, Google Maps, Chatbot (Gemini API), real-time notifications"
//     ],
//     current: false
//   },
//   {
//     id: 3,
//     role: "Mobile Application Developer",
//     company: "Freelance",
//     period: "March 2024 – Present",
//     location: "Remote",
//     description: [
//       "Developed mobile apps using Flutter",
//       "Handled back-end services and Firebase database integration"
//     ],
//     current: true
//   },
//   {
//     id: 4,
//     role: "Web Developer",
//     company: "Freelance",
//     period: "March 2024 – Present",
//     location: "Remote",
//     description: [
//       "Built custom websites for clients using modern stacks (React.js, Laravel, etc.)"
//     ],
//     current: true
//   },
//   {
//     id: 5,
//     role: "IT Intern",
//     company: "Imam al-Sadr Foundation",
//     period: "May 2023 – July 2024",
//     location: "Tyr, Lebanon",
//     description: [
//       "Contributed to internal software projects using VB.Net, Java, and Python",
//       "Handled database administration and hardware maintenance"
//     ],
//     current: false
//   }
// ];

// export const projects = [
//   {
//     id: 1,
//     title: "Drive Wise – Car Reservation App",
//     category: "Full-Stack",
//     year: "2025",
//     description: "Full-stack car reservation platform developed for Master's thesis with admin web panel and user mobile app",
//     tech: ["React.js", "Flutter", "Firebase", "Google Cloud Vision API", "Gemini API", "EmailJS"],
//     features: [
//       "OTP authentication via EmailJS",
//       "OCR license verification using Google Cloud Vision API",
//       "Google Maps integration for geolocation",
//       "AI chatbot powered by Gemini API",
//       "Real-time notifications and status updates",
//       "Digital contract management"
//     ],
//     image: "project1.jpg",
//     featured: true
//   },
//   {
//     id: 2,
//     title: "ChronoTrack HR Attendance System",
//     category: "Frontend",
//     year: "2025",
//     description: "Employee attendance tracking web interface with check-in/out functionality and salary calculation",
//     tech: ["React.js", "CSS3", "JavaScript"],
//     features: [
//       "Check-in/out functionality",
//       "Automated salary calculation",
//       "Employee dashboard",
//       "Admin panel for management"
//     ],
//     image: "project2.jpg",
//     featured: true
//   },
//   {
//     id: 3,
//     title: "Restaurant Mobile App",
//     category: "Mobile",
//     year: "2025",
//     description: "Offline-first mobile app for restaurant with menu browsing, cart, and Stripe payment integration",
//     tech: ["Flutter", "Stripe API", "SQLite"],
//     features: [
//       "Offline-first architecture",
//       "Menu browsing and cart management",
//       "Stripe payment integration",
//       "Order history tracking"
//     ],
//     image: "project3.jpg",
//     featured: true
//   },
//   {
//     id: 4,
//     title: "Food Delivery Website",
//     category: "Full-Stack",
//     year: "2025",
//     description: "Restaurant food delivery website similar to Toters with complete ordering system",
//     tech: ["React.js", "Laravel", "MySQL", "PHP"],
//     features: [
//       "Restaurant management system",
//       "Real-time order tracking",
//       "Payment gateway integration",
//       "Admin and vendor dashboards"
//     ],
//     image: "project4.jpg",
//     featured: false
//   },
//   {
//     id: 5,
//     title: "Finance Tracker with AI",
//     category: "Web App",
//     year: "2024",
//     description: "Personal finance app with AI-powered spending analysis and summaries",
//     tech: ["React.js", "Gemini API", "SQL", "Node.js"],
//     features: [
//       "AI-powered spending analysis",
//       "Automated financial summaries",
//       "Budget tracking and alerts",
//       "Visual spending reports"
//     ],
//     image: transaction,
//     featured: true
//   },
//   {
//     id: 6,
//     title: "Gym Management Website",
//     category: "Full-Stack",
//     year: "2024",
//     description: "Full-featured gym website for trainer booking, time slots, and equipment sales",
//     tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
//     features: [
//       "Trainer booking system",
//       "Time slot management",
//       "Equipment e-commerce",
//       "Member dashboard"
//     ],
//     image: gym,
//     featured: false
//   }
// ];

// export const skills = {
//   languages: [
//     { name: "JavaScript", level: 90 },
//     { name: "Python", level: 85 },
//     { name: "Java", level: 80 },
//     { name: "PHP", level: 85 },
//     { name: "C/C++", level: 75 },
//     { name: "C#", level: 70 }
//   ],
//   frameworks: [
//     { name: "React.js", level: 95 },
//     { name: "Flutter", level: 90 },
//     { name: "Laravel", level: 85 },
//     { name: "Node.js", level: 80 },
//     { name: "ASP.Net", level: 75 }
//   ],
//   tools: [
//     { name: "Firebase", level: 90 },
//     { name: "Git/GitHub", level: 90 },
//     { name: "Docker", level: 75 },
//     { name: "Figma", level: 80 },
//     { name: "MongoDB", level: 85 },
//     { name: "SQL Server", level: 85 },
//     { name: "Kali Linux", level: 70 }
//   ],
//   expertise: [
//     { name: "AI/ML Integration", level: 85 },
//     { name: "Neural Networks", level: 80 },
//     { name: "DevOps", level: 75 },
//     { name: "MVC Architecture", level: 90 },
//     { name: "REST APIs", level: 95 },
//     { name: "Cybersecurity", level: 80 }
//   ]
// };

// export const certifications = [
//   {
//     id: 1,
//     title: "SE Factory Training Program",
//     institution: "SE Factory",
//     period: "Apr 2025 – July 2025",
//     description: [
//       "Phase 1: Flutter + GenAI, Prompt Engineering + Employability Skills",
//       "Phase 2: Machine Learning + DevOps, MLOps, DataOps + Time Management, Communication"
//     ],
//     featured: true
//   },
//   {
//     id: 2,
//     title: "CyberSecurity Course",
//     institution: "SemiColon Academy",
//     period: "Mar 2025 – June 2025",
//     description: [
//       "Topics: Cryptography, Application Security, Reverse Engineering",
//       "Participated in CTF in collaboration with Google Developer Group and SemiColon"
//     ],
//     featured: true
//   },
//   {
//     id: 3,
//     title: "Full Stack Web Development Bootcamp",
//     institution: "ESA Coding Lab (France)",
//     period: "May 2024 – Dec 2024",
//     description: [
//       "Completed intensive training",
//       "Built 3 large-scale web applications"
//     ],
//     featured: true
//   }
// ];

// export const education = [
//   {
//     id: 1,
//     degree: "Master of Science in Information System Engineering",
//     institution: "Lebanese University – Faculty of Technology",
//     location: "Saida, Lebanon",
//     period: "Jan 2024 – Present",
//     current: true
//   },
//   {
//     id: 2,
//     degree: "Bachelor of Engineering – Technology and Science of Information Systems",
//     institution: "Lebanese University – Faculty of Technology",
//     location: "Saida, Lebanon",
//     period: "Sep 2020 – Oct 2023",
//     current: false
//   }
// ];

// export const stats = [
//   { label: "Years Experience", value: "2+" },
//   { label: "Projects Completed", value: "15+" },
//   { label: "Happy Clients", value: "10+" },
//   { label: "Certifications", value: "11" },
//   { label: "Tasks in Active Client Projects (AI, Web, Mobile) ", value: "90+" },

// ];