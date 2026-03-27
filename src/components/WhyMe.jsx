import React from 'react';
import './WhyMe.css';
import { motion } from 'framer-motion';

const reasons = [
  {
    id: '01',
    title: 'SPEED',
    desc: 'I write optimized, bloat-free code. Performance isn\'t an afterthought; it\'s the foundation.'
  },
  {
    id: '02',
    title: 'PRECISION',
    desc: 'Pixel-perfect execution. I align with the grid, honor the typography, and respect the design system.'
  },
  {
    id: '03',
    title: 'CLARITY',
    desc: 'Clean code architecture. I build systems that are scalable, maintainable, and easy for teams to digest.'
  }
];

const WhyMe = () => {
  return (
    <section className="section why-me-section">
      <div className="container">
        <div className="why-grid">
          {reasons.map((item, index) => (
            <motion.div 
               key={item.id} 
               className="why-item"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.2 }}
            >
              <div className="why-number">{item.id}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
