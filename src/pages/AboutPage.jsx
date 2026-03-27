import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import '../components/About.css'; 
import './AboutPage.css'; // Import the new specific styles

// Experience Data
const experienceData = [
  {
    role: "Junior Software Developer",
    company: "Abacies Logical",
    date: "Jan 2025 - Present",
    points: [
      "Developed pixel-perfect, responsive websites using React and Next.js based on design references.",
      "Built reusable and scalable UI components following clean and maintainable folder architecture.",
      "Worked on Headless CMS integrations to manage dynamic content efficiently.",
      "Developed and customized WordPress websites to meet client requirements.",
      "Ensured cross-browser compatibility, performance optimization, and responsive behavior across devices."
    ]
  },
  {
    role: "MERN Developer Trainee",
    company: "Luminar Technolab",
    date: "July 2024 - Jan 2025",
    points: [
      "Built multiple MERN stack projects including role-based access control (RBAC) applications.",
      "Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      "Implemented dynamic UI components and pages based on Figma and design specifications.",
      "Created responsive and interactive user interfaces using modern CSS, Flexbox, and Grid.",
      "Gained hands-on experience with REST APIs, authentication, and state management."
    ]
  },
  {
    role: "Cyber Security Intern",
    company: "TechbyHeart Pvt Ltd",
    date: "Feb 2024 - March 2024",
    points: [
      "Completed hands-on training in cybersecurity fundamentals and secure computing concepts.",
      "Learned about common web security vulnerabilities such as XSS, SQL Injection, and CSRF.",
      "Performed basic vulnerability assessment and security analysis on sample applications.",
      "Gained exposure to secure coding practices and awareness of application security risks.",
      "Understood basic concepts of ethical hacking, network security, and threat mitigation."
    ]
  }
];

// Flowchart Data (Restored)
const educationData = [
  {
    level: "HIGH SCHOOL",
    school: "St. Joseph's Model School",
    year: "Completed 2018",
    image: "https://content.jdmagicbox.com/comp/thrissur/w6/9999px487.x487.170926132455.n5w6/catalogue/st-joseph-s-model-campus-kuriachira-thrissur-16fnnlacex.jpg" 
  },
  {
    level: "HIGHER SECONDARY",
    school: "St. Antony's Higher Secondary School",
    year: "2018 - 2020",
    image: "https://content3.jdmagicbox.com/comp/thrissur/j9/9999px487.x487.170925223740.j8j9/catalogue/st-antony-s-higher-secondary-school-pudukad-thrissur-senior-secondary-schools-n1oowpjr0a.jpg" 
  },
  {
    level: "COLLEGE",
    school: "IES College of Engineering, Thrissur",
    year: "2020 - 2024",
    image: "https://www.eduska.com/assets/user_photo/b19af70c7a376356a3b85973572b5457.jpg" 
  }
];

const AboutPage = () => {
  return (
    <div className="page-about">
      
      {/* 1. Reuse existing About Bio */}
      <About />

      <div className="container" style={{paddingBottom: '100px'}}>
        {/* 2. What I Can Do For You */}
        <section className="about-subsection services-section">
          <h2 style={{textAlign: 'center'}}>WHAT I CAN DO FOR YOU</h2>
          <div className="services-grid">
             <div className="service-item">
               <h3>WEB DEVELOPMENT</h3>
               <p>Building lightning-fast, responsive websites using React, Next.js, and modern CSS frameworks. I focus on semantic HTML and accessibility.</p>
             </div>
             <div className="service-item">
               <h3>UI/UX DESIGN</h3>
               <p>Crafting intuitive interfaces and seamless user journeys that convert visitors into users. Minimalism meets functionality.</p>
             </div>
             <div className="service-item">
               <h3>PERFORMANCE</h3>
               <p>Audit and improve rendering speeds, ensuring your site ranks high on Core Web Vitals. Because every millisecond counts.</p>
             </div>
          </div>
        </section>

        {/* 3. Discover My Journey (Experience) */}
        <section className="about-subsection journey-section">
          <h2>DISCOVER MY JOURNEY</h2>
          <div className="experience-list">
            {experienceData.map((exp, index) => (
              <motion.div 
                key={index}
                className="experience-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="exp-meta">
                  <span className="exp-date">{exp.date}</span>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <div className="exp-content">
                  <h3 className="exp-role">{exp.role}</h3>
                  <ul className="exp-points">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Education Flowchart */}
        <section className="about-subsection education-section">
           <h2>EDUCATION</h2>
           
           <div className="education-timeline">
             <div className="timeline-line"></div>

             {educationData.map((item, index) => (
               <motion.div 
                 key={index}
                 className="timeline-item"
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: index * 0.2 }}
               >
                 <div className="timeline-node"></div>

                 <div className="timeline-content">
                    <span className="edu-year">{item.year}</span>
                    <h3 className="edu-level">{item.level}</h3>
                    <h4 className="edu-school">{item.school}</h4>
                    
                    <div className="edu-image-wrapper">
                      <img 
                        src={item.image} 
                        alt={item.school} 
                        className="edu-image"
                      />
                    </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

