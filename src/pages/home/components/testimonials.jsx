import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight, GoChevronDown } from "react-icons/go";
import { RiDoubleQuotesL } from "react-icons/ri";
import { fadeIn } from "../../../utils/motion";
import mhijir from "../../../assets/images/testimonials/mhijir.png";
import tihadazemmour from "../../../assets/images/testimonials/tihadazemmour.png";

const testimonials = [
    {
        name: "Mahdi Bouziane",
        role: "President, Tihad Azemmour",
        quote: "As President of Tihad Azemmour Women, I'm grateful to Mahdi for developing tihadazemmourwomen.ma, our club's website and management platform.\n\nA women's football club with more than 60 players across U15, U17 and Seniors needs solid tools, and Mahdi built one to fit us. He took the time to understand how an amateur club really runs, and he turned our needs into a clear, reliable platform that fully carries our identity as the Dragonnes.\n\nHe was always available and attentive, and he never lost sight of the purpose: giving young women athletes a club that is professional on and off the pitch.\n\nTechnical skill, listening and commitment make Mahdi a partner I recommend without hesitation.\n\nديما اتحاد 🐉",
        image: tihadazemmour,
    },
    {
        name: "Oumaima Mhijir",
        role: "CEO, Jadara Foundation",
        quote: "I am really impressed by you, not only by your technical Skills but also by your ability to transform a more or less clear vision into a tangible project  Your reactivity and professionalism just wawed be  Thank you sidi",
        image: mhijir,
    },
];

export const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const testimonial = testimonials[current];
    const paragraphs = testimonial.quote.split("\n\n");
    const duration = Math.max(7, Math.round(paragraphs[0].length / 20));

    useEffect(() => {
        setExpanded(false);
    }, [current]);

    useEffect(() => {
        if (paused) return;
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, duration * 1000);
        return () => clearTimeout(timer);
    }, [current, paused, duration]);

    const goTo = (index) => {
        setCurrent((index + testimonials.length) % testimonials.length);
        setPaused(true);
    };

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
                            <div>
                                <p className="text-xl font-normal leading-relaxed text-white/90 sm:text-2xl sm:leading-relaxed lg:text-[1.65rem] lg:leading-[1.55]">
                                    {paragraphs[0]}
                                </p>

                                {paragraphs.length > 1 && (
                                    <>
                                        <AnimatePresence initial={false}>
                                            {expanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-6">
                                                        <div className="space-y-4 border-l border-alpha/50 pl-5 text-base leading-relaxed text-white/60 lg:text-[17px] lg:leading-8">
                                                            {paragraphs.slice(1).map((paragraph, idx) => (
                                                                <p key={idx}>{paragraph}</p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <button
                                            onClick={() => {
                                                setExpanded(!expanded);
                                                setPaused(true);
                                            }}
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-alpha transition-colors duration-300 hover:text-white"
                                        >
                                            {expanded ? "Show less" : "Read full testimonial"}
                                            <GoChevronDown className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="flex items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
                                <div className="flex items-center gap-4">
                                    {testimonial.image ? (
                                        <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full border border-alpha object-cover" />
                                    ) : (
                                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-alpha font-display text-sm font-bold text-pure-white">
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
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors duration-300 hover:border-alpha hover:bg-alpha hover:text-pure-white"
                                    >
                                        <GoArrowLeft />
                                    </button>
                                    <button
                                        onClick={() => goTo(current + 1)}
                                        aria-label="Next testimonial"
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors duration-300 hover:border-alpha hover:bg-alpha hover:text-pure-white"
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
                                    className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold ${idx === current ? "bg-alpha text-pure-white" : "bg-white/[0.06] text-white/60"}`}
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
                                    transition={{ duration: paused ? 0 : duration, ease: "linear" }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
