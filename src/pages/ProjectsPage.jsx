import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../components/Projects.css'; // Reusing styles, adding specific overrides

// Detailed Data with Placeholders
const detailedProjects = [
  {
    id: '01',
    title: 'GOLDEN FORK&SPOON Restaurant App',
    desc: 'A comprehensive dashboard for managing products, orders, and analytics. Built with performance in mind.',
    tech: ['React', 'Redux', 'MongoDB'],
    github: 'https://github.com/Abelthomas09/Golden-ForkandSpoon-Restaurant-App',
    live: 'https://golden-forkand-spoon-restaurant-app.vercel.app/',
    image: '/images/GoldenForkSpoon.png'
  },
  {
    id: '02',
    title: 'SnapFix- House Service App',
    desc: 'Real-time collaborative task management with websockets and drag-and-drop interface.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Abelthomas09/SnapFix-Frontend',
    live: 'https://snap-fix-frontend.vercel.app/',
    image: '/images/SnapFix.png'
  },
  {
    id: '03',
    title: 'Employee Management App',
    desc: 'AI-powered weather forecasting app that suggests outfits and activities based on conditions.',
    tech: ['OpenAI', 'Next.js', 'Tailwind'],
    github: 'https://github.com/Abelthomas09/Employee-Management-App',
    live: 'https://employees-management-app-abel.netlify.app/',
    image: '/images/EmploymentManagement.png'
  }
];

const ProjectsPage = () => {
  return (
    <div className="section container" style={{paddingTop: '120px'}}>
      <h1 style={{marginBottom: '60px', fontSize: 'clamp(3rem, 8vw, 6rem)'}}>ALL PROJECTS</h1>
      
      <div className="projects-grid-detailed" style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '40px'
      }}>
        {detailedProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="project-card-detail"
            style={{
              border: '1px solid var(--line-color)',
              padding: '20px',
              transition: 'transform 0.3s'
            }}
          >
            <div className="card-image" style={{marginBottom: '20px', overflow: 'hidden', aspectRatio: '16/9', border: '1px solid var(--line-color)'}}>
               <img 
                 src={project.image} 
                 alt={project.title} 
                 style={{width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'all 0.5s ease'}}
                 onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                 onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
               />
            </div>
            
            <h3 style={{fontSize: '2rem', marginBottom: '10px'}}>{project.title}</h3>
            <p style={{marginBottom: '20px', color: 'var(--secondary-text)'}}>{project.desc}</p>
            
            <div className="tech-stack" style={{display: 'flex', gap: '10px',  marginBottom: '30px', flexWrap: 'wrap'}}>
              {project.tech.map(t => (
                <span key={t} style={{
                  fontSize: '0.8rem', 
                  border: '1px solid var(--line-color)', 
                  padding: '5px 10px',
                  fontFamily: 'var(--font-sub)'
                }}>{t}</span>
              ))}
            </div>

            <div className="card-links" style={{display: 'flex', gap: '20px'}}>
              <a href={project.github} className="clickable" style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                <FaGithub /> CODE
              </a>
              <a href={project.live} className="clickable" style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                <FaExternalLinkAlt /> LIVE DEMO
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
