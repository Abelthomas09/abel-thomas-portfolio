import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
    <section className="bold-hero">
      <div className="container">
        <motion.div 
          className="hero-header"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div style={{ y: y2 }} className="role-label">FRONTEND DEVELOPER & UI ENGINEER</motion.div>
          <h1 className="name-line">ABEL</h1>
          <h1 className="name-line outlined">THOMAS</h1>
        </motion.div>
        
        <motion.div 
          className="hero-footer"
          style={{ y: y1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="location">Based in Kerala, India</div>
          <div className="scroll-hint">
             SCROLL TO EXPLORE <FaArrowDown className="arrow-icon" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
