import { useEffect } from "react";
import { motion } from "framer-motion";
import { GoMail } from "react-icons/go";
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

export const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Seo title={contactSeo.title} description={contactSeo.description} path={contactSeo.path} jsonLd={contactJsonLd} />

            <section className="relative isolate overflow-hidden">
                <div style={gridStyle} className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]"></div>
                <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-alpha/25 blur-[100px]"></div>

                <div className="container pb-16 pt-40">
                    <motion.p
                        variants={fadeIn("up", 0.1)} initial="hidden" animate="show"
                        className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                    >
                        <span className="h-px w-8 bg-alpha"></span>
                        Contact
                    </motion.p>

                    <motion.h1
                        variants={fadeIn("up", 0.2)} initial="hidden" animate="show"
                        className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Got a project in{" "}
                        <span className="bg-[linear-gradient(120deg,var(--color-white)_0%,#d4567a_50%,var(--color-white)_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                            mind?
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeIn("up", 0.3)} initial="hidden" animate="show"
                        className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg lg:leading-8"
                    >
                        I&apos;m Mehdi Forkani, a freelance web &amp; mobile app developer based in Casablanca, Morocco, working with clients
                        worldwide. Tell me what you&apos;re building, and let&apos;s see how I can help.
                    </motion.p>

                    <motion.a
                        href="mailto:forkanimahdi@gmail.com"
                        variants={fadeIn("up", 0.4)} initial="hidden" animate="show"
                        className="group mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-white/65 lg:text-lg"
                    >
                        <GoMail className="text-alpha" />
                        Prefer email?
                        <span className="font-semibold text-white underline decoration-alpha decoration-2 underline-offset-4 transition-colors duration-300 group-hover:text-alpha">
                            forkanimahdi@gmail.com
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

                    <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {contactSteps.map((step, idx) => (
                            <motion.li
                                key={step.title}
                                variants={fadeIn("up", 0.1 * idx)} initial="hidden" whileInView="show" viewport={{ once: true }}
                                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-alpha/40 lg:p-7"
                            >
                                <span className="font-mono text-sm text-alpha">0{idx + 1}</span>
                                <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-white/50">{step.text}</p>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </section>

            <Footer />
        </>
    );
};
