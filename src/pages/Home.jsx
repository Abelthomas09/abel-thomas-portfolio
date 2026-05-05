import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

const About = lazy(() => import('../components/About'));
const WhyMe = lazy(() => import('../components/WhyMe'));
const Skills = lazy(() => import('../components/Skills'));
const Projects = lazy(() => import('../components/Projects'));
const Contact = lazy(() => import('../components/Contact'));

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <Suspense fallback={null}>
        <About />
        <WhyMe />
        <Skills />
        {/* Shortened preview for Home, full list in Projects page */}
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
