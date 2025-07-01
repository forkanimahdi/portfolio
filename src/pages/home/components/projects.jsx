import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import { useAppContext } from "../../../context/AppContext";
import { Link } from "react-router-dom";
import ShowModalProject from "../../projects/components/showModalProject";

export const Projects = () => {
    const { projects, selectedProject, setSelectedProject } = useAppContext();

    return (
        <>
            <div id="projects" className="py-3 flex flex-col gap-y-8 items-center justify-start">

                <motion.h1 variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} className="uppercase pt-[10vh] selection:bg-white selection:text-black text-white text-[3rem] boldPoppin">
                    Projects
                </motion.h1>

                <motion.p variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show" className="text-[#bdbdbd] selection:bg-white text-center px-3 lg:text-start selection:text-black poppin lg:text-lg">
                    Together with my clients, we bring innovative visions to reality.
                </motion.p>

                <div className="w-4/5 grid lg:grid-cols-2 grid-cols-1 gap-6">
                    {projects.sort((a, b) => a * Math.random()).slice(0, 4).map((ele, idx) => (
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
                    ))}
                </div>

                <Link to="/projects" className="lg:w-1/3 cursor-pointer w-11/12 lg:font-semibold lg:text-lg text-white/80 text-center relative py-3 rounded-full">
                    <div className="w-full h-full inset-0 bg-white/50 opacity-25 absolute rounded-full"></div>
                    <h1 className="static z-20 selection:bg-white selection:text-black poppin">Discover all projects.</h1>
                </Link>
            </div>

            {selectedProject && <ShowModalProject />}

        </>
    );
};
