import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import ShowModalProject from "./components/showModalProject";


export const Projects = () => {

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);
    

    const { projects, selectedProject, setSelectedProject } = useAppContext();
    return (
        <>
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

                            <div key={idx} onClick={() => setSelectedProject(ele)} className="cursor-pointer w-full poppin py-3 flex flex-col gap-y-6 border-t border-white/50">
                                <div className="py-4 selection:bg-white selection:text-black text-white text-xl flex items-center justify-between">
                                    <p>{ele.name}</p>
                                    {ele.technologies.map((e, i) => (
                                        <p className="text-base bg-white/40 px-2 rounded mb-0" key={i}>{e}</p>
                                    ))}
                                </div>
                                <div className="rounded-xl relative overflow-hidden parent">
                                    <motion.img
                                        whileTap={{ scale: 0.95 }}
                                        className="rounded-xl select-none hover:scale-110 transition-all duration-300"
                                        src={ele.image}
                                        alt=""
                                    />
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

            {selectedProject && <ShowModalProject />}


        </>
    );
};
