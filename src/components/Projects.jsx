import React from 'react';
import { motion as Motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'GOLDEN FORK&SPOON',
    category: 'React / Restaurant App',
    year: '2025',
    link: 'https://golden-forkand-spoon-restaurant-app.vercel.app/'
  },
  {
    id: '02',
    title: 'SNAPFIX',
    category: 'MERN / Service Booking',
    year: '2025',
    link: 'https://snap-fix-frontend.vercel.app/'
  },
  {
    id: '03',
    title: 'EMPLOYEE MANAGEMENT',
    category: 'React / CRUD App',
    year: '2025',
    link: 'https://employees-management-app-abel.netlify.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-label">SELECTED WORKS</h2>
        
        <div className="project-list">
          {projects.map((project) => (
            <Motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-item clickable"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="id-col">{project.id}</div>
              <div className="title-col">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="meta-col">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
            </Motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
