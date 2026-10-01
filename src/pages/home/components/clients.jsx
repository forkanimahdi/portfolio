import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { fadeIn } from "../../../utils/motion";
import { clients } from "../../../data/clients";

export const Clients = () => {
    return (
        <section id="clients" className="bg-black py-24 lg:py-32">
            <div className="container">
                <motion.p
                    variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                >
                    <span className="h-px w-8 bg-alpha"></span>
                    Clients
                </motion.p>

                <motion.h2
                    variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                >
                    Trusted <span className="text-alpha">by</span>
                </motion.h2>

                <motion.p
                    variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg"
                >
                    Brands and organizations that trusted me to bring their ideas to life.
                </motion.p>

                <div className="mt-14 grid grid-cols-2 border-l border-t border-white/[0.06] sm:grid-cols-4">
                    {clients.map((client, idx) => {
                        const Card = client.url ? motion.a : motion.div;

                        return (
                            <Card
                                key={client.name}
                                variants={fadeIn("up", 0.05 * (idx % 4))} initial="hidden" whileInView="show" viewport={{ once: true }}
                                {...(client.url && { href: client.url, target: "_blank", rel: "noreferrer" })}
                                title={client.name}
                                className="group relative flex h-36 select-none items-center justify-center border-b border-r border-white/[0.06] p-8 transition-colors duration-300 hover:bg-white/[0.02] lg:h-44"
                            >
                                <img
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    loading="lazy"
                                    className={`h-16 w-full max-w-[8rem] object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 lg:h-20 ${client.size || ""} ${client.preserveColor ? "grayscale group-hover:grayscale-0" : "brightness-0 invert light:invert-0"}`}
                                />
                                {client.url && (
                                    <GoArrowUpRight className="absolute right-4 top-4 text-transparent transition-colors duration-300 group-hover:text-alpha" />
                                )}
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
