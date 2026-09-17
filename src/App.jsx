import { useEffect, useState } from 'react'
import { Navigation } from './layouts/Navigation';
import { ScrollBar } from './layouts/scrollBar';
import { Error } from './layouts/Error';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Projects } from './pages/projects/projects';
import ProjectDetails from './pages/projects/ProjectDetails';
import { AppProvider } from './context/AppContext';
import AdvancedLoader from './components/AdvancedLoader';
import CustomCursor from './components/CustomCursor';
import MouseTrail from './components/MouseTrail';
import { gsap } from 'gsap';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
      // Animate main content entrance
      gsap.fromTo('.main-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }, 100);
  };

  return (
    <>
      {isLoading && <AdvancedLoader onLoadComplete={handleLoadComplete} />}

      {showContent && (
        <div className="main-content">
          <CustomCursor />
          <MouseTrail />
          <AppProvider>
            <Navigation />
            <ScrollBar />

            <Routes>
              <Route path="/*" element={<Error />} />
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetails />} />
            </Routes>
          </AppProvider>
        </div>
      )}
    </>
  )
}

export default App
