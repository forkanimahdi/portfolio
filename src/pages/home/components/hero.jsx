import { GoArrowRight } from "react-icons/go";
import heroImage from "../../../assets/images/t.webp";
import heroImageMobile from "../../../assets/images/heroMobile.webp";

const scrollToSection = (e, id) => {
    const section = document.getElementById(id);
    if (!section) return;
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
};

// CSS-only entrance: it runs on the prerendered HTML before React loads.
const rise = "motion-safe:animate-rise";

export const Hero = () => {
    return (
        <section id="home" className="relative isolate flex h-svh min-h-[680px] items-center overflow-hidden lg:h-screen">
            <div className="absolute inset-0 -z-10 motion-safe:animate-hero-zoom">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={heroImage} width="2400" height="1352" />
                    <img
                        className="h-full w-full object-cover opacity-40 lg:object-right lg:opacity-60 lg:saturate-[0.8] lg:light:opacity-40"
                        src={heroImageMobile}
                        width="901"
                        height="1600"
                        alt=""
                        fetchpriority="high"
                    />
                </picture>
            </div>

            <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black via-black/75 to-black/10 lg:block"></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/60 to-black lg:hidden"></div>
            <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent lg:block"></div>
            <div className="absolute -left-40 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-alpha/20 blur-[120px]"></div>

            <div className="container pt-20">
                <div className={`${rise} [animation-delay:100ms] inline-flex items-center gap-2.5 rounded-lg border border-alpha/40 bg-alpha/10 px-3.5 py-2 text-xs text-white/80 backdrop-blur-md`}>
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-alpha opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-alpha"></span>
                    </span>
                    Available for new projects
                </div>

                <p className={`${rise} [animation-delay:300ms] mt-8 font-display text-xl font-medium tracking-tight text-white/55 lg:text-3xl`}>
                    The future? They just see it coming.
                </p>

                <p className={`${rise} [animation-delay:500ms] mt-2 font-display text-[4.25rem] font-bold leading-[0.95] tracking-tight text-white sm:text-8xl lg:text-[8.5rem]`}>
                    I{" "}
                    <span className="bg-[linear-gradient(120deg,var(--color-white)_0%,#d4567a_50%,var(--color-white)_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                        code
                    </span>{" "}
                    it.
                </p>

                <div className={`${rise} [animation-delay:700ms] mt-8 max-w-xl`}>
                    <h1 className="font-display text-lg font-semibold leading-snug tracking-tight text-white lg:text-2xl">
                        Mehdi Forkani, freelance mobile &amp; web app developer in Casablanca, Morocco.
                    </h1>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-white/60 lg:text-lg">
                        I design, build and ship web platforms and mobile apps, with the backends and dashboards behind them, for startups, businesses and organizations across Morocco.
                    </p>
                </div>

                <div className={`${rise} [animation-delay:900ms] mt-10 flex flex-wrap items-center gap-3`}>
                    <a
                        href="#projects"
                        onClick={(e) => scrollToSection(e, "projects")}
                        className="group flex h-12 items-center gap-2 rounded-lg bg-alpha px-6 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
                    >
                        Want to bet?
                        <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "contact")}
                        className="flex h-12 items-center rounded-lg border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-white/40"
                    >
                        Let&apos;s talk
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
                <button
                    onClick={(e) => scrollToSection(e, "about")}
                    aria-label="Scroll to about"
                    className={`${rise} [animation-delay:1200ms] flex flex-col items-center gap-3`}
                >
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/60">Scroll</span>
                    <span className="relative h-12 w-px overflow-hidden bg-white/10">
                        <span className="absolute inset-x-0 top-0 h-1/2 bg-white/60 animate-scroll-hint"></span>
                    </span>
                </button>
            </div>
        </section>
    );
};
