import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { RiCloseLine, RiMenu3Line, RiMoonLine, RiSunLine } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import AnimatedCursor from "react-animated-cursor";
import logo from "../assets/images/myLogo.png";
import blackLogo from "../assets/images/blackLogo.png";

const links = ["about", "projects", "contact"];

const socials = [
    { icon: <FaLinkedinIn />, name: "LinkedIn", link: "https://www.linkedin.com/in/forkanimahdi/" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/forkanimahdi" },
];

export const Navigation = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = nav ? "hidden" : "";
    }, [nav]);

    useEffect(() => {
        document.documentElement.classList.toggle("light", theme === "light");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const goTo = (id) => {
        setNav(false);
        if (id === "about" || id === "projects" || id === "contact") {
            navigate(`/${id}`);
        } else if (location.pathname !== "/") {
            navigate(`/#${id}`);
        } else {
            document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="hidden lg:block">
                <AnimatedCursor
                    innerSize={10}
                    outerSize={80}
                    color="256, 256, 256"
                    outerAlpha={1}
                    innerScale={0.7}
                    outerScale={0.5}
                    clickables={["a", "button", ".nav"]}
                    hasBlendMode={true}
                    outerStyle={{
                        border: "1px solid black",
                        mixBlendMode: "difference",
                    }}
                />
            </div>

            <header
                className={`fixed inset-x-0 top-0 z-[100] border-b transition-colors duration-500 ${scrolled || nav ? "border-white/[0.06] bg-black/80 backdrop-blur-md" : "border-transparent"}`}
            >
                <nav className="container flex h-20 items-center justify-between">
                    <div className="lg:flex-1">
                        <Link to="/" onClick={() => setNav(false)} className="inline-block">
                            <img src={logo} alt="Mehdi Forkani logo" className="h-[4.5rem] w-[4.5rem] object-contain light:hidden" />
                            <img src={blackLogo} alt="Mehdi Forkani logo" className="hidden h-[4.5rem] w-[4.5rem] object-contain light:block" />
                        </Link>
                    </div>

                    <ul className="hidden items-center gap-8 text-sm text-white/60 lg:flex">
                        {links.map((link) => (
                            <li key={link}>
                                <button onClick={() => goTo(link)} className="capitalize transition-colors hover:text-white">
                                    {link}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden flex-1 items-center justify-end gap-3 text-lg lg:flex">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.name}
                                className="flex h-10 w-10 items-center justify-center text-white/70 transition-colors duration-300 hover:text-white"
                            >
                                {social.icon}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle light mode"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors duration-300 hover:border-alpha hover:text-white"
                        >
                            {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
                        </button>
                    </div>

                    <div className="flex items-center gap-3 lg:hidden">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle light mode"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-lg text-white/70"
                        >
                            {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
                        </button>
                        <button onClick={() => setNav(!nav)} aria-label="Toggle menu" className="text-2xl text-white">
                            {nav ? <RiCloseLine /> : <RiMenu3Line />}
                        </button>
                    </div>
                </nav>
            </header>

            <AnimatePresence>
                {nav && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[90] flex flex-col overflow-hidden bg-black pt-20 lg:hidden"
                    >
                        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-alpha/25 blur-[100px]"></div>

                        <motion.ul
                            initial={{ y: 16, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.05 }}
                            className="container relative mt-10 flex flex-col"
                        >
                            {links.map((link, idx) => (
                                <li key={link} className="border-b border-white/[0.06]">
                                    <button onClick={() => goTo(link)} className="flex w-full items-center justify-between py-5 text-left">
                                        <span className="font-display text-3xl font-bold capitalize tracking-tight text-white">{link}</span>
                                        <span className="text-xs text-white/30">0{idx + 1}</span>
                                    </button>
                                </li>
                            ))}
                        </motion.ul>

                        <div className="container relative mt-auto flex gap-2 pb-10">
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
