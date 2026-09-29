import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { RiDoubleQuotesL } from "react-icons/ri";
import { fadeIn } from "../../../utils/motion";
import mhijir from "../../../assets/images/testimonials/mhijir.png";

const testimonials = [
    {
        name: "Oumaima Mhijir",
        role: "CEO, Jadara Foundation",
        quote: "I am really impressed by you, not only by your technical Skills but also by your ability to transform a more or less clear vision into a tangible project  Your reactivity and professionalism just wawed be  Thank you sidi",
        image: mhijir,
    },
    {
        name: "Another Client",
        role: "CTO, Tech Startup",
        quote: "Working with Mehdi was a game-changer. He understood our vision and brought it to life with precision and creativity. The final product exceeded our expectations.",
        image: null,
    },
    {
        name: "Third Client",
        role: "Project Manager",
        quote: "Professional, reliable, and incredibly talented. Mehdi's work speaks for itself, and his communication throughout the project was excellent.",
        image: null,
    },
];

export const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 7000);
        return () => clearTimeout(timer);
    }, [current, paused]);

    const goTo = (index) => {
        setCurrent((index + testimonials.length) % testimonials.length);
        setPaused(true);
    };

    const testimonial = testimonials[current];

    return (
        <section id="testimonials" className="bg-black py-24 lg:py-32">
            <div className="container grid gap-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
                <div className="lg:col-span-5">
                    <motion.p
                        variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                    >
                        <span className="h-px w-8 bg-alpha"></span>
                        Kind words
                    </motion.p>

                    <motion.h2
                        variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                    >
                        What clients <span className="text-alpha">say</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="mt-5 text-base leading-relaxed text-white/60 lg:text-lg"
                    >
                        Real feedback from the people I&apos;ve built with.
                    </motion.p>
                </div>

                <motion.div
                    variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="relative isolate flex flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:min-h-[30rem] lg:p-12"
                >
                    <div className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[26rem] w-[26rem] rounded-full bg-alpha/25 blur-[100px]"></div>

                    <div className="flex items-start justify-between gap-6">
                        <RiDoubleQuotesL className="text-5xl text-alpha" />
                        <p className="pt-2 text-sm text-white/40">
                            <span className="text-white">0{current + 1}</span> / 0{testimonials.length}
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.45 }}
                            className="mt-8 flex flex-1 flex-col justify-between gap-10"
                        >
                            <p className="font-display text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.9rem] lg:leading-[1.3]">
                                {testimonial.quote}
                            </p>

                            <div className="flex items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
                                <div className="flex items-center gap-4">
                                    {testimonial.image ? (
                                        <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full border border-alpha object-cover" />
                                    ) : (
                                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-alpha font-display text-sm font-bold text-white">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    )}
                                    <div>
                                        <p className="font-semibold text-white">{testimonial.name}</p>
                                        <p className="text-sm text-white/50">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => goTo(current - 1)}
                                        aria-label="Previous testimonial"
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors duration-300 hover:border-alpha hover:bg-alpha hover:text-white"
                                    >
                                        <GoArrowLeft />
                                    </button>
                                    <button
                                        onClick={() => goTo(current + 1)}
                                        aria-label="Next testimonial"
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors duration-300 hover:border-alpha hover:bg-alpha hover:text-white"
                                    >
                                        <GoArrowRight />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="self-start border-t border-white/[0.06] lg:col-span-5 lg:mt-4"
                >
                    {testimonials.map((person, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className="group relative flex w-full items-center gap-4 border-b border-white/[0.06] py-4 text-left"
                        >
                            {person.image ? (
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className={`h-10 w-10 rounded-full border object-cover ${idx === current ? "border-alpha" : "border-white/10"}`}
                                />
                            ) : (
                                <span
                                    className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold ${idx === current ? "bg-alpha text-white" : "bg-white/[0.06] text-white/60"}`}
                                >
                                    {person.name.charAt(0)}
                                </span>
                            )}

                            <span className="flex-1">
                                <span className={`block text-sm font-semibold transition-colors duration-300 ${idx === current ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                                    {person.name}
                                </span>
                                <span className="block text-xs text-white/40">{person.role}</span>
                            </span>

                            <span className={`text-xs ${idx === current ? "text-white" : "text-white/30"}`}>0{idx + 1}</span>

                            {idx === current && (
                                <motion.span
                                    key={`${current}-${paused}`}
                                    className="absolute -bottom-px left-0 h-px w-full origin-left bg-alpha"
                                    initial={{ scaleX: paused ? 1 : 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: paused ? 0 : 7, ease: "linear" }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
