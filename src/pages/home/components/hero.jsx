import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import heroImage from "../../../assets/images/t.webp";
import heroImageMobile from "../../../assets/images/heroMobile.webp";

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
};

const reveal = (delay) => ({
    hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] } },
});

export const Hero = ({ ready = true }) => {
    const animate = ready ? "show" : "hidden";

    return (
        <section id="home" className="relative isolate flex h-svh min-h-[640px] items-center overflow-hidden lg:h-screen">
            <h1 className="sr-only">
                Mehdi Forkani — Mobile &amp; Web App Developer in Morocco (Laravel, React, React Native)
            </h1>

            <motion.div
                initial={{ scale: 1.12, opacity: 0 }}
                animate={ready ? { scale: 1, opacity: 1 } : { scale: 1.12, opacity: 0 }}
                transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 -z-10"
            >
                <img className="hidden h-full w-full object-cover object-right opacity-60 saturate-[0.8] light:opacity-40 lg:block" src={heroImage} alt="" />
                <img className="block h-full w-full object-cover opacity-40 lg:hidden" src={heroImageMobile} alt="" />
            </motion.div>

            <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black via-black/75 to-black/10 lg:block"></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/60 to-black lg:hidden"></div>
            <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent lg:block"></div>
            <div className="absolute -left-40 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-alpha/20 blur-[120px]"></div>

            <div className="container pt-20">
                <motion.div
                    variants={reveal(0.1)}
                    initial="hidden"
                    animate={animate}
                    className="inline-flex items-center gap-2.5 rounded-lg border border-alpha/40 bg-alpha/10 px-3.5 py-2 text-xs text-white/80 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-alpha opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-alpha"></span>
                    </span>
                    Available for new projects
                </motion.div>

                <motion.p
                    variants={reveal(0.3)}
                    initial="hidden"
                    animate={animate}
                    className="mt-8 font-display text-xl font-medium tracking-tight text-white/55 lg:text-3xl"
                >
                    The future? They just see it coming.
                </motion.p>

                <motion.h2
                    variants={reveal(0.5)}
                    initial="hidden"
                    animate={animate}
                    className="mt-2 font-display text-[4.25rem] font-bold leading-[0.95] tracking-tight text-white sm:text-8xl lg:text-[8.5rem]"
                >
                    I{" "}
                    <span className="bg-[linear-gradient(120deg,var(--color-white)_0%,#d4567a_50%,var(--color-white)_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                        code
                    </span>{" "}
                    it.
                </motion.h2>

                <motion.p
                    variants={reveal(0.7)}
                    initial="hidden"
                    animate={animate}
                    className="mt-8 max-w-md text-base leading-relaxed text-white/60 lg:text-lg"
                >
                    I&apos;m Mehdi Forkani, a mobile &amp; web app developer in Morocco turning bold ideas into products people rely on every day.
                </motion.p>

                <motion.div
                    variants={reveal(0.9)}
                    initial="hidden"
                    animate={animate}
                    className="mt-10 flex flex-wrap items-center gap-3"
                >
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="group flex h-12 items-center gap-2 rounded-lg bg-alpha px-6 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
                    >
                        Want to bet?
                        <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="flex h-12 items-center rounded-lg border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-white/40"
                    >
                        Let&apos;s talk
                    </button>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
                <motion.button
                    variants={reveal(1.2)}
                    initial="hidden"
                    animate={animate}
                    onClick={() => scrollToSection("about")}
                    aria-label="Scroll to about"
                    className="flex flex-col items-center gap-3"
                >
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/40">Scroll</span>
                    <span className="relative h-12 w-px overflow-hidden bg-white/10">
                        <span className="absolute inset-x-0 top-0 h-1/2 bg-white/60 animate-scroll-hint"></span>
                    </span>
                </motion.button>
            </div>
        </section>
    );
};
