import { useEffect } from "react";
import React from "react";
import { Hero } from "./components/hero";
import { motion, useTransform } from "framer-motion";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Clients } from "./components/clients";
import { Testimonials } from "./components/testimonials";

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
      <div className="bg-[#010101] ">

        <Hero />
        <About />
        <Projects />
        <Clients />
        <Testimonials />
        <Contact />



      </div>
    </>
  );
};
