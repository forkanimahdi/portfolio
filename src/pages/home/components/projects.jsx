import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { fadeIn } from "../../../utils/motion";
import { useAppContext } from "../../../context/AppContext";
import { useOpenProject } from "../../../hooks/useOpenProject";
import { projectCover } from "../../../data/covers";

export const Projects = () => {
    const { projects } = useAppContext();
    const openProject = useOpenProject();

    const featuredSlugs = ["lionsgeek", "casatourat", "tihad-azemmour-women", "ecoles-belges-maroc"];
    const featured = featuredSlugs.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);

    return (
        <section id="projects" className="bg-black py-24 lg:py-32">
            <div className="container">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <motion.p
                            variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                        >
                            <span className="h-px w-8 bg-alpha"></span>
                            Selected work
                        </motion.p>

                        <motion.h2
                            variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                        >
                            Featured <span className="text-alpha">projects</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="mt-5 text-base leading-relaxed text-white/60 lg:text-lg"
                        >
                            Together with my clients, we bring innovative visions to reality. Each project page explains what was built and what my role was.
                        </motion.p>
                    </div>

                    <Link to="/projects" className="group flex items-center gap-2 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white">
                        All {projects.length} projects
                        <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
                    {featured.map((project, idx) => (
                        <motion.article
                            key={project.slug}
                            variants={fadeIn("up", 0.1 * (idx % 2))} initial="hidden" whileInView="show" viewport={{ once: true }}
                        >
                            <Link to={`/projects/${project.slug}`} onClick={(e) => openProject(project, e)} className="group block">
                                <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-dark">
                                    <img
                                        className="aspect-[16/10] w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                        src={projectCover(project.slug) ?? project.image}
                                        alt={`Screenshot of ${project.name}, ${project.category.toLowerCase()} for ${project.client}`}
                                        width="1280"
                                        height="720"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pure-black/50 via-transparent to-transparent"></div>
                                    <span className="absolute right-4 top-4 flex h-10 w-10 -translate-y-1 items-center justify-center rounded-full bg-alpha text-lg text-pure-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
                                    <span className="shrink-0 pt-1 text-xs tracking-wider text-white/60">{project.year}</span>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
