import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { GoArrowUpRight, GoMail } from "react-icons/go";
import { fadeIn } from "../../utils/motion";
import { contactJsonLd, contactSeo, contactSteps } from "../../data/contact";
import { Contact as ContactForm } from "../home/components/contact";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";

const gridStyle = {
    backgroundImage:
        "linear-gradient(to right, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
};

const spotlightStyle = {
    background: "radial-gradient(260px circle at var(--x) var(--y), color-mix(in srgb, var(--color-alpha) 18%, transparent), transparent 70%)",
};

const headline = ["Got", "a", "project", "in"];

const ease = [0.22, 1, 0.36, 1];

const moveSpotlight = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

export const Contact = ({ ready = true }) => {
    const stepsRef = useRef(null);
    const [activeStep, setActiveStep] = useState(-1);

    const { scrollYProgress } = useScroll({ target: stepsRef, offset: ["start 85%", "end 60%"] });
    const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    useMotionValueEvent(scrollYProgress, "change", (value) => {
        setActiveStep(value <= 0 ? -1 : Math.min(contactSteps.length - 1, Math.floor(value * contactSteps.length)));
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const show = ready ? "show" : "hidden";

    return (
        <>
            <Seo title={contactSeo.title} description={contactSeo.description} path={contactSeo.path} jsonLd={contactJsonLd} />

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

            <ContactForm full />

            <section className="py-24 lg:py-32">
                <div className="container">
                    <motion.p
                        variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                    >
                        <span className="h-px w-8 bg-alpha"></span>
                        What happens next
                    </motion.p>

                    <motion.h2
                        variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                    >
                        From message to <span className="text-alpha">launch.</span>
                    </motion.h2>

                    <div ref={stepsRef} className="relative mt-14">
                        <div className="absolute inset-x-0 top-0 hidden h-px bg-white/10 lg:block">
                            <motion.div style={{ scaleX: lineProgress }} className="h-full origin-left bg-alpha"></motion.div>
                        </div>

                        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:pt-10">
                            {contactSteps.map((step, idx) => {
                                const active = idx <= activeStep;
                                return (
                                    <motion.li
                                        key={step.title}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-80px" }}
                                        transition={{ duration: 0.7, delay: idx * 0.1, ease }}
                                        onMouseMove={moveSpotlight}
                                        className={`group relative overflow-visible rounded-2xl border bg-white/[0.02] p-6 transition-colors duration-500 lg:p-7 ${active ? "border-alpha/40" : "border-white/[0.06]"}`}
                                    >
                                        <span
                                            className={`absolute -top-10 left-7 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full ring-4 ring-black transition-all duration-500 lg:block ${active ? "scale-125 bg-alpha" : "bg-white/20"}`}
                                        ></span>
                                        <span style={spotlightStyle} className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

                                        <span className={`relative font-mono text-sm transition-colors duration-500 ${active ? "text-alpha" : "text-white/30"}`}>0{idx + 1}</span>
                                        <h3 className="relative mt-6 font-display text-lg font-bold tracking-tight text-white">{step.title}</h3>
                                        <p className="relative mt-3 text-sm leading-6 text-white/50">{step.text}</p>
                                    </motion.li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};
