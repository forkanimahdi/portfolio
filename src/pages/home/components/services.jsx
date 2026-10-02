import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GoBrowser, GoDatabase, GoDeviceMobile, GoPackage } from "react-icons/go";
import { fadeIn } from "../../../utils/motion";
import { useAppContext } from "../../../context/AppContext";

const services = [
    {
        icon: <GoDeviceMobile />,
        title: "Mobile apps",
        stack: "React Native",
        text: "Cross-platform apps for events, communities and guided tours, connected to their own backend.",
        examples: ["casatourat", "yes-mobile", "lionsgeek-mobile"],
    },
    {
        icon: <GoBrowser />,
        title: "Web platforms",
        stack: "Laravel · Inertia.js · React",
        text: "Platforms for organizations: e-learning, online admissions, award programs and bilingual NGO sites.",
        examples: ["yes-learning", "ecoles-belges-maroc", "israr", "tilila"],
    },
    {
        icon: <GoDatabase />,
        title: "Backends & dashboards",
        stack: "Laravel · REST APIs · MySQL",
        text: "Back offices and APIs that run the product: content management, roles and permissions, reservations, notifications.",
        examples: ["casatourat-dashboard", "yes-mobile-dashboard", "my-lionsgeek"],
    },
    {
        icon: <GoPackage />,
        title: "E-commerce & business sites",
        stack: "Laravel · Inertia.js",
        text: "Online stores and company websites, with an admin to manage products, orders and content.",
        examples: ["bigg-red", "tihad-azemmour-women", "glovantis-group"],
    },
];

export const Services = () => {
    const { projects } = useAppContext();
    const bySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

    return (
        <section id="services" className="border-b border-white/[0.06] bg-black py-24 lg:py-32">
            <div className="container">
                <motion.p
                    variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                >
                    <span className="h-px w-8 bg-alpha"></span>
                    Services
                </motion.p>

                <motion.h2
                    variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                >
                    What I can <span className="text-alpha">build</span> for you
                </motion.h2>

                <motion.p
                    variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg"
                >
                    As a freelancer, you work directly with me, from scoping to launch. Each service links to projects where I&apos;ve done that work.
                </motion.p>

                <div className="mt-14 grid gap-4 sm:grid-cols-2">
                    {services.map((service, idx) => (
                        <motion.article
                            key={service.title}
                            variants={fadeIn("up", 0.1 * (idx % 2))} initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-alpha/40 lg:p-8"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-alpha transition-colors duration-300 group-hover:border-alpha group-hover:bg-alpha group-hover:text-pure-white">
                                    {service.icon}
                                </span>
                                <span className="pt-2 text-right text-xs uppercase tracking-[0.15em] text-white/45">{service.stack}</span>
                            </div>
                            <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-white">{service.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-white/60 lg:text-base lg:leading-7">{service.text}</p>
                            <p className="mt-6 text-sm text-white/45">
                                Examples:{" "}
                                {service.examples
                                    .map((slug) => bySlug[slug])
                                    .filter(Boolean)
                                    .map((project, i, list) => (
                                        <span key={project.slug}>
                                            <Link
                                                to={`/projects/${project.slug}`}
                                                className="text-white/80 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-alpha hover:decoration-alpha"
                                            >
                                                {project.name}
                                            </Link>
                                            {i < list.length - 1 ? ", " : ""}
                                        </span>
                                    ))}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
