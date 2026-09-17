import { useEffect, useState } from "react";
import { Navigation } from "./layouts/Navigation";
import { ScrollBar } from "./layouts/scrollBar";
import { Error } from "./layouts/Error";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Projects } from "./pages/projects/projects";
import ProjectDetails from "./pages/projects/ProjectDetails";
import { AppProvider } from "./context/AppContext";
import AdvancedLoader from "./components/AdvancedLoader";
import CustomCursor from "./components/CustomCursor";
import MouseTrail from "./components/MouseTrail";
import { isCrawlerBot, prefersReducedMotion } from "./utils/botDetect";

function App() {
  // Content always mounts. Loader is an overlay for humans only —
  // bots / reduced-motion users get immediate crawlable first paint.
  const [showLoader, setShowLoader] = useState(() => {
    if (isCrawlerBot() || prefersReducedMotion()) return false;
    return true;
  });

  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoader]);

  return (
    <AppProvider>
      {showLoader && (
        <AdvancedLoader onLoadComplete={() => setShowLoader(false)} />
      )}

      {/* Always in the DOM so crawlers / AI see real routes & text */}
      <div className="main-content">
        <CustomCursor />
        <MouseTrail />
        <Navigation />
        <ScrollBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
