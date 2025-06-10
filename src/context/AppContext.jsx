import { createContext, useContext,  } from "react";

import mlg from "../assets/images/projects/mylionsgeek.gif"
import lionsgeek from "../assets/images/projects/lionsgeek.png"
import yes from "../assets/images/projects/yes-africa.png"
import casatourat_backend from "../assets/images/projects/casatourat_backend.gif"
import yesMobile_backend from "../assets/images/projects/yesMobile_backend.gif"
import casatourat from "../assets/images/projects/casatourat.png"
import yes_backend from "../assets/images/projects/yes_backend.png"
import yes_learning from "../assets/images/projects/yes_learning.gif"
import yes_mobile from "../assets/images/projects/yes_mobile.png"
import hd4h from "../assets/images/projects/hd4h.gif"


const AppContext = createContext();

const AppProvider = ({ children }) => {

let projects = [
  {
    name: "My LionsGeek",
    link: "https://mylionsgeek.ma/",
    description: "A platform for managing reservations, admin tasks, and training.",
    image: mlg,
    technologies: ["Laravel"]
  },
  {
    name: "Casatourat",
    link: "https://casatourat.ma/",
    description: "Mobile app for circuit navigation, events, and user tracking.",
    image: casatourat,
    technologies: ["React Native"]
  },
  {
    name: "Yes Mobile",
    link: "https://app.youthempowermentsummit.africa/",
    description: "Mobile app for youth empowerment and event access.",
    image: yes_mobile,
    technologies: ["React Native"]
  },
  {
    name: "Yes Learning",
    link: "https://learning.youthempowermentsummit.africa/",
    description: "Learning platform with workshops, courses, and tracking.",
    image: yes_learning,
    technologies: ["Laravel - Inertia"]
  },
  {
    name: "LionsGeek",
    link: "https://lionsgeek.vercel.app/",
    description: "A digital platform promoting youth training and incubation.",
    image: lionsgeek,
    technologies: ["React"]
  },
  {
    name: "YES Africa",
    link: "https://youthempowermentsummit.africa/",
    description: "Empowering youth with skills and opportunities for growth.",
    image: yes,
    technologies: ["React"]
  },
  {
    name: "Her Day for Her",
    link: "https://herdayforher.ma/",
    description: "MasterClass series supporting women's leadership.",
    image: hd4h,
    technologies: ["Inertia"]
  },
  {
    name: "Yes Backend",
    link: "https://management.youthempowermentsummit.africa/",
    description: "Admin panel for managing users, events, and programs.",
    image: yes_backend,
    technologies: ["Laravel"]
  },
  {
    name: "Casatourat Backend",
    link: "https://casatourat.ma/",
    description: "Dashboard for managing circuits, tracking, and users in Casatourat App",
    image: casatourat_backend,
    technologies: ["Laravel"]
  },
  {
    name: "Yes Mobile Backend",
    link: "https://app.youthempowermentsummit.africa/",
    description: "Dashboard for managing  Yes Mobile App content.",
    image: yesMobile_backend,
    technologies: ["Laravel"]
  },
];


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
