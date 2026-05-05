import React, { useEffect, useState, useRef } from 'react';
import { motion as Motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { mass: 0.2, stiffness: 100, damping: 15 });
  const ringY = useSpring(cursorY, { mass: 0.2, stiffness: 100, damping: 15 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    let lastMouse = { x: null, y: null };
    let isRendering = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target instanceof Element ? e.target : null;
      if (target?.closest('input, textarea, select')) {
        lastMouse = { x: e.clientX, y: e.clientY };
        return;
      }

      if (lastMouse.x !== null) {
        const dx = e.clientX - lastMouse.x;
        const dy = e.clientY - lastMouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const steps = Math.min(3, Math.max(1, Math.floor(distance / 24)));
        
        for (let i = 0; i < steps; i++) {
          const px = lastMouse.x + (dx * i) / steps;
          const py = lastMouse.y + (dy * i) / steps;
          
          particles.push({
            x: px + (Math.random() - 0.5) * 4,
            y: py + (Math.random() - 0.5) * 4,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8 - 0.5,
            life: 1,
            size: Math.random() * 10 + 12,
          });
        }
        if (particles.length > 56) {
          particles.splice(0, particles.length - 56);
        }
      }
      lastMouse = { x: e.clientX, y: e.clientY };
      if (!isRendering) render();
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
      isRendering = true;
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
        p.size += 0.28;
        p.life -= 0.035;
      }
      
      particles = particles.filter(p => p.life > 0);
      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isRendering = false;
        animationFrameId = undefined;
      }
    };

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [cursorX, cursorY]);

  // The small dot that follows exactly
  const dotVariants = {
    default: {
      height: 8,
      width: 8,
      marginLeft: -4,
      marginTop: -4,
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
      height: 0,
      width: 0,
      marginLeft: 0,
      marginTop: 0,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      opacity: 0,
    }
  };

  // The outer ring that gracefully lags
  const ringVariants = {
    default: {
      height: 40,
      width: 40,
      marginLeft: -20,
      marginTop: -20,
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
      height: 80,
      width: 80,
      marginLeft: -40,
      marginTop: -40,
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
      <Motion.div
        className="cursor-dot"
        style={{ x: cursorX, y: cursorY }}
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
      />
      <Motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        variants={ringVariants}
        animate={isHovering ? "hover" : "default"}
      />
    </>
  );
};

export default CustomCursor;
