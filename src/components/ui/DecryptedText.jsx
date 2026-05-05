import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion as Motion } from 'framer-motion';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

const DecryptedText = ({ text, className = "", speed = 50, maxIterations = 10 }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
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
  }, [maxIterations, speed, text]);

  useEffect(() => {
    scramble();
    return () => clearInterval(intervalRef.current);
  }, [scramble]);

  return (
    <Motion.span
      className={className}
      onMouseEnter={scramble}
      style={{ display: 'inline-block', fontFamily: 'monospace' }} // Monospace for alignment
    >
      {displayText}
    </Motion.span>
  );
};

export default DecryptedText;
