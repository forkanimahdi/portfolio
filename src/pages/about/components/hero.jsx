import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { fadeIn } from "../../../utils/motion";
import me from "../../../assets/images/me.jpg";

const gridStyle = {
    backgroundImage:
        "linear-gradient(to right, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
};

export const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <div style={gridStyle} className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]"></div>
            <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-alpha/25 blur-[100px]"></div>

            <div className="container grid gap-14 pb-20 pt-40 lg:grid-cols-12 lg:gap-16">
                <div className="flex flex-col justify-center lg:col-span-7">
                    <motion.p
                        variants={fadeIn("up", 0.1)} initial="hidden" animate="show"
                        className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                    >
                        <span className="h-px w-8 bg-alpha"></span>
                        About me
                    </motion.p>

                    <motion.h1
                        variants={fadeIn("up", 0.2)} initial="hidden" animate="show"
                        className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        From the first cohort to{" "}
                        <span className="bg-[linear-gradient(120deg,var(--color-white)_0%,#d4567a_50%,var(--color-white)_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                            Head Coach.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeIn("up", 0.3)} initial="hidden" animate="show"
                        className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg lg:leading-8"
                    >
                        I&apos;m Mehdi Forkani, a freelance web &amp; mobile app developer based in Casablanca, Morocco. I learned to code in the
                        very first cohort of the LionsGeek Coding School, grew into its Head Coach, and today I build the web platforms
                        and mobile apps that organizations around the world rely on.
                    </motion.p>

                    <motion.div
                        variants={fadeIn("up", 0.4)} initial="hidden" animate="show"
                        className="mt-10 flex flex-wrap gap-3"
                    >
                        <Link
                            to="/contact"
                            className="group flex items-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
                        >
                            Let&apos;s talk
                            <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/projects"
                            className="group flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-alpha"
                        >
                            See my work
                            <GoArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn("up", 0.3)} initial="hidden" animate="show"
                    className="relative w-full max-w-md lg:col-span-5 lg:max-w-none"
                >
                    <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                        <img className="aspect-[4/5] w-full select-none object-cover object-top" src={me} alt="Mehdi Forkani, freelance web and mobile app developer based in Casablanca, working worldwide" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
