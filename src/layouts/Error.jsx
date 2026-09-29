import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { fadeIn } from "../utils/motion";

const gridStyle = {
    backgroundImage:
        "linear-gradient(to right, rgb(255 255 255 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.035) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
};

export const Error = () => {
    return (
        <section className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
            <div style={gridStyle} className="pointer-events-none absolute inset-0 -z-10"></div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-alpha/25 blur-[100px]"></div>

            <motion.p
                variants={fadeIn("up", 0.1)} initial="hidden" animate="show"
                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
            >
                <span className="h-px w-8 bg-alpha"></span>
                Error 404
            </motion.p>

            <motion.h1
                variants={fadeIn("up", 0.2)} initial="hidden" animate="show"
                className="mt-6 font-display text-[clamp(6rem,22vw,13rem)] font-extrabold leading-none tracking-[-0.04em]"
            >
                4<span className="text-alpha">0</span>4
            </motion.h1>

            <motion.p
                variants={fadeIn("up", 0.3)} initial="hidden" animate="show"
                className="mt-6 max-w-md text-base leading-relaxed text-white/60 lg:text-lg"
            >
                This page doesn&apos;t exist or has moved.
            </motion.p>

            <motion.div
                variants={fadeIn("up", 0.4)} initial="hidden" animate="show"
                className="mt-10 flex flex-wrap justify-center gap-3"
            >
                <Link
                    to="/"
                    className="group flex items-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:brightness-125"
                >
                    Back home
                    <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.04]"
                >
                    <GoArrowLeft />
                    Go back
                </button>
            </motion.div>
        </section>
    );
};
