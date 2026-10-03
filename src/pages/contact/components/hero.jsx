import { GoArrowUpRight, GoMail } from "react-icons/go";

const gridStyle = {
    backgroundImage:
        "linear-gradient(to right, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
};

const headline = ["Got", "a", "project", "in"];

const rise = "motion-safe:animate-rise";
const reveal = "inline-block motion-safe:animate-reveal";
const draw = "origin-left motion-safe:animate-draw";

export const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <div style={gridStyle} className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]"></div>
            <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] animate-glow rounded-full bg-alpha/25 blur-[100px] will-change-transform motion-reduce:animate-none"></div>

            <div className="container pb-16 pt-40">
                <p className={`${rise} [animation-delay:100ms] flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60`}>
                    <span className={`${draw} [animation-delay:200ms] h-px w-8 bg-alpha`}></span>
                    Contact
                </p>

                <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {headline.map((word, idx) => (
                        <span key={word} className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                            <span className={reveal} style={{ animationDelay: `${150 + idx * 70}ms` }}>
                                {word}&nbsp;
                            </span>
                        </span>
                    ))}
                    <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                        <span
                            className={`${reveal} bg-[linear-gradient(120deg,var(--color-white)_0%,#d4567a_50%,var(--color-white)_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer`}
                            style={{ animationDelay: `${150 + headline.length * 70}ms` }}
                        >
                            mind?
                        </span>
                    </span>
                </h1>

                <p className={`${rise} [animation-delay:500ms] mt-8 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg lg:leading-8`}>
                    I&apos;m Mehdi Forkani, a freelance web &amp; mobile app developer based in Casablanca, Morocco, working with clients
                    across Morocco and worldwide. Tell me what you&apos;re building, and let&apos;s see how I can help.
                </p>

                <a
                    href="mailto:forkanimahdi@gmail.com"
                    className={`${rise} [animation-delay:600ms] group mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-white/65 lg:text-lg`}
                >
                    <GoMail className="text-alpha" />
                    Prefer email?
                    <span className="relative flex items-center gap-1.5 font-semibold text-white transition-colors duration-300 group-hover:text-alpha">
                        forkanimahdi@gmail.com
                        <GoArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        <span className={`${draw} [animation-delay:1100ms] absolute -bottom-1 left-0 h-0.5 w-full bg-alpha`}></span>
                    </span>
                </a>
            </div>
        </section>
    );
};
