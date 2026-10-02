import { useEffect, useLayoutEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
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
import Seo from "../../utils/Seo";
import { projectSeo } from "../../seo/pages";
import { isHydrated } from "../../utils/hydration";
import { Footer } from "../../layouts/Footer";
import { Error } from "../error/Error";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const linkLabel = (link) => {
  const host = new URL(link).hostname.replace(/^www\./, "");
  if (host === "play.google.com") return "View on Google Play";
  if (host === "apps.apple.com") return "View on the App Store";
  return `Visit ${host}`;
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const { projects, transition, setTransition } = useAppContext();

  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : null;
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index >= 0 && index < projects.length - 1 ? projects[index + 1] : projects[0];
  const related = (project?.related || []).map((relatedSlug) => projects.find((p) => p.slug === relatedSlug)).filter(Boolean);
  const isStoreLink = project ? /play\.google\.com|apps\.apple\.com/.test(project.link) : false;

  const containerRef = useRef(null);
  const imageWrapRef = useRef(null);
  const contentRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (!project) return;
    // First page load: the prerendered page is already visible, so don't hide and re-animate it.
    if (!isHydrated()) return;
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

  if (!project) return <Error />;

  const details = [
    { label: "Role", value: project.role },
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
  ].filter((detail) => detail.value);

  return (
    <div ref={containerRef} className="relative isolate min-h-screen">
      <Seo {...projectSeo(project)} />

      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-alpha/25 blur-[100px]"></div>

      <main id="main" className="container pb-24 pt-32 lg:pt-36">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-x-3 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors duration-300 group-hover:border-alpha group-hover:bg-alpha group-hover:text-pure-white">
            <FiArrowLeft />
          </span>
          All projects
        </Link>

        <article className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div ref={contentRef} className="order-2 lg:order-1 lg:col-span-6">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              <span className="h-px w-8 bg-alpha"></span>
              {project.category} · {project.year}
            </p>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-white lg:text-6xl">
              {project.name}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/65 lg:text-lg">{project.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/[0.06] pt-8">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs uppercase tracking-[0.2em] text-white/40">{detail.label}</dt>
                  <dd className="mt-1 text-white/90">{detail.value}</dd>
                </div>
              ))}
            </dl>

            {project.audience && (
              <section className="mt-8">
                <h2 className="font-display text-xl font-bold tracking-tight text-white">Who it&apos;s for</h2>
                <p className="mt-3 leading-relaxed text-white/70">{project.audience}</p>
              </section>
            )}

            {(project.contribution || project.team) && (
              <section className="mt-8">
                <h2 className="font-display text-xl font-bold tracking-tight text-white">My role</h2>
                {project.contribution && <p className="mt-3 leading-relaxed text-white/70">{project.contribution}</p>}
                {project.team && <p className="mt-3 text-sm leading-relaxed text-white/50">{project.team}</p>}
              </section>
            )}

            {project.highlights?.length > 0 && (
              <section className="mt-8">
                <h2 className="font-display text-xl font-bold tracking-tight text-white">
                  {project.team ? "What we built" : "What I built"}
                </h2>
                <ul className="mt-4 flex flex-col gap-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-x-3 text-white/70">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-alpha"></span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-8">
              <h2 className="text-xs uppercase tracking-[0.2em] text-white/40">Stack</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="rounded-full border border-alpha/40 bg-alpha/15 px-3 py-1 text-sm tracking-wide text-white/90">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
              >
                {isStoreLink ? <FiDownload /> : <FiExternalLink />}
                {linkLabel(project.link)}
              </a>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.04]"
                >
                  <FiGithub />
                  Source on GitHub
                </a>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="lg:sticky lg:top-[16vh]">
              <div ref={imageWrapRef} className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-dark will-change-transform">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.name}, ${project.category.toLowerCase()} for ${project.client}`}
                  width="1280"
                  height="720"
                  fetchpriority="high"
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
                {linkLabel(project.link)}
                <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="mt-20 border-t border-white/[0.06] pt-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">Related projects</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/projects/${item.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors duration-300 hover:border-alpha/40 hover:bg-white/[0.05]"
                  >
                    <span className="text-xs uppercase tracking-wider text-white/40">{item.category} · {item.year}</span>
                    <span className="mt-2 font-display text-lg font-bold text-white">{item.name}</span>
                    <span className="mt-2 text-sm leading-6 text-white/55">{item.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:flex-row sm:items-center lg:p-10">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white lg:text-3xl">
              Planning a {project.platform === "mobile" ? "mobile app" : "web platform"} like this?
            </h2>
            <p className="mt-2 text-white/60">Tell me what you&apos;re building. A few lines are enough to start.</p>
          </div>
          <Link
            to="/contact"
            className="group flex shrink-0 items-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
          >
            Start a conversation
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </section>

        <nav aria-label="More projects" className="mt-20 grid gap-4 border-t border-white/[0.06] pt-10 sm:grid-cols-2">
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
        </nav>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
