import { motion } from "framer-motion";
import { GoChevronDown } from "react-icons/go";
import { fadeIn } from "../../../utils/motion";
import { faqs } from "../../../data/about";

export const Faq = () => {
    return (
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
                        Thinking about working together on a web or mobile app? Here is what people usually want to know.
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
    );
};
