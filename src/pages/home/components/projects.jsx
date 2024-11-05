import React, { useState } from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import { useAppContext } from "../../../context/AppContext";
import { Link } from "react-router-dom";

export const Projects = () => {

    const { projects } = useAppContext()


    return (
        <>
            <div id="projects" className="  py-3  flex flex-col gap-y-8 items-center justify-start">


                <motion.h1 variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} className="uppercase pt-[10vh] selection:bg-white selection:text-black text-white text-[3rem] boldPoppin  ">Projects</motion.h1>
                <motion.p variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show" className="text-[#bdbdbd] selection:bg-white text-center px-3 lg:text-start selection:text-black poppin lg:text-lg ">Together with my clients, we bring innovative visions to reality. </motion.p>

                <div className="w-4/5 flex  flex-wrap gap-10">

                    {
                        projects.slice(0,4).map((ele, idx) =>

                            <div key={idx} className=" lg:w-[47%] w-full poppin  py-3 flex flex-col gap-y-6 border-t border-white/50">
                                <div className="py-4 selection:bg-white selection:text-black text-white text-xl flex items-center justify-between">
                                    <p>{ele.name}</p>
                                    {
                                        ele.technologies.map((e, i) =>
                                            <p className="text-base bg-white/40 px-2 rounded mb-0" key={i}>{e}</p>
                                        )
                                    }
                                </div>
                                <div className="rounded-xl relative overflow-hidden parent  ">
                                    <motion.img
                                        whileTap={{ scale: 0.8 }}
                                        className="rounded-xl select-non hover:filter grayscale-100 hover:scale-110 transition-all" src={ele.image} alt="" />

                                    <div style={{ transition: "0.5s" }} className="w-full rounded-xl h-full W z-20 border backdrop-blur-sm justify-around p-4 lg:p-8 flex flex-col items-start  bg-black/75 absolute top-full">
                                        <h1 className="text-white boldPoppin lg:text-2xl">{ele.name}</h1>
                                        <p className="text-white text-sm lg:text-base leading-loose lg:w-5/6">{ele.description}</p>
                                        <a className="w-full border rounded-xl py-2 lg:py-3 text-white hover:bg-white hover:text-black text-center poppin lg:text-lg" rel="noreferrer" target="_blank" href={ele.link}>View Project</a>
                                    </div>

                                </div>
                            </div>
                        )
                    }

                </div>


                <Link to={"/projects"} className="lg:w-1/3 cursor-pointer w-11/12 lg:font-semibold lg:text-lg  text-white/80 text-center relative py-3 rounded-full">
                    <div className="w-full h-full inset-0 bg-white/50 opacity-25 absolute rounded-full"></div>
                    <h1 className="static z-20 selection:bg-white selection:text-black poppin">+ Discover More Projects.</h1>
                </Link>

            </div>
        </>
    );
};
