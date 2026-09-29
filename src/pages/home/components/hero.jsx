import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";

const ease = [0.22, 1, 0.36, 1];

const slideUp = (delay) => ({
    hidden: { y: "110%" },
    show: { y: 0, transition: { duration: 1, delay, ease } },
});

const fadeUp = (delay) => ({
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease } },
});

export const Hero = ({ ready = true }) => {
    const animate = ready ? "show" : "hidden";

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-black pb-32 pt-28">
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[36rem] w-[56rem] max-w-[160vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-alpha/35 blur-[140px] light:bg-alpha/15"></div>
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-alpha/60 to-transparent"></div>

            <div className="container flex flex-col items-center text-center">
                <motion.p
                    variants={fadeUp(0.1)} initial="hidden" animate={animate}
                    className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-white/70 backdrop-blur"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-alpha opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-alpha"></span>
                    </span>
                    Mobile &amp; Web App Developer · Morocco
                </motion.p>

                <h1 className="mt-10 font-display text-[clamp(2.25rem,5.6vw,5rem)] font-bold leading-[1.05] tracking-tight">
                    <span className="sr-only">Mehdi Forkani — Mobile &amp; Web App Developer in Morocco (Laravel, React, React Native). </span>
                    <span className="block overflow-hidden pb-1">
                        <motion.span variants={slideUp(0.2)} initial="hidden" animate={animate} className="block text-white/35">
                            The future?
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden pb-1">
                        <motion.span variants={slideUp(0.35)} initial="hidden" animate={animate} className="block text-white/35">
                            They just see it coming!
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden pb-2">
                        <motion.span variants={slideUp(0.5)} initial="hidden" animate={animate} className="block text-white">
                            I <span className="text-alpha">code</span> it.
                        </motion.span>
                    </span>
                </h1>

                <motion.p
                    variants={fadeUp(0.8)} initial="hidden" animate={animate}
                    className="mt-8 max-w-md text-[15px] leading-7 text-white/55 lg:text-base"
                >
                    I&apos;m Mehdi Forkani, building web platforms and mobile apps with Laravel, React and React Native.
                </motion.p>

                <motion.div
                    variants={fadeUp(0.95)} initial="hidden" animate={animate}
                    className="mt-10 flex flex-wrap items-center justify-center gap-3"
                >
                    <button
                        onClick={() => scrollTo("projects")}
                        className="group flex items-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
                    >
                        Want to bet?
                        <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <button
                        onClick={() => scrollTo("contact")}
                        className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition duration-300 hover:border-white/40 hover:text-white"
                    >
                        Get in touch
                    </button>
                </motion.div>
            </div>

            <motion.div variants={fadeUp(1.2)} initial="hidden" animate={animate} className="absolute inset-x-0 bottom-0">
                <div className="container flex items-center justify-center border-t border-white/[0.06] py-6 text-[0.7rem] uppercase tracking-[0.25em] text-white/40 sm:justify-between">
                    <span className="hidden sm:block">Based in Casablanca</span>
                    <button onClick={() => scrollTo("about")} className="flex items-center gap-3 transition-colors hover:text-white/80">
                        Scroll
                        <span className="relative h-8 w-px overflow-hidden bg-white/15">
                            <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-hint bg-alpha"></span>
                        </span>
                    </button>
                    <span className="hidden sm:block">Laravel · React · React Native</span>
                </div>
            </motion.div>
        </section>
    );
};
