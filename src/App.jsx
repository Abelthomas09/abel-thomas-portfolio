import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import Home from './pages/Home';

// Pages
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const minimumLoadTime = new Promise((resolve) => window.setTimeout(resolve, 900));
    const pageLoaded = document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));
    const fontsLoaded = document.fonts?.ready ?? Promise.resolve();
    const galaxyReady = new Promise((resolve) => {
      const timeoutId = window.setTimeout(resolve, 2200);
      window.addEventListener('hero-galaxy-ready', () => {
        window.clearTimeout(timeoutId);
        resolve();
      }, { once: true });
    });

    Promise.all([minimumLoadTime, pageLoaded, fontsLoaded, galaxyReady]).then(() => {
      if (isMounted) setIsAppReady(true);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {!isAppReady && (
        <div className="app-loader" role="status" aria-live="polite">
          <div className="loader-mark">AT.</div>
          <div className="loader-track">
            <span />
          </div>
        </div>
      )}
      <Router>
        <div className={`App ${isAppReady ? 'is-ready' : 'is-loading'}`}>
          <CustomCursor />
          <Navbar />
          <ScrollToTop />
          
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
