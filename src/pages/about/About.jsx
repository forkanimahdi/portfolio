import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoArrowRight, GoArrowUpRight, GoBriefcase, GoChevronDown, GoLocation, GoMortarBoard, GoStack } from "react-icons/go";
import { fadeIn } from "../../utils/motion";
import { aboutJsonLd, aboutSeo, faqs, journey } from "../../data/about";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";
import me from "../../assets/images/me.jpg";

const gridStyle = {
    backgroundImage:
        "linear-gradient(to right, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
};

const highlights = [
    {
        icon: <GoBriefcase />,
        title: "LionsGeek",
        text: "Head Coach and Project Manager in Casablanca, leading web and mobile products for LionsGeek and its partners.",
    },
    {
        icon: <GoMortarBoard />,
        title: "Coach mindset",
        text: "Learned in the very first LionsGeek cohort, now teaching the next ones. I explain every decision I make.",
    },
    {
        icon: <GoStack />,
        title: "Full-stack toolkit",
        text: "Hands-on with Laravel, Inertia.js, React, React Native, Tailwind CSS, MySQL and REST APIs.",
    },
    {
        icon: <GoLocation />,
        title: "Casablanca → Worldwide",
        text: "Based in Casablanca, freelancing remotely for startups, NGOs and institutions all over the world.",
    },
];

export const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Seo title={aboutSeo.title} description={aboutSeo.description} path={aboutSeo.path} jsonLd={aboutJsonLd} />

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

                <div className="container grid gap-4 pb-24 sm:grid-cols-2 lg:grid-cols-4 lg:pb-32">
                    {highlights.map((highlight, idx) => (
                        <motion.div
                            key={highlight.title}
                            variants={fadeIn("up", 0.1 * idx)} initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-alpha/40 lg:p-7"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-alpha transition-colors duration-300 group-hover:border-alpha group-hover:bg-alpha group-hover:text-pure-white">
                                {highlight.icon}
                            </span>
                            <h3 className="mt-8 font-display text-lg font-bold tracking-tight text-white">{highlight.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-white/50">{highlight.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-dark py-24 lg:py-32">
                <div className="container grid gap-14 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32">
                            <motion.p
                                variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                            >
                                <span className="h-px w-8 bg-alpha"></span>
                                My journey
                            </motion.p>

                            <motion.h2
                                variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                                className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                            >
                                How I got <span className="text-alpha">here.</span>
                            </motion.h2>

                            <motion.p
                                variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                                className="mt-6 text-base leading-relaxed text-white/50 lg:text-[17px] lg:leading-8"
                            >
                                No shortcuts: every step taught me something I bring to your project.
                            </motion.p>
                        </div>
                    </div>

                    <ol className="relative min-w-0 space-y-8 border-l border-white/10 pl-6 lg:col-span-8 lg:pl-10">
                        {journey.map((step, idx) => (
                            <motion.li
                                key={step.title}
                                variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                                className="group relative"
                            >
                                <span className="absolute -left-[29px] top-7 h-2.5 w-2.5 rounded-full bg-alpha ring-4 ring-dark transition-transform duration-300 group-hover:scale-150 lg:-left-[45px]"></span>

                                <article className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-colors duration-300 group-hover:border-alpha/40">
                                    <div className="flex items-center gap-4 border-b border-white/[0.06] bg-white/[0.02] px-6 py-4">
                                        <div className="flex shrink-0 gap-1.5">
                                            <span className="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
                                            <span className="h-3 w-3 rounded-full bg-[#febc2e]"></span>
                                            <span className="h-3 w-3 rounded-full bg-[#28c840]"></span>
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-mono text-base font-bold text-white lg:text-lg">
                                                <span className="text-alpha">$</span> {step.title}
                                            </h3>
                                            <p className="truncate text-xs text-white/45">{step.place}</p>
                                        </div>
                                    </div>

                                    <div className="p-6 lg:p-8">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-alpha">
                                                0{idx + 1} · {step.chapter}
                                            </p>
                                            <div className="flex flex-wrap gap-2 sm:justify-end">
                                                {step.tags.map((tag) => (
                                                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white/50">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="mt-5 text-base leading-relaxed text-white/70 lg:text-[17px] lg:leading-8">{step.text}</p>
                                    </div>
                                </article>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-24 lg:py-32">
                <div className="container grid gap-14 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-4">
                        <motion.p
                            variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                        >
                            <span className="h-px w-8 bg-alpha"></span>
                            FAQ
                        </motion.p>

                        <motion.h2
                            variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                        >
                            Questions clients <span className="text-alpha">ask.</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="mt-6 text-base leading-relaxed text-white/50 lg:text-[17px] lg:leading-8"
                        >
                            Looking for a freelance web or mobile app developer, in Casablanca or anywhere in the world? Here is what people usually want to know.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="border-t border-white/[0.06] lg:col-span-8"
                    >
                        {faqs.map((faq) => (
                            <details key={faq.question} className="group border-b border-white/[0.06]">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                                    <h3 className="font-display text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-alpha lg:text-xl">
                                        {faq.question}
                                    </h3>
                                    <GoChevronDown className="shrink-0 text-xl text-white/50 transition-transform duration-300 group-open:rotate-180 group-open:text-alpha" />
                                </summary>
                                <p className="pb-6 pr-10 text-base leading-relaxed text-white/60 lg:text-[17px] lg:leading-8">{faq.answer}</p>
                            </details>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
};
