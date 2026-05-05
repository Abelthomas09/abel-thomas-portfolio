import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  return localStorage.getItem('theme') || 'dark';
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Motion.button 
      onClick={toggleTheme}
      className="clickable"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'fixed',
        top: '40px',
        right: '5vw',
        zIndex: 100,
        fontSize: '1.5rem',
        color: 'var(--text-color)',
        cursor: 'pointer'
      }}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </Motion.button>
  );
};

export default ThemeToggle;
