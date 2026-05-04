import React from 'react';
import { motion as Motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Responsive UI']
  },
  {
    title: 'Styling & UI',
    skills: ['Tailwind CSS', 'Material UI', 'Flexbox', 'CSS Grid', 'Figma to UI', 'Framer Motion']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'RBAC']
  },
  {
    title: 'CMS & Tools',
    skills: ['Headless CMS', 'WordPress', 'Git', 'GitHub', 'Performance Optimization', 'Cross-Browser Testing']
  },
  {
    title: 'Security Basics',
    skills: ['Secure Coding', 'Vulnerability Assessment', 'XSS Awareness', 'SQL Injection Awareness', 'CSRF Awareness']
  }
];


const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-label">TECHNICAL ARSENAL</h2>
        
        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <Motion.div
              key={group.title}
              className="skill-group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.08 }}
            >
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skills-list">
                {group.skills.map((skill, index) => (
                  <Motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.08 + index * 0.04 }}
                    className="skill-word"
                  >
                    {skill}
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
