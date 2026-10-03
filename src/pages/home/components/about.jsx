import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { fadeIn } from "../../../utils/motion";
import me from "../../../assets/images/me.webp";

const socials = [
    { icon: <FaLinkedinIn />, name: "LinkedIn", link: "https://www.linkedin.com/in/forkanimahdi/" },
    { icon: <FaGithub />, name: "GitHub", link: "https://github.com/forkanimahdi" },
    { icon: <SiGmail aria-hidden="true" />, name: "Email", link: "mailto:forkanimahdi@gmail.com" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/forkanimahdi" },
];

const facts = [
    { label: "Based in", value: "Casablanca, Morocco" },
    { label: "Works in", value: "Arabic, French, English" },
    { label: "Also", value: "Head Coach, LionsGeek Coding School" },
];

export const About = () => {
    return (
        <section id="about" className="bg-dark py-24 lg:py-32">
            <div className="container grid gap-y-10 lg:grid-cols-12 lg:gap-x-16">
                <div className="lg:col-span-12">
                    <motion.p
                        variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                    >
                        <span className="h-px w-8 bg-alpha"></span>
                        About
                    </motion.p>

                    <motion.h2
                        variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                    >
                        Mobile &amp; Web
                        <br />
                        <span className="text-alpha">App Developer.</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="relative max-w-md overflow-hidden rounded-2xl border border-white/[0.06] lg:col-span-5 lg:max-w-none"
                >
                    <img className="aspect-[4/5] w-full select-none object-cover object-top lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" loading="lazy" decoding="async" width="1168" height="880" src={me} alt="Portrait of Mehdi Forkani" />
                </motion.div>

                <div className="flex flex-col justify-between gap-10 lg:col-span-7">
                    <motion.div
                        variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="space-y-6 text-[15px] leading-7 text-white/65 lg:space-y-7 lg:text-[17px] lg:leading-[2.125rem]"
                    >
                        <p>
                            Hi, I&apos;m Mehdi, a freelance mobile &amp; web app developer based in Casablanca, Morocco. Most of my
                            work starts with a simple question: <span className="font-semibold italic text-white">&ldquo;Do you think we can…?&rdquo;</span>
                        </p>
                        <p>
                            I ship web platforms and mobile apps that are secure, well designed, and ready for real users, from
                            polished React and React Native front-ends to solid Laravel back-ends and admin dashboards. Startups,
                            NGOs, institutions, and leaders{" "}
                            <a
                                href="#clients"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="font-semibold text-alpha underline decoration-alpha/40 underline-offset-4 transition-colors duration-300 hover:decoration-alpha"
                            >
                                trusted me
                            </a>{" "}
                            to turn their ideas into products people rely on every day.
                        </p>
                        <p>
                            Coaching young developers taught me to explain every decision and keep things simple. I bring that to
                            every project: from the first draft to the final delivery, I stay involved at every step, so what you
                            get is clear, reliable, and built to scale.
                        </p>
                        <Link
                            to="/about"
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-alpha lg:text-base"
                        >
                            Read my story, from the first LionsGeek cohort to Head Coach
                            <GoArrowRight className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="divide-y divide-white/[0.06] border-y border-white/[0.06]"
                    >
                        {facts.map((fact) => (
                            <div key={fact.label} className="group relative isolate flex items-center justify-between gap-6 py-4 text-sm">
                                <span className="absolute inset-y-0 -inset-x-4 -z-10 origin-center scale-y-0 bg-alpha transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"></span>
                                <p className="uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-pure-white/70">{fact.label}</p>
                                <p className="text-right text-white/90 transition-colors duration-300 group-hover:text-pure-white">{fact.value}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                    >
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.name}
                                className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-lg text-white/70 transition-colors duration-300 hover:border-alpha hover:bg-alpha hover:text-pure-white"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
