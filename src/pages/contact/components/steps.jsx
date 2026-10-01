import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import { contactSteps } from "../../../data/contact";

const spotlightStyle = {
    background: "radial-gradient(260px circle at var(--x) var(--y), color-mix(in srgb, var(--color-alpha) 18%, transparent), transparent 70%)",
};

const ease = [0.22, 1, 0.36, 1];

const moveSpotlight = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

export const Steps = () => {
    const stepsRef = useRef(null);
    const [activeStep, setActiveStep] = useState(-1);

    const { scrollYProgress } = useScroll({ target: stepsRef, offset: ["start 85%", "end 60%"] });
    const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    useMotionValueEvent(scrollYProgress, "change", (value) => {
        setActiveStep(value <= 0 ? -1 : Math.min(contactSteps.length - 1, Math.floor(value * contactSteps.length)));
    });

    return (
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
    );
};
