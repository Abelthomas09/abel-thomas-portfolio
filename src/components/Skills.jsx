import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "React Native",
  "Tailwind CSS",
  "Material UI",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
  "Responsive UI Design",
  "State Management",
  "Framer Motion"
];


const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-label">TECHNICAL ARSENAL</h2>
        
        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="skill-word"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
