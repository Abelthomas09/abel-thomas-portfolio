import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'SNAPFIX',
    category: 'MERN / Service Booking',
    year: '2025',
    link: 'https://snap-fix-frontend.vercel.app/',
    image: '/images/SnapFix.png'
  },
  {
    id: '02',
    title: 'GOLDEN FORK&SPOON',
    category: 'React / Restaurant App',
    year: '2025',
    link: 'https://golden-forkand-spoon-restaurant-app.vercel.app/',
    image: '/images/GoldenForkSpoon.png'
  },
  {
    id: '03',
    title: 'EMPLOYEE MANAGEMENT',
    category: 'React / CRUD App',
    year: '2025',
    link: 'https://employees-management-app-abel.netlify.app/',
    image: '/images/EmploymentManagement.png'
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (projectId) => {
    setActiveProject((currentProject) => currentProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-label">SELECTED WORKS</h2>
        
        <div className="project-list">
          {projects.map((project) => (
            <Motion.div
              key={project.id}
              className={`project-item ${activeProject === project.id ? 'is-open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button
                type="button"
                className="project-trigger clickable"
                onClick={() => toggleProject(project.id)}
                aria-expanded={activeProject === project.id}
              >
                <span className="id-col">{project.id}</span>
                <span className="title-col">
                  <span className="project-title">{project.title}</span>
                </span>
                <span className="meta-col">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </span>
              </button>

              {activeProject === project.id && (
                <Motion.div
                  className="project-preview"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-preview-link clickable"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <img src={project.image} alt={`${project.title} preview`} />
                  </a>
                </Motion.div>
              )}
            </Motion.div>
          ))}
        </div>

        <div className="projects-more-wrap">
          <Link to="/projects" className="projects-more-button clickable">
            MORE PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
