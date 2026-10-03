import { Link } from "react-router-dom";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import me from "../../../assets/images/me.webp";

const gridStyle = {
    backgroundImage:
        "linear-gradient(to right, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-white) 4%, transparent) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 30%, transparent 100%)",
};

const rise = "motion-safe:animate-rise";

export const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <div style={gridStyle} className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]"></div>
            <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-alpha/25 blur-[100px]"></div>

            <div className="container grid gap-14 pb-20 pt-40 lg:grid-cols-12 lg:gap-16">
                <div className="flex flex-col justify-center lg:col-span-7">
                    <h1 className={`${rise} [animation-delay:100ms] flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60`}>
                        <span className="h-px w-8 bg-alpha"></span>
                        About Mehdi Forkani
                    </h1>

                    <p className={`${rise} [animation-delay:200ms] mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl`}>
                        From the first cohort to{" "}
                        <span className="bg-[linear-gradient(120deg,var(--color-white)_0%,#d4567a_50%,var(--color-white)_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                            Head Coach.
                        </span>
                    </p>

                    <p className={`${rise} [animation-delay:300ms] mt-8 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg lg:leading-8`}>
                        I&apos;m Mehdi Forkani, a freelance mobile &amp; web app developer based in Casablanca, Morocco. I learned to code in the
                        very first cohort of the LionsGeek Coding School, grew into its Head Coach, and today I build web platforms
                        and mobile apps for startups, businesses, NGOs and institutions.
                    </p>

                    <div className={`${rise} [animation-delay:400ms] mt-10 flex flex-wrap gap-3`}>
                        <Link
                            to="/contact"
                            className="group flex items-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
                        >
                            Let&apos;s talk
                            <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/projects"
                            className="group flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-alpha"
                        >
                            See my work
                            <GoArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </div>

                <div className={`${rise} [animation-delay:300ms] relative w-full max-w-md lg:col-span-5 lg:max-w-none`}>
                    <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                        <img
                            className="aspect-[4/5] w-full select-none object-cover object-top"
                            src={me}
                            width="1168"
                            height="880"
                            fetchpriority="high"
                            alt="Portrait of Mehdi Forkani, freelance mobile and web app developer in Casablanca"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
