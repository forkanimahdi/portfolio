import { createContext, useContext, useState } from "react";
import { projects } from "../data/projects";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const all = { projects, selectedProject, setSelectedProject };

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
