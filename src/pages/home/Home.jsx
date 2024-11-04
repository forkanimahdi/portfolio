import React from "react";
import { Hero } from "./components/hero";
import { motion, useTransform } from "framer-motion";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

export const Home = () => {




  return (
    <>
      <div className="bg-[#010101] ">

        <Hero />
        <About />
        <Projects />
        <Contact />



      </div>
    </>
  );
};
