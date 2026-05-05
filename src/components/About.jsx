import React from 'react';
import { motion as Motion } from 'framer-motion';
import './About.css';
import ProfileCard from './ui/ProfileCard';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-col">
             <Motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="image-wrapper"
             >
               <ProfileCard 
                  name="Abel Thomas"
                  title="UI Engineer & Frontend Developer"
                  handle="abelthomas"
                  status="Open to new projects"
                  contactText="Say Hello"
                  avatarUrl="/profile.jpg"
                  showUserInfo={false}
                  enableTilt={true}
                  behindGlowEnabled={true}
               />
             </Motion.div>
          </div>
          
          <div className="about-content">
            <Motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="about-headline"
            >
              I BUILD DIGITAL EXPERIENCES THAT MERGE <span className="highlight">ART</span> WITH <span className="highlight">ENGINEERING</span>.
            </Motion.h2>
            
            <Motion.div 
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
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
