import React from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import me from "../../../assets/images/me.jpg";

export const About = () => {
    return (
        <div id="about" className="pt-[13vh] py-3 flex flex-col gap-y-8 lg:items-center relative z-30  ">
            <div className="flex lg:flex-row flex-col justify-between px-5 lg:px-24 lg:gap-x-8 gap-y-8">

                <motion.img
                    className="lg:w-1/2 rounded-2xl object-cover select-none"
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView="show"
                    loading="lazy"
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
                        className="text-white/90 mt-6 poppin selection:bg-white selection:text-black lg:w-5/6 text-lg leading-loose"
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView="show"
                    >
                        Hi, I’m Mehdi, a mobile &amp; web app developer based in Morocco. Most of my work starts with a simple question: <span className="font-bold italic">“Do you think we can…?”</span>
                        <br /><br />
                        I design and build production-ready web platforms and mobile apps, from polished React and React Native front-ends to robust Laravel back-ends and admin dashboards. I’ve partnered with startups, NGOs, institutions, and leaders to turn ideas and real-world problems into products people rely on every day.
                        <br /><br />
                        From the first conversation to launch and beyond, I stay hands-on so the result is clear, reliable, and built to scale. I also coach young developers finding their way into tech.
                    </motion.p>


                    <motion.div className="flex mt-5 gap-x-4" variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show">
                        {[
                            { href: "https://www.linkedin.com/in/forkanimahdi/", icon: <FaLinkedinIn /> },
                            { href: "https://github.com/forkanimahdi", icon: <FaGithub /> },
                            { href: "mailto:forkanimahdi@gmail.com", icon: <FaEnvelope /> },
                            { href: "https://instagram.com/forkanimahdi", icon: <FaInstagram /> },
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} target="_blank" rel="noreferrer" className="text-white text-3xl">
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
