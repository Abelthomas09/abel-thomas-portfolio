import React from 'react';
import { motion as Motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'React Native', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'SCSS', 'Bootstrap']
  },
  {
    title: 'Backend',
    skills: ['Express.js', 'GraphQL', 'Node.js', 'OTP Authentication', 'Payment Gateway Integration (Razorpay)', 'REST APIs']
  },
  {
    title: 'Database & Cloud',
    skills: ['MongoDB', 'PostgreSQL']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Figma', 'Git', 'GitHub', 'Netlify', 'Postman', 'Render', 'Vercel', 'Amazon S3']
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
