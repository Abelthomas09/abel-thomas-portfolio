import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ui/ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
          <motion.div 
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
