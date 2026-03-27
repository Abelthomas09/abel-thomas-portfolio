import React from 'react';
import './Experience.css';

const experienceData = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    description: 'Leading the frontend team in rebuilding the legacy platform using React and Next.js. Improved performance by 40%.'
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Agency',
    period: '2021 - 2023',
    description: 'Collaborated with designers to implement pixel-perfect user interfaces for various clients using React and Greensock.'
  },
  {
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2019 - 2021',
    description: 'Developed and maintained responsive websites using HTML, CSS, and jQuery. Assisted in backend API integration.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{exp.period}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
