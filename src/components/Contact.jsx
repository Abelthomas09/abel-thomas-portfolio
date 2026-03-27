import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="big-cta">LET'S TALK</h2>
          <p className="contact-sub">Have an idea? Let's build something iconic.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-links">
             <a href="mailto:hello@abelthomas.dev" className="email-link">HELLO@ABELTHOMAS.DEV</a>
             <div className="social-list">
               <a href="#">LINKEDIN</a>
               <a href="#">GITHUB</a>
               <a href="#">TWITTER</a>
             </div>
          </div>

          <form className="minimal-form">
            <div className="input-group">
              <input type="text" placeholder="NAME" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="EMAIL" required />
            </div>
            <div className="input-group">
              <textarea placeholder="MESSAGE" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              SEND MESSAGE <FaArrowRight />
            </button>
          </form>
        </div>
        
        <div className="footer-credits">
           <span>© 2023 ABEL THOMAS</span>
           <span>EST. 2023</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
