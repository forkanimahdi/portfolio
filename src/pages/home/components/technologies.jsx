import { motion } from "framer-motion";
import { FaGitAlt, FaLaravel, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpo, SiInertia } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { fadeIn } from "../../../utils/motion";

const techno = [
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiExpo />, name: "React Native" },
    { icon: <SiInertia />, name: "Inertia" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <RiTailwindCssFill />, name: "Tailwind" },
    { icon: <FaGitAlt />, name: "Git" },
];

export const Technologies = () => {
    return (
        <section id="technologies" className="bg-dark py-24 lg:py-32">
            <div className="container">
                <motion.p
                    variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                >
                    <span className="h-px w-8 bg-alpha"></span>
                    Stack
                </motion.p>

                <motion.h2
                    variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                >
                    Tools I <span className="text-alpha">build</span> with
                </motion.h2>

                <motion.p
                    variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg"
                >
                    The stack that powers every project, and I keep learning and growing every day.
                </motion.p>

                <div className="mt-14 grid grid-cols-4 border-l border-t border-white/[0.06] sm:grid-cols-7">
                    {techno.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.05 * idx)} initial="hidden" whileInView="show" viewport={{ once: true }}
                            title={tech.name}
                            className="group flex aspect-square items-center justify-center border-b border-r border-white/[0.06] transition-colors duration-300 hover:bg-white/[0.02]"
                        >
                            <span className="text-3xl text-white/50 transition-colors duration-300 group-hover:text-alpha lg:text-4xl">{tech.icon}</span>
                            <span className="sr-only">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
