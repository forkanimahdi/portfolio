import React from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import awardPhoto from "../../../assets/images/achievments/xr4heritage.jpg";

export const Achievements = () => {
    return (
        <section
            id="achievements"
            className="relative overflow-hidden pt-[15vh] pb-20 px-5 lg:px-24"
        >
            {/* Atmosphere — warm stage light, not flat black */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 55% at 75% 40%, rgba(232, 145, 42, 0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 15% 80%, rgba(255,255,255,0.04) 0%, transparent 50%)",
                }}
            />

            <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Copy column */}
                <div className="lg:col-span-5 flex flex-col gap-y-6 order-2 lg:order-1">
                    <motion.p
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="uppercase tracking-[0.35em] text-[#e8912a] text-xs lg:text-sm poppin"
                    >
                        Brussels · KBR · 2026
                    </motion.p>

                    <motion.h2
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="uppercase selection:bg-white selection:text-black text-white boldPoppin leading-[0.95] text-4xl lg:text-6xl"
                    >
                        Coup de
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0b15a] via-white to-white">
                            Cœur
                        </span>
                        <br />
                        <span className="text-white/40 text-2xl lg:text-4xl tracking-wide">
                            du Jury
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-white/85 poppin text-lg leading-relaxed lg:max-w-md selection:bg-white selection:text-black"
                    >
                        I won it. On stage at the Royal Library of Belgium, with the
                        LionsGeek team, for{" "}
                        <span className="text-white font-medium">Ada Lovelace</span> —
                        an XR &amp; AI tribute that gave the first programmer her voice
                        back, at [IN]VISIBLE Festival through XR4Heritage.
                    </motion.p>

                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-x-6 gap-y-2 text-[#bdbdbd] poppin text-sm"
                    >
                        <span>Héroïnes de la Science</span>
                        <span className="text-white/20">·</span>
                        <span>Concours AVATARS</span>
                        <span className="text-white/20">·</span>
                        <span>XR4Heritage</span>
                    </motion.div>
                </div>

                {/* Image column — dominant visual anchor */}
                <motion.div
                    variants={fadeIn("up", 0.25)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="lg:col-span-7 order-1 lg:order-2 relative"
                >
                    <motion.div
                        initial={{ scale: 1.06, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-sm"
                    >
                        <img
                            src={awardPhoto}
                            alt="LionsGeek team receiving the Coup de Cœur du Jury award at [IN]VISIBLE Festival 2026, Brussels"
                            className="w-full h-auto object-cover select-none"
                            loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-4 text-[#bdbdbd] poppin text-sm lg:text-base italic"
                    >
                        That certificate? Ours. Jury&apos;s favorite — LionsGeek × Ada Lovelace.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};
