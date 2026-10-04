import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { projects } from "../../../data/projects";
import { projectCover } from "../../../data/covers";
import { useOpenProject } from "../../../hooks/useOpenProject";
import { useServicePage } from "../../../hooks/useServicePage";
import { eyebrow, sectionTitle } from "./headings";

const bySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

export const Proof = () => {
    const { page, ui } = useServicePage();
    const openProject = useOpenProject();
    const proof = page.proof.filter((item) => bySlug[item.slug]);

    return (
        <section className="border-t border-white/[0.06] py-24 lg:py-32">
            <div className="container">
                {eyebrow("Portfolio")}
                {sectionTitle(ui.proofTitle)}
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg">{ui.proofIntro}</p>

                <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {proof.map((item) => {
                        const project = bySlug[item.slug];
                        const category = item.category ?? project.category;
                        return (
                            <article key={project.slug}>
                                <Link to={`/projects/${project.slug}`} onClick={(e) => openProject(project, e)} className="group block">
                                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-dark">
                                        <img
                                            className="aspect-[16/10] w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                            src={projectCover(project.slug) ?? project.image}
                                            alt={ui.screenshotAlt(project.name, category.toLowerCase(), project.client)}
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
                                                {category} · {project.technologies.join(", ")}
                                            </p>
                                        </div>
                                        <span className="shrink-0 pt-1 text-xs tracking-wider text-white/60">{project.year}</span>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-white/60">{item.text ?? project.summary}</p>
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
