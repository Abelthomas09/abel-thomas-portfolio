import React from 'react';
import { motion as Motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Dock.css';

const Dock = () => {
  let mouseX = useMotionValue(Infinity);

  const items = [
    { icon: <FaHome />, id: 'hero', label: 'Home' },
    { icon: <FaUser />, id: 'about', label: 'About' },
    { icon: <FaCode />, id: 'skills', label: 'Skills' },
    { icon: <FaBriefcase />, id: 'projects', label: 'Work' },
    { icon: <FaEnvelope />, id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="dock-container">
      <Motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="dock"
      >
        {items.map((item) => (
          <DockItem mouseX={mouseX} key={item.id} item={item} />
        ))}
        {/* Divider */}
        <div className="dock-divider"></div>
        
        {/* Socials in Dock */}
        <DockItem mouseX={mouseX} item={{ icon: <FaGithub />, id: 'github', label: 'GitHub', link: 'https://github.com/Abelthomas09' }} />
        <DockItem mouseX={mouseX} item={{ icon: <FaLinkedin />, id: 'linkedin', label: 'LinkedIn', link: 'https://www.linkedin.com/in/abel-thomas09' }} />
      </Motion.div>
    </div>
  );
};

function DockItem({ mouseX, item }) {
  let ref = React.useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const handleClick = () => {
    if (item.link) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
      return;
    }
    const el = document.getElementById(item.id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Motion.div
      ref={ref}
      style={{ width }}
      className="dock-item clickable"
      onClick={handleClick}
    >
      <div className="dock-icon-wrapper">
         {item.icon}
      </div>
    </Motion.div>
  );
}

export default Dock;
