import React from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import { FaEnvelope, FaGitAlt, FaInstagram, FaLaravel, FaLinkedinIn, FaReact } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import me from "../../../assets/images/me.png"
import { IoLogoJavascript } from "react-icons/io";
import { SiExpo } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const About = () => {

    const techno = [
        { image: <IoLogoJavascript />, name: "JavaScript" },
        { image: <FaReact />, name: "React" },
        { image: <RiTailwindCssFill />, name: "Tailwind" },
        { image: <FaLaravel />, name: "Laravel" },
        { image: <FaGitAlt />, name: "Git" },
        { image: <SiExpo />, name: "React Native" },
    ]





    return (
        <>
            <div id="about" className="  pt-[13vh] py-3  flex flex-col gap-y-8 items-center justify-start">
                <div className="flex lg:flex-row flex-col justify-between px-10 lg:gap-x-8 gap-y-5">

                    <motion.img className="lg:w-1/2 rounded-2xl select-none" variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} src={me} alt="" />
                    <div className=" ">

                        <motion.h1 variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} className="uppercase  selection:bg-white selection:text-black text-white text-[2rem] boldPoppin  ">Who am i ?</motion.h1>

                        <motion.p variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} className="text-white mt-6 poppin selection:bg-white selection:text-black poppin lg:w-4/5 text-xl  leading-loose">
                            Hey! I’m Mehdi, a Moroccan developer who’s all about building web and mobile apps that work seamlessly and feel effortless. Whether it's the backend, frontend, or everything in between, I’m here to make tech that people love to use. If you’re ready to bring something awesome to life, let’s chat!                        </motion.p>

                        <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} className=" flex mt-5 gap-x-4">
                            <a rel="noreferrer" target="_blank" className="text-[#fff] font text-2xl no-underline " href="https://www.linkedin.com/in/forkanimahdi/"><FaLinkedinIn /></a>
                            <a rel="noreferrer" target="_blank" className="text-[#fff] font text-2xl no-underline " href="https://github.com/forkanimahdi"><FaGithub /></a>
                            <a rel="noreferrer" target="_blank" className="text-[#fff] font text-2xl no-underline " href="mailto:forkanimahdi@gmail.com"><FaEnvelope /></a>
                            <a rel="noreferrer" target="_blank" className="text-[#fff] font text-2xl no-underline " href="https://instagram.com/forkanimahdi"><FaInstagram /></a>
                        </motion.div>
                    </div>

                </div>
                <motion.h1 variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} className="uppercase pt-[15vh] selection:bg-white selection:text-black  text-white lg:text-[3rem] text-[2rem] boldPoppin  ">Technologies</motion.h1>
                <motion.p variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" className="text-[#bdbdbd] selection:bg-white selection:text-black lg:text-start text-center poppin lg:text-lg ">Some of my tech armory that bring life to every Project  </motion.p>
                <motion.div id="skills" variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" className="flex lg:gap-x-7 lg:justify-normal justify-between px-8 gap-3 flex-wrap items-center  ">
                    {
                        techno.map((ele, idx) =>
                            <div key={idx} className="lg:w-[10rem] w-[45%] select-none hover:bg-slate-500/30 p-6 px-5 flex flex-col items-center gap-y-4 bg-white/5 border border-[#ffffff1a] rounded-lg">
                                <div className="text-6xl text-white">{ele.image}</div>
                                <h5 className="poppin text-white">{ele.name}</h5>
                            </div>

                        )
                    }
                </motion.div>
                <div className="lg:w-1/3 w-11/12 mt-8 lg:font-semibold lg:text-lg  text-white/80 text-center relative py-3 rounded-full">
                    <div className="w-full h-full inset-0 bg-white/50 opacity-25 absolute rounded-full"></div>
                    <h1 className="static z-20 selection:bg-white selection:text-black poppin">Learning & Growing Every Day .</h1>
                </div>

            </div>
        </>
    );
};
