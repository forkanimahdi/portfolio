import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import { useAppContext } from "../../../context/AppContext";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import ShowModalProject from "../../projects/components/showModalProject";

export const Projects = () => {
    const { projects, selectedProject, setSelectedProject } = useAppContext();

    // Show the first 4 projects as a curated "featured" selection (stable order)
    const featured = projects.slice(0, 4);

    return (
        <>
            <div id="projects" className="py-3 flex flex-col gap-y-8 items-center justify-start">

                <motion.p
                    variants={fadeIn('up', 0.1)} initial='hidden' whileInView={'show'} viewport={{ once: true }}
                    className="eyebrow pt-[10vh]"
                >
                    Selected work
                </motion.p>

                <motion.h1
                    variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: true }}
                    className="uppercase selection:bg-white selection:text-black text-white text-[2.5rem] boldPoppin"
                >
                    Projects
                </motion.h1>

                <motion.p
                    variants={fadeIn('up', 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="text-[#bdbdbd] selection:bg-white text-center px-3 lg:text-start selection:text-black poppin lg:text-lg"
                >
                    Together with my clients, we bring innovative visions to reality.
                </motion.p>

                <div className="lg:w-4/5 px-5 lg:p-0 grid lg:grid-cols-2 grid-cols-1 gap-6">
                    {featured.map((ele, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn('up', 0.15 * (idx % 2))}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            onClick={() => setSelectedProject(ele)}
                            className="group cursor-pointer poppin rounded-2xl overflow-hidden premium-glass"
                        >
                            {/* Image with gradient + hover zoom */}
                            <div className="relative overflow-hidden">
                                <img
                                    className="w-full aspect-video object-cover select-none transition-transform duration-700 group-hover:scale-105"
                                    src={ele.image}
                                    alt={ele.name}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                {/* View hint */}
                                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <GoArrowUpRight className="text-lg" />
                                </div>

                                {/* Title + tech overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-y-3">
                                    <h3 className="text-white text-xl font-semibold selection:bg-white selection:text-black">
                                        {ele.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {ele.technologies.map((e, i) => (
                                            <span
                                                className="text-xs bg-white/15 backdrop-blur-sm border border-white/10 text-white/90 px-2.5 py-1 rounded-full"
                                                key={i}
                                            >
                                                {e}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Link
                    to={"/projects"}
                    className="group mt-8 z-20 uppercase select-none text-white border border-white/60 rounded-xl py-3 px-8 hover:bg-white hover:text-black hover:border-white poppin flex items-center gap-x-3 transition-colors"
                >
                    Discover All Projects
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                        &rarr;
                    </span>
                </Link>

            </div>

            {selectedProject && <ShowModalProject />}

        </>
    );
};
