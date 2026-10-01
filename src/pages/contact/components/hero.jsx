import { motion } from "framer-motion";
import { GoArrowUpRight, GoMail } from "react-icons/go";
import { fadeIn } from "../../../utils/motion";

const gridStyle = {
    backgroundImage:
        "linear-gradient(to right, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
};

const headline = ["Got", "a", "project", "in"];

const ease = [0.22, 1, 0.36, 1];

export const Hero = ({ ready = true }) => {
    const show = ready ? "show" : "hidden";

    return (
        <section className="relative isolate overflow-hidden">
            <div style={gridStyle} className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]"></div>
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-alpha/25 blur-[100px]"
            ></motion.div>

            <div className="container pb-16 pt-40">
                <motion.p
                    variants={fadeIn("up", 0.1)} initial="hidden" animate={show}
                    className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                >
                    <motion.span
                        initial={{ scaleX: 0 }} animate={{ scaleX: ready ? 1 : 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}
                        className="h-px w-8 origin-left bg-alpha"
                    ></motion.span>
                    Contact
                </motion.p>

                <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {headline.map((word, idx) => (
                        <span key={word} className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                            <motion.span
                                initial={{ y: "110%" }} animate={{ y: ready ? 0 : "110%" }} transition={{ duration: 0.8, delay: 0.15 + idx * 0.07, ease }}
                                className="inline-block"
                            >
                                {word}&nbsp;
                            </motion.span>
                        </span>
                    ))}
                    <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                        <motion.span
                            initial={{ y: "110%" }} animate={{ y: ready ? 0 : "110%" }} transition={{ duration: 0.8, delay: 0.15 + headline.length * 0.07, ease }}
                            className="inline-block bg-[linear-gradient(120deg,var(--color-white)_0%,#d4567a_50%,var(--color-white)_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
                        >
                            mind?
                        </motion.span>
                    </span>
                </h1>

                <motion.p
                    variants={fadeIn("up", 0.5)} initial="hidden" animate={show}
                    className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg lg:leading-8"
                >
                    I&apos;m Mehdi Forkani, a freelance web &amp; mobile app developer based in Casablanca, Morocco, working with clients
                    worldwide. Tell me what you&apos;re building, and let&apos;s see how I can help.
                </motion.p>

                <motion.a
                    href="mailto:forkanimahdi@gmail.com"
                    variants={fadeIn("up", 0.6)} initial="hidden" animate={show}
                    className="group mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-white/65 lg:text-lg"
                >
                    <GoMail className="text-alpha" />
                    Prefer email?
                    <span className="relative flex items-center gap-1.5 font-semibold text-white transition-colors duration-300 group-hover:text-alpha">
                        forkanimahdi@gmail.com
                        <GoArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        <motion.span
                            initial={{ scaleX: 0 }} animate={{ scaleX: ready ? 1 : 0 }} transition={{ duration: 0.8, delay: 1.1, ease }}
                            className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-alpha"
                        ></motion.span>
                    </span>
                </motion.a>
            </div>
        </section>
    );
};
