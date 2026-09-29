import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiDownload,
} from "react-icons/fi";
import { useAppContext } from "../../context/AppContext";
import Seo, { SITE_ORIGIN } from "../../utils/Seo";
import { Footer } from "../../layouts/Footer";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { projects, transition, setTransition } = useAppContext();

  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : null;
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index >= 0 && index < projects.length - 1 ? projects[index + 1] : projects[0];

  const isMobileApp = project?.technologies?.includes("React Native");

  const containerRef = useRef(null);
  const imageWrapRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!project) navigate("/projects", { replace: true });
  }, [project, navigate]);

  useLayoutEffect(() => {
    if (!project) return;
    window.scrollTo(0, 0);

    const wrap = imageWrapRef.current;
    const contentEls = contentRef.current ? Array.from(contentRef.current.children) : [];

    const ctx = gsap.context(() => {
      gsap.set(contentEls, { opacity: 0, y: 26 });
      const tl = gsap.timeline();

      const hasFlip = transition && transition.slug === slug && wrap && transition.rect;

      if (hasFlip) {
        const src = transition.rect;
        const final = wrap.getBoundingClientRect();

        gsap.set(wrap, {
          transformOrigin: "top left",
          x: src.left - final.left,
          y: src.top - final.top,
          scaleX: final.width ? src.width / final.width : 1,
          scaleY: final.height ? src.height / final.height : 1,
          zIndex: 60,
        });
        tl.to(wrap, {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.9,
          ease: "power3.inOut",
          clearProps: "transform,zIndex",
        });
        tl.to(contentEls, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power2.out" }, "-=0.55");
      } else {
        if (wrap) {
          gsap.from(wrap, { opacity: 0, y: 36, duration: 0.85, ease: "power3.out" });
        }
        tl.to(contentEls, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power2.out", delay: 0.1 });
      }
    }, containerRef);

    const clear = setTimeout(() => setTransition(null), 1100);
    return () => {
      clearTimeout(clear);
      ctx.revert();
    };
  }, [slug, project]);

  const jsonLd = useMemo(() => {
    if (!project) return null;
    const url = `${SITE_ORIGIN}/projects/${project.slug}`;
    const image =
      typeof project.image === "string" && project.image.startsWith("/")
        ? `${SITE_ORIGIN}${project.image}`
        : `${SITE_ORIGIN}/og-image.jpg`;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CreativeWork",
          name: `${project.name} — ${project.category}`,
          headline: project.name,
          description: project.description,
          url,
          image,
          inLanguage: "en",
          dateCreated: project.year,
          keywords: [project.category, ...(project.technologies || [])].join(", "),
          creator: {
            "@type": "Person",
            name: "Mehdi Forkani",
            jobTitle: "Mobile & Web App Developer",
            url: `${SITE_ORIGIN}/`,
          },
          about: project.client,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
            { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_ORIGIN}/projects` },
            { "@type": "ListItem", position: 3, name: project.name, item: url },
          ],
        },
      ],
    };
  }, [project]);

  if (!project) return null;

  const details = [
    { label: "Role", value: project.role },
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
  ].filter((detail) => detail.value);

  return (
    <div ref={containerRef} className="relative isolate min-h-screen">
      <Seo
        title={`${project.name} — ${project.category} | Mehdi Forkani`}
        description={`${project.name}: ${project.description}`}
        path={`/projects/${project.slug}`}
        jsonLd={jsonLd}
      />

      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-alpha/25 blur-[100px]"></div>

      <div className="container pb-24 pt-32 lg:pt-36">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-x-3 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors duration-300 group-hover:border-alpha group-hover:bg-alpha group-hover:text-pure-white">
            <FiArrowLeft />
          </span>
          All projects
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div ref={contentRef} className="order-2 lg:order-1 lg:col-span-6">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              <span className="h-px w-8 bg-alpha"></span>
              {project.category} · {project.year}
            </p>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-white lg:text-6xl">
              {project.name}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/65 lg:text-lg">{project.description}</p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/[0.06] pt-8">
              {details.map((detail) => (
                <div key={detail.label}>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">{detail.label}</p>
                  <p className="mt-1 text-white/90">{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="rounded-full border border-alpha/40 bg-alpha/15 px-3 py-1 text-sm tracking-wide text-white/90">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.highlights?.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display text-xl font-bold tracking-tight text-white">What I built</h2>
                <ul className="mt-4 flex flex-col gap-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-x-3 text-white/70">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-alpha"></span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
              >
                {isMobileApp ? <FiDownload /> : <FiExternalLink />}
                {isMobileApp ? "Download App" : "Live Website"}
              </a>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.04]"
                >
                  <FiGithub />
                  GitHub Repo
                </a>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="lg:sticky lg:top-[16vh]">
              <div ref={imageWrapRef} className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-dark will-change-transform">
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.technologies.join(", ")} ${project.category} by Mehdi Forkani`}
                  className="aspect-video w-full select-none object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pure-black/40 via-transparent to-transparent"></div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
              >
                {isMobileApp ? "Open on the store" : "Open the live site"}
                <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-4 border-t border-white/[0.06] pt-10 sm:grid-cols-2">
          <Link
            to={`/projects/${prev.slug}`}
            className="group flex items-center gap-x-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors duration-300 hover:border-alpha/40 hover:bg-white/[0.05]"
          >
            <FiArrowLeft className="shrink-0 text-xl text-white/60 transition-colors group-hover:text-white" />
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-wider text-white/40">Previous</p>
              <p className="truncate text-white">{prev.name}</p>
            </div>
          </Link>

          <Link
            to={`/projects/${next.slug}`}
            className="group flex flex-row-reverse items-center gap-x-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-right transition-colors duration-300 hover:border-alpha/40 hover:bg-white/[0.05]"
          >
            <FiArrowRight className="shrink-0 text-xl text-white/60 transition-colors group-hover:text-white" />
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-wider text-white/40">Next</p>
              <p className="truncate text-white">{next.name}</p>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
