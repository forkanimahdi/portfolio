import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Navigation } from "./layouts/Navigation";
import { ScrollBar } from "./layouts/scrollBar";
import { Error } from "./pages/error/Error";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Projects } from "./pages/projects/projects";
import ProjectDetails from "./pages/projects/ProjectDetails";
import { Rating } from "./pages/rating/Rating";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { AppProvider } from "./context/AppContext";
import CustomCursor from "./components/CustomCursor";
import MouseTrail from "./components/MouseTrail";
import { markHydrated } from "./utils/hydration";

/*
 * Intro loader (AdvancedLoader) — TEMPORARILY DISABLED.
 *
 * Why: it covered the page with a full-screen overlay for ~1.2s on every visit and
 * held back the hero animations until it finished. That delayed the first meaningful
 * paint (Largest Contentful Paint) for real visitors, and the page relied on
 * user-agent sniffing (isCrawlerBot) to skip it for search engines, which means bots
 * and humans were served different experiences. Pages are now prerendered, so the
 * real content is in the HTML from the first byte.
 *
 * The component, its styles and assets are untouched in src/components/AdvancedLoader.jsx.
 *
 * To re-enable it:
 *   1. Uncomment the two imports below and add `useState` to the React import.
 *   2. Replace `const showLoader = false;` in App() with the commented useState block.
 *   3. Uncomment the body-scroll-lock effect and the <AdvancedLoader /> element in the JSX.
 * Pages are prerendered and hydrated, so the server HTML never contains the loader: start
 * showLoader as false and switch it on in a useEffect, or hydration will mismatch.
 */
// import AdvancedLoader from "./components/AdvancedLoader";
// import { isCrawlerBot, prefersReducedMotion } from "./utils/botDetect";

function App() {
  const showLoader = false;
  // const [showLoader, setShowLoader] = useState(() => {
  //   if (isCrawlerBot() || prefersReducedMotion()) return false;
  //   return true;
  // });

  // useEffect(() => {
  //   document.body.style.overflow = showLoader ? "hidden" : "";
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [showLoader]);

  useEffect(() => {
    markHydrated();
  }, []);

  return (
    <AppProvider>
      <MotionConfig reducedMotion="user">
        {/* {showLoader && <AdvancedLoader onLoadComplete={() => setShowLoader(false)} />} */}

        <div className="main-content">
          <CustomCursor />
          <MouseTrail />
          <Navigation />
          <ScrollBar />

          <Routes>
            <Route path="/" element={<Home ready={!showLoader} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact ready={!showLoader} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/*" element={<Error ready={!showLoader} />} />
          </Routes>
        </div>
      </MotionConfig>
    </AppProvider>
  );
}

export default App;
