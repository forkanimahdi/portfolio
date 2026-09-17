import { createContext, useContext, useState } from "react";
import { projects } from "../data/projects";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  // Holds the source image rect + slug captured on click, so the case-study
  // page can run a Behance-style FLIP animation from the card to the hero.
  const [transition, setTransition] = useState(null);

  const all = {
    projects,
    selectedProject,
    setSelectedProject,
    transition,
    setTransition,
  };

  console.log(
    `
███████╗ ██████╗ ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗██╗
██╔════╝██╔═══██╗██╔══██╗██║ ██╔╝██╔══██╗████╗  ██║██║
███████╗██║   ██║██████╔╝█████╔╝ ███████║██╔██╗ ██║██║
██      ██║   ██║██╔══██ ██╔═██╗ ██╔══██║██║╚██╗██║██║
██      ╚██████╔╝██║  ██ ██║  ██╗██║  ██║██║ ╚████║██║
╚═      ╚═════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝
  `
  );

  return (
    <>
      <AppContext.Provider value={all}>{children}</AppContext.Provider>
    </>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
