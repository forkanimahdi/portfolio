import { useEffect } from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { fadeIn } from "../../utils/motion";
import { useAppContext } from "../../context/AppContext";
import { useOpenProject } from "../../hooks/useOpenProject";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";

const gridStyle = {
    backgroundImage:
        "linear-gradient(to right, rgb(255 255 255 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.035) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
};

export const Projects = () => {
    const { projects } = useAppContext();
    const openProject = useOpenProject();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Seo
                title="Projects | Mehdi Forkani — Mobile & Web App Developer"
                description="Selected web and mobile app projects by Mehdi Forkani: Laravel, React, Inertia.js and React Native platforms, dashboards, and apps built for startups, NGOs, and organizations across Morocco and Africa."
                path="/projects"
            />

            <section className="relative isolate overflow-hidden">
                <div style={gridStyle} className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]"></div>
                <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-alpha/25 blur-[100px]"></div>

                <div className="container pb-24 pt-40 lg:pb-32">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-2xl">
                            <motion.p
                                variants={fadeIn("up", 0.1)} initial="hidden" animate="show"
                                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                            >
                                <span className="h-px w-8 bg-alpha"></span>
                                Portfolio
                            </motion.p>

                            <motion.h1
                                variants={fadeIn("up", 0.2)} initial="hidden" animate="show"
                                className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                            >
                                All <span className="text-alpha">projects</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeIn("up", 0.3)} initial="hidden" animate="show"
                                className="mt-5 text-base leading-relaxed text-white/60 lg:text-lg"
                            >
                                Together with my clients, we bring innovative visions to reality: web platforms, dashboards and mobile apps.
                            </motion.p>
                        </div>

                        <p className="text-sm text-white/40">{projects.length} projects</p>
                    </div>

                    <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.slug}
                                variants={fadeIn("up", 0.1 * (idx % 3))} initial="hidden" whileInView="show" viewport={{ once: true }}
                                onClick={(e) => openProject(project, e)}
                                className="group cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-dark">
                                    <img
                                        className="aspect-[16/10] w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                        src={project.image}
                                        alt={`${project.name} — ${project.technologies.join(", ")} project by Mehdi Forkani`}
                                        loading="lazy"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                    <span className="absolute right-4 top-4 flex h-10 w-10 -translate-y-1 items-center justify-center rounded-full bg-alpha text-lg text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <GoArrowUpRight />
                                    </span>
                                </div>

                                <div className="mt-5 flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-display text-xl font-bold tracking-tight text-white">{project.name}</h3>
                                        <p className="mt-1 text-sm text-white/50">
                                            {project.category} · {project.technologies.join(", ")}
                                        </p>
                                    </div>
                                    <span className="shrink-0 pt-1 text-xs tracking-wider text-white/40">{project.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};
