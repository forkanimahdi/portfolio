import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import heroImage from "../../../assets/images/t.webp";

const reveal = (delay) => ({
    hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] } },
});

export const Hero = ({ ready = true }) => {
    const location = useLocation();
    const animate = ready ? "show" : "hidden";

    return (
        <section className="relative isolate flex h-svh min-h-[600px] items-center overflow-hidden lg:h-screen">
            <motion.img
                initial={{ scale: 1.12, opacity: 0 }}
                animate={ready ? { scale: 1, opacity: 1 } : { scale: 1.12, opacity: 0 }}
                transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
                src={heroImage}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] opacity-40 grayscale-[0.4] light:opacity-25"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/70 to-black lg:bg-gradient-to-r lg:from-black lg:via-black/80 lg:to-black/20"></div>
            <div className="absolute -left-40 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-alpha/20 blur-[120px]"></div>

            <div className="container pt-20">
                <motion.div
                    variants={reveal(0.1)}
                    initial="hidden"
                    animate={animate}
                    className="inline-flex items-center gap-2.5 rounded-lg border border-alpha/40 bg-alpha/10 px-3.5 py-2 text-xs text-white/80 backdrop-blur-md"
                >
                    <span className="h-2 w-2 rounded-full bg-alpha"></span>
                    Error 404
                </motion.div>

                <motion.p
                    variants={reveal(0.3)}
                    initial="hidden"
                    animate={animate}
                    className="mt-8 font-display text-xl font-medium tracking-tight text-white/55 lg:text-3xl"
                >
                    You found a page from the future.
                </motion.p>

                <motion.h1
                    variants={reveal(0.5)}
                    initial="hidden"
                    animate={animate}
                    className="mt-2 font-display text-[3.5rem] font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[7rem]"
                >
                    Not{" "}
                    <span className="bg-[linear-gradient(120deg,var(--color-white)_0%,#d4567a_50%,var(--color-white)_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                        coded
                    </span>{" "}
                    yet.
                </motion.h1>

                <motion.p
                    variants={reveal(0.7)}
                    initial="hidden"
                    animate={animate}
                    className="mt-8 max-w-md text-base leading-relaxed text-white/60 lg:text-lg"
                >
                    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-sm text-white/80">
                        {location.pathname}
                    </span>{" "}
                    doesn&apos;t exist, or it moved. Let&apos;s get you back to something that does.
                </motion.p>

                <motion.div
                    variants={reveal(0.9)}
                    initial="hidden"
                    animate={animate}
                    className="mt-10 flex flex-wrap items-center gap-3"
                >
                    <Link
                        to="/"
                        className="group flex h-12 items-center gap-2 rounded-lg bg-alpha px-6 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
                    >
                        Back home
                        <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                        to="/projects"
                        className="flex h-12 items-center rounded-lg border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-white/40"
                    >
                        See my projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
