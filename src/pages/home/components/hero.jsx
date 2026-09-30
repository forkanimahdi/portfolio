import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import heroImage from "../../../assets/images/t.png";
import heroImageMobile from "../../../assets/images/heroMobile.webp";

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
};

const texts = [
    { content: "The future ?", delay: 0.5, accent: false },
    { content: "They just see it coming!", delay: 1, accent: false },
    { content: "I code it.", delay: 1.5, accent: true },
];

export const Hero = ({ ready = true }) => {
    const animate = ready ? "show" : "hidden";

    return (
        <div id="home" className="relative pt-[10vh] h-screen flex flex-col items-center lg:justify-evenly justify-center lg:gap-0 gap-y-10">
            <h1 className="sr-only">
                Mehdi Forkani — Mobile &amp; Web App Developer in Morocco (Laravel, React, React Native)
            </h1>

            <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate={animate}
                className="z-20 text-[0.7rem] uppercase tracking-[0.35em] text-white/45"
            >
                Mobile &amp; Web App Developer · Morocco
            </motion.p>

            <div className="uppercase selection:bg-white selection:text-black text-white font-display lg:text-[3.25rem] text-[1.75rem] lg:leading-[1.35] leading-loose font-bold tracking-tight text-center z-20">
                {texts.map((text, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("up", text.delay)}
                        initial="hidden"
                        animate={animate}
                        className={text.accent ? "bg-[linear-gradient(120deg,var(--color-white)_0%,#9a9a9a_45%,var(--color-white)_90%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer" : ""}
                    >
                        {text.content}
                    </motion.div>
                ))}
            </div>

            <div className="w-full h-screen absolute top-0 overflow-hidden">
                <div className="absolute inset-0 z-[5] bg-alpha/10 light:bg-alpha/5"></div>
                <div className="bg-gradient-to-b from-dark/0 to-dark bottom-0 absolute z-10 w-full h-[30vh]"></div>
                <img loading="lazy" className="h-full w-full object-cover opacity-10 lg:block hidden" src={heroImage} alt="" />
                <img loading="lazy" className="h-full w-full object-cover opacity-20 lg:hidden block" src={heroImageMobile} alt="" />
            </div>

            <motion.div
                variants={fadeIn("up", 1.8)}
                initial="hidden"
                animate={animate}
                className="group uppercase cursor-pointer z-20 select-none text-sm font-semibold tracking-wide text-white border border-white/60 rounded-lg py-3 px-6 hover:bg-white hover:text-black hover:border-white flex items-center gap-x-3 transition-colors"
                onClick={() => scrollToSection("projects")}
            >
                Want to bet?
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </motion.div>

            <div className="flex flex-col gap-y-1 items-center cursor-pointer z-20" onClick={() => scrollToSection("about")}>
                <svg className="animate-bounce" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#bdbdbd" viewBox="0 0 16 16">
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
                </svg>
                <p className="text-white/80 text-sm animate-pulse">Scroll Now</p>
            </div>
        </div>
    );
};
