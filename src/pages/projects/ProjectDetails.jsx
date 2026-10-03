import { useEffect, useLayoutEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiFileText,
  FiGithub,
  FiDownload,
  FiLayers,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useAppContext } from "../../context/AppContext";
import { projectCover } from "../../data/covers";
import { projectTestimonial } from "../../data/testimonials";
import Seo from "../../utils/Seo";
import { projectSeo } from "../../seo/pages";
import { isHydrated } from "../../utils/hydration";
import { Footer } from "../../layouts/Footer";
import { Error } from "../error/Error";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const cardClass = "rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 lg:p-8";
const labelClass = "text-xs font-semibold uppercase tracking-[0.2em] text-white/60";

const linkLabel = (link) => {
  const host = new URL(link).hostname.replace(/^www\./, "");
  if (host === "play.google.com") return "View on Google Play";
  if (host === "apps.apple.com") return "View on the App Store";
  return `Visit ${host}`;
};

const CardTitle = ({ icon, children }) => (
  <h2 className="flex items-center gap-3 font-display text-xl font-bold tracking-tight text-white lg:text-2xl">
    <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-alpha text-base text-pure-white">
      {icon}
    </span>
    {children}
  </h2>
);

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

  const testimonial = projectTestimonial(project.slug);

  const details = [
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Location", value: project.location },
    { label: "Delivered", value: project.team ? "With the LionsGeek PRO team" : null },
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

        <header ref={contentRef} className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              <span className="h-px w-8 bg-alpha"></span>
              Case study · {project.category}
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 lg:text-xl">{project.summary}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
            >
              {isStoreLink ? <FiDownload /> : <FiExternalLink />}
              {linkLabel(project.link)}
            </a>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.04]"
              >
                <FiGithub />
                Source on GitHub
              </a>
            )}
          </div>
        </header>

        <div ref={imageWrapRef} className="relative mt-12 overflow-hidden rounded-2xl border border-white/[0.06] bg-dark will-change-transform">
          <img
            src={projectCover(project.slug) || project.image}
            alt={`Screenshot of ${project.name}, ${project.category.toLowerCase()} for ${project.client}`}
            width="1280"
            height="720"
            fetchpriority="high"
            className="aspect-video w-full select-none object-cover"
          />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <section className={`${cardClass} lg:col-span-2`}>
            <CardTitle icon={<FiFileText />}>Overview</CardTitle>
            <p className="mt-5 text-base leading-relaxed text-white/75 lg:text-lg">{project.description}</p>
            {project.contribution && <p className="mt-4 leading-relaxed text-white/75">{project.contribution}</p>}
            {project.team && <p className="mt-4 text-sm leading-relaxed text-white/60">{project.team}</p>}
          </section>

          <aside className={cardClass} aria-label="Project details">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-1">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className={labelClass}>{detail.label}</dt>
                  <dd className="mt-1 text-white/90">{detail.value}</dd>
                </div>
              ))}
            </dl>
            <h2 className={`${labelClass} mt-6 border-t border-white/[0.08] pt-6`}>Stack</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-full border border-alpha/40 bg-alpha/15 px-3 py-1 text-sm tracking-wide text-white/90">
                  {tech}
                </li>
              ))}
            </ul>
          </aside>

          <section className={`${cardClass} lg:col-span-2`}>
            <CardTitle icon={<FiTarget />}>The challenge</CardTitle>
            <p className="mt-5 text-base leading-relaxed text-white/75 lg:text-lg">{project.challenge}</p>
          </section>

          <section className={cardClass}>
            <CardTitle icon={<FiUsers />}>Who it&apos;s for</CardTitle>
            <p className="mt-5 leading-relaxed text-white/75">{project.audience}</p>
          </section>
        </div>

        <section className="mt-16">
          <CardTitle icon={<FiLayers />}>{project.team ? "What we built" : "What I built"}</CardTitle>
          <ul className={`mt-6 grid gap-4 sm:grid-cols-2 ${project.features.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {project.features.map((feature, i) => (
              <li key={feature.title} className={`${cardClass} flex flex-col`}>
                <span className="text-sm font-semibold tracking-[0.2em] text-white/60">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{feature.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {testimonial && (
          <figure className="relative isolate mt-16 overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 lg:p-12">
            <div className="pointer-events-none absolute -bottom-32 -right-32 -z-10 h-72 w-72 rounded-full bg-alpha/20 blur-[90px]"></div>
            <RiDoubleQuotesL aria-hidden="true" className="text-4xl text-alpha" />
            <blockquote className="mt-5 max-w-4xl text-lg leading-relaxed text-white/90 lg:text-2xl lg:leading-relaxed">
              {testimonial.excerpt || testimonial.quote.split("\n\n")[0]}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-white/[0.06] pt-6">
              {testimonial.image && (
                <img src={testimonial.image} alt="" width="48" height="48" loading="lazy" className="h-12 w-12 rounded-full border border-alpha object-cover" />
              )}
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/60">{testimonial.role}</p>
              </div>
            </figcaption>
          </figure>
        )}

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
                    <span className="text-xs uppercase tracking-wider text-white/60">{item.category} · {item.year}</span>
                    <span className="mt-2 font-display text-lg font-bold text-white">{item.name}</span>
                    <span className="mt-2 text-sm leading-6 text-white/65">{item.summary}</span>
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
            <p className="mt-2 text-white/65">Tell me what you&apos;re building. A few lines are enough to start.</p>
          </div>
          <Link
            to={`/contact?project=${project.slug}`}
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
              <p className="text-xs uppercase tracking-wider text-white/60">Previous</p>
              <p className="truncate text-white">{prev.name}</p>
            </div>
          </Link>

          <Link
            to={`/projects/${next.slug}`}
            className="group flex flex-row-reverse items-center gap-x-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-right transition-colors duration-300 hover:border-alpha/40 hover:bg-white/[0.05]"
          >
            <FiArrowRight className="shrink-0 text-xl text-white/60 transition-colors group-hover:text-white" />
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-wider text-white/60">Next</p>
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
