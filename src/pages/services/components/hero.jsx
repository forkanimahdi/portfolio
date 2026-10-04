import { Link } from "react-router-dom";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { useServicePage } from "../../../hooks/useServicePage";
import { eyebrow } from "./headings";

const gridStyle = {
    backgroundImage:
        "linear-gradient(to right, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
};

const rise = "motion-safe:animate-rise";

export const Hero = () => {
    const { page, ui } = useServicePage();
    const otherLang = page.lang === "en" ? "fr" : "en";

    return (
        <section className="relative isolate overflow-hidden">
            <div style={gridStyle} className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]"></div>
            <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-alpha/25 blur-[100px]"></div>

            <div className="container pb-20 pt-40">
                <div className={`${rise} [animation-delay:100ms]`}>{eyebrow(ui.eyebrow)}</div>

                <h1 className={`${rise} [animation-delay:200ms] mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl`}>
                    {page.title}{" "}
                    <span className="bg-[linear-gradient(120deg,var(--color-white)_0%,#d4567a_50%,var(--color-white)_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                        {page.highlight}
                    </span>
                </h1>

                <p className={`${rise} [animation-delay:300ms] mt-8 max-w-3xl text-base leading-relaxed text-white/65 lg:text-lg lg:leading-8`}>{page.intro}</p>

                <div className={`${rise} [animation-delay:400ms] mt-10 flex flex-wrap items-center gap-3`}>
                    <Link
                        to="/contact"
                        className="group flex items-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
                    >
                        {ui.cta}
                        <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                        to="/projects"
                        className="group flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-alpha"
                    >
                        {ui.secondary}
                        <GoArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                        to={page.alternatePath}
                        hrefLang={otherLang}
                        lang={otherLang}
                        className="px-3 py-3 text-sm text-white/60 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-alpha hover:decoration-alpha"
                    >
                        {ui.otherLanguage}
                    </Link>
                </div>
            </div>
        </section>
    );
};
