import React from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";


export const Hero = () => {




    return (
        <>
            <div id="home" className="pt-[10vh] h-[90vh]    flex flex-col  items-center lg:justify-evenly justify-center lg:gap-0 gap-y-10">

                <div className="uppercase selection:bg-white selection:text-black text-white lg:text-[4rem] text-[2rem] lg:leading-normal leading-loose font-extrabold  text-center selectable">
                    <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} >The future ?</motion.div>
                    <motion.div variants={fadeIn('up', 1)} initial='hidden' whileInView={'show'} >They just see it comming !</motion.div>
                    <motion.div variants={fadeIn('up', 1.5)} initial='hidden' whileInView={'show'}  >I code it .</motion.div>
                </div>


                <motion.div variants={fadeIn('up', 1.8)} initial='hidden' whileInView={'show'} className="">
                    <div onClick={() => {
                        const section = document.getElementById("contact");
                        if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                        }
                    }} className="uppercase cursor-pointer select-none no-underline text-white border rounded-xl p-3 px-5 hover:bg-white/95 hover:text-black poppin" href="#contact">Want to bet ?</div>
                </motion.div>


                <div onClick={() => {
                    const section = document.getElementById("skills");
                    console.log(section)
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }}
                    className=" flex flex-col gap-y-1 items-center">
                    <svg className="animate-bounce nav bi bi-mouse" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#bdbdbd"  viewBox="0 0 16 16">
                        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
                    </svg>
                    <p className="text-white/80 text-sm animate-pulse">Scroll Now</p>
                </div>

            </div>
        </>
    );
};
