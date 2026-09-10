import React from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import { FaGitAlt, FaLaravel, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpo, SiInertia } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const techno = [
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <RiTailwindCssFill />, name: "Tailwind" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiInertia />, name: "Inertia" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiExpo />, name: "React Native" },
];

export const Technologies = () => {
    return (
        <div id="technologies" className="py-3 flex flex-col gap-y-8 items-center relative z-30">
            <motion.h1
                className="uppercase pt-[10vh] text-center selection:bg-white selection:text-black text-white lg:text-3xl text-2xl boldPoppin"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
            >
                Technologies
            </motion.h1>

            <motion.p
                className="text-[#bdbdbd] selection:bg-white selection:text-black text-center poppin lg:text-lg"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
            >
                My tech stack that powers every project.
            </motion.p>

            <motion.div
                id="skills"
                className="px-6 grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-6"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
            >
                {techno.map((tech, idx) => (
                    <div
                        key={idx}
                        className="select-none hover:bg-slate-500/30 p-6 flex flex-col items-center gap-y-4 bg-white/5 border border-[#ffffff1a] rounded-lg"
                    >
                        <div className="text-6xl text-white">{tech.icon}</div>
                        <h5 className="poppin text-white">{tech.name}</h5>
                    </div>
                ))}
            </motion.div>

            <div className="flex items-center justify-center w-full px-5 lg:px-0">
                <div className="lg:w-1/3 w-full mt-8 text-white/80 text-center relative py-3 lg:rounded-full rounded-xl">
                    <div className="w-full h-full inset-0 bg-white/50 opacity-25 absolute lg:rounded-full rounded-xl"></div>
                    <h1 className="z-20 poppin">Learning & Growing Every Day</h1>
                </div>
            </div>
        </div>
    );
};
