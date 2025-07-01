import React from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import { FaEnvelope, FaGitAlt, FaInstagram, FaLaravel, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpo, SiInertia } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import me from "../../../assets/images/me.png";

const techno = [
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <RiTailwindCssFill />, name: "Tailwind" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiInertia />, name: "Inertia" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiExpo />, name: "React Native" },
];

export const About = () => {
    return (
        <div id="about" className="pt-[13vh] py-3 flex flex-col gap-y-8 lg:items-center ">
            <div className="flex lg:flex-row flex-col justify-between px-10 lg:gap-x-8 gap-y-5">

                <motion.img
                    className="lg:w-1/2 rounded-2xl select-none"
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView="show"
                    src={me}
                    alt="Mehdi's profile"
                />

                <div>
                    <motion.h1
                        className="uppercase selection:bg-white selection:text-black text-white text-2xl boldPoppin"
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                    >
                        Who am I?
                    </motion.h1>
                    <motion.p
                        className="text-white mt-6 poppin selection:bg-white selection:text-black lg:w-4/5 text-xl leading-loose"
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                    >
                        Hey! I’m Mehdi, a Moroccan developer passionate about creating seamless web and mobile apps. Whether it's backend, frontend, or anything in between, I’m here to bring tech that people love. Let’s build something awesome together!
                    </motion.p>

                    <motion.div className="flex mt-5 gap-x-4" variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show">
                        {[
                            { href: "https://www.linkedin.com/in/forkanimahdi/", icon: <FaLinkedinIn /> },
                            { href: "https://github.com/forkanimahdi", icon: <FaGithub /> },
                            { href: "mailto:forkanimahdi@gmail.com", icon: <FaEnvelope /> },
                            { href: "https://instagram.com/forkanimahdi", icon: <FaInstagram /> },
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} target="_blank" rel="noreferrer" className="text-white text-2xl">
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            <motion.h1
                className="uppercase pt-[15vh] text-center selection:bg-white selection:text-black text-white lg:text-3xl text-2xl boldPoppin"
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
            >
                Technologies
            </motion.h1>

            <motion.p
                className="text-[#bdbdbd] selection:bg-white selection:text-black lg:text-start text-center poppin lg:text-lg"
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
            >
                My tech stack that powers every project.
            </motion.p>

            <motion.div
                id="skills"
                className=" px-6 grid  lg:grid-cols-7 grid-cols-2 gap-6"
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="show"
            >
                {techno.map((tech, idx) => (
                    <div key={idx} className=" select-none hover:bg-slate-500/30 p-6 flex flex-col items-center gap-y-4 bg-white/5 border border-[#ffffff1a] rounded-lg">
                        <div className="text-6xl text-white">{tech.icon}</div>
                        <h5 className="poppin text-white">{tech.name}</h5>
                    </div>
                ))}
            </motion.div>
            <div className="flex items-center justify-center w-full px-5 lg:px-0">

                <div className="lg:w-1/3  w-full mt-8 text-white/80 text-center relative py-3 lg:rounded-full rounded-xl">
                    <div className="w-full h-full inset-0 bg-white/50 opacity-25 absolute lg:rounded-full rounded-xl"></div>
                    <h1 className="z-20 poppin">Learning & Growing Every Day</h1>
                </div>
            </div>
        </div>
    );
};
