import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ui/ThemeToggle';
import ProfileCard from './ui/ProfileCard';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleProfileContactClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">AT.</NavLink>
          
          <div className="nav-controls">
            {/* Menu Button on the left of Theme Toggle */}
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <FaTimes /> : <FaBars />}
              <span className="menu-text">{isOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div 
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="menu-content">
              <Motion.div 
                className="menu-links"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {navLinks.map((link, index) => (
                  <NavLink 
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="link-number">0{index + 1}</span>
                    <span className="link-name">{link.name}</span>
                  </NavLink>
                ))}
              </Motion.div>

              <Motion.div
                className="menu-profile-wrapper"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <ProfileCard 
                  name="Abel Thomas"
                  title="Software Engineer"
                  handle="abelthomas"
                  status="Online"
                  contactText="Contact Me"
                  contactHref="/contact"
                  avatarUrl="/profile.jpg"
                  showUserInfo={true}
                  enableTilt={true}
                  behindGlowEnabled={true}
                  onContactClick={handleProfileContactClick}
                />
              </Motion.div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
