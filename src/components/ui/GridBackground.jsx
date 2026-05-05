import React from 'react';
import { motion as Motion } from 'framer-motion';
import './GridBackground.css';

const GridBackground = () => {
  return (
    <div className="grid-background-container">
      <div className="grid-overlay"></div>
      <div className="grid-pattern"></div>
      
      {/* Moving gradient orb */}
      <Motion.div 
        className="orb"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default GridBackground;
