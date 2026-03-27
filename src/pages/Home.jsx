import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyMe from '../components/WhyMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <About />
      <WhyMe />
      <Skills />
      {/* Shortened preview for Home, full list in Projects page */}
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
