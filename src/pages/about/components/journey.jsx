import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import { journey } from "../../../data/about";

export const Journey = () => {
    return (
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
    );
};
