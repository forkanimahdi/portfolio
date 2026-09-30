import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import xr4heritage from "../../../assets/images/achievments/xr4heritage.png";

const achievements = [
    {
        image: xr4heritage,
        alt: "LionsGeek team from Morocco receiving the Coup de Cœur du Jury award at [IN]VISIBLE Festival 2026, Brussels, Belgium",
        place: "Royal Library of Belgium · KBR",
        year: "2026",
        badge: "Jury favorite",
        title: "Coup de",
        highlight: "Cœur",
        description: (
            <>
                Representing <span className="font-medium text-white">Morocco</span> in{" "}
                <span className="font-medium text-white">Belgium</span>, I won it on stage with the LionsGeek team for{" "}
                <span className="text-white">Ada Lovelace</span>, an XR &amp; AI avatar that brought the first
                programmer&apos;s voice back to life at [IN]VISIBLE Festival through XR4Heritage.
            </>
        ),
        details: [
            { label: "Award", value: "Coup de Cœur du Jury" },
            { label: "Program", value: "Héroïnes de la Science" },
            { label: "Venue", value: "KBR · Brussels" },
            { label: "Project", value: "Ada Lovelace · Concours AVATARS" },
        ],
    },
];

export const Achievements = () => {
    return (
        <section id="achievements" className="relative isolate overflow-hidden bg-dark py-24 lg:py-32">
            <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-alpha/20 blur-[100px]"></div>

            <div className="container">
                <motion.p
                    variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                >
                    <span className="h-px w-8 bg-alpha"></span>
                    Recognition
                </motion.p>

                <motion.h2
                    variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                >
                    Achievements<span className="text-alpha">.</span>
                </motion.h2>

                <motion.p
                    variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg"
                >
                    Awards and recognition earned along the way, on stage and beyond.
                </motion.p>

                <div className="mt-14 flex flex-col gap-24">
                    {achievements.map((achievement, idx) => (
                        <div key={idx} className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                            <motion.figure
                                variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                                className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
                            >
                                <img
                                    src={achievement.image}
                                    alt={achievement.alt}
                                    className="aspect-[4/3] w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                                    loading="lazy"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pure-black/75 via-pure-black/10 to-transparent"></div>
                                <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                                    <span className="text-sm text-pure-white/90 lg:text-base">{achievement.place}</span>
                                    <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-pure-white/80">{achievement.year}</span>
                                </figcaption>
                            </motion.figure>

                            <motion.div
                                variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                                className="flex flex-col gap-6 lg:col-span-5"
                            >
                                <span className="w-fit rounded-full border border-alpha/50 bg-alpha/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                                    {achievement.badge}
                                </span>

                                <h3 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl">
                                    {achievement.title} <span className="text-alpha">{achievement.highlight}</span>
                                </h3>

                                <p className="text-base leading-8 text-white/65 lg:text-lg lg:leading-9">{achievement.description}</p>

                                <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                                    {achievement.details.map((detail) => (
                                        <div key={detail.label} className="group relative isolate flex items-center justify-between gap-6 py-4 text-sm">
                                            <span className="absolute inset-y-0 -inset-x-4 -z-10 origin-center scale-y-0 bg-alpha transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"></span>
                                            <p className="uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-pure-white/70">{detail.label}</p>
                                            <p className="text-right text-white/90 transition-colors duration-300 group-hover:text-pure-white">{detail.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
