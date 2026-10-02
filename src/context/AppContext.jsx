import { createContext, useContext, useState } from "react";
import { projects } from "../data/projects";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [transition, setTransition] = useState(null);

  const all = {
    projects,
    transition,
    setTransition,
  };

  return (
    <>
      <AppContext.Provider value={all}>{children}</AppContext.Provider>
    </>
  );
};

if (typeof window !== "undefined") console.log(
  `
███████╗ ██████╗ ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗██╗
██╔════╝██╔═══██╗██╔══██╗██║ ██╔╝██╔══██╗████╗  ██║██║
███████╗██║   ██║██████╔╝█████╔╝ ███████║██╔██╗ ██║██║
██      ██║   ██║██╔══██ ██╔═██╗ ██╔══██║██║╚██╗██║██║
██      ╚██████╔╝██║  ██ ██║  ██╗██║  ██║██║ ╚████║██║
╚═      ╚═════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝
  `
);

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
