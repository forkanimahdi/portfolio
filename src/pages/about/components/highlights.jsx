import { motion } from "framer-motion";
import { GoBriefcase, GoLocation, GoMortarBoard, GoStack } from "react-icons/go";
import { fadeIn } from "../../../utils/motion";

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
        title: "Casablanca & remote",
        text: "Based in Casablanca, Morocco, and available for remote freelance projects with clients outside Morocco.",
    },
];

export const Highlights = () => {
    return (
        <section className="pb-24 lg:pb-32">
            <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {highlights.map((highlight, idx) => (
                    <motion.div
                        key={highlight.title}
                        variants={fadeIn("up", 0.1 * idx)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-alpha/40 lg:p-7"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-alpha transition-colors duration-300 group-hover:border-alpha group-hover:bg-alpha group-hover:text-pure-white">
                            {highlight.icon}
                        </span>
                        <h2 className="mt-8 font-display text-lg font-bold tracking-tight text-white">{highlight.title}</h2>
                        <p className="mt-3 text-sm leading-6 text-white/50">{highlight.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
