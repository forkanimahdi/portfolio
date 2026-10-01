import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoArrowUp } from "react-icons/go";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import logo from "../assets/images/myLogo.png";
import blackLogo from "../assets/images/blackLogo.png";

const pages = ["home", "about", "projects", "clients", "contact"];

const socials = [
    { icon: <FaLinkedinIn />, name: "LinkedIn", link: "https://www.linkedin.com/in/forkanimahdi/" },
    { icon: <FaGithub />, name: "GitHub", link: "https://github.com/forkanimahdi" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/forkanimahdi" },
    { icon: <SiGmail aria-hidden="true" />, name: "Email", link: "mailto:forkanimahdi@gmail.com" },
];

export const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goTo = (id) => {
        if (id === "about" || id === "projects" || id === "contact") {
            navigate(`/${id}`);
        } else if (location.pathname !== "/") {
            navigate(`/#${id}`);
        } else {
            document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-white/[0.06] bg-black">
            <div className="container grid gap-12 py-16 md:grid-cols-12">
                <div className="md:col-span-6">
                    <Link to="/" onClick={scrollToTop} className="inline-flex items-center gap-3">
                        <img src={logo} alt="Mehdi Forkani logo" className="h-9 w-9 object-contain light:hidden" />
                        <img src={blackLogo} alt="Mehdi Forkani logo" className="hidden h-9 w-9 object-contain light:block" />
                        <span className="font-display text-lg font-bold uppercase tracking-wide">
                            Forkani<span className="text-alpha">.</span>
                        </span>
                    </Link>

                    <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
                        Mobile &amp; web app developer building fast, reliable products from Morocco.
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

                <div className="md:col-span-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">Pages</h3>
                    <ul className="mt-5 flex flex-col gap-3">
                        {pages.map((page) => (
                            <li key={page}>
                                <button onClick={() => goTo(page)} className="text-sm capitalize text-white/60 transition-colors hover:text-white">
                                    {page}
                                </button>
                            </li>
                        ))}
                        <li>
                            <Link to="/projects" className="text-sm text-white/60 transition-colors hover:text-white">
                                All projects
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-3">
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
