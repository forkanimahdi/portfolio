import { Link, useLocation } from "react-router-dom";
import { GoArrowUp } from "react-icons/go";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import logo from "../assets/images/myLogo.png";
import blackLogo from "../assets/images/blackLogo.png";
import { servicePages } from "../data/services";

const pages = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/#services" },
    { name: "Projects", to: "/projects" },
    { name: "Clients", to: "/#clients" },
    { name: "Contact", to: "/contact" },
];

const socials = [
    { icon: <FaLinkedinIn />, name: "LinkedIn", link: "https://www.linkedin.com/in/forkanimahdi/" },
    { icon: <FaGithub />, name: "GitHub", link: "https://github.com/forkanimahdi" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/forkanimahdi" },
    { icon: <SiGmail aria-hidden="true" />, name: "Email", link: "mailto:forkanimahdi@gmail.com" },
];

export const Footer = () => {
    const location = useLocation();

    const scrollToSection = (e, to) => {
        const [path, id] = to.split("#");
        if (location.pathname !== path) return;
        const section = id ? document.getElementById(id) : document.body;
        if (!section) return;
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-white/[0.06] bg-black">
            <div className="container grid gap-12 py-16 md:grid-cols-12">
                <div className="md:col-span-4">
                    <Link to="/" onClick={scrollToTop} aria-label="Mehdi Forkani, home" className="inline-flex items-center gap-3">
                        <img src={logo} alt="" width="36" height="30" className="h-9 w-9 object-contain light:hidden" />
                        <img src={blackLogo} alt="" width="36" height="30" className="hidden h-9 w-9 object-contain light:block" />
                        <span className="font-display text-lg font-bold uppercase tracking-wide">
                            Forkani<span className="text-alpha">.</span>
                        </span>
                    </Link>

                    <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
                        Mehdi Forkani, freelance mobile &amp; web app developer based in Casablanca, working with clients across Morocco.
                    </p>

                    <div className="mt-6 flex gap-2 text-sm">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.name}
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors duration-300 hover:border-alpha hover:bg-alpha hover:text-pure-white"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">Pages</h3>
                    <ul className="mt-5 flex flex-col gap-3">
                        {pages.map((page) => (
                            <li key={page.name}>
                                <Link
                                    to={page.to}
                                    onClick={(e) => scrollToSection(e, page.to)}
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    {page.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">Services</h3>
                    <ul className="mt-5 flex flex-col gap-3">
                        {servicePages.map((page) => (
                            <li key={page.path}>
                                <Link
                                    to={page.path}
                                    hrefLang={page.lang}
                                    lang={page.lang}
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    {page.navLabel} {page.lang === "fr" ? "(FR)" : "in Casablanca"}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">Connect</h3>
                    <ul className="mt-5 flex flex-col gap-3">
                        {socials.map((social) => (
                            <li key={social.name}>
                                <a href={social.link} target="_blank" rel="noreferrer" className="text-sm text-white/60 transition-colors hover:text-white">
                                    {social.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/[0.06]">
                <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
                    <p className="text-xs text-white/55">&copy; {new Date().getFullYear()} Mehdi Forkani. All rights reserved.</p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
                    >
                        Back to top
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-sm text-white/70 transition-colors duration-300 group-hover:border-alpha group-hover:bg-alpha group-hover:text-pure-white">
                            <GoArrowUp />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};
