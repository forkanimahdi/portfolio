import React from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import awardPhoto from "../../../assets/images/achievments/xr4heritage.jpg";

export const Achievements = () => {
    return (
        <section
            id="achievements"
            className="relative overflow-hidden py-3 flex flex-col items-center px-5 lg:px-24"
        >
            {/* Soft stage glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 55% 45% at 70% 55%, rgba(232, 145, 42, 0.1) 0%, transparent 65%)",
                }}
            />

            <motion.p
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="eyebrow pt-[10vh] relative z-10"
            >
                Recognition
            </motion.p>

            <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="uppercase selection:bg-white selection:text-black text-white text-[2.5rem] boldPoppin relative z-10"
            >
                Achievements
            </motion.h1>

            <motion.p
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-[#bdbdbd] selection:bg-white text-center px-3 selection:text-black poppin lg:text-lg mt-2 relative z-10 max-w-xl"
            >
                Representing Morocco on the international stage in Belgium.
            </motion.p>

            {/* Award composition */}
            <div className="relative z-10 mt-14 lg:mt-16 w-full max-w-6xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 relative group"
                >
                    <div className="absolute -inset-px bg-gradient-to-br from-[#e8912a]/40 via-white/10 to-transparent opacity-60 pointer-events-none" />
                    <div className="relative overflow-hidden">
                        <motion.img
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            src={awardPhoto}
                            alt="LionsGeek team from Morocco receiving the Coup de Cœur du Jury award at [IN]VISIBLE Festival 2026, Brussels, Belgium"
                            className="w-full max-h-[420px] lg:max-h-[480px] object-cover object-center select-none"
                            loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                            <p className="poppin text-white/90 text-sm lg:text-base">
                                Royal Library of Belgium · KBR
                            </p>
                            <span className="poppin text-[#e8912a] text-xs tracking-[0.2em] uppercase shrink-0">
                                2026
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Story */}
                <div className="lg:col-span-5 flex flex-col gap-5 lg:pb-2">
                    <motion.div
                        variants={fadeIn("up", 0.25)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-[#e8912a]" />
                        <span className="uppercase tracking-[0.25em] text-[#e8912a] text-xs poppin">
                            Jury favorite
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="uppercase boldPoppin text-white leading-[1.05] text-3xl lg:text-5xl selection:bg-white selection:text-black"
                    >
                        Coup de
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0b15a] to-white">
                            Cœur
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeIn("up", 0.35)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-white/80 poppin text-base lg:text-lg leading-relaxed selection:bg-white selection:text-black"
                    >
                        Representing{" "}
                        <span className="text-white font-medium">Morocco</span> in{" "}
                        <span className="text-white font-medium">Belgium</span>, I won it
                        on stage with the LionsGeek team for{" "}
                        <span className="text-white">Ada Lovelace</span> — an XR &amp; AI
                        avatar that brought the first programmer&apos;s voice back to life
                        at [IN]VISIBLE Festival through XR4Heritage.
                    </motion.p>

                    <motion.ul
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mt-2 grid grid-cols-1 gap-3 border-t border-white/10 pt-5"
                    >
                        {[
                            { label: "From", value: "Morocco → Belgium" },
                            { label: "Award", value: "Coup de Cœur du Jury" },
                            { label: "Program", value: "Héroïnes de la Science" },
                            { label: "Venue", value: "KBR · Brussels" },
                            { label: "Project", value: "Ada Lovelace · Concours AVATARS" },
                        ].map((row) => (
                            <li
                                key={row.label}
                                className="flex justify-between gap-4 poppin text-sm"
                            >
                                <span className="text-white/40 uppercase tracking-wider">
                                    {row.label}
                                </span>
                                <span className="text-white/90 text-right">{row.value}</span>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>

            <div className="h-16 lg:h-24" />
        </section>
    );
};
