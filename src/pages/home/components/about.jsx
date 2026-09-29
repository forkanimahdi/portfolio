import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { fadeIn } from "../../../utils/motion";
import me from "../../../assets/images/me.jpg";

const socials = [
    { icon: <FaLinkedinIn />, name: "LinkedIn", link: "https://www.linkedin.com/in/forkanimahdi/" },
    { icon: <FaGithub />, name: "GitHub", link: "https://github.com/forkanimahdi" },
    { icon: <SiGmail />, name: "Email", link: "mailto:forkanimahdi@gmail.com" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/forkanimahdi" },
];

const facts = [
    { label: "Based in", value: "Casablanca, Morocco" },
    { label: "Also", value: "Coaching young developers" },
];

export const About = () => {
    return (
        <section id="about" className="bg-dark py-24 lg:py-32">
            <div className="container grid gap-14 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
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

                    <motion.div
                        variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="mt-10 max-w-md overflow-hidden rounded-2xl border border-white/[0.06] lg:max-w-none"
                    >
                        <img className="aspect-[4/5] w-full select-none object-cover" loading="lazy" src={me} alt="Portrait of Mehdi Forkani" />
                    </motion.div>
                </div>

                <div className="lg:col-span-7 lg:pt-16">
                    <motion.div
                        variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="space-y-6 text-[15px] leading-7 text-white/65 lg:text-[17px] lg:leading-8"
                    >
                        <p>
                            Hi, I&apos;m Mehdi, a mobile &amp; web app developer based in Morocco. Most of my work starts with a
                            simple question: <span className="font-semibold italic text-white">&ldquo;Do you think we can…?&rdquo;</span>
                        </p>
                        <p>
                            I design and build production-ready web platforms and mobile apps, from polished React and React
                            Native front-ends to robust Laravel back-ends and admin dashboards. I&apos;ve partnered with startups,
                            NGOs, institutions, and leaders to turn ideas and real-world problems into products people rely on
                            every day.
                        </p>
                        <p>
                            From the first conversation to launch and beyond, I stay hands-on so the result is clear, reliable,
                            and built to scale. I also coach young developers finding their way into tech.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]"
                    >
                        {facts.map((fact) => (
                            <div key={fact.label} className="flex items-center justify-between gap-6 py-4 text-sm">
                                <p className="uppercase tracking-[0.2em] text-white/40">{fact.label}</p>
                                <p className="text-right text-white/90">{fact.value}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="mt-10 flex flex-wrap gap-3"
                    >
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.name}
                                className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-lg text-white/70 transition-colors duration-300 hover:border-alpha hover:bg-alpha hover:text-white"
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
