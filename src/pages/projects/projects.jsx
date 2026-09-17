import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Seo from "../../utils/Seo";
import { useOpenProject } from "../../hooks/useOpenProject";
import { GoArrowUpRight } from "react-icons/go";


export const Projects = () => {

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);
    

    const { projects } = useAppContext();
    const openProject = useOpenProject();
    return (
        <>
            <Seo
                title="Projects | Mehdi Forkani — Mobile & Web App Developer"
                description="Selected web and mobile app projects by Mehdi Forkani: Laravel, React, Inertia.js and React Native platforms, dashboards, and apps built for startups, NGOs, and organizations across Morocco and Africa."
                path="/projects"
            />
            <div className=" bg-black text-white ">

                <div id="projects" className="  py-3 pt-[15vh] flex flex-col gap-y-8 items-center justify-start">
                    <div className="lg:w-1/3 cursor-pointer w-11/12  lg:font-semibold lg:text-lg  text-white/80 text-center relative py-4 rounded-full">
                        <div className="w-full inset-0 bg-white/50 opacity-25 absolute rounded-full"></div>
                        <h1 className="static z-20 selection:bg-white selection:text-black poppin">Trusted By Over 100 Clients .</h1>
                    </div>
                    <motion.p variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show" className="text-[#bdbdbd] selection:bg-white text-center px-3 lg:text-start selection:text-black poppin lg:text-lg ">Together with my clients, we bring innovative visions to reality. </motion.p>
                </div>


                <div className="  pt-[10vh] px-10 grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {
                        projects.map((ele, idx) =>

                            <div key={idx} onClick={(e) => openProject(ele, e)} className="group cursor-pointer w-full poppin py-3 flex flex-col gap-y-6 border-t border-white/50">
                                <div className="py-4 selection:bg-white selection:text-black text-white text-xl flex items-center justify-between">
                                    <p className="group-hover:text-white/90 transition-colors">{ele.name}</p>
                                    {ele.technologies.map((e, i) => (
                                        <p className="text-base bg-white/40 px-2 rounded mb-0" key={i}>{e}</p>
                                    ))}
                                </div>
                                <div className="rounded-xl relative overflow-hidden parent">
                                    <motion.img
                                        whileTap={{ scale: 0.95 }}
                                        className="rounded-xl select-none hover:scale-110 transition-all duration-300"
                                        src={ele.image}
                                        alt={`${ele.name} — ${ele.technologies.join(", ")} project by Mehdi Forkani`}
                                    />
                                    <div className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <GoArrowUpRight className="text-lg" />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    );
};
