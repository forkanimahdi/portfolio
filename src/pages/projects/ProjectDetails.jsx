import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
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
  const next =
    index >= 0 && index < projects.length - 1 ? projects[index + 1] : projects[0];

  const isMobileApp = project?.technologies?.includes("React Native");

  const containerRef = useRef(null);
  const imageWrapRef = useRef(null);
  const contentRef = useRef(null);

  // Redirect unknown slugs back to the projects list.
  useEffect(() => {
    if (!project) navigate("/projects", { replace: true });
  }, [project, navigate]);

  useLayoutEffect(() => {
    if (!project) return;
    window.scrollTo(0, 0);

    const wrap = imageWrapRef.current;
    const contentEls = contentRef.current
      ? Array.from(contentRef.current.children)
      : [];

    const ctx = gsap.context(() => {
      gsap.set(contentEls, { opacity: 0, y: 26 });
      const tl = gsap.timeline();

      const hasFlip =
        transition && transition.slug === slug && wrap && transition.rect;

      if (hasFlip) {
        const src = transition.rect;
        const final = wrap.getBoundingClientRect();
        const dx = src.left - final.left;
        const dy = src.top - final.top;
        const sx = final.width ? src.width / final.width : 1;
        const sy = final.height ? src.height / final.height : 1;

        gsap.set(wrap, {
          transformOrigin: "top left",
          x: dx,
          y: dy,
          scaleX: sx,
          scaleY: sy,
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
        tl.to(
          contentEls,
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power2.out" },
          "-=0.55"
        );
      } else {
        if (wrap) {
          gsap.from(wrap, {
            opacity: 0,
            y: 36,
            duration: 0.85,
            ease: "power3.out",
          });
        }
        tl.to(contentEls, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
          delay: 0.1,
        });
      }
    }, containerRef);

    const clear = setTimeout(() => setTransition(null), 1100);
    return () => {
      clearTimeout(clear);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_ORIGIN}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Projects",
              item: `${SITE_ORIGIN}/projects`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: project.name,
              item: url,
            },
          ],
        },
      ],
    };
  }, [project]);

  if (!project) return null;

  const metaRows = [
    { label: "Role", value: project.role },
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
  ].filter((r) => r.value);

  return (
    <div ref={containerRef} className="bg-[#010101] text-white min-h-screen">
      <Seo
        title={`${project.name} — ${project.category} | Mehdi Forkani`}
        description={`${project.name}: ${project.description}`}
        path={`/projects/${project.slug}`}
        jsonLd={jsonLd}
      />

      <div className="max-w-6xl mx-auto px-5 lg:px-8 pt-[16vh] pb-16">
        {/* Back */}
        <Link
          to="/projects"
          className="group inline-flex items-center gap-x-2 text-white/60 hover:text-white poppin text-sm uppercase tracking-widest transition-colors"
        >
          <span className="premium-glass w-9 h-9 rounded-full grid place-items-center group-hover:bg-white group-hover:text-black transition-colors">
            <FiArrowLeft />
          </span>
          All projects
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mt-10">
          {/* Content column */}
          <div ref={contentRef} className="lg:col-span-6 order-2 lg:order-1">
            <p className="eyebrow">
              {project.category} · {project.year}
            </p>

            <h1 className="uppercase boldPoppin text-white text-4xl lg:text-6xl leading-[1.05] mt-3">
              {project.name}
            </h1>

            <p className="text-white/80 poppin text-base lg:text-lg leading-relaxed mt-6">
              {project.description}
            </p>

            {/* Meta grid */}
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mt-8 border-t border-white/10 pt-8">
              {metaRows.map((row) => (
                <div key={row.label}>
                  <dt className="text-white/40 uppercase tracking-wider text-xs poppin">
                    {row.label}
                  </dt>
                  <dd className="text-white/90 poppin mt-1">{row.value}</dd>
                </div>
              ))}
            </dl>

            {/* Stack */}
            <div className="mt-8">
              <p className="text-white/40 uppercase tracking-wider text-xs poppin">
                Stack
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-sm tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {project.highlights?.length > 0 && (
              <div className="mt-8">
                <h2 className="uppercase boldPoppin text-white text-lg">
                  What I built
                </h2>
                <ul className="mt-4 flex flex-col gap-y-3">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-x-3 text-white/80 poppin">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#e8912a] shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group flex-1 py-3 px-6 text-center bg-white text-black rounded-xl hover:bg-gray-200 transition font-semibold inline-flex items-center justify-center gap-x-2"
              >
                {isMobileApp ? <FiDownload /> : <FiExternalLink />}
                {isMobileApp ? "Download App" : "Live Website"}
              </a>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-6 text-center border border-white/20 text-white rounded-xl hover:bg-white hover:text-black transition font-semibold inline-flex items-center justify-center gap-x-2"
                >
                  <FiGithub />
                  GitHub Repo
                </a>
              )}
            </div>
          </div>

          {/* Image column (slides to top-right) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="lg:sticky lg:top-[16vh]">
              <div
                ref={imageWrapRef}
                className="relative rounded-2xl overflow-hidden premium-glass border border-white/10 will-change-transform"
              >
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.technologies.join(", ")} ${project.category} by Mehdi Forkani`}
                  className="w-full aspect-video object-cover select-none"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-x-2 text-white/70 hover:text-white poppin text-sm transition-colors"
              >
                {isMobileApp ? "Open on the store" : "Open the live site"}
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="grid sm:grid-cols-2 gap-4 mt-20 border-t border-white/10 pt-10">
          <Link
            to={`/projects/${prev.slug}`}
            className="group premium-glass rounded-2xl p-5 flex items-center gap-x-4 hover:border-white/40 border border-transparent transition-colors"
          >
            <FiArrowLeft className="text-xl text-white/60 group-hover:text-white transition-colors shrink-0" />
            <div className="min-w-0">
              <p className="text-white/40 uppercase tracking-wider text-xs poppin">
                Previous
              </p>
              <p className="text-white poppin truncate">{prev.name}</p>
            </div>
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="group premium-glass rounded-2xl p-5 flex items-center justify-end gap-x-4 text-right hover:border-white/40 border border-transparent transition-colors"
          >
            <div className="min-w-0">
              <p className="text-white/40 uppercase tracking-wider text-xs poppin">
                Next
              </p>
              <p className="text-white poppin truncate">{next.name}</p>
            </div>
            <FiArrowRight className="text-xl text-white/60 group-hover:text-white transition-colors shrink-0" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
