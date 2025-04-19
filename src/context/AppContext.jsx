import { createContext, useContext,  } from "react";

import mlg from "../assets/images/projects/mylionsgeek.gif"
import lionsgeek from "../assets/images/projects/lionsgeek.png"
import yes from "../assets/images/projects/yes-africa.png"
import casatourat_backend from "../assets/images/projects/casatourat_backend.gif"
import casatourat from "../assets/images/projects/casatourat.png"
import yes_backend from "../assets/images/projects/yes_backend.png"
import hd4h from "../assets/images/projects/hd4h.gif"


const AppContext = createContext();

const AppProvider = ({ children }) => {

  let projects = [
    { name: "LionsGeek", link: "https://lionsgeek.vercel.app/", description: "LionsGeek is a Moroccan initiative aimed at empowering young people through digital and audiovisual training and incubation..", image: lionsgeek, technologies: ["React"] },
    { name: "YES Africa", link: "https://youthempowermentsummit.africa/", description: "Yes-africa Purpose is to empower underserved youth by providing them with the skills, resources, and opportunities necessary to build a brighter future..", image: yes, technologies: ["React"] },
    { name: "Casatourat", link: "https://play.google.com/store/apps/details?id=com.casatourat.casaguide&hl=en", description: "Casatourat mobile application, enabling efficient management of circuits, real-time tracking, user achievements, events, and user profiles.", image: casatourat, technologies: ["React Native"] },
    { name: "Her Day for Her", link: "https://herdayforher.ma/", description: "Her Day For Her is an annual MasterClass organized by the Jadara Foundation to promote women’s empowerment and leadership .", image: hd4h, technologies: ["Inertia"] },
    { name: "My LionsGeek", link: "https://mylionsgeek.ma/", description: "My Lionsgeek is a web app streamlining reservations, admin tasks, computer assignments, and training programs.", image: mlg, technologies: ["Laravel"] },
    { name: "Yes Backend", link: "https://management.youthempowermentsummit.africa/", description: "The Casatourat backend platform empowers the Casatourat mobile application, enabling efficient management of circuits, real-time tracking, user achievements, events, and user profiles.", image: yes_backend, technologies: ["laravel"] },
    { name: "Casatourat Backend", link: "https://casatourat.ma/", description: "The Casatourat backend platform empowers the Casatourat mobile application, enabling efficient management of circuits, real-time tracking, user achievements, events, and user profiles.", image: casatourat_backend, technologies: ["laravel"] },

  ]

const all = {projects}
  
  return (
    <>
      <AppContext.Provider
        value={all}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
