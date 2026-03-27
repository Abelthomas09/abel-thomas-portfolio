import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

const DecryptedText = ({ text, className = "", speed = 50, maxIterations = 10 }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const scramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / (maxIterations / text.length); 
    }, speed);
  };

  useEffect(() => {
    scramble();
    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <motion.span
      className={className}
      onMouseEnter={scramble}
      style={{ display: 'inline-block', fontFamily: 'monospace' }} // Monospace for alignment
    >
      {displayText}
    </motion.span>
  );
};

export default DecryptedText;
