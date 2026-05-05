import React, { lazy, Suspense } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.css';
import './ui/Galaxy.css';

const Galaxy = lazy(() => import('./ui/Galaxy'));

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
    <section className="bold-hero">
      <div className="hero-galaxy-layer" aria-hidden="true">
        <Suspense fallback={null}>
          <Galaxy
            mouseRepulsion={false}
            mouseInteraction={false}
            density={0.82}
            glowIntensity={0.2}
            saturation={0}
            hueShift={210}
            twinkleIntensity={0.16}
            rotationSpeed={0.035}
            repulsionStrength={1.2}
            autoCenterRepulsion={0}
            starSpeed={0.32}
            speed={0.6}
            onReady={() => window.dispatchEvent(new Event('hero-galaxy-ready'))}
          />
        </Suspense>
      </div>
      <div className="hero-vignette" aria-hidden="true" />
      <div className="container">
        <Motion.div 
          className="hero-header"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Motion.div style={{ y: y2 }} className="role-label">FRONTEND DEVELOPER & UI ENGINEER</Motion.div>
          <h1 className="name-line">ABEL</h1>
          <h1 className="name-line outlined">THOMAS</h1>
        </Motion.div>
        
        <Motion.div 
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
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
