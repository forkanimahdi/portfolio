import React from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import heroImage from "../../../assets/images/hero.webp"
import heroImageMobile from "../../../assets/images/heroMobile.webp"

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
};

const texts = [
    { content: "The future ?", delay: 0.5, accent: false },
    { content: "They just see it coming!", delay: 1, accent: false },
    { content: "I code it.", delay: 1.5, accent: true },
];

export const Hero = () => (
    <div id="home" className="pt-[10vh] h-[90vh] flex flex-col items-center lg:justify-evenly justify-center lg:gap-0 gap-y-10">

        <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            className="eyebrow z-20"
        >
            Full-Stack Developer · Morocco
        </motion.p>

        <div className="uppercase selection:bg-white selection:text-black text-white lg:text-[4rem] text-[2rem] lg:leading-normal leading-loose font-extrabold text-center selectable">
            {texts.map((text, index) => (
                <motion.div
                    key={index}
                    variants={fadeIn("up", text.delay)}
                    initial="hidden"
                    whileInView="show"
                    className={text.accent ? "gradient-heading" : ""}
                >
                    {text.content}
                </motion.div>
            ))}
        </div>

        {/* Background section */}
        <div className="w-full h-full  absolute top-0   ">
            <div className="bg-gradient-to-b from-black/0 to-black bottom-0 absolute z-10 w-full  h-[30vh]"></div>
            <img loading="lazy" className="h-[100vh] lg:h-fit lg:bg-center bg-right object-cover opacity-10 lg:block hidden" src={heroImage} alt="" />
            <img loading="lazy" className="h-[100vh] lg:h-fit lg:bg-center bg-right object-cover opacity-20 w-full lg:hidden block" src={heroImageMobile} alt="" />
        </div>

        <motion.div
            variants={fadeIn("up", 1.8)}
            initial="hidden"
            whileInView="show"
            className="group uppercase cursor-pointer z-20 select-none no-underline text-white border border-white/60 rounded-xl p-3 px-6 hover:bg-white hover:text-black hover:border-white poppin flex items-center gap-x-3 transition-colors"
            onClick={() => scrollToSection("projects")}
        >
            Want to bet?
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </motion.div>

        <div className="flex flex-col gap-y-1 items-center cursor-pointer z-20" onClick={() => scrollToSection("about")}>
            <svg className="animate-bounce nav bi bi-mouse" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#bdbdbd" viewBox="0 0 16 16">
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
            </svg>
            <p className="text-white/80 text-sm animate-pulse">Scroll Now</p>
        </div>
    </div>
);
