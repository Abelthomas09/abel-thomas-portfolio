import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-col">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="image-wrapper"
             >
               <img src="/profile.jpg" alt="Abel Thomas" className="profile-img" />
             </motion.div>
          </div>
          
          <div className="about-content">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="about-headline"
            >
              I BUILD DIGITAL EXPERIENCES THAT MERGE <span className="highlight">ART</span> WITH <span className="highlight">ENGINEERING</span>.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="about-text"
            >
              <p>
                My background isn't just code. It's a relentless pursuit of perfection. 
                I don't just write functions; I craft narratives through interaction. 
                In a web saturated with templates, I build bespoke identities.
              </p>
              <p>
                Based in Kerala, India, working globally. Focused on React, Performance, 
                and Interaction Design that leaves a mark.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
