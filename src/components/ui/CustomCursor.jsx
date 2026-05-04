import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    let lastMouse = { x: null, y: null };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });

      if (lastMouse.x !== null) {
        const dx = e.clientX - lastMouse.x;
        const dy = e.clientY - lastMouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const steps = Math.max(1, Math.floor(distance / 10));
        
        for (let i = 0; i < steps; i++) {
          const px = lastMouse.x + (dx * i) / steps;
          const py = lastMouse.y + (dy * i) / steps;
          
          particles.push({
            x: px + (Math.random() - 0.5) * 4,
            y: py + (Math.random() - 0.5) * 4,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8 - 0.5,
            life: 1,
            size: Math.random() * 20 + 20, // 20 to 40 radius for puffiness
          });
        }
      }
      lastMouse = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.clickable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        // Pure white mist, mix-blend-mode: difference in CSS handles the theme adaptation!
        gradient.addColorStop(0, `rgba(255, 255, 255, ${p.life * 0.15})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.vx;
        p.y += p.vy;
        p.size += 0.4;
        p.life -= 0.025; // fade speed
      }
      
      particles = particles.filter(p => p.life > 0);
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // The small dot that follows exactly
  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      opacity: 1,
      transition: {
        type: "tween",
        ease: "backOut",
        duration: 0.1
      }
    },
    hover: {
      x: mousePosition.x - 0,
      y: mousePosition.y - 0,
      height: 0,
      width: 0,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      opacity: 0,
    }
  };

  // The outer ring that gracefully lags
  const ringVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.2,
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0)",
      backdropFilter: "blur(2px)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <>
      <canvas ref={canvasRef} className="smoke-canvas" />
      <motion.div
        className="cursor-dot"
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
      />
      <motion.div
        className="cursor-ring"
        variants={ringVariants}
        animate={isHovering ? "hover" : "default"}
      />
    </>
  );
};

export default CustomCursor;
