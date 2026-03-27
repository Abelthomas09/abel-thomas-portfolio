import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'E-COMMERCE DASH',
    category: 'React / Redux',
    year: '2023',
    link: 'https://github.com/Abelthomas09/SnapFix-Frontend'
  },
  {
    id: '02',
    title: 'TASK MANAGER',
    category: 'Node.js / Socket.io',
    year: '2023',
    link: '#'
  },
  {
    id: '03',
    title: 'WEATHER AI',
    category: 'OpenAI / Tailwind',
    year: '2022',
    link: '#'
  },
  {
    id: '04',
    title: 'IMAGE GEN',
    category: 'React / Three.js',
    year: '2022',
    link: '#'
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-label">SELECTED WORKS</h2>
        
        <div className="project-list">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-item clickable"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="id-col">{project.id}</div>
              <div className="title-col">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="meta-col">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
