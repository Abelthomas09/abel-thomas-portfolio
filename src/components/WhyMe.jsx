import React from 'react';
import './WhyMe.css';
import { motion as Motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';

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
        <div className="why-layout">
          <div className="why-sticky-sidebar">
            <div className="section-label">THE APPROACH</div>
            <h2 className="why-heading">Philosophy<br />& Process</h2>
          </div>
          
          <div className="why-scroll-list">
            {reasons.map((item) => (
              <Motion.div
                key={item.id}
                initial={{ opacity: 0.18, y: 28, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-14% 0px -14% 0px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="why-card-wrapper"
              >
                <SpotlightCard className="why-card">
                  <div className="why-card-inner">
                    <div className="why-number">{item.id}</div>
                    <h3 className="why-title">{item.title}</h3>
                    <p className="why-desc">{item.desc}</p>
                  </div>
                </SpotlightCard>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
