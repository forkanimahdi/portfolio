import { useEffect } from "react";
import React from "react";
import { Hero } from "./components/hero";
import { motion, useTransform } from "framer-motion";
import { About } from "./components/about";
import { Achievements } from "./components/achievements";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";
import { Contact } from "./components/contact";
import { Clients } from "./components/clients";
import { Testimonials } from "./components/testimonials";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";

export const Home = () => {


  useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
          const id = hash.replace("#", "");
          const section = document.getElementById(id);
          if (section) {
              // delay to make sure DOM is ready
              setTimeout(() => {
                  section.scrollIntoView({ behavior: "smooth" });
              }, 100);
          }
      }
  }, []);
  


  return (
    <>
      <Seo
        title="Mehdi Forkani | Mobile & Web App Developer (Laravel, React, React Native)"
        description="Mehdi Forkani is a mobile & web app developer based in Casablanca, Morocco. I build production web platforms and mobile apps with Laravel, React, Inertia.js, and React Native for startups, NGOs, and organizations."
        path="/"
      />
      <div className="bg-[#010101] ">

        <Hero />
        <About />
        <Clients />
        <Achievements />
        <Projects />
        <Technologies />
        <Testimonials />
        <Contact />
        <Footer />

      </div>
    </>
  );
};
