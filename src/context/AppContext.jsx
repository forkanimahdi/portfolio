import { createContext, useContext, useState, } from "react";

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
  const [selectedProject, setSelectedProject] = useState(null);

 let projects = [
  {
    name: "My LionsGeek",
    link: "https://mylionsgeek.ma/",
    description: "A robust Laravel-based platform for managing training center operations, including reservations, session planning, admin tasks, and user roles. It helps streamline coordination between trainers, learners, and administrators.",
    image: mlg,
    technologies: ["Laravel"],
    repo: null
  },
  {
    name: "Casatourat",
    link: "https://casatourat.ma/",
    description: "A React Native mobile app providing users with circuit-based navigation, cultural events, and user activity tracking around Casablanca. It aims to elevate local tourism by combining interactive experiences and guided tours.",
    image: casatourat,
    technologies: ["React Native"],
    repo: null
  },
  {
    name: "Yes Mobile",
    link: "https://app.youthempowermentsummit.africa/",
    description: "A mobile app built for the Youth Empowerment Summit, offering participants access to schedules, speaker info, ticket scanning, and event navigation. Built with performance and accessibility in mind using React Native.",
    image: yes_mobile,
    technologies: ["React Native"],
    repo: null
  },
  {
    name: "Yes Learning",
    link: "https://learning.youthempowermentsummit.africa/",
    description: "A Laravel-Inertia web platform offering workshops, e-learning content, and progress tracking. It supports both synchronous and asynchronous learning for African youth in professional and soft skill areas.",
    image: yes_learning,
    technologies: ["Laravel - Inertia"],
    repo: null
  },
  {
    name: "LionsGeek",
    link: "https://lionsgeek.vercel.app/",
    description: "An engaging React platform showcasing the LionsGeek initiative, highlighting youth empowerment through digital upskilling, project incubation, and leadership coaching across Africa.",
    image: lionsgeek,
    technologies: ["React"],
    repo: null
  },
  {
    name: "YES Africa",
    link: "https://youthempowermentsummit.africa/",
    description: "The official React-powered web presence of the YES Africa movement. It presents the summit’s mission, past editions, partnerships, and call-to-action for youth-driven impact across the continent.",
    image: yes,
    technologies: ["React"],
    repo: null
  },
  {
    name: "Her Day for Her",
    link: "https://herdayforher.ma/",
    description: "An interactive web platform built using Inertia, focused on showcasing MasterClass events and empowering women through leadership talks, workshops, and networking programs.",
    image: hd4h,
    technologies: ["Inertia"],
    repo: null
  },
  {
    name: "Yes Backend",
    link: "https://management.youthempowermentsummit.africa/",
    description: "A Laravel admin dashboard used to manage the YES platform’s users, event schedules, speaker profiles, and access control. It supports detailed analytics and multi-role user permissions.",
    image: yes_backend,
    technologies: ["Laravel"],
    repo: null
  },
  {
    name: "Casatourat Backend",
    link: "https://casatourat.ma/",
    description: "A Laravel-based dashboard built to manage the Casatourat mobile app content including cultural circuits, real-time data, user behavior, and event content management.",
    image: casatourat_backend,
    technologies: ["Laravel"],
    repo: null
  },
  {
    name: "Yes Mobile Backend",
    link: "https://app.youthempowermentsummit.africa/",
    description: "Backend system for Yes Mobile app, developed with Laravel to manage users, programs, notifications, and mobile app content with security-first admin access.",
    image: yesMobile_backend,
    technologies: ["Laravel"],
    repo: null
  }
];



  const all = { projects  , selectedProject , setSelectedProject}

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
